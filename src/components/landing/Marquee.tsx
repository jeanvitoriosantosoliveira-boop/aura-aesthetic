const items = [
  "Resultados naturais",
  "Tecnologia premium",
  "Especialistas certificadas",
  "Atendimento exclusivo",
  "Ambiente seguro",
  "Protocolos personalizados",
  "Beleza com identidade",
];

const Row = ({ reverse = false }: { reverse?: boolean }) => (
  <div
    className={`flex whitespace-nowrap ${reverse ? "marquee-track-rev" : "marquee-track"}`}
  >
    {[...Array(3)].flatMap((_, k) =>
      items.map((t, i) => (
        <span
          key={`${k}-${i}`}
          className="flex items-center gap-6 pr-6 text-[10px] tracking-luxury uppercase text-gold-foreground/90 sm:gap-10 sm:pr-10 sm:text-[11px]"
        >
          <span>{t}</span>
          <span className="font-display text-base leading-none text-gold-foreground/60 sm:text-lg">✦</span>
        </span>
      ))
    )}
  </div>
);

const Marquee = () => (
  <section className="relative overflow-hidden py-10 sm:py-14">
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-champagne/20 blur-[110px]" />
    <div className="relative -rotate-[2.2deg] space-y-1.5">
      <div className="bg-gradient-gold py-3 shadow-gold">
        <Row />
      </div>
      <div className="bg-gradient-gold py-3 opacity-80">
        <Row reverse />
      </div>
    </div>
    <style>{`
      @keyframes marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
      @keyframes marquee-scroll-rev { from { transform: translateX(-33.333%); } to { transform: translateX(0); } }
      .marquee-track { animation: marquee-scroll 38s linear infinite; }
      .marquee-track-rev { animation: marquee-scroll-rev 46s linear infinite; }
    `}</style>
  </section>
);

export default Marquee;
