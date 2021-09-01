const path = require("path");

module.exports = {
  stories: ['../src/**/*.stories.mdx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '~': path.resolve(__dirname, '../src/'),
      },
    },
  }),
}
