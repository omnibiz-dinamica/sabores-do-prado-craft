import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Início" },
  { to: "/cardapio", label: "Cardápio" },
  { to: "/historia", label: "Nossa História" },
  { to: "/encomendas", label: "Encomendas" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 shadow-[0_6px_24px_-16px_rgba(62,42,30,0.45)] backdrop-blur-md"
          : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="leading-none" onClick={() => setOpen(false)}>
          <span className="block font-display text-lg tracking-tight sm:text-xl">
            Sabores do Bairro
          </span>
          <span className="mt-0.5 block text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
            Padaria &amp; Confeitaria
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/encomendas" className="btn-base btn-primary !px-5 !py-2.5 text-sm">
            Fazer Encomenda
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
          className="md:hidden"
        >
          <span className="block h-px w-6 bg-foreground" />
          <span className="mt-1.5 block h-px w-6 bg-foreground" />
          <span className="mt-1.5 block h-px w-4 bg-foreground" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 font-display text-lg"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
