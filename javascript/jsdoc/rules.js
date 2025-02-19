module.exports = {
  rules: {
    'jsdoc/check-examples': 'warn',

    'jsdoc/informative-docs': 'warn',

    'jsdoc/no-bad-blocks': 'warn',
    'jsdoc/no-blank-blocks': 'warn',
    'jsdoc/no-defaults': 'off',
    'jsdoc/no-undefined-types': 'off',

    'jsdoc/require-asterisk-prefix': 'warn',
    'jsdoc/require-description-complete-sentence': 'warn',

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
