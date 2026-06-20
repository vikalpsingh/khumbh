export function generateStaticParams() {
  return [{ locale: "hi" }, { locale: "en" }];
}

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
