import BlurText from "../BlurText";
import { Link, useNavigate } from "react-router-dom";
import { useI18n } from "../../I18nProvider";

export default function Header() {
  const { t } = useI18n();
  return (
    <header className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover md:bg-center brightness-60 pointer-events-none"
        style={{ backgroundImage: `url("/img/pizze.jpg")` }}
      />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B1B1B]/20 to-[#1B1B1B] pointer-events-none" />

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-header text-5xl md:text-6xl font-bold drop-shadow text-[#E9D9B3]">
          {t("header.title")}
        </h1>
        <BlurText
          text={t("header.subHeader")}
          delay={150}
          animateBy="letters"
          direction="top"
          className="text-2xl md:text-3xl mt-4 text-[#E9D9B3]"
        />
        <Link
          to="/menu"
          className="mt-8 inline-block rounded-xl px-6 py-3 text-lg font-semibold
                     bg-[#7B1E26] text-[#E9D9B3] shadow-lg
                     hover:bg-[#7B1E26]/90 active:scale-95 transition"
        >
          {t("header.menu") || "Guarda il nostro menù"}
        </Link>
      </div>
    </header>
  );
}
