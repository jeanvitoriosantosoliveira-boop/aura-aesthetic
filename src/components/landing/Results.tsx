import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const stats = [
  { n: 98, suffix: "%", l: "Satisfação das pacientes" },
  { n: 8000, prefix: "+", l: "Procedimentos realizados" },
  { n: 12, prefix: "+", l: "Anos de excelência" },
  { n: 100, suffix: "%", l: "Produtos originais" },
];

const useCountUp = (target: number, duration = 1800) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { ref, val };
};

const StatItem = ({ s, i }: { s: typeof stats[number]; i: number }) => {
  const { ref, val } = useCountUp(s.n);
  return (
    <Reveal delay={i * 100}>
      <div ref={ref} className="text-center">
        <div className="font-display text-5xl text-gradient-gold sm:text-6xl md:text-7xl">
          {s.prefix ?? ""}{val.toLocaleString("pt-BR")}{s.suffix ?? ""}
        </div>
        <div className="mt-3 text-[10px] tracking-luxury uppercase text-primary-foreground/70">{s.l}</div>
      </div>
    </Reveal>
  );
};

const Results = () => (
  <section id="resultados" className="relative grain bg-gradient-noir py-20 md:py-28 text-primary-foreground overflow-hidden">
    <div className="pointer-events-none absolute inset-0 opacity-30">
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-gold/30 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent/30 blur-[120px]" />
    </div>
    <div className="container relative">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] tracking-luxury uppercase text-gold">Resultados que falam</span>
          <div className="mx-auto mt-4 gold-divider" />
          <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl">
            Números que confirmam a <span className="font-italic-serif text-gradient-gold">excelência</span>
          </h2>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-10 md:mt-16 md:grid-cols-4">
        {stats.map((s, i) => (
          <StatItem key={s.l} s={s} i={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Results;
