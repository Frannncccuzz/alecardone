import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefono: "",
    persone: "",
    data: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("it-IT", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = formatDate(form.data);

    const message = `Ciao, sono ${form.nome}.
    Questa è la mia Email: ${form.email}
    Vorrei prenotare un tavolo${
      formattedDate ? ` per ${formattedDate}` : ""
    } per ${form.persone} persone.`;

    const phoneNumber = "393465193389";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label
          htmlFor="nome"
          className="block text-sm font-medium text-gray-200 mb-2"
        >
          Nome
        </label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 p-3 bg-white text-gray-900 focus:ring-2 focus:ring-[#7B1E26] focus:border-transparent"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-200 mb-2"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 p-3 bg-white text-gray-900 focus:ring-2 focus:ring-[#7B1E26] focus:border-transparent"
          required
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="flex-1 min-w-[150px]">
          <label
            htmlFor="data"
            className="block text-sm font-medium text-gray-200 mb-2"
          >
            Data prenotazione
          </label>
          <input
            id="data"
            type="date"
            name="data"
            value={form.data}
            onChange={handleChange}
            min={today}
            className="w-full rounded-xl border border-gray-300 p-3 bg-white text-gray-900 focus:ring-2 focus:ring-[#7B1E26] focus:border-transparent"
          />
        </div>

        <div className="flex-1 min-w-[120px]">
          <label
            htmlFor="persone"
            className="block text-sm font-medium text-gray-200 mb-2"
          >
            Numero persone
          </label>
          <select
            id="persone"
            name="persone"
            value={form.persone}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3 bg-white text-gray-900 focus:ring-2 focus:ring-[#7B1E26] focus:border-transparent"
            required
          >
            <option value="">Seleziona...</option>
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i === 0 ? "persona" : "persone"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl mt-5 bg-[#7B1E26] py-3 text-[#E9D9B3] font-semibold hover:bg-[#C7362F] transition duration-200 focus:ring-2 focus:ring-[#7B1E26] focus:ring-offset-2"
      >
        📱 Invia tramite WhatsApp
      </button>
    </form>
  );
}
