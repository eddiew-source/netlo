'use client';
import Link from 'next/link';
import { Show, UserButton } from '@clerk/nextjs';

export function ClerkNavigation() {
  return <div className="clerk-navigation">
    <Show when="signed-out"><Link className="portal-nav-link" href="/sign-in">My Netlo</Link></Show>
    <Show when="signed-in"><Link className="portal-nav-link" href="/portal">My Netlo</Link><UserButton /></Show>
  </div>;
}
