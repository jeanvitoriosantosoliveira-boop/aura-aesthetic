import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { WHATSAPP_URL, INSTAGRAM_URL } from "./WhatsAppFloat";

const Footer = () => (
  <footer className="bg-secondary py-14 border-t border-border md:py-16">
    <div className="container grid gap-10 md:grid-cols-4 md:gap-12">
      <div className="md:col-span-2">
        <div className="font-display text-2xl text-primary">Maison Estética</div>
        <div className="text-[10px] tracking-luxury uppercase text-muted-foreground mt-1">Clínica Premium</div>
        <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
          Beleza com naturalidade. Há mais de uma década realçando a melhor versão de cada paciente.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white transition-transform hover:scale-110"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-elegant uppercase text-primary lux-link"
          >
            (46) 99116-3405
          </a>
        </div>
      </div>

      <div>
        <div className="text-[10px] tracking-luxury uppercase text-gold">Contato</div>
        <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-accent mt-0.5" /> (46) 99116-3405</li>
          <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-accent mt-0.5" /> contato@maisonestetica.com</li>
          <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-accent mt-0.5" /> Rua dos Jardins, 1234<br />Centro · Pato Branco, PR</li>
        </ul>
      </div>

      <div>
        <div className="text-[10px] tracking-luxury uppercase text-gold">Horários</div>
        <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
          <li>Seg — Sex · 9h às 20h</li>
          <li>Sáb · 9h às 14h</li>
          <li>Dom · fechado</li>
        </ul>
      </div>
    </div>

    <div className="container mt-10 pt-8 border-t border-border flex flex-col gap-3 text-[10px] tracking-luxury uppercase text-muted-foreground sm:flex-row sm:justify-between md:mt-12">
      <span>© {new Date().getFullYear()} Maison Estética · Todos os direitos reservados</span>
      <span>Responsável técnica: Dra. Helena Vieira · CRM 000.000</span>
    </div>
  </footer>
);

export default Footer;
