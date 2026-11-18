# Netlo website - Design exploration V2

An alternative visual direction for the existing Next.js/TypeScript site.

Changes:
- Remove the upper utility strip and integrate navigation into the hero palette.
- Simplify desktop navigation with an accessible Solutions disclosure menu.
- Retain the lowercase netlo. wordmark with blue dot and UK map hero.
- Keep the prominent postcode-checking placeholder and honest API-unavailable behavior.
- Use darker slate service sections, calmer blue-grey informational sections, and a non-uniform service grid.
- Replace the second/repeated UK map with an editorial connection/backup/support explanation.
- Reduce pure-white sections on the interior pages.

The postcode integration, customer portal, pricing and backend are unchanged. No fake availability data, support numbers, or vendor partnerships were added.

To apply only the changed source files to your local Git clone, download netlo-design-v2.patch and run from the repository root:

    git apply --check ~/Downloads/netlo-design-v2.patch
    git apply ~/Downloads/netlo-design-v2.patch
    npm install
    npm run dev

Then check http://localhost:3000 and the interior pages. To publish after review:

    git add app/page.tsx app/globals.css components/Header.tsx
    git commit -m "Refine Netlo marketing design"
    git push

The offline design-preview.html is a manually authored visual approximation of the JSX layout for quick inspection, not a validated Next.js screenshot. Open it from within the extracted project folder so its linked CSS and images resolve.

Testing: TSX files parsed without syntax errors, CSS parsed, and patch checked against original source. A complete production build/browser screenshot could not be completed in the current environment because packages are unavailable from the npm registry and browser navigation is blocked by the execution environment.
