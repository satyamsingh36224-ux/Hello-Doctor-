
"use client";

import React, { createContext, ReactNode } from 'react';
import translationsData from '@/lib/translations';
import type { Translations } from '@/lib/translations';

export type Language = 'hi' | 'en' | 'bho';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Translations[Language];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = React.useState<Language>('hi');

  const setLanguageWithHtmlLang = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      document.documentElement.lang = lang;
    }
  };

  React.useEffect(() => {
    // Set default language on mount
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage: setLanguageWithHtmlLang,
    translations: translationsData[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
