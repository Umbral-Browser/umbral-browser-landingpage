# Umbral security policy

Umbral Browser is experimental. There is no guaranteed support window, response deadline, bug bounty or operational automatic browser update channel. Do not treat a development build as a maintained stable security release.

## Reporting vulnerabilities

Do not disclose exploit details, credentials, or third-party data in public issues or pull requests.

Use **Security → Report a vulnerability** in [Umbral's repository](https://github.com/Martin08ABM/umbral-browser/security) **if private vulnerability reporting is enabled**. This document does not enable that GitHub feature.

If it is unavailable, open an issue asking only for a private security contact, without technical details. Wait for a verified private route before sharing the report. No dedicated security email is configured by this draft.

A private report should include the exact version and build ID, platform, minimal reproduction, observed impact, and a proof of concept without personal data. Test only systems and data you are authorized to investigate.

Umbral depends on Zen, Firefox, uBlock Origin and other components. Explain where you reproduced an issue; maintainers can coordinate with the appropriate upstream privately. Do not assume browser-engine fixes reach Umbral until they have been incorporated and distributed.

## Maintainer action before wider distribution

Enable and test private reporting, publish a monitored contact, establish a base-update process, and document supported builds. Do not promise response times or a security audit that have not been established.
