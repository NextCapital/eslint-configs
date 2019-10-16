module.exports = {
  extends: [
    'plugin:jest/all',
  ],

  env: {
    es6: true,
    'jest': true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: ['jest'],

  rules: {
    'jest/consistent-test-it': ['error', {'fn': 'test'}],
    'jest/lowercase-name': 'off',
    'jest/no-alias-methods': 'off',
    'jest/no-hooks': 'off',
    'jest/no-large-snapshots': 'off',
    'jest/no-test-callback': 'off',
    'jest/prefer-called-with': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-inline-snapshots': 'off',
    'jest/prefer-strict-equal': 'off',
    'jest/prefer-to-have-length': 'warn',
    'jest/require-tothrow-message': 'off',
    'jest/valid-expect-in-promise': 'off',
  }
};
