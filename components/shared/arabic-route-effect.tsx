"use client";

import { useEffect } from "react";
import { useLanguage } from "@/providers/language-provider";

export function ArabicRouteEffect({ children }: { children: React.ReactNode }) {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    setLanguage("ar");
  }, [setLanguage]);

  return <>{children}</>;
}
