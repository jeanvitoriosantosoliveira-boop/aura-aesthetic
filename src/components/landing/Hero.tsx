import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { IMG } from "./images";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const stats = [
  { v: "+12 anos", l: "de excelência" },
  { v: "+8.000", l: "pacientes atendidas" },
  { v: "1ª avaliação", l: "por nossa conta" },
];

const Hero = () => (
  <section id="top" className="relative isolate overflow-hidden bg-background pt-32 pb-0 lg:pt-40">
    {/* Grid + aura ambience */}
    <div className="pointer-events-none absolute inset-0 bg-grid-lux mask-radial-fade opacity-70" />
    <div className="pointer-events-none absolute left-1/2 top-[46%] h-[36rem] w-[120%] max-w-none -translate-x-1/2 rounded-[50%] aura animate-aura" />
    <div className="pointer-events-none absolute left-1/2 top-[52%] h-[22rem] w-[70%] -translate-x-1/2 rounded-[50%] bg-champagne/25 blur-[130px]" />

    <div className="container relative z-10 text-center">
      <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-gold/25 bg-glass px-5 py-2 backdrop-blur animate-fade-in">
        <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
        <span className="text-[10px] tracking-luxury uppercase text-gold sm:text-[11px]">
          Estética Avançada · Desde 2012
        </span>
      </div>

      <h1 className="mx-auto mt-8 max-w-4xl font-display text-[2.5rem] leading-[1.02] text-primary animate-fade-up sm:text-6xl md:text-7xl lg:text-[5.5rem]">
        Sua beleza <span className="font-italic-serif text-gradient-gold">refinada</span>
        <br className="hidden sm:block" /> com arte e ciência.
      </h1>

      <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground animate-fade-up md:text-lg">
        Tratamentos faciais exclusivos em ambiente acolhedor, conduzidos por especialistas que
        entendem que <em className="text-primary/90">menos é mais</em>. Resultados naturais,
        elegantes — só seus.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild variant="luxury" size="xl" className="group w-full sm:w-auto">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Agendar avaliação grátis
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
        <Button asChild variant="ghostLux" size="xl" className="w-full sm:w-auto">
          <a href="#procedimentos">Ver procedimentos</a>
        </Button>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-4 sm:gap-10">
        {stats.map((s) => (
          <div key={s.l}>
            <div className="font-display text-xl text-gradient-gold sm:text-3xl">{s.v}</div>
            <div className="mt-1.5 text-[9px] tracking-elegant uppercase text-muted-foreground sm:text-[10px]">
              {s.l}
            </div>
          </div>
        ))}
      </div>

      {/* Social proof */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <div className="flex -space-x-3">
          {[IMG.test1, IMG.test2, IMG.test3].map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className="h-9 w-9 rounded-full border border-gold/30 object-cover"
            />
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
          ))}
          <span className="ml-1 text-xs text-primary/90">4.9/5</span>
          <span className="text-[10px] tracking-elegant uppercase text-muted-foreground">
            · avaliações reais
          </span>
        </div>
      </div>
    </div>

    {/* Hero image panel over the aura */}
    <div className="container relative z-10 mt-16 lg:mt-20">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[var(--radius)] border border-gold/20 shadow-luxury">
        <div className="relative aspect-[16/10] sm:aspect-[16/9]">
          <img
            src={IMG.hero}
            alt="Mulher elegante com pele radiante após tratamento estético premium"
            className="h-full w-full object-cover animate-slow-zoom"
            width={1400}
            height={900}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-veil" />
        </div>

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-9">
          <div>
            <div className="text-[10px] tracking-luxury uppercase text-gold">Cortesia de boas-vindas</div>
            <div className="mt-2 font-display text-2xl leading-tight text-primary sm:text-4xl">
              1ª avaliação facial gratuita
            </div>
          </div>
          <div className="glass-panel px-5 py-4 text-left">
            <div className="text-[9px] tracking-luxury uppercase text-gold">Satisfação</div>
            <div className="font-display text-3xl text-primary">+98%</div>
            <div className="text-[10px] text-muted-foreground">pacientes recomendam</div>
          </div>
        </div>
      </div>
    </div>

    <div className="h-20 md:h-28" />
  </section>
);

export default Hero;
