import { Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary py-16 border-t border-border">
    <div className="container grid gap-12 md:grid-cols-4">
      <div className="md:col-span-2">
        <div className="font-display text-2xl text-primary">Maison Estética</div>
        <div className="text-[10px] tracking-luxury uppercase text-muted-foreground mt-1">Clínica Premium</div>
        <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
          Beleza com naturalidade. Há mais de uma década realçando a melhor versão de cada paciente.
        </p>
        <a href="#" className="mt-6 inline-flex items-center gap-2 text-xs tracking-elegant uppercase text-primary lux-link">
          <Instagram className="h-4 w-4" /> @maison.estetica
        </a>
      </div>

      <div>
        <div className="text-[10px] tracking-luxury uppercase text-gold">Contato</div>
        <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-2"><Phone className="h-4 w-4 text-accent" /> (11) 99999-9999</li>
          <li className="flex gap-2"><Mail className="h-4 w-4 text-accent" /> contato@maisonestetica.com</li>
          <li className="flex gap-2"><MapPin className="h-4 w-4 text-accent mt-0.5" /> Rua dos Jardins, 1234<br />Jardim Paulista, São Paulo</li>
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

    <div className="container mt-12 pt-8 border-t border-border flex flex-col gap-3 sm:flex-row sm:justify-between text-[10px] tracking-luxury uppercase text-muted-foreground">
      <span>© {new Date().getFullYear()} Maison Estética · Todos os direitos reservados</span>
      <span>Responsável técnica: Dra. Helena Vieira · CRM 000.000</span>
    </div>
  </footer>
);

export default Footer;
