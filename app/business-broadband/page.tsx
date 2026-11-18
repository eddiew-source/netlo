import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
export const metadata: Metadata = { title: "Business broadband & leased lines", description: "UK business broadband, fibre and dedicated leased lines with straightforward advice from Netlo." };
export default function BusinessBroadband() { return <ServicePage
  eyebrow="BUSINESS BROADBAND & LEASED LINES" title="A better connection" accent="for your business."
  intro="From a single office connection to multiple locations, we'll help you find connectivity that fits how your business works."
  cta="Ask for a quote"
  bullets={["Business fibre and broadband", "Dedicated Ethernet and leased lines", "Multi-site connectivity", "Options for mobile backup and static IPs"]}
  features={[
    { icon:"wifi",title:"Business broadband",description:"Fibre and broadband options for offices, shops and growing teams, subject to local availability." },
    { icon:"network",title:"Leased lines",description:"Dedicated Ethernet circuits when predictable capacity and a defined service arrangement matter." },
    { icon:"server",title:"One site or many",description:"Talk to one team about connectivity across multiple locations rather than juggling different providers." },
    { icon:"shield",title:"More than a circuit",description:"Add managed routers, security, monitoring and continuity options where they're needed." },
  ]}
  detailTitle="Connectivity without the guesswork."
  detailCopy="The right line depends on more than the headline speed. We'll talk through usage, critical systems, existing contracts and what happens if your primary connection fails."
  detailPoints={["FTTP and other access products where available", "Quote-led leased-line options", "Installation and contract terms explained", "Optional network management and resilience", "No made-up availability or speeds"]}
  faqs={[
    { question:"Can you provide broadband at my address?", answer:"Availability varies by property and access network. Enter your postcode above, or ask us to check the options for your address." },
    { question:"Is a leased line the same as fibre broadband?", answer:"No. A leased line typically provides dedicated, business-focused connectivity with different commercial and service arrangements. We can explain when it's worth the additional cost." },
    { question:"Can you connect multiple sites?", answer:"That is a core use case for Netlo. We can discuss the access circuits and the networking that links your locations together." },
    { question:"Do you offer fixed prices online?", answer:"Pricing depends on the location, service type, installation requirements and contract term. We'll provide a clear quote before you commit." },
  ]}
/>; }
