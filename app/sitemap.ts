import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/business-broadband", "/leased-lines", "/business-voice", "/consultancy", "/resilient-networks", "/managed-it", "/cybersecurity", "/about", "/contact", "/home-broadband", "/privacy"].map(path => ({ url: site.url + path, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 }));
}
