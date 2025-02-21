const jsJestConfig = require('@nextcapital/eslint-config/jest');

module.exports = [
  ...jsJestConfig,
  {
    files: [
      '**/*.{spec,test}.{ts,tsx}'
    ]
  },
  {
    rules: {
      'jest/unbound-method': 'off'
    }
  }
];
