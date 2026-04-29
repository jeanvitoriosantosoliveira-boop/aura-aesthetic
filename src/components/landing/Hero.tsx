import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { IMG } from "./images";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const Hero = () => (
  <section id="top" className="relative min-h-screen overflow-hidden bg-gradient-soft">
    {/* Decorative blobs */}
    <div className="pointer-events-none absolute -left-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-rose-luxury opacity-40 blur-[120px]" />
    <div className="pointer-events-none absolute -right-32 bottom-0 h-[32rem] w-[32rem] rounded-full bg-nude opacity-60 blur-[120px]" />
    <div className="pointer-events-none absolute right-1/3 top-10 h-72 w-72 rounded-full bg-champagne opacity-50 blur-[100px]" />

    <div className="container relative z-10 grid min-h-screen items-center gap-12 pt-28 pb-16 lg:grid-cols-12 lg:gap-8 lg:pt-36">
      {/* Text */}
      <div className="lg:col-span-6 space-y-7 animate-fade-up">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-10 bg-gold" />
          <span className="text-[10px] sm:text-[11px] tracking-luxury uppercase text-gold font-medium">
            Estética Avançada · Desde 2012
          </span>
        </div>

        <h1 className="font-display text-[2.6rem] leading-[1.02] text-primary sm:text-5xl md:text-6xl lg:text-[5rem] lg:leading-[0.98]">
          Sua beleza<br />
          <span className="font-italic-serif text-gradient-gold">refinada</span> com <br className="hidden sm:block" />
          arte e ciência.
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Tratamentos faciais exclusivos em ambiente acolhedor, conduzidos por especialistas que
          entendem que <em>menos é mais</em>. Resultados naturais, elegantes — só seus.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild variant="luxury" size="xl" className="group">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Agendar avaliação grátis
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild variant="ghostLux" size="xl">
            <a href="#procedimentos">Ver procedimentos</a>
          </Button>
        </div>

        {/* Social proof row */}
        <div className="flex flex-wrap items-center gap-6 pt-6 sm:gap-8">
          <div className="flex -space-x-3">
            {[IMG.test1, IMG.test2, IMG.test3].map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="h-10 w-10 rounded-full border-2 border-background object-cover shadow-card-lux"
              />
            ))}
          </div>
          <div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
              <span className="ml-2 text-xs font-medium text-primary">4.9/5</span>
            </div>
            <div className="mt-1 text-[10px] tracking-elegant uppercase text-muted-foreground">
              +8.000 pacientes encantadas
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="lg:col-span-6 relative">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm shadow-luxury sm:max-w-lg">
          <img
            src={IMG.hero}
            alt="Mulher elegante com pele radiante após tratamento estético premium"
            className="h-full w-full object-cover animate-slow-zoom"
            width={1080}
            height={1350}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />

          {/* On-image badge */}
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[10px] tracking-elegant uppercase text-primary">Agenda aberta</span>
          </div>
        </div>

        {/* Floating card — bottom */}
        <div className="absolute -bottom-6 left-2 hidden max-w-[16rem] items-start gap-3 rounded-sm bg-card p-4 shadow-luxury animate-float-soft sm:flex md:left-0">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-gold">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <div>
            <div className="text-[10px] tracking-luxury uppercase text-gold">Cortesia</div>
            <div className="mt-1 font-display text-base leading-tight text-primary">
              1ª avaliação gratuita
            </div>
          </div>
        </div>

        {/* Floating card — top right */}
        <div className="absolute -right-2 top-6 hidden rounded-sm bg-card/95 p-3 shadow-luxury backdrop-blur md:block animate-float-soft" style={{ animationDelay: "1.5s" }}>
          <div className="text-[9px] tracking-luxury uppercase text-gold">Resultado</div>
          <div className="font-display text-3xl text-primary">+98%</div>
          <div className="text-[10px] text-muted-foreground">satisfação real</div>
        </div>

        {/* Decorative gold ring */}
        <div className="absolute -right-10 -top-10 hidden h-44 w-44 rounded-full border border-gold/40 lg:block" />
        <div className="absolute -left-6 bottom-20 hidden h-24 w-24 rounded-full border border-accent/30 lg:block" />
      </div>
    </div>

    {/* Scroll cue */}
    <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
      <span className="text-[9px] tracking-luxury uppercase text-muted-foreground">Role</span>
      <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
    </div>
  </section>
);

export default Hero;
