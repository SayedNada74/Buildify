import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://buildify.studio";
  const routes = ["", "/services", "/work", "/work/grand-cafe", "/about", "/contact"];

  const englishRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const arabicRoutes = routes.map((route) => ({
    url: `${baseUrl}/ar${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 0.9 : 0.8,
  }));

  return [...englishRoutes, ...arabicRoutes];
}
