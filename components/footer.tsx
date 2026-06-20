import Link from "next/link";
import { Mail, MapPin, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="pattern-mandala bg-[#211615] pb-20 text-stone-300 md:pb-0 print:hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="font-serif text-2xl font-bold text-white">Ujjain Kumbh 2028</div>
          <p className="mt-1 text-xs font-bold uppercase tracking-widest text-gold">Mahakal Travel Guide</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-stone-400">Practical, family-friendly planning for a meaningful journey through Ujjain and central India.</p>
        </div>
        <div><p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">Plan</p><div className="space-y-3 text-sm"><Link className="block hover:text-white" href="/plan-my-trip">Plan my trip</Link><Link className="block hover:text-white" href="/stay-guide">Compare stays</Link><Link className="block hover:text-white" href="/itineraries">Itineraries</Link></div></div>
        <div><p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">Discover</p><div className="space-y-3 text-sm"><Link className="block hover:text-white" href="/mahakal-temple-guide">Mahakal Guide</Link><Link className="block hover:text-white" href="/nearby-places">Nearby destinations</Link><Link className="block hover:text-white" href="/food-guide">Food guide</Link></div></div>
        <div><p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">Trust & support</p><p className="flex gap-2 text-sm"><ShieldCheck className="h-4 w-4 text-gold" />Official sources first</p><Link href="/contact" className="mt-4 flex gap-2 text-sm hover:text-white"><Mail className="h-4 w-4" />Travel enquiry</Link><p className="mt-4 flex gap-2 text-sm text-stone-400"><MapPin className="h-4 w-4" />Ujjain, Madhya Pradesh</p></div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-stone-500">© 2026 Ujjain Kumbh 2028 Travel Guide · Privacy · Disclaimer</div>
    </footer>
  );
}
