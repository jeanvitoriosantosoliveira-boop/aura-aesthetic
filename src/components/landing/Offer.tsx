import { Button } from "@/components/ui/button";
import { Clock, Sparkles, ArrowRight, Instagram, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { WHATSAPP_URL, INSTAGRAM_URL } from "./WhatsAppFloat";

const Offer = () => (
  <section id="contato" className="relative grain bg-gradient-noir py-20 md:py-32 overflow-hidden text-primary-foreground">
    <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-gold/20 blur-[120px]" />
    <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />

    <div className="container relative">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-gold/40 px-5 py-2">
            <Sparkles className="h-3 w-3 text-gold" />
            <span className="text-[10px] tracking-luxury uppercase text-gold">Oferta exclusiva · vagas limitadas</span>
          </div>

          <h2 className="mt-8 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Sua primeira <span className="font-italic-serif text-gradient-gold">avaliação</span><br />
            por nossa conta.
          </h2>

          <p className="mt-6 text-base text-primary-foreground/75 leading-relaxed sm:text-lg">
            Agende agora e ganhe uma avaliação personalizada com nossas especialistas — sem custo,
            sem compromisso. <strong className="text-gold font-medium">Apenas 8 vagas</strong> disponíveis esta semana.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild variant="gold" size="xl" className="w-full sm:w-auto">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Agendar pelo WhatsApp
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghostLux" size="xl" className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary sm:w-auto">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
                Seguir no Instagram
              </a>
            </Button>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 text-[10px] tracking-elegant uppercase text-primary-foreground/60 sm:text-xs">
            <Clock className="h-3 w-3 text-gold" /> Resposta em até 5 minutos no WhatsApp
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Offer;
