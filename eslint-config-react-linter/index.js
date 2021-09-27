module.exports = {
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],

  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },

  rules: {
    'react/destructuring-assignment': 'off',
    'react/jsx-curly-spacing': [2, { 'when': 'always' }],
    'react/require-default-props': 'off',

    'jsx-a11y/alt-text': 1,
    'jsx-a11y/anchor-is-valid': 1,
    'jsx-a11y/click-events-have-key-events': 1,
    'jsx-a11y/iframe-has-title': 1,
    'jsx-a11y/interactive-supports-focus': 1,
    'jsx-a11y/media-has-caption': 1,
    'jsx-a11y/no-autofocus': 1,
    'jsx-a11y/no-noninteractive-tabindex': 1,
    'jsx-a11y/no-static-element-interactions': 1
  },

  overrides: [{
    files: [
      '**/*.test.js',
      '**/*.test.jsx'
    ],
    rules: {
      'jsx-a11y/anchor-is-valid': 'off'
    }
  }]
};
