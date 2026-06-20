import type { Metadata } from "next";
import food from "@/data/food.json";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FoodCard, HeroSection, SectionTitle } from "@/components/travel-components";
import { MotionReveal } from "@/components/motion-reveal";

export const metadata: Metadata = { title: "Ujjain & Malwa Food Guide", description: "Discover family-friendly vegetarian food in Ujjain and Malwa, from poha jalebi to dal bafla.", alternates: { canonical: "/food-guide" } };
export default function FoodPage() {
  return <main><Breadcrumbs items={[{ label: "Food guide" }]} /><HeroSection compact eyebrow="Taste of Malwa" title="Simple, soulful food for" accent="the journey." description="Know what to try, when to eat it and how to make safer food choices during a large festival." /><section className="bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Local favourites" title="Start with these Malwa classics" /><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{food.map((item) => <MotionReveal key={item.name}><FoodCard food={item} /></MotionReveal>)}</div><div className="mt-12 rounded-[2rem] bg-maroon p-7 text-white sm:p-10"><h2 className="font-serif text-3xl font-semibold">Festival food safety</h2><div className="mt-6 grid gap-4 text-sm text-orange-50/75 sm:grid-cols-2 lg:grid-cols-4">{["Choose freshly cooked hot food", "Drink sealed or filtered water", "Carry ORS and regular medicines", "Ask about fasting ingredients"].map((item) => <p key={item} className="rounded-xl border border-white/10 p-4">{item}</p>)}</div></div></div></section></main>;
}
