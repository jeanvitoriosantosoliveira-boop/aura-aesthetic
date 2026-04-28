import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { IMG } from "./images";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const procedures = [
  {
    name: "Toxina Botulínica",
    tag: "Rejuvenescimento",
    img: IMG.botox,
    benefit: "Suaviza linhas de expressão preservando seus traços naturais.",
    result: "Pele lisa em até 7 dias",
    duration: "30 min",
  },
  {
    name: "Preenchimento Labial",
    tag: "Volume & Definição",
    img: IMG.preench,
    benefit: "Lábios definidos, hidratados e proporcionais ao seu rosto.",
    result: "Resultado imediato",
    duration: "45 min",
  },
  {
    name: "Harmonização Facial",
    tag: "Equilíbrio facial",
    img: IMG.harm,
    benefit: "Realça seus traços e devolve simetria com olhar artístico.",
    result: "Beleza personalizada",
    duration: "60 min",
  },
  {
    name: "Limpeza de Pele Premium",
    tag: "Skincare",
    img: IMG.limpeza,
    benefit: "Pele renovada, livre de impurezas e com brilho saudável.",
    result: "Glow imediato",
    duration: "75 min",
  },
  {
    name: "Laser & Bioestimulador",
    tag: "Tecnologia",
    img: IMG.laser,
    benefit: "Estimula colágeno e devolve firmeza com tecnologia de ponta.",
    result: "Firmeza progressiva",
    duration: "50 min",
  },
  {
    name: "Drenagem & Massagem",
    tag: "Bem-estar",
    img: IMG.massage,
    benefit: "Reduz inchaço, contorna o rosto e relaxa profundamente.",
    result: "Contorno definido",
    duration: "60 min",
  },
];

const Procedures = () => (
  <section id="procedimentos" className="relative bg-background py-20 md:py-32">
    <div className="container">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] tracking-luxury uppercase text-gold">Nossos Procedimentos</span>
          <div className="mx-auto mt-4 gold-divider" />
          <h2 className="mt-6 font-display text-4xl text-primary sm:text-5xl md:text-6xl">
            Tratamentos pensados para <span className="font-italic-serif text-gradient-gold">você</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            Protocolos personalizados, conduzidos com técnica refinada e olhar artístico.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {procedures.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <article className="group relative h-full overflow-hidden rounded-sm bg-card shadow-card-lux hover-lift hover:shadow-luxury">
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-veil opacity-90" />
                <span className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 text-[10px] tracking-luxury uppercase text-primary backdrop-blur">
                  {p.tag}
                </span>
                <span className="absolute right-4 top-4 rounded-full border border-white/40 bg-black/30 px-3 py-1 text-[10px] tracking-elegant uppercase text-white backdrop-blur">
                  {p.duration}
                </span>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-2xl text-white sm:text-3xl">{p.name}</h3>
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-sm leading-relaxed text-muted-foreground">{p.benefit}</p>
                <div className="mt-4 flex items-center gap-2 text-[11px] tracking-elegant uppercase text-gold">
                  <span className="h-px w-6 bg-gold" />
                  {p.result}
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-elegant uppercase text-primary lux-link group/link"
                >
                  Agendar este procedimento
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-14 text-center">
          <Button asChild variant="luxury" size="xl">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Quero conversar com uma especialista
            </a>
          </Button>
          <p className="mt-4 text-[10px] tracking-luxury uppercase text-muted-foreground">
            Resposta em até 5 minutos
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Procedures;
