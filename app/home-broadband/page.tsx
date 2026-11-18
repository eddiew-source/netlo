import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { AvailabilityChecker } from "@/components/AvailabilityChecker";
import { Cta } from "@/components/Cta";
export const metadata: Metadata = { title: "Home broadband", description: "Netlo home broadband. Residential broadband offering under development with availability checking coming soon." };
export default function HomeBroadband() { return <>
  <section className="inner-hero"><div className="container inner-hero-layout"><div className="inner-copy"><span className="eyebrow"><span className="eyebrow-line"/> NETLO HOME</span><h1>Good internet<br/><em>for everyday life.</em></h1><p>We're working on simple residential broadband options. The online availability checker and plans will follow once wholesale integration and pricing are confirmed.</p><a href="#availability" className="btn btn-primary">Check your postcode <Icon name="arrow"/></a></div><div className="inner-art"><Image src="/assets/uk-network.jpg" width={620} height={440} alt="UK connectivity map illustration"/></div></div></section>
  <AvailabilityChecker />
  <section className="section home-lite"><div className="container"><span className="eyebrow eyebrow-blue">NETLO HOME</span><h2>Home broadband,<br/><span>without the fuss.</span></h2><p>We aren't advertising specific speeds, packages or prices yet. Check back as we finalise our residential offering.</p><Link href="/business-broadband" className="text-arrow">Looking for business connectivity? <Icon name="arrow" /></Link></div></section>
  <Cta title="Have a broadband question?" subtitle="We can discuss what you're looking for while the automated checker is being set up." />
</>; }
