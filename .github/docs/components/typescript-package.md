# Component: TypeScript Package

## Overview

- **Type:** library (npm package)
- **Location:** `typescript/`
- **Architecture role:** extension layer — adds TypeScript-aware linting on top of the [JavaScript Package](javascript-package.md)
- **Purpose:** Provide TypeScript-specific ESLint rules that build on the shared JavaScript base, avoiding rule duplication
- **Boundaries:** Owns TypeScript-specific rule overrides and TS file targeting; delegates all shared JavaScript rules to the JS package dependency

## Responsibilities

- Extends the JavaScript package with TypeScript-aware rules via `typescript-eslint`
- Disables core ESLint rules that conflict with their TypeScript equivalents (e.g., `no-unused-vars` off, `@typescript-eslint/no-unused-vars` on)
- Provides TS-specific domain configs for Jest, JSDoc, Node, and React
- Adds TypeScript file extensions to file targeting patterns and plugin resolution
- Self-lints its own config files using `internal.js`

## Non-Responsibilities

- Does not define base JavaScript rules (see [JavaScript Package](javascript-package.md))
- Does not own plugin preset selection for shared concerns (those are in the JS package)

## Internal Structure

The TypeScript package is intentionally thin: it reuses JS rule modules and adds a minimal TS-specific layer.

**Entry points:**

- `index.js` — Main entry point. Composes the full TS flat config array:
  1. Settings/setup with TS file globs (`**/*.{ts,tsx}`) and standard ignores/linter options
  2. `@eslint/js` recommended rules as a base
  3. `typescript-eslint` recommended preset spread
  4. `@stylistic/eslint-plugin` disable-legacy + recommended-flat
  5. JS base flat modules loaded dynamically from `@nextcapital/eslint-config/base/flat/*`
  6. Duplicate rule disable block (`no-unused-vars: off`)
  7. Local `base/style.js` for TS-specific style overrides
  8. Test file override (`no-multi-assign: off` for `**/*.{spec,test}.{ts,tsx}`)

- `internal.js` — Extends the full JS package config (`@nextcapital/eslint-config`) for linting this repo. Adds `@babel/eslint-parser` and enforces `sort-keys` on `base/style.js`.

**TS-specific rule overrides (`base/style.js`):**

A single file exporting a flat config array with:
- `@stylistic/member-delimiter-style` — Enforces semicolons in TS interfaces/types
- `@typescript-eslint/no-use-before-define` — Replaces the core rule with TS-aware version (allows type references)
- `no-use-before-define: off` — Disables core rule to avoid conflicts

**Domain configs (`{jest,jsdoc,node,react}/index.js`):**

Each TS domain config follows the pattern: spread the corresponding JS domain config, then add TS-specific overrides:

| Domain | JS Base | TS-Specific Overrides |
|--------|---------|----------------------|
| Jest | `@nextcapital/eslint-config/jest` | Targets `.{ts,tsx}` test files; disables `jest/unbound-method` |
| JSDoc | `@nextcapital/eslint-config/jsdoc` | Targets `.{ts,tsx}` files; disables `jsdoc/require-param`, `jsdoc/require-returns`, `jsdoc/valid-types` (TypeScript types replace JSDoc types) |
| Node | `@nextcapital/eslint-config/node` | Extends `settings.n.tryExtensions` to include `.ts` and `.tsx` |
| React | Imports specific flat rule modules from JS React | Rebuilds composition with TS file globs; restricts `jsx-filename-extension` to `.tsx` only; adjusts `static-property-placement` to `static public field` |

The React TS config differs from other domain configs: instead of spreading `@nextcapital/eslint-config/react` directly, it imports the individual flat rule modules (`react/flat/rules` and `react/flat/jsx-a11y`) and reassembles them with TS-specific plugin setup. This gives it control over file targeting and plugin registration for TypeScript.

## Interfaces

### Inbound (how consumers use it)

| Import path | Resolves to | Description |
|-------------|-------------|-------------|
| `@nextcapital/eslint-config-typescript` | `typescript/index.js` | Base TypeScript config (includes all JS base rules) |
| `@nextcapital/eslint-config-typescript/jest` | `typescript/jest/index.js` | Jest config for TS test files |
| `@nextcapital/eslint-config-typescript/jsdoc` | `typescript/jsdoc/index.js` | JSDoc config relaxed for TS type system |
| `@nextcapital/eslint-config-typescript/node` | `typescript/node/index.js` | Node config with TS extension resolution |
| `@nextcapital/eslint-config-typescript/react` | `typescript/react/index.js` | React config for TSX files |
| `@nextcapital/eslint-config-typescript/base/*` | `typescript/base/*.js` | Individual TS base rule modules |

### Outbound (what it depends on)

| Dependency | Type | Usage |
|-----------|------|-------|
| `@nextcapital/eslint-config` | dependency | All JS base flat modules and domain configs |
| `typescript-eslint` | dependency | `configs.recommended` preset for TS-aware rules |
| `@eslint/js` | dependency | `configs.recommended.rules` for base JS rules |
| `@stylistic/eslint-plugin` | dependency | Formatting rules and legacy rule disabling |
| `eslint` | peer dependency | Required by consumers |
| `eslint-plugin-import` | peer dependency | Required by consumers |
| `typescript` | peer dependency | Required for TS-aware linting |

All plugin dependencies (`eslint-plugin-jest`, `eslint-plugin-jsdoc`, `eslint-plugin-n`, `eslint-plugin-react`, `eslint-plugin-jsx-a11y`, `globals`) are listed as direct dependencies for transitive availability.

## Cross-Cutting Concerns

- **File targeting** — Base config targets `**/*.{ts,tsx}`; domain configs extend with domain-appropriate patterns
- **Duplicate rule management** — Core ESLint rules with TypeScript equivalents are explicitly disabled to prevent duplicate reporting
- **Config naming** — All flat config objects use `name` fields prefixed with `@nextcapital/eslint-config-typescript/<domain>`
- **[Linter safety defaults](../reference/glossary.md)** — Same enforcement as the JS package

## Evidence

- `typescript/index.js` — Entry point with full composition sequence
- `typescript/base/style.js` — TS-specific style overrides demonstrating core-rule-off + TS-rule-on pattern
- `typescript/jest/index.js` — Canonical example of minimal TS domain config layering
- `typescript/react/index.js` — React 17+ jsx-runtime comment and TSX-specific composition
- `typescript/package.json` — Dependency on `@nextcapital/eslint-config`, subpath exports, engines
