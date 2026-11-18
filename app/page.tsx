import Image from "next/image";
import Link from "next/link";
import { AvailabilityChecker } from "@/components/AvailabilityChecker";
import { Icon, type IconName } from "@/components/Icon";
import { Cta } from "@/components/Cta";
import { services } from "@/lib/site";

const benefits: { icon: IconName; title: string; text: string }[] = [
  { icon: "wifi", title: "Business-grade connectivity", text: "Fibre, broadband and Ethernet" },
  { icon: "network", title: "Resilience by design", text: "Backup and multi-site networking" },
  { icon: "shield", title: "Security built in", text: "Practical, risk-led protection" },
  { icon: "headset", title: "Real technical expertise", text: "People who understand your network" },
];

export default function Home() {
  return <>
    <section className="hero"><div className="container hero-layout"><div className="hero-copy">
      <div className="eyebrow"><span className="eyebrow-line"/> BROADBAND, NETWORKS AND MANAGED IT</div>
      <h1>Business connectivity.<br/><em>Without the<br/> runaround.</em></h1>
      <p className="hero-lede">Broadband, leased lines and managed IT, with clear advice and people who know their networks.</p>
      <div className="hero-buttons"><a className="btn btn-primary" href="#availability">Check broadband availability <Icon name="arrow" /></a><Link className="btn btn-secondary" href="/contact">Talk to us <Icon name="arrow-up" /></Link></div>
    </div><div className="hero-visual" aria-label="Stylised UK connectivity map">
      <div className="map-tag">UK CONNECTIONS <span>/</span> ONE POINT OF CONTACT</div>
      <Image className="hero-map" src="/assets/uk-network.jpg" alt="Illustrated map of connected locations across the UK" width={780} height={530} priority />
    </div></div></section>
    <AvailabilityChecker />
    <section className="proof-strip" aria-label="What Netlo offers"><div className="container proof-grid">{benefits.map(b => <div key={b.title}><Icon name={b.icon} /><span><strong>{b.title}</strong><small>{b.text}</small></span></div>)}</div></section>
    <section className="section solutions-section" id="solutions"><div className="container"><div className="section-heading"><div><span className="eyebrow eyebrow-blue">WHAT WE DO</span><h2>Broadband, networks<br/><span>and IT support.</span></h2></div><p>Start with a business broadband connection. Add resilience, security and ongoing IT support when you need them.</p></div>
      <div className="service-grid">{services.map(item => <Link href={item.href} key={item.href} className="service-card"><div className="service-card-top"><span className="service-icon"><Icon name={item.icon as IconName}/></span><span className="service-index">{item.index}</span></div><div className="service-card-copy"><h3>{item.title}</h3><h4>{item.line}</h4><p>{item.description}</p></div><span className="card-link">Explore service <Icon name="arrow-up" /></span></Link>)}</div>
    </div></section>
    <section className="section difference-section"><div className="container difference-layout"><div className="difference-art"><Image src="/assets/uk-network.jpg" width={760} height={560} alt="UK network illustration" /></div><div className="difference-copy"><span className="eyebrow eyebrow-blue">WHY NETLO</span><h2>A broadband supplier<br/><span>that knows networks.</span></h2><p>The line matters. So do the router, the backup connection and who picks up when there is a problem.</p><div className="difference-list">
      <div><span><Icon name="check"/></span><div><h3>Built around your business</h3><p>We start with how you operate, not just what speed you can buy.</p></div></div>
      <div><span><Icon name="check"/></span><div><h3>Resilience without the jargon</h3><p>Smarter failover and connected sites, explained in plain English.</p></div></div>
      <div><span><Icon name="check"/></span><div><h3>Expertise beyond the circuit</h3><p>Networking, infrastructure, cloud and security when you need more than broadband.</p></div></div>
    </div><Link href="/about" className="text-arrow">Get to know Netlo <Icon name="arrow" /></Link></div></div></section>
    <section className="section sectors-section"><div className="container"><div className="section-heading compact"><div><span className="eyebrow eyebrow-blue">WHO WE HELP</span><h2>For one site<br/><span>or twenty.</span></h2></div><p>From independent companies to teams operating across multiple locations, we'll work around what you need.</p></div><div className="sector-row"><div><Icon name="building" /> Professional services</div><div><Icon name="network" /> Multi-site businesses</div><div><Icon name="server" /> Retail & operations</div><div><Icon name="cloud" /> Cloud-first teams</div></div></div></section>
    <section className="section process-section"><div className="container"><span className="eyebrow eyebrow-blue">OUR APPROACH</span><div className="section-heading"><h2>Simple from<br/><span>the first conversation.</span></h2><p>You shouldn't need a telecoms dictionary to make good decisions about your network.</p></div><div className="process-grid"><div><span className="step-num">01</span><h3>Tell us what matters</h3><p>Where you operate, what you need, and what happens when things go wrong.</p></div><div><span className="step-num">02</span><h3>Get the right options</h3><p>Clear recommendations for connectivity, resilience and support.</p></div><div><span className="step-num">03</span><h3>Keep moving</h3><p>A practical path from getting connected to managing what comes next.</p></div></div></div></section>
    <Cta />
  </>;
}
