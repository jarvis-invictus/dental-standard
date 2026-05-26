import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: ["*", "Googlebot", "bingbot", "Googlebot-Image", "Googlebot-News", "Googlebot-Video", "AdsBot-Google", "Mediapartners-Google", "Amazonbot", "CCBot", "Bytespider", "Applebot-Extended", "FacebookExternalHit"],
      allow: "/",
      disallow: ["/api/", "/_next/", "/private/"],
    },
    sitemap: "https://dental-standard-v2.vercel.app/sitemap.xml",
  };
}
