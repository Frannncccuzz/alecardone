
import { useEffect, useRef, useState } from "react";
import { useI18n } from "../../I18nProvider";
import ReactCountryFlag from "react-country-flag";

const LANGS = [
  { code: "it", cc: "IT", label: "IT" },
  { code: "en", cc: "GB", label: "EN" }, // o "US"
  { code: "fr", cc: "FR", label: "FR" },
  { code: "de", cc: "DE", label: "DE" },
  { code: "es", cc: "ES", label: "ES" },
];

export default function LanguageSelect() {
  const { lang, setLang } = useI18n();
  const current = LANGS.find((l) => l.code === lang) || LANGS[0];

  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0, minWidth: 112 }); // min 7rem
  const wrapRef = useRef(null);
  const btnRef = useRef(null);
  const listRef = useRef(null);

  const placeMenu = () => {
    const btn = btnRef.current;
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const minWidth = Math.max(112, Math.ceil(r.width));

    // posizione base sotto il bottone, allineata a destra
    let top = Math.round(r.bottom + 6);
    let left = Math.round(r.right - minWidth); // allinea il bordo destro al destro del bottone

    // clamp orizzontale (margine di sicurezza 8px)
    const margin = 8;
    const maxLeft = window.innerWidth - minWidth - margin;
    if (left < margin) left = margin;
    if (left > maxLeft) left = maxLeft;

    setPos({ top, left, minWidth });
  };

  const openMenu = () => {
    placeMenu();
    setOpen(true);
  };

  // chiudi clic fuori
  useEffect(() => {
    const onDoc = (e) => {
      if (!wrapRef.current) return;
      if (
        !wrapRef.current.contains(e.target) &&
        !listRef.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  // riposiziona su scroll/resize mentre è aperto
  useEffect(() => {
    if (!open) return;
    const onScroll = () => placeMenu();
    const onResize = () => placeMenu();
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onResize);
    placeMenu();
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  // tastiera base
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div ref={wrapRef} className="absolute left-5 top-10  z-200 items-center gap-1">
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => (open ? setOpen(false) : openMenu())}
        className="
          inline-flex items-center gap-1 justify-center
          w-[3.2rem] md:w-[4rem]    /* corto */
          px-1 py-0.5 text-[0.75rem]
          md:px-2 md:py-1 md:text-sm
          rounded bg-[#1B1B1B] text-[#E9D9B3]
          border border-[#E9D9B3]/20 hover:border-[#E9D9B3]/40
          focus:outline-none focus:ring-1 focus:ring-[#7B1E26]
        "
        title="Seleziona lingua"
      >
        <ReactCountryFlag
          countryCode={current.cc}
          svg
          style={{ width: "1rem", height: "1rem" }}
          aria-label={current.label}
        />
        <span>{current.label}</span>
      </button>

      {/* MENU: position: fixed ancorato al bottone, sempre SOTTO */}
      {open && (
        <ul
          ref={listRef}
          role="listbox"
          aria-label="Seleziona lingua"
          className=" 
      fixed z-[9999] pointer-events-auto
      rounded-md border border-[#E9D9B3]/25
      bg-[#1B1B1B] text-[#E9D9B3] shadow-2xl
      p-1
    "
          style={{
            top: `${pos.top}px`,
            left: `${pos.left}px`,
            minWidth: `${pos.minWidth}px`,
          }}
        >
          {LANGS.map((l) => (
            <li
              key={l.code}
              role="option"
              aria-selected={l.code === lang}
              tabIndex={0}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
                btnRef.current?.focus();
              }}
              className={`
          flex items-center gap-2 px-2 py-1 rounded cursor-pointer
          hover:bg-[#7B1E26]/25
          ${l.code === lang ? "bg-[#7B1E26]/20" : ""}
        `}
            >
              <ReactCountryFlag
                countryCode={l.cc}
                svg
                style={{ width: "1rem", height: "1rem" }}
                aria-label={l.label}
              />
              <span className="text-sm">{l.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
