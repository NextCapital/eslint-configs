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
    'jsdoc/check-access': 'error',
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-examples': 'off',
    'jsdoc/check-indentation': 'off',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-syntax': 'off',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/check-values': 'error',
    'jsdoc/empty-tags': 'error',
    'jsdoc/implements-on-classes': 'error',
    'jsdoc/match-description': 'off',
    'jsdoc/no-defaults': 'off',
    'jsdoc/no-types': 'off',
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/require-description': 'off',
    'jsdoc/require-description-complete-sentence': 'off',
    'jsdoc/require-example': 'off',
    'jsdoc/require-hyphen-before-param-description': 'off',
    'jsdoc/require-jsdoc': 'error',
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-returns': 'error',
    'jsdoc/require-returns-check': 'error',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-returns-type': 'error',
    'jsdoc/tag-lines': [
      'error',
      'any',
      {
        startLines: 1,
      },
    ],
    'jsdoc/valid-types': 'error'
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
