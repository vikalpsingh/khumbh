import Image from "next/image";
import Link from "next/link";
import { BedDouble, BusFront, CalendarDays, Landmark, MapPin, MapPinned, Soup } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const guides = [
  [Landmark, "महाकाल दर्शन", "भस्म आरती, मंदिर नियम और परिवार के लिए दर्शन योजना।", "/hi/mahakal-temple-guide"],
  [BusFront, "उज्जैन कैसे पहुँचें", "ट्रेन, हवाई जहाज और सड़क मार्ग की सरल तुलना।", "/hi/how-to-reach"],
  [BedDouble, "कहाँ ठहरें", "उज्जैन, इंदौर और भोपाल में सही बेस चुनें।", "/hi/stay-guide"],
  [MapPinned, "आस-पास की जगहें", "ओंकारेश्वर, महेश्वर, मांडू, साँची और भीमबेटका।", "/hi/nearby-places"],
  [CalendarDays, "तैयार यात्रा कार्यक्रम", "1, 2, 3, 5 और 7 दिन की दिनवार योजना।", "/hi/itineraries"],
  [Soup, "खान-पान गाइड", "पोहा-जलेबी, दाल बाफला और सुरक्षित भोजन सुझाव।", "/hi/food-guide"],
] as const;

export function HindiHome() {
  return (
    <main>
      <section className="temple-silhouette relative min-h-[700px] overflow-hidden bg-maroon text-white">
        <Image src="/images/mahakal-ghat-temple.png" alt="संध्या के समय उज्जैन मंदिर और घाट पर श्रद्धालु" fill priority className="object-cover object-[62%_center] sm:object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#210b0d]/95 via-[#55191d]/82 to-[#6e2024]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#260d0f]/85 via-transparent to-black/20" />
        <div className="pattern-mandala absolute inset-0 opacity-10" />
        <div className="relative mx-auto flex min-h-[700px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/20 px-4 py-2 text-xs font-bold text-gold"><MapPin className="h-4 w-4" />सम्पूर्ण हिन्दी यात्रा मार्गदर्शिका</p>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.08] sm:text-6xl lg:text-7xl">अपनी उज्जैन कुंभ मेला 2028 यात्रा की योजना बनाएँ</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-orange-50/90 sm:text-xl">महाकाल दर्शन, ठहरने की जगह, यात्रा मार्ग, भोजन, आस-पास के ज्योतिर्लिंग और परिवार के अनुकूल कार्यक्रम—सब कुछ सरल हिन्दी में।</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg"><Link href="/hi/plan-my-trip">मेरी यात्रा बनाएँ</Link></Button>
              <Button asChild variant="outline" size="lg"><Link href="/hi/mahakal-temple-guide">महाकाल गाइड देखें</Link></Button>
              <Button asChild variant="outline" size="lg"><Link href="/hi/stay-guide">ठहरने के विकल्प</Link></Button>
            </div>
          </div>
        </div>
      </section>
      <section className="pattern-mandala bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-saffron">यात्रा की शुरुआत यहाँ से करें</p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">हर जरूरी निर्णय के लिए स्पष्ट हिन्दी जानकारी</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-600">यह साइट खासकर परिवार, माता-पिता के साथ यात्रा करने वालों और पहली बार उज्जैन आने वाले श्रद्धालुओं के लिए बनाई गई है।</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map(([Icon, title, text, href]) => <Link key={href} href={href} className="group"><Card className="premium-card h-full transition group-hover:-translate-y-1 group-hover:border-saffron/50"><CardContent><span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-50 text-saffron"><Icon className="h-6 w-6" /></span><h3 className="mt-5 font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-7 text-stone-600">{text}</p><span className="mt-5 inline-block text-sm font-bold text-maroon">पूरी जानकारी पढ़ें →</span></CardContent></Card></Link>)}
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-maroon p-8 text-white sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-gold">समझ नहीं आ रहा कहाँ से शुरू करें?</p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl">अपने शहर, दिनों और परिवार के अनुसार यात्रा योजना पाएँ</h2>
          <p className="mt-4 max-w-2xl leading-7 text-orange-50/80">कुछ आसान विकल्प चुनें और हिन्दी में दिनवार कार्यक्रम, सही बेस शहर, मंदिर, भोजन तथा यात्रा सुझाव पाएँ।</p>
          <Button asChild size="lg" className="mt-7"><Link href="/hi/plan-my-trip">यात्रा प्लानर खोलें</Link></Button>
        </div>
      </section>
    </main>
  );
}
