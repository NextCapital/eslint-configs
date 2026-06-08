# Runtime Flow: Config Composition

## Trigger

- **Type:** Module import at ESLint startup
- **Location:** Consumer's `eslint.config.cjs` or `eslint.config.mjs` — `require('@nextcapital/eslint-config')` or equivalent `import`

## Sequence Diagram

```d2
direction: right

consumer: Consumer eslint.config {
  shape: rectangle
}

js_index: javascript/index.js {
  shape: rectangle
}

eslint_js: "@eslint/js" {
  shape: cloud
}

stylistic: "@stylistic" {
  shape: cloud
}

flat_adapters: base/flat/*.js {
  shape: rectangle
}

legacy_rules: base/*.js {
  shape: rectangle
}

domain: Domain index.js {
  shape: rectangle
}

domain_flat: Domain flat/rules.js {
  shape: rectangle
}

domain_rules: Domain rules.js {
  shape: rectangle
}

plugins: Plugin presets {
  shape: cloud
}

consumer -> js_index: "require/import"
js_index -> eslint_js: "recommended rules"
js_index -> stylistic: "disable-legacy + recommended-flat"
js_index -> flat_adapters: "dynamic require via reduce"
flat_adapters -> legacy_rules: "require rules object"

consumer -> domain: "require/import"
domain -> plugins: "flat recommended preset"
domain -> domain_flat: "spread rules"
domain_flat -> domain_rules: "require rules object"
```

## Narrative

**Base JavaScript config (`@nextcapital/eslint-config`):**

1. Consumer imports `@nextcapital/eslint-config`, which resolves to `javascript/index.js`
2. `index.js` creates a settings/setup config object with `name`, `files` glob (`**/*.{js,mjs,cjs,jsx}`), `ignores` list, and `linterOptions`
3. `index.js` loads `@eslint/js` recommended rules as a named config object
4. `index.js` spreads `@stylistic/eslint-plugin` `disable-legacy` config (turns off all deprecated formatting rules) and `recommended-flat` config (enables stylistic replacements)
5. `index.js` iterates over a hardcoded list of base flat module paths (`best-practices`, `errors`, `es6`, `imports`, `node`, `strict`, `style`, `variables`), dynamically `require()`s each from `javascript/base/flat/`, and concatenates them via `reduce()`
6. Each flat adapter (e.g., `base/flat/best-practices.js`) `require()`s the corresponding legacy rule file (`base/best-practices.js`) and wraps its `rules` object in a named flat config array element. Some adapters additionally translate `parserOptions`, `globals`, or `settings` into `languageOptions`.
7. `index.js` appends a test-file override config that disables `no-multi-assign` for `**/*.{spec,test}.*`
8. The consumer receives a flat array of named config objects ready to spread into their ESLint config

**Domain configs (e.g., `@nextcapital/eslint-config/jest`):**

1. Consumer imports `@nextcapital/eslint-config/jest`, which resolves to `javascript/jest/index.js`
2. `index.js` creates a setup config object with `name`, `files` (test file globs), `ignores`, `linterOptions`, `plugins` registration, and optional `languageOptions`/`settings`
3. `index.js` spreads the plugin's flat recommended preset (e.g., `pluginJest.configs['flat/recommended']`)
4. `index.js` spreads the NextCapital rule overrides from `jest/flat/rules.js`, which wraps `jest/rules.js`
5. Some domain configs append test-file-specific overrides (JSDoc disables `require-jsdoc` in tests; React disables `jsx-a11y/anchor-is-valid` in tests)

**TypeScript layering (`@nextcapital/eslint-config-typescript`):**

1. Consumer imports `@nextcapital/eslint-config-typescript`, which resolves to `typescript/index.js`
2. `index.js` creates a setup config targeting `**/*.{ts,tsx}` files
3. `index.js` loads `@eslint/js` recommended rules (same base as JS package)
4. `index.js` spreads `typescript-eslint` recommended preset
5. `index.js` spreads `@stylistic` disable-legacy + recommended-flat (same as JS)
6. `index.js` dynamically `require()`s all JS base flat modules from `@nextcapital/eslint-config/base/flat/*` — the same modules the JS package uses
7. `index.js` adds a duplicate-rule disable block (e.g., `no-unused-vars: off`) to prevent conflicts with TS-aware equivalents
8. `index.js` dynamically `require()`s local `typescript/base/style.js` for TS-specific overrides
9. `index.js` appends a test-file override for `**/*.{spec,test}.{ts,tsx}`

**TypeScript domain configs follow a consistent delta pattern:** spread the JS domain config, then append TS-specific file targeting and rule overrides. The React domain config is the exception — it recomposes from individual flat rule modules rather than spreading the JS React entry point. See [TypeScript Package](../components/typescript-package.md) for details on the React recomposition rationale.

## Evidence

- `javascript/index.js` — Base flat config composition with dynamic require reduce pattern
- `javascript/base/flat/imports.js` — Adapter that adds plugin preset before rule overrides
- `javascript/jest/index.js` — Domain config composition pattern
- `typescript/index.js` — TS layering over JS base modules
- `typescript/react/index.js` — Recomposition pattern (does not spread JS React entry point)
