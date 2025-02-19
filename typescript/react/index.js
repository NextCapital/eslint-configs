const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');

const pluginReact = require('eslint-plugin-react');
const jsxA11y = require('eslint-plugin-jsx-a11y');

const stylisticJsx = require('@stylistic/eslint-plugin-jsx');

const nextcapitalReact = require('../../javascript/react/flat/rules');

module.exports = [
  {
    name: 'React TS Plugin Setup',
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2016,
        sourceType: 'module',

        jsx: true,
        requireConfigFile: false,
        ...pluginReact.configs.flat.recommended.languageOptions
      },
      globals: {
        ...globals.serviceworker,
        ...globals.browser
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      reportUnusedInlineConfigs: 'error'
    },
    files: [
      '**/*.{ts,tsx}'
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
      react: pluginReact,
      '@stylistic/jsx': stylisticJsx
    }
  },
  {
    name: 'React - Enable recommended rules as errors',
    ...pluginReact.configs.flat.recommended,
    ...pluginReact.configs.flat['jsx-runtime'] // Add this if you are using React 17+
  },
  jsxA11y.flatConfigs.recommended,
  {
    name: '@stylistic - Disable all legacy rules',
    ...stylisticJsx.configs['disable-legacy']
  },
  {
    name: '@stylistic - Enable all JSX rules',
    ...stylisticJsx.configs['all-flat']
  },
  ...nextcapitalReact,
  {
    rules: {
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/jsx-props-no-multi-spaces': 'off',
      'react/static-property-placement': ['error', 'static public field']
    }
  },
  {
    files: [
      '**/*.{spec,test}.{ts,tsx}'
    ],
    rules: {
      'jsx-a11y/anchor-is-valid': 'off'
    }
  }
];
