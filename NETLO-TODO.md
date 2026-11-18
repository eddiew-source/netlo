# Netlo development tracker — 18 November 2026 (internal)

## Customer-facing marketing
- [x] Business-first navy/blue identity and repaired UK hero map
- [x] Residential broadband page, navigation and postcode journey
- [x] Services: broadband, leased lines/Ethernet, hosted VoIP, SIP, numbers/SMS/fax,
      managed networks, cyber and infrastructure consultancy
- [x] Home broadband as a secondary customer route
- [x] Remove preview text and wholesale launch notes from public content
- [x] Remove web hosting, domain registration and VPS offers
- [ ] Verify all product eligibility, retail plans and commercial terms with ICUK
- [ ] Complete legal identity, privacy, accessibility, complaints and customer terms

## Platform and customer account
- [x] Typed ICUK address / availability adapter; HTTPS + bearer token; sandbox default
- [x] Signed short-lived address selections; no credentials or wholesale price to browser
- [x] Public lookup activation explicitly disabled until enabled after testing
- [x] Clerk sign-in/up and My Netlo skeleton for selected existing application
- [x] Service access denies all until verified customer-to-circuit mapping is implemented
- [x] Minimal database schema drafted (not migrated or connected)
- [ ] Test Clerk real sign-in and organise individual vs business members
- [ ] Implement real verified account membership and circuit mapping datastore
- [ ] ICUK sandbox auth/response contract and throttling validation
- [ ] Implement distributed lookup throttling / bot protection before activation
- [ ] Expose read-only service status, usage, sessions, IP, diagnostics with ACL tests
- [ ] Evaluate ICUK retail billing vs a separate billing provider; do not show wholesale invoices
- [ ] Add billing, fault reporting and delegated MSP access only after permissions tested

## CI and security
- [x] Correct checkout full SHA; GitHub failure was job setup, not code audit
- [x] Add .env.local and other .env files to .gitignore
- [x] Pin runtime dependencies to Next 16 / Clerk 7 / Node 26 as of 18 Nov 2026
- [x] Offline fail-closed/static security regression tests added
- [x] Limit ICUK response size; avoid raw diagnostics / unbounded upstream responses
- [x] Add Dependabot weekly dependency and GitHub Actions updates
- [ ] **URGENT** Rotate any live credentials ever committed in public repo .env.local
- [ ] **BLOCKER** Generate and commit package-lock.json from a trusted npm install
- [ ] **BLOCKER** Pass npm audit, TypeScript, tests and production build on actual install
- [ ] Test Vercel / Clerk origin, CSP, session and cookie controls
- [ ] Validate all tenant isolation rules before enabling real customer data
- [ ] Security threat model, access review and external testing before billing/network writes
