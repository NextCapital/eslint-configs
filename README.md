# eslint-configs

A series of ESLint configs to enforce Nextcapial's code standards. Each config is independent of the others, allowing for mixing and matching of configs to suit various use cases.

Configs can be stacked on top of each other:
```json
{
  "extends": [
    "@nextcapital/eslint-config-js-linter",
    "@nextcapital/eslint-config-jest-linter"
    "@nextcapital/eslint-config-jsdoc-linter"
  ]
}
```

## Current configs
* `eslint-config-js-linter` - Enforces basic Javascript standards.
* `eslint-config-react-linter` - Enforces React and JSX standards.
* `eslint-config-jest-linter` - Enforces jest testing library standards.
* `eslint-config-jsdoc-linter` - Enforces JSDoc documentation standards.
