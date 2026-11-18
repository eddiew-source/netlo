# Netlo setup (internal)

The project targets Next.js 16.4.6, Clerk SDK 7.10.2, React 19.3.1 and Node.js 26.
The existing Clerk application is `app_3MGoc8G1Oo4Az3UssZ2MGbhQNdt`.
Do not run unqualified `clerk init` or create another application.

## Local development

```sh
nvm install 26
nvm use 26
npm install
npx -y clerk@latest auth login
npx -y clerk@latest link --app app_3MGoc8G1Oo4Az3UssZ2MGbhQNdt
npx -y clerk@latest env pull
npm run security:check
npm run dev
```

Configure local secrets in `.env.local` ONLY. Make sure `.env.local` is not
tracked (`git ls-files --error-unmatch .env.local` should fail). If it was
previously public, rotate all actual credentials; removing it from HEAD does
not remove it from repository history.

## ICUK

Configure the actual API base URL, access token, environment, and an address
signing secret server-side only. The public ICUK OpenAPI sample is not a
production API host. API access and live response schemas must be verified
against the reseller test account first. Lookups are OFF unless explicitly
activated with `NETLO_PUBLIC_LOOKUPS_ENABLED=true` after enabling WAF and
rate limiting. A real pricing layer and quote flow still need implementing.

## Enquiries

Configure `RESEND_API_KEY`, `ENQUIRY_FROM_EMAIL` and `ENQUIRY_TO_EMAIL` on the
server. Mail delivery is OFF until `NETLO_PUBLIC_ENQUIRIES_ENABLED=true`; do
not enable until rate limits and bot controls are tested. Never use real
customer email addresses in automated tests.

## Portal

Clerk identifies users. The Netlo datastore must separately establish verified
account memberships and circuit ownership. The SQL schema in `database/` is
an unexecuted design. Portal requests deny access by default until this mapping
has been implemented and cross-tenant tests are passing. Billing requires a
retail customer billing provider or retail-safe ICUK integration.

## Git and CI

Run `npm install` to generate `package-lock.json`, then commit it alongside
this release. GitHub Actions rejects a missing lockfile to avoid unpredictable
transitive dependencies. Vercel should not be allowed to publish customer
features until security checks and legal/operational launch gates pass.
