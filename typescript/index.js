const js = require('@eslint/js');
const ts = require('typescript-eslint');
const tsParser = require('@typescript-eslint/parser');

const stylistic = require('@stylistic/eslint-plugin');
const nodePlugin = require('eslint-plugin-n');

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
    plugins: {
      n: nodePlugin
    },
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
    '@nextcapital/eslint-config/base-rules/flat/best-practices',
    '@nextcapital/eslint-config/base-rules/flat/errors',
    '@nextcapital/eslint-config/base-rules/flat/node',
    '@nextcapital/eslint-config/base-rules/flat/style',
    '@nextcapital/eslint-config/base-rules/flat/variables',
    '@nextcapital/eslint-config/base-rules/flat/es6',
    '@nextcapital/eslint-config/base-rules/flat/imports',
    '@nextcapital/eslint-config/base-rules/flat/strict'
  ].reduce(
    // eslint-disable-next-line import/no-dynamic-require,n/global-require
    (p, c) => p.concat(require(c)),
    []
  )),
  ...([
    './base-rules/style'
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
