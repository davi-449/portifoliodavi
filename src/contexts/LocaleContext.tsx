import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { LocaleConfig, PT_CONFIG, EN_CONFIG } from '@/config/locales';

interface LocaleContextType extends LocaleConfig {
  setLocale: (locale: 'pt-BR' | 'en-US') => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<LocaleConfig>(PT_CONFIG);

  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.language) {
      const lang = navigator.language.toLowerCase();
      if (lang.startsWith('en')) {
        setConfig(EN_CONFIG);
      }
    }
  }, []);

  const setLocale = (locale: 'pt-BR' | 'en-US') => {
    setConfig(locale === 'en-US' ? EN_CONFIG : PT_CONFIG);
  };

  return (
    <LocaleContext.Provider value={{ ...config, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
