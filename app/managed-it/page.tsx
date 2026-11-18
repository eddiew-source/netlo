import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
export const metadata: Metadata = { title: "Managed IT, Microsoft 365 & infrastructure", description: "Managed IT and technology support covering networks, Microsoft 365, devices, cloud infrastructure, backup and recovery." };
export default function ManagedIT() { return <ServicePage
  enquiryService="Managed IT"
  eyebrow="MANAGED IT & CLOUD" title="Good IT makes" accent="everything easier."
  intro="We can take responsibility for an agreed part of your IT — from networks and infrastructure to Microsoft 365 and user support — without making things more complicated."
  bullets={["IT support and administration", "Microsoft 365, identity and cloud", "Network, server and firewall management", "Backup, recovery and planned improvements"]}
  features={[
    {icon:"headset",title:"User and device support",description:"Help with everyday technology problems, devices, access and business applications within a defined support agreement."},
    {icon:"cloud",title:"Microsoft 365 & cloud",description:"Tenant administration, identity, migration planning and cloud services aligned with the way teams work."},
    {icon:"server",title:"Infrastructure operations",description:"Servers, virtualisation, network equipment, monitoring, lifecycle planning and service ownership."},
    {icon:"shield",title:"Continuity & security",description:"Backups, recovery plans, firewall management and practical measures that reduce operational risk."},
  ]}
  detailTitle="Support that fits your business."
  detailCopy="Some customers want an outsourced IT function; others need expert help with their networks or infrastructure while keeping their existing provider. We'll define coverage, priorities and responsibilities together."
  detailPoints={["Clearly documented service scope", "Access and support responsibilities", "Incident and change processes", "Ongoing reviews and improvement planning", "Optional consultancy and migration projects"]}
  faqs={[
    {question:"Do you need to replace our existing IT team?",answer:"No. We can complement an existing team or MSP with specialist network, infrastructure or project support."},
    {question:"Can you manage Microsoft 365?",answer:"We can discuss administration, identity, security baselines and migrations as part of a scoped managed service or project."},
    {question:"Is out-of-hours support included?",answer:"Support hours, escalation paths and response commitments are agreed for each contract rather than assumed."},
  ]}
/>; }
