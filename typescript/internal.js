const config = require('@nextcapital/eslint-config');

module.exports = [
  ...config,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
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
