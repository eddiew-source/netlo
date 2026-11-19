import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read = p => fs.readFileSync(p, 'utf8');
test('postcode checker exists on opted-in business service pages', () => {
  const servicePage = read('components/ServicePage.tsx');
  const checker = read('components/AvailabilityChecker.tsx');
  assert.match(servicePage, /showAvailability && <AvailabilityChecker/);
  assert.match(servicePage, /href="#availability"/);
  for (const route of ['business-broadband', 'leased-lines', 'resilient-networks']) {
    const file = 'app/' + route + '/page.tsx';
    assert.ok(fs.existsSync(file), 'Missing expected service page: ' + file);
    assert.match(read(file), /showAvailability/, file + ' must opt in');
  }
  assert.match(checker, /enquiryService\?: EnquiryService/);
  assert.match(checker, /encodeURIComponent\(service\)/);
});
