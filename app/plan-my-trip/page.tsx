import type { Metadata } from "next";
import { TripPlanner } from "@/components/trip-planner";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = { title: "Plan My Trip", description: "Create a personal, shareable Ujjain Kumbh 2028 itinerary." };

export default function PlanMyTripPage() {
  return (
    <main className="bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <Eyebrow>Interactive trip builder</Eyebrow>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-ink sm:text-6xl">Your Ujjain journey, shaped in minutes.</h1>
          <p className="mt-5 text-lg leading-8 text-stone-600">Pick a few preferences and get a practical starting itinerary with route and WhatsApp sharing built in.</p>
        </div>
        <TripPlanner />
      </div>
    </main>
  );
}
