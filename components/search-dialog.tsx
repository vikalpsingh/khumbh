"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { localizedHref } from "@/lib/locale";

const englishPages = [
  ["Kumbh 2028 complete guide", "/kumbh-2028-guide", "dates bathing crowds preparation simhastha"],
  ["How to reach Ujjain", "/how-to-reach", "airport train road indore transfer"],
  ["Mahakal Temple guide", "/mahakal-temple-guide", "darshan bhasma aarti mahakaleshwar"],
  ["Stay guide", "/stay-guide", "hotels Ujjain Indore Bhopal"],
  ["Nearby places", "/nearby-places", "Omkareshwar Mandu Maheshwar Indore"],
  ["Food guide", "/food-guide", "poha jalebi dal bafla"],
  ["Itineraries", "/itineraries", "2 day 4 day 7 day"],
  ["FAQs", "/faqs", "questions safety international visitors"],
];

const hindiPages = [
  ["कुंभ 2028 पूरी जानकारी", "/kumbh-2028-guide", "तिथि स्नान भीड़ तैयारी सिंहस्थ"],
  ["उज्जैन कैसे पहुँचें", "/how-to-reach", "हवाई अड्डा ट्रेन सड़क इंदौर"],
  ["महाकाल मंदिर गाइड", "/mahakal-temple-guide", "दर्शन भस्म आरती महाकालेश्वर"],
  ["कहाँ ठहरें", "/stay-guide", "होटल उज्जैन इंदौर भोपाल"],
  ["आस-पास घूमने की जगहें", "/nearby-places", "ओंकारेश्वर मांडू महेश्वर इंदौर"],
  ["खान-पान गाइड", "/food-guide", "पोहा जलेबी दाल बाफला"],
  ["यात्रा कार्यक्रम", "/itineraries", "एक दिन दो दिन सात दिन"],
  ["सामान्य प्रश्न", "/faqs", "सुरक्षा परिवार दर्शन"],
];

export function SearchDialog({ open, onClose, hindi = false }: { open: boolean; onClose: () => void; hindi?: boolean }) {
  const [query, setQuery] = useState("");
  const source = hindi ? hindiPages : englishPages;
  const matches = useMemo(() => source.filter((page) => page.join(" ").toLowerCase().includes(query.toLowerCase())), [query, source]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] bg-ink/55 p-4 backdrop-blur-sm" onMouseDown={onClose}>
      <div className="mx-auto mt-[12vh] max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-stone-200 px-5">
          <Search className="h-5 w-5 text-saffron" />
          <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder={hindi ? "मार्ग, मंदिर या ठहरने की जगह खोजें…" : "Search routes, temples, stays…"} className="h-16 flex-1 bg-transparent text-base outline-none" />
          <button onClick={onClose} aria-label={hindi ? "खोज बंद करें" : "Close search"}><X /></button>
        </div>
        <div className="max-h-80 overflow-auto p-3">
          {matches.map(([title, href]) => <Link key={href} href={localizedHref(href, hindi)} onClick={onClose} className="block rounded-2xl px-4 py-4 font-semibold text-ink hover:bg-sand">{title}</Link>)}
          {!matches.length && <p className="p-6 text-center text-stone-500">{hindi ? "कोई गाइड नहीं मिली। “महाकाल” या “इंदौर” खोजें।" : "No guide found. Try “Mahakal” or “Indore”."}</p>}
        </div>
      </div>
    </div>
  );
}
