import type { MetadataRoute } from "next";
import {
  services,
  projects,
  blogPosts,
  serviceAreas,
  business,
} from "@/lib/site";

const BASE = "https://interstate-fence.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/residential",
    "/commercial",
    "/services",
    "/projects",
    "/about",
    "/our-process",
    "/pricing",
    "/service-areas",
    "/contact",
    "/faq",
    "/blog",
    "/privacy-policy",
    "/terms",
  ].map((r) => ({
    url: `${BASE}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services
    .filter((s) => s.slug !== "commercial-industrial")
    .map((s) => ({
      url: `${BASE}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const projectRoutes = projects.map((p) => ({
    url: `${BASE}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.updated),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const areaRoutes = serviceAreas.map((a) => ({
    url: `${BASE}/service-areas/${a.city.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  void business;
  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...projectRoutes,
    ...blogRoutes,
    ...areaRoutes,
  ];
}
