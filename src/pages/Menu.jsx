import { useMemo, useState, useEffect, useCallback } from "react";
import { useI18n } from "../I18nProvider";

import Footer from "../components/DownSide/Footer";
import ShowDish from "../components/ShowDish";

export default function Menu() {
  const { t } = useI18n();

  const menu = t("menu", { returnObjects: true }) || [];
  const categories = useMemo(
    () => menu.map((c) => c?.categoria).filter(Boolean),
    [menu]
  );

  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    if (selectedIdx > categories.length - 1) setSelectedIdx(0);
  }, [categories, selectedIdx]);

  const selectedCategory = menu[selectedIdx] || { categoria: "", piatti: [] };

  const onKey = useCallback(
    (e) => {
      if (!categories.length) return;
      if (e.key === "ArrowRight") {
        setSelectedIdx((i) => (i + 1) % categories.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedIdx((i) => (i - 1 + categories.length) % categories.length);
      }
    },
    [categories.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  return (
    <section
      className="relative w-full min-h-screen text-white
                 bg-linear-to-br from-[#1B1B1B] via-[#7B1E26] to-[#E9D9B3]">
      <div className="relative z-10 flex flex-col items-stretch min-h-screen bg-black/40">
        <div className="flex justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mt-25">
            Il Nostro Menù
          </h1>
        </div>
        <div className="mt-6 w-full px-4 md:px-8 flex-1">
          <div className="w-full overflow-x-auto no-scrollbar">
            <div className="flex items-center justify-center flex-wrap gap-2 md:gap-3">
              {categories.map((label, i) => {
                const active = i === selectedIdx;
                return (
                  <button
                    key={label}
                    onClick={() => setSelectedIdx(i)}
                    className={[
                      "shrink-0 rounded-full border transition-colors",
                      "text-xs px-3 py-1 md:text-sm md:px-4 md:py-2",
                      active
                        ? "bg-[#7B1E26] border-[#7B1E26] text-white"
                        : "bg-[#3E2C26]/60 border-[#3E2C26] text-[#E9D9B3] hover:bg-[#3E2C26]/80",
                    ].join(" ")}
                    aria-pressed={active}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="mt-8 mb-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">
              {selectedCategory.categoria}
            </h2>
            <p className="text-sm text-[#E9D9B3]/80 mt-1">
              {selectedCategory.piatti?.length || 0} piatti
            </p>
          </div>
          <div className="space-y-6">
            {(selectedCategory.piatti || []).map((piatto, j) => (
              <ShowDish
                key={`${selectedIdx}-${j}-${piatto?.nome || j}`}
                piatto={piatto}
              />
            ))}
          </div>

          <div id="book" className="mt-12">
            <Footer
                      facebook={
                        "https://www.facebook.com/share/15zqgyX4eF/?mibextid=wwXIfr"
                      }
                      insta={"https://www.instagram.com/_alessandrocardone_pizza_maker/"}
                      book={t("DownSide.book")}
                      nome={t("DownSide.nome")}
                      email={t("DownSide.email")}
                      telefono={t("DownSide.telefono")}
                      persone={t("DownSide.persone")}
                    />
          </div>
        </div>
      </div>
    </section>
  );
}
