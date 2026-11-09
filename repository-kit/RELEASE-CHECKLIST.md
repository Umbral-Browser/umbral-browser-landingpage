# Before an experimental release

- Identify the exact commit, pinned base, build ID and package checksums.
- Confirm the engine includes applicable security fixes; do not call an old base secure just because uBO updates.
- Generate packages from persistent sources and verify regeneration independently of the working engine state.
- Test first launch, onboarding, ordinary restart and an existing Umbral profile.
- Verify uBO installation/popup, AI opt-in and cancellation, search, shortcuts and ETP metric labels.
- Check file dialogs, downloads, graphics and intended desktop integration in the packaged sandbox.
- Verify target architecture and runtime requirements; do not claim platform support before native execution.
- Review language, keyboard access and accessibility limits honestly.
- Publish installation, backup, update/rollback and known-limit information matching the artifact.
- Mark the release experimental. Do not advertise a working automatic browser updater or production signature that does not exist.
- Configure monitored security and moderation contacts before inviting a broader community.
- Keep signing keys outside the repository; establish production trust and key management before claiming signed-update protection.

This is a checklist for future work, not evidence that the items passed.
