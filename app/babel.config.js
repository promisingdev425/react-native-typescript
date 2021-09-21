module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'babel-plugin-styled-components',
      'import-graphql',
      [
        'module:react-native-dotenv',
        {
          safe: true,
          allowUndefined: true,
        },
      ],
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          alias: {
            '~': './src',
          },
        },
      ],
    ],
  }
}
