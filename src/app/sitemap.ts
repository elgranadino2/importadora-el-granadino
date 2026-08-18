import type { MetadataRoute } from "next";

// Dominio aún no definido — placeholder hasta que el cliente lo confirme.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://elgranadino.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
