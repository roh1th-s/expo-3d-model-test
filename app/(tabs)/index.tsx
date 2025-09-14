import { StyleSheet, View } from "react-native";


import CarModel from "@/components/three/CarModel";

export default function HomeScreen() {
	return (
		<View
			style={{
				backgroundColor: "#A1CEDC",
				padding: 16,
        height: "100%",
			}}
		>
			<CarModel />
		</View>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
});
