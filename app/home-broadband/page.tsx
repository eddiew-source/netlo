import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { AvailabilityChecker } from "@/components/AvailabilityChecker";
import { Cta } from "@/components/Cta";
export const metadata: Metadata = { title: "Home broadband", description: "Netlo home broadband, with straightforward options and helpful support." };
export default function HomeBroadband() { return <>
  <section className="inner-hero"><div className="container inner-hero-layout"><div className="inner-copy"><span className="eyebrow"><span className="eyebrow-line"/> NETLO HOME</span><h1>Good internet<br/><em>for everyday life.</em></h1><p>Reliable home broadband, without the complicated sales pitch. We make choosing broadband straightforward, with clear advice and a focus on what works for your home.</p><a href="#availability" className="btn btn-primary">Check your postcode <Icon name="arrow"/></a></div><div className="inner-art"><Image src="/assets/uk-network-hero.png" width={1672} height={941} alt="UK connectivity map illustration"/></div></div></section>
  <AvailabilityChecker audience="home" />
  <section className="section home-lite"><div className="container"><span className="eyebrow eyebrow-blue">NETLO HOME</span><h2>A simpler way to<br/><span>get connected.</span></h2><div className="home-points"><div><strong>01 / Find your options</strong><p>Enter your postcode and we’ll help find broadband options for your address.</p></div><div><strong>02 / Choose what fits</strong><p>Choose a broadband service that makes sense for your home and the way you use the internet.</p></div><div><strong>03 / Get help when you need it</strong><p>Talk to someone who understands broadband and can help when things go wrong.</p></div></div><Link href="/business-broadband" className="text-arrow">Looking for business connectivity? <Icon name="arrow" /></Link></div></section>
  <Cta title="Have a broadband question?" subtitle="We can discuss what you're looking for while the automated checker is being set up." />
</>; }
