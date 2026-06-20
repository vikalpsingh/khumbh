import Link from "next/link";
import { Instagram, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#241b18] text-stone-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="font-serif text-2xl font-bold text-white">Ujjain 2028</div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-stone-400">Independent, practical planning help for a calmer and more meaningful journey to Ujjain.</p>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">Plan</p>
          <div className="space-y-3 text-sm">
            <Link className="block hover:text-white" href="/plan-my-trip">Plan my trip</Link>
            <Link className="block hover:text-white" href="/how-to-reach">How to reach</Link>
            <Link className="block hover:text-white" href="/stay-guide">Stay guide</Link>
            <Link className="block hover:text-white" href="/itineraries">Itineraries</Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">Explore</p>
          <div className="space-y-3 text-sm">
            <Link className="block hover:text-white" href="/mahakal-temple-guide">Mahakal guide</Link>
            <Link className="block hover:text-white" href="/nearby-places">Nearby places</Link>
            <Link className="block hover:text-white" href="/food-guide">Food guide</Link>
            <Link className="block hover:text-white" href="/faqs">FAQs</Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">Stay in touch</p>
          <Link href="/contact" className="flex items-center gap-2 text-sm hover:text-white"><Mail className="h-4 w-4" /> Travel enquiry</Link>
          <p className="mt-4 flex items-start gap-2 text-sm text-stone-400"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Ujjain, Madhya Pradesh, India</p>
          <Instagram className="mt-5 h-5 w-5" />
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-stone-500">
        © 2026 Ujjain 2028 Travel Guide · Always confirm event details with official authorities.
      </div>
    </footer>
  );
}
