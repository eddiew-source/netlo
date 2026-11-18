# Netlo Clerk + ICUK setup

This is the Next.js 16 marketing site plus **portal foundations**. The project was built from the V2 design, not a live Mac repository checkout.

## Clerk: selected existing application

The selected Clerk app is `app_3MGoc8G1Oo4Az3UssZ2MGbhQNdt`. **Do not run `clerk init` without `--app`,** or create a replacement app. The current code already has the provider, Next.js proxy, and auth pages. From the project directory, run:

```sh
npm install
npx -y clerk@latest auth login
npx -y clerk@latest link --app app_3MGoc8G1Oo4Az3UssZ2MGbhQNdt
npx -y clerk@latest env pull
npx -y clerk@latest doctor
npm run typecheck
npm run build
npm run dev
```

The local sign-in should then work at `/sign-in`, with account creation at `/sign-up` and the portal at `/portal`. Do not print or commit your `.env.local` contents. Configure the matching production keys through Clerk deployment and Vercel environment management only after confirming the correct Vercel project. When Clerk keys are absent, the marketing website stays accessible and the portal honestly says it isn't configured.

To enable organisations later, run `npx -y clerk@latest enable orgs`, then define verified account membership rules and test them before showing another user’s circuits. Do not rely on `orgId` alone for permission to view service data.

## ICUK

Confirmed against public ICUK PHP OpenAPI-generated docs:

- `GET /broadband/address/{postcode}` — returns `addresses[]` with BT address properties
- `POST /broadband/availability` — exact address lookup with `products[]`
- `GET /broadband/online_status/{username}` — per-line online status
- Additional documented APIs: usage, session history, IP allocation, line diagnostics and orders

Authentication is OAuth2 Bearer, and the generated client sends the `ApiPlatform` header as `test` or `live`. Configure the **real reseller base URL and an access token** through `ICUK_API_BASE_URL` and `ICUK_ACCESS_TOKEN`. The API-generated docs use a placeholder localhost host; this project does **not** invent a production endpoint. The test environment is the default. Automatic token renewal is not implemented because the reseller token endpoint/flow has not yet been verified.

The address API sends a signed, short-lived opaque token to the browser rather than trusting a browser-submitted BT address. Set a server-only random `NETLO_LOOKUP_SIGNING_SECRET` of at least 32 characters and use the same secret for all Vercel instances. Availability lists only products the wholesale API marks available; **prices and confirmed provisionability are not implied**.

Portal circuit APIs fail closed until real verified customer-service mappings exist. No username from query strings or browser input is forwarded to ICUK. Billing returns an explicit unavailable response; ICUK reseller bills must not be mistaken for retail customer invoices.

## Status

The published code is **source-ready but not production-tested**. This environment could not reach the npm registry, so the Clerk CLI and install/build could not complete. Test with real credentials and the actual reseller test platform before enabling customer traffic.

Sources: https://clerk.com/docs/nextjs/getting-started/quickstart and https://github.com/ICUK-Net/icuk-api-php
