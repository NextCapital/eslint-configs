const js = require('@eslint/js');
const stylistic = require('@stylistic/eslint-plugin');

module.exports = [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2016,
        sourceType: 'module'
      }
    },
    files: [
      '**/*.{js,mjs,cjs,jsx}'
    ],
    ignores: [
      '.git/',
      '**/node_modules/',
      '**/build/',
      '**/dist/',
      '**/ts-output/'
    ],
    rules: js.configs.all.rules
  },
  stylistic.configs['disable-legacy'],
  stylistic.configs['all-flat'],
  ...([
    './base-rules/flat/best-practices',
    './base-rules/flat/errors',
    './base-rules/flat/node',
    './base-rules/flat/style',
    './base-rules/flat/variables',
    './base-rules/flat/es6',
    './base-rules/flat/imports',
    './base-rules/flat/strict'
  ].reduce(
    (p, c) => p.concat(require(c)),
    []
  )),
  {
    files: [
      '**/*.test.js',
      '**/*.test.jsx'
    ],
    rules: {
      'no-multi-assign': 'off'
    }
  }
];
