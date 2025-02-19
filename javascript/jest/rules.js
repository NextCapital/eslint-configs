module.exports = {
  rules: {
    'jest/consistent-test-it': ['error', {
      fn: 'test',
      withinDescribe: 'test'

    }],

    'jest/no-hooks': 'off',
    'jest/no-large-snapshots': ['error', { maxSize: 100 }],

    'jest/padding-around-all': 'off',

    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-importing-jest-globals': 'off',
    'jest/prefer-lowercase-title': ['error', { ignoreTopLevelDescribe: true }],
    'jest/prefer-strict-equal': 'off',
    'jest/prefer-to-have-length': 'error',

    'jest/require-to-throw-message': 'off'
  }
};
