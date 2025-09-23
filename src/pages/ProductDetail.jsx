// src/pages/ProductDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useI18n } from "../I18nProvider";
import { useMemo } from "react";
import { useEffect } from "react";

const slugify = (str) =>
  str
    ?.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ProductDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { category, productId } = useParams();
  const { t } = useI18n();
  const navigate = useNavigate();

  const categories = t("menu", { returnObjects: true }) || [];
  const currentCategory = categories.find(
    (c) => slugify(c.categoria) === category
  );
  const product = useMemo(() => {
    if (!currentCategory) return null;

    if (currentCategory.tipologie) {
      for (const tip of currentCategory.tipologie) {
        const found = tip.piatti.find((p) => slugify(p.nome) === productId);
        if (found) return found;
      }
    }
    return currentCategory.piatti?.find((p) => slugify(p.nome) === productId);
  }, [currentCategory, productId]);

  if (!product) {
    return (
      <section className="p-6 text-center">
        <h1 className="text-2xl font-bold">Prodotto non trovato</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-[#7B1E26] underline"
        >
          Torna indietro
        </button>
      </section>
    );
  }

  return (
    <section className=" px-6 py-23 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={product.img}
            alt={product.nome}
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold uppercase mb-4">
            {product.nome}
          </h1>

          {product.descrizione && (
            <p className="mb-4 leading-relaxed">{product.descrizione}</p>
          )}

          {Array.isArray(product.allergeni) && product.allergeni.length > 0 && (
            <div className="mb-4">
              <h2 className="font-semibold mb-1">Allergeni</h2>
              <ul className="list-disc ml-5 text-sm">
                {product.allergeni.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          )}

          {typeof product.prezzo === "number" && (
            <p className="text-2xl font-semibold">{product.prezzo.toFixed(2)}€</p>
          )}
        </div>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-10 flex items-center gap-2 text-lg font-medium hover:underline"
      >
        ← Torna indietro
      </button>
    </section>
  );
}
