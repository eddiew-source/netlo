/** Minimal server-only ICUK REST client. Keep bearer tokens on the server.
 * Routes are grounded in ICUK's public OpenAPI PHP client; base URL and OAuth
 * token issuance/renewal must be confirmed on the reseller account.
 */
export function icukConfigured() {
  return Boolean(process.env.ICUK_API_BASE_URL && process.env.ICUK_ACCESS_TOKEN);
}

export async function icukGet(path: string): Promise<unknown> {
  return icukRequest('GET', path);
}
export async function icukPost(path: string, body: object): Promise<unknown> {
  return icukRequest('POST', path, body);
}
async function icukRequest(method: 'GET' | 'POST', path: string, body?: object): Promise<unknown> {
  const base = process.env.ICUK_API_BASE_URL;
  const token = process.env.ICUK_ACCESS_TOKEN;
  if (!base || !token) throw new Error('ICUK is not configured');
  if (!path.startsWith('/broadband/') || path.includes('..')) throw new Error('Invalid ICUK endpoint');
  const baseUrl = new URL(base);
  if (baseUrl.protocol !== 'https:' || baseUrl.username || baseUrl.password) throw new Error('ICUK base URL must use HTTPS');
  const url = new URL(path, `${baseUrl.origin}${baseUrl.pathname.replace(/\/$/, '')}/`);
  if (url.origin !== baseUrl.origin) throw new Error('Unexpected ICUK origin');
  const platform = process.env.ICUK_API_PLATFORM === 'live' ? 'live' : 'test';
  const response = await fetch(url, {
    method,
    headers: { Authorization: `Bearer ${token}`, ApiPlatform: platform, Accept: 'application/json', ...(body ? { 'Content-Type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined,
    cache: 'no-store',
    redirect: 'error',
    signal: AbortSignal.timeout(9000),
  });
  if (!response.ok) throw new Error(`ICUK request failed (HTTP ${response.status})`);
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('json')) throw new Error('Unexpected ICUK response format');
  return readBoundedJson(response);
}

/** Never allow a wholesale API to exhaust a serverless function with a huge body. */
async function readBoundedJson(response: Response, maxBytes = 256 * 1024): Promise<unknown> {
  const length = response.headers.get('content-length');
  if (length && (!/^\d+$/.test(length) || Number(length) > maxBytes)) {
    throw new Error('Oversized ICUK response');
  }
  if (!response.body) throw new Error('Empty ICUK response');
  const reader = response.body.getReader();
  const decoder = new TextDecoder('utf-8', { fatal: true });
  let bytes = 0;
  let content = '';
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > maxBytes) {
        await reader.cancel();
        throw new Error('Oversized ICUK response');
      }
      content += decoder.decode(value, { stream: true });
    }
    content += decoder.decode();
    return JSON.parse(content) as unknown;
  } finally {
    reader.releaseLock();
  }
}
