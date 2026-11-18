import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root,p),'utf8');
function files(dir) {
  return fs.readdirSync(path.join(root, dir),{withFileTypes:true}).flatMap(e => {
    const p = dir + '/' + e.name;
    return e.isDirectory()?files(p):/\.(?:ts|tsx)$/.test(p)?[p]:[];
  });
}
test('marketing navigation targets exist', () => {
  const s=read('lib/site.ts');
  const links = [...s.matchAll(/href: "(\/[A-Za-z0-9/#&-]+)"/g)].map(m=>m[1]);
  assert.ok(links.length>=12,'Expected full commercial service navigation');
  for(const href of links) {
    const route=href.split('#')[0];
    assert.ok(fs.existsSync(path.join(root, 'app'+route,'page.tsx')), `Missing ${route}`);
  }
});
test('public customer-facing pages contain no web-hosting offers', () => {
  for(const f of files('app').filter(f=>!f.startsWith('app/api/'))) {
    const code=read(f);
    assert.doesNotMatch(code,/\b(?:cPanel hosting|reseller hosting|VPS hosting|web-hosting plans)\b/i, f);
  }
});
test('no static page exposes wholesale or secret environment variable values', () => {
  for(const f of files('app').filter(f=>f.endsWith('/page.tsx') && !f.includes('/portal/') && !f.includes('/sign-'))) {
    const code=read(f);
    assert.doesNotMatch(code,/\bICUK_ACCESS_TOKEN\b|\bRESEND_API_KEY\b|\bCLERK_SECRET_KEY\b/,f);
  }
});
