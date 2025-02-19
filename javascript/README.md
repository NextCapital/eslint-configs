# @nextcapital/eslint-config

[![NextCapital Open Source](https://img.shields.io/badge/NextCapital-Open%20Source-%2300a5f6?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA/FBMVEUApfYAAAAApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYk6uC4AAAAU3RSTlMAAJHwVI7ULQcDHcG4FyyxdAE13JQInQLv+G4Kl9AoePvqRynk6UYLnNNrZxrCsxLDsBPPK3Np5UAu51X0YpnSKjbd/oQFGboepg+0cZPEIATmP31l8v0AAAC1SURBVBgZBcGHIsMAFEDReykVWgRtanYYCVp71ay95/v/f3EOMDRcAlVVgZEYLYPCWILA+ERUqgiTU9MpCDOzMVeDaiXqGSiUGvMLLC7F8gqgkjVb7c7q2voGiCp5EZvlre0URRW6vdjZTVBRhe5e7B8kqKiSF3F4dHySoqgkzdbpWf+83QFRuGhcXpFfx80AEG7v7h8e4ek5igzgpRevbwj99w+A7DO+vkGh9oOQ1X//QFXVf8KAFHYrlyAPAAAAAElFTkSuQmCC)](https://www.nextcapital.com)

[![Node Version](https://img.shields.io/badge/node--lts-%3E%3D%2018.20.0-brightgreen)](https://nodejs.org/) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

A series of ESLint configs to enforce Nextcapial's code standards.

## Installation

```bash
npx install-peerdeps --dev @nextcapital/eslint-config
```

## Usage

We export multiple ESLint configurations for your usage.

### Base Config (@nextcapital/eslint-config)

This config contains all rules for base JavaScript development - no jest, jsdoc, react, typescript, etc.

```js
// eslint.config.cjs
const nextcapitalBase = require('@nextcapital/eslint-config');

module.exports = [
  ...nextcapitalBase,
  // ......
];
```

```js
// eslint.config.mjs
import nextcapitalBase from '@nextcapital/eslint-config';

export default [
  ...nextcapitalBase,
  // ......
];
```

### Jest

This config contains all rules for testing with jest. This config does not extend the base config and can be used as a standalone ruleset.

```js
// eslint.config.cjs
const jestConfig = require('@nextcapital/eslint-config/jest');

module.exports = [
  ...jestConfig,
  // ......
];
```

```js
// eslint.config.mjs
import jestConfig from '@nextcapital/eslint-config/jest';

export default [
  ...jestConfig,
  // ......
];
```

### JSDoc

This config contains all rules for testing with JSDoc. This config does not extend the base config and can be used as a standalone ruleset.

```js
// eslint.config.cjs
const jsdocConfig = require('@nextcapital/eslint-config/jsdoc');

module.exports = [
  ...jsdocConfig,
  // ......
];
```

```js
// eslint.config.mjs
import jsdocConfig from '@nextcapital/eslint-config/jsdoc';

export default [
  ...jsdocConfig,
  // ......
];
```

### React

This config contains all rules for developing with React/jsx. This config does not extend the base config and can be used as a standalone ruleset.

```js
// eslint.config.cjs
const reactConfig = require('@nextcapital/eslint-config/react');

module.exports = [
  ...reactConfig,
  // ......
];
```

```js
// eslint.config.mjs
import reactConfig from '@nextcapital/eslint-config/react';

export default [
  ...reactConfig,
  // ......
];
```

### TypeScript

See `@nextcapital/eslint-config-typescript`.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

### Publishing

**IMPORTANT:** Versioning is handled by GitHub Actions through the `publish.yml` workflow configuration. DO NOT ATTEMPT TO PUBLISH PACKAGES YOURSELF. Publishing yourself should fail anyways because you need the auth token for an npm user in the `@nextcapital` organization on npm. This section simply documents how the CI workflow works.

### Maintainers
[Mike Kreiser (@nc-kreiserm)](https://github.com/nc-kreiserm)

