import { Mail, MessageCircle } from "lucide-react";

export function HindiContact() {
  return (
    <main className="pattern-mandala bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-saffron">हम आपकी सहायता के लिए हैं</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold leading-tight text-ink sm:text-6xl">अपनी यात्रा के बारे में बताएँ</h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-stone-600">यात्रा की तिथि, परिवार के सदस्यों की संख्या और आपकी प्राथमिकताएँ साझा करें। यह अभी डेमो फॉर्म है और कोई जानकारी जमा नहीं करता।</p>
          <div className="mt-9 space-y-4 text-sm font-semibold text-stone-700"><p className="flex items-center gap-3"><Mail className="text-saffron" />hello@ujjain2028.in</p><p className="flex items-center gap-3"><MessageCircle className="text-[#1f9d55]" />WhatsApp सहायता जल्द उपलब्ध होगी</p></div>
        </div>
        <form className="rounded-[2rem] bg-white p-7 shadow-soft sm:p-9">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-bold">नाम<input className="form-control" /></label>
            <label className="text-sm font-bold">ईमेल<input type="email" className="form-control" /></label>
            <label className="text-sm font-bold">यात्रा का महीना<input type="month" className="form-control" /></label>
            <label className="text-sm font-bold">परिवार के सदस्य<input type="number" min="1" className="form-control" /></label>
          </div>
          <label className="mt-5 block text-sm font-bold">हम कैसे सहायता कर सकते हैं?<textarea rows={5} className="mt-2 w-full rounded-xl border border-stone-300 p-4 font-normal outline-none focus:border-saffron" /></label>
          <button type="button" className="mt-6 w-full rounded-full bg-saffron px-6 py-4 text-sm font-bold text-white">पूछताछ भेजें</button>
          <p className="mt-3 text-center text-xs text-stone-400">डेमो फॉर्म—लॉन्च से पहले फॉर्म सेवा से जोड़ा जाएगा।</p>
        </form>
      </div>
    </main>
  );
}
