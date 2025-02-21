const babelParser = require('@babel/eslint-parser');
const js = require('@eslint/js');
const stylistic = require('@stylistic/eslint-plugin');

module.exports = [
  {
    name: 'Default JS All Rules ON',
    languageOptions: {
      parser: babelParser,
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
      '**/*.{js,mjs,cjs,jsx}'
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
  {
    name: '@stylistic - Disable all legacy rules',
    ...stylistic.configs['disable-legacy']
  },
  {
    name: '@stylistic - Enable all style rules',
    ...stylistic.configs['recommended-flat']
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
    // eslint-disable-next-line import/no-dynamic-require,n/global-require
    (p, c) => p.concat(require(c)),
    []
  )),
  {
    name: 'Test file specific rules',
    files: [
      '**/*.{spec,test}.{js,mjs,cjs,jsx}'
    ],
    rules: {
      'no-multi-assign': 'off'
    }
  }
];
