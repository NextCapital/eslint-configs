const globals = require('globals');

const pluginReact = require('eslint-plugin-react');
const jsxA11y = require('eslint-plugin-jsx-a11y');

const stylisticJsx = require('@stylistic/eslint-plugin-jsx');

const nextcapitalReact = require('./flat/rules');

module.exports = [
  {
    name: '@nextcapital/eslint-config/react - settings setup',
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
      react: pluginReact,
      '@stylistic/jsx': stylisticJsx
    }
  },
  {
    name: '@nextcapital/eslint-config/react - Enable plugin recommended rules as errors',
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
    name: '@nextcapital/eslint-config/react - Test file rules',
    files: [
      '**/*.{spec,test}.{js,mjs,cjs,jsx}'
    ],
    rules: {
      'jsx-a11y/anchor-is-valid': 'off'
    }
  }
];
