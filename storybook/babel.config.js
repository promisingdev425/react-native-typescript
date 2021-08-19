module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-env', '@babel/preset-react'],
    plugins: [
      ['module:react-native-dotenv', {
        safe: true,
        allowUndefined: true,
      }],
      ['module-resolver', {
        'alias': {
          '~': '../app/src',
        }
      }]
    ]
  };
};
