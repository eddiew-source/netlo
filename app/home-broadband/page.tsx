import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { AvailabilityChecker } from "@/components/AvailabilityChecker";
import { Cta } from "@/components/Cta";
export const metadata: Metadata = { title: "Home broadband", description: "Netlo home broadband. Residential broadband offering under development with availability checking coming soon." };
export default function HomeBroadband() { return <>
  <section className="inner-hero"><div className="container inner-hero-layout"><div className="inner-copy"><span className="eyebrow"><span className="eyebrow-line"/> NETLO HOME</span><h1>Good internet<br/><em>for everyday life.</em></h1><p>Reliable home broadband, without the complicated sales pitch. We’re preparing straightforward fibre packages with clear pricing and support. Availability and packages will be confirmed once our wholesale integration is ready.</p><a href="#availability" className="btn btn-primary">Check your postcode <Icon name="arrow"/></a></div><div className="inner-art"><Image src="/assets/uk-network.jpg" width={620} height={440} alt="UK connectivity map illustration"/></div></div></section>
  <AvailabilityChecker audience="home" />
  <section className="section home-lite"><div className="container"><span className="eyebrow eyebrow-blue">NETLO HOME</span><h2>A simpler way to<br/><span>get connected.</span></h2><div className="home-points"><div><strong>01 / Find your options</strong><p>Enter your postcode, then choose your address when the availability service is live.</p></div><div><strong>02 / Choose what fits</strong><p>See available broadband technologies and retail packages for your home — no invented speed promises.</p></div><div><strong>03 / Get help when you need it</strong><p>A clear route to support, with connection tools planned for the My Netlo portal.</p></div></div><p>We're finalising the residential range with our wholesale partner. Prices and contract terms will be published once confirmed.</p><Link href="/business-broadband" className="text-arrow">Looking for business connectivity? <Icon name="arrow" /></Link></div></section>
  <Cta title="Have a broadband question?" subtitle="We can discuss what you're looking for while the automated checker is being set up." />
</>; }
