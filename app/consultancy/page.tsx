import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
export const metadata: Metadata = { title: "IT infrastructure & network consultancy", description: "Independent infrastructure consultancy, network design, migrations, security reviews and fractional IT leadership for UK businesses." };
export default function Consultancy() { return <ServicePage
  enquiryService="IT consultancy"
  eyebrow="IT CONSULTANCY & PROJECTS" title="Experienced thinking" accent="when you need it."
  intro="Some challenges need an experienced technical lead, not a new monthly package. From a second opinion to a complex migration, Netlo can provide scoped consultancy and delivery support."
  cta="Discuss a consultancy project"
  bullets={["Network and infrastructure architecture", "Cloud and data centre migrations", "Independent audits and assessments", "Fractional IT and infrastructure leadership"]}
  features={[
    {icon:"network",title:"Network strategy",description:"SD-WAN, firewall architecture, branch connectivity, internet breakout and practical multi-site design."},
    {icon:"server",title:"Infrastructure & cloud",description:"Migration planning, virtualisation, backup, recovery and modernisation of business infrastructure."},
    {icon:"shield",title:"Risk & resilience reviews",description:"Assess single points of failure, security posture, recovery objectives and opportunities to reduce operational risk."},
    {icon:"briefcase",title:"Technical leadership",description:"Independent advice, supplier selection, project governance and senior technical input without a permanent appointment."},
  ]}
  detailTitle="A defined outcome, not endless consultancy."
  detailCopy="A useful engagement starts with a business goal: reduce outage risk, modernise a platform, simplify a network or get a programme under control. We'll agree the scope, deliverables and decision points upfront."
  detailPoints={["Discovery and technical assessment", "Recommendations with priorities and trade-offs", "Designs, roadmaps and migration plans", "Implementation or supplier oversight", "Documentation and knowledge transfer"]}
  faqs={[
    {question:"Do we have to buy Netlo connectivity?",answer:"No. Consultancy can be provided separately from broadband or other Netlo services."},
    {question:"Can you work alongside our existing IT team or MSP?",answer:"Yes. We can scope specialist project or architectural support that complements an internal team or existing provider."},
    {question:"Do you offer fixed-fee work?",answer:"Where the outcome is well defined, we can discuss a fixed-fee engagement. More open-ended advisory or project work can be scoped separately."},
  ]}
/>; }
