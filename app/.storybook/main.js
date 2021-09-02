const path = require("path");

module.exports = {
  stories: ['../src/**/*.stories.mdx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-addon-styled-components-themes/register'],
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
