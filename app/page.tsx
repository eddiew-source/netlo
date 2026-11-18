import Image from "next/image";
import Link from "next/link";
import { AvailabilityChecker } from "@/components/AvailabilityChecker";
import { Icon, type IconName } from "@/components/Icon";
import { Cta } from "@/components/Cta";
import { services } from "@/lib/site";

const benefits: { icon: IconName; title: string; text: string }[] = [
  { icon: "wifi", title: "Connectivity", text: "Fibre, Ethernet and leased lines" },
  { icon: "network", title: "Continuity", text: "Backup and multi-site networks" },
  { icon: "shield", title: "Protection", text: "Firewalls and practical security" },
  { icon: "headset", title: "Support", text: "Real technical conversations" },
];

export default function Home() {
  return <>
    <section className="hero hero-v2">
      <div className="container hero-layout hero-layout-v2">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> BUSINESS CONNECTIVITY & MANAGED IT</div>
          <h1>Business connectivity.<br/><em>Without the runaround.</em></h1>
          <p className="hero-lede">A better way to buy and manage broadband, networking and IT. Straight answers, sensible solutions, and someone who understands the whole picture.</p>
          <div className="hero-buttons"><a className="btn btn-primary" href="#availability">Check your postcode <Icon name="arrow" /></a><Link className="btn btn-secondary" href="/contact">Speak to us <Icon name="arrow-up" /></Link></div>
          <div className="hero-footnote">For one office, a growing team or a whole estate of locations.</div>
        </div>
        <div className="hero-visual hero-visual-v2">
          <span className="hero-visual-kicker">UK CONNECTIVITY</span>
          <Image className="hero-map" src="/assets/uk-network.jpg" alt="Illustrative map of connected locations around the UK" width={780} height={530} priority />
          <span className="hero-visual-caption">Designed around where your business operates.</span>
        </div>
      </div>
    </section>
    <AvailabilityChecker />
    <section className="proof-strip proof-strip-v2" aria-label="Netlo services"><div className="container proof-grid">{benefits.map(benefit => <div key={benefit.title}><Icon name={benefit.icon}/><span><strong>{benefit.title}</strong><small>{benefit.text}</small></span></div>)}</div></section>
    <section className="section solutions-section solutions-section-v2" id="solutions">
      <div className="container">
        <div className="section-heading"><div><span className="eyebrow eyebrow-blue">WHAT NETLO DOES</span><h2>One partner. More than <span>a connection.</span></h2></div><p>Buy the line you need, then add support and resilience as your business grows. No need to piece it together across different suppliers.</p></div>
        <div className="service-grid service-grid-v2">{services.map(item => <Link href={item.href} key={item.href} className="service-card service-card-v2"><div className="service-card-top"><span className="service-icon"><Icon name={item.icon as IconName}/></span><span className="service-index">{item.index}</span></div><div className="service-card-copy"><h3>{item.title}</h3><h4>{item.line}</h4><p>{item.description}</p></div><span className="card-link">Explore service <Icon name="arrow-up" /></span></Link>)}</div>
      </div>
    </section>
    <section className="home-feature" aria-labelledby="netlo-home-heading"><div className="container home-feature-layout">
      <div><span className="eyebrow">NETLO FOR HOME</span><h2 id="netlo-home-heading">Good broadband.<br/><span>Less bother.</span></h2><p>Home internet should be simple to choose and easy to live with. We’re putting together straightforward fibre broadband options, backed by people who understand the network.</p><Link href="/home-broadband" className="btn btn-secondary">Explore Netlo Home <Icon name="arrow" /></Link></div>
      <div className="home-feature-aside"><span>HOME BROADBAND</span><strong>Internet for real life.</strong><p>Working from home, streaming or just keeping everything connected. Check your postcode and we'll help with the options.</p><a href="#availability">Check broadband availability →</a></div>
    </div></section>
    <section className="section difference-section difference-section-v2">
      <div className="container difference-layout difference-layout-v2">
        <div className="difference-copy"><span className="eyebrow eyebrow-blue">WHY IT MATTERS</span><h2>A broadband line is only <span>part of the story.</span></h2><p>Good connectivity should quietly keep the rest of your business running. That takes more than a speed test and a router in a box.</p><div className="difference-list">
          <div><span><Icon name="check"/></span><div><h3>Think beyond the circuit</h3><p>We consider the sites, systems and people relying on it.</p></div></div>
          <div><span><Icon name="check"/></span><div><h3>Plan for the unexpected</h3><p>Backup connections and resilient networks where they make sense.</p></div></div>
          <div><span><Icon name="check"/></span><div><h3>Make support part of the solution</h3><p>A clear route to help, without bouncing between suppliers.</p></div></div>
        </div><Link href="/about" className="text-arrow">How we work <Icon name="arrow" /></Link></div>
        <div className="network-story" aria-label="Connection, resilience and technical support">
          <span className="network-story-label">A COMPLETE VIEW</span>
          <div className="network-story-line"><span/></div>
          <div className="network-story-item"><span>01</span><div><strong>The connection</strong><small>Get your business online</small></div></div>
          <div className="network-story-item"><span>02</span><div><strong>The backup</strong><small>Plan for a line going down</small></div></div>
          <div className="network-story-item"><span>03</span><div><strong>The people</strong><small>Keep the technical side managed</small></div></div>
        </div>
      </div>
    </section>
    <section className="section sectors-section sectors-section-v2"><div className="container"><div className="section-heading compact"><div><span className="eyebrow eyebrow-blue">WHO WE HELP</span><h2>For one site, <span>or many.</span></h2></div><p>From independent teams to multi-site organisations, the right solution depends on how your business works.</p></div><div className="sector-row"><div><Icon name="building" /> Professional services</div><div><Icon name="network" /> Multi-site businesses</div><div><Icon name="server" /> Retail & operations</div><div><Icon name="cloud" /> Cloud-first teams</div></div></div></section>
    <section className="section process-section process-section-v2"><div className="container"><span className="eyebrow eyebrow-blue">HOW WE WORK</span><div className="section-heading"><h2>Clear from the <span>first conversation.</span></h2><p>Tell us what you need. We'll make sense of the options and explain what happens next.</p></div><div className="process-grid"><div><span className="step-num">01</span><h3>Tell us about your setup</h3><p>Sites, existing contracts and what's important to keep running.</p></div><div><span className="step-num">02</span><h3>Review the options</h3><p>Practical connectivity and support choices with clear scope.</p></div><div><span className="step-num">03</span><h3>Move forward</h3><p>A straightforward path to the right connection or ongoing service.</p></div></div></div></section>
    <Cta title="Let's get the right setup." subtitle="Tell us about your business and we'll help you understand the options." cta="Talk to Netlo" />
  </>;
}
