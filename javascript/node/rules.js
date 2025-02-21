module.exports = {
  rules: {
    // require all requires be top-level
    'n/global-require': 'error',

    // disallow use of new operator with the require function
    'n/no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    'n/no-path-concat': 'error'
  }
};
