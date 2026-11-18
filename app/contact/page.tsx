import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
export const metadata: Metadata = { title: "Contact & business enquiries", description: "Contact Netlo about business broadband, leased lines, resilient networks and managed IT." };
export default async function Contact({ searchParams }: { searchParams: Promise<{ postcode?: string }> }) {
  const params = await searchParams;
  const code = typeof params.postcode === "string" && /^[A-Z0-9 ]{4,10}$/i.test(params.postcode) ? params.postcode : undefined;
  return <>
    <section className="contact-hero"><div className="container"><span className="eyebrow"><span className="eyebrow-line"/> CONTACT NETLO</span><h1>Let's talk about<br/><em>what you need.</em></h1><p>Broadband, networks or managed IT — tell us a little about your business and we'll take it from there.</p></div></section>
    <section className="section contact-section"><div className="container contact-layout"><div className="contact-form-card"><div className="form-heading"><span className="eyebrow eyebrow-blue">START A CONVERSATION</span><h2>Send us an enquiry.</h2><p>Tell us what you need and the best way to reach you.</p></div><ContactForm postcode={code}/></div><aside className="contact-aside"><div className="contact-aside-card"><Icon name="wifi" /><h3>Broadband availability</h3><p>Share your postcode and what you need. We'll help you understand the options.</p></div><div className="contact-aside-card"><Icon name="briefcase" /><h3>Business IT & networking</h3><p>For a new network, an existing problem or a longer-term support discussion, start with the basics and we'll work out next steps.</p></div></aside></div></section>
  </>;
}
