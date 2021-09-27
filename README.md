# eslint-configs

[![NextCapital Open Source](https://img.shields.io/badge/NextCapital-Open%20Source-%2300a5f6?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA/FBMVEUApfYAAAAApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYk6uC4AAAAU3RSTlMAAJHwVI7ULQcDHcG4FyyxdAE13JQInQLv+G4Kl9AoePvqRynk6UYLnNNrZxrCsxLDsBPPK3Np5UAu51X0YpnSKjbd/oQFGboepg+0cZPEIATmP31l8v0AAAC1SURBVBgZBcGHIsMAFEDReykVWgRtanYYCVp71ay95/v/f3EOMDRcAlVVgZEYLYPCWILA+ERUqgiTU9MpCDOzMVeDaiXqGSiUGvMLLC7F8gqgkjVb7c7q2voGiCp5EZvlre0URRW6vdjZTVBRhe5e7B8kqKiSF3F4dHySoqgkzdbpWf+83QFRuGhcXpFfx80AEG7v7h8e4ek5igzgpRevbwj99w+A7DO+vkGh9oOQ1X//QFXVf8KAFHYrlyAPAAAAAElFTkSuQmCC)](https://www.nextcapital.com)

[![Node Version](https://img.shields.io/badge/node-%3E%3D%2012.13.1-brightgreen)](https://nodejs.org/) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

A series of ESLint configs to enforce Nextcapial's code standards. Each config is independent of the others, allowing for mixing and matching of configs to suit various use cases.

Configs can be stacked on top of each other:
```json
{
  "extends": [
    "@nextcapital/eslint-config-js-linter",
    "@nextcapital/eslint-config-jest-linter"
    "@nextcapital/eslint-config-jsdoc-linter"
  ]
}
```

## Current configs
* `eslint-config-js-linter` - Enforces basic Javascript standards.
* `eslint-config-react-linter` - Enforces React and JSX standards.
* `eslint-config-jest-linter` - Enforces jest testing library standards.
* `eslint-config-jsdoc-linter` - Enforces JSDoc documentation standards.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

### Maintainers
[Mike Kreiser (@nc-kreiserm)](https://github.com/nc-kreiserm)
