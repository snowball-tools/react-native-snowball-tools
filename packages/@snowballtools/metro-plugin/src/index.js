module.exports = function (config) {
  config.resolver.extraNodeModules.crypto = require.resolve(
    "react-native-quick-crypto",
  );
  config.resolver.extraNodeModules.stream =
    require.resolve("stream-browserify");
  return config;
};
