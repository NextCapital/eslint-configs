module.exports = [{
  name: '@nextcapital/eslint-config-typescript/base - style',
  rules: {
    '@stylistic/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true
      },
      multilineDetection: 'brackets',
      singleline: {
        delimiter: 'semi',
        requireLast: true
      }
    }]
  }
}];
