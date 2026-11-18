"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import { navLinks } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="top-rail"><div className="container rail-content"><span><i className="rail-dot"/> BROADBAND · NETWORKS · MANAGED IT</span><Link href="/home-broadband">Looking for home broadband? <Icon name="arrow-up" /></Link></div></div>
    <header className="site-header"><div className="container nav-wrap">
      <Link href="/" aria-label="Netlo home" className="logo-link" onClick={() => setOpen(false)}><Image src="/assets/netlo-white.svg" alt="netlo." width={150} height={65} priority /></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{navLinks.map(link => <Link key={link.href} className={`nav-link${pathname === link.href ? " active" : ""}`} href={link.href}>{link.label}</Link>)}</nav>
      <div className="nav-actions"><Link className="talk-link" href="/contact">Get in touch <Icon name="arrow-up" /></Link><Link href="/contact" className="nav-cta">Get a quote <Icon name="arrow" /></Link></div>
      <button className="mobile-toggle" type="button" onClick={() => setOpen(v => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation"><Icon name={open ? "close" : "menu"} /></button>
    </div>
    {open && <nav className="mobile-menu" id="mobile-navigation" aria-label="Mobile navigation">{navLinks.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<Link href="/home-broadband" onClick={() => setOpen(false)}>Home broadband</Link><Link href="/contact" onClick={() => setOpen(false)} className="mobile-quote">Get a quote <Icon name="arrow" /></Link></nav>}
    </header>
  </>;
}
