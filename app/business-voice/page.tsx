import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Hosted VoIP, business phone systems & SIP trunks",
  description: "Netlo business phone systems: hosted VoIP, SIP trunks, number porting, softphones and call routing for UK businesses.",
};
const hostedFeatures = [
  { title: "Work from anywhere", detail: "Desk phones and softphones for mobile and desktop, with numbers and users managed centrally.", icon: "phone" as const },
  { title: "Calls routed your way", detail: "Opening hours, call queues, groups, menus, voicemail and diversions tailored to your business.", icon: "network" as const },
  { title: "Keep your numbers", detail: "Plan a number port or set up new business numbers with clear steps for the switchover.", icon: "check" as const },
  { title: "Understand your calls", detail: "Itemised call information, management reporting and optional call-recording features where suitable.", icon: "layers" as const },
];

export default function BusinessVoice() { return <>
  <section className="inner-hero voice-hero"><div className="container inner-hero-layout">
    <div className="inner-copy"><span className="eyebrow"><span className="eyebrow-line"/>BUSINESS VOICE & TELEPHONY</span>
      <h1>Better business calls.<br/><em>Less phone-system hassle.</em></h1>
      <p>Replace an ageing phone system or connect your existing PBX. Hosted VoIP, SIP trunks and number management, with advice on how everything fits together.</p>
      <div className="inner-actions"><Link href="/contact?service=VoIP%20%26%20business%20phones" className="btn btn-primary">Discuss your phones <Icon name="arrow" /></Link><Link href="#sip-trunks" className="btn btn-secondary">Explore SIP trunks <Icon name="arrow" /></Link></div>
    </div>
    <div className="voice-hero-aside"><span>ONE CONVERSATION</span><strong>Numbers. Calls. Devices. Connectivity.</strong><p>We can look at the phone service and the broadband carrying it, rather than treating them as separate problems.</p></div>
  </div></section>
  <section className="quick-list"><div className="container">{["Hosted cloud phone systems", "SIP trunks for compatible PBXs", "UK number porting & management", "Desktop and mobile softphones"].map(t=><div key={t}><Icon name="check"/><span>{t}</span></div>)}</div></section>
  <section className="section detail-section"><div className="container">
    <div className="section-heading"><div><span className="eyebrow eyebrow-blue">HOSTED VOIP</span><h2>A business phone system<br/><span>without the old hardware.</span></h2></div><p>Give teams the features they need without having to maintain a traditional on-site PBX.</p></div>
    <div className="detail-grid">{hostedFeatures.map(f=><article className="detail-card" key={f.title}><span className="feature-icon"><Icon name={f.icon}/></span><h3>{f.title}</h3><p>{f.detail}</p></article>)}</div>
  </div></section>
  <section id="sip-trunks" className="section split-section"><div className="container split-layout"><div><span className="eyebrow eyebrow-blue">SIP TRUNKS</span><h2>Keep the PBX.<br/><span>Modernise the lines.</span></h2><p>If you already have an IP phone system, SIP trunks can carry your calls without replacing the whole installation. We'll look at compatibility, number porting, capacity and resilience before recommending a setup.</p><Link className="text-arrow" href="/contact?service=SIP%20trunks">Ask about SIP trunks <Icon name="arrow"/></Link></div>
    <div className="split-panel">{["For existing compatible IP PBXs", "Inbound and outbound calling options", "Number management and porting", "Call diversion and failover planning", "Call reporting and controls"].map(t=><div key={t}><Icon name="check"/><span>{t}</span></div>)}</div></div></section>
  <section id="more-communications" className="section communications-extras"><div className="container"><span className="eyebrow eyebrow-blue">ADDITIONAL COMMUNICATIONS</span><h2>More than just <span>phone calls.</span></h2><div className="extra-services-grid">
    <article><Icon name="phone"/><h3>Business numbers</h3><p>New UK geographic numbers, routing and porting support for existing numbers.</p></article>
    <article><Icon name="mail"/><h3>Fax to email</h3><p>Send or receive faxes by email where a business process still depends on fax.</p></article>
    <article><Icon name="headset"/><h3>Outbound SMS</h3><p>Business messaging and notifications, with options to send through a managed platform or API.</p></article>
  </div><p className="small-print">Products, device compatibility, call-recording retention and tariffs are confirmed in your quotation.</p></div></section>
  <Cta title="Let's sort your business phones." subtitle="Tell us how your team handles calls today, and what you'd like to improve." cta="Talk business voice" service="VoIP & business phones" />
</>; }
