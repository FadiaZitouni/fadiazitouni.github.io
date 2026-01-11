"use client";
import { useLang } from "@/context/LangContext";

export default function LangSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex gap-3">
      <button onClick={() => setLang("en")} className={lang === "en" ? "font-bold" : ""}>
        EN
      </button>
       | 
      <button onClick={() => setLang("fr")} className={lang === "fr" ? "font-bold" : ""}>
        FR 
      </button>
       | 
      <button onClick={() => setLang("de")} className={lang === "de" ? "font-bold" : ""}>
        DE
      </button>
    </div>
  );
}
