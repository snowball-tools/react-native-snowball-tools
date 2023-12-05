const path = require("path");

module.exports = function (config) {
  config.resolver.extraNodeModules.crypto = require.resolve(
    "react-native-quick-crypto",
  );
  config.resolver.extraNodeModules.stream =
    require.resolve("stream-browserify");
  config.resolver.resolveRequest = (
    context,
    moduleName,
    platform,
    moduleNameLookups,
  ) => {
    // Restrict to rewriting 'webcrypto.js' only when required by 'jose'
    if (
      moduleName.includes("webcrypto.js") &&
      context.originModulePath.includes("/node_modules/jose/")
    ) {
      return {
        type: "sourceFile",
        filePath: path.resolve(__dirname, "webcrypto.js"),
      };
    }
    // Restrict to rewriting 'nacl.js' only when required by '@lit-protocol/nacl'
    if (moduleName === "@lit-protocol/nacl") {
      return {
        type: "sourceFile",
        filePath: path.resolve(__dirname, "nacl.js"),
      };
    }
	// Restrict to rewriting 'micro-ftch.js' only when required by 'micro-ftch'
	if (moduleName === "micro-ftch") {
		  return {
			type: "sourceFile",
			filePath: path.resolve(__dirname, "micro-ftch.js"),
	 	 };	
	}
    // Fall back to Metro's default resolver for all other modules
    return context.resolveRequest(
      context,
      moduleName,
      platform,
      moduleNameLookups,
    );
  };
  return config;
};
