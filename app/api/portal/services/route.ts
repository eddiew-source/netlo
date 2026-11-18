import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { listCustomerServices } from '@/lib/customer/services';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function GET() {
  if (!process.env.CLERK_SECRET_KEY) return NextResponse.json({ error: 'Portal authentication not configured.' }, { status: 503 });
  const { userId, orgId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Sign in required.' }, { status: 401 });
  const services = await listCustomerServices({ clerkUserId: userId, clerkOrgId: orgId ?? null });
  return NextResponse.json({ services }, { headers: { 'Cache-Control': 'private, no-store' } });
}
