"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, ShieldCheck } from "lucide-react";
import { isHindiPath, localizedHref } from "@/lib/locale";

export function Footer() {
  const hindi = isHindiPath(usePathname());
  const href = (path: string) => localizedHref(path, hindi);
  return (
    <footer className="pattern-mandala bg-[#211615] pb-20 text-stone-300 md:pb-0 print:hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="font-serif text-2xl font-bold text-white">{hindi ? "उज्जैन कुंभ 2028" : "Ujjain Kumbh 2028"}</div>
          <p className="mt-1 text-xs font-bold uppercase tracking-widest text-gold">{hindi ? "महाकाल यात्रा गाइड" : "Mahakal Travel Guide"}</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-stone-400">{hindi ? "उज्जैन और मध्य भारत की सार्थक पारिवारिक यात्रा के लिए सरल और व्यावहारिक हिन्दी मार्गदर्शन।" : "Practical, family-friendly planning for a meaningful journey through Ujjain and central India."}</p>
        </div>
        <div><p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">{hindi ? "योजना" : "Plan"}</p><div className="space-y-3 text-sm"><Link className="block hover:text-white" href={href("/plan-my-trip")}>{hindi ? "मेरी यात्रा बनाएँ" : "Plan my trip"}</Link><Link className="block hover:text-white" href={href("/stay-guide")}>{hindi ? "ठहरने की तुलना" : "Compare stays"}</Link><Link className="block hover:text-white" href={href("/itineraries")}>{hindi ? "यात्रा कार्यक्रम" : "Itineraries"}</Link></div></div>
        <div><p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">{hindi ? "जानकारी" : "Discover"}</p><div className="space-y-3 text-sm"><Link className="block hover:text-white" href={href("/mahakal-temple-guide")}>{hindi ? "महाकाल गाइड" : "Mahakal Guide"}</Link><Link className="block hover:text-white" href={href("/nearby-places")}>{hindi ? "आस-पास की जगहें" : "Nearby destinations"}</Link><Link className="block hover:text-white" href={href("/food-guide")}>{hindi ? "खान-पान गाइड" : "Food guide"}</Link></div></div>
        <div><p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">{hindi ? "भरोसा और सहायता" : "Trust & support"}</p><p className="flex gap-2 text-sm"><ShieldCheck className="h-4 w-4 text-gold" />{hindi ? "पहले आधिकारिक स्रोत" : "Official sources first"}</p><Link href={href("/contact")} className="mt-4 flex gap-2 text-sm hover:text-white"><Mail className="h-4 w-4" />{hindi ? "यात्रा पूछताछ" : "Travel enquiry"}</Link><p className="mt-4 flex gap-2 text-sm text-stone-400"><MapPin className="h-4 w-4" />{hindi ? "उज्जैन, मध्य प्रदेश" : "Ujjain, Madhya Pradesh"}</p></div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-stone-500">© 2026 {hindi ? "उज्जैन कुंभ 2028 यात्रा गाइड · गोपनीयता · अस्वीकरण" : "Ujjain Kumbh 2028 Travel Guide · Privacy · Disclaimer"}</div>
    </footer>
  );
}
