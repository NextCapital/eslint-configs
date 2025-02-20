module.exports = [{
  name: '@nextcapital/eslint-config-typescript/style',
  rules: {
    '@stylistic/member-delimiter-style': {
      multiline: {
        delimiter: 'semi',
        requireLast: true
      },
      multilineDetection: 'brackets',
      singleline: {
        delimiter: 'semi',
        requireLast: true
      }
    }
  }
}];
