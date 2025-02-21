const pluginJSDoc = require('eslint-plugin-jsdoc');

const nextcapitalJSDoc = require('./flat/rules');

module.exports = [
  {
    name: '@nextcapital/eslint-config/jsdoc - settings setup',
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
    plugins: {
      jsdoc: pluginJSDoc
    }
  },
  {
    name: '@nextcapital/eslint-config/jsdoc - Enable plugin recommended rules as errors',
    ...pluginJSDoc.configs['flat/recommended-error']
  },
  ...nextcapitalJSDoc,
  {
    name: '@nextcapital/eslint-config/jsdoc - Disable require-jsdoc in test files',
    files: [
      '**/*.{spec,test}.{js,mjs,cjs,jsx}',
      '**/*.{spec,test}.{js,mjs,cjs,jsx}'
    ],
    rules: {
      'jsdoc/require-jsdoc': 'off'
    }
  }
];
