import type { Metadata } from "next";
import itineraries from "@/data/itineraries.json";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HeroSection, ItineraryCard, SectionTitle } from "@/components/travel-components";
import { MotionReveal } from "@/components/motion-reveal";

export const metadata: Metadata = { title: "Ujjain Kumbh 2028 Itineraries", description: "Two, four and seven-day Ujjain and Madhya Pradesh itineraries for families and spiritual travellers.", alternates: { canonical: "/itineraries" } };
export default function ItinerariesPage() {
  return <main><Breadcrumbs items={[{ label: "Itineraries" }]} /><HeroSection compact eyebrow="Plans that breathe" title="Practical itineraries for" accent="real families." description="Built around darshan, meals, rest and realistic travel—not an impossible race between landmarks." /><section className="pattern-mandala bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Choose your pace" title="From a weekend to a full Malwa journey" /><div className="mt-10 grid gap-6 lg:grid-cols-3">{itineraries.map((item) => <MotionReveal key={item.id}><ItineraryCard itinerary={item} /></MotionReveal>)}</div></div></section></main>;
}
