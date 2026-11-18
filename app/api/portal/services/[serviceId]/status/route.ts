import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { resolveAccessibleService } from '@/lib/customer/services';
import { icukGet } from '@/lib/icuk/client';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function GET(_request: Request, context: { params: Promise<{ serviceId: string }> }) {
  if (!process.env.CLERK_SECRET_KEY) return NextResponse.json({ error: 'Portal authentication not configured.' }, { status: 503 });
  const { userId, orgId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Sign in required.' }, { status: 401 });
  const { serviceId } = await context.params;
  if (!/^[A-Za-z0-9_-]{1,80}$/.test(serviceId)) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  const link = await resolveAccessibleService({ clerkUserId: userId, clerkOrgId: orgId ?? null }, serviceId);
  if (!link) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  try {
    const data = await icukGet(`/broadband/online_status/${encodeURIComponent(link.icukUsername)}`);
    // Publish ONLY allowlisted status values after verifying ICUK schema; never pass
    // the raw upstream body, wholesale username, or unrelated account metadata.
    const response = data && typeof data === 'object' ? data as Record<string, unknown> : {};
    const online = typeof response.online === 'boolean' ? response.online : null;
    return NextResponse.json({ serviceId, connection: online === null ? 'unknown' : online ? 'online' : 'offline' }, { headers: { 'Cache-Control': 'private, no-store' } });
  } catch { return NextResponse.json({ error: 'Service status temporarily unavailable.' }, { status: 502 }); }
}
