import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-model.jpg";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const Hero = () => (
  <section id="top" className="relative min-h-screen overflow-hidden bg-gradient-soft">
    <div className="container relative z-10 grid min-h-screen items-center gap-12 pt-32 pb-20 lg:grid-cols-12 lg:pt-40">
      {/* Text */}
      <div className="lg:col-span-6 space-y-8 animate-fade-up">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-10 bg-gold" />
          <span className="text-[11px] tracking-luxury uppercase text-gold font-medium">
            Estética Avançada · Desde 2012
          </span>
        </div>

        <h1 className="font-display text-5xl leading-[1.05] text-primary md:text-6xl lg:text-7xl">
          Realce sua beleza com
          <span className="italic text-accent"> naturalidade </span>
          e segurança.
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Tratamentos estéticos personalizados, conduzidos por especialistas, para resultados sutis,
          elegantes e que valorizam a sua melhor versão.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button asChild variant="luxury" size="xl">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Agendar avaliação <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="ghostLux" size="xl">
            <a href="#procedimentos">Conhecer procedimentos</a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-border/60">
          {[
            { n: "+12", l: "anos de experiência" },
            { n: "+8.000", l: "pacientes atendidas" },
            { n: "4.9★", l: "avaliação média" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-2xl text-primary">{s.n}</div>
              <div className="text-[10px] tracking-luxury uppercase text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="lg:col-span-6 relative">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-sm shadow-luxury">
          <img
            src={heroImg}
            alt="Mulher elegante com pele radiante após tratamento estético"
            className="h-full w-full object-cover animate-slow-zoom"
            width={1080}
            height={1350}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
        </div>

        {/* Floating card */}
        <div className="absolute -bottom-6 -left-2 hidden md:flex max-w-xs items-start gap-3 rounded-sm bg-card p-5 shadow-luxury animate-float-soft">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-gold">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <div>
            <div className="text-[10px] tracking-luxury uppercase text-gold">Avaliação</div>
            <div className="mt-1 font-display text-lg leading-tight text-primary">Primeira consulta gratuita</div>
          </div>
        </div>

        {/* Decorative gold ring */}
        <div className="absolute -right-8 -top-8 hidden h-40 w-40 rounded-full border border-gold/40 lg:block" />
      </div>
    </div>

    {/* Soft veil */}
    <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-rose-luxury opacity-30 blur-3xl" />
    <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-nude opacity-50 blur-3xl" />
  </section>
);

export default Hero;
