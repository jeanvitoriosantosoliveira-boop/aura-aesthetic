import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";
import { IMG } from "./images";

const testimonials = [
  {
    name: "Mariana S.",
    role: "Paciente · Botox + Skinbooster",
    img: IMG.test1,
    text: "Saí da clínica me sentindo a melhor versão de mim. Ninguém percebe que fiz — só percebem que estou radiante.",
  },
  {
    name: "Carolina M.",
    role: "Paciente · Harmonização",
    img: IMG.test2,
    text: "Atendimento impecável, ambiente lindo e uma equipe que realmente escuta. Resultado natural, exatamente o que eu queria.",
  },
  {
    name: "Beatriz L.",
    role: "Paciente · Preenchimento",
    img: IMG.test3,
    text: "Eu tinha medo de ficar exagerada. A doutora entendeu meu rosto e fez um trabalho artístico. Recomendo de olhos fechados.",
  },
];

const Testimonials = () => (
  <section id="depoimentos" className="bg-gradient-soft py-20 md:py-32">
    <div className="container">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] tracking-luxury uppercase text-gold">Quem viveu, conta</span>
          <div className="mx-auto mt-4 gold-divider" />
          <h2 className="mt-6 font-display text-4xl text-primary sm:text-5xl md:text-6xl">
            Histórias que <span className="font-italic-serif text-gradient-gold">inspiram</span>
          </h2>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 120}>
            <article className="relative flex h-full flex-col rounded-sm bg-card p-7 shadow-card-lux hover-lift hover:shadow-luxury sm:p-8">
              <Quote className="absolute right-6 top-6 h-10 w-10 text-gold/20" />
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-5 flex-1 font-display text-lg leading-relaxed text-primary sm:text-xl">
                “{t.text}”
              </p>
              <div className="mt-7 flex items-center gap-4 border-t border-border pt-5">
                <img src={t.img} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14" />
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
