const tsParser = require('@typescript-eslint/parser');

const jsJSDocConfig = require('../../javascript/jsdoc/index');

module.exports = [
  ...jsJSDocConfig,
  {
    languageOptions: {
      parser: tsParser
    },
    files: [
      '**/*.{ts,tsx}'
    ]
  },
  {
    rules: {
      'jsdoc/require-param': 'off',
      'jsdoc/require-returns': 'off',
      'jsdoc/valid-types': 'off'
    }
  }
];
