import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/en", "/hi", "/kumbh-2028-guide", "/plan-my-trip", "/how-to-reach", "/mahakal-temple-guide", "/stay-guide", "/nearby-places", "/food-guide", "/itineraries", "/faqs", "/contact"];
  return routes.map((route) => ({ url: `https://ujjain2028.in${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.8 }));
}
