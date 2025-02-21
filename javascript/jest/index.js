const pluginJest = require('eslint-plugin-jest');

const nextcapitalJest = require('./flat/rules');

module.exports = [
  {
    name: '@nextcapital/eslint-config/jest - settings setup',
    languageOptions: {
      globals: pluginJest.environments.globals.globals
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      reportUnusedInlineConfigs: 'error'
    },
    files: [
      '**/*.{spec,test}.{js,mjs,cjs,jsx}'
    ],
    ignores: [
      '.git/',
      '**/node_modules/',
      '**/build/',
      '**/dist/',
      '**/ts-output/'
    ],
    plugins: {
      jest: pluginJest
    }
  },
  {
    name: '@nextcapital/eslint-config/jest - Enable plugin recommended rules',
    ...pluginJest.configs['flat/recommended']
  },
  ...nextcapitalJest
];
