const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

config.transformer.babelTransformerPath =
  require.resolve("react-native-svg-transformer");

config.resolver.assetExts = config.resolver.assetExts
  .filter((ext) => ext !== "svg")
  .concat("lottie");

if (!config.resolver.sourceExts.includes("svg")) {
  config.resolver.sourceExts.push("svg");
}

module.exports = withNativeWind(config, {
  input: "./src/global.css",
  transformer: "swc",
});
