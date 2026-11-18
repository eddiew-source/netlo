# Netlo — business-first marketing website

A Next.js App Router / TypeScript rebuild of the Netlo static prototype, with residential broadband and Clerk portal foundations. The design uses the approved **netlo.** blue-dot identity, corporate navy/blue palette and UK network-map graphic. It is **not** an order-management system yet.

## Run locally

Requirements: Node.js 20.9+ and npm. From the project directory:

```sh
cp .env.example .env.local
npm install
npm run dev
```

Visit `http://localhost:3000`. For production builds:

```sh
npm run typecheck
npm run build
npm start
```

Deployment: works on a normal Next.js-compatible Node host (for example Vercel). The domain `netlo.uk` is configured in the sample environment settings; connect DNS separately when ready.

## Included routes

- `/` — marketing homepage, prominent postcode checker, services, business benefits and lead-generation CTAs
- `/business-broadband` — broadband and leased lines
- `/resilient-networks` — failover, SD-WAN and managed networking
- `/managed-it` — managed support, infrastructure and cloud
- `/cybersecurity` — practical security services
- `/about` — Netlo positioning and approach
- `/contact` — enquiry form (server-side integration optional)
- `/home-broadband` — dedicated residential section (also linked from top navigation and homepage)
- `/sign-in`, `/sign-up`, `/portal` — Clerk sign-in and protected My Netlo account portal (requires chosen Clerk app keys)
- `/privacy` — explicitly marked **draft** privacy notice
- `/api/addresses` — postcode-to-address integration boundary
- `/api/availability` — premises availability integration boundary
- `/api/enquiries` — validated server-side email submission (Resend, once configured)

## What works today

- Responsive, accessible navigation and marketing pages
- Frontend UK postcode formatting and validation
- `/api/addresses` accepts a postcode but clearly returns HTTP 503 / `coming_soon` before ICUK setup
- `/api/availability` similarly returns 503 until a real wholesale provider is wired in
- Manual-check link sends the postcode to the enquiry page
- Enquiry form performs client + server validation, honeypot protection, and gives an **honest 503 error** until outbound email credentials are configured
- Per-page metadata, sitemap, robots and Open Graph image
- No analytics or customer accounts installed

## Configure the enquiry form

The form uses the Resend HTTP API from the **server only**, without additional packages. Set these **server-side** environment variables:

- `RESEND_API_KEY`: Resend key
- `ENQUIRY_FROM_EMAIL`: verified sender address, e.g. `Netlo <hello@your-verified-domain>`
- `ENQUIRY_TO_EMAIL`: mailbox receiving enquiries

These are not supplied in the project and should not be committed. Once configured, test delivery, spam handling, abuse prevention and retention. The current honeypot is a starting point, **not** production-grade anti-spam or distributed rate limiting. No submissions are stored in a database.

## ICUK integration plan (not connected)

`lib/connectivity/provider.ts` defines the provider adapter. It intentionally returns `null` until live documentation and credentials are available. The customer flow will be:

1. `POST /api/addresses` with postcode → validate → call ICUK address lookup server-side → return premises IDs and readable addresses.
2. Customer selects a premise from a list (new client UI to be added once API schemas are confirmed).
3. `POST /api/availability` with premises ID → call ICUK server-side → normalise carrier results into Netlo product options.
4. Apply **Netlo retail pricing rules** separately from wholesale costs. Never return wholesale prices or API keys to the browser.
5. Initially submit a lead/quote request. Automated ordering, payments, accounts and service management are later phases.

Before enabling, confirm ICUK auth, access carriers, product schemas, line installation fees, expected speeds, address ID formats, rate limits, caching, retries, error codes and order-status behaviour. Do **not** assume endpoints or credentials based on public examples. Implement API throttling/abuse controls and privacy/legal updates when live lookup is added.

## Before launching

- Confirm and publish business legal identity, address, contact details and a reviewed privacy/complaints policy
- Complete ICUK reseller commercial and API onboarding
- Connect and test a verified contact mailbox
- Add bot protection / robust rate limiting to forms
- Review copy against service offerings and support capabilities
- When ready to be indexed, set `NEXT_PUBLIC_SITE_LIVE=true`; before that, pages are marked `noindex` and `robots.txt` disallows crawling
- Run `npm run typecheck` and `npm run build` in an environment with npm registry access, then test desktop/mobile browsers

## Design / structure

- `app/` — Next.js routes, metadata, CSS and API endpoints
- `components/` — reusable Header, Footer, CTA, checker, enquiry form, service-page template
- `lib/site.ts` — navigation, service cards, site settings
- `lib/connectivity/` — validation, wholesale adapter types and integration boundary
- `public/assets/` — approved logos, favicon, UK-map imagery, social preview

No PHP, CMS, database, checkout or API credentials are required for the marketing preview.

## New integration work

See **`NETLO-TODO.md`** and **`NETLO-SETUP.md`**. This revision uses the selected existing Clerk app and a typed ICUK API adapter. It does **not** include real Clerk credentials, wholesale reseller credentials, an actual verified customer-to-circuit database, or retail billing. The portal intentionally returns no customer data until customer ownership has been explicitly linked and verified.
