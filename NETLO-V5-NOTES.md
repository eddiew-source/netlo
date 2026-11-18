# Netlo V5 — expanded offer (internal project notes)

This release expands the public-facing service catalogue without creating new back-end product SKUs or changing checkout/ICUK adapter logic.

## Customer offer
- **Connectivity:** Business FTTP/full fibre; SOGEA/SOGFast/other address-dependent broadband; dedicated internet leased lines (up to 10Gbps on suitable infrastructure); point-to-point Ethernet; resilience and managed networks.
- **Voice:** Hosted VoIP, SIP trunks, business numbers and number porting, softphones, IVR/call flows; SMS and fax-to-email can be discussed as separate business communication options.
- **Managed IT:** IT/infrastructure operations, Microsoft 365, cloud, backup and business security (scoped service).
- **Consultancy:** Network design, architecture, migration planning, infrastructure audits and fractional technical leadership. Not dependent on buying Netlo connectivity.
- **Residential:** Home broadband retains its own navigation route and availability checker.
- **Excluded by user request:** web hosting, domain names and VPS.

## Public reference documents consulted (18 November 2026)
- https://www.icuk.net/platforms/telecoms-reseller
- https://www.icuk.net/platforms/overview
- https://www.icuk.net/features/reseller-cp-telecommunications
- https://www.icuk.net/services/hosted-voip
- https://www.icuk.net/services/sip-trunks
- https://www.icuk.net/platforms/leased-line-reseller

## Security and release notes
- All new pages are static content. No new APIs, credentials, database columns or authorisation surfaces were introduced.
- Pricing, product access, support hours, SLAs, handset availability, installation charges, performance and coverage remain quote-dependent until commercial onboarding.
- These notes are project documentation. Never display implementation blockers or wholesale integration status on customer-facing pages.
- Validate with npm ci, npm run typecheck, npm run build, npm audit --audit-level=high and manual browser accessibility/mobile review in a networked development environment before merge.
