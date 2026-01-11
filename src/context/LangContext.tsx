"use client";

import { createContext, useState, useContext, ReactNode } from "react";

// Les langues disponibles
type Lang = "fr" | "en" | "de";

// Structure du contexte
interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

// Créer le contexte
const LangContext = createContext<LangContextType | undefined>(undefined);

// Provider : englobe l'app et fournit la langue à tous les composants
export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en"); // langue par défaut

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

// Hook pour utiliser la langue facilement
export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be used within LangProvider");
  return context;
};
