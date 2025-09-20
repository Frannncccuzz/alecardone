
import placeHolder from "../assets/Img/BookPage/rosadeiventi.png"
export default function ShowDish({ piatto }) {
  const nome = piatto?.nome ?? "Senza titolo";
  const descrizione = piatto?.descrizione ?? "";
  const prezzo =
    typeof piatto?.prezzo === "number" ? piatto.prezzo.toFixed(2) : "—";
  const allergeni = Array.isArray(piatto?.allergeni) ? piatto.allergeni : [];
  const imgSrc = piatto?.img || placeHolder; 

  return (
    <div
      className="bg-transparent backdrop-blur-sm rounded-xl w-full max-w-4xl mx-auto 
                    flex flex-col md:flex-row justify-between items-start md:items-center 
                    p-6 gap-6 shadow-xl ring-1 ring-[#8B5E3C] transition-transform duration-300 
                    ease-out hover:scale-105 hover:-translate-y-1"
    >
      <div className="w-full md:w-48 h-48 flex-shrink-0">
        <img
          src={imgSrc}
          alt={nome}
          className="w-full h-full object-cover rounded-lg shadow"
          onError={(e) => {
            e.currentTarget.src = "/img/placeholder-dish.jpg";
          }}
        />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-2">{nome}</h2>
        {descrizione && <p className="text-base mb-3">{descrizione}</p>}

        {allergeni.length > 0 && (
          <>
            <h4 className="mb-1 text-lg font-bold">ALLERGENI:</h4>
            <ul className="list-disc list-inside text-sm space-y-1">
              {allergeni.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="md:pl-5">
        <h3 className="text-3xl font-bold">{prezzo}€</h3>
      </div>
    </div>
  );
}
