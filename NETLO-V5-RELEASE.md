# Netlo V5 release notes — internal only

## What's changed
- Expanded customer catalogue: FTTP, address-dependent broadband, leased lines,
  point-to-point Ethernet, hosted VoIP, SIP trunks, phone numbers, SMS and fax,
  managed networks, cybersecurity, IT and infrastructure consultancy.
- Dedicated pages for leased lines, business voice and consultancy.
- Home broadband remains visible in navigation and the homepage.
- Explicitly excludes web hosting, domains and VPS.
- No unconfirmed pricing, speed promises, support-hour guarantees or customer claims.
- Fixed GitHub Actions checkout SHA (original failure occurred during "Set up job",
  before dependencies or the security audit).
- Security gates for wholesale lookups and outbound enquiry email; both off by default.
- Bounded ICUK response bodies and fail-closed customer-to-circuit access retained.
- Added minimum customer-account database schema for later review (not deployed).
- Added offline security regression tests and weekly Dependabot checks.
- Ignore all .env variants other than .env.example; do not commit credentials.

## Release blockers
1. **Security**: repo formerly tracked .env.local. Rotate any actual keys that were ever
   committed, and review/scrub git history with a considered plan if necessary.
2. **Lockfile**: run `npm install` in a networked environment and commit the resulting
   `package-lock.json` before enabling CI. Without it, the CI fails deliberately.
3. **Build and audit**: run `npm run security:check` after installation and review
   each error. Offline JS structural tests do not prove the app is vulnerability-free.
4. **Clerk**: link the chosen existing Clerk application and test sign-in, sign-up,
   organisation membership and denied cross-customer access.
5. **ICUK**: verify account access, API base URL and real response schema in sandbox,
   then activate lookups only after WAF / distributed rate limits are tested.
6. **Portal**: do not expose customer bills or circuit data until the verified
   customer-to-circuit datastore, audit trail and authorisation tests exist.
7. **Commercial**: confirm ICUK eligibility and product attributes; complete
   customer-facing legal/regulatory documents and retail terms.

Note: No GitHub push or Vercel release has been performed by this environment.
