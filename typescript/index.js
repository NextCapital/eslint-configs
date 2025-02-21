const js = require('@eslint/js');
const ts = require('typescript-eslint');
const tsParser = require('@typescript-eslint/parser');

const stylistic = require('@stylistic/eslint-plugin');

module.exports = [
  {
    name: 'Default TS Recommended Rules ON',
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2016,
        sourceType: 'module',

        requireConfigFile: false
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      reportUnusedInlineConfigs: 'error'
    },
    files: [
      '**/*.{ts,tsx}'
    ],
    ignores: [
      '.git/',
      '**/node_modules/',
      '**/build/',
      '**/dist/',
      '**/ts-output/'
    ],
    rules: js.configs.recommended.rules
  },
  ...ts.configs.recommended,
  {
    name: '@stylistic - Disable all legacy rules',
    ...stylistic.configs['disable-legacy']
  },
  {
    name: '@stylistic - Enable recommended style rules',
    ...stylistic.configs['recommended-flat']
  },
  ...([
    '@nextcapital/eslint-config/base/flat/best-practices',
    '@nextcapital/eslint-config/base/flat/errors',
    '@nextcapital/eslint-config/base/flat/node',
    '@nextcapital/eslint-config/base/flat/style',
    '@nextcapital/eslint-config/base/flat/variables',
    '@nextcapital/eslint-config/base/flat/es6',
    '@nextcapital/eslint-config/base/flat/imports',
    '@nextcapital/eslint-config/base/flat/strict'
  ].reduce(
    // eslint-disable-next-line import/no-dynamic-require,n/global-require
    (p, c) => p.concat(require(c)),
    []
  )),
  ...([
    './base/style'
  ].reduce(
    // eslint-disable-next-line import/no-dynamic-require,n/global-require
    (p, c) => p.concat(require(c)),
    []
  )),
  {
    name: 'Test file specific rules',
    files: [
      '**/*.{spec,test}.{ts,tsx}'
    ],
    rules: {
      'no-multi-assign': 'off'
    }
  }
];
