"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { isHindiPath, languageSwitchHref, localizedHref } from "@/lib/locale";
import { SearchDialog } from "./search-dialog";
import { Button } from "./ui/button";

const navItems = [
  { href: "/", en: "Home", hi: "होम" },
  { href: "/mahakal-temple-guide", en: "Mahakal Guide", hi: "महाकाल गाइड" },
  { href: "/stay-guide", en: "Stay", hi: "कहाँ ठहरें" },
  { href: "/plan-my-trip", en: "Plan My Trip", hi: "यात्रा योजना" },
  { href: "/nearby-places", en: "Nearby Places", hi: "आस-पास" },
  { href: "/itineraries", en: "Itineraries", hi: "यात्रा कार्यक्रम" },
  { href: "/food-guide", en: "Food Guide", hi: "खान-पान" },
];

export function Header() {
  const pathname = usePathname();
  const hindi = isHindiPath(pathname);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const planHref = localizedHref("/plan-my-trip", hindi);

  return (
    <>
      <div className="bg-maroon px-4 py-2 text-center text-[11px] font-semibold tracking-wide text-orange-50">
        {hindi ? "स्वतंत्र यात्रा मार्गदर्शिका · 2028 की अंतिम तिथियाँ और व्यवस्थाएँ आधिकारिक स्रोतों से जाँचें" : "Independent planning guide · Confirm final 2028 dates and arrangements with official authorities"}
      </div>
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-cream/95 backdrop-blur-xl print:hidden">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href={localizedHref("/", hindi)} className="flex items-center gap-3" aria-label={hindi ? "उज्जैन कुंभ 2028 होम" : "Ujjain Kumbh 2028 home"}>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-maroon font-serif text-xl text-gold ring-4 ring-orange-100">ॐ</span>
            <span>
              <span className="block font-serif text-base font-bold leading-none text-ink sm:text-lg">{hindi ? "उज्जैन कुंभ 2028" : "Ujjain Kumbh 2028"}</span>
              <span className="mt-1 block text-[9px] font-extrabold uppercase tracking-[0.18em] text-saffron">{hindi ? "महाकाल यात्रा गाइड" : "Mahakal Travel Guide"}</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-4 xl:flex" aria-label={hindi ? "मुख्य नेविगेशन" : "Main navigation"}>
            {navItems.map((item) => {
              const href = localizedHref(item.href, hindi);
              return <Link key={item.href} href={href} className={`text-[13px] font-semibold transition hover:text-saffron ${pathname === href ? "text-saffron" : "text-stone-700"}`}>{hindi ? item.hi : item.en}</Link>;
            })}
          </nav>
          <div className="flex items-center gap-1">
            <button onClick={() => setSearch(true)} className="grid h-10 w-10 place-items-center rounded-full hover:bg-white" aria-label={hindi ? "खोजें" : "Search"}><Search className="h-5 w-5" /></button>
            <Link href={languageSwitchHref(pathname)} className="hidden items-center gap-1 text-xs font-bold text-stone-600 sm:flex"><Languages className="h-4 w-4" />{hindi ? "English" : "हिन्दी"}</Link>
            <Button asChild variant="maroon" className="ml-2 hidden sm:inline-flex"><Link href={planHref}>{hindi ? "यात्रा बनाएँ" : "Plan trip"}</Link></Button>
            <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full xl:hidden" aria-label={hindi ? "मेन्यू खोलें" : "Toggle menu"}>{open ? <X /> : <Menu />}</button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-stone-200 bg-cream px-4 pb-5 xl:hidden">
            {navItems.map((item) => <Link key={item.href} href={localizedHref(item.href, hindi)} onClick={() => setOpen(false)} className="block border-b border-stone-200 py-3.5 text-sm font-semibold">{hindi ? item.hi : item.en}</Link>)}
            <div className="mt-4 grid grid-cols-2 gap-2"><Button asChild variant="outline"><Link href={languageSwitchHref(pathname)}>{hindi ? "English" : "हिन्दी"}</Link></Button><Button asChild variant="maroon"><Link href={planHref}>{hindi ? "यात्रा बनाएँ" : "Plan trip"}</Link></Button></div>
          </nav>
        )}
      </header>
      <SearchDialog open={search} onClose={() => setSearch(false)} hindi={hindi} />
    </>
  );
}
