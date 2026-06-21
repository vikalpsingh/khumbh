import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BellRing, CalendarDays, Check, MapPin, ShieldCheck, Sparkles, Waves } from "lucide-react";
import type { PortalLocale } from "@/data/kumbh-portal";
import { calendarEntries, kumbhLocations, latestGuides, portalCopy } from "@/data/kumbh-portal";
import { localizedHref } from "@/lib/locale";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function NationalKumbhHome({ locale = "en" }: { locale?: PortalLocale }) {
  const copy = portalCopy[locale];
  const href = (path: string) => localizedHref(path, locale);
  return <main>
    <section className="temple-silhouette relative min-h-[720px] overflow-hidden bg-maroon text-white">
      <Image src="/images/mahakal-ghat-temple.png" alt="Ujjain Simhastha Kumbh pilgrimage at the sacred ghats" fill priority className="object-cover object-[62%_center]" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#19080a]/95 via-[#50171b]/84 to-[#641f26]/30" /><div className="absolute inset-0 bg-gradient-to-t from-[#260d0f]/85 via-transparent to-black/15" /><div className="pattern-mandala absolute inset-0 opacity-10" />
      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8"><div className="max-w-4xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-[.15em] text-gold"><Sparkles className="h-4 w-4" />{copy.heroEyebrow}</p>
        <h1 className="mt-6 text-balance font-serif text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">{copy.heroTitle}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-orange-50/90 sm:text-xl">{copy.heroDescription}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg"><Link href={href("/plan-my-trip")}>{copy.primaryCta}</Link></Button><Button asChild variant="outline" size="lg"><Link href={href("/ujjain-kumbh-2028")}>{copy.secondaryCta}</Link></Button></div>
        <p className="mt-8 max-w-3xl rounded-2xl border border-white/15 bg-black/20 p-4 text-sm leading-6 text-orange-50/85 backdrop-blur"><ShieldCheck className="mr-2 inline h-4 w-4 text-gold" />{copy.focusNotice}</p>
      </div></div>
    </section>

    <section className="pattern-mandala bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl">
      <p className="text-xs font-bold uppercase tracking-[.2em] text-saffron">{copy.upcomingEyebrow}</p><h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold text-ink sm:text-5xl">{copy.upcomingTitle}</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-stone-600">{copy.upcomingDescription}</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{kumbhLocations.map((item) => <KumbhCard key={item.id} item={item} href={href(`/${item.slug}`)} readLabel={copy.readGuide} pendingLabel={copy.schedulePending} />)}</div>
    </div></section>

    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl">
      <h2 className="max-w-3xl font-serif text-4xl font-semibold text-ink sm:text-5xl">{copy.whyTitle}</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-stone-600">{copy.whyDescription}</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{copy.fourCities.map((city) => <Card key={city.city} className="premium-card h-full border-gold/35"><CardContent><span className="grid h-12 w-12 place-items-center rounded-full bg-maroon text-gold"><Waves className="h-6 w-6" /></span><h3 className="mt-5 font-serif text-2xl">{city.city}</h3><p className="mt-1 text-xs font-bold uppercase tracking-widest text-saffron">{city.river}</p><p className="mt-4 text-sm leading-7 text-stone-600">{city.text}</p></CardContent></Card>)}</div>
    </div></section>

    <section className="bg-sand px-4 py-16 sm:px-6 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><h2 className="font-serif text-4xl font-semibold sm:text-5xl">{copy.latestTitle}</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{latestGuides.map((guide) => <Link key={guide.href} href={href(guide.href)} className="group"><Card className="h-full transition group-hover:-translate-y-1 group-hover:border-saffron/40"><CardContent><p className="text-xs font-bold uppercase tracking-widest text-saffron">{guide.category}</p><h3 className="mt-3 font-serif text-2xl leading-tight">{guide.title}</h3><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-maroon">{copy.readGuide}<ArrowRight className="h-4 w-4" /></span></CardContent></Card></Link>)}</div></div></section>

    <AlertSignup copy={copy} />
  </main>;
}

function KumbhCard({ item, href, readLabel, pendingLabel }: { item: (typeof kumbhLocations)[number]; href: string; readLabel: string; pendingLabel: string }) {
  return <Card className={`h-full overflow-hidden ${item.id === "ujjain-2028" ? "border-saffron ring-2 ring-orange-100" : "border-gold/30"}`}><div className="brand-gradient pattern-jaali p-6 text-white"><div className="flex items-center justify-between"><MapPin className="h-6 w-6 text-gold" /><span className="rounded-full border border-white/20 bg-black/15 px-3 py-1 text-xs font-bold">{item.horizon}</span></div><h3 className="mt-8 font-serif text-2xl text-white">{item.city}</h3><p className="mt-1 text-xs text-orange-100">{item.river}</p></div><CardContent><p className="text-sm leading-7 text-stone-600">{item.shortDescription}</p><p className="mt-5 flex gap-2 rounded-xl bg-amber-50 p-3 text-xs leading-5 text-amber-900"><CalendarDays className="h-4 w-4 shrink-0" />{pendingLabel}</p><Button asChild variant="outline" className="mt-5 w-full"><Link href={href}>{readLabel}<ArrowRight className="h-4 w-4" /></Link></Button></CardContent></Card>;
}

function AlertSignup({ copy }: { copy: (typeof portalCopy)[PortalLocale] }) {
  return <section className="pattern-mandala bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] bg-maroon p-8 text-white sm:p-12 lg:grid-cols-[1fr_.8fr] lg:items-center"><div><BellRing className="h-8 w-8 text-gold" /><h2 className="mt-5 font-serif text-4xl">{copy.alertsTitle}</h2><p className="mt-4 max-w-2xl leading-7 text-orange-50/80">{copy.alertsDescription}</p></div><form className="grid gap-3 sm:grid-cols-[1fr_auto]"><input type="email" aria-label="Email address" placeholder="Email / WhatsApp" className="h-13 rounded-full border border-white/20 bg-white px-5 text-ink outline-none" /><Button type="button" size="lg">{copy.alertButton}</Button><p className="text-xs text-orange-50/60 sm:col-span-2">Demo signup · no data is submitted yet.</p></form></div></section>;
}

export function KumbhGuidePage({ slug, locale = "en" }: { slug: string; locale?: PortalLocale }) {
  const copy = portalCopy[locale];
  const href = (path: string) => localizedHref(path, locale);
  if (slug === "kumbh-calendar") return <CalendarPage locale={locale} />;
  const item = kumbhLocations.find((location) => location.slug === slug);
  if (!item) return null;
  const isUjjain = item.id === "ujjain-2028";
  return <main><section className="brand-gradient temple-silhouette pattern-mandala px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-gold">{item.status} · {item.horizon}</p><h1 className="mt-4 max-w-4xl font-serif text-5xl sm:text-6xl">{item.city} Kumbh Guide</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-orange-50/85">{item.shortDescription}</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><Link href={isUjjain ? href("/plan-my-trip") : href("/kumbh-calendar")}>{isUjjain ? copy.primaryCta : copy.readGuide}</Link></Button>{isUjjain && <Button asChild variant="outline" size="lg"><Link href={href("/mahakal-temple-guide")}>Mahakal Guide</Link></Button>}</div></div></section>
    <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px]"><div className="space-y-6"><Info title="Planning status" text={item.dateNote} /><Info title="Sacred geography" text={`${item.city} is associated with the ${item.river}. Build the journey around official access plans, realistic walking time and family rest windows.`} /><Info title={isUjjain ? "Deep Ujjain planning" : "Guide under development"} text={isUjjain ? "Continue into Mahakal darshan, stay comparison, the trip planner, nearby destinations, itineraries and the food guide." : "This page establishes the evergreen city overview. Detailed stays, transport, bathing-day and crowd guidance will be added after authoritative information is available."} /></div><aside><Card className="premium-card border-gold/40"><CardContent><h2 className="font-serif text-2xl">Guide priorities</h2><ul className="mt-5 space-y-3">{["Official dates and bathing schedule", "How to reach and local transport", "Family and elderly planning", "Stay zones and safety", "River and temple circuit"].map((text) => <li key={text} className="flex gap-2 text-sm text-stone-700"><Check className="h-4 w-4 text-saffron" />{text}</li>)}</ul></CardContent></Card></aside></div></section>
  </main>;
}

function CalendarPage({ locale }: { locale: PortalLocale }) {
  const copy = portalCopy[locale];
  return <main><section className="brand-gradient temple-silhouette px-4 py-20 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-gold">National planning calendar</p><h1 className="mt-4 font-serif text-5xl sm:text-6xl">Kumbh Calendar</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-orange-50/85">A cautious planning view for upcoming and future Kumbh guides. Dates remain unconfirmed until official authorities publish them.</p></div></section><section className="bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24"><div className="mx-auto max-w-6xl space-y-4">{calendarEntries.map((entry) => <Card key={entry.id}><CardContent className="grid gap-4 md:grid-cols-[1fr_180px_1.5fr] md:items-center"><div><h2 className="font-serif text-2xl">{entry.city}</h2><p className="text-sm text-saffron">{entry.yearOrHorizon}</p></div><span className="rounded-full bg-amber-50 px-3 py-2 text-center text-xs font-bold text-amber-900">{copy.schedulePending}</span><p className="text-sm leading-6 text-stone-600">{entry.note}</p></CardContent></Card>)}</div></section></main>;
}

function Info({ title, text }: { title: string; text: string }) {
  return <Card className="premium-card border-gold/30"><CardContent><h2 className="font-serif text-3xl">{title}</h2><p className="mt-4 leading-8 text-stone-600">{text}</p></CardContent></Card>;
}
