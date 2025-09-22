import BlurText from "../BlurText";
import homeImg from "../../assets/Img/Pizzaimg.jpg";
import { useI18n } from "../../I18nProvider";

export default function Header() {
  const { t } = useI18n();
  return (
    <header className="relative h-screen overflow-hidden">
      <div
        className="absolute blur-md inset-0 z-3 bg-cover md:bg-center brightness-60"
        style={{ backgroundImage: `url("/img/Pizzaimg.jpg")` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B1B1B]/20 to-[#1B1B1B]" />
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow">
          {t("header.title")}
        </h1>
        <BlurText
          text={t("header.subHeader")}
          delay={150}
          animateBy="letters"
          direction="top"
          className="text-2xl md:text-3xl mt-4"
        />
      </div>
    </header>
  );
}
