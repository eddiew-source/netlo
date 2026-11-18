import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
export const metadata: Metadata = { title: "Resilient networks & connectivity failover", description: "Managed networks, site-to-site connectivity and broadband failover designed around business continuity." };
export default function ResilientNetworks() { return <ServicePage
  eyebrow="RESILIENT NETWORKS" title="Stay connected" accent="when it counts."
  intro="A reliable business network takes more than an internet line. We look at your sites, backup options, routers and the services you depend on."
  bullets={["Primary and backup connectivity", "4G/5G failover options", "Managed firewalls and routers", "Multi-site networking and SD-WAN"]}
  features={[
    { icon:"network", title:"Automatic failover",description:"Design for a second connection to take over if a primary circuit fails, subject to coverage, equipment and service design." },
    { icon:"shield",title:"Managed edge",description:"Routers and firewalls managed as part of the service, with a clear approach to changes and support." },
    { icon:"layers",title:"Multi-site networks",description:"Connect branches and offices with an architecture that suits your applications and security requirements." },
    { icon:"server",title:"Visibility and monitoring",description:"Monitor availability and faults so issues are easier to identify and resolve." },
  ]}
  detailTitle="Design resilience around the risk."
  detailCopy="Not every business needs the same backup design. We'll weigh up site importance, available circuits, mobile signal, applications and what an outage actually costs you."
  detailPoints={["Independent access where feasible", "Backup circuit and mobile options", "Clear failover expectations", "Firewall and routing design", "Monitoring and support scope agreed upfront"]}
  faqs={[
    {question:"Does a 4G or 5G backup guarantee no downtime?",answer:"No. Switchover, signal coverage, congestion and individual application behaviour can affect service. We'll explain the design and its limitations."},
    {question:"Can you manage our existing firewall?",answer:"Potentially. We'll review the platform, licensing, access and support responsibilities before quoting."},
    {question:"Do we need SD-WAN?",answer:"Not necessarily. The simplest architecture that meets the business requirement is usually the best starting point."},
  ]}
/>; }
