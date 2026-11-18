# Netlo — Next.js marketing site and customer-portal foundation

Business-first Netlo site with residential broadband, connectivity, voice,
managed IT, security and consultancy. No wholesale order automation, customer
billing or verified circuit datastore is live yet.

## Run the site

Use Node.js 26 (see `.nvmrc`) and npm:

```sh
npm install
npm run dev
npm run security:check
```

**Commit the generated `package-lock.json`** after a reviewed install. GitHub
Actions requires it, and runs `npm ci`, `npm audit --audit-level=high`, TypeScript,
security regression tests and a production build. Never commit `.env.local`.

## Marketing pages

- `/` — business-first homepage and prominent postcode checker
- `/business-broadband` — business FTTP and address-dependent broadband
- `/leased-lines` — dedicated internet and point-to-point Ethernet
- `/business-voice` — hosted VoIP, SIP trunks, numbers, SMS, fax-to-email
- `/resilient-networks` — backup connectivity, multi-site networking, managed firewall
- `/managed-it` — ongoing IT and infrastructure support
- `/cybersecurity` — security planning and implementation
- `/consultancy` — architecture, migrations, project work, fractional leadership
- `/home-broadband` — Netlo Home residential services
- `/about`, `/contact`, `/privacy` — information and customer enquiry

Web hosting, domain registration and VPS are intentionally excluded.

## Customer platform

- `/sign-in`, `/sign-up` and `/portal` — Clerk authentication and portal shell
- `/api/addresses` and `/api/availability` — ICUK API adapter, disabled by
  default until `NETLO_PUBLIC_LOOKUPS_ENABLED=true` and reseller configuration
- `/api/enquiries` — server-side Resend email; disabled by default until
  `NETLO_PUBLIC_ENQUIRIES_ENABLED=true` and verified anti-abuse controls
- `/api/portal/services` and service status — authenticated but **fail closed**
  until verified account-to-circuit mappings exist
- `/api/portal/billing` — explicit unavailable response, not invented bills
- `database/001_customer_access.sql` — minimal mapping design, NOT executed

See `NETLO-SETUP.md`, `NETLO-TODO.md`, `NETLO-V5-RELEASE.md`, and
`SECURITY-REVIEW.md` for private implementation and launch requirements.

This project is not ready to handle real customer bills or network controls.
