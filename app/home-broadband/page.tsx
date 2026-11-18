import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { AvailabilityChecker } from "@/components/AvailabilityChecker";
import { Cta } from "@/components/Cta";
export const metadata: Metadata = { title: "Home broadband & full fibre", description: "Home broadband and full-fibre options, checked for your UK address with straightforward explanations and support." };
export default function HomeBroadband() { return <>
  <section className="inner-hero"><div className="container inner-hero-layout"><div className="inner-copy"><span className="eyebrow"><span className="eyebrow-line"/> NETLO HOME</span><h1>Home broadband.<br/><em>Less hassle.</em></h1><p>Working, gaming, streaming or keeping the whole house online — we'll help you find a sensible broadband option for your address and how you use it.</p><a href="#availability" className="btn btn-primary">Check your postcode <Icon name="arrow"/></a></div><div className="inner-art"><Image src="/assets/uk-network-hero.png" width={1672} height={941} alt="UK connectivity map illustration"/></div></div></section>
  <AvailabilityChecker audience="home" />
  <section className="section home-lite"><div className="container"><span className="eyebrow eyebrow-blue">CHOOSING HOME BROADBAND</span><h2>Start with your address.<br/><span>Then find the right fit.</span></h2><div className="home-points"><div><strong>01 / Check the options</strong><p>FTTP and other broadband access products depend on your address and the networks serving it.</p></div><div><strong>02 / Choose what matters</strong><p>Think about busy households, home working, upload performance and equipment — not just the advertised top speed.</p></div><div><strong>03 / Make the switch</strong><p>We'll explain the installation and switching steps before you commit to a service.</p></div></div><Link href="/business-broadband" className="text-arrow">Looking for business connectivity? <Icon name="arrow" /></Link></div></section>
  <Cta title="Need a hand choosing?" subtitle="Tell us about your property and how you use the internet. We'll help work through the options." cta="Ask Netlo" service="Home broadband" />
</>; }
