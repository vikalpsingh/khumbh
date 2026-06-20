"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { SearchDialog } from "./search-dialog";
import { Button } from "./ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/mahakal-temple-guide", label: "Mahakal Guide" },
  { href: "/stay-guide", label: "Stay" },
  { href: "/plan-my-trip", label: "Plan My Trip" },
  { href: "/nearby-places", label: "Nearby Places" },
  { href: "/itineraries", label: "Itineraries" },
  { href: "/food-guide", label: "Food Guide" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <>
      <div className="bg-maroon px-4 py-2 text-center text-[11px] font-semibold tracking-wide text-orange-50">
        Independent planning guide · Confirm final 2028 dates and arrangements with official authorities
      </div>
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-cream/95 backdrop-blur-xl print:hidden">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Ujjain Kumbh 2028 home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-maroon font-serif text-xl text-gold ring-4 ring-orange-100">ॐ</span>
            <span>
              <span className="block font-serif text-base font-bold leading-none text-ink sm:text-lg">Ujjain Kumbh 2028</span>
              <span className="mt-1 block text-[9px] font-extrabold uppercase tracking-[0.18em] text-saffron">Mahakal Travel Guide</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-4 xl:flex" aria-label="Main navigation">
            {navItems.map((item) => <Link key={item.href} href={item.href} className={`text-[13px] font-semibold transition hover:text-saffron ${pathname === item.href ? "text-saffron" : "text-stone-700"}`}>{item.label}</Link>)}
          </nav>
          <div className="flex items-center gap-1">
            <button onClick={() => setSearch(true)} className="grid h-10 w-10 place-items-center rounded-full hover:bg-white" aria-label="Search"><Search className="h-5 w-5" /></button>
            <Link href="/hi" className="hidden items-center gap-1 text-xs font-bold text-stone-600 sm:flex"><Languages className="h-4 w-4" /> हिन्दी</Link>
            <Button asChild variant="maroon" className="ml-2 hidden sm:inline-flex"><Link href="/plan-my-trip">Plan trip</Link></Button>
            <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full xl:hidden" aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-stone-200 bg-cream px-4 pb-5 xl:hidden">
            {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-stone-200 py-3.5 text-sm font-semibold">{item.label}</Link>)}
            <div className="mt-4 grid grid-cols-2 gap-2"><Button asChild variant="outline"><Link href="/hi">हिन्दी</Link></Button><Button asChild variant="maroon"><Link href="/plan-my-trip">Plan trip</Link></Button></div>
          </nav>
        )}
      </header>
      <SearchDialog open={search} onClose={() => setSearch(false)} />
    </>
  );
}
