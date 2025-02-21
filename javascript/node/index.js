const nodePlugin = require('eslint-plugin-n');

const nextcapitalNode = require('./flat/rules');

module.exports = [
  nodePlugin.configs['flat/recommended-script'],
  {
    name: '@nextcapital/eslint-config/node - settings setup',
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
    ]
  },
  ...nextcapitalNode
];
