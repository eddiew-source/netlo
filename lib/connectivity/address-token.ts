import { createHmac, timingSafeEqual } from 'node:crypto';

type Address = Record<string, string>;
type Payload = { address: Address; iat: number };
const allowed = ['sub_premises','premises_name','thoroughfare_number','thoroughfare_name','locality','post_town','county','postcode','district_id','nad_key'] as const;

export function normaliseAddress(raw: unknown): Address | null {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
  const object = raw as Record<string, unknown>;
  const result: Address = {};
  for (const key of allowed) {
    const value = object[key];
    if (typeof value === 'string' && value.length <= 150) result[key] = value.trim();
  }
  return result.postcode ? result : null;
}
function secret() {
  const key = process.env.NETLO_LOOKUP_SIGNING_SECRET;
  if (!key || key.length < 32) throw new Error('Lookup signing secret is not configured');
  return key;
}
export function signAddress(address: Address): string {
  const payload = Buffer.from(JSON.stringify({ address, iat: Date.now() } satisfies Payload)).toString('base64url');
  const signature = createHmac('sha256', secret()).update(payload).digest('base64url');
  return `${payload}.${signature}`;
}
export function verifyAddress(token: string): Address | null {
  if (token.length > 2800 || !/^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/.test(token)) return null;
  const [payload, signature] = token.split('.');
  const expected = createHmac('sha256', secret()).update(payload).digest();
  const received = Buffer.from(signature, 'base64url');
  if (received.length !== expected.length || !timingSafeEqual(received, expected)) return null;
  try {
    const parsed: unknown = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (!parsed || typeof parsed !== 'object' || !('iat' in parsed) || !('address' in parsed)) return null;
    const data = parsed as Payload;
    if (typeof data.iat !== 'number' || data.iat > Date.now() + 60000 || Date.now() - data.iat > 20 * 60000) return null;
    return normaliseAddress(data.address);
  } catch { return null; }
}
