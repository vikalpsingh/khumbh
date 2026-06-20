import Link from "next/link";
import { notFound } from "next/navigation";
import en from "@/data/locales/en.json";
import hi from "@/data/locales/hi.json";
import { Button } from "@/components/ui/button";

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!["en", "hi"].includes(locale)) notFound();
  const content = locale === "hi" ? hi : en;
  return (
    <main className="pattern-mandala grid min-h-[60vh] place-items-center bg-cream px-4 py-20 text-center">
      <div className="max-w-xl rounded-[2rem] border border-stone-200 bg-white p-8 shadow-soft sm:p-12">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-maroon font-serif text-3xl text-gold">ॐ</span>
        <h1 className="mt-6 font-serif text-4xl font-semibold text-ink">{content.siteName}</h1>
        <p className="mt-2 text-saffron">{content.tagline}</p>
        <p className="mt-5 leading-7 text-stone-600">{locale === "hi" ? "हिन्दी सामग्री संरचना तैयार है। पूर्ण हिन्दी संपादकीय सामग्री अगले चरण में जोड़ी जा सकती है।" : "The website architecture is ready for English and Hindi editorial content."}</p>
        <div className="mt-7"><Button asChild><Link href="/plan-my-trip">{content.planTrip}</Link></Button></div>
      </div>
    </main>
  );
}
