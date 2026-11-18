/** Bounded JSON parsing for public endpoints. Prevents unbounded request-body reads. */
export class HttpInputError extends Error {
  constructor(public readonly status: 400 | 403 | 413 | 415, message: string) {
    super(message);
    this.name = 'HttpInputError';
  }
}

export async function readJsonInput(request: Request, maxBytes: number): Promise<unknown> {
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) {
    throw new HttpInputError(403, 'Request origin is not permitted.');
  }
  if (request.headers.get('sec-fetch-site') === 'cross-site') {
    throw new HttpInputError(403, 'Cross-site requests are not permitted.');
  }
  const contentType = request.headers.get('content-type')?.split(';', 1)[0]?.trim().toLowerCase();
  if (contentType !== 'application/json') {
    throw new HttpInputError(415, 'Expected application/json.');
  }
  const contentLength = request.headers.get('content-length');
  if (contentLength && (!/^\d+$/.test(contentLength) || Number(contentLength) > maxBytes)) {
    throw new HttpInputError(413, 'Request body is too large.');
  }
  if (!request.body) throw new HttpInputError(400, 'Request body is required.');
  const reader = request.body.getReader();
  const decoder = new TextDecoder('utf-8', { fatal: true });
  let bytes = 0;
  let body = '';
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > maxBytes) {
        await reader.cancel();
        throw new HttpInputError(413, 'Request body is too large.');
      }
      body += decoder.decode(value, { stream: true });
    }
    body += decoder.decode();
    return JSON.parse(body) as unknown;
  } catch (error) {
    if (error instanceof HttpInputError) throw error;
    throw new HttpInputError(400, 'Invalid JSON request.');
  } finally {
    reader.releaseLock();
  }
}
