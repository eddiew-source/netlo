# Netlo v4 — map and security update

This revision addresses feedback on the original creative mockup and the foundational security posture. It preserves the business-first layout, residential section and Clerk/ICUK integration scaffolding from v3.

**Site changes:** Restores a crisp, transparent, blue UK-and-Ireland connectivity illustration integrated into the dark hero; no rectangular JPEG or heavy fade filters. Removes internal wholesale setup, staging and preview status messages from marketing pages, footer and availability checker. Keeps the postcode checker visible, with a manual enquiry fallback if live data is not available.

**Security changes:** Next.js 16.4.6, React 19.3.1, Clerk 7.10.2, Node 26 LTS, TypeScript 6.0.3 (intentionally not TS7 pending compatibility validation), migrated `proxy.ts`, browser response headers, bounded JSON ingress and same-origin checks. Also adds `npm run security:check` and a GitHub Actions audit/build workflow.

## Apply to the existing checkout

Use the packaged full source to overwrite the project files (preserve your own `.env.local` and the `.git` folder), or apply the v3-to-v4 patch. The patch includes the new binary map artwork.

```sh
# from your local netlo-nextjs directory
# after applying changes:
npm install
npm run security:check
# ensure package-lock.json is checked in so CI uses npm ci
git add -A
git commit -m "Restore Netlo UK map and upgrade security baseline"
git push
```

The download was produced without access to npm. **No production build, dependency audit, or live site test has been performed.** Do not treat it as release-approved until those checks complete and Clerk sign-in works against your selected application.

Vercel should use Node 26.x (see package.json `engines`). Configure production credentials in Vercel, never in committed files, and confirm the project is linked to the intended account. Do not enable portal circuit tools until customer-to-circuit tenancy and permissions are implemented and tested. See `SECURITY-REVIEW.md`.
