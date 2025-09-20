import { li } from "motion/react-client";

export default function PizzaChef({
  img,
  title,
  align,
  descriptionTitle,
  description = "",
  alt = "none",
  premi = false,
}) {
  
const premiazioni = (
  <ul className="list-disc list-inside space-y-2 text-[#E9D9B3]">
    {Array.isArray(premi) && premi.map((p, i) => <li key={i}>{p}</li>)}
  </ul>
);


  return (
    <section className="w-full pt-10 bg-[#1B1B1B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          <div
            className={`flex flex-col justify-center 
                        order-2 ${
                          align === "sx" ? "md:order-1" : "md:order-2"
                        }`}>
            <h2
              className={`text-4xl md:text-5xl font-semibold text-center mb-1 text-[#E9D9B3] leading-tight 
                          ${align === "sx" ? "md:text-left" : "md:text-right"}`}>
              {title}
            </h2>
            <h3
              className={`text-md text-center md:text-xl font-semibold mb-6 text-[#E9D9B3] leading-tight 
                          ${align === "sx" ? "md:text-left" : "md:text-right"}`}>
              {descriptionTitle}
            </h3>

            <div
              className={`space-y-4 text-center ${
                align === "sx" ? "md:text-left" : "md:text-right"
              }`}>
              {premi ? (
                premiazioni
              ) : (
                <p className="text-[#E9D9B3]/90 leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          </div>
          <div
            className={`relative rounded-2xl overflow-hidden 
                      order-1 ${
                      align === "sx" ? "md:order-2" : "md:order-1"}`}>
            <img
              src={img}
              alt={alt}
              className="block w-full h-auto"
              loading="lazy"/>
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#1B1B1B] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1B1B1B] to-transparent" />
            <div className="absolute top-0 bottom-0 left-0 w-28 sm:w-32 md:w-36 lg:w-44 bg-gradient-to-r from-[#1B1B1B] to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-28 sm:w-32 md:w-36 lg:w-44 bg-gradient-to-l from-[#1B1B1B] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
