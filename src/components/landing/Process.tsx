import Reveal from "./Reveal";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const steps = [
  {
    step: "1º Passo",
    t: "Conversa inicial",
    d: "Entendemos suas queixas, expectativas e histórico. Sem compromisso algum.",
  },
  {
    step: "2º Passo",
    t: "Avaliação facial",
    d: "Análise de proporções, pele e simetria com olhar clínico e artístico.",
  },
  {
    step: "3º Passo",
    t: "Protocolo personalizado",
    d: "Apresentamos o plano: o que será feito, em quanto tempo e por quanto.",
  },
  {
    step: "4º Passo",
    t: "Procedimento",
    d: "Ambiente acolhedor, produtos originais e conforto do início ao fim.",
  },
  {
    step: "5º Passo",
    t: "Acompanhamento",
    d: "Retorno incluso e orientações para manter o resultado por mais tempo.",
  },
];

const Process = () => (
  <section id="processo" className="relative overflow-hidden bg-gradient-soft py-20 md:py-32">
    <div className="pointer-events-none absolute inset-0 bg-grid-lux opacity-40" />
    <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-rose-luxury/10 blur-[130px]" />

    <div className="container relative">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] tracking-luxury uppercase text-gold">Como funciona</span>
          <div className="mx-auto mt-4 gold-divider" />
          <h2 className="mt-6 font-display text-4xl text-primary sm:text-5xl md:text-6xl">
            Cuidamos de você desde o <span className="font-italic-serif text-gradient-gold">primeiro contato</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Um caminho claro, seguro e sem surpresas — do primeiro "olá" ao seu resultado.
          </p>
        </div>
      </Reveal>

      <div className="relative mx-auto mt-16 max-w-4xl">
        {/* central line */}
        <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:left-1/2" />

        <div className="space-y-6 md:space-y-10">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 90}>
              <div
                className={`relative pl-12 md:w-1/2 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                <span
                  className={`absolute left-4 top-8 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gold shadow-gold md:left-auto ${
                    i % 2 === 0 ? "md:-right-1.5 md:translate-x-0" : "md:-left-1.5"
                  }`}
                />
                <div className="card-lux p-6 sm:p-7">
                  <span className="inline-block rounded-full bg-gradient-gold px-3 py-1 text-[9px] font-semibold tracking-elegant uppercase text-primary-foreground">
                    {s.step}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-primary sm:text-3xl">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="mt-14 text-center">
          <Button asChild variant="luxury" size="xl">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Começar pela avaliação gratuita
            </a>
          </Button>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Process;
