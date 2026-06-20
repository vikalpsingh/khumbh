"use client";

import { useMemo, useState } from "react";
import { CalendarDays, Check, MapPin, MessageCircle, Route } from "lucide-react";

const addOns: Record<string, string> = {
  indore: "Indore food & heritage day",
  omkareshwar: "Omkareshwar Jyotirlinga",
  maheshwar: "Maheshwar & Narmada ghats",
};

export function TripPlanner() {
  const [days, setDays] = useState("3");
  const [from, setFrom] = useState("Indore");
  const [pace, setPace] = useState("balanced");
  const [selected, setSelected] = useState<string[]>(["indore"]);

  const plan = useMemo(() => {
    const count = Number(days);
    const base = [
      "Arrival, Shipra ghats & Mahakal Lok",
      "Mahakaleshwar darshan, Harsiddhi & old Ujjain",
      "Kal Bhairav, Sandipani Ashram & relaxed local food trail",
    ];
    const extras = selected.map((key) => addOns[key]);
    return [...base, ...extras, "Buffer / departure day"].slice(0, count);
  }, [days, selected]);

  const shareText = `My ${days}-day Ujjain 2028 plan from ${from}: ${plan.map((item, i) => `Day ${i + 1} ${item}`).join("; ")}`;
  const toggle = (key: string) => setSelected((v) => v.includes(key) ? v.filter((x) => x !== key) : [...v, key]);

  return (
    <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
      <div className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-8">
        <h2 className="font-serif text-3xl font-semibold text-ink">Tell us your travel style</h2>
        <div className="mt-7 space-y-6">
          <label className="block text-sm font-bold text-stone-700">Trip length
            <select value={days} onChange={(e) => setDays(e.target.value)} className="mt-2 h-12 w-full rounded-xl border border-stone-300 bg-white px-4 font-normal outline-none focus:border-saffron">
              {[2, 3, 4, 5, 6, 7].map((d) => <option key={d} value={d}>{d} days</option>)}
            </select>
          </label>
          <label className="block text-sm font-bold text-stone-700">Arriving from
            <select value={from} onChange={(e) => setFrom(e.target.value)} className="mt-2 h-12 w-full rounded-xl border border-stone-300 bg-white px-4 font-normal outline-none focus:border-saffron">
              {["Indore", "Delhi", "Mumbai", "Bhopal", "Ahmedabad", "International flight"].map((city) => <option key={city}>{city}</option>)}
            </select>
          </label>
          <div>
            <p className="text-sm font-bold text-stone-700">Pace</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {["relaxed", "balanced", "packed"].map((item) => <button key={item} onClick={() => setPace(item)} className={`rounded-xl px-2 py-3 text-xs font-bold capitalize ${pace === item ? "bg-maroon text-white" : "bg-sand text-stone-700"}`}>{item}</button>)}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-stone-700">Add a side trip</p>
            <div className="mt-3 space-y-2">
              {Object.entries(addOns).map(([key, label]) => <button key={key} onClick={() => toggle(key)} className="flex w-full items-center gap-3 rounded-xl border border-stone-200 p-3 text-left text-sm">
                <span className={`grid h-5 w-5 place-items-center rounded ${selected.includes(key) ? "bg-saffron text-white" : "bg-stone-100"}`}>{selected.includes(key) && <Check className="h-3 w-3" />}</span>{label}
              </button>)}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] bg-maroon p-6 text-white sm:p-9">
        <div className="flex items-start justify-between gap-4">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Your suggested plan</p><h2 className="mt-2 font-serif text-3xl font-semibold">{days} days · {pace} pace</h2></div>
          <CalendarDays className="h-8 w-8 text-gold" />
        </div>
        <div className="mt-8 space-y-3">
          {plan.map((item, index) => (
            <div key={`${item}-${index}`} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold font-bold text-maroon">{index + 1}</span>
              <div><p className="font-bold">Day {index + 1}</p><p className="mt-1 text-sm leading-6 text-orange-50/70">{item}</p></div>
            </div>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(from)}&destination=Ujjain`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink"><Route className="h-4 w-4" /> Map route</a>
          <a href={`https://wa.me/?text=${encodeURIComponent(shareText)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#1f9d55] px-5 py-3 text-sm font-bold text-white"><MessageCircle className="h-4 w-4" /> WhatsApp plan</a>
        </div>
        <p className="mt-6 flex gap-2 text-xs leading-5 text-orange-50/60"><MapPin className="h-4 w-4 shrink-0" /> Travel times can change dramatically on major bathing days. Treat this as a flexible planning draft.</p>
      </div>
    </div>
  );
}
