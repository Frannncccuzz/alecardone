import { Outlet } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import Footer from "./DownSide/Footer";
import { useI18n } from "../I18nProvider";

export default function Layout() {
  const { t } = useI18n();
  
  return (
    <div className="min-h-dvh  text-white bg-[linear-gradient(356deg,rgba(123,30,38,0.89)_35%,rgba(0,0,0,1)_100%)]">
      <NavBar
        facebook={"https://www.facebook.com/share/15zqgyX4eF/?mibextid=wwXIfr"}
        insta={"https://www.instagram.com/_alessandrocardone_pizza_maker/"}
      />

      <Outlet />

      <section id="book" >
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
      </section>
    </div>
  );
}
