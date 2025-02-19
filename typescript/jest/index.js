const tsParser = require('@typescript-eslint/parser');

const jsJestConfig = require('../../eslint-config/jest/index');

module.exports = [
  ...jsJestConfig,
  {
    languageOptions: {
      parser: tsParser
    },
    files: [
      '**/*.{spec,test}.{ts,tsx}'
    ]
  },
  {
    rules: {
      'jest/unbound-method': 'off'
    }
  }
];
