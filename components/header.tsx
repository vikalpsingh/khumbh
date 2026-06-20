"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site";
import { SearchDialog } from "./search-dialog";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-cream/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3" aria-label="Ujjain 2028 home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-maroon font-serif text-xl text-gold ring-4 ring-orange-100">ॐ</span>
            <span>
              <span className="block font-serif text-lg font-bold leading-none text-ink">Ujjain 2028</span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Travel Guide</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`text-sm font-semibold transition hover:text-saffron ${pathname === item.href ? "text-saffron" : "text-stone-700"}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => setSearch(true)} className="grid h-11 w-11 place-items-center rounded-full text-stone-700 hover:bg-white" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/plan-my-trip" className="hidden rounded-full bg-maroon px-5 py-3 text-sm font-bold text-white transition hover:bg-[#50171d] sm:block">
              Plan my trip
            </Link>
            <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full text-stone-700 hover:bg-white lg:hidden" aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-stone-200 bg-cream px-4 py-4 lg:hidden">
            {[...navItems, { href: "/food-guide", label: "Food guide" }, { href: "/faqs", label: "FAQs" }].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-stone-200 py-3 text-sm font-semibold text-stone-700">
                {item.label}
              </Link>
            ))}
            <Link href="/plan-my-trip" onClick={() => setOpen(false)} className="mt-4 block rounded-full bg-maroon px-5 py-3 text-center text-sm font-bold text-white">Plan my trip</Link>
          </nav>
        )}
      </header>
      <SearchDialog open={search} onClose={() => setSearch(false)} />
    </>
  );
}
