import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
export const metadata: Metadata = { title: "Managed networks, SD-WAN & internet failover", description: "Multi-site networks, secure SD-WAN, managed firewalls and backup connectivity designed to reduce disruption." };
export default function ResilientNetworks() { return <ServicePage
  enquiryService="Resilient networks & failover"
  eyebrow="NETWORKS & BUSINESS CONTINUITY" title="Keep your sites" accent="working together."
  intro="Internet access is only one part of a business network. We design the routing, security, monitoring and failover around the people and applications that depend on it."
  bullets={["Fixed-line and 4G/5G backup options", "Managed routers and firewalls", "Site-to-site VPNs and SD-WAN", "Monitoring and network change management"]}
  features={[
    {icon:"network",title:"Multi-site networking",description:"Bring branches, offices and cloud services together using networking suited to your operational requirements."},
    {icon:"shield",title:"Secure edge",description:"Firewall policies, segmentation, secure access and managed routing with responsibilities agreed upfront."},
    {icon:"layers",title:"Designed-in resilience",description:"Compare backup broadband, mobile connectivity or diverse leased lines rather than relying on one circuit."},
    {icon:"server",title:"Useful visibility",description:"Connection monitoring, alerting and a clear escalation process so faults don't become a guessing game."},
  ]}
  detailTitle="Resilience starts with design."
  detailCopy="Not every site needs a complex SD-WAN. We'll identify the applications that matter, assess failure scenarios, then select a proportionate network and backup design."
  detailPoints={["Connectivity and site survey", "Primary and backup route design", "Firewall and SD-WAN platform selection", "Monitoring, alerting and change control", "Recovery testing and support scope"]}
  showAvailability
  faqs={[
    {question:"Does automatic failover mean zero downtime?",answer:"No. Switchovers depend on router behaviour, the backup service, signal quality and application sessions. We'll explain likely behaviour before implementation."},
    {question:"Do we have to change all our existing circuits?",answer:"Not necessarily. We can assess the current estate and work out which links need replacing or supplementing."},
    {question:"Can Netlo manage existing networking equipment?",answer:"Potentially, depending on the platform, licensing, access and responsibilities. We'll review the environment before quoting."},
  ]}
/>; }
