import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icon";

export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-top">
      <div className="footer-brand"><Link href="/"><Image src="/assets/netlo-white.svg" alt="netlo." width={148} height={64} /></Link><p>Connectivity, business communications and IT advice — brought together.</p><Link className="footer-email" href="/contact">Let&apos;s talk <Icon name="arrow-up" /></Link></div>
      <div className="footer-col"><h3>Connectivity & voice</h3><Link href="/business-broadband">Business broadband</Link><Link href="/leased-lines">Leased lines & Ethernet</Link><Link href="/resilient-networks">Resilient networks</Link><Link href="/business-voice">Hosted VoIP & SIP trunks</Link><Link href="/home-broadband">Home broadband</Link></div>
      <div className="footer-col"><h3>IT & more</h3><Link href="/managed-it">Managed IT</Link><Link href="/consultancy">IT consultancy</Link><Link href="/cybersecurity">Cybersecurity</Link><Link href="/business-voice#more-communications">SMS & fax-to-email</Link><Link href="/portal">My Netlo</Link></div>
      <div className="footer-panel"><span className="eyebrow">LET&apos;S GET CONNECTED</span><h3>Need broadband, phones or IT help?</h3><p>Tell us about your setup and we&apos;ll help work out the right approach.</p><Link className="btn btn-primary" href="/contact">Start a conversation <Icon name="arrow" /></Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Netlo.</span><span>United Kingdom <i>/</i> <Link href="/privacy">Privacy</Link></span></div>
  </div></footer>;
}
