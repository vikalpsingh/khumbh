"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { isHindiPath } from "@/lib/locale";

export function DocumentLanguage() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.lang = isHindiPath(pathname) ? "hi" : "en";
  }, [pathname]);
  return null;
}
