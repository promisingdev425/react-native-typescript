module.exports = {
  extends: ['react-app'],
  plugins: ['jest'],
  env: {},
  rules: {
    'default-case': 0,
    'no-sequences': 0,
    'jest/no-disabled-tests': 0,
    'jest/no-focused-tests': 0,
    'jest/no-identical-title': 0,
  },
  globals: {
    any: 'readonly',
  },
}
