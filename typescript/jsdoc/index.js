const jsJSDocConfig = require('@nextcapital/eslint-config/jsdoc');

module.exports = [
  ...jsJSDocConfig,
  {
    name: '@nextcapital/eslint-config-typescript/jsdoc - settings setup',
    files: [
      '**/*.{ts,tsx}'
    ]
  },
  {
    name: '@nextcapital/eslint-config-typescript/jsdoc - rules',
    rules: {
      'jsdoc/require-param': 'off',
      'jsdoc/require-returns': 'off',
      'jsdoc/valid-types': 'off'
    }
  }
];
