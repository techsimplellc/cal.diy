---
version: "1.0"
updated: 2026-10-17
---

# Fork Changes

Upstream: calcom/cal.diy (mirror branch `main`)
Fork: techsimplellc/cal.diy (product branch `custom`, deployed by Ansible)

## Upstream conventions

- License: MIT
- Commit format: Conventional Commits (`fix(scope): …`), PR number appended on merge
- Sign-off: none required (no DCO or CLA in CONTRIBUTING.md)
- PR target branch: `main`; tick "Allow edits from maintainers"; `refs #N` / `fixes #N` in the description
- PR size: under 500 changed lines and under 10 code files, one concern per PR
- Test command: `yarn test` (vitest); also `yarn lint`, `yarn type-check`; E2E `yarn test-e2e`

## Changes

| Change | Branch | Type | Upstream PR | Status |
|---|---|---|---|---|
| Remove upstream `CLAUDE.md` (symlink to `AGENTS.md`) so the claude-config context symlink can be used | committed on `main` (d7c2b4b), carried on `custom` | fork-only | n/a | move off `main` pending |

## Version History

| Version | Date | Change |
|---|---|---|
| 1.0 | 2026-10-17 | Ledger created |
