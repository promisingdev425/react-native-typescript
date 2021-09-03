const { createWebpackConfigAsync } = require('expo-yarn-workspaces/webpack')

// This file enables importing components from this subpackage into the `storybook/` subpackage.
module.exports = async function (env, argv) {
  const config = await createWebpackConfigAsync(env, argv)

  // Add mjs file handling which is required by @graphql-tools
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto',
  })
  return config
}
