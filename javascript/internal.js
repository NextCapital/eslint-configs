const config = require('./index');

module.exports = [
  ...config,
  {
    files: [
      '**/base-rules/best-practices.js',
      '**/base-rules/errors.js',
      '**/base-rules/es6.js',
      '**/base-rules/imports.js',
      '**/base-rules/node.js',
      '**/base-rules/strict.js',
      '**/base-rules/style.js',
      '**/base-rules/variables.js',

      '**/jest/rules.js',

      '**/jsdoc/rules.js',

      '**/react/jsx-a11y.js',
      '**/react/rules.js'
    ],
    rules: {
      'sort-keys': 'error'
    }
  }
];
