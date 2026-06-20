"use client";

import Link from "next/link";
import { Map, MapPin, MessageCircle } from "lucide-react";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-white/95 p-2 shadow-[0_-10px_30px_rgba(0,0,0,.08)] backdrop-blur md:hidden print:hidden">
      <div className="grid grid-cols-3 gap-2">
        <Link href="/plan-my-trip" className="flex min-h-12 flex-col items-center justify-center rounded-xl bg-saffron text-[11px] font-bold text-white"><MapPin className="mb-0.5 h-4 w-4" />Plan Trip</Link>
        <a href="https://www.google.com/maps/dir/?api=1&destination=Ujjain%2C%20Madhya%20Pradesh" target="_blank" rel="noreferrer" className="flex min-h-12 flex-col items-center justify-center rounded-xl border border-gold/50 bg-cream text-[11px] font-bold text-maroon"><Map className="mb-0.5 h-4 w-4" />Map</a>
        <a href={`https://wa.me/?text=${encodeURIComponent("Plan Ujjain Kumbh Mela 2028 with this guide: https://ujjain2028.in")}`} target="_blank" rel="noreferrer" className="flex min-h-12 flex-col items-center justify-center rounded-xl bg-[#168f4d] text-[11px] font-bold text-white"><MessageCircle className="mb-0.5 h-4 w-4" />WhatsApp</a>
      </div>
    </div>
  );
}
