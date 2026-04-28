import { Award, ShieldCheck, HeartHandshake, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";
import doctor from "@/assets/doctor.jpg";
import interior from "@/assets/clinic-interior.jpg";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const pillars = [
  { icon: Award, t: "Especialistas certificadas", d: "Equipe médica com formação internacional." },
  { icon: ShieldCheck, t: "Protocolos seguros", d: "Produtos originais e técnicas validadas." },
  { icon: HeartHandshake, t: "Atendimento exclusivo", d: "Cada paciente é única — assim como o protocolo." },
  { icon: Gem, t: "Resultados elegantes", d: "Naturalidade acima de tudo." },
];

const About = () => (
  <section id="sobre" className="relative bg-secondary py-24 md:py-32 overflow-hidden">
    <div className="container grid gap-16 lg:grid-cols-12 lg:gap-20 items-center">
      <div className="lg:col-span-6 relative">
        <Reveal>
          <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-sm shadow-luxury">
            <img src={doctor} alt="Dra. especialista da Maison Estética" loading="lazy" width={1000} height={1200} className="h-full w-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="absolute -bottom-8 -right-4 hidden md:block w-56 aspect-square overflow-hidden rounded-sm shadow-luxury border-4 border-background">
            <img src={interior} alt="Interior da clínica" loading="lazy" width={400} height={400} className="h-full w-full object-cover" />
          </div>
        </Reveal>
        <div className="absolute -left-8 -top-8 hidden lg:block h-32 w-32 border border-gold/40" />
      </div>

      <div className="lg:col-span-6">
        <Reveal>
          <span className="text-[11px] tracking-luxury uppercase text-gold">A Clínica</span>
          <div className="mt-4 gold-divider" />
          <h2 className="mt-6 font-display text-4xl text-primary md:text-5xl leading-tight">
            Onde ciência encontra <em className="text-accent">arte</em>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Há mais de 12 anos, a Maison Estética é referência em tratamentos faciais avançados.
            Combinamos tecnologia de ponta, técnica refinada e um olhar artístico para entregar
            resultados naturais — sempre fiéis à sua essência.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background shadow-card-lux">
                  <p.icon className="h-5 w-5 text-accent" />
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
