## Documentation

This repository maintains structured documentation in `.github/docs/`. When making code changes that affect architecture, APIs, configuration, data flow, or component boundaries, update the corresponding `.github/docs/` content in the same PR. Follow the `documentation-upkeep` instruction.

### Documentation Routing

Read the relevant doc BEFORE exploring code — it saves context window space and avoids redundant discovery.

| You need to understand... | Read first |
|---------------------------|------------|
| System architecture, component relationships, entry points | `.github/docs/README.md` |
| JavaScript package internals, base rules, domain configs | `.github/docs/components/javascript-package.md` |
| TypeScript package internals, TS-over-JS layering | `.github/docs/components/typescript-package.md` |
| How configs are composed at runtime | `.github/docs/flows/config-composition.md` |
| How to add or modify ESLint rules | `.github/docs/guides/adding-rules.md` |
| How to create a new domain config | `.github/docs/guides/adding-a-domain-config.md` |
| Getting started, setup, development workflow | `.github/docs/onboarding/getting-started.md` |
| Domain vocabulary, proprietary terms | `.github/docs/reference/glossary.md` |
| Repository structure, directory layout | `.github/docs/reference/repository-map.md` |
| Contributing, DCO, code of conduct | Root `README.md`, `CONTRIBUTING.md` |
