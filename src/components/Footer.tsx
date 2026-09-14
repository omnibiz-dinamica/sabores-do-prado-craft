import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[color-mix(in_oklab,var(--background)_88%,var(--accent))]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl">Sabores do Bairro</h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Padaria e confeitaria artesanal em Vila do Prado. Fermentação lenta, ingredientes
            selecionados e espaço acolhedor com esplanada exterior.
          </p>
        </div>

        <div className="text-sm">
          <p className="eyebrow">Visite-nos</p>
          <p className="mt-3 leading-relaxed">{site.morada}</p>
          <a
            href={site.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-primary underline-offset-4 hover:underline"
          >
            Ver no mapa
          </a>
          <p className="mt-5">
            <a href={site.telemovelLink} className="hover:text-primary">
              {site.telemovel}
            </a>
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block hover:text-primary"
          >
            {site.instagramHandle}
          </a>
        </div>

        <div className="text-sm">
          <p className="eyebrow">Horário</p>
          <ul className="mt-3 space-y-1.5 text-muted-foreground">
            {site.horario.map((h) => (
              <li key={h.dias} className="flex justify-between gap-4">
                <span>{h.dias}</span>
                <span className="text-foreground">{h.horas}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-2">
            <Link to="/cardapio" className="text-primary hover:underline">
              Ver Cardápio Fresquinho
            </Link>
            <Link to="/encomendas" className="text-primary hover:underline">
              Faça a sua Encomenda
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border/70 px-5 py-6 text-center text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} Sabores do Bairro · Vila do Prado, Portugal
      </div>
    </footer>
  );
}
