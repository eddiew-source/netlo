/** Security-boundary regression checks requiring no customer credentials. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

function filesIn(dir) {
  return fs.readdirSync(path.join(root, dir), { withFileTypes: true }).flatMap(entry => {
    const rel = `${dir}/${entry.name}`;
    return entry.isDirectory() ? filesIn(rel) : /\.(?:ts|tsx|js|mjs)$/.test(entry.name) ? [rel] : [];
  });
}

test('local environment files and keys are not committed', () => {
  const files = execFileSync('git', ['ls-files'], { cwd: root, encoding: 'utf8' }).trim().split('\n');
  assert.equal(files.some(name => /^\.env(?:\.|$)/.test(name) && name !== '.env.example'), false,
    'Remove tracked .env files and rotate credentials that were exposed');
  assert.match(read('.gitignore'), /^\.env\.\*$/m);
});

test('browser code does not import the wholesale API client or secrets', () => {
  const clientFiles = [...filesIn('components'), ...filesIn('app')].filter(p => /^['"]use client['"]/.test(read(p).trimStart()));
  for (const p of clientFiles) {
    const source = read(p);
    assert.doesNotMatch(source, /@\/lib\/(?:icuk|customer)\//, p);
    assert.doesNotMatch(source, /process\.env\.(?:ICUK_|CLERK_SECRET_KEY|NETLO_LOOKUP_SIGNING_SECRET)/, p);
  }
});

test('portal routes authenticate and resolve an explicitly authorised service', () => {
  const service = read('app/api/portal/services/[serviceId]/status/route.ts');
  assert.match(service, /await auth\(\)/);
  assert.match(service, /await resolveAccessibleService\(/);
  assert.match(service, /if \(!link\)/);
  const guard = read('lib/customer/services.ts');
  assert.match(guard, /return null;/); // fail-closed until verified datastore is integrated
});

test('user-supplied URLs are never forwarded to ICUK', () => {
  const source = read('lib/icuk/client.ts');
  assert.match(source, /path\.startsWith\('\/broadband\/'\)/);
  assert.match(source, /redirect:\s*'error'/);
  assert.match(source, /cache:\s*'no-store'/);
  assert.match(source, /response\.body/); // bounded upstream payload read
});

test('no internal staging messages are displayed in the public site', () => {
  const siteFiles = [...filesIn('components'), ...filesIn('app')].filter(p => !p.startsWith('app/api/'));
  const bad = [
    /Preview website\s*[—-]/i,
    /company details to be finalised before launch/i,
    /Wholesale lookups will activate once/i,
    /Our ICUK account is connected/i,
  ];
  for (const p of siteFiles) for (const re of bad) assert.doesNotMatch(read(p), re, p);
});

test('unsafe dynamic HTML evaluation is absent in app code', () => {
  for (const p of [...filesIn('components'), ...filesIn('app'), ...filesIn('lib')]) {
    if (p === 'app/api/enquiries/route.ts') continue; // server escapes markup for outgoing email
    assert.doesNotMatch(read(p), /dangerouslySetInnerHTML|\beval\s*\(/, p);
  }
});
