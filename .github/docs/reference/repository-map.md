# Repository Map

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
    eslint-config-{jest,js,jsdoc,react}-linter/
  javascript/                          # @nextcapital/eslint-config package
    index.js                           # Package entry point — base flat config array
    internal.js                        # Repo self-linting config (sort-keys governance)
    package.json                       # Package manifest with subpath exports
    base/*.js                          # Policy source of truth — rule definitions with rationale comments
    base/flat/*.js                     # Flat config adapters — thin wrappers around legacy rule files
    {jest,jsdoc,node,react}/index.js   # Domain config entry points — compose plugin presets + overrides
    {jest,jsdoc,node,react}/rules.js   # Domain rule overrides (legacy shape)
    {jest,jsdoc,node,react}/flat/rules.js  # Flat adapters for domain rules
    react/jsx-a11y.js                  # Accessibility rules (legacy shape)
    react/flat/jsx-a11y.js             # Flat adapter for accessibility rules
  typescript/                          # @nextcapital/eslint-config-typescript package
    index.js                           # Package entry point — extends JS base with TS overrides
    internal.js                        # Repo self-linting config
    package.json                       # Package manifest with subpath exports
    base/style.js                      # TS-specific style rule overrides
    {jest,jsdoc,node,react}/index.js   # TS domain configs — extend JS domain configs
  CODE_OF_CONDUCT.md                   # Contributor Covenant
  CONTRIBUTING.md                      # Contribution guidelines
  DCO.md                               # Developer Certificate of Origin
  LICENSE.txt                          # MIT license
  README.md                           # Project overview and usage
  .gitignore                           # Ignores node_modules, caches, PROMPT.md
  .npmrc                               # npm registry configuration
```
