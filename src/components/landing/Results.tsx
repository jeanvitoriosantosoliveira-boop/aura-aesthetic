import Reveal from "./Reveal";

const stats = [
  { n: "98%", l: "Satisfação das pacientes" },
  { n: "+8.000", l: "Procedimentos realizados" },
  { n: "+12", l: "Anos de excelência" },
  { n: "100%", l: "Produtos originais" },
];

const Results = () => (
  <section id="resultados" className="bg-primary py-24 md:py-28 text-primary-foreground">
    <div className="container">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] tracking-luxury uppercase text-gold">Resultados que falam</span>
          <div className="mx-auto mt-4 gold-divider" />
          <h2 className="mt-6 font-display text-4xl md:text-5xl">
            Números que confirmam a <em className="text-gold">excelência</em>
          </h2>
        </div>
      </Reveal>

      <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 100}>
            <div className="text-center">
              <div className="font-display text-5xl text-gold md:text-6xl">{s.n}</div>
              <div className="mt-3 text-[10px] tracking-luxury uppercase text-primary-foreground/70">{s.l}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Results;
