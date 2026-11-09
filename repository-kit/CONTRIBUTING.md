# Contributing to Umbral

Bug reports, translations, documentation, testing and focused code changes are welcome. Discuss large features before implementation. Read CODE_OF_CONDUCT.md; use SECURITY.md for vulnerabilities.

## Reports

Include exact version and build ID from about:support, OS, architecture, package format, steps, expected behavior and actual behavior. Search existing issues. Comparisons with upstream are helpful but not required.

Review screenshots and logs. Never upload complete profiles, passwords, API keys, cookies or browsing history. Use a temporary profile when possible without changing a personal profile or stopping unrelated browser processes.

## Source layout

Work from the Umbral repository root. engine/ is a separate generated repository, not the persistent source of truth. Browser sources live in src/, prefs/, configs/, locales/, surfer.json and patches under src/. Register new resources and symlinks using the existing build flow. Avoid duplicate patches creating the same file.

For a new checkout with project/Mozilla build prerequisites installed:

```sh
npm ci
npm run init
npm run build
```

For an already initialized tree after a UI change:

```sh
npm run import
MOZ_PURGE_CACHES=1 npm run build:ui
git diff --check
```

Some changes require a full build. See docs/test-builds.md and docs/engine-source-bases.md. Preserve work before importing; do not use reset or delete the engine to mask a patch problem. Keep the pinned base unchanged unless updating it is the explicit task.

## Pull requests

Explain the problem, final behavior, validation and remaining limits. Separate implemented behavior from runtime verification. Use meaningful tests and temporary profiles; do not present a successful build as an end-to-end test.

Commit persistent sources and needed scripts/docs, not generated engines, packages, caches, profiles or secrets. Preserve upstream credits and licenses. Do not globally rename Zen/Firefox identifiers or alter an original signed uBO XPI as part of unrelated work.
