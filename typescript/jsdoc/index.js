const jsJSDocConfig = require('@nextcapital/eslint-config/jsdoc');

module.exports = [
  ...jsJSDocConfig,
  {
    files: [
      '**/*.{ts,tsx}'
    ]
  },
  {
    rules: {
      'jsdoc/require-param': 'off',
      'jsdoc/require-returns': 'off',
      'jsdoc/valid-types': 'off'
    }
  }
];
