"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import type { LocaleCode } from "@/lib/locale";
import { localizedHref } from "@/lib/locale";
import { uiCopy } from "@/data/locale-ui";

const paths = ["/kumbh-2028-guide", "/how-to-reach", "/mahakal-temple-guide", "/stay-guide", "/nearby-places", "/food-guide", "/itineraries", "/faqs"];
const englishTitles = ["Kumbh 2028 complete guide", "How to reach Ujjain", "Mahakal Temple guide", "Stay guide", "Nearby places", "Food guide", "Itineraries", "FAQs"];

export function SearchDialog({ open, onClose, locale = "en" }: { open: boolean; onClose: () => void; locale?: LocaleCode | "en" }) {
  const [query, setQuery] = useState("");
  const copy = locale === "en" ? null : uiCopy[locale];
  const titles = locale === "en" ? englishTitles : [copy!.siteName, copy!.nav[3], copy!.nav[1], copy!.nav[2], copy!.nav[4], copy!.nav[6], copy!.nav[5], "FAQ"];
  const pages = paths.map((path, index) => [titles[index], path]);
  const matches = useMemo(() => pages.filter((page) => page.join(" ").toLowerCase().includes(query.toLowerCase())), [query, pages]);
  if (!open) return null;
  return <div className="fixed inset-0 z-[60] bg-ink/55 p-4 backdrop-blur-sm" onMouseDown={onClose}><div className="mx-auto mt-[12vh] max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
    <div className="flex items-center gap-3 border-b border-stone-200 px-5"><Search className="h-5 w-5 text-saffron" /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy?.search || "Search routes, temples and stays…"} className="h-16 flex-1 bg-transparent text-base outline-none" /><button onClick={onClose}><X /></button></div>
    <div className="max-h-80 overflow-auto p-3">{matches.map(([title, href]) => <Link key={href} href={localizedHref(href, locale)} onClick={onClose} className="block rounded-2xl px-4 py-4 font-semibold text-ink hover:bg-sand">{title}</Link>)}{!matches.length && <p className="p-6 text-center text-stone-500">No matching guide</p>}</div>
  </div></div>;
}
