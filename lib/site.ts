export const site = {
  name: "Netlo",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://netlo.uk",
  live: process.env.NEXT_PUBLIC_SITE_LIVE === "true",
  tagline: "Business connectivity. Without the runaround.",
  description: "Business broadband, leased lines, resilient networks and managed IT, with clear advice and people who know their networks.",
} as const;

export const navLinks = [
  { href: "/business-broadband", label: "Business broadband" },
  { href: "/resilient-networks", label: "Resilient networks" },
  { href: "/managed-it", label: "Managed IT" },
  { href: "/cybersecurity", label: "Cybersecurity" },
  { href: "/about", label: "Why Netlo" },
] as const;

export const services = [
  {
    href: "/business-broadband", icon: "wifi", index: "01 / 04",
    title: "Business connectivity", line: "Broadband that means business.",
    description: "Full fibre, business broadband and dedicated leased lines. Straightforward options for one site or many.",
  },
  {
    href: "/resilient-networks", icon: "network", index: "02 / 04",
    title: "Resilient networks", line: "Stay connected when it matters.",
    description: "Failover, secure site-to-site connectivity and managed networks built with continuity in mind.",
  },
  {
    href: "/managed-it", icon: "layers", index: "03 / 04",
    title: "Managed IT", line: "Your technology, in safe hands.",
    description: "Practical support across devices, cloud, Microsoft 365 and infrastructure, without adding complexity.",
  },
  {
    href: "/cybersecurity", icon: "shield", index: "04 / 04",
    title: "Cybersecurity", line: "Security that makes sense.",
    description: "Risk-led security and sensible protection tailored to your people, systems and business.",
  },
] as const;
