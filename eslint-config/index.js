import js from "@eslint/js";

module.exports = [
  ...js.configs.all,
  ...([
    './base-rules/flat/best-practices',
    './base-rules/flat/errors',
    './base-rules/flat/node',
    './base-rules/flat/style',
    './base-rules/flat/variables',
    './base-rules/flat/es6',
    './base-rules/flat/imports',
    './base-rules/flat/strict',
  ].reduce((p, c) => p.concat(require(c)), [])), // eslint-disable-line global-require, import/no-dynamic-require
  {
    env: {
      es6: true
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2016,
        sourceType: 'module'
      }
    },
    files: [
      '**/*.{js,mjs,cjs,jsx}'
    ],
    ignores: [
      '.git/',
      '**/node_modules/',
      '**/build/',
      '**/dist/',
      '**/ts-output/'
    ]
  },
  {
    files: [
      '**/*.test.js',
      '**/*.test.jsx'
    ],
    rules: {
      'no-multi-assign': 'off'
    }
  }
];
