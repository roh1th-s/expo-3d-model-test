/* eslint-disable @typescript-eslint/no-require-imports */
import { OrbitControls } from "@react-three/drei/native";
import { Canvas } from "@react-three/fiber/native";
import React, { Suspense, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { useAssets } from "expo-asset";
import { GLTFLoader } from "three-stdlib/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export default function CarModel() {
	return (
		<View style={styles.container}>
			<Canvas camera={{ position: [0, 1, 3], fov: 60 }} style={{ height: 300, width: "100%" }}>
				{/* Lighting */}
				<ambientLight intensity={0.7} />
				<directionalLight position={[10, 10, 5]} intensity={1} />
				<Suspense fallback={null}>
					<GltfModel />
				</Suspense>
				<OrbitControls />
			</Canvas>
		</View>
	);
}

function GltfModel() {
	const [model, setModel] = useState(null);

	const [assets, error] = useAssets([require("../../assets/models/Bread_Slice_Bread_0.glb")]);

	useEffect(() => {
		async function loadAsset() {
			if (!assets) {
				if (error) {
					console.error("Error loading assets:", error);
				}
				return;
			}
			try {
				const loader = new GLTFLoader();
				const model = await loader.loadAsync(assets[0].uri);
				setModel(model.scene as any);
			} catch (error) {
				console.error("Error loading model:", error);
			}
		}
		loadAsset();
	}, [assets, error]);

	if (!model) return null;

	return <primitive object={model} scale={0.5} />;
}

function ObjModel() {
	const [model, setModel] = useState(null);

	const [assets, error] = useAssets([require("../../assets/models/Car.obj"), require("../../assets/models/Car.mtl")]);

	useEffect(() => {
		async function loadAsset() {
			if (!assets) return;
			try {
				const loader = new OBJLoader();
				const model = await loader.loadAsync(assets[0].uri);
				setModel(model as any);
			} catch (error) {
				console.error("Error loading model:", error);
			}
		}
		loadAsset();
	}, [assets]);

	if (!model) return null;

	// Use the loaded model directly
	return <primitive object={model} scale={0.5} />;
}

const styles = StyleSheet.create({
	container: {
		height: "100%",
		width: "100%",
		backgroundColor: "#222",
		borderRadius: 12,
		overflow: "hidden",
		marginVertical: 16,
	},
});
