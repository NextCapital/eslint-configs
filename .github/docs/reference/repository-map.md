# Repository Map

## Why This Map Exists

This map shows where files live and what role they play.

## Directory Structure

```
eslint-configs/
  .github/
    docs/                              # Architecture and developer documentation
    workflows/
      ci.yml                           # PR lint validation
      publish.yml                      # Autopublish on merge to main
    CODEOWNERS.md                      # Review routing (all files -> maintainers)
    PULL_REQUEST_TEMPLATE.md           # PR template with semver + DCO checks
  deprecated/                          # Legacy eslintrc-style packages (not actively published)
    eslint-config-jest-linter/
    eslint-config-js-linter/
    eslint-config-jsdoc-linter/
    eslint-config-react-linter/
  javascript/                          # @nextcapital/eslint-config package
    index.js                           # Main entry point — flat config array
    internal.js                        # Self-linting config for this repo
    package.json                       # Package manifest with subpath exports
    base/                              # Base rule definitions (legacy shape)
      best-practices.js
      errors.js
      es6.js
      imports.js
      node.js
      strict.js
      style.js
      variables.js
      flat/                            # Flat config adapters for base rules
        best-practices.js
        errors.js
        es6.js
        imports.js
        node.js
        strict.js
        style.js
        variables.js
    jest/                              # Jest domain config
      index.js                         # Entry point
      rules.js                         # Rule overrides (legacy shape)
      flat/
        rules.js                       # Flat adapter
    jsdoc/                             # JSDoc domain config
      index.js
      rules.js
      flat/
        rules.js
    node/                              # Node domain config
      index.js
      rules.js
      flat/
        rules.js
    react/                             # React + accessibility domain config
      index.js
      rules.js                         # React + @stylistic/jsx rules
      jsx-a11y.js                      # Accessibility rules
      flat/
        rules.js
        jsx-a11y.js
  typescript/                          # @nextcapital/eslint-config-typescript package
    index.js                           # Main entry point — extends JS base
    internal.js                        # Self-linting config for this repo
    package.json                       # Package manifest with subpath exports
    base/
      style.js                         # TS-specific style rule overrides
    jest/
      index.js                         # Extends JS Jest config + TS overrides
    jsdoc/
      index.js                         # Extends JS JSDoc config + TS overrides
    node/
      index.js                         # Extends JS Node config + TS extensions
    react/
      index.js                         # Recomposed React config for TSX
  CODE_OF_CONDUCT.md                   # Contributor Covenant
  CONTRIBUTING.md                      # Contribution guidelines
  DCO.md                               # Developer Certificate of Origin
  LICENSE.txt                          # MIT license
  README.md                           # Project overview and usage
  .gitignore                           # Ignores node_modules, caches, PROMPT.md
  .npmrc                               # npm registry configuration
```

## File Role Quick Reference

| Pattern | Role | When to modify |
|---------|------|---------------|
| `javascript/base/*.js` | Policy source of truth — rule definitions with rationale comments | Adding/changing base rules |
| `javascript/base/flat/*.js` | Flat config adapters — thin wrappers around legacy rule files | Only when the adapter needs to translate new config properties (rare) |
| `javascript/<domain>/index.js` | Domain config entry points — compose plugin presets + overrides | Adding a domain config or changing domain composition |
| `javascript/<domain>/rules.js` | Domain rule overrides | Adding/changing domain-specific rules |
| `javascript/<domain>/flat/rules.js` | Flat adapters for domain rules | Rarely — only if adapter pattern changes |
| `javascript/index.js` | Package entry point — base config array | Adding a new base rule category |
| `javascript/internal.js` | Repo self-linting config | Adding sort-keys governance or repo-specific rules |
| `typescript/index.js` | TS package entry point | Adding TS-specific base overrides or new base modules |
| `typescript/base/style.js` | TS style overrides | Adding TS-specific style rules |
| `typescript/<domain>/index.js` | TS domain config | Adding TS-specific domain overrides |
| `*/package.json` | Package manifests | Adding exports, dependencies, or scripts |
| `.github/workflows/*.yml` | CI/CD | Changing build, lint, or publish pipeline |

## Evidence

- Directory listing verified against workspace file system
- File roles derived from code analysis documented in [JavaScript Package](../components/javascript-package.md) and [TypeScript Package](../components/typescript-package.md)
