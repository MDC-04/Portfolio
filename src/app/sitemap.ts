import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const BASE_URL = "https://mdchellaf.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = projects
    .filter((p) => p.details)
    .map((p) => ({
      url: `${BASE_URL}/projects/${p.id}`,
      lastModified: new Date(),
      priority: 0.7,
    }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      priority: 1.0,
    },
    ...projectPages,
  ];
}
