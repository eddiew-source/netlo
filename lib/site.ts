export const site = {
  name: "Netlo",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://netlo.uk",
  live: process.env.NEXT_PUBLIC_SITE_LIVE === "true",
  tagline: "Business connectivity. Without the runaround.",
  description: "Business and home broadband, leased lines, hosted VoIP, resilient networks, managed IT and independent technology consultancy.",
} as const;

// Grouping is shared by desktop navigation, mobile navigation and the footer.
// Keep this focused on customer journeys, not wholesale platform terminology.
export const serviceGroups = [
  { label: "Connectivity", links: [
    { href: "/business-broadband", label: "Business broadband" },
    { href: "/leased-lines", label: "Leased lines & Ethernet" },
    { href: "/resilient-networks", label: "Resilient & multi-site networks" },
  ] },
  { label: "Business communications", links: [
    { href: "/business-voice", label: "Hosted VoIP & phone systems" },
    { href: "/business-voice#sip-trunks", label: "SIP trunks" },
    { href: "/business-voice#more-communications", label: "Numbers, SMS & fax" },
  ] },
  { label: "IT & advice", links: [
    { href: "/managed-it", label: "Managed IT & cloud" },
    { href: "/cybersecurity", label: "Cybersecurity" },
    { href: "/consultancy", label: "IT consultancy & projects" },
  ] },
] as const;

export const navLinks = [
  { href: "/business-broadband", label: "Business broadband" },
  { href: "/leased-lines", label: "Leased lines" },
  { href: "/business-voice", label: "VoIP & business phones" },
  { href: "/resilient-networks", label: "Resilient networks" },
  { href: "/managed-it", label: "Managed IT" },
  { href: "/cybersecurity", label: "Cybersecurity" },
  { href: "/consultancy", label: "Consultancy" },
  { href: "/about", label: "Why Netlo" },
] as const;

export const services = [
  { href: "/business-broadband", icon: "wifi", index: "01 / 04",
    title: "Business connectivity", line: "The right connection for the job.",
    description: "FTTP, business broadband and dedicated Ethernet — one office or a whole estate." },
  { href: "/business-voice", icon: "phone", index: "02 / 04",
    title: "Business voice", line: "Calls that work your way.",
    description: "Hosted phone systems, SIP trunks, numbers and straightforward call management." },
  { href: "/resilient-networks", icon: "network", index: "03 / 04",
    title: "Networks & resilience", line: "Plan for the unexpected.",
    description: "Backup connections, managed firewalls, SD-WAN and secure multi-site networking." },
  { href: "/managed-it", icon: "layers", index: "04 / 04",
    title: "Managed IT", line: "Help beyond the broadband line.",
    description: "Support for your infrastructure, cloud, users and security — with consultancy when you need it." },
] as const;

export const additionalServices = [
  { href: "/leased-lines", icon: "network", title: "Dedicated leased lines", text: "Business-critical Ethernet and point-to-point connectivity." },
  { href: "/consultancy", icon: "briefcase", title: "Consultancy & projects", text: "Network architecture, migrations, reviews and technical leadership." },
  { href: "/cybersecurity", icon: "shield", title: "Security services", text: "Firewalls, identity, backup and practical risk reduction." },
  { href: "/business-voice#more-communications", icon: "phone", title: "Business communications", text: "Hosted phones, SIP, number porting, SMS and fax-to-email." },
] as const;
