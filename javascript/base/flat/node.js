const globals = require('globals');

const base = require('../node');

module.exports = [{
  name: '@nextcapital/eslint-config/base - node',
  languageOptions: {
    globals: globals.node
  },
  rules: base.rules
}];
