// src/pages/Products.jsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { useI18n } from "../I18nProvider";
import { useMemo, useState } from "react";

const slugify = (str) =>
  str
    ?.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function Products() {
  const { category } = useParams(); // es: "antipasti" | "bevande" | "vini"
  const { t } = useI18n();
  const navigate = useNavigate();

  const categories = t("menu", { returnObjects: true }) || [];

  const currentCategory = useMemo(
    () => categories.find((c) => slugify(c.categoria) === category),
    [categories, category]
  );

  if (!currentCategory) {
    return (
      <section className="p-6">
        <h1 className="text-2xl font-bold">Categoria non trovata</h1>
      </section>
    );
  }

  const tipologie = currentCategory.tipologie ?? [];
  const hasTipologie = tipologie.length > 0;
  const [activeSub, setActiveSub] = useState(
    hasTipologie ? tipologie[0].nome : null
  );

  const dishes = useMemo(() => {
    if (hasTipologie) {
      const sub = tipologie.find((s) => s.nome === activeSub);
      return sub?.piatti ?? [];
    }
    return currentCategory.piatti ?? [];
  }, [hasTipologie, tipologie, activeSub, currentCategory]);

  return (
    <section className="px-6 p-10 h-auto flex flex-col items-center ">
      <h1 className="text-4xl md:text-5xl font-bold uppercase mt-10 mb-6">
        {currentCategory.categoria}
      </h1>

      {hasTipologie && (
        <div className="w-full md:flex md:justify-center overflow-x-auto mb-8">
          <div className="flex gap-3 pb-4">
            {tipologie.map((s, i) => {
              const active = s.nome === activeSub;
              return (
                <button
                  key={i}
                  onClick={() => setActiveSub(s.nome)}
                  className={`flex-shrink-0 px-5 py-2 rounded-full font-semibold transition
            ${
              active
                ? "bg-[#7B1E26] text-[#E9D9B3]"
                : "bg-neutral-200 hover:bg-neutral-300"
            }`}
                >
                  {s.nome}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-6xl">
        {dishes.map((p, i) => {
          const productSlug = slugify(p.nome);
          return (
            <Link
              key={i}
              to={`/${category}/${productSlug}`}
              className="rounded-2xl overflow-hidden shadow bg-gradient-to-t from-black to-[rgba(123,30,38,0.89)] focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <div className="h-36 bg-gradient-to-b from-gray-400 to-black flex items-center justify-center">
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.nome}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-white/70">Ancora da caricare</span>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{p.nome}</h3>
                  {typeof p.prezzo === "number" && (
                    <span className="font-medium  text-md">{p.prezzo.toFixed(2)}€</span>
                  )}
                </div>

                {Array.isArray(p.allergeni) && p.allergeni.length > 0 && (
                  <p className="text-xs italic mt-2">
                    Allergeni: {p.allergeni.join(", ")}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-lg font-medium hover:underline pt-10"
      >
        ← Torna indietro
      </button>
    </section>
  );
}
