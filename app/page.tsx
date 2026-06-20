import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronDown, ExternalLink, Map, ShieldCheck } from "lucide-react";
import { highlights, quickGuides, safetyPoints } from "@/data/site";
import { CTA, Eyebrow, SectionHeading, WhatsAppShare } from "@/components/ui";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[760px] overflow-hidden bg-ink text-white">
        <Image src="/images/ujjain-shipra-hero.png" alt="Shipra river ghats and temple silhouettes at dawn in Ujjain" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#160f0d]/95 via-[#241411]/72 to-[#2b1710]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#160f0d]/80 via-transparent to-transparent" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-100 backdrop-blur">
              <CalendarDays className="h-4 w-4 text-gold" /> Your journey to Simhastha begins here
            </div>
            <h1 className="mt-7 font-serif text-5xl font-semibold leading-[0.98] sm:text-7xl lg:text-[5.5rem]">
              Find your way to <span className="text-[#f3b66d]">Ujjain.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-orange-50/80 sm:text-xl">Plan routes, darshan, stays and meaningful side trips for Kumbh Mela 2028—without the overwhelm.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CTA href="/plan-my-trip">Plan my trip</CTA>
              <CTA href="/kumbh-2028-guide" secondary>Explore the guide</CTA>
            </div>
            <div className="mt-12 flex items-center gap-3 text-sm text-orange-50/70"><ChevronDown className="h-5 w-5 animate-bounce text-gold" /> Everything you need, in one calm place</div>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white px-4 py-7 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-4">
          {highlights.map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="h-6 w-6 shrink-0 text-saffron" />
              <div><p className="font-serif text-xl font-bold text-ink">{value}</p><p className="text-xs leading-4 text-stone-500">{label}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Start with what matters" title="A practical guide for a profound journey" body="No endless tabs. Just the essential decisions, organized around how real trips unfold." />
            <Link href="/kumbh-2028-guide" className="inline-flex items-center gap-2 text-sm font-bold text-maroon">View complete guide <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quickGuides.map(({ href, title, text, icon: Icon, meta }, index) => (
              <Link key={href} href={href} className={`group rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-soft ${index === 1 ? "border-maroon bg-maroon text-white" : "border-stone-200 bg-white text-ink"}`}>
                <div className={`grid h-12 w-12 place-items-center rounded-2xl ${index === 1 ? "bg-white/10 text-gold" : "bg-orange-50 text-saffron"}`}><Icon /></div>
                <p className={`mt-7 text-xs font-bold uppercase tracking-widest ${index === 1 ? "text-gold" : "text-saffron"}`}>{meta}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold">{title}</h3>
                <p className={`mt-3 text-sm leading-6 ${index === 1 ? "text-orange-50/70" : "text-stone-600"}`}>{text}</p>
                <ArrowRight className="mt-7 h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-sand p-8 sm:p-12">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-saffron/20" />
            <Map className="h-16 w-16 text-saffron" />
            <h2 className="mt-8 font-serif text-4xl font-semibold text-ink sm:text-5xl">Build a trip that fits your pace.</h2>
            <p className="mt-5 max-w-lg leading-7 text-stone-600">Choose your dates, arrival city, pace and side trips. We’ll shape a shareable day-by-day starting plan.</p>
            <div className="mt-8"><CTA href="/plan-my-trip">Open trip planner</CTA></div>
          </div>
          <div>
            <Eyebrow>Designed around you</Eyebrow>
            <div className="space-y-7">
              {["Travelling with elders or children", "First pilgrimage to Ujjain", "International visitor logistics", "Adding Indore, Omkareshwar or Mandu"].map((item, index) => (
                <div key={item} className="flex gap-5 border-b border-stone-200 pb-7">
                  <span className="font-serif text-3xl text-gold">0{index + 1}</span>
                  <div><h3 className="font-serif text-xl font-semibold text-ink">{item}</h3><p className="mt-2 text-sm leading-6 text-stone-500">Get realistic timing, simple route choices and useful buffers.</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-maroon px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Travel with care" title="Small preparations make a big difference" body="A few calm habits help everyone move safely through a large gathering." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {safetyPoints.map(({ title, text, icon: Icon }) => <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-7"><Icon className="h-7 w-7 text-gold" /><h3 className="mt-5 font-serif text-2xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-orange-50/65">{text}</p></div>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://www.google.com/maps/dir/?api=1&destination=Ujjain%2C%20Madhya%20Pradesh" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink">Route to Ujjain <ExternalLink className="h-4 w-4" /></a>
            <WhatsAppShare text="Plan your Ujjain Kumbh Mela 2028 journey: https://ujjain2028.in" />
          </div>
        </div>
      </section>
    </main>
  );
}
