import { useState } from "react";

export default function ContactForm({ nome, email, telefono, persone }) {
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
${form.telefono ? `Telefono: ${form.telefono}` : ""}
Vorrei prenotare un tavolo${formattedDate ? `per ${formattedDate}` : ""} per ${
      form.persone
    } persone.`;

    const phoneNumber = "393465193389";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };
  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="nome"
        placeholder={nome}
        value={form.nome}
        onChange={handleChange}
        className="w-full rounded-xl border border-gray-300 p-3 bg-white text-gray-900"
        required
      />
      <input
        type="email"
        name="email"
        placeholder={email}
        value={form.email}
        onChange={handleChange}
        className="w-full rounded-xl border border-gray-300 p-3 bg-white text-gray-900"
        required
      />
      <div className="flex flex-wrap gap-3">
        <input
          type="date"
          name="data"
          value={form.data}
          onChange={handleChange}
          min={today} 
          className="flex-1 min-w-[150px] rounded-xl border border-gray-300 p-3 bg-white text-gray-900"
        />
        <select
          name="persone"
          value={form.persone}
          onChange={handleChange}
          className="flex-1 min-w-[120px] rounded-xl border border-gray-300 p-3 bg-white text-gray-900"
          required

        >
          <option value="">{persone}</option>
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-[#7B1E26] py-3 text-[#E9D9B3] font-semibold hover:bg-[#C7362F] transition"
      >
        Invia tramite WhatsApp
      </button>
    </form>
  );
}
