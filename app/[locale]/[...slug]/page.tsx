import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { HindiContact } from "@/components/hindi-contact";
import { HindiPageTemplate } from "@/components/hindi-page";
import { HindiTripPlanner } from "@/components/hindi-trip-planner";
import { hindiPages } from "@/data/hindi-pages";

type Props = { params: Promise<{ locale: string; slug: string[] }> };

export function generateStaticParams() {
  const slugs = [...Object.keys(hindiPages), "plan-my-trip", "contact"];
  return slugs.map((slug) => ({ locale: "hi", slug: [slug] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const key = slug.join("/");
  if (locale !== "hi") return {};
  if (key === "plan-my-trip") return { title: "हिन्दी में अपनी उज्जैन यात्रा बनाएँ", description: "शहर, दिनों, परिवार और रुचियों के अनुसार हिन्दी में उज्जैन यात्रा कार्यक्रम पाएँ।", alternates: { canonical: "/hi/plan-my-trip", languages: { en: "/plan-my-trip", hi: "/hi/plan-my-trip" } } };
  if (key === "contact") return { title: "यात्रा पूछताछ", description: "उज्जैन यात्रा सहायता के लिए हिन्दी में पूछताछ करें।", alternates: { canonical: "/hi/contact", languages: { en: "/contact", hi: "/hi/contact" } } };
  const content = hindiPages[key];
  if (!content) return {};
  return {
    title: content.title,
    description: content.description,
    alternates: { canonical: `/hi/${key}`, languages: { en: `/${key}`, hi: `/hi/${key}` } },
  };
}

export default async function HindiRoutePage({ params }: Props) {
  const { locale, slug } = await params;
  const key = slug.join("/");
  if (locale === "en") redirect(`/${key}`);
  if (locale !== "hi") notFound();
  if (key === "plan-my-trip") {
    return (
      <main className="pattern-mandala bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-saffron">सरल चरण-दर-चरण योजना</p>
          <h1 className="mt-3 max-w-4xl font-serif text-5xl font-semibold leading-tight text-ink sm:text-6xl">हिन्दी में अपनी उज्जैन यात्रा बनाएँ</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-600">अपना शुरुआती शहर, दिनों की संख्या, यात्री प्रकार, ठहरने की पसंद और रुचियाँ चुनें। आपको दिनवार योजना, सही बेस शहर, मंदिर और परिवार सुझाव मिलेंगे।</p>
          <div className="mt-12"><HindiTripPlanner /></div>
        </div>
      </main>
    );
  }
  if (key === "contact") return <HindiContact />;
  const content = hindiPages[key];
  if (!content) notFound();
  return <HindiPageTemplate content={content} />;
}
