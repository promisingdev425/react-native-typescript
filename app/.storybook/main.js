const path = require('path')

const package = (p) => `../src${p ? '/' + p : ''}/**/*.stories.(mdx|tsx)`

module.exports = {
  stories: [
    // Intro
    '../src/Welcome.stories.mdx',
    '../src/storybook-utils/Storybook.stories.mdx',
    // Packages in a specific order
    package('components/core'),
    package('components/composite'),
    package('pages'),
    package('theme'),
    package('services'),
    package('utils'),
    package('test'),
    // Anything else
    package(),
  ],
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
