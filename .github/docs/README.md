# eslint-configs

Shareable ESLint configuration packages that enforce NextCapital code standards across all JavaScript and TypeScript projects. The repository publishes two npm packages — a JavaScript base and a TypeScript extension — each offering modular, composable rule sets for Jest, JSDoc, Node, and React domains.

These configs are the single lint-policy source of truth for all NextCapital projects, eliminating local rule copies. Flat config (ESLint v9+) is the only supported format; legacy `.eslintrc` configs are deprecated and retained only for historical reference.

## Packages

| Package | Path | Purpose |
|---------|------|---------|
| `@nextcapital/eslint-config` | `javascript/` | JavaScript rules — base config plus optional Jest, JSDoc, Node, and React domain configs |
| `@nextcapital/eslint-config-typescript` | `typescript/` | TypeScript rules — extends the JavaScript package with TS-specific overrides |

See [JavaScript Package](components/javascript-package.md) and [TypeScript Package](components/typescript-package.md) for detailed internals.

## Key Concepts

- **Flat config composition** — Legacy `.eslintrc` format was dropped in favor of flat config arrays (ESLint v9+). Every exported config is an array of named config objects, composed via spread (`[...base, ...jest, ...react]`). Packages in `deprecated/` preserve the old format for historical reference and are no longer published.
- **Legacy/flat adapter pattern** — The `javascript/base/*.js` files contain dense, heavily-commented rule dictionaries. Rather than rewriting these comments into flat config format, thin adapter files in `javascript/base/flat/*.js` wrap the rule objects into flat config arrays. This preserves the policy rationale comments while supporting flat config.
- **TS-over-JS layering** — Instead of duplicating shared rules, the TypeScript package depends on the JavaScript package (`@nextcapital/eslint-config`) and composes JS rule modules directly, then layers TS-specific overrides on top. TS overrides disable duplicate core rules (e.g., `no-unused-vars` off in favor of `@typescript-eslint/no-unused-vars`) and add TS-aware replacements.
- **Domain configs** — Jest, JSDoc, Node, and React are separate entry points so consumers include only what applies to their project. Each domain config includes the relevant plugin's recommended preset, then layers NextCapital-specific overrides.
- **Airbnb lineage** — The deprecated packages extended `airbnb-base` / `airbnb`. The current packages build on `@eslint/js` recommended rules, `@stylistic/eslint-plugin`, and individual plugin presets instead. The rule decisions in `javascript/base/*.js` carry forward curated opinions from the Airbnb era, adapted and documented with NextCapital-specific rationale.
- **Semver-gated TODOs** — Comments like `// TODO: semver-major, enable` mark rules intentionally deferred to a future major version bump to avoid breaking changes.

## How It Works

Consumers compose one or both exported arrays in `eslint.config.cjs` or `eslint.config.mjs`:

```js
const nextcapital = require('@nextcapital/eslint-config');
const jest = require('@nextcapital/eslint-config/jest');

module.exports = [...nextcapital, ...jest];
```

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

See [Adding Rules](guides/adding-rules.md) and [Adding a Domain Config](guides/adding-a-domain-config.md) for step-by-step instructions on extending the configs.
