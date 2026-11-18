import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  return { rules: site.live ? { userAgent: "*", allow: "/", disallow: ["/portal", "/sign-in", "/sign-up", "/api/portal"] } : { userAgent: "*", disallow: "/" }, sitemap: `${site.url}/sitemap.xml` };
}
