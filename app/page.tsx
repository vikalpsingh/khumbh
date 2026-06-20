import type { Metadata } from "next";
import {
  BedDouble,
  BusFront,
  CalendarDays,
  Landmark,
  MapPinned,
  Soup,
} from "lucide-react";
import home from "@/data/home.json";
import { HomeHero } from "@/components/home-hero";
import { HomeFinalCTA, HomeStayCard, HomeTrustSection } from "@/components/home-sections";
import {
  DestinationCard,
  FeatureCard,
  FoodCard,
  ItineraryCard,
  SectionTitle,
  WhatsAppShareButton,
} from "@/components/travel-components";
import { FAQAccordion } from "@/components/faq-accordion";
import { MotionReveal } from "@/components/motion-reveal";

export const metadata: Metadata = {
  title: "Ujjain Kumbh Mela 2028 & Mahakal Travel Guide",
  description:
    "Plan your complete Ujjain Kumbh Mela 2028 journey with Mahakal darshan, stay comparisons, routes, food, nearby Jyotirlinga trips and family itineraries.",
  keywords: [
    "Ujjain Kumbh Mela 2028",
    "Mahakal Darshan guide",
    "Ujjain trip planner",
    "Ujjain hotels",
    "Omkareshwar trip",
    "Madhya Pradesh spiritual itinerary",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Plan Your Ujjain Kumbh Mela 2028 Journey",
    description: "A complete family-friendly Mahakal and Ujjain travel planning guide.",
    images: ["/images/ujjain-shipra-hero.png"],
  },
};

const planningCards = [
  { title: "How to Reach Ujjain", description: "Compare airport, train and road routes with realistic transfer times.", href: "/how-to-reach", icon: BusFront },
  { title: "Mahakal Darshan", description: "Understand Bhasma Aarti, temple etiquette, timings and family planning.", href: "/mahakal-temple-guide", icon: Landmark },
  { title: "Where to Stay", description: "Choose between Ujjain, Indore and Bhopal based on your priorities.", href: "/stay-guide", icon: BedDouble },
  { title: "Nearby Places", description: "Add Omkareshwar, Maheshwar, Mandu, Sanchi or Bhimbetka.", href: "/nearby-places", icon: MapPinned },
  { title: "Food Guide", description: "Discover Malwa favourites and make safer festival food choices.", href: "/food-guide", icon: Soup },
  { title: "Ready Itineraries", description: "Start with practical one, two, three and five-day travel plans.", href: "/itineraries", icon: CalendarDays },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: home.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  const travelGuideSchema = {
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    name: "Ujjain Kumbh Mela 2028 & Mahakal Travel Guide",
    description: metadata.description,
    url: "https://ujjain2028.in",
    about: [
      { "@type": "TouristDestination", name: "Ujjain, Madhya Pradesh" },
      { "@type": "LandmarksOrHistoricalBuildings", name: "Shri Mahakaleshwar Jyotirlinga" },
    ],
    audience: { "@type": "Audience", audienceType: "Family travellers and spiritual tourists" },
  };

  return (
    <main>
      <HomeHero />
      <HomeTrustSection items={home.trustBadges} />

      <section className="pattern-mandala bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Plan the complete journey"
            title="Start with the decision you need to make"
            description="Every guide is designed to answer a practical trip question clearly, especially for families travelling with parents or children."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {planningCards.map((card) => <FeatureCard key={card.title} {...card} />)}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="The biggest booking decision"
            title="Should you stay in Ujjain, Indore or Bhopal?"
            description="Compare each city by the experience it makes easiest—not only by room price."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {home.stays.map((stay, index) => <MotionReveal key={stay.city}><HomeStayCard stay={stay} featured={index === 0} /></MotionReveal>)}
          </div>
        </div>
      </section>

      <section className="bg-sand px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Popular nearby trips"
            title="See more of sacred and historic Madhya Pradesh"
            description="Add one or two destinations based on your available days. Each card includes Maps and WhatsApp sharing."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {home.destinations.map((destination) => <MotionReveal key={destination.name}><DestinationCard destination={destination} /></MotionReveal>)}
          </div>
        </div>
      </section>

      <section className="pattern-mandala bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Itinerary preview"
              title="Choose how much of the journey fits"
              description="Start with a clear route, then leave enough room for queues, meals and rest."
            />
            <WhatsAppShareButton text="Ujjain Kumbh 2028 itinerary ideas: https://ujjain2028.in/#itineraries" />
          </div>
          <div id="itineraries" className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {home.itineraries.map((itinerary) => <MotionReveal key={itinerary.title}><ItineraryCard itinerary={itinerary} /></MotionReveal>)}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Taste of Malwa"
            title="Five local foods to look forward to"
            description="Vegetarian, family-friendly favourites for breakfast, meals, fasting days and evening exploration."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {home.foods.map((food) => <MotionReveal key={food.name}><FoodCard food={food} /></MotionReveal>)}
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <SectionTitle
            eyebrow="Frequently asked"
            title="Answers before you begin booking"
            description="The five questions most families ask while planning their first Ujjain journey."
          />
          <FAQAccordion items={home.faqs} />
        </div>
      </section>

      <HomeFinalCTA />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(travelGuideSchema) }} />
    </main>
  );
}
