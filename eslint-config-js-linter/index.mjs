
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  ...compat.extends('airbnb-base'),
  {
    languageOptions: {
      globals: {},
      ecmaVersion: 'latest',
      sourceType: 'module'
    },

    rules: {
      'arrow-parens': ['error', 'always'],
      'class-methods-use-this': 'off',
      'comma-dangle': ['error', 'never'],
      'consistent-return': 'off',
      'function-paren-newline': 'off',
      'no-console': ['error'],
      'no-continue': 'off',

      'no-else-return': ['error', {
          allowElseIf: true,
      }],

      'no-multiple-empty-lines': ['error', {
          max: 1,
          maxBOF: 0,
          maxEOF: 0,
      }],

      'no-loop-func': 'off',
      'no-template-curly-in-string': 'error',
      'no-underscore-dangle': 'off',

      'object-curly-newline': ['error', {
          consistent: true,
          minProperties: 4,
          multiline: true,
      }],

      'one-var': 'off',
      'one-var-declaration-per-line': ['error', 'always'],
      'operator-linebreak': ['error', 'after'],
      'prefer-destructuring': 'off',

      'semi': ['error', 'always'],
      'space-before-function-paren': ['error', {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always',
      }],

      'import/extensions': ['error', 'never'],
      'import/no-extraneous-dependencies': 'error',
      'import/no-unresolved': 'off'
    },
  }, {
    files: ['**/*.test.js', '**/*.test.jsx'],

    rules: {
      'no-multi-assign': 'off',
      'one-var-declaration-per-line': 'off'
    }
  }
];
