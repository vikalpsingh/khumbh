"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, ShieldCheck } from "lucide-react";
import { getPathLocale, localizedHref } from "@/lib/locale";
import { uiCopy } from "@/data/locale-ui";

export function Footer() {
  const locale = getPathLocale(usePathname());
  const copy = locale === "en" ? null : uiCopy[locale];
  const href = (path: string) => localizedHref(path, locale);
  return (
    <footer className="pattern-mandala bg-[#211615] pb-20 text-stone-300 md:pb-0 print:hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div><div className="font-serif text-2xl font-bold text-white">{copy?.siteName || "Ujjain Kumbh 2028"}</div><p className="mt-1 text-xs font-bold uppercase tracking-widest text-gold">{copy?.tagline || "Mahakal Travel Guide"}</p><p className="mt-4 max-w-sm text-sm leading-6 text-stone-400">{copy?.footerText || "Practical, family-friendly planning for a meaningful journey through Ujjain and central India."}</p></div>
        <div><p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">{copy?.footerPlan || "Plan"}</p><div className="space-y-3 text-sm"><Link className="block hover:text-white" href={href("/plan-my-trip")}>{copy?.planTrip || "Plan my trip"}</Link><Link className="block hover:text-white" href={href("/stay-guide")}>{copy?.compareStays || "Compare stays"}</Link><Link className="block hover:text-white" href={href("/itineraries")}>{copy?.itineraries || "Itineraries"}</Link></div></div>
        <div><p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">{copy?.footerDiscover || "Discover"}</p><div className="space-y-3 text-sm"><Link className="block hover:text-white" href={href("/mahakal-temple-guide")}>{copy?.nav[1] || "Mahakal Guide"}</Link><Link className="block hover:text-white" href={href("/nearby-places")}>{copy?.nearby || "Nearby destinations"}</Link><Link className="block hover:text-white" href={href("/food-guide")}>{copy?.foodGuide || "Food guide"}</Link></div></div>
        <div><p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">{copy?.footerTrust || "Trust & support"}</p><p className="flex gap-2 text-sm"><ShieldCheck className="h-4 w-4 text-gold" />{copy?.officialFirst || "Official sources first"}</p><Link href={href("/contact")} className="mt-4 flex gap-2 text-sm hover:text-white"><Mail className="h-4 w-4" />{copy?.enquiry || "Travel enquiry"}</Link><p className="mt-4 flex gap-2 text-sm text-stone-400"><MapPin className="h-4 w-4" />{copy?.location || "Ujjain, Madhya Pradesh"}</p></div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-stone-500">© 2026 {copy?.siteName || "Ujjain Kumbh 2028"} · Privacy · Disclaimer</div>
    </footer>
  );
}
