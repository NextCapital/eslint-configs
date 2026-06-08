# Adding Rules

## Why This Guide Exists

ESLint rules in this repo follow specific structural and organizational conventions. Adding a rule in the wrong file/format or without comments can fail CI or break composition. This guide ensures rules land in the right place with the right metadata.

## Before You Start

1. Determine the rule's **category** — Which domain does the rule belong to? (base, Jest, JSDoc, Node, React, accessibility)
2. Determine the rule's **severity impact** — Is this a breaking change for consumers? If enabling a rule as `error` that was previously `off`, it is a **semver-major** change. Downgrading or disabling is typically **semver-minor** or **semver-patch**.
3. Check if the rule is **TypeScript-specific** — Does it need a TS-aware version that replaces a core rule?

## Adding a Rule to a Base Category

Base rules live in `javascript/base/*.js` (policy source of truth) and are exposed via `javascript/base/flat/*.js` (flat config adapters). The adapter files require no changes when adding rules — they pass through the entire `rules` object.

**Steps:**

1. Open the appropriate legacy rule file (e.g., `javascript/base/best-practices.js`)
2. Add the rule in **alphabetical order** within the `rules` object. The `sort-keys` rule is enforced on these files by `internal.js`.
3. Add a **comment above the rule** explaining what it does. Follow the existing convention:
   ```js
   // disallow use of eval()
   'no-eval': 'error',
   ```
4. If the rule is intentionally deferred to a future major version, add a TODO comment:
   ```js
   // TODO: semver-major, enable
   'no-object-constructor': 'off',
   ```
5. Run `npm run lint` from the `javascript/` directory to verify sort-keys compliance and config validity

**Adapter files need no changes.** The flat adapter (`base/flat/<category>.js`) picks up the new rule automatically because it imports the entire `rules` object.

## Adding a Rule to a Domain Config

Domain rules live in `javascript/<domain>/rules.js` and are exposed via `javascript/<domain>/flat/rules.js`.

**Steps:**

1. Open the domain rule file (e.g., `javascript/jest/rules.js`)
2. Add the rule to the `rules` object. Follow alphabetical ordering if the file uses it.
3. Run `npm run lint` from `javascript/`

For React, there are two rule files:
- `javascript/react/rules.js` — React and `@stylistic/jsx-*` rules
- `javascript/react/jsx-a11y.js` — Accessibility rules (`jsx-a11y/*`)

Each has a corresponding flat adapter in `flat/`.

## Adding a TypeScript-Specific Rule Override

When TypeScript provides a rule that replaces a core ESLint rule — the [core-rule-off / TS-rule-on](../reference/glossary.md) pattern (e.g., `@typescript-eslint/no-unused-vars` replaces `no-unused-vars`):

**Steps:**

1. **Disable the core rule** in `typescript/index.js` by adding it to the duplicate-rule disable block:
   ```js
   {
     name: '@nextcapital/eslint-config-typescript - Disable duplicate JS rules',
     rules: {
       'no-unused-vars': 'off',
       // add new disable here
     }
   }
   ```
2. **Add the TS replacement rule** to `typescript/base/style.js` or a new base file as appropriate
3. Run `npm run lint` from `typescript/`

For TS domain config overrides (e.g., disabling a JSDoc rule because TypeScript types make it redundant), edit the corresponding `typescript/<domain>/index.js`.

## Adding a Rule to an Internal Config

The `internal.js` files in both packages configure linting for this repo's own source files. To enforce additional rules on config files:

1. Edit `javascript/internal.js` or `typescript/internal.js`
2. Add a file-targeted config block with the rule

## Checklist

- [ ] Rule added to the correct legacy file (`base/*.js` or `<domain>/rules.js`)
- [ ] Comment added above the rule explaining its purpose
- [ ] Rule placed in alphabetical order (sort-keys enforced)
- [ ] `npm run lint` passes in the relevant package directory
- [ ] If semver-major, marked with `// TODO: semver-major, enable` if deferred, or classified as major in PR
- [ ] If TypeScript-specific, core duplicate rule disabled and TS replacement added

## Evidence

- `javascript/base/best-practices.js` — Canonical example of rule with comment and sort-keys ordering
- `javascript/internal.js` — `sort-keys: 'error'` enforcement on rule files — `files` array lists governed files
- `typescript/index.js` — Duplicate rule disable block — `'no-unused-vars': 'off'`
- `typescript/base/style.js` — TS-specific rule overrides with core-rule-off pattern
