import type { Metadata } from 'next';
import { SignUp } from '@clerk/nextjs';
import { Suspense } from 'react';

export const metadata: Metadata = { title: 'Create a My Netlo account', robots: { index: false, follow: false } };
export default function SignUpPage() {
  if (!process.env.CLERK_SECRET_KEY || !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) return <section className="auth-page"><div className="container"><h1>My Netlo</h1><p>Customer registration is being configured.</p></div></section>;
  return <section className="auth-page"><div className="container auth-layout">
    <div><span className="eyebrow">MY NETLO</span><h1>Welcome to<br/><em>your Netlo.</em></h1><p>Create an account. A verified Netlo service must be linked before connection or billing details can be shown.</p></div>
    <div className="auth-panel"><Suspense><SignUp /></Suspense></div>
  </div></section>;
}
