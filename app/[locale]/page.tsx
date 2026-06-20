import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { HindiHome } from "@/components/hindi-home";
import { isLocaleCode, localeCodes, type LocaleCode } from "@/lib/locale";
import { uiCopy } from "@/data/locale-ui";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return ["en", ...localeCodes].map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocaleCode(locale)) return {};
  const copy = uiCopy[locale];
  return {
    title: copy.homeTitle,
    description: copy.homeDescription,
    alternates: { canonical: `/${locale}`, languages: Object.fromEntries([["en", "/"], ...localeCodes.map((code) => [code, `/${code}`])]) },
    openGraph: { title: copy.homeTitle, description: copy.homeDescription, images: ["/images/mahakal-ghat-temple.png"] },
  };
}

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  if (locale === "en") redirect("/");
  if (!isLocaleCode(locale)) notFound();
  return <HindiHome locale={locale as LocaleCode} />;
}
