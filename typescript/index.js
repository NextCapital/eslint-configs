const js = require('@eslint/js');
const ts = require('typescript-eslint');

const stylistic = require('@stylistic/eslint-plugin');

module.exports = [
  {
    name: '@nextcapital/eslint-config-typescript - settings setup',
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
    ]
  },
  {
    name: '@nextcapital/eslint-config-typescript - Enable eslint recommended JS rules as base',
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
    // eslint-disable-next-line import/no-dynamic-require
    (p, c) => p.concat(require(c)),
    []
  )),
  {
    name: '@nextcapital/eslint-config-typescript - Disable duplicate JS rules',
    rules: {
      'no-unused-vars': 'off'
    }
  },
  ...([
    './base/style'
  ].reduce(
    // eslint-disable-next-line import/no-dynamic-require
    (p, c) => p.concat(require(c)),
    []
  )),
  {
    name: '@nextcapital/eslint-config-typescript/base - Test file specific rules',
    files: [
      '**/*.{spec,test}.{ts,tsx}'
    ],
    rules: {
      'no-multi-assign': 'off'
    }
  }
];
