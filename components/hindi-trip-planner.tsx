"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, MapPin, MessageCircle, Printer } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const questions = [
  { title: "आपकी यात्रा कहाँ से शुरू होगी?", help: "इससे मार्ग और यात्रा समय का अनुमान बनेगा।", options: ["इंदौर", "भोपाल", "दिल्ली", "मुंबई", "पुणे", "अहमदाबाद", "बेंगलुरु", "अन्य"] },
  { title: "आपके पास कितने दिन हैं?", help: "दिनों के आधार पर मुख्य यात्रा सर्किट चुना जाएगा।", options: ["1 दिन", "2 दिन", "3 दिन", "5 दिन", "7 दिन"] },
  { title: "कौन यात्रा कर रहा है?", help: "हम यात्रा की गति और आराम के सुझाव इसके अनुसार बदलेंगे।", options: ["अकेले", "दंपति", "परिवार", "बुजुर्ग माता-पिता", "विदेशी यात्री"] },
  { title: "आप कहाँ ठहरना पसंद करेंगे?", help: "शहर चुनें या प्लानर को सुझाव देने दें।", options: ["उज्जैन", "इंदौर", "भोपाल", "पता नहीं"] },
];

const interests = ["महाकाल दर्शन", "ज्योतिर्लिंग सर्किट", "खान-पान", "विरासत", "प्रकृति", "परिवार के अनुकूल", "आरामदायक यात्रा"];

export function HindiTripPlanner() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);
  const selected = answers[step] || "";
  const canContinue = step === 4 ? selectedInterests.length > 0 : Boolean(selected);
  const days = Number((answers[1] || "1").split(" ")[0]);
  const plan = useMemo(() => buildHindiPlan(days, answers[2], answers[3], selectedInterests), [days, answers, selectedInterests]);

  function choose(value: string) {
    setAnswers((current) => {
      const next = [...current];
      next[step] = value;
      return next;
    });
  }

  function next() {
    if (!canContinue) return;
    if (step === 4) setFinished(true);
    else setStep((current) => current + 1);
  }

  return (
    <div>
      <div className="mx-auto flex max-w-4xl items-center gap-2">{[0, 1, 2, 3, 4].map((index) => <div key={index} className="flex flex-1 items-center"><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-bold ${index < step || finished ? "bg-[#168f4d] text-white" : index === step ? "bg-saffron text-white ring-4 ring-orange-100" : "bg-white text-stone-400 ring-1 ring-stone-200"}`}>{index < step || finished ? <Check className="h-4 w-4" /> : index + 1}</span>{index < 4 && <span className={`mx-2 h-0.5 flex-1 ${index < step || finished ? "bg-[#168f4d]" : "bg-stone-200"}`} />}</div>)}</div>
      {!finished ? (
        <Card className="mx-auto mt-8 max-w-4xl overflow-hidden border-gold/40">
          <div className="brand-gradient temple-silhouette p-6 text-white sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-gold">चरण {step + 1} / 5</p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">{step < 4 ? questions[step].title : "इस यात्रा में आपकी रुचि क्या है?"}</h2>
            <p className="mt-3 text-sm text-orange-50/80">{step < 4 ? questions[step].help : "एक या अधिक विकल्प चुनें।"}</p>
          </div>
          <CardContent className="p-5 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {(step < 4 ? questions[step].options : interests).map((option) => {
                const active = step < 4 ? selected === option : selectedInterests.includes(option);
                return <button key={option} onClick={() => step < 4 ? choose(option) : setSelectedInterests((current) => current.includes(option) ? current.filter((item) => item !== option) : [...current, option])} className={`flex min-h-20 items-center gap-3 rounded-2xl border p-4 text-left font-bold transition ${active ? "border-saffron bg-orange-50 ring-2 ring-orange-100" : "border-stone-200 bg-white hover:border-gold"}`}><span className={`grid h-9 w-9 place-items-center rounded-xl ${active ? "bg-saffron text-white" : "bg-sand text-maroon"}`}><MapPin className="h-4 w-4" /></span>{option}</button>;
              })}
            </div>
            <div className="mt-8 flex justify-between gap-3"><Button variant="ghost" disabled={step === 0} onClick={() => setStep((current) => current - 1)}><ArrowLeft className="h-4 w-4" />पीछे</Button><Button size="lg" disabled={!canContinue} onClick={next}>{step === 4 ? "मेरी यात्रा बनाएँ" : "आगे बढ़ें"}<ArrowRight className="h-4 w-4" /></Button></div>
            <p className="mt-5 text-center text-xs text-stone-400">आपके विकल्प केवल इसी पेज पर रहते हैं और कहीं जमा नहीं किए जाते।</p>
          </CardContent>
        </Card>
      ) : (
        <Card id="print-itinerary" className="mt-8 overflow-hidden border-gold/40">
          <div className="brand-gradient temple-silhouette p-7 text-white sm:p-10"><p className="text-xs font-bold uppercase tracking-[.2em] text-gold">आपकी यात्रा योजना</p><h2 className="mt-3 font-serif text-4xl text-white">{days} दिन की उज्जैन यात्रा</h2><p className="mt-3 text-orange-50/80">{answers[0]} से · {answers[2]} · सही बेस: {plan.base}</p></div>
          <CardContent className="p-6 sm:p-9">
            <h3 className="font-serif text-2xl">दिनवार कार्यक्रम</h3>
            <ol className="relative ml-4 mt-6 border-l border-gold/50 pl-8">{plan.days.map((item, index) => <li key={item} className="relative pb-6 last:pb-0"><span className="absolute -left-[42px] grid h-7 w-7 place-items-center rounded-full bg-saffron text-xs font-bold text-white ring-4 ring-orange-50">{index + 1}</span><p className="leading-7 text-stone-700">{item}</p></li>)}</ol>
            <div className="mt-8 grid gap-5 md:grid-cols-3"><Result title="जरूरी मंदिर" items={plan.temples} /><Result title="खान-पान" items={plan.food} /><Result title="परिवार सुझाव" items={plan.tips} /></div>
            <div className="print-hidden mt-8 flex flex-wrap gap-3 border-t border-stone-200 pt-7">
              <Button asChild variant="outline"><a href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(answers[0])}&destination=Ujjain`} target="_blank" rel="noreferrer"><MapPin className="h-4 w-4" />मार्ग खोलें</a></Button>
              <Button asChild variant="whatsapp"><a href={`https://wa.me/?text=${encodeURIComponent(`${days} दिन की उज्जैन यात्रा। सही बेस: ${plan.base}। ${plan.days.join(" ")}`)}`} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" />WhatsApp पर भेजें</a></Button>
              <Button variant="outline" onClick={() => window.print()}><Printer className="h-4 w-4" />प्रिंट / PDF</Button>
              <Button variant="ghost" onClick={() => { setFinished(false); setStep(0); }}>फिर से शुरू करें</Button>
            </div>
            <p className="mt-6 text-xs leading-5 text-stone-500">यह प्रारंभिक योजना है। यात्रा समय, दर्शन व्यवस्था और आधिकारिक नियम बुकिंग से पहले जाँचें।</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function Result({ title, items }: { title: string; items: string[] }) {
  return <div className="rounded-2xl bg-sand/70 p-5"><h3 className="font-bold text-maroon">{title}</h3><ul className="mt-3 space-y-2">{items.map((item) => <li key={item} className="flex gap-2 text-sm leading-6 text-stone-700"><Check className="mt-1 h-4 w-4 shrink-0 text-saffron" />{item}</li>)}</ul></div>;
}

function buildHindiPlan(days: number, visitor = "", stay = "", selected: string[]) {
  const base = stay && stay !== "पता नहीं" ? stay : days <= 2 ? "उज्जैन" : days <= 5 ? "उज्जैन और इंदौर" : "उज्जैन, इंदौर और भोपाल";
  const plans: Record<number, string[]> = {
    1: ["सुबह महाकाल दर्शन रखें।", "दोपहर भोजन और विश्राम के बाद हरसिद्धि माता जाएँ।", "शाम राम घाट या महाकाल लोक देखें।"],
    2: ["दिन 1: महाकाल दर्शन, विश्राम और उज्जैन मंदिर सर्किट।", "दिन 2: सुबह जल्दी ओंकारेश्वर, दर्शन और पर्याप्त समय के साथ वापसी।"],
    3: ["दिन 1: उज्जैन आगमन और महाकाल लोक।", "दिन 2: महाकाल दर्शन और चुनिंदा मंदिर।", "दिन 3: इंदौर या ओंकारेश्वर/महेश्वर की यात्रा।"],
    5: ["दिन 1–2: उज्जैन और महाकाल दर्शन।", "दिन 3: ओंकारेश्वर।", "दिन 4: महेश्वर।", "दिन 5: मांडू और इंदौर वापसी।"],
    7: ["दिन 1–2: उज्जैन।", "दिन 3: ओंकारेश्वर।", "दिन 4: महेश्वर।", "दिन 5: मांडू और इंदौर।", "दिन 6: भोपाल और साँची।", "दिन 7: भीमबेटका तथा प्रस्थान।"],
  };
  const itinerary = [...(plans[days] || plans[1])];
  if (selected.includes("आरामदायक यात्रा")) itinerary.push("एक आधा दिन बिना कार्यक्रम के आराम और भीड़ के अतिरिक्त समय के लिए रखें।");
  if (selected.includes("खान-पान") && days >= 3) itinerary.push("इंदौर में हल्की शाम का भोजन भ्रमण जोड़ें।");
  const tips = visitor === "बुजुर्ग माता-पिता" ? ["सुबह जल्दी दर्शन", "हर दो पड़ाव के बाद विश्राम", "पानी और दवाएँ साथ रखें"] : ["योजना लचीली रखें", "परिवार का मिलने का स्थान तय करें", "टिकट और पहचान पत्र ऑफलाइन रखें"];
  return { base, days: itinerary, temples: ["महाकालेश्वर", "हरसिद्धि माता", days >= 2 ? "ओंकारेश्वर" : "काल भैरव"], food: ["पोहा-जलेबी", "हल्की शाकाहारी थाली", "सुरक्षित पानी और ओआरएस"], tips };
}
