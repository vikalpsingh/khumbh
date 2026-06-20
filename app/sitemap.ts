import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/kumbh-2028-guide", "/plan-my-trip", "/how-to-reach", "/mahakal-temple-guide", "/stay-guide", "/nearby-places", "/food-guide", "/itineraries", "/faqs", "/contact"];
  const createEntry = (route: string, hindi = false): MetadataRoute.Sitemap[number] => ({
    url: `https://ujjain2028.in${hindi ? "/hi" : ""}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? (hindi ? 0.95 : 1) : (hindi ? 0.75 : 0.8),
    alternates: {
      languages: {
        en: `https://ujjain2028.in${route}`,
        hi: `https://ujjain2028.in/hi${route}`,
      },
    },
  });
  return [...routes.map((route) => createEntry(route)), ...routes.map((route) => createEntry(route, true))];
}
