const config = require('./index');

module.exports = [
  ...config,
  {
    files: [
      '**/base/best-practices.js',
      '**/base/errors.js',
      '**/base/es6.js',
      '**/base/imports.js',
      '**/base/node.js',
      '**/base/strict.js',
      '**/base/style.js',
      '**/base/variables.js',

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
