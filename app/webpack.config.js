const { createWebpackConfigAsync } = require('expo-yarn-workspaces/webpack')

// This file enables importing components from this subpackage into the `storybook/` subpackage.
module.exports = async function (env, argv) {
  const config = await createWebpackConfigAsync(env, argv)
  return config
}
