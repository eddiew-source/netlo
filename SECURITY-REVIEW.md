# Netlo security review — development baseline, 18 Nov 2026

**Not a vulnerability-free certification.** A verified production security posture requires a clean install, complete dependency audit, production build, provider credential review, application tests, and penetration testing. NPM access was blocked in the generation environment, so that validation remains **open**.

## Applied

- Pinned currently supported Next.js **16.4.6**, React/React DOM **19.3.1**, Clerk Next.js **7.10.2**, and Node.js **26 LTS** in `package.json`. TypeScript **6.0.3** is used rather than 7, to avoid unsupported/experimental compiler integration with Next.js until an actual build verifies compatibility.
- Renamed `middleware.ts` to `proxy.ts` per Next.js 16 conventions. Backend routes and pages still require their own auth checks.
- Added defensive headers: no framework identification, `nosniff`, frame blocking, restrictive browser permissions, safe referrer policy.
- Bounded JSON parsing on public routes and origin checks for browser POST requests. These checks are *not* a substitute for API rate limits.
- Private service-to-customer mapping deliberately fails closed; never infer service ownership from user-supplied ICUK identifiers.
- Removed user-facing build/wholesale-status messages; tracked them in internal TODOs only.
- Committed no credentials; `.env.local` must remain outside version control.
- Added GitHub Actions workflow to run `npm ci`, `npm audit --audit-level=high`, TypeScript and a production build. The workflow intentionally fails without a committed lockfile.

## Mandatory before launch

1. From project root run `npm install`, commit `package-lock.json`, and run `npm run security:check`. Verify both development and production builds against Node.js 26, Clerk sign-in/out and mobile layouts.
2. Verify the latest security advisories for Next.js, React, Clerk and all transitive packages on each release. A passing `npm audit` is a baseline, **not proof of no vulnerabilities**.
3. Set GitHub branch protection to require the CI security/build check before merges. Enable Vercel deployment checks and deployment protection for previews.
4. Configure real edge/WAF rate limits for `/api/addresses`, `/api/availability`, `/api/enquiries`, and sensitive portal endpoints. Add fraud, bot and quota monitoring.
5. Design/enforce least-privilege per-account permissions in the persistent service mapping database. Verify cross-tenant isolation including multi-org staff and MSP delegation before exposing any ICUK account data.
6. Implement a CSP with Clerk's actual required hosts and nonce strategy; test auth, fonts, assets and any analytics on Vercel before enforcing. Restrict outbound API hosts, rotate secrets and use separate test/live ICUK credentials.
7. Threat-model postcode enumeration, privacy of address responses, malicious form submissions, payment redirects, fault management, diagnostic tools and support impersonation. Log admin actions without storing secrets or unnecessary PII.
8. Conduct external penetration test and incident-response exercise before processing payments or enabling write actions against connections.

## Internal product TODOs

- ICUK reseller sandbox credentials, wholesale API schema validation, product entitlement rules, circuit status/usage/diagnostic mapping.
- Clerk application linked to existing account; user/org association and MFA. Avoid client-side trust in `orgId` or claimed circuit references.
- Billing: choose provider, minimise retained financial data, and meet required invoice record retention.
- Separate customer-facing copy from integration/launch notes. Site must not imply live lookups until operational; provide a useful manual fallback upon attempted lookup.
