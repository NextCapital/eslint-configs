module.exports = {
  rules: {
    'jsdoc/check-examples': 'off',

    'jsdoc/informative-docs': 'warn',

    'jsdoc/no-bad-blocks': 'warn',
    'jsdoc/no-blank-blocks': 'warn',
    'jsdoc/no-defaults': 'off',
    'jsdoc/no-undefined-types': 'off',

    'jsdoc/reject-any-type': 'off',
    'jsdoc/reject-function-type': 'off',

    'jsdoc/require-asterisk-prefix': 'warn',
    'jsdoc/require-description-complete-sentence': 'warn',
    'jsdoc/require-next-type': 'off',
    'jsdoc/require-throws-type': 'off',
    'jsdoc/require-yields-type': 'off',

    'jsdoc/sort-tags': 'warn',

    'jsdoc/tag-lines': [
      'error',
      'any',
      {
        startLines: 1
      }
    ]
  }
};
