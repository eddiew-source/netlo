import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
export const metadata: Metadata = { title: "Managed IT services", description: "Practical managed IT, infrastructure, Microsoft 365 and cloud support from Netlo." };
export default function ManagedIT() { return <ServicePage
  eyebrow="MANAGED IT" title="IT that works" accent="with your business."
  intro="Get help with the everyday running of your systems, the infrastructure behind them and the changes needed as your business grows."
  bullets={["Infrastructure and network management", "Microsoft 365 and cloud services", "Device and user support", "Projects, audits and ongoing advice"]}
  features={[
    {icon:"headset",title:"Day-to-day support",description:"Practical assistance for users, devices and common business technology issues, within an agreed service scope."},
    {icon:"server",title:"Infrastructure management",description:"Servers, networks, backup, monitoring and lifecycle management for your key systems."},
    {icon:"cloud",title:"Cloud and Microsoft 365",description:"Help with cloud services, identity, Microsoft 365 administration and sensible improvements."},
    {icon:"briefcase",title:"Technology leadership",description:"Technical reviews, roadmap planning and senior infrastructure input without needing a full-time specialist."},
  ]}
  detailTitle="Support with a wider view."
  detailCopy="We don't believe every problem can be solved with another helpdesk ticket. Some businesses need better processes, clearer ownership or more resilient infrastructure."
  detailPoints={["Clearly defined support arrangements", "Proactive reviews where appropriate", "Infrastructure and cloud expertise", "Project and migration support", "A practical improvement roadmap"]}
  faqs={[
    {question:"Can you support a business without replacing its existing IT provider?",answer:"Yes, depending on the scope. We can discuss specialist infrastructure, connectivity or project support alongside an existing team."},
    {question:"Do you offer 24/7 support?",answer:"Not as a blanket promise. Coverage and response commitments need to be agreed and priced for each service."},
    {question:"Can you start with an audit?",answer:"Yes. A scoped technology or resilience review is often a useful way to identify immediate priorities."},
  ]}
/>; }
