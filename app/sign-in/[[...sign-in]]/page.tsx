import type { Metadata } from 'next';
import { SignIn } from '@clerk/nextjs';
import { Suspense } from 'react';

export const metadata: Metadata = { title: 'Sign in to My Netlo', robots: { index: false, follow: false } };
export default function SignInPage() {
  if (!process.env.CLERK_SECRET_KEY || !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) return <section className="auth-page"><div className="container"><h1>My Netlo</h1><p>Sign-in is unavailable right now. Please contact us for help.</p></div></section>;
  return <section className="auth-page"><div className="container auth-layout">
    <div><span className="eyebrow">MY NETLO</span><h1>Your services.<br/><em>One place.</em></h1><p>Sign in to access your Netlo account and services.</p></div>
    <div className="auth-panel"><Suspense><SignIn /></Suspense></div>
  </div></section>;
}
