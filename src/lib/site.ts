/**
 * Configuração central do site "Sabores do Bairro".
 *
 * WEBHOOK_URL: coloque aqui o URL do webhook do n8n / Make que vai receber
 * os pedidos de encomenda enviados pelo formulário da página /encomendas.
 * Enquanto estiver vazio, o formulário mostra os dados na consola e confirma
 * ao cliente sem enviar para nenhum serviço externo.
 */
export const WEBHOOK_URL = "";

export const site = {
  nome: "Sabores do Bairro",
  telemovel: "+351 253 183 391",
  telemovelLink: "tel:+351253183391",
  whatsapp:
    "https://wa.me/351253183391?text=" +
    encodeURIComponent("Olá! Gostaria de fazer uma encomenda 🍞🍰"),
  instagram: "https://instagram.com/saboresdobairro.prado",
  instagramHandle: "@saboresdobairro.prado",
  morada: "Rua Júlio Dinis, 4730-458, Vila do Prado, Portugal",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Rua Júlio Dinis, 4730-458, Vila do Prado, Portugal"),
  mapsEmbed:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Rua Júlio Dinis, 4730-458, Vila do Prado, Portugal") +
    "&output=embed",
  horario: [
    { dias: "Segunda a sexta", horas: "07:00 — 19:30" },
    { dias: "Sábado", horas: "07:30 — 19:00" },
    { dias: "Domingo", horas: "08:00 — 13:00" },
  ],
};
