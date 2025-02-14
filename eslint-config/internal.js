const config = require('./index');

module.exports = [
  ...config,
  {
    files: [
      '**/jsdoc/rules.js',
      '**/react/jsx-a11y.js',
      '**/react/rules.js'
    ],
    rules: {
      'sort-keys': 'error'
    }
  }
];
