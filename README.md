# eslint-configs

[![NextCapital Open Source](https://img.shields.io/badge/NextCapital-Open%20Source-%2300a5f6?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA/FBMVEUApfYAAAAApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYk6uC4AAAAU3RSTlMAAJHwVI7ULQcDHcG4FyyxdAE13JQInQLv+G4Kl9AoePvqRynk6UYLnNNrZxrCsxLDsBPPK3Np5UAu51X0YpnSKjbd/oQFGboepg+0cZPEIATmP31l8v0AAAC1SURBVBgZBcGHIsMAFEDReykVWgRtanYYCVp71ay95/v/f3EOMDRcAlVVgZEYLYPCWILA+ERUqgiTU9MpCDOzMVeDaiXqGSiUGvMLLC7F8gqgkjVb7c7q2voGiCp5EZvlre0URRW6vdjZTVBRhe5e7B8kqKiSF3F4dHySoqgkzdbpWf+83QFRuGhcXpFfx80AEG7v7h8e4ek5igzgpRevbwj99w+A7DO+vkGh9oOQ1X//QFXVf8KAFHYrlyAPAAAAAElFTkSuQmCC)](https://www.nextcapital.com)

[![Node Version](https://img.shields.io/badge/node--lts-%3E%3D%2016.13.0-brightgreen)](https://nodejs.org/) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

A series of ESLint configs to enforce Nextcapial's code standards. Each config is independent of the others, allowing for mixing and matching of configs to suit various use cases.

Configs can be stacked on top of each other:
```json
{
  "extends": [
    "@nextcapital/eslint-config-js-linter",
    "@nextcapital/eslint-config-jest-linter",
    "@nextcapital/eslint-config-jsdoc-linter"
  ]
}
```

## Current configs
* `eslint-config-js-linter` - Enforces basic Javascript standards.
* `eslint-config-react-linter` - Enforces React and JSX standards.
* `eslint-config-jest-linter` - Enforces jest testing library standards.
* `eslint-config-jsdoc-linter` - Enforces JSDoc documentation standards.

## Working with Lerna

This repository uses [lerna](https://lerna.js.org/docs/introduction) to manage multiple packages from the project root.

### Installing

`npx lerna bootstrap`

If you have not installed Lerna at the project root, you may need to run `npm install`. 

### Versioning

`npx lerna version <major|minor|patch>`

Omit the semver bump to version each package one by one through a series of prompts - useful when packages need different version bumps.

**NOTE:** This will version ALL packages in one go.

### Publishing

**IMPORTANT:** Versioning is handled by GitHub Actions through the `publish.yml` workflow configuration. DO NOT ATTEMPT TO PUBLISH PACKAGES YOURSELF. Publishing yourself should fail anyways because you need the auth token for an npm user in the `@nextcapital` organization on npm. This section simply documents how the CI workflow works.

`npx lerna publish from-package`

Lerna will detect any new version bumps in the configured packages and publish those. If there are no packages to publish, lerna simply terminates.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

### Maintainers
[Mike Kreiser (@nc-kreiserm)](https://github.com/nc-kreiserm)
