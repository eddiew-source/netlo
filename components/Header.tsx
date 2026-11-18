"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import { serviceGroups } from "@/lib/site";
import { ClerkNavigation } from "@/components/ClerkNavigation";

export function Header({ authEnabled = false }: { authEnabled?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const serviceActive = serviceGroups.some(group => group.links.some(link => link.href.split("#")[0] === pathname));
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header site-header-v2">
      <div className="container nav-wrap nav-wrap-v2">
        <Link href="/" aria-label="Netlo home" className="logo-link" onClick={() => setOpen(false)}>
          <Image src="/assets/netlo-white.svg" alt="netlo." width={143} height={62} priority />
        </Link>
        <nav className="desktop-nav desktop-nav-v2" aria-label="Primary navigation">
          <Link className={`nav-link${pathname === "/business-broadband" ? " active" : ""}`} href="/business-broadband">Business</Link>
          <Link className={`nav-link${pathname === "/home-broadband" ? " active" : ""}`} href="/home-broadband">Home</Link>
          <details className="nav-menu" key={pathname}>
            <summary className={`nav-link${serviceActive ? " active" : ""}`}>Solutions <Icon name="chevron" /></summary>
            <div className="nav-dropdown-panel nav-mega-panel">
              {serviceGroups.map(group => <div className="nav-mega-group" key={group.label}>
                <p className="nav-dropdown-label">{group.label}</p>
                {group.links.map(link => <Link key={link.href} href={link.href}>{link.label}<Icon name="arrow-up" /></Link>)}
              </div>)}
              <div className="nav-mega-foot"><span>Not sure what fits? Start with a conversation.</span><Link href="/contact">Talk to us <Icon name="arrow" /></Link></div>
            </div>
          </details>
          <Link className={`nav-link${pathname === "/about" ? " active" : ""}`} href="/about">Why Netlo</Link>
        </nav>
        <div className="nav-actions nav-actions-v2">
          {authEnabled ? <ClerkNavigation /> : <Link className="portal-nav-link" href="/portal">My Netlo</Link>}
          <Link href="/contact" className="nav-cta">Get a quote <Icon name="arrow" /></Link>
        </div>
        <button className="mobile-toggle" type="button" onClick={() => setOpen(v => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation"><Icon name={open ? "close" : "menu"} /></button>
      </div>
      {open && <nav className="mobile-menu" id="mobile-navigation" aria-label="Mobile navigation">
        <Link href="/business-broadband" onClick={() => setOpen(false)}>Business broadband</Link>
        <Link href="/home-broadband" onClick={() => setOpen(false)}>Home broadband</Link>
        {serviceGroups.map(group => <div className="mobile-nav-group" key={group.label}>
          <span>{group.label}</span>
          {group.links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        </div>)}
        <Link href="/about" onClick={() => setOpen(false)}>Why Netlo</Link>
        <Link href="/portal" onClick={() => setOpen(false)}>My Netlo</Link>
        <Link href="/contact" onClick={() => setOpen(false)} className="mobile-quote">Get a quote <Icon name="arrow" /></Link>
      </nav>}
    </header>
  </>;
}
