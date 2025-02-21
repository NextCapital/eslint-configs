// eslint-disable-next-line import/no-extraneous-dependencies
const babelParser = require('@babel/eslint-parser');

const config = require('@nextcapital/eslint-config');

module.exports = [
  ...config,
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2016,
        sourceType: 'module',

        requireConfigFile: false
      }
    }
  },
  {
    files: [
      'base/style.js'
    ],
    rules: {
      'sort-keys': 'error'
    }
  }
];
