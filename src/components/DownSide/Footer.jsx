import Button from "../Button";
import BlurText from "../BlurText";
import SocialButton from "./SocialButton";
import ContactForm from "../ContactForm";

export default function Footer({
  book,
  nome,
  email,
  telefono,
  persone,
  facebook,
  insta,
}) {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-5xl text-[#E9D9B3] ">
            <BlurText
              text={book}
              delay={150}
              animateBy="words"
              direction="top"
              className="text-2xl md:text-5xl mt-1 justify-center"
            />
          </h2>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.134720394025!2d8.72921847694962!3d45.08704105935205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47874104d2d3f6df%3A0x545c2a05361f807e!2sViale%20Unione%20Sovietica%2C%2057%2C%2027035%20Mede%20PV!5e0!3m2!1sit!2sit!4v1694966745623!5m2!1sit!2sit"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="bg-[#3E2C26] p-6 rounded-2xl shadow-lg">
            <h3 className="text-3xl text-center font-semibold text-[#E9D9B3] mb-4">
              Contattaci
            </h3>
            <ContactForm
              nome={nome}
              email={email}
              telefono={telefono}
              persone = {persone}
            />
          </div>
        </div>
      </div>
      <footer>
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-10">
          <div className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24 dark:border-gray-800">
            <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                >
                  Cookies
                </a>
              </li>
            </ul>
            <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
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
        </div>
      </footer>
    </section>
  );
}
