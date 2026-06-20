import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { HindiHome } from "@/components/hindi-home";

export const metadata: Metadata = {
  title: "उज्जैन कुंभ मेला 2028 और महाकाल यात्रा गाइड",
  description: "महाकाल दर्शन, ठहरने, यात्रा मार्ग, भोजन और परिवार के लिए उज्जैन यात्रा की सम्पूर्ण हिन्दी मार्गदर्शिका।",
  alternates: { canonical: "/hi", languages: { en: "/", hi: "/hi" } },
  openGraph: {
    title: "उज्जैन कुंभ मेला 2028 हिन्दी यात्रा गाइड",
    description: "परिवार और श्रद्धालुओं के लिए सरल हिन्दी में सम्पूर्ण उज्जैन यात्रा योजना।",
    images: ["/images/mahakal-ghat-temple.png"],
  },
};

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale === "en") redirect("/");
  if (locale !== "hi") notFound();
  return <HindiHome />;
}
