# eslint-configs

[![NextCapital Open Source](https://img.shields.io/badge/NextCapital-Open%20Source-%2300a5f6?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA/FBMVEUApfYAAAAApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYk6uC4AAAAU3RSTlMAAJHwVI7ULQcDHcG4FyyxdAE13JQInQLv+G4Kl9AoePvqRynk6UYLnNNrZxrCsxLDsBPPK3Np5UAu51X0YpnSKjbd/oQFGboepg+0cZPEIATmP31l8v0AAAC1SURBVBgZBcGHIsMAFEDReykVWgRtanYYCVp71ay95/v/f3EOMDRcAlVVgZEYLYPCWILA+ERUqgiTU9MpCDOzMVeDaiXqGSiUGvMLLC7F8gqgkjVb7c7q2voGiCp5EZvlre0URRW6vdjZTVBRhe5e7B8kqKiSF3F4dHySoqgkzdbpWf+83QFRuGhcXpFfx80AEG7v7h8e4ek5igzgpRevbwj99w+A7DO+vkGh9oOQ1X//QFXVf8KAFHYrlyAPAAAAAElFTkSuQmCC)](https://www.nextcapital.com)

[![Node Version](https://img.shields.io/badge/node--lts-%3E%3D%2016.13.0-brightgreen)](https://nodejs.org/) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

A series of ESLint configs to enforce Nextcapial's code standards.


## Current configs
There are two configs - one for JavaScript development and one for TypeScript. The JavaScript rules are included as the base for the TypeScript config.

Each config includes optional configs for development with jest, jsdoc, and react.

## Installation

```bash
npx install-peerdeps --dev @nextcapital/eslint-config
```

or

```bash
npx install-peerdeps --dev @nextcapital/eslint-config-typescript
```

## Usage

```js
// eslint.config.cjs
const nextcapitalBase = require('@nextcapital/eslint-config');
const nextcapitalJest = require('@nextcapital/eslint-config/jest');
const nextcapitalJSDoc = require('@nextcapital/eslint-config/jsdoc');
const nextcapitalReact = require('@nextcapital/eslint-config/react');

module.exports = [
  ...nextcapitalBase,
  ...nextcapitalJest,
  ...nextcapitalJSDoc,
  ...nextcapitalReact,
  // ......
];
```

```js
// eslint.config.mjs
import nextcapitalBase from '@nextcapital/eslint-config';
import nextcapitalJest from '@nextcapital/eslint-config/jest';
import nextcapitalJSDoc from '@nextcapital/eslint-config/jsdoc';
import nextcapitalReact from '@nextcapital/eslint-config/react';

export default [
  ...nextcapitalBase,
  ...nextcapitalJest,
  ...nextcapitalJSDoc,
  ...nextcapitalReact,
  // ......
];
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

### Maintainers

[Mike Kreiser (@nc-kreiserm)](https://github.com/nc-kreiserm)
