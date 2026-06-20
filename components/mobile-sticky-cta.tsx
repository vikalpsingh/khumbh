"use client";

import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-white/95 p-2 shadow-[0_-10px_30px_rgba(0,0,0,.08)] backdrop-blur md:hidden print:hidden">
      <div className="grid grid-cols-2 gap-2">
        <Link href="/plan-my-trip" className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-saffron text-sm font-bold text-white"><MapPin className="h-4 w-4" />Plan my trip</Link>
        <a href={`https://wa.me/?text=${encodeURIComponent("Plan Ujjain Kumbh Mela 2028 with this guide: https://ujjain2028.in")}`} target="_blank" rel="noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#168f4d] text-sm font-bold text-white"><MessageCircle className="h-4 w-4" />WhatsApp</a>
      </div>
    </div>
  );
}
