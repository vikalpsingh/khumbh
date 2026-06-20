import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";
import "./globals.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/noto-sans-devanagari";

export const metadata: Metadata = {
  metadataBase: new URL("https://ujjain2028.in"),
  title: { default: "Ujjain Kumbh Mela 2028 & Mahakal Travel Guide", template: "%s | Ujjain Kumbh 2028" },
  description: "A trusted family travel guide for Ujjain Kumbh Mela 2028, Mahakal darshan, hotels, routes, food and nearby destinations.",
  keywords: ["Ujjain Kumbh 2028", "Simhastha 2028", "Mahakal darshan", "Ujjain travel guide"],
  openGraph: {
    title: "Ujjain Kumbh Mela 2028 Travel Guide",
    description: "A practical, calm and complete guide to planning your Ujjain pilgrimage.",
    images: ["/images/ujjain-shipra-hero.png"],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const travelSchema = {
  "@context": "https://schema.org",
  "@type": "TravelGuide",
  name: "Ujjain Kumbh Mela 2028 Travel Guide",
  description: "Practical visitor information for Ujjain Kumbh Mela 2028.",
  about: { "@type": "TouristDestination", name: "Ujjain, Madhya Pradesh, India" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <MobileStickyCTA />
        <Script id="travel-guide-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(travelSchema) }} />
        {/* Google Analytics placeholder: replace G-XXXXXXXXXX and enable when ready. */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`}</Script>
      </body>
    </html>
  );
}
