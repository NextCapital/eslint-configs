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
    '../eslint-config/base-rules/flat/best-practices',
    '../eslint-config/base-rules/flat/errors',
    '../eslint-config/base-rules/flat/node',
    '../eslint-config/base-rules/flat/style',
    '../eslint-config/base-rules/flat/variables',
    '../eslint-config/base-rules/flat/es6',
    '../eslint-config/base-rules/flat/imports',
    '../eslint-config/base-rules/flat/strict'
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
