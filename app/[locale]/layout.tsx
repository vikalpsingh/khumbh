export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "hi" }];
}

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
