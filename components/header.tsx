"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { getPathLocale, localeCodes, localeNames, localizedHref, switchLocaleHref } from "@/lib/locale";
import { uiCopy } from "@/data/locale-ui";
import { portalCopy } from "@/data/kumbh-portal";
import { SearchDialog } from "./search-dialog";
import { Button } from "./ui/button";

const paths = ["/", "/ujjain-kumbh-2028", "/kumbh-calendar", "/mahakal-temple-guide", "/stay-guide", "/plan-my-trip", "/nashik-kumbh-2027"];

export function Header() {
  const pathname = usePathname();
  const locale = getPathLocale(pathname);
  const copy = locale === "en" ? null : uiCopy[locale];
  const portal = portalCopy[locale];
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [languagesOpen, setLanguagesOpen] = useState(false);
  const labels = portal.nav;
  const planHref = localizedHref("/plan-my-trip", locale);

  return (
    <>
      <div className="bg-maroon px-4 py-2 text-center text-[11px] font-semibold tracking-wide text-orange-50">
        {copy?.notice || "Independent planning guide · Confirm final 2028 dates and arrangements with official authorities"}
      </div>
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-cream/95 backdrop-blur-xl print:hidden">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href={localizedHref("/", locale)} className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-maroon font-serif text-xl text-gold ring-4 ring-orange-100">ॐ</span>
            <span><span className="block font-serif text-base font-bold leading-none text-ink sm:text-lg">{portal.brand}</span><span className="mt-1 block max-w-44 truncate text-[9px] font-extrabold uppercase tracking-[0.12em] text-saffron">{portal.tagline}</span></span>
          </Link>
          <nav className="hidden items-center gap-4 xl:flex">
            {paths.map((path, index) => { const href = localizedHref(path, locale); return <Link key={path} href={href} className={`text-[13px] font-semibold transition hover:text-saffron ${pathname === href ? "text-saffron" : "text-stone-700"}`}>{labels[index]}</Link>; })}
          </nav>
          <div className="flex items-center gap-1">
            <button onClick={() => setSearch(true)} className="grid h-10 w-10 place-items-center rounded-full hover:bg-white" aria-label={copy?.search || "Search"}><Search className="h-5 w-5" /></button>
            <div className="relative hidden sm:block">
              <button onClick={() => setLanguagesOpen((value) => !value)} className="flex h-10 items-center gap-1.5 rounded-full px-3 text-xs font-bold text-stone-600 hover:bg-white"><Languages className="h-4 w-4" />{localeNames[locale]}</button>
              {languagesOpen && <div className="absolute right-0 top-12 w-44 overflow-hidden rounded-2xl border border-stone-200 bg-white p-2 shadow-xl">
                {(["en", ...localeCodes] as const).map((code) => <Link key={code} href={switchLocaleHref(pathname, code)} onClick={() => setLanguagesOpen(false)} className={`block rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-sand ${locale === code ? "bg-orange-50 text-saffron" : ""}`}>{localeNames[code]}</Link>)}
              </div>}
            </div>
            <Button asChild variant="maroon" className="ml-1 hidden sm:inline-flex"><Link href={planHref}>{copy?.planTrip || "Plan trip"}</Link></Button>
            <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full xl:hidden" aria-label={copy?.menu || "Menu"}>{open ? <X /> : <Menu />}</button>
          </div>
        </div>
        {open && <nav className="border-t border-stone-200 bg-cream px-4 pb-5 xl:hidden">
          {paths.map((path, index) => <Link key={path} href={localizedHref(path, locale)} onClick={() => setOpen(false)} className="block border-b border-stone-200 py-3.5 text-sm font-semibold">{labels[index]}</Link>)}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <select value={locale} onChange={(event) => { window.location.href = switchLocaleHref(pathname, event.target.value as typeof locale); }} className="rounded-full border border-stone-300 bg-white px-4 text-sm font-bold">
              {(["en", ...localeCodes] as const).map((code) => <option key={code} value={code}>{localeNames[code]}</option>)}
            </select>
            <Button asChild variant="maroon"><Link href={planHref}>{copy?.planTrip || "Plan trip"}</Link></Button>
          </div>
        </nav>}
      </header>
      <SearchDialog open={search} onClose={() => setSearch(false)} locale={locale} />
    </>
  );
}
