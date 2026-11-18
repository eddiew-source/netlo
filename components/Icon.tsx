import type { SVGProps, ReactNode } from "react";

export type IconName = "arrow" | "arrow-up" | "check" | "wifi" | "network" | "layers" |
  "shield" | "headset" | "building" | "server" | "cloud" | "pin" | "mail" | "menu" |
  "close" | "house" | "lock" | "phone" | "chevron" | "clock" | "briefcase";

const paths: Record<IconName, ReactNode> = {
  arrow: <path d="M5 12h14m-7-7 7 7-7 7" />,
  "arrow-up": <path d="M6 18 18 6M8 6h10v10" />,
  check: <path d="m4 12 5.5 5.5L20 6" />,
  wifi: <><path d="M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0M8.5 16a6 6 0 0 1 7 0" /><circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" /></>,
  network: <><circle cx="12" cy="4" r="2.5"/><circle cx="4" cy="20" r="2.5"/><circle cx="20" cy="20" r="2.5"/><path d="M12 6.5v5M12 11.5 4 17.5M12 11.5l8 6"/></>,
  layers: <path d="m12 3 9 5-9 5-9-5zM3 12l9 5 9-5M3 16l9 5 9-5"/>,
  shield: <><path d="M12 2 21 6v6c0 6-3.9 9-9 10-5.1-1-9-4-9-10V6z"/><path d="m8 12 3 3 5-6"/></>,
  headset: <path d="M4 13v-2a8 8 0 0 1 16 0v2M4 13h3v7H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2ZM20 13h-3v7h2a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2Z"/>,
  building: <><rect x="4" y="3" width="12" height="18" rx="1"/><path d="M8 7h4M8 11h4M8 15h4M16 10h4v11H3M9 21v-4h3v4"/></>,
  server: <><rect x="3" y="3" width="18" height="8" rx="2"/><rect x="3" y="13" width="18" height="8" rx="2"/><path d="M7 7h.1M7 17h.1M11 7h6M11 17h6"/></>,
  cloud: <path d="M7 19h11a4 4 0 0 0 .1-8 6.5 6.5 0 0 0-12.4-2A5 5 0 0 0 7 19Z"/>,
  pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
  close: <path d="M5 5l14 14M19 5 5 19"/>,
  house: <path d="m3 11 9-8 9 8v10H3zM9 21v-7h6v7"/>,
  lock: <><rect x="4" y="11" width="16" height="11" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></>,
  phone: <path d="M5 3h4l2 5-2.5 2c1.2 2.5 3 4.3 5.5 5.5l2-2.5 5 2v4c0 1.1-.9 2-2 2C10.2 21 3 13.8 3 5c0-1.1.9-2 2-2Z"/>,
  chevron: <path d="m6 9 6 6 6-6"/>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/></>,
  briefcase: <><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/></>,
};

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return <svg aria-hidden="true" className="icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>{paths[name]}</svg>;
}
