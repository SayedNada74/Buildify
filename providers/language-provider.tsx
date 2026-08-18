"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, dictionary, DictionaryContent } from "@/data/dictionary";

interface LanguageContextType {
  lang: Language;
  dir: "ltr" | "rtl";
  t: DictionaryContent;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("buildify_lang") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "ar")) {
      setLang(savedLang);
    } else {
      // Browser preference detection fallback
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("ar")) {
        setLang("ar");
      }
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    localStorage.setItem("buildify_lang", lang);
  }, [lang, mounted]);

  const setLanguage = (newLang: Language) => {
    setLang(newLang);
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  const value: LanguageContextType = {
    lang,
    dir: lang === "ar" ? "rtl" : "ltr",
    t: dictionary[lang],
    setLanguage,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
