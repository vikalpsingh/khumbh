"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";

const pages = [
  ["Kumbh 2028 complete guide", "/kumbh-2028-guide", "dates bathing crowds preparation simhastha"],
  ["How to reach Ujjain", "/how-to-reach", "airport train road indore transfer"],
  ["Mahakal Temple guide", "/mahakal-temple-guide", "darshan bhasma aarti mahakaleshwar"],
  ["Stay guide", "/stay-guide", "hotels Ujjain Indore Bhopal"],
  ["Nearby places", "/nearby-places", "Omkareshwar Mandu Maheshwar Indore"],
  ["Food guide", "/food-guide", "poha jalebi dal bafla"],
  ["Itineraries", "/itineraries", "2 day 4 day 7 day"],
  ["FAQs", "/faqs", "questions safety international visitors"],
];

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const matches = useMemo(() => pages.filter((p) => p.join(" ").toLowerCase().includes(query.toLowerCase())), [query]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] bg-ink/55 p-4 backdrop-blur-sm" onMouseDown={onClose}>
      <div className="mx-auto mt-[12vh] max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl" onMouseDown={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-stone-200 px-5">
          <Search className="h-5 w-5 text-saffron" />
          <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search routes, temples, stays…" className="h-16 flex-1 bg-transparent text-base outline-none" />
          <button onClick={onClose} aria-label="Close search"><X /></button>
        </div>
        <div className="max-h-80 overflow-auto p-3">
          {matches.map(([title, href]) => (
            <Link key={href} href={href} onClick={onClose} className="block rounded-2xl px-4 py-4 font-semibold text-ink hover:bg-sand">{title}</Link>
          ))}
          {!matches.length && <p className="p-6 text-center text-stone-500">No guide found. Try “Mahakal” or “Indore”.</p>}
        </div>
      </div>
    </div>
  );
}
