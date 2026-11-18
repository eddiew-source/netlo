import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
export const metadata: Metadata = { title: "Cybersecurity, firewalls & risk reviews", description: "Practical business cybersecurity: firewall management, identity security, network segmentation, vulnerability reviews and recovery planning." };
export default function Cybersecurity() { return <ServicePage
  enquiryService="Cybersecurity"
  eyebrow="BUSINESS CYBERSECURITY" title="Security you can" accent="put into practice."
  intro="Security should be based on your real risks, not a list of products. We help businesses identify weaknesses, improve controls and manage secure connectivity."
  bullets={["Managed firewalls and secure networking", "MFA and access-control reviews", "Security posture and risk assessments", "Backup and recovery planning"]}
  features={[
    {icon:"shield",title:"Managed firewalls",description:"Help with firewall policy, segmentation, secure remote access and operational management."},
    {icon:"lock",title:"Identity & access",description:"MFA, privileged access, account lifecycle and Microsoft 365 identity-security improvements."},
    {icon:"network",title:"Network reviews",description:"Practical checks of exposure, remote access, vulnerable services and network design."},
    {icon:"server",title:"Recovery readiness",description:"Review whether your backups, recovery procedures and responsibilities would work under pressure."},
  ]}
  detailTitle="Good security starts with priorities."
  detailCopy="A focused assessment can be more useful than buying another tool. We'll identify meaningful improvements and help you plan or implement them."
  detailPoints={["Current-state review", "Prioritised risk and improvement actions", "Firewall and access-control changes", "Backup and recovery assessment", "Documentation and ownership"]}
  faqs={[
    {question:"Can you audit our existing environment?",answer:"Yes. We can scope a review around networks, Microsoft 365, identity, firewalls or resilience."},
    {question:"Do you offer a 24/7 SOC?",answer:"Security monitoring and incident response coverage must be explicitly scoped. We won't imply that a 24/7 SOC is included in a standard managed IT package."},
    {question:"Can security be part of a broader IT contract?",answer:"Yes. It often makes sense to manage networking, identity and security together when responsibilities are clear."},
  ]}
/>; }
