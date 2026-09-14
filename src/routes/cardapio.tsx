import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import paoDoDia from "@/assets/pao-do-dia.jpg";
import doceDestaque from "@/assets/doce-destaque.jpg";
import salgados from "@/assets/salgados.jpg";
import pequenoAlmoco from "@/assets/pequeno-almoco.jpg";
import kitsFestivos from "@/assets/kits-festivos.jpg";

export const Route = createFileRoute("/cardapio")({
  head: () => ({
    meta: [
      { title: "Cardápio — Pães, Pastelaria e Doces | Sabores do Bairro" },
      {
        name: "description",
        content:
          "Cardápio da confeitaria artesanal Sabores do Bairro: pães de fermentação natural, pastelaria, bolos, salgados, pequenos-almoços e kits festivos em Vila do Prado.",
      },
      { property: "og:title", content: "Cardápio Fresquinho | Sabores do Bairro" },
      {
        property: "og:description",
        content: "Pães de fermentação natural, pastelaria, salgados e kits festivos por encomenda.",
      },
    ],
    links: [{ rel: "canonical", href: "/cardapio" }],
  }),
  component: Cardapio,
});

const categorias = [
  {
    id: "paes",
    nome: "Pães de Fermentação Natural",
    img: paoDoDia,
    alt: "Pães de fermentação natural da padaria artesanal em Vila do Prado",
    produtos: [
      {
        nome: "Alentejano de massa-mãe",
        preco: "3,80 €",
        desc: "Pão de fermentação natural, crosta estaladiça e miolo macio.",
      },
      {
        nome: "Broa de milho amarelo",
        preco: "3,20 €",
        desc: "Doce no fim de boca, húmida por dentro, aroma tostado de forno de pedra.",
      },
      {
        nome: "Integral de sementes",
        preco: "4,20 €",
        desc: "Centeio, linhaça e girassol. Sabor profundo, fatia firme para torradas.",
      },
      {
        nome: "Baguete artesanal",
        preco: "1,60 €",
        desc: "Fina, ligeira e crocante — feita duas vezes por dia.",
      },
    ],
  },
  {
    id: "pastelaria",
    nome: "Pastelaria & Bolos",
    img: doceDestaque,
    alt: "Fatia de bolo artesanal com creme e frutos vermelhos",
    produtos: [
      {
        nome: "Pastel de nata",
        preco: "1,30 €",
        desc: "Massa folhada em lâminas finas, creme sedoso, topo caramelizado.",
      },
      {
        nome: "Bolo de frutos vermelhos",
        preco: "3,90 € / fatia",
        desc: "Pão-de-ló leve, creme fresco batido e compota da estação.",
      },
      {
        nome: "Tarte de amêndoa e mel",
        preco: "3,50 € / fatia",
        desc: "Recheio dourado e crocante sobre base areada de manteiga.",
      },
      {
        nome: "Bolo de cenoura com chocolate",
        preco: "3,20 € / fatia",
        desc: "Fofo, húmido e coberto por ganache morno de chocolate.",
      },
    ],
  },
  {
    id: "salgados",
    nome: "Salgados",
    img: salgados,
    alt: "Salgados portugueses fritos: rissóis, croquetes e empadas de queijo",
    produtos: [
      {
        nome: "Rissol de camarão",
        preco: "1,50 €",
        desc: "Recheio cremoso e bem temperado, panado fino e dourado.",
      },
      {
        nome: "Croquete de carne",
        preco: "1,40 €",
        desc: "Carne estufada lentamente, envolvida em pão ralado caseiro.",
      },
      {
        nome: "Empada de queijo da serra",
        preco: "1,80 €",
        desc: "Massa quebrada e queijo derretido, servida tépida.",
      },
      {
        nome: "Folhado de alheira",
        preco: "2,10 €",
        desc: "Folhado crocante com alheira artesanal do Minho.",
      },
    ],
  },
  {
    id: "pequenos-almocos",
    nome: "Pequenos-Almoços",
    img: pequenoAlmoco,
    alt: "Pequeno-almoço com café, torrada e croissant servido na esplanada",
    produtos: [
      {
        nome: "Bom dia completo",
        preco: "6,50 €",
        desc: "Café, torrada de pão caseiro com manteiga, sumo natural e croissant.",
      },
      {
        nome: "Tosta mista do bairro",
        preco: "4,20 €",
        desc: "Pão de massa-mãe, queijo derretido e presunto fatiado na hora.",
      },
      {
        nome: "Tigela de iogurte e granola",
        preco: "4,80 €",
        desc: "Iogurte natural, granola tostada em casa e fruta da estação.",
      },
      {
        nome: "Galão e pastel de nata",
        preco: "2,60 €",
        desc: "O clássico de sempre, à hora que apetecer.",
      },
    ],
  },
  {
    id: "kits",
    nome: "Kits Festivos / Encomendas Especiais",
    img: kitsFestivos,
    alt: "Bolo de festa decorado com flores brancas e detalhes dourados",
    produtos: [
      {
        nome: "Bolo personalizado",
        preco: "desde 28 €",
        desc: "Escolha sabor, tamanho e decoração — flores naturais ou detalhes dourados.",
      },
      {
        nome: "Cabaz de pequeno-almoço",
        preco: "desde 22 €",
        desc: "Pão fresco, doçaria, compota caseira e café moído para levar a casa.",
      },
      {
        nome: "Kit festa (50 salgados)",
        preco: "45 €",
        desc: "Seleção variada de salgados, prontos a servir ou a fritar em casa.",
      },
      {
        nome: "Mesa de doces para eventos",
        preco: "sob orçamento",
        desc: "Batizados, casamentos e celebrações — planeamos tudo com você.",
      },
    ],
  },
];

function Cardapio() {
  return (
    <>
      <section className="border-b border-border px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Cardápio</p>
          <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Tudo o que sai do nosso forno
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Fornadas frescas todos os dias, com fermentação lenta e ingredientes 100% selecionados.
            Alguns produtos são de produção limitada — reserve por telemóvel ou WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categorias.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="group relative overflow-hidden rounded-sm"
            >
              <img
                src={c.img}
                alt={c.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-56 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-[linear-gradient(to_top,rgba(62,42,30,0.75),transparent_65%)]" />
              <span className="absolute bottom-5 left-5 right-5 font-display text-xl text-white">
                {c.nome}
              </span>
            </a>
          ))}
        </Reveal>
      </section>

      {categorias.map((c) => (
        <section key={c.id} id={c.id} className="scroll-mt-28 border-b border-border/60 py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl">{c.nome}</h2>
            </Reveal>
            <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {c.produtos.map((p, i) => (
                <Reveal key={p.nome} delay={i * 80}>
                  <article className="border-b border-dashed border-border pb-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-lg">{p.nome}</h3>
                      <span className="whitespace-nowrap text-sm text-primary">{p.preco}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Reveal as="section" className="py-20 text-center">
        <h2 className="font-display text-3xl">Quer algo só seu?</h2>
        <p className="mx-auto mt-4 max-w-md px-6 text-sm text-muted-foreground">
          Fazemos bolos personalizados, cabazes e mesas de doces para eventos.
        </p>
        <Link to="/encomendas" className="btn-base btn-primary mt-8">
          Faça a sua Encomenda
        </Link>
      </Reveal>
    </>
  );
}
