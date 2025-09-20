import Element from "./Element";
import { useI18n } from "../../I18nProvider";
import LanguageSelect from "./LanguageSelect";
import SocialButton from "../DownSide/SocialButton";


export default function NavBar({ facebook, insta }) {
  const { t } = useI18n();

  return (
    <nav
      className="fixed top-0 left-0 w-full flex justify-between items-center z-50 h-16 
                 bg-[#1B1B1B]/70 backdrop-blur-md border-b border-[#E9D9B3]/10 px-6"
    >
      <div className="flex items-center">
        <LanguageSelect />
      </div>

      <ul className="flex gap-5 items-center text-lg font-medium list-none p-0 m-0 text-[#E9D9B3]">
        <Element destination="/menu">{t("nav.menu")}</Element>
        <Element destination="/" dimension="text-2xl text-[#7B1E26]">
          {t("nav.home")}
        </Element>
        <Element destination="#book">{t("nav.book")}</Element>
      </ul>
      <div className="w-[100px]">
        <ul className="flex ">
          <SocialButton href={facebook}>
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/ios/50/FFFFFF/facebook-new.png"
              alt="facebook-new"
            />
          </SocialButton>
          <SocialButton href={insta}>
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/ios-glyphs/60/FFFFFF/instagram-new.png"
              alt="instagram-new"
            />
          </SocialButton>
        </ul>
      </div>
    </nav>
  );
}
