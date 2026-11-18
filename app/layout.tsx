import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Business connectivity & managed IT | Netlo", template: "%s | Netlo" },
  description: site.description,
  openGraph: { type: "website", siteName: "Netlo", title: "Netlo — business connectivity & managed IT", description: site.description, images: ["/assets/social-preview.jpg"] },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/assets/favicon.png" },
  robots: site.live ? { index: true, follow: true } : { index: false, follow: false },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#071b32" };
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en-GB"><body><Header /><main id="main">{children}</main><Footer /></body></html>;
}
