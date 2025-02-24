const jsNodeConfig = require('@nextcapital/eslint-config/node');

module.exports = [
  ...jsNodeConfig,
  {
    settings: {
      n: {
        tryExtensions: [
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx'
        ]
      }
    }
  }
];
