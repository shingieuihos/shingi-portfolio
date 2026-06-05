import type { MetadataRoute } from "next";
import { publishedPosts } from "@/lib/blog";

export const dynamic = "force-static";

const BASE = "https://shingi.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = publishedPosts().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.updated ?? p.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: BASE, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.8 },
    ...blogPosts,
  ];
}
