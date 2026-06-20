import type { Metadata } from "next";
import destinations from "@/data/destinations.json";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DestinationCard, HeroSection, SectionTitle } from "@/components/travel-components";
import { MotionReveal } from "@/components/motion-reveal";

export const metadata: Metadata = { title: "Nearby Destinations from Ujjain", description: "Plan side trips from Ujjain to Indore, Omkareshwar, Maheshwar and Mandu.", alternates: { canonical: "/nearby-places" } };
export default function NearbyPage() {
  return <main><Breadcrumbs items={[{ label: "Nearby destinations" }]} /><HeroSection compact eyebrow="Beyond Ujjain" title="Add another chapter to" accent="your journey." description="Easy-to-understand side trips with realistic durations, highlights, Maps links and WhatsApp sharing." /><section className="bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Central India circuit" title="Four rewarding additions" description="Choose one or two. A comfortable pilgrimage should feel spacious, not like a checklist." /><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{destinations.map((item) => <MotionReveal key={item.id}><DestinationCard destination={item} /></MotionReveal>)}</div></div></section></main>;
}
