const config = require('./index');

module.exports = [
  ...config,
  {
    files: ['**/react/rules.js'],
    rules: {
      'sort-keys': 'error'
    }
  }
];
