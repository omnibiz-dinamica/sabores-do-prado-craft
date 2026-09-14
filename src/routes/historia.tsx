import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import espaco from "@/assets/espaco.jpg";
import esplanada from "@/assets/esplanada.jpg";

export const Route = createFileRoute("/historia")({
  head: () => ({
    meta: [
      { title: "Nossa História — Confeitaria Artesanal | Sabores do Bairro" },
      {
        name: "description",
        content:
          "A história da Sabores do Bairro: tradição familiar entre o Brasil e Portugal, método artesanal, fermentação lenta e ingredientes locais em Vila do Prado.",
      },
      { property: "og:title", content: "Nossa História | Sabores do Bairro" },
      {
        property: "og:description",
        content:
          "Tradição familiar, método artesanal e ingredientes locais numa padaria de bairro em Vila do Prado.",
      },
    ],
    links: [{ rel: "canonical", href: "/historia" }],
  }),
  component: Historia,
});

const pilares = [
  {
    titulo: "Tradição",
    texto:
      "Receitas passadas de mão em mão, entre gerações que aprenderam a amassar antes de saber ler.",
  },
  {
    titulo: "Artesanal",
    texto:
      "Nada de atalhos: massa-mãe alimentada todos os dias, fermentação lenta e forno acompanhado de perto.",
  },
  {
    titulo: "Comunidade",
    texto:
      "Um bairro que se encontra ao balcão. Conhecemos os nomes, os cafés e os pães de cada cliente.",
  },
];

const marcos = [
  { ano: "As raízes", texto: "Uma cozinha de família no Brasil, onde os bolos de festa nasceram." },
  { ano: "A chegada", texto: "Vila do Prado acolheu-nos e ensinou-nos o pão português." },
  { ano: "O forno", texto: "Abrimos portas com massa-mãe própria e uma esplanada ao sol." },
  { ano: "Hoje", texto: "Fornadas frescas todos os dias e encomendas para as festas do bairro." },
];

function Historia() {
  return (
    <>
      <section className="px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Nossa História</p>
          <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Duas terras, um mesmo forno
          </h1>
        </Reveal>
        <Reveal delay={150} className="mx-auto mt-12 max-w-3xl space-y-6 text-[0.95rem] leading-[1.9] text-foreground/85">
          <p>
            A Sabores do Bairro começou muito antes de ter porta e balcão. Começou numa cozinha de
            família, onde os bolos de festa se decoravam à mão e o cheiro do forno anunciava que havia
            alguém para receber. Trouxemos essa memória do Brasil e plantámo-la em Vila do Prado, onde
            aprendemos o tempo calmo do pão português.
          </p>
          <p>
            Hoje trabalhamos como sempre se trabalhou: massa-mãe alimentada todos os dias, fermentação
            lenta de mais de vinte horas, farinhas de moagem nacional, ovos e leite de produtores da
            região, fruta comprada à estação. Não há pressa que melhore uma massa — e sente-se na
            crosta, no miolo e no fim de boca.
          </p>
          <p>
            O resto acontece ao balcão: um café servido devagar, um pão que se leva ainda tépido, um
            bolo encomendado para uma data importante. É esse o bairro que quisemos construir.
          </p>
        </Reveal>
      </section>

      <section className="py-8">
        <Reveal className="mx-auto grid max-w-6xl gap-4 px-5 sm:px-8 md:grid-cols-2">
          <img
            src={espaco}
            alt="Interior acolhedor da padaria artesanal Sabores do Bairro em Vila do Prado"
            loading="lazy"
            width={1408}
            height={1008}
            className="h-80 w-full rounded-sm object-cover md:h-[28rem]"
          />
          <img
            src={esplanada}
            alt="Esplanada exterior da confeitaria com mesas de madeira e flores"
            loading="lazy"
            width={1408}
            height={1008}
            className="h-80 w-full rounded-sm object-cover md:h-[28rem]"
          />
        </Reveal>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">Três pilares</h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {pilares.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 120}>
                <div className="border-t border-primary/40 pt-6">
                  <h3 className="font-display text-2xl">{p.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-accent/50 py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">O caminho até aqui</h2>
          </Reveal>
          <ol className="mt-10 space-y-8">
            {marcos.map((m, i) => (
              <Reveal as="li" key={m.ano} delay={i * 100}>
                <div className="flex gap-6">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <div>
                    <p className="font-display text-lg">{m.ano}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.texto}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Reveal as="section" className="py-20 text-center">
        <h2 className="font-display text-3xl">Venha provar o nosso tempo</h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/cardapio" className="btn-base btn-primary">
            Ver Cardápio Fresquinho
          </Link>
          <Link to="/encomendas" className="btn-base btn-outline">
            Fale connosco
          </Link>
        </div>
      </Reveal>
    </>
  );
}
