const babelParser = require('@babel/eslint-parser');

const pluginJest = require('eslint-plugin-jest');

const nextcapitalJest = require('./flat/rules');

module.exports = [
  {
    name: 'Jest Plugin Setup',
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
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
    name: 'jest - Enable all rules',
    ...pluginJest.configs['flat/recommended']
  },
  ...nextcapitalJest
];
