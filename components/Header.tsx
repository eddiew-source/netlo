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
  const solutions = navLinks.filter(link => link.href !== "/about");

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header site-header-v2">
      <div className="container nav-wrap nav-wrap-v2">
        <Link href="/" aria-label="Netlo home" className="logo-link" onClick={() => setOpen(false)}>
          <Image src="/assets/netlo-white.svg" alt="netlo." width={143} height={62} priority />
        </Link>
        <nav className="desktop-nav desktop-nav-v2" aria-label="Primary navigation">
          <Link className={`nav-link${pathname === "/business-broadband" ? " active" : ""}`} href="/business-broadband">Business broadband</Link>
          <details className="nav-menu" key={pathname}>
            <summary className="nav-link">Solutions <Icon name="chevron" /></summary>
            <div className="nav-dropdown-panel">
              <p className="nav-dropdown-label">HOW WE CAN HELP</p>
              {solutions.map(link => <Link key={link.href} href={link.href}>{link.label}<Icon name="arrow-up" /></Link>)}
            </div>
          </details>
          <Link className={`nav-link${pathname === "/about" ? " active" : ""}`} href="/about">Why Netlo</Link>
          <Link className={`nav-link${pathname === "/contact" ? " active" : ""}`} href="/contact">Contact</Link>
        </nav>
        <div className="nav-actions nav-actions-v2">
          <Link className="home-link" href="/home-broadband">For your home <Icon name="arrow-up" /></Link>
          <Link href="/contact" className="nav-cta">Get a quote <Icon name="arrow" /></Link>
        </div>
        <button className="mobile-toggle" type="button" onClick={() => setOpen(v => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation"><Icon name={open ? "close" : "menu"} /></button>
      </div>
      {open && <nav className="mobile-menu" id="mobile-navigation" aria-label="Mobile navigation">
        {navLinks.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <Link href="/home-broadband" onClick={() => setOpen(false)}>Home broadband</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link href="/contact" onClick={() => setOpen(false)} className="mobile-quote">Get a quote <Icon name="arrow" /></Link>
      </nav>}
    </header>
  </>;
}
