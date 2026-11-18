# Netlo build tracker — 18 November 2026

## Completed in this source revision

- [x] Business-first V2 marketing design retained; Netlo Home made visible in navigation and on homepage
- [x] Dedicated residential broadband journey with postcode checker and honest no-price/no-coverage messaging
- [x] Existing Clerk application **app_3MGoc8G1Oo4Az3UssZ2MGbhQNdt** selected (no replacement application created)
- [x] Clerk integration code: Next.js 16 proxy, provider, sign-in/up, user controls and protected My Netlo page
- [x] Portal API resource guards and explicit fail-closed customer-to-circuit access boundary
- [x] Publicly documented ICUK lookup adapter (address, exact-match availability, signed address selection)
- [x] ICUK read-only request helper with bearer token, `ApiPlatform: test`, HTTPS enforcement and no client-side credentials
- [x] Billing placeholder that returns unavailable, not invented invoices

## Required to complete setup — blocked on credentials, real provider configuration or decisions

- [ ] On the Mac, run Clerk CLI login and link the **existing** selected app; pull development keys locally
- [ ] Add Clerk dev/production keys to the appropriate Vercel environments (do not commit them)
- [ ] Install dependencies, run `npm run typecheck`, `npm run build` and test Clerk sign-in and a real-user session
- [ ] Verify ICUK API base URL and OAuth token issuance/refresh with reseller account; connect **test** environment first
- [ ] Validate ICUK real response schemas, response sizes and rate limits before enabling public lookup
- [ ] Add distributed rate limiting/bot protection for availability and contact APIs
- [ ] Implement verified customer ↔ account ↔ circuit mappings in a small database, with audit trail and admin onboarding process
- [ ] Add customer-safe usage, session, IP and diagnostics views once access control has real mapped circuits
- [ ] Select billing source (ICUK billing or dedicated retail billing platform); integrate customer invoices, not reseller invoices
- [ ] Define Clerk organisation roles / delegated MSP access and test cross-tenant denial scenarios
- [ ] Confirm wholesale products, residential pricing and legal policy/complaints before going live
- [ ] Integrate with GitHub and Vercel after account permissions are fixed

## Suggested minimum datastore (no database included yet)

- `accounts`: internal UUID, account type, nullable Clerk organisation ID, billing system reference
- `account_members`: account UUID, Clerk user ID, explicit role, verification timestamp
- `services`: internal UUID, account UUID, ICUK circuit username/reference (server only), retail service label, status
- `audit_events`: immutable ID, action, account UUID, actor Clerk user ID, timestamp, minimal diagnostic metadata

Do not mirror wholesale customer profiles or cache raw line diagnostics unnecessarily. Authenticate with Clerk, then authorise **every** resource using the verified account-to-service mapping before any ICUK request.

## Website and security gate (18 November 2026)
- [x] Remove internal integration-status and preview notices from customer-facing website.
- [x] Replace boxed, faded map asset with new transparent full-resolution UK network artwork.
- [x] Pin Next.js 16.4.6, React 19.3.1, Clerk 7.10.2; use Node.js 26 LTS.
- [x] Rename middleware.ts to proxy.ts for Next.js 16.
- [ ] Run a clean `npm install` to generate and COMMIT package-lock.json, then `npm audit --audit-level=high` and `npm run build`. Registry is unavailable in generation environment.
- [ ] Review CSP with Clerk allowed origins and implement after login-flow test; do not apply untested CSP that breaks login.
- [ ] Enable Vercel WAF/edge rate limits on public lookup and enquiry routes prior to activating APIs.
- [ ] Validate reseller API responses against schema; enforce circuit/account ACL with persistent DB before exposing portal.
- [ ] External penetration test and threat model before enabling payments or circuit management.
