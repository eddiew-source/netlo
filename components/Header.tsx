"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { ClerkNavigation } from "@/components/ClerkNavigation";

// Keep the main customer journeys visible; secondary technical services remain
// discoverable from related pages and the footer, rather than a giant dropdown.
const primaryLinks = [
  { href: "/business-broadband", label: "Business" },
  { href: "/home-broadband", label: "Home" },
  { href: "/leased-lines", label: "Leased lines" },
  { href: "/business-voice", label: "Phones & VoIP" },
  { href: "/managed-it", label: "Managed IT" },
  { href: "/consultancy", label: "Consultancy" },
  { href: "/about", label: "Why Netlo" },
] as const;

const mobileExtraLinks = [
  { href: "/resilient-networks", label: "Resilient networks" },
  { href: "/cybersecurity", label: "Cybersecurity" },
] as const;

export function Header({ authEnabled = false }: { authEnabled?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close an open mobile navigation when navigating or pressing Escape.
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header site-header-v2 site-header-v6">
        <div className="container nav-wrap nav-wrap-v2">
          <Link href="/" aria-label="Netlo home" className="logo-link" onClick={() => setOpen(false)}>
            <Image src="/assets/netlo-white.svg" alt="netlo." width={143} height={62} priority />
          </Link>

          <nav className="desktop-nav desktop-nav-v2" aria-label="Primary navigation">
            {primaryLinks.map(link => (
              <Link
                className={`nav-link${pathname === link.href ? " active" : ""}`}
                aria-current={pathname === link.href ? "page" : undefined}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions nav-actions-v2">
            {authEnabled ? <ClerkNavigation /> : <Link className="portal-nav-link" href="/portal">My Netlo</Link>}
            <Link href="/contact" className="nav-cta">Get a quote <Icon name="arrow" /></Link>
          </div>

          <button
            className="mobile-toggle"
            type="button"
            onClick={() => setOpen(value => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>

        {open && (
          <nav className="mobile-menu mobile-menu-v6" id="mobile-navigation" aria-label="Mobile navigation">
            {primaryLinks.slice(0, 6).map(link => (
              <Link href={link.href} key={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            {mobileExtraLinks.map(link => (
              <Link href={link.href} key={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/about" onClick={() => setOpen(false)}>Why Netlo</Link>
            <Link href="/portal" onClick={() => setOpen(false)}>My Netlo</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="mobile-quote">Get a quote <Icon name="arrow" /></Link>
          </nav>
        )}
      </header>
    </>
  );
}
