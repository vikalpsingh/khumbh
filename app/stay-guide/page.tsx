import type { Metadata } from "next";
import stays from "@/data/stays.json";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HeroSection, SectionTitle, StayComparisonCard } from "@/components/travel-components";
import { MotionReveal } from "@/components/motion-reveal";
import { StayComparisonTable } from "@/components/spiritual-design-system";

export const metadata: Metadata = { title: "Stay in Ujjain vs Indore vs Bhopal", description: "Compare hotels and travel trade-offs for Ujjain Kumbh 2028 in Ujjain, Indore and Bhopal.", alternates: { canonical: "/stay-guide" } };

export default function StayPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Stay comparison" }]} />
      <HeroSection compact eyebrow="Choose your base" title="Ujjain, Indore or" accent="Bhopal?" description="Compare convenience, comfort, commute and price before booking rooms for your family." />
      <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Side-by-side comparison" title="The right city depends on your priorities" description="Book refundable inventory early and reconfirm vehicle access close to the festival." />
          <div className="mt-10"><StayComparisonTable stays={stays} /></div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">{stays.map((stay, index) => <MotionReveal key={stay.city}><StayComparisonCard stay={stay} featured={index === 1} /></MotionReveal>)}</div>
          <div className="mt-10 rounded-3xl border border-gold/30 bg-[#fff9ec] p-6 sm:p-8"><h2 className="font-serif text-2xl font-semibold text-ink">Our practical recommendation</h2><p className="mt-3 max-w-4xl leading-7 text-stone-600">For parents with limited mobility or a pre-dawn booking, stay in Ujjain. For families prioritising hotel comfort and flights, split the trip: two nights in Ujjain and one or two in Indore.</p></div>
        </div>
      </section>
    </main>
  );
}
