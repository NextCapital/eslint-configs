const globals = require('globals');

const pluginReact = require('eslint-plugin-react');
const jsxA11y = require('eslint-plugin-jsx-a11y');

const stylistic = require('@stylistic/eslint-plugin');

const nextcapitalReactA11y = require('@nextcapital/eslint-config/react/flat/jsx-a11y');
const nextcapitalReactRules = require('@nextcapital/eslint-config/react/flat/rules');

module.exports = [
  {
    name: '@nextcapital/eslint-config-typescript/react - settings setup',
    languageOptions: {
      parserOptions: {
        jsx: true,
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
      react: pluginReact,
      '@stylistic': stylistic
    }
  },
  {
    name: '@nextcapital/eslint-config-typescript/react - Enable plugin recommended rules as errors',
    ...pluginReact.configs.flat.recommended,
    ...pluginReact.configs.flat['jsx-runtime'] // Add this if you are using React 17+
  },
  jsxA11y.flatConfigs.recommended,
  ...nextcapitalReactRules,
  ...nextcapitalReactA11y,
  {
    name: '@nextcapital/eslint-config-typescript/react - rules',
    rules: {
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/jsx-props-no-multi-spaces': 'off',
      'react/static-property-placement': ['error', 'static public field']
    }
  },
  {
    name: '@nextcapital/eslint-config-typescript/react - Test file rules',
    files: [
      '**/*.{spec,test}.{ts,tsx}'
    ],
    rules: {
      'jsx-a11y/anchor-is-valid': 'off'
    }
  }
];
