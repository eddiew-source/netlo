import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
export const metadata: Metadata = { title: "Business cybersecurity services", description: "Business-focused cybersecurity support, firewall management, identity and risk-led improvements." };
export default function Cybersecurity() { return <ServicePage
  eyebrow="CYBERSECURITY" title="Practical security" accent="for real businesses."
  intro="Understand your risks, protect what matters and make security improvements that fit the way your business operates."
  bullets={["Security reviews and recommendations", "Firewalls and secure networking", "Identity and access controls", "Backup and recovery planning"]}
  features={[
    {icon:"shield",title:"Security reviews",description:"A pragmatic look at exposure, controls and sensible priorities for improvement."},
    {icon:"network",title:"Network security",description:"Segmentation, secure access and managed firewall options for business networks."},
    {icon:"lock",title:"Identity and access",description:"Advice around MFA, accounts, permissions and secure ways for people to work."},
    {icon:"server",title:"Recovery planning",description:"Review backup and continuity measures so recovery isn't an afterthought."},
  ]}
  detailTitle="Less box-ticking. More clarity."
  detailCopy="Good security starts with understanding the organisation. We focus on controls that reduce practical business risk and avoid unnecessary complexity."
  detailPoints={["Baseline security assessment", "Prioritised recommendations", "Identity and access improvement", "Firewall and network hardening", "Backup and continuity advice"]}
  faqs={[
    {question:"Is Netlo ISO 27001 certified?",answer:"No certification is being claimed on this site. We can discuss security practices and relevant standards, but company certification must be verified before any such claim is made."},
    {question:"Do you provide a managed SOC?",answer:"We aren't advertising a 24/7 SOC service at this stage. A tailored monitoring arrangement can be scoped once partners and coverage are confirmed."},
    {question:"Can you help with a security improvement plan?",answer:"Yes. A focused assessment and prioritised plan can be a sensible first engagement."},
  ]}
/>; }
