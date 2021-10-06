module.exports = {
  extends: [
    'airbnb-base'
  ],

  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },

  plugins: ['babel'],

  rules: {
    'arrow-parens': ['error', 'always'],
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'never'],
    'consistent-return': 'off',
    'function-paren-newline': 'off',
    'no-console': ['error'],
    'no-continue': 'off',
    'no-else-return': ['error', { allowElseIf: true }],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 0, "maxEOF": 0 }],
    'no-loop-func': 'off',
    'no-template-curly-in-string': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': ['error', {
      'consistent': true,
      'minProperties': 4,
      'multiline': true
    }],
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-linebreak': ['error', 'after'],
    'prefer-destructuring': 'off',
    'space-before-function-paren': [
      'error', {'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always'}
    ],

    'babel/semi': 2,

    'import/extensions': ['error', 'ignorePackages'],
    'import/no-extraneous-dependencies': 1,
    'import/no-unresolved': 'off'
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
