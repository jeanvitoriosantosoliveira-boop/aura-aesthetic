const items = [
  "Resultados naturais",
  "Tecnologia premium",
  "Especialistas certificados",
  "Atendimento exclusivo",
  "Ambiente seguro",
  "Protocolos personalizados",
];

const Marquee = () => (
  <section className="bg-primary py-5 overflow-hidden border-y border-gold/20">
    <div className="marquee-track flex whitespace-nowrap gap-12">
      {[...items, ...items, ...items].map((t, i) => (
        <span key={i} className="flex items-center gap-12 text-[11px] tracking-luxury uppercase text-primary-foreground/80">
          {t}
          <span className="h-1 w-1 rounded-full bg-gold" />
        </span>
      ))}
    </div>
    <style>{`
      @keyframes marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .marquee-track { animation: marquee-scroll 40s linear infinite; }
    `}</style>
  </section>
);

export default Marquee;
