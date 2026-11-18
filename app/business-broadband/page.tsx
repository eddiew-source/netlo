import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
export const metadata: Metadata = { title: "Business FTTP, SOGEA & fibre broadband", description: "UK FTTP and business broadband, including SOGEA and other access options where available, with advice on the right connection for your site." };
export default function BusinessBroadband() { return <ServicePage
  enquiryService="Business broadband"
  eyebrow="BUSINESS BROADBAND" title="A better connection" accent="for your business."
  intro="Business internet should fit how you operate, not just a speed on an advert. We'll look at location, availability, usage and what happens if a connection goes down."
  cta="Request a broadband quote"
  bullets={["Full-fibre FTTP options", "SOGEA and other available broadband access", "Single or multi-site supply", "Static IP and resilient-network options"]}
  features={[
    {icon:"wifi",title:"Full fibre (FTTP)",description:"High-speed fibre for offices, shops and businesses, with network and speed options determined by your address."},
    {icon:"network",title:"Other access options",description:"SOGEA and other available broadband products for premises not yet served by the fibre package you want."},
    {icon:"server",title:"For one site or many",description:"Simplify the purchasing and management of connectivity across branches, retail locations and offices."},
    {icon:"shield",title:"Keep it working",description:"Add managed routers, static IP options, monitoring and secondary access where continuity matters."},
  ]}
  detailTitle="The right product for each site."
  detailCopy="A busy office, retail branch and warehouse do not all need the same circuit. We'll help you compare available broadband products and decide when to add resilience or step up to dedicated Ethernet."
  detailPoints={["Full-fibre and copper-based access where available", "Availability checked at the property", "Clear installation and contract options", "Optional static IP and router management", "Leased-line and backup alternatives when appropriate"]}
  showAvailability
  faqs={[
    {question:"Can Netlo supply fibre at my address?",answer:"That depends on the property and the access networks serving it. Start with your postcode and we'll review the available options."},
    {question:"Can we keep our existing IP address?",answer:"Static IP options depend on the service and how your existing network is configured. We'll review that as part of a migration."},
    {question:"What if our internet is business-critical?",answer:"We can look at a backup circuit, mobile failover or a dedicated leased line alongside the primary connection."},
    {question:"Are all speeds available everywhere?",answer:"No. Headline speeds depend on the local carrier, product and address. We will confirm the options before quoting."},
  ]}
/>; }
