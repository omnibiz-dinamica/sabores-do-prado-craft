import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import heroPao from "@/assets/hero-pao.jpg";
import paoDoDia from "@/assets/pao-do-dia.jpg";
import doceDestaque from "@/assets/doce-destaque.jpg";
import pequenoAlmoco from "@/assets/pequeno-almoco.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sabores do Bairro — Padaria e Confeitaria Artesanal em Vila do Prado" },
      {
        name: "description",
        content:
          "Padaria em Vila do Prado com pão de fermentação natural, pastelaria e doces feitos à mão. Fornadas frescas todos os dias e encomendas personalizadas.",
      },
      {
        property: "og:title",
        content: "Sabores do Bairro — Padaria Artesanal em Vila do Prado",
      },
      {
        property: "og:description",
        content:
          "Pães de fermentação natural, doces e pastelaria feitos à mão em Vila do Prado, Portugal.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const destaques = [
  {
    img: paoDoDia,
    alt: "Pão de fermentação natural fatiado, feito na padaria artesanal em Vila do Prado",
    tag: "Pão do dia",
    nome: "Alentejano de fermentação lenta",
    texto: "Crosta estaladiça, miolo húmido e alveolado. Sai do forno às 7h30.",
  },
  {
    img: doceDestaque,
    alt: "Fatia de bolo artesanal com frutos vermelhos e flores brancas",
    tag: "Doce em destaque",
    nome: "Bolo de frutos vermelhos",
    texto: "Camadas leves de pão-de-ló, creme fresco e compota da estação.",
  },
  {
    img: pequenoAlmoco,
    alt: "Pequeno-almoço português com café, torrada e croissant na padaria",
    tag: "Sugestão de pequeno-almoço",
    nome: "Bom dia completo",
    texto: "Café, torrada de pão caseiro com manteiga, sumo natural e um croissant.",
  },
];

const confianca = [
  "Fornadas frescas todos os dias",
  "Ingredientes 100% selecionados",
  "Fermentação lenta e natural",
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
        <img
          src={heroPao}
          alt="Pão artesanal de fermentação natural recém-saído do forno da padaria Sabores do Bairro"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(62,42,30,0.72),rgba(62,42,30,0.28))]" />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center text-white">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/80">
              Vila do Prado · Portugal
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
              Sabor artesanal, do nosso forno direto para o seu dia.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85">
              Pães de fermentação natural, doces e pastelaria feitos à mão em Vila do Prado.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/cardapio" className="btn-base btn-primary w-full sm:w-auto">
                Ver Cardápio Fresquinho
              </Link>
              <Link to="/encomendas" className="btn-base btn-ghost-light w-full sm:w-auto">
                Fazer Encomenda
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Prova social */}
      <Reveal as="section" className="border-b border-border py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="flex items-center justify-center gap-1 text-[var(--gold)]" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 2l2.9 6.3 6.9.8-5 4.7 1.3 6.8L12 17.4 5.9 20.6 7.2 13.8l-5-4.7 6.9-.8L12 2z" />
              </svg>
            ))}
          </div>
          <p className="mt-4 font-display text-2xl leading-snug sm:text-3xl">
            «Mais de 130 clientes apaixonados pelo nosso pão.»
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            4,9 em 5 nas avaliações do Google · Vila do Prado
          </p>
        </div>
      </Reveal>

      {/* Destaques do dia */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Hoje no balcão</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              Tradição em cada fatia. Adoce a sua rotina com receitas exclusivas.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {destaques.map((d, i) => (
              <Reveal key={d.nome} delay={i * 120}>
                <article>
                  <div className="overflow-hidden rounded-sm bg-muted">
                    <img
                      src={d.img}
                      alt={d.alt}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="h-72 w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-5 text-[0.65rem] uppercase tracking-[0.22em] text-[var(--sage)]">
                    {d.tag}
                  </p>
                  <h3 className="mt-2 font-display text-xl">{d.nome}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gatilhos de confiança */}
      <Reveal as="section" className="border-y border-border bg-accent/60 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 text-sm sm:flex-row">
          {confianca.map((c) => (
            <p key={c} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              {c}
            </p>
          ))}
        </div>
      </Reveal>

      {/* Faixa final */}
      <section className="py-24 sm:py-32">
        <Reveal className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">Passe por cá</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              Espaço acolhedor com esplanada exterior
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{site.morada}</p>
            <ul className="mt-6 space-y-1.5 text-sm">
              {site.horario.map((h) => (
                <li key={h.dias} className="flex justify-between gap-6 border-b border-border/60 py-1.5">
                  <span className="text-muted-foreground">{h.dias}</span>
                  <span>{h.horas}</span>
                </li>
              ))}
            </ul>
            <a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-outline mt-8"
            >
              Abrir no mapa
            </a>
          </div>
          <img
            src={pequenoAlmoco}
            alt="Mesa de pequeno-almoço na esplanada da padaria em Vila do Prado"
            loading="lazy"
            width={1024}
            height={1024}
            className="h-[26rem] w-full rounded-sm object-cover"
          />
        </Reveal>
      </section>
    </>
  );
}
