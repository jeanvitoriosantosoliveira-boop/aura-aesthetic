import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import botox from "@/assets/proc-botox.jpg";
import preench from "@/assets/proc-preenchimento.jpg";
import harm from "@/assets/proc-harmonizacao.jpg";
import limpeza from "@/assets/proc-limpeza.jpg";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const procedures = [
  {
    name: "Toxina Botulínica",
    tag: "Rejuvenescimento",
    img: botox,
    benefit: "Suaviza linhas de expressão preservando a naturalidade do rosto.",
    result: "Pele lisa e descansada em até 7 dias.",
  },
  {
    name: "Preenchimento Labial",
    tag: "Volume & Definição",
    img: preench,
    benefit: "Lábios definidos, hidratados e proporcionais ao seu rosto.",
    result: "Resultado imediato, com toque sutil.",
  },
  {
    name: "Harmonização Facial",
    tag: "Equilíbrio facial",
    img: harm,
    benefit: "Realça traços naturais e devolve simetria e equilíbrio ao rosto.",
    result: "Beleza que valoriza a sua identidade.",
  },
  {
    name: "Limpeza de Pele Premium",
    tag: "Skincare",
    img: limpeza,
    benefit: "Pele renovada, livre de impurezas e com brilho saudável.",
    result: "Glow imediato após a sessão.",
  },
];

const Procedures = () => (
  <section id="procedimentos" className="bg-background py-24 md:py-32">
    <div className="container">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] tracking-luxury uppercase text-gold">Nossos Procedimentos</span>
          <div className="mx-auto mt-4 gold-divider" />
          <h2 className="mt-6 font-display text-4xl text-primary md:text-5xl">
            Tratamentos pensados para <em className="text-accent">você</em>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Protocolos personalizados, conduzidos com técnica refinada e olhar artístico.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {procedures.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <article className="group relative overflow-hidden rounded-sm bg-card shadow-card-lux transition-all duration-700 hover:shadow-luxury">
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={900}
                  height={720}
                  className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-veil opacity-80" />
                <span className="absolute left-5 top-5 rounded-full bg-background/90 px-3 py-1 text-[10px] tracking-luxury uppercase text-primary">
                  {p.tag}
                </span>
              </div>
              <div className="p-8">
                <h3 className="font-display text-3xl text-primary">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.benefit}</p>
                <div className="mt-4 flex items-center gap-2 text-[11px] tracking-elegant uppercase text-gold">
                  <span className="h-px w-6 bg-gold" />
                  {p.result}
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs tracking-elegant uppercase text-primary lux-link"
                >
                  Agendar este procedimento <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-16 text-center">
          <Button asChild variant="luxury" size="xl">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Quero conversar com uma especialista
            </a>
          </Button>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Procedures;
