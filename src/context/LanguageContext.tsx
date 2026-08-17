"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { L10n, L10nArray } from "@/data/translations";

// ─── Types ────────────────────────────────────────────────────
export type Lang = "en" | "th";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** Translate a bilingual string object */
  t: (obj: L10n) => string;
  /** Translate a bilingual string-array object */
  ta: (obj: L10nArray) => string[];
}

// ─── Context ──────────────────────────────────────────────────
const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: (obj) => obj.en,
  ta: (obj) => obj.en,
});

// ─── Provider ─────────────────────────────────────────────────
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore persisted preference on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("br-lang");
      if (stored === "en" || stored === "th") setLangState(stored);
    } catch {
      // localStorage may be unavailable (SSR guard)
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("br-lang", l);
    } catch {}
  };

  const t = (obj: L10n): string => obj[lang];
  const ta = (obj: L10nArray): string[] => obj[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, ta }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────
export function useLang() {
  return useContext(LanguageContext);
}
