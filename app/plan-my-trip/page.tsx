import type { Metadata } from "next";
import routes from "@/data/routes.json";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HeroSection, SectionTitle } from "@/components/travel-components";
import { TripPlanner } from "@/components/trip-planner";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "lucide-react";

export const metadata: Metadata = { title: "Plan My Ujjain Trip", description: "Build, share and print a personalised Ujjain Kumbh 2028 family itinerary.", alternates: { canonical: "/plan-my-trip" } };
export default function PlanPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Plan My Trip" }]} />
      <HeroSection compact eyebrow="Interactive family planner" title="Build your Ujjain trip in" accent="a few minutes." description="Choose your pace, group and side trips. Get a shareable and printable starting itinerary." />
      <section className="pattern-mandala bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl"><TripPlanner /></div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Arrival planning" title="Common routes to Ujjain" description="Travel times are planning estimates and can increase sharply on major festival dates." /><div className="mt-9 grid gap-5 md:grid-cols-3">{routes.map((route) => <Card key={route.id}><CardContent><Navigation className="h-6 w-6 text-saffron" /><h3 className="mt-4 font-serif text-xl font-semibold">{route.from} → {route.to}</h3><p className="mt-3 text-sm font-bold text-maroon">{route.distance} · {route.duration}</p><p className="mt-2 text-sm text-stone-600">{route.mode}</p><p className="mt-4 border-t border-stone-200 pt-4 text-xs leading-5 text-stone-500">{route.tip}</p></CardContent></Card>)}</div></div>
      </section>
    </main>
  );
}
