import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { servicesData } from "@/lib/services_data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    ...servicesData.map((service) => ({ 
      url: `${baseUrl}/services/${service.slug}`, 
      lastModified: new Date(), 
      changeFrequency: "monthly" as const, 
      priority: 0.8 
    })),
  ];
}
