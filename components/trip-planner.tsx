"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Check, MapPin, MessageCircle, Route, Users } from "lucide-react";
import destinations from "@/data/destinations.json";
import itineraries from "@/data/itineraries.json";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { WorkingPrintButton } from "./print-button";

export function TripPlanner() {
  const [days, setDays] = useState("4");
  const [from, setFrom] = useState("Indore Airport");
  const [group, setGroup] = useState("family");
  const [pace, setPace] = useState("comfortable");
  const [selected, setSelected] = useState<string[]>(["indore"]);

  const plan = useMemo(() => {
    const count = Number(days);
    const base = [
      "Arrive, check in and enjoy an unhurried evening at Mahakal Lok",
      "Early Mahakaleshwar darshan, rest, then Harsiddhi and Ram Ghat",
      "Kal Bhairav, Sandipani Ashram and a relaxed local food trail",
    ];
    const extras = selected.map((key) => {
      const place = destinations.find((item) => item.id === key);
      return place ? `${place.name}: ${place.highlights.slice(0, 2).join(" and ")}` : "";
    }).filter(Boolean);
    return [...base, ...extras, "Buffer, shopping and departure"].slice(0, count);
  }, [days, selected]);

  const shareText = `Our ${days}-day Ujjain Kumbh 2028 plan from ${from}: ${plan.map((item, index) => `Day ${index + 1}: ${item}`).join("; ")}`;

  return (
    <div className="grid gap-7 lg:grid-cols-[400px_1fr]">
      <Card className="h-fit">
        <CardContent>
          <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-50 text-saffron"><Users className="h-5 w-5" /></span><div><p className="text-xs font-bold uppercase tracking-widest text-saffron">Your preferences</p><h2 className="font-serif text-2xl font-semibold">Tell us the basics</h2></div></div>
          <div className="mt-7 space-y-6">
            <Field label="Trip length"><select value={days} onChange={(e) => setDays(e.target.value)} className="form-control">{[2,3,4,5,6,7].map((day) => <option key={day} value={day}>{day} days</option>)}</select></Field>
            <Field label="Arriving from"><select value={from} onChange={(e) => setFrom(e.target.value)} className="form-control">{["Indore Airport","Indore City","Bhopal","Delhi","Mumbai","Ahmedabad"].map((city) => <option key={city}>{city}</option>)}</select></Field>
            <Choice label="Who is travelling?" options={["couple","family","parents"]} value={group} setValue={setGroup} />
            <Choice label="Preferred pace" options={["relaxed","comfortable","packed"]} value={pace} setValue={setPace} />
            <div><p className="text-sm font-bold text-stone-700">Add a side trip</p><div className="mt-3 space-y-2">{destinations.slice(0,3).map((place) => {
              const active = selected.includes(place.id);
              return <button key={place.id} onClick={() => setSelected((current) => active ? current.filter((id) => id !== place.id) : [...current, place.id])} className="flex w-full items-center gap-3 rounded-xl border border-stone-200 p-3 text-left text-sm transition hover:border-saffron"><span className={`grid h-5 w-5 place-items-center rounded ${active ? "bg-saffron text-white" : "bg-stone-100"}`}>{active && <Check className="h-3 w-3" />}</span><span><strong className="block">{place.name}</strong><span className="text-xs text-stone-500">{place.distance} · {place.duration}</span></span></button>;
            })}</div></div>
          </div>
        </CardContent>
      </Card>

      <div id="print-itinerary" className="overflow-hidden rounded-[2rem] bg-maroon text-white shadow-soft">
        <div className="pattern-mandala border-b border-white/10 p-6 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Personalised starting plan</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">{days} days · {pace} pace</h2>
          <p className="mt-3 text-sm text-orange-50/70">{group === "parents" ? "Extra rest windows recommended for parents." : "Built with realistic family travel buffers."}</p>
        </div>
        <div className="p-5 sm:p-8">
          <AnimatePresence mode="popLayout">
            <div className="space-y-3">{plan.map((item, index) => <motion.div layout key={`${index}-${item}`} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[.06] p-4"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold font-bold text-maroon">{index + 1}</span><div><p className="font-bold">Day {index + 1}</p><p className="mt-1 text-sm leading-6 text-orange-50/75">{item}</p></div></motion.div>)}</div>
          </AnimatePresence>
          <div className="print-hidden mt-7 flex flex-wrap gap-3">
            <Button asChild variant="outline"><a href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(from)}&destination=Ujjain`} target="_blank" rel="noreferrer"><Route className="h-4 w-4" />Open route</a></Button>
            <Button asChild variant="whatsapp"><a href={`https://wa.me/?text=${encodeURIComponent(shareText)}`} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" />WhatsApp plan</a></Button>
            <WorkingPrintButton />
          </div>
          <p className="mt-6 flex gap-2 text-xs leading-5 text-orange-50/60"><MapPin className="h-4 w-4 shrink-0" />This is a planning draft. Reconfirm official timings, routes and bookings before travel.</p>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block text-sm font-bold text-stone-700">{label}{children}</label>;
}

function Choice({ label, options, value, setValue }: { label: string; options: string[]; value: string; setValue: (value: string) => void }) {
  return <div><p className="text-sm font-bold text-stone-700">{label}</p><div className="mt-2 grid grid-cols-3 gap-2">{options.map((item) => <button key={item} onClick={() => setValue(item)} className={`rounded-xl px-2 py-3 text-xs font-bold capitalize ${value === item ? "bg-maroon text-white" : "bg-sand text-stone-700"}`}>{item}</button>)}</div></div>;
}
