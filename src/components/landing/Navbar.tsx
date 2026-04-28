import { useEffect, useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, INSTAGRAM_URL } from "./WhatsAppFloat";

const links = [
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#sobre", label: "A Clínica" },
  { href: "#resultados", label: "Resultados" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md shadow-card-lux py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between gap-4">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-xl tracking-tight text-primary sm:text-2xl">Maison Estética</span>
          <span className="text-[9px] tracking-luxury uppercase text-muted-foreground mt-1 sm:text-[10px]">
            Clínica Premium
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="lux-link text-[11px] tracking-elegant uppercase text-primary/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-primary/70 hover:text-accent transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <Button asChild variant="luxury" size="default">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Agendar avaliação</a>
          </Button>
        </div>

        <button
          className="lg:hidden text-primary p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container flex flex-col gap-5 py-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-xs tracking-elegant uppercase text-primary"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <Button asChild variant="luxury" className="flex-1">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Agendar avaliação</a>
              </Button>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
