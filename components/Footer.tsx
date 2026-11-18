import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-top">
      <div className="footer-brand"><Link href="/"><Image src="/assets/netlo-white.svg" alt="netlo." width={148} height={64} /></Link><p>Business broadband, managed networks and IT support.</p><Link className="footer-email" href="/contact">Let&apos;s talk <Icon name="arrow-up" /></Link></div>
      <div className="footer-col"><h3>Solutions</h3><Link href="/business-broadband">Business broadband</Link><Link href="/business-broadband#leased-lines">Leased lines</Link><Link href="/resilient-networks">Resilient networks</Link><Link href="/managed-it">Managed IT</Link><Link href="/cybersecurity">Cybersecurity</Link></div>
      <div className="footer-col"><h3>Netlo</h3><Link href="/about">Why Netlo</Link><Link href="/contact">Contact</Link><Link href="/#availability">Check availability</Link><Link href="/home-broadband">Home broadband</Link></div>
      <div className="footer-panel"><span className="eyebrow">LET&apos;S GET CONNECTED</span><h3>Need to talk broadband or IT?</h3><p>Tell us what you need and let&apos;s work out the right approach.</p><Link className="btn btn-primary" href="/contact">Start a conversation <Icon name="arrow" /></Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Netlo. {site.live ? "" : "Preview website — company details to be finalised before launch."}</span><span>United Kingdom <i>/</i> <Link href="/privacy">Privacy</Link></span></div>
  </div></footer>;
}
