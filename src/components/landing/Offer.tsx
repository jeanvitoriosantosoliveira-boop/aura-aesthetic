import { Button } from "@/components/ui/button";
import { Clock, Sparkles, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const Offer = () => (
  <section id="contato" className="relative bg-gradient-noir py-24 md:py-32 overflow-hidden text-primary-foreground">
    <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
    <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />

    <div className="container relative">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-gold/40 px-5 py-2">
            <Sparkles className="h-3 w-3 text-gold" />
            <span className="text-[10px] tracking-luxury uppercase text-gold">Oferta exclusiva · vagas limitadas</span>
          </div>

          <h2 className="mt-8 font-display text-4xl leading-tight md:text-6xl">
            Sua primeira <em className="text-gold">avaliação</em> por nossa conta.
          </h2>

          <p className="mt-6 text-lg text-primary-foreground/75 leading-relaxed">
            Agende agora e ganhe uma avaliação personalizada com nossas especialistas — sem custo,
            sem compromisso. Apenas 8 vagas disponíveis esta semana.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild variant="gold" size="xl">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Quero agendar minha avaliação <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 text-xs tracking-elegant uppercase text-primary-foreground/60">
            <Clock className="h-3 w-3 text-gold" /> Resposta em até 5 minutos no WhatsApp
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Offer;
