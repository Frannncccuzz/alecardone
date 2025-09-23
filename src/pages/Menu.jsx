import { useMemo, useState, useEffect, useCallback } from "react";
import { useI18n } from "../I18nProvider";
import { useNavigate } from "react-router-dom";
import LanguageSelect from "../components/Navbar/LanguageSelect";

function slugify(text) {
  if (!text || typeof text !== "string") return "";
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

export default function Menu() {
  const navigate = useNavigate();
  const { t } = useI18n();

  const categories = t("menu", { returnObjects: true });

  const handleClickCategory = (categoria) => {
    navigate(`/${slugify(categoria)}`);
  };

  return (
    <section className="pt-10 pb-10 flex flex-col items-center md:mx-5 xl:mx-70">
      <LanguageSelect/>
      <h1 className="text-4xl md:text-5xl text-center relative top-10 font-bold uppercase mb-20">
        {t("header.menu")}
      </h1>

      <div className="flex justify-center gap-5 xl:gap-10 flex-wrap">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => handleClickCategory(cat.categoria)}
            className="relative flex justify-center items-end w-80 h-50 rounded-3xl md:w-90 md:h-60 xl:w-120 xl:h-80 overflow-hidden"
            style={{
              backgroundImage: `url(/img/${slugify(cat.path)}.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <h3 className="relative z-10 text-5xl mb-4 uppercase font-semibold text-white drop-shadow-lg">
              {cat.categoria}
            </h3>
          </button>
        ))}
      </div>

      {/* CTA per tornare alla home */}
      <button
        onClick={() => navigate("/")}
        className="mt-12 inline-block rounded-xl px-6 py-3 text-lg font-semibold
             bg-[#7B1E26] text-[#E9D9B3] border-2 border-[#E9D9B3]
             shadow-[0_0_15px_rgba(233,217,179,0.6)]
             hover:bg-[#7B1E26]/90 active:scale-95 transition"
      >
        Dai un’occhiata alla nostra Home
      </button>
    </section>
  );
}
