const items = [
  "Resultados naturais",
  "Tecnologia premium",
  "Especialistas certificadas",
  "Atendimento exclusivo",
  "Ambiente seguro",
  "Protocolos personalizados",
  "Beleza com identidade",
];

const Marquee = () => (
  <section className="bg-primary py-4 overflow-hidden border-y border-gold/20 sm:py-5">
    <div className="marquee-track flex whitespace-nowrap">
      {[...Array(3)].flatMap((_, k) =>
        items.map((t, i) => (
          <span
            key={`${k}-${i}`}
            className="flex items-center gap-6 pr-6 text-[10px] tracking-luxury uppercase text-primary-foreground/85 sm:gap-10 sm:pr-10 sm:text-[11px]"
          >
            <span>{t}</span>
            <span className="text-gold font-display text-base sm:text-lg leading-none">✦</span>
          </span>
        ))
      )}
    </div>
    <style>{`
      @keyframes marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
      .marquee-track { animation: marquee-scroll 35s linear infinite; }
    `}</style>
  </section>
);

export default Marquee;
