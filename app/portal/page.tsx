import type { Metadata } from 'next';
import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';
import { listCustomerServices } from '@/lib/customer/services';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'My Netlo', robots: { index: false, follow: false } };

export default async function PortalPage() {
  const configured = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY);
  if (!configured) return <section className="portal-page"><div className="container portal-content"><span className="eyebrow">MY NETLO</span><h1>Customer portal</h1><p>We can’t open your account right now. Please contact Netlo for assistance.</p><Link className="btn btn-primary" href="/contact">Contact Netlo</Link></div></section>;
  const { userId, orgId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn({ returnBackUrl: '/portal' });
  const services = await listCustomerServices({ clerkUserId: userId, clerkOrgId: orgId ?? null });
  return <section className="portal-page"><div className="container portal-content">
    <div className="portal-heading"><div><span className="eyebrow">MY NETLO</span><h1>Your account.</h1><p>Connection information, support and billing in one secure place.</p></div><Link className="btn btn-secondary" href="/contact">Get support</Link></div>
    {services.length === 0 ? <div className="portal-empty"><span className="eyebrow eyebrow-blue">NO SERVICES LINKED</span><h2>Your Netlo services will appear here.</h2><p>No connections are showing for your account. If you already have a Netlo service, please contact support so we can help.</p><Link className="text-arrow" href="/contact">Ask us about your account →</Link></div> : <div className="portal-service-list">{services.map(s => <div key={s.id} className="portal-service"><h2>{s.displayName}</h2><p>{s.category === 'home' ? 'Home broadband' : 'Business connectivity'}</p><span>View your connection details and support options.</span></div>)}</div>}
    <div className="portal-tools"><div><span className="portal-tool-mark">01</span><h3>Connections</h3><p>Check connection status, usage and network details.</p></div><div><span className="portal-tool-mark">02</span><h3>Billing</h3><p>Access invoices, payment information and account history.</p></div><div><span className="portal-tool-mark">03</span><h3>Support</h3><p>Find help with your services and request a fault investigation.</p><Link href="/contact">Contact support →</Link></div></div>
    
  </div></section>;
}
