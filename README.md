# NAND Atlas — private migration

Prepared from the verified 32-paper / 55-relation map.

The GitHub repository is https://github.com/sumin303/nand-atlas and is private.
The website migration has NOT been deployed.
GitHub Pages publishing is intentionally absent. `.openai` and the former Git history are excluded.

## Pending account setup

1. Upload the prepared source to the private GitHub repository.
2. Sign in to Cloudflare; configure an email authentication provider and an Access Allow policy for the single owner email supplied in the conversation.
3. Protect production, all preview aliases, and any custom domain. The Pages preview-only toggle does not protect the production URL.
4. Configure and validate origin-side JWT verification before uploading the real map. Missing configuration must deny access.
5. Connect only this repository, configure validation and `dist` output, and disable Functions fail-open.
6. Verify anonymous requests to the homepage and JS/data assets are blocked, then verify owner authentication. Publish only after the private boundary is established.

No Cloudflare account, email allowlist, token, deployment, or access policy has been created by this preparation. Do not treat this folder as an authenticated deployment yet.

## Local checks

`node scripts/validate.mjs`

The existing ChatGPT-hosted private site is unchanged.
