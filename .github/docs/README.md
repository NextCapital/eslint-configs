# eslint-configs

Shareable ESLint configuration packages that enforce NextCapital code standards across all JavaScript and TypeScript projects. The repository publishes two npm packages — a JavaScript base and a TypeScript extension — each offering modular, composable rule sets for Jest, JSDoc, Node, and React domains.

These configs are the single lint-policy source of truth for all NextCapital projects, eliminating local rule copies. Flat config (ESLint v9+) is the only supported format; legacy `.eslintrc` configs are deprecated and retained only for historical reference.

```d2
direction: down

javascript: "@nextcapital/eslint-config" {
  base: Base Rules {
    best_practices: best-practices
    errors: errors
    es6: es6
    imports: imports
    node: node
    strict: strict
    style: style
    variables: variables
  }
  jest: Jest
  jsdoc: JSDoc
  node_mod: Node
  react: React + JSX-A11y
}

typescript: "@nextcapital/eslint-config-typescript" {
  ts_base: Base + Style
  ts_jest: Jest
  ts_jsdoc: JSDoc
  ts_node: Node
  ts_react: React
}

typescript -> javascript: "extends (dependency)"

upstream: Upstream Plugins {shape: cloud}
upstream -> javascript: "plugin presets"
upstream -> typescript: "typescript-eslint"

consumers: Consumer Projects {shape: cloud}
consumers -> javascript: "npm install"
consumers -> typescript: "npm install"
```

## Packages

| Package | Path | Purpose |
|---------|------|---------|
| `@nextcapital/eslint-config` | `javascript/` | JavaScript rules — base config plus optional Jest, JSDoc, Node, and React domain configs |
| `@nextcapital/eslint-config-typescript` | `typescript/` | TypeScript rules — extends the JavaScript package with TS-specific overrides |

See [JavaScript Package](components/javascript-package.md) and [TypeScript Package](components/typescript-package.md) for detailed internals.

## Key Concepts

Terms and patterns unique to this codebase are defined in the [Glossary](reference/glossary.md).

- **Flat config composition** — Every exported config is an array of named config objects, composed via spread (`[...base, ...jest, ...react]`). This is the ESLint v9+ flat config model.
- **Legacy/flat adapter pattern** — Rule definitions live in legacy-shaped files (`javascript/base/*.js`); thin adapter files (`javascript/base/flat/*.js`) wrap them into flat config arrays. This dual structure preserves the heavily-commented legacy files as the policy source of truth while providing flat config exports.
- **TS-over-JS layering** — The TypeScript package depends on the JavaScript package (`@nextcapital/eslint-config`) and composes JS rule modules directly, then layers TS-specific overrides on top.
- **Domain configs** — Optional rule packs (Jest, JSDoc, Node, React) that consumers compose alongside the base config. Each domain config follows the same internal structure.
- **Semver-gated TODOs** — Comments like `// TODO: semver-major, enable` mark rules intentionally deferred to a future major version bump to avoid breaking changes.

## How It Works

See [Config Composition Flow](flows/config-composition.md) for the full composition sequence.

Consumers compose one or both exported arrays in `eslint.config.cjs` or `eslint.config.mjs`:

```js
const nextcapital = require('@nextcapital/eslint-config');
const jest = require('@nextcapital/eslint-config/jest');

module.exports = [...nextcapital, ...jest];
```

## Design Decisions

- **Flat config only** — Legacy `.eslintrc` format was dropped in favor of flat config arrays. Packages in `deprecated/` preserve the old format for reference and are no longer actively published.
- **Rule definitions in legacy-shaped files** — The `javascript/base/*.js` files contain dense, heavily-commented rule dictionaries. Rather than rewriting these comments into flat config format, thin adapters in `javascript/base/flat/*.js` wrap the rule objects. This preserves the policy rationale comments while supporting flat config.
- **TypeScript extends JavaScript** — Instead of duplicating shared rules, the TypeScript package imports and spreads the JavaScript base rule modules directly. TS-specific overrides disable duplicate core rules (e.g., `no-unused-vars` off in favor of `@typescript-eslint/no-unused-vars`) and add TS-aware replacements.
- **Modular domain configs** — Jest, JSDoc, Node, and React are separate entry points so consumers include only what applies to their project. Each domain config includes the relevant plugin's recommended preset, then layers NextCapital-specific overrides.
- **Airbnb lineage** — The deprecated packages extended `airbnb-base` / `airbnb`. The current packages moved away from Airbnb as a base and instead build on `@eslint/js` recommended rules, `@stylistic/eslint-plugin`, and individual plugin presets. The rule decisions in `javascript/base/*.js` carry forward curated opinions from the Airbnb era, adapted and documented with NextCapital-specific rationale.

## Key Files

| File | Role |
|------|------|
| `javascript/index.js` | JavaScript package entry point — composes base flat config array |
| `javascript/internal.js` | Internal lint config for linting this repo's JS config files |
| `javascript/base/*.js` | Legacy-shaped rule definition files with policy comments |
| `javascript/base/flat/*.js` | Flat config adapters that wrap legacy rule objects |
| `javascript/{jest,jsdoc,node,react}/index.js` | Domain config entry points |
| `typescript/index.js` | TypeScript package entry point — extends JS base with TS overrides |
| `typescript/internal.js` | Internal lint config for linting this repo's TS config files |
| `typescript/base/style.js` | TS-specific style rule overrides |
| `typescript/{jest,jsdoc,node,react}/index.js` | TS domain config entry points |
| `.github/workflows/ci.yml` | PR validation — installs and lints both packages |
| `.github/workflows/publish.yml` | Autopublish to npm on merge to main |

## Configuration and Environment

- **Node engine** — `>= 18` (defined in `javascript/package.json` and `typescript/package.json` `engines` field)
- **npm registry** — `.npmrc` sets `registry=https://registry.npmjs.org` with `@nextcapital` scope
- **Peer dependencies** — Consumers must install `eslint` and `eslint-plugin-import` as peers. The TypeScript package also requires `typescript` as a peer.
- **OIDC publishing** — `.github/workflows/publish.yml` uses `id-token: write` for npm OIDC authentication

## Testing and Quality

This repository has no test suite. Quality is enforced through:

- **Self-linting** — Each package lints its own config files using `internal.js` (via `npm run lint`)
- **CI validation** — `.github/workflows/ci.yml` runs `npm ci` and `npm run lint` for both packages on every PR
- **Config inspection** — Both `package.json` files include `inspect-config:*` scripts for debugging ESLint config resolution

## Build, Deploy, and CI/CD

- **CI** — `.github/workflows/ci.yml` runs on PRs. Installs dependencies and lints both packages using Node LTS.
- **Publishing** — `.github/workflows/publish.yml` runs on push to `main`. Uses a matrix strategy over `javascript/` and `typescript/` directories. Copies `LICENSE.txt` into each package directory, then runs `npm run autopublish -- --use-public`. Uses Node 24 and OIDC authentication. Manual publishing is not supported.
- **Versioning** — PR template requires semver classification (major/minor/patch/none). The `autopublish` script (`auto-publish-package`) handles version detection and npm publish.

## Extension Points

| Extension Type | Directory | Convention | Canonical Example | Also Update |
|---------------|-----------|------------|-------------------|-------------|
| New base rule category | `javascript/base/` + `javascript/base/flat/` | `<category>.js` (legacy) + `flat/<category>.js` (adapter) | `javascript/base/best-practices.js` + `javascript/base/flat/best-practices.js` | `javascript/index.js` (add to config module list) |
| New domain config (JS) | `javascript/<domain>/` | `index.js` + `rules.js` + `flat/rules.js` | `javascript/jest/` | `javascript/package.json` (add exports entry) |
| New domain config (TS) | `typescript/<domain>/` | `index.js` | `typescript/jest/index.js` | `typescript/package.json` (add exports entry) |
| New TS base override | `typescript/base/` | `<category>.js` | `typescript/base/style.js` | `typescript/index.js` (add to dynamic require list) |

See [Adding Rules](guides/adding-rules.md) and [Adding a Domain Config](guides/adding-a-domain-config.md) for step-by-step instructions.

## Gotchas and Edge Cases

- **Dynamic requires** — Both package entry points dynamically load config modules with `require()` in `reduce()`. This is intentional for DRY composition, but ESLint's `import/no-dynamic-require` rule is disabled inline at each call site.
- **Sort-keys enforcement** — `internal.js` in both packages enforces `sort-keys: error` on specific rule files to maintain deterministic key ordering. Adding a new rule to a governed file requires alphabetical placement.
- **Test file overrides** — Both packages disable `no-multi-assign` for test files (`**/*.{spec,test}.*`). The React config also disables `jsx-a11y/anchor-is-valid` in test files.
- **`no-unused-vars` in TypeScript** — The TS config explicitly disables the core `no-unused-vars` rule because `typescript-eslint` provides a TS-aware replacement. Adding the core rule back would cause duplicate reporting.
- **PROMPT.md and TODO.md are gitignored** — These files exist locally for planning purposes but are not committed.
- **[Linter safety defaults](reference/glossary.md)** — All JavaScript domain configs and the TypeScript base/React configs set unused disable directive and inline config error reporting. TypeScript Jest, JSDoc, and Node configs inherit this from their JS counterparts.

## Related Documentation

- [JavaScript Package](components/javascript-package.md) — internal structure of the JS config package
- [TypeScript Package](components/typescript-package.md) — internal structure of the TS config package
- [Config Composition Flow](flows/config-composition.md) — how configs are assembled at runtime
- [Adding Rules](guides/adding-rules.md) — how to add or modify ESLint rules
- [Adding a Domain Config](guides/adding-a-domain-config.md) — how to create a new domain config pack
- [Getting Started](onboarding/getting-started.md) — developer onboarding guide
- [Glossary](reference/glossary.md) — domain vocabulary and proprietary terms
- [Repository Map](reference/repository-map.md) — directory structure and file roles

## Unknowns and Open Questions

| # | Severity | Claim | Context | Suggested Action |
|---|----------|-------|---------|------------------|
| 1 | LOW | Rationale for keeping deprecated packages in-tree | `deprecated/` directory | Confirm whether these are kept for historical reference or pending removal |
| 2 | LOW | CONTRIBUTING.md references Node 12+ and browser matrix | `CONTRIBUTING.md` ground rules section | Update CONTRIBUTING.md to match current engine requirements |
| 3 | LOW | PR template links DCO instructions to `NextCapital/maybe` repo | `.github/PULL_REQUEST_TEMPLATE.md` | Confirm if this cross-repo link is intentional |
