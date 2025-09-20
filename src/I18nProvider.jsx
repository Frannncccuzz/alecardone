import React, { createContext, useContext, useState } from "react";
import translations from "./i18n";

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState("it"); // lingua di default

  const t = (key) => {
    return (
      key.split(".").reduce((obj, k) => obj?.[k], translations[lang]) || key
    );
  };

  return (
    <I18nContext.Provider value={{ t, lang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
