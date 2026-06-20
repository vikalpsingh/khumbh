import type { MetadataRoute } from "next";
import { localeCodes } from "@/lib/locale";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/kumbh-2028-guide", "/plan-my-trip", "/how-to-reach", "/mahakal-temple-guide", "/stay-guide", "/nearby-places", "/food-guide", "/itineraries", "/faqs", "/contact"];
  const languages = (route: string) => Object.fromEntries([["en", `https://ujjain2028.in${route}`], ...localeCodes.map((locale) => [locale, `https://ujjain2028.in/${locale}${route}`])]);
  return routes.flatMap((route) => [
    { url: `https://ujjain2028.in${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : 0.8, alternates: { languages: languages(route) } },
    ...localeCodes.map((locale) => ({ url: `https://ujjain2028.in/${locale}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 0.95 : 0.75, alternates: { languages: languages(route) } })),
  ]);
}
