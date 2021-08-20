const fs = require('fs')

const prettierOptions = JSON.parse(fs.readFileSync('./.prettierrc.json', 'utf8'))

module.exports = {
  parser: 'babel-eslint',
  extends: ['./app/.eslintrc.js', 'airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'json', 'react', 'react-hooks'],
  env: {
    es6: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        map: [['~', './app/src']],
      },
      node: {
        moduleDirectory: ['node_modules', 'app'],
        extensions: ['.js', '.json', '.android.js', '.ios.js'],
      },
    },
  },
  globals: {
    __CLIENT__: true,
    __SERVER__: true,
    __DEV__: true,
    fetch: true,
    window: true,
  },
  rules: {
    'arrow-body-style': 'off',
    'brace-style': ['error', '1tbs'],
    'func-names': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'prettier/prettier': ['error', prettierOptions],
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-default-props': 'error',
    'react/no-unused-prop-types': 'error',
    'react/sort-prop-types': [
      'error',
      {
        callbacksLast: true,
      },
    ],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },
}
