// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add support for 3D model files
config.resolver.assetExts.push('obj', 'mtl', 'gltf', 'glb');

module.exports = config;