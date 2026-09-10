import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dbcbakes.com";
  return ["", "/menu", "/about", "/contact"].map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
}
