# eslint-config-js-linter

An eslint config to enforce Nextcapital's Javscript code conventions. Uses `airbnb-base` as a base (`airbnb-base` does not include React/JSX conventions, whereas `airbnb` does).

**Does not** enforce React/JSX conventions. Extend `@nextcapital/eslint-config-react-linter` on top of this config for React standards enforcement.

## Installation

```bash
npm install --save-dev @nextcapital/eslint-config-js-linter
```

## Usage

Add `eslint-config-js-linter` to the extends section of your eslint configuration file.

```json
{
    "extends": ["@nextcapital/eslint-config-js-linter"]
}
```
