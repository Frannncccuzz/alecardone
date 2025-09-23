// Componenti
import Logo from "../components/loghi";
import Header from "../components/Header/Header";
import PizzaChef from "../components/Header/PizzaChef";
import DomeGallery from "../components/Header/DomeGallery";
import Review from "../components/DownSide/Review";
import { useI18n } from "../I18nProvider";
import { galleryImages } from "../assets/img/loghi/manifest.js";
import Footer from "../components/DownSide/Footer.jsx";


export default function Home() {
  const { t } = useI18n();

  return (
    <main
      className="relative w-full min-h-screen text-white bg-[#1B1B1B]
                 pb-20 md:pb-0" // <-- spazio extra per la bottom bar su mobile
    >
      <Header />
      

      <PizzaChef
        title={t("alessandroSection.firstTitle")}
        descriptionTitle={t("alessandroSection.firstSubTitle")}
        img={"/img/alessandro.jpg"}
        align="sx"
        description={t("alessandroSection.firstDescription")}
      />
      <PizzaChef
        title={t("alessandroSection.secondTitle")}
        descriptionTitle={t("alessandroSection.secondSubTitle")}
        img={"/img/aleteacher.jpg"}
        align="dx"
        description={t("alessandroSection.secondDescription")}
      />
      <PizzaChef
        title={t("alessandroSection.thirdTitle")}
        descriptionTitle={t("alessandroSection.thirdSubTitle")}
        img={"/img/Pizzaiolo.jpg"}
        align="sx"
        premi={t("alessandroSection.thirdDescription")}
      />

      <section className="h-screen w-screen md:mb-30">
        <DomeGallery />
      </section>

      <section className="top-50 text-center text-2xl uppercase mt-4 md:text-5xl">
        <h1 className="mb-10">{t("DownSide.partner")}</h1>
        <ul className="flex flex-wrap gap-10 justify-center mt-20 items-center">
          {galleryImages.map((logo, logoInx) => (
            <Logo key={logoInx} img={logo.src} alt={logo.alt} />
          ))}
        </ul>
      </section>

      <section className="container mx-auto px-4 py-10 flex flex-col md:flex-row md:flex-wrap justify-evenly items-stretch">
        <Review
          title={t("DownSide.feedback")}
          button={t("DownSide.buttonFeed")}
        />
      </section>

      <Footer
        facebook={"https://www.facebook.com/share/15zqgyX4eF/?mibextid=wwXIfr"}
        insta={"https://www.instagram.com/_alessandrocardone_pizza_maker/"}
        book={t("DownSide.book")}
        nome={t("DownSide.nome")}
        email={t("DownSide.email")}
        telefono={t("DownSide.telefono")}
        persone={t("DownSide.persone")}
      />

    </main>
  );
}
