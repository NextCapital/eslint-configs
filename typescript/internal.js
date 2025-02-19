const config = require('./index');

module.exports = [
  ...config,
  // {
  //   files: [],
  //   rules: {
  //     'sort-keys': 'error'
  //   }
  // },
  {
    files: [
      'index.js',
      'internal.js',
      'jest/index.js',
      'jsdoc/index.js',
      'react/index.js'
    ],
    rules: {
      '@typescript-eslint/no-require-imports': 'off'
    }
  }
];
