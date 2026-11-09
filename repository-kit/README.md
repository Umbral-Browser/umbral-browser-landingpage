# Browser repository handoff — drafts to review

These files belong to the **browser** repository, not to the Astro build. They are included for Martin to review and copy later. Nothing here has been applied to the browser checkout or GitHub settings.

## Review before copying

1. Set the public website URL after registering and configuring a domain. The Astro default is a configurable example, not proof of ownership.
2. Enable and test GitHub private vulnerability reporting. SECURITY.md alone does not enable it.
3. Establish a private moderation contact, then update CODE_OF_CONDUCT.md and the website. Do not send Umbral reports to Zen's email.
4. Review existing issue labels and automation before replacing templates. These templates do not assume labels already exist.
5. Link the website's documentation from the browser README and remove obsolete support/donation routes that point at upstream. Keep attribution, license notices and technical identifiers.
6. Keep browser security maintenance ahead of public release. There is no working production browser updater, stable support guarantee or cross-platform certification in this handoff.

Copy individual files to the equivalent browser-repository paths. Review the diff before committing; do not overwrite unrelated edits or stage generated engine/build/profile files.

The web remains the user-facing guide. Repository files exist so GitHub can expose contribution, security and conduct information at the point where people participate.
