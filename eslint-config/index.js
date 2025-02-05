const js = require('@eslint/js');
const stylistic = require('@stylistic/eslint-plugin');
const nodePlugin = require("eslint-plugin-n")

module.exports = [
  {
    name: 'Default JS All Rules ON',
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
    plugins: {
      n: nodePlugin
    },
    rules: js.configs.all.rules
  },
  {
    name: '@stylistic - Disable all legacy rules',
    ...stylistic.configs['disable-legacy'],
  },
  {
    name: '@stylistic - Enable all style rules',
    ...stylistic.configs['all-flat']
  },
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
    name: 'Test file specific rules',
    files: [
      '**/*.test.js',
      '**/*.test.jsx'
    ],
    rules: {
      'no-multi-assign': 'off'
    }
  }
];
