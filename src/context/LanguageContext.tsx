"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations } from "@/data/translations";

type Language = "id" | "en";
type TranslationData = typeof translations.id;

interface LanguageContextProps {
  lang: Language;
  t: TranslationData;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem("preferred_lang") as Language;
    if (stored) {
      setLang(stored);
    } else {
      const browserLang = navigator.language.toLowerCase();
      setLang(browserLang.startsWith("id") ? "id" : "en");
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "id" ? "en" : "id";
    setLang(newLang);
    localStorage.setItem("preferred_lang", newLang);
  };

  if (!isMounted) return null; // Avoid hydration mismatch

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLanguage }}>
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
