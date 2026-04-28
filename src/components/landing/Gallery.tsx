import Reveal from "./Reveal";
import { IMG } from "./images";

const gallery = [
  { src: IMG.gal1, span: "row-span-2" },
  { src: IMG.gal2, span: "" },
  { src: IMG.gal5, span: "" },
  { src: IMG.gal4, span: "" },
  { src: IMG.gal3, span: "row-span-2" },
  { src: IMG.gal6, span: "" },
];

const Gallery = () => (
  <section className="bg-background py-20 md:py-32">
    <div className="container">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] tracking-luxury uppercase text-gold">Momentos Maison</span>
          <div className="mx-auto mt-4 gold-divider" />
          <h2 className="mt-6 font-display text-4xl text-primary sm:text-5xl md:text-6xl">
            Bastidores da <span className="font-italic-serif text-gradient-gold">experiência</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Um espaço pensado para acolher, encantar e transformar.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-3 md:gap-4 lg:auto-rows-[220px]">
        {gallery.map((g, i) => (
          <Reveal key={i} delay={i * 80} className={g.span}>
            <div className={`group relative h-full w-full overflow-hidden rounded-sm shadow-card-lux ${g.span}`}>
              <img
                src={g.src}
                alt="Ambiente Maison Estética"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
