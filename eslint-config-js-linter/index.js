module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },

  overrides: [{
    files: [
      '**/*.test.js',
      '**/*.test.jsx'
    ],
    rules: {
      'no-multi-assign': 'off'
    }
  }]
};
