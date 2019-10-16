module.exports = {
  extends: [
    'plugin:jsdoc/recommended'
  ],

  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: ['jsdoc'],

  rules: {
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/no-undefined-types': 'off'
  },
  overrides: [{
    files: [
      '**/*.test.js',
      '**/*.test.jsx'
    ],
    rules: {
      'jsdoc/require-jsdoc': 'off'
    }
  }]
};
