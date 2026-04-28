import { Award, ShieldCheck, HeartHandshake, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";
import { IMG } from "./images";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const pillars = [
  { icon: Award, t: "Especialistas certificadas", d: "Equipe médica com formação internacional." },
  { icon: ShieldCheck, t: "Protocolos seguros", d: "Produtos originais e técnicas validadas." },
  { icon: HeartHandshake, t: "Atendimento exclusivo", d: "Cada paciente é única — assim como o protocolo." },
  { icon: Gem, t: "Resultados elegantes", d: "Naturalidade acima de tudo." },
];

const About = () => (
  <section id="sobre" className="relative bg-secondary py-20 md:py-32 overflow-hidden">
    <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-rose-luxury opacity-30 blur-[100px]" />
    <div className="container grid gap-14 lg:grid-cols-12 lg:gap-20 items-center">
      <div className="lg:col-span-6 relative">
        <Reveal>
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm shadow-luxury mx-auto lg:mx-0">
            <img
              src={IMG.doctor}
              alt="Dra. especialista em estética facial avançada"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent p-6">
              <div className="text-[10px] tracking-luxury uppercase text-gold">Diretora técnica</div>
              <div className="font-display text-2xl text-white">Dra. Helena Vieira</div>
              <div className="text-[10px] tracking-elegant uppercase text-white/70">CRM 000.000 · Pós em Estética Avançada</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="absolute -bottom-8 -right-2 hidden md:block w-48 aspect-square overflow-hidden rounded-sm shadow-luxury border-4 border-background lg:w-56">
            <img src={IMG.interior} alt="Interior premium da clínica" loading="lazy" className="h-full w-full object-cover animate-ken-burns" />
          </div>
        </Reveal>
        <div className="absolute -left-6 -top-6 hidden h-32 w-32 border border-gold/40 lg:block" />
      </div>

      <div className="lg:col-span-6">
        <Reveal>
          <span className="text-[11px] tracking-luxury uppercase text-gold">A Clínica</span>
          <div className="mt-4 gold-divider" />
          <h2 className="mt-6 font-display text-4xl text-primary leading-[1.05] sm:text-5xl md:text-6xl">
            Onde ciência encontra <span className="font-italic-serif text-gradient-gold">arte</span>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
            Há mais de 12 anos, a Maison Estética é referência em tratamentos faciais avançados.
            Combinamos tecnologia de ponta, técnica refinada e um olhar artístico para entregar
            resultados naturais — sempre fiéis à sua essência.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>
              <div className="flex gap-4 group">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background shadow-card-lux transition-all duration-500 group-hover:bg-gradient-gold">
                  <p.icon className="h-5 w-5 text-accent transition-colors duration-500 group-hover:text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-primary">{p.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10">
            <Button asChild variant="luxury" size="lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Conhecer a clínica</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
