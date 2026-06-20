import type { Metadata } from "next";
import { BedDouble, CalendarDays, Landmark, Map, Route, Soup } from "lucide-react";
import destinations from "@/data/destinations.json";
import itineraries from "@/data/itineraries.json";
import faqs from "@/data/faqs.json";
import food from "@/data/food.json";
import routes from "@/data/routes.json";
import stays from "@/data/stays.json";
import { DestinationCard, FeatureCard, HeroSection, ItineraryCard, SectionTitle, TrustBanner } from "@/components/travel-components";
import { FAQAccordion } from "@/components/faq-accordion";
import { MotionReveal } from "@/components/motion-reveal";
import {
  DestinationTimelineCard,
  FamilyTravelTipsCard,
  FoodDiscoveryCard,
  KumbhCountdownCard,
  StayComparisonTable,
  TempleDarshanCard,
  TravelRouteCard,
} from "@/components/spiritual-design-system";

export const metadata: Metadata = {
  title: "Ujjain Kumbh Mela 2028 & Mahakal Travel Guide",
  description: "Plan a safe, comfortable family trip to Ujjain Kumbh 2028 with Mahakal darshan, hotel comparisons, routes and itineraries.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
  return (
    <main>
      <HeroSection eyebrow="Ujjain Kumbh Mela 2028" title="Plan a peaceful journey to" accent="Mahakal." description="A trusted, family-friendly guide for darshan, stays, routes, food and meaningful journeys around Madhya Pradesh." />
      <TrustBanner />
      <section className="pattern-mandala bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.35fr_.65fr]">
          <KumbhCountdownCard />
          <TempleDarshanCard />
        </div>
      </section>
      <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Start with the big decisions" title="Everything your family needs, in one place" description="Clear comparisons and practical planning for busy professionals, parents and first-time spiritual travellers." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={Landmark} title="Mahakal darshan guide" description="Bhasma Aarti, temple etiquette, family notes and a practical sacred circuit." href="/mahakal-temple-guide" />
            <FeatureCard icon={BedDouble} title="Where should we stay?" description="Compare Ujjain, Indore and Bhopal by comfort, commute and cost." href="/stay-guide" />
            <FeatureCard icon={Map} title="Plan my trip" description="Build a flexible day-by-day plan with Maps, WhatsApp and print options." href="/plan-my-trip" />
            <FeatureCard icon={Route} title="Nearby destinations" description="Add Omkareshwar, Maheshwar, Mandu or Indore without rushing." href="/nearby-places" />
            <FeatureCard icon={CalendarDays} title="Ready itineraries" description="Choose practical two, four and seven-day journeys." href="/itineraries" />
            <FeatureCard icon={Soup} title="What to eat" description="Family-friendly Malwa favourites and festival food-safety guidance." href="/food-guide" />
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Getting there" title="Choose the route that suits your family" description="Direct route links and honest timing estimates help you avoid over-tight connections." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">{routes.map((route) => <MotionReveal key={route.id}><TravelRouteCard from={route.from} distance={route.distance} duration={route.duration} mode={route.mode} tip={route.tip} /></MotionReveal>)}</div>
        </div>
      </section>
      <section className="bg-sand px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Where to sleep" title="Compare your base at a glance" description="The best hotel is not always the closest—it is the one that fits your group’s energy and priorities." />
          <div className="mt-10"><StayComparisonTable stays={stays} /></div>
        </div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Extend your pilgrimage" title="Nearby places worth the extra day" description="Thoughtful side trips that add culture, nature and another sacred chapter to your journey." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{destinations.map((item) => <MotionReveal key={item.id}><DestinationCard destination={item} /></MotionReveal>)}</div>
        </div>
      </section>
      <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1"><DestinationTimelineCard destinations={destinations} /></div>
          <FamilyTravelTipsCard />
          <FoodDiscoveryCard foods={food} />
        </div>
      </section>
      <section className="pattern-mandala bg-sand px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Ready-to-use plans" title="Pick a pace that feels human" description="Every itinerary leaves space for queues, rest, meals and the unexpected rhythms of a pilgrimage." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">{itineraries.map((item) => <MotionReveal key={item.id}><ItineraryCard itinerary={item} /></MotionReveal>)}</div>
        </div>
      </section>
      <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <SectionTitle eyebrow="Before you book" title="Questions families ask most" description="Straight answers for the details that can make or break a comfortable Kumbh trip." />
          <FAQAccordion items={faqs} />
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
