import Link from "next/link";
import Image from "next/image";
import { Icon, type IconName } from "@/components/Icon";
import { Cta } from "@/components/Cta";

type Feature = { title: string; description: string; icon: IconName };
type Faq = { question: string; answer: string };
export type ServicePageProps = {
  eyebrow: string; title: string; accent: string; intro: string;
  bullets: string[]; features: Feature[];
  detailTitle: string; detailCopy: string; detailPoints: string[];
  faqs: Faq[]; cta?: string;
};

export function ServicePage({ eyebrow, title, accent, intro, bullets, features, detailTitle, detailCopy, detailPoints, faqs, cta }: ServicePageProps) {
  return <>
    <section className="inner-hero"><div className="container inner-hero-layout"><div className="inner-copy"><div className="eyebrow"><span className="eyebrow-line"/>{eyebrow}</div><h1>{title}<br/><em>{accent}</em></h1><p>{intro}</p><div className="inner-actions"><Link href="/contact" className="btn btn-primary">{cta || "Talk to our team"} <Icon name="arrow" /></Link><Link href="/#availability" className="btn btn-secondary">Check availability <Icon name="arrow-up" /></Link></div></div><div className="inner-art"><Image src="/assets/uk-network-hero.png" alt="Stylised UK network map" width={1672} height={941} /></div></div></section>
    <section className="quick-list"><div className="container">{bullets.map(b => <div key={b}><Icon name="check" /><span>{b}</span></div>)}</div></section>
    <section className="section detail-section"><div className="container"><div className="section-heading"><div><span className="eyebrow eyebrow-blue">WHAT'S INCLUDED</span><h2>Built for how you<br/><span>actually work.</span></h2></div><p>Practical services with clear scope and a conversation about what your business needs.</p></div><div className="detail-grid">{features.map(f => <div className="detail-card" key={f.title}><span className="feature-icon"><Icon name={f.icon}/></span><h3>{f.title}</h3><p>{f.description}</p></div>)}</div></div></section>
    <section className="section split-section"><div className="container split-layout"><div><span className="eyebrow eyebrow-blue">THE DETAILS</span><h2>{detailTitle}</h2><p>{detailCopy}</p><Link href="/contact" className="text-arrow">Discuss your requirements <Icon name="arrow" /></Link></div><div className="split-panel">{detailPoints.map(p => <div key={p}><Icon name="check"/><span>{p}</span></div>)}</div></div></section>
    <section className="section faq-section"><div className="container faq-layout"><div><span className="eyebrow eyebrow-blue">COMMON QUESTIONS</span><h2>A few things<br/><span>worth knowing.</span></h2></div><div className="faq-list">{faqs.map(f => <details key={f.question}><summary>{f.question}<Icon name="chevron" /></summary><p>{f.answer}</p></details>)}</div></div></section>
    <Cta subtitle="Tell us about your sites, existing setup and what's important. We'll help you understand your options." />
  </>;
}
