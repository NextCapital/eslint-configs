# Glossary

## Why This Glossary Exists

This codebase uses several terms that have specific meanings within the ESLint ecosystem and NextCapital conventions. Precise definitions prevent misinterpreting code structure.

## Terms

**Base config** — The core JavaScript ESLint configuration exported from `javascript/index.js`. Includes all eight rule categories (best practices, errors, ES6, imports, Node, strict, style, variables) plus upstream plugin presets. This is the foundation that all consumers and the TypeScript package build on.

**Domain config** — An optional, composable rule pack for a specific tool or framework (Jest, JSDoc, Node, React). Consumers include only the domain configs relevant to their project. Each domain config has its own entry point under `javascript/<domain>/index.js` and `typescript/<domain>/index.js`.

**Flat config** — ESLint's configuration format introduced in v9. Configs are arrays of objects (each with optional `name`, `files`, `ignores`, `rules`, `plugins`, `languageOptions`, etc.) exported from `eslint.config.js`. This is the only format supported by the current packages. Contrast with "legacy config."

**Legacy config** — The pre-v9 ESLint configuration format using `.eslintrc.*` files with `extends`, `env`, `parserOptions`, and `plugins` keys. The deprecated packages (`deprecated/`) use this format. The rule definition files in `javascript/base/*.js` also use a legacy-compatible shape (exporting `{ rules: {...} }`) but are wrapped by flat adapters for runtime use.

**Flat config adapter** — A file in `javascript/base/flat/*.js` or `javascript/<domain>/flat/rules.js` that imports a legacy-shaped rule file and re-exports it as a flat config array with a `name` field. Adapters exist to preserve the heavily-commented legacy rule files as the policy source of truth while supporting the flat config format.

**Config composition** — The pattern of assembling a final ESLint config by spreading multiple config arrays together: `[...base, ...jest, ...react]`. Each array is a self-contained set of named config objects.

**Named config object** — A flat config array element with a `name` property (e.g., `'@nextcapital/eslint-config/base - best-practices'`). Names enable `eslint --inspect-config` debugging and make config resolution traceable.

**Semver-gated TODO** — A comment like `// TODO: semver-major, enable` marking a rule that is intentionally set to `off` or `warn` now but should be enabled (typically as `error`) in a future major version. These exist to avoid breaking consumer builds with stricter rules in a minor or patch release.

**Dynamic require pattern** — The technique used in `javascript/index.js` and `typescript/index.js` where a list of module paths is iterated with `reduce()` and each is loaded via `require()`. This avoids repetitive `require` statements but requires an inline `eslint-disable` for `import/no-dynamic-require`.

**Internal config** — The `internal.js` file in each package, used only for linting the config files in this repository itself. Not distributed to consumers. Extends the base config and adds repo-specific rules like `sort-keys` enforcement on rule files.

**Autopublish** — The npm publishing mechanism triggered by `.github/workflows/publish.yml` on merge to `main`. Runs the `autopublish` script from `auto-publish-package`, which handles version detection and npm publish with OIDC authentication.

**Plugin preset** — A pre-built flat config provided by an ESLint plugin (e.g., `pluginJest.configs['flat/recommended']`). Domain configs include the plugin preset as a baseline, then layer NextCapital-specific overrides on top.

**Core-rule-off / TS-rule-on** — The pattern in the TypeScript package where a core ESLint rule is disabled (`'no-unused-vars': 'off'`) and replaced by its TypeScript-aware equivalent (`'@typescript-eslint/no-unused-vars'`). This prevents duplicate reporting and ensures the rule works correctly with TypeScript syntax.

**Linter safety defaults** — The `linterOptions` settings applied in every JavaScript domain config index and the TypeScript base and React configs: `reportUnusedDisableDirectives: 'error'` and `reportUnusedInlineConfigs: 'error'`. TypeScript domain configs for Jest, JSDoc, and Node inherit these settings from the JavaScript configs they spread. These catch stale `eslint-disable` comments and unnecessary inline configuration.
