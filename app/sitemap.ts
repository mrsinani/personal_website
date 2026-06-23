import type { MetadataRoute } from "next";
import { SITE_URL, sitePages } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = sitePages.map(({ path }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: (path === "/" ? "monthly" : "weekly") as "monthly" | "weekly",
    priority: path === "/" || path === "/contact" ? 1 : 0.8,
  }));

  const aiContent = [
    { url: `${SITE_URL}/llms.txt`, priority: 1 },
    { url: `${SITE_URL}/llms-full.txt`, priority: 1 },
    { url: `${SITE_URL}/profile.json`, priority: 0.9 },
  ].map(({ url, priority }) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority,
  }));

  return [...aiContent, ...pages];
}
