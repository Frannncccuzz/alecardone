//Componenti
import Logo from "../components/loghi";
import Header from "../components/Header/Header";
import PizzaChef from "../components/Header/PizzaChef";
import DomeGallery from "../components/Header/DomeGallery";
import Review from "../components/DownSide/Review";
import Footer from "../components/DownSide/Footer";
import { useI18n } from "../I18nProvider";

//immagini
import pizzaChefImg from "../assets/img/alessandro.jpg";
import pizzaFront from "../assets/img/Pizzaiolo.jpg";
import pizzaAle from "../assets/img/pizzaAle.jpg";

const galleryModules = import.meta.glob(
  "../assets/img/Loghi/*.{jpg,jpeg,png,webp}",
  { eager: true, as: "url" }
);

const galleryImages = Object.entries(galleryModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, url]) => {
    const fileName = path.replace(/\\/g, "/").split("/").pop(); // safe cross-platform
    return {
      src: url,
      alt: fileName
        ? fileName.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ")
        : "image",
    };
  });

export default function Home() {

  const { t } = useI18n();
  return (
    <main className="relative w-full min-h-screen text-white
                 bg-[#1B1B1B]">
      <Header></Header>
      <PizzaChef
        title={t("alessandroSection.firstTitle")}
        descriptionTitle={t("alessandroSection.firstSubTitle")}
        img={pizzaChefImg}
        align="sx"
        description={t("alessandroSection.firstDescription")}
      />
      <PizzaChef
        title={t("alessandroSection.secondTitle")}
        descriptionTitle={t("alessandroSection.secondSubTitle")}
        img={pizzaAle}
        align="dx"
        description={t("alessandroSection.secondDescription")}
      />
      <PizzaChef
        title={t("alessandroSection.thirdTitle")}
        descriptionTitle={t("alessandroSection.thirdSubTitle")}
        img={pizzaFront}
        align="sx"
        premi={t("alessandroSection.thirdDescription")}
      />
      <section className="h-screen w-screen md:mb-30">
        <DomeGallery />
      </section>

      <section className=" top-50 text-center text-2xl uppercase mt-4 md:text-5xl">
        <h1 className="mb-10">{t("DownSide.partner")}</h1>
        <ul className="flex flex-wrap gap-10 justify-center mt-20 items-center">
          {galleryImages.map((logo, logoInx) => (
            <Logo key={logoInx} img={logo.src} alt={logo.alt} />
          ))}
        </ul>
      </section>
      <section className="container mx-auto px-4 py-10 flex flex-col md:flex-row md:flex-wrap  justify-evenly items-stretch">
        <Review
          title={t("DownSide.feedback")}
          button={t("DownSide.buttonFeed")}
        />
      </section>
    </main>
  );
}

