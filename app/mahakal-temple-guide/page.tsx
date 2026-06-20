import type { Metadata } from "next";
import temples from "@/data/temples.json";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HeroSection, SectionTitle, TempleCard, WhatsAppShareButton } from "@/components/travel-components";
import { MotionReveal } from "@/components/motion-reveal";

export const metadata: Metadata = { title: "Mahakal Darshan & Temple Guide", description: "Plan Mahakaleshwar darshan, Bhasma Aarti and Ujjain temple visits with practical family guidance.", alternates: { canonical: "/mahakal-temple-guide" } };

export default function MahakalPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Mahakal Guide" }]} />
      <HeroSection compact eyebrow="Sacred Ujjain" title="Mahakal darshan," accent="planned calmly." description="Understand timings, rituals, family considerations and the wider temple circuit before you arrive." />
      <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Temple circuit" title="Three essential sacred experiences" description="Keep temple plans flexible: security, queue and entry arrangements may change during festivals." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">{temples.map((temple) => <MotionReveal key={temple.id}><TempleCard temple={temple} /></MotionReveal>)}</div>
          <div className="mt-12 rounded-[2rem] bg-maroon p-7 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">Bhasma Aarti checklist</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold">Book only through official channels</h2>
            <div className="mt-6 grid gap-4 text-sm text-orange-50/80 sm:grid-cols-2 lg:grid-cols-4">{["Carry original photo ID", "Reconfirm dress requirements", "Report well before entry time", "Avoid unofficial agents"].map((item) => <p key={item} className="rounded-xl border border-white/10 bg-white/5 p-4">{item}</p>)}</div>
            <div className="mt-7"><WhatsAppShareButton text="Mahakal darshan planning guide: https://ujjain2028.in/mahakal-temple-guide" /></div>
          </div>
        </div>
      </section>
    </main>
  );
}
