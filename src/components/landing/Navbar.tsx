import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "./WhatsAppFloat";

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
        scrolled ? "bg-background/85 backdrop-blur-md shadow-card-lux py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-2xl tracking-tight text-primary">Maison Estética</span>
          <span className="text-[10px] tracking-luxury uppercase text-muted-foreground mt-1">Clínica Premium</span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="lux-link text-xs tracking-elegant uppercase text-primary/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="luxury" size="default">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Agendar avaliação</a>
          </Button>
        </div>

        <button
          className="lg:hidden text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
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
            <Button asChild variant="luxury" className="mt-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Agendar avaliação</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
