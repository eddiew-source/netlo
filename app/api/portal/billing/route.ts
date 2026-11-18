import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
export const runtime = 'nodejs';
export async function GET() {
  if (!process.env.CLERK_SECRET_KEY) return NextResponse.json({ error: 'Portal authentication not configured.' }, { status: 503 });
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Sign in required.' }, { status: 401 });
  // Never fabricate invoice data or expose wholesale reseller invoices as retail customer bills.
  return NextResponse.json({ status: 'not_configured', invoices: [], message: 'Customer billing integration is not yet available.' }, { status: 503, headers: { 'Cache-Control': 'private, no-store' } });
}
