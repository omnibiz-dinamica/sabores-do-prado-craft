import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { site, WEBHOOK_URL } from "@/lib/site";

export const Route = createFileRoute("/encomendas")({
  head: () => ({
    meta: [
      { title: "Encomendas e Contacto — Bolos Personalizados | Sabores do Bairro" },
      {
        name: "description",
        content:
          "Encomende bolos personalizados, cabazes e salgados para eventos na padaria Sabores do Bairro, Vila do Prado. Telemóvel +351 253 183 391.",
      },
      { property: "og:title", content: "Encomendas | Sabores do Bairro" },
      {
        property: "og:description",
        content:
          "Bolos personalizados, kits festivos e mesas de doces por encomenda em Vila do Prado.",
      },
    ],
    links: [{ rel: "canonical", href: "/encomendas" }],
  }),
  component: Encomendas;
});

const tipos = [
  "Bolo personalizado",
  "Kit festivo / salgados",
  "Cabaz de pequeno-almoço",
  "Mesa de doces para evento",
  "Outro pedido",
];

function Encomendas() {
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "erro">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const dados = Object.fromEntries(new FormData(form).entries());
    const payload = { ...dados, origem: "site-sabores-do-bairro", enviadoEm: new Date().toISOString() };

    setEstado("enviando");
    try {
      if (WEBHOOK_URL) {
        const resposta = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!resposta.ok) throw new Error(`Webhook respondeu ${resposta.status}`);
      } else {
        console.info("[Encomenda] WEBHOOK_URL não configurado. Payload:", payload);
      }
      form.reset();
      setEstado("ok");
    } catch (erro) {
      console.error(erro);
      setEstado("erro");
    }
  }

  return (
    <>
      <section className="px-5 pb-14 pt-20 sm:px-8 sm:pt-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Encomendas</p>
          <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Bolos e festas feitos à sua medida
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Preencha o pedido e respondemos no mesmo dia, dentro do horário da loja. Para datas muito
            próximas, prefira o WhatsApp.
          </p>
        </Reveal>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="space-y-5">
              <Campo label="Nome" name="nome" required autoComplete="name" />
              <Campo
                label="Telemóvel"
                name="telemovel"
                type="tel"
                required
                autoComplete="tel"
                placeholder="+351 ..."
              />
              <Campo label="Data pretendida" name="data" type="date" required />

              <label className="block">
                <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Tipo de encomenda
                </span>
                <select
                  name="tipo"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                >
                  <option value="" disabled>
                    Escolha uma opção
                  </option>
                  {tipos.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Mensagem
                </span>
                <textarea
                  name="mensagem"
                  rows={5}
                  placeholder="Conte-nos o sabor, o número de pessoas e a decoração que imagina."
                  className="mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>

              <button
                type="submit"
                disabled={estado === "enviando"}
                className="btn-base btn-primary w-full disabled:opacity-60"
              >
                {estado === "enviando" ? "A enviar..." : "Enviar Pedido de Encomenda"}
              </button>

              {estado === "ok" && (
                <p className="rounded-sm bg-[var(--sage)]/15 px-4 py-3 text-sm">
                  Pedido recebido, obrigado! Entramos em contacto pelo telemóvel indicado.
                </p>
              )}
              {estado === "erro" && (
                <p className="rounded-sm bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  Não foi possível enviar o pedido. Tente novamente ou fale connosco no WhatsApp.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={140} className="space-y-8">
            <div>
              <p className="eyebrow">Contactos</p>
              <p className="mt-4 text-sm leading-relaxed">
                <a href={site.telemovelLink} className="hover:text-primary">
                  {site.telemovel}
                </a>
                <br />
                {site.morada}
                <br />
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {site.instagramHandle}
                </a>
              </p>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-outline mt-6"
              >
                Fale connosco no WhatsApp
              </a>
            </div>

            <div>
              <p className="eyebrow">Horário</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {site.horario.map((h) => (
                  <li key={h.dias} className="flex justify-between gap-6 border-b border-border/60 py-1.5">
                    <span className="text-muted-foreground">{h.dias}</span>
                    <span>{h.horas}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-sm border border-border">
              <iframe
                title="Mapa da padaria Sabores do Bairro em Vila do Prado"
                src={site.mapsEmbed}
                loading="lazy"
                className="h-72 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Campo({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</span>
      <input
        {...props}
        className="mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </label>
  );
}
