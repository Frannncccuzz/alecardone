import { useMemo, useState, useEffect, useCallback } from "react";
import { useI18n } from "../I18nProvider";
import pizza from "../assets/img/pizzaale.jpg"



import Footer from "../components/DownSide/Footer";
import ShowDish from "../components/ShowDish";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";

const slugify = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");


export default function Menu() {
  const navigate = useNavigate();
  const { t } = useI18n();

  const categories = t("menu", { returnObjects: true });
 
  const handleClickCategory = (categoria) => {
    navigate(`/${slugify(categoria)}`);
  };
 
  return (
    <section className="pt-30 pb-10 flex flex-col items-center md:mx-5 xl:mx-70">
      <h1 className="text-4xl md:text-5xl font-bold uppercase mb-15">
        {t("header.menu")}
      </h1>

      <div className="flex justify-center gap-5 xl:gap-10 flex-wrap">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => handleClickCategory(cat.categoria)}
            className="relative flex justify-center items-end w-80 h-50 rounded-3xl md:w-90 md:h-60 xl:w-120 xl:h-80 overflow-hidden"
            style={{
              backgroundImage: `url(${pizza})`,
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <h3 className="relative z-10 text-5xl mb-4 uppercase font-semibold text-white drop-shadow-lg">
              {cat.categoria}
            </h3>
          </button>
        ))}
      </div>
    </section>
  );
  
}
