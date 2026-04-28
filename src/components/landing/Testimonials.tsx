import { Star } from "lucide-react";
import Reveal from "./Reveal";
import t1 from "@/assets/test-1.jpg";
import t2 from "@/assets/test-2.jpg";
import t3 from "@/assets/test-3.jpg";

const testimonials = [
  {
    name: "Mariana S.",
    role: "Paciente · Botox + Skinbooster",
    img: t1,
    text: "Saí da clínica me sentindo a melhor versão de mim. O resultado é incrível e ninguém percebe que eu fiz — só percebem que estou radiante.",
  },
  {
    name: "Carolina M.",
    role: "Paciente · Harmonização",
    img: t2,
    text: "Atendimento impecável, ambiente lindo e uma equipe que realmente escuta. Resultado natural, exatamente o que eu queria.",
  },
  {
    name: "Beatriz L.",
    role: "Paciente · Preenchimento",
    img: t3,
    text: "Eu tinha medo de ficar exagerada. A doutora entendeu meu rosto e fez um trabalho artístico. Recomendo de olhos fechados.",
  },
];

const Testimonials = () => (
  <section id="depoimentos" className="bg-gradient-soft py-24 md:py-32">
    <div className="container">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] tracking-luxury uppercase text-gold">Quem viveu, conta</span>
          <div className="mx-auto mt-4 gold-divider" />
          <h2 className="mt-6 font-display text-4xl text-primary md:text-5xl">
            Histórias que <em className="text-accent">inspiram</em>
          </h2>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 120}>
            <article className="flex h-full flex-col rounded-sm bg-card p-8 shadow-card-lux transition-all duration-700 hover:-translate-y-1 hover:shadow-luxury">
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-5 flex-1 font-display text-xl leading-relaxed text-primary">
                “{t.text}”
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-border pt-5">
                <img src={t.img} alt={t.name} loading="lazy" width={60} height={60} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <div className="font-display text-lg text-primary">{t.name}</div>
                  <div className="text-[10px] tracking-luxury uppercase text-muted-foreground mt-1">{t.role}</div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
