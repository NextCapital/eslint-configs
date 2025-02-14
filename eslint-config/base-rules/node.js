module.exports = {
  env: {
    node: true
  },

  rules: {
    // enforce return after a callback
    'callback-return': 'off',

    // require all requires be top-level
    'n/global-require': 'error',

    // enforces error handling in callbacks (node environment)
    'handle-callback-err': 'off',

    // disallow use of the Buffer() constructor
    'no-buffer-constructor': 'error',

    // disallow mixing regular variable and require declarations
    'no-mixed-requires': ['off', false],

    // disallow use of new operator with the require function
    'n/no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    'n/no-path-concat': 'error',

    // disallow use of process.env
    'no-process-env': 'off',

    // disallow process.exit()
    'no-process-exit': 'off',

    // restrict usage of specified node modules
    'no-restricted-modules': 'off',

    // disallow use of synchronous methods (off by default)
    'no-sync': 'off'
  }
};
