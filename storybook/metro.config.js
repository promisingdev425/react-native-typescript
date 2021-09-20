const { createMetroConfiguration } = require('expo-yarn-workspaces');
// module.exports = createMetroConfiguration(__dirname);
const defaultConfig = createMetroConfiguration(__dirname);

// const { getDefaultConfig } = require('expo/metro-config');
// const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.resolverMainFields = [
  'sbmodern',
  ...defaultConfig.resolver.resolverMainFields,
];
defaultConfig.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: false,
  },
});
defaultConfig.watchFolders = [...defaultConfig.watchFolders, './.storybook'];
module.exports = defaultConfig;

