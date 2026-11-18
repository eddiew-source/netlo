import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
export const metadata: Metadata = { title: "Dedicated leased lines & Ethernet", description: "UK Ethernet leased lines, dedicated internet access, point-to-point circuits and resilient connectivity, sourced for your premises." };
export default function LeasedLines() { return <ServicePage
  enquiryService="Leased lines & Ethernet"
  eyebrow="LEASED LINES & ETHERNET" title="Dedicated connectivity" accent="for important work."
  intro="When broadband isn't enough, dedicated Ethernet gives you a business-focused connection with predictable capacity and an agreed service arrangement. We'll compare carrier options at your site."
  cta="Request a leased-line quote"
  bullets={["Dedicated internet access", "Point-to-point Ethernet", "Resilient circuits and diverse routes", "Speeds up to 10Gbps where available"]}
  features={[
    {icon:"network",title:"Dedicated internet access",description:"Uncontended Ethernet bandwidth for businesses that need reliable capacity and a defined service level."},
    {icon:"layers",title:"Point-to-point",description:"Connect offices, buildings or data centres with an Ethernet service designed around your traffic."},
    {icon:"shield",title:"Resilient access",description:"Consider diverse fibre routes or a secondary circuit where outage impact justifies the design."},
    {icon:"server",title:"Managed handover",description:"Router, IP addressing, monitoring and site handover options scoped to the service."},
  ]}
  detailTitle="Compare carriers, not just prices."
  detailCopy="Circuit cost and delivery depend on the building, available infrastructure, routing and contract length. We'll review options from available carriers and explain installation, lead times and service commitments."
  detailPoints={["Multi-carrier quotation", "Clear installation and contract terms", "SLA options explained", "Primary and backup circuit design", "Point-to-point and multi-site options"]}
  showAvailability
  faqs={[
    {question:"What is the difference between leased line and FTTP?",answer:"FTTP is generally a shared broadband access product. A leased line is a dedicated Ethernet service with different capacity and service commitments. The right answer depends on usage, budget and the cost of downtime."},
    {question:"Do you offer 10Gbps connections?",answer:"Leased-line carrier portfolios include options up to 10Gbps, subject to survey, network availability and quotation."},
    {question:"Can Netlo provide a backup connection too?",answer:"Yes. We can design a second circuit or alternative access service, depending on resilience requirements and what is available at the site."},
  ]}
/>; }
