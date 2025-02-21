const jsJestConfig = require('@nextcapital/eslint-config/jest');

module.exports = [
  ...jsJestConfig,
  {
    name: '@nextcapital/eslint-config-typescript/jest - settings setup',
    files: [
      '**/*.{spec,test}.{ts,tsx}'
    ]
  },
  {
    name: '@nextcapital/eslint-config-typescript/jest - rules',
    rules: {
      'jest/unbound-method': 'off'
    }
  }
];
