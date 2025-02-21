const pluginJSDoc = require('eslint-plugin-jsdoc');

const nextcapitalJSDoc = require('./flat/rules');

module.exports = [
  {
    name: 'JSDoc Plugin Setup',
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
    name: 'JSDdoc - Enable recommended rules as errors',
    ...pluginJSDoc.configs['flat/recommended-error']
  },
  ...nextcapitalJSDoc,
  {
    files: [
      '**/*.{spec,test}.{js,mjs,cjs,jsx}',
      '**/*.{spec,test}.{js,mjs,cjs,jsx}'
    ],
    rules: {
      'jsdoc/require-jsdoc': 'off'
    }
  }
];
