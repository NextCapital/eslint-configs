# Component: JavaScript Package

## Overview

- **Type:** library (npm package)
- **Location:** `javascript/`
- **Architecture role:** shared platform — base ESLint config consumed by all NextCapital JS projects and by the TypeScript package
- **Purpose:** Provide a single, composable ESLint configuration that enforces NextCapital JavaScript code standards
- **Boundaries:** Owns all JavaScript linting rules and domain configs (Jest, JSDoc, Node, React); does not own TypeScript-specific rules

## Responsibilities

- Defines base JavaScript linting rules across eight categories (best practices, errors, ES6, imports, Node, strict, style, variables)
- Provides optional domain configs for Jest, JSDoc, Node, and React
- Composes upstream plugin presets with NextCapital-specific overrides into flat config arrays
- Exports named, inspectable config objects for debugging via `eslint --inspect-config`
- Self-lints its own config files using `internal.js`

## Non-Responsibilities

- Does not define TypeScript-specific rules (see [TypeScript Package](typescript-package.md))
- Does not handle publishing logic directly (handled by `autopublish` script and CI workflow)
- Does not provide end-to-end test coverage (no test suite exists; quality is via self-linting)

## Internal Structure

The package uses a **legacy/flat adapter pattern**: legacy rule files define policy with rationale comments, and thin flat config adapters expose them to ESLint v9+.

**Entry points:**

- `index.js` — Main entry point. Composes the full base flat config array by combining `@eslint/js` recommended rules, `@stylistic/eslint-plugin` presets, and all eight `base/flat/*.js` adapters via dynamic `require()` in a `reduce()`/`concat()` pattern.
- `internal.js` — Extends `index.js` for linting this repo itself. Adds `sort-keys` enforcement on specific rule files and configures `@babel/eslint-parser`.

**Base rule files (`base/*.js`):**

Each file exports a `module.exports` object with a `rules` property containing a flat map of ESLint rule configurations. These are the **policy source of truth** — comments above each rule document the intent, rationale, exceptions, and deferred semver-gated changes.

| File | Category | Notable patterns |
|------|----------|-----------------|
| `best-practices.js` | Code correctness | Framework-specific exceptions in `no-param-reassign` (Express, Koa, React Router, Angular) |
| `errors.js` | Runtime error prevention | Buggy rule annotations (`require-atomic-updates` noted as "very buggy") |
| `es6.js` | ES2015+ features | Includes `parserOptions` for `ecmaVersion: 6` and `sourceType: module` |
| `imports.js` | Import/export conventions | Full `settings` block with resolver config, `eslint-plugin-import` plugin registration, and `devDependencies` glob allowlist |
| `node.js` | Node.js conventions | Small focused set: `global-require`, `no-new-require`, `no-path-concat` |
| `strict.js` | Strict mode | Single rule: `strict: ['error', 'never']` (assumes modules/transpilation) |
| `style.js` | Code formatting | JSX AST node indentation exemptions despite being in base (not React) config |
| `variables.js` | Variable declarations | Dynamic `no-restricted-globals` composed from `confusing-browser-globals` package |

**Flat config adapters (`base/flat/*.js`):**

Each adapter file `require()`s the corresponding legacy file and exports a flat config array with a single named config object. Example pattern:

```js
const baseConfig = require('../best-practices');
module.exports = [{
  name: '@nextcapital/eslint-config/base - best-practices',
  rules: baseConfig.rules
}];
```

Some adapters do more than rule pass-through:
- `flat/es6.js` — Translates `parserOptions` and `globals` into `languageOptions`
- `flat/imports.js` — Prepends `eslint-plugin-import` flat recommended config and translates `settings`/`parserOptions`
- `flat/node.js` — Adds Node.js globals via `languageOptions.globals`

**Domain configs (`{jest,jsdoc,node,react}/`):**

Each domain directory contains:
- `index.js` — Flat config entry point that composes plugin preset + NextCapital overrides
- `rules.js` — Legacy-shaped rule overrides
- `flat/rules.js` — Flat config adapter for `rules.js`

React additionally has `jsx-a11y.js` and `flat/jsx-a11y.js` for accessibility rules.

Domain `index.js` files follow the same composition pattern.

## Interfaces

### Inbound (how consumers use it)

Consumers import via package subpath exports defined in `package.json`:

| Import path | Resolves to | Description |
|-------------|-------------|-------------|
| `@nextcapital/eslint-config` | `javascript/index.js` | Base JavaScript config |
| `@nextcapital/eslint-config/jest` | `javascript/jest/index.js` | Jest test config |
| `@nextcapital/eslint-config/jsdoc` | `javascript/jsdoc/index.js` | JSDoc documentation config |
| `@nextcapital/eslint-config/node` | `javascript/node/index.js` | Node.js config |
| `@nextcapital/eslint-config/react` | `javascript/react/index.js` | React + JSX accessibility config |
| `@nextcapital/eslint-config/base/flat/*` | `javascript/base/flat/*.js` | Individual base rule modules (for advanced composition) |

### Outbound (what it depends on)

| Dependency | Type | Usage |
|-----------|------|-------|
| `@eslint/js` | dependency | `configs.recommended.rules` for base JS rules |
| `@stylistic/eslint-plugin` | dependency | `configs['disable-legacy']` and `configs['recommended-flat']` for formatting |
| `eslint-plugin-import` | peer dependency | `flatConfigs.recommended` in imports adapter |
| `eslint-plugin-jest` | dependency | `configs['flat/recommended']` in Jest domain |
| `eslint-plugin-jsdoc` | dependency | `configs['flat/recommended-error']` in JSDoc domain |
| `eslint-plugin-n` | dependency | `configs['flat/recommended-script']` in Node domain |
| `eslint-plugin-react` | dependency | `configs.flat.recommended` + `configs.flat['jsx-runtime']` in React domain |
| `eslint-plugin-jsx-a11y` | dependency | `flatConfigs.recommended` in React domain |
| `globals` | dependency | Environment globals (`es2015`, `node`, `browser`, `serviceworker`) |
| `confusing-browser-globals` | dependency | Dynamic `no-restricted-globals` list in `variables.js` |
| `eslint` | peer dependency | Required by consumers |

## Cross-Cutting Concerns

- **Linter safety defaults** — All domain index files enforce unused disable directive and inline config reporting as errors
- **File targeting** — Base config targets `**/*.{js,mjs,cjs,jsx}`; Jest configs target `**/*.{spec,test}.{js,mjs,cjs,jsx}`
- **Global ignores** — Consistently applied: `.git/`, `**/node_modules/`, `**/build/`, `**/dist/`, `**/ts-output/`
- **Config naming** — Every flat config object has a `name` field prefixed with `@nextcapital/eslint-config/<domain>` for traceability

## Extension Patterns

See [Adding Rules](../guides/adding-rules.md) for adding rules to existing categories and [Adding a Domain Config](../guides/adding-a-domain-config.md) for creating a new domain config.
