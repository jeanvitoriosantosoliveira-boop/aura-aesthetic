import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "./Reveal";

const items = [
  {
    q: "Os procedimentos são seguros?",
    a: "Sim. Trabalhamos exclusivamente com produtos originais, registrados na ANVISA, e protocolos validados internacionalmente. Toda paciente passa por uma avaliação médica completa antes de qualquer procedimento.",
  },
  {
    q: "Dói? Preciso de anestesia?",
    a: "Utilizamos anestésicos tópicos e técnicas que tornam a experiência confortável. A maioria das pacientes descreve apenas uma leve sensação durante a aplicação.",
  },
  {
    q: "O resultado fica artificial?",
    a: "Nunca. Nossa filosofia é a beleza com naturalidade. Cada protocolo é desenhado para realçar seus traços — sem mudar quem você é.",
  },
  {
    q: "Quanto tempo dura o resultado?",
    a: "Depende do procedimento. Toxina botulínica dura em média 4 a 6 meses, preenchimentos de 9 a 18 meses. Você receberá um plano personalizado de manutenção.",
  },
  {
    q: "Posso voltar às minhas atividades no mesmo dia?",
    a: "Sim. A maioria dos procedimentos é minimamente invasiva, com retorno imediato à rotina. Você receberá orientações específicas após o atendimento.",
  },
];

const Objections = () => (
  <section className="bg-background py-24 md:py-32">
    <div className="container grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <Reveal>
          <span className="text-[11px] tracking-luxury uppercase text-gold">Suas dúvidas</span>
          <div className="mt-4 gold-divider" />
          <h2 className="mt-6 font-display text-4xl text-primary md:text-5xl leading-tight">
            Transparência em cada <em className="text-accent">detalhe</em>.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Acreditamos que confiança nasce de informação. Tire suas principais dúvidas — e venha
            conversar pessoalmente com nossa equipe.
          </p>
        </Reveal>
      </div>

      <div className="lg:col-span-7">
        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {items.map((it, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="font-display text-xl text-primary text-left hover:no-underline py-6">
                  {it.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {it.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Objections;
