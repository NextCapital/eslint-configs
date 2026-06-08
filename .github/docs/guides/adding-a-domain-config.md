# Adding a Domain Config

## Why This Guide Exists

Domain configs (Jest, JSDoc, Node, React) follow a specific structural pattern. Creating a new domain config requires files in both packages, package.json exports entries, and adherence to the composition conventions. This guide walks through the full process.

## When to Use

Add a domain config when rules apply to a tool, framework, or file type not all consumers need.

## File Structure

A new domain config named `example` requires these files:

```
javascript/
  example/
    index.js          # Flat config entry point
    rules.js          # Legacy-shaped rule overrides
    flat/
      rules.js        # Flat config adapter for rules.js

typescript/
  example/
    index.js          # TS domain config (extends JS domain config)
```

## Step-by-Step: JavaScript Domain Config

### Create the rule definitions (`javascript/example/rules.js`)

Export a `module.exports` object with a `rules` property. This is the **policy source of truth** for domain-specific rule overrides.

```js
'use strict';

module.exports = {
  rules: {
    // require consistent naming for example plugin tests
    'example/consistent-naming': 'error',

    // disable noisy rule that produces false positives
    'example/some-noisy-rule': 'off'
  }
};
```

### Create the flat adapter (`javascript/example/flat/rules.js`)

Wrap the legacy rules in a named flat config array:

```js
'use strict';

const baseConfig = require('../rules');

module.exports = [
  {
    name: '@nextcapital/eslint-config/example - rules',
    rules: baseConfig.rules
  }
];
```

### Create the entry point (`javascript/example/index.js`)

Compose the domain config following the established pattern:

```js
'use strict';

const pluginExample = require('eslint-plugin-example');
const nextcapitalExample = require('./flat/rules');

module.exports = [
  // Plugin recommended baseline (if the plugin provides one)
  pluginExample.configs['flat/recommended'],

  // Settings and file targeting
  {
    name: '@nextcapital/eslint-config/example - settings setup',
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      reportUnusedInlineConfigs: 'error'
    },
    files: ['**/*.{js,mjs,cjs,jsx}'],
    ignores: [
      '.git/',
      '**/node_modules/',
      '**/build/',
      '**/dist/',
      '**/ts-output/'
    ],
    plugins: {
      example: pluginExample
    }
  },

  // NextCapital rule overrides
  ...nextcapitalExample
];
```

**Key conventions to follow:**
- Include `linterOptions` with [linter safety defaults](../reference/glossary.md)
- Use the standard ignores list
- Place plugin recommended preset before NextCapital overrides
- Use the naming prefix `@nextcapital/eslint-config/<domain>`

### Register the exports (`javascript/package.json`)

Add the subpath exports:

```json
{
  "exports": {
    "./example": "./example/index.js",
    "./example.js": "./example/index.js",
    "./example/flat/*": "./example/flat/*.js",
    "./example/flat/*.js": "./example/flat/*.js"
  }
}
```

### Add the dependency

Add `eslint-plugin-example` to `dependencies` in `javascript/package.json`.

## Step-by-Step: TypeScript Domain Config

### Create the TS entry point (`typescript/example/index.js`)

Spread the JS domain config and add TS-specific overrides:

```js
'use strict';

const jsExampleConfig = require('@nextcapital/eslint-config/example');

module.exports = [
  // Inherit JS domain config
  ...jsExampleConfig,

  // TS-specific file targeting
  {
    name: '@nextcapital/eslint-config-typescript/example - settings setup',
    files: ['**/*.{ts,tsx}']
  },

  // TS-specific rule overrides (if needed)
  {
    name: '@nextcapital/eslint-config-typescript/example - rules',
    rules: {
      // disable rules that TypeScript makes redundant
    }
  }
];
```

### Register the exports (`typescript/package.json`)

Add the subpath exports:

```json
{
  "exports": {
    "./example": "./example/index.js",
    "./example.js": "./example/index.js"
  }
}
```

### Add the dependency

Add `eslint-plugin-example` to `dependencies` in `typescript/package.json` and ensure `@nextcapital/eslint-config` version includes the new JS domain config.

## Checklist

- [ ] `javascript/example/rules.js` created with domain-specific rule overrides
- [ ] `javascript/example/flat/rules.js` created as flat adapter
- [ ] `javascript/example/index.js` created with plugin preset + settings + overrides
- [ ] `javascript/package.json` updated with subpath exports and dependency
- [ ] `typescript/example/index.js` created extending JS domain config
- [ ] `typescript/package.json` updated with subpath exports and dependency
- [ ] `npm run lint` passes in both `javascript/` and `typescript/`
- [ ] Both package READMEs updated with usage examples for the new domain config

## Evidence

- `javascript/jest/` — Canonical example of a simple domain config (setup + plugin preset + rules)
- `javascript/react/` — Canonical example of a complex domain config (multiple plugins, accessibility, test overrides)
- `typescript/jest/index.js` — Canonical example of minimal TS domain config
- `typescript/react/index.js` — Canonical example of recomposed TS domain config
- `javascript/package.json` — Subpath export patterns — `exports` field
- `typescript/package.json` — Subpath export patterns — `exports` field
