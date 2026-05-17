import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${site.url}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/upload`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/report`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/login`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${site.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
