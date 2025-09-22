import { useI18n } from "../../I18nProvider";
// import {US, IN, FR, JP, AU, BR} from "country-flag-icons/react/3x2"


// const flags = [
//   { Component: "US", title: "United States" },
//   { Component: "IN", title: "United States" },
//   { Component: "FR", title: "United States" },
//   { Component: "JP", title: "United States" },
//   { Component: "AU", title: "United States" },
//   { Component: "BR", title: "Brazil" },
// ];






export default function LanguageSelect() {
  const { lang, setLang } = useI18n();

  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      className="
        px-1 py-0.5 text-xs   /* mobile: piccolo */
        md:px-3 md:py-1 md:text-base /* da md in su: più grande */
        rounded-md bg-[#1B1B1B] text-[#E9D9B3] 
        border border-[#E9D9B3]/20
        hover:border-[#E9D9B3]/40 
        focus:outline-none focus:ring-2 focus:ring-[#7B1E26]
      "
      aria-label="Seleziona lingua"
    >
      <option value="it">IT</option>
      <option value="en">🇬🇧</option>
      <option value="fr">🇫🇷</option>
      <option value="de">🇩🇪</option>
      <option value="es">🇪🇸</option>
    </select>
  );
}
