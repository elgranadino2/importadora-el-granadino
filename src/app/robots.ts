import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://elgranadino.example.com";

// Sin admin ni carrito que bloquear (landing de una sola página) — abierto
// a todo, incluidos los crawlers de IA (GPTBot, ClaudeBot, etc.).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
