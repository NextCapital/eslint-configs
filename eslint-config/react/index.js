const babelParser = require('@babel/eslint-parser');
const globals = require('globals');

const pluginReact = require('eslint-plugin-react');
const jsxA11y = require('eslint-plugin-jsx-a11y');

const nextcapitalReact = require('./flat/rules');

module.exports = [
  {
    name: 'React Plugin Setup',
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2016,
        sourceType: 'module',

        jsx: true,
        requireConfigFile: false,
        ...pluginReact.configs.flat.recommended.languageOptions
      },
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
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
    ],
    plugins: {
      'jsx-a11y': jsxA11y,
      react: pluginReact
    }
  },
  {
    name: 'React - Enable recommended rules as errors',
    ...pluginReact.configs.flat.recommended, // This is not a plugin object, but a shareable config object
    ...pluginReact.configs.flat['jsx-runtime'], // Add this if you are using React 17+
  },
  jsxA11y.flatConfigs.recommended,
  ...nextcapitalReact,
  {
    files: [
      '**/*.{spec,test}.{js,mjs,cjs,jsx}',
      '**/*.{spec,test}.{js,mjs,cjs,jsx}'
    ],
    rules: {
      'jsx-a11y/anchor-is-valid': 'off'
    }
  }
];
