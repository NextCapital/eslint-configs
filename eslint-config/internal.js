const config = require('./index');

module.exports = [
  ...config,
  {
    files: [
      '**/react/jsx-a11y.js',
      '**/react/rules.js'
    ],
    rules: {
      'sort-keys': 'error'
    }
  }
];
