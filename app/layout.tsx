import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
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
  const authEnabled = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY);
  const content = <><Header authEnabled={authEnabled} /><main id="main">{children}</main><Footer /></>;
  return <html lang="en-GB"><body>{authEnabled ? <ClerkProvider>{content}</ClerkProvider> : content}</body></html>;
}
