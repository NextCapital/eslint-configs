# Getting Started

## Why This Repo Exists

This repo is the ESLint policy source of truth for all NextCapital JavaScript and TypeScript projects. Instead of each project maintaining its own `.eslintrc` or `eslint.config.*` with duplicated rule definitions, projects depend on these shared config packages. Linting standard changes made here propagate to consumers on their next dependency update.

## Prerequisites

- Node.js (version requirement defined in `javascript/package.json` and `typescript/package.json` `engines` field)
- npm (version requirement defined in the same `engines` field)
- Git with DCO sign-off capability (`git commit -s`)

## Repository Structure

See [Repository Map](../reference/repository-map.md) for the full directory structure.

The repository contains two active npm packages and a set of deprecated legacy packages:

| Directory | Package | Status |
|-----------|---------|--------|
| `javascript/` | `@nextcapital/eslint-config` | **Active** — base JavaScript config |
| `typescript/` | `@nextcapital/eslint-config-typescript` | **Active** — extends JS config for TypeScript |
| `deprecated/` | Four legacy `eslint-config-*-linter` packages | **Deprecated** — retained for reference only |

## Quick Setup

```bash
# Clone and install
git clone <repo-url>
cd eslint-configs

# Install dependencies for both packages
cd javascript && npm ci && cd ..
cd typescript && npm ci && cd ..

# Verify everything works
cd javascript && npm run lint && cd ..
cd typescript && npm run lint && cd ..
```

## How the Codebase is Organized

Read the [architecture overview](../README.md) for the full picture.

## Common Tasks

| Task | Guide |
|------|-------|
| Add or modify an ESLint rule | [Adding Rules](../guides/adding-rules.md) |
| Create a new domain config (e.g., for a new plugin) | [Adding a Domain Config](../guides/adding-a-domain-config.md) |
| Inspect the resolved config for debugging | Run `npm run inspect-config` (or variant) from the package directory |
| Lint the config files themselves | Run `npm run lint` from `javascript/` or `typescript/` |

## Development Workflow

1. Create a feature branch from `main`
2. Make changes in the appropriate package directory
3. Run `npm run lint` in the affected package directory to validate
4. Commit with DCO sign-off (`git commit -s`)
5. Open a PR using the [PR template](../../PULL_REQUEST_TEMPLATE.md) — classify the semver impact
6. CI will run lint validation on both packages
7. On merge to `main`, the publish workflow automatically publishes to npm

## Key Conventions

See [Adding Rules](../guides/adding-rules.md) for the full rule-authoring conventions. Summary:

- **Alphabetical rule ordering** — Enforced by `sort-keys` in `internal.js`
- **Comment every rule** — See `javascript/base/best-practices.js` for examples
- **Semver-gated TODOs** — Defer breaking rule changes with `// TODO: semver-major, enable`
- **No manual publishing** — Automated via GitHub Actions (see `CONTRIBUTING.md`)
- **DCO sign-off required** — All commits need `Signed-off-by` (see `DCO.md`)
