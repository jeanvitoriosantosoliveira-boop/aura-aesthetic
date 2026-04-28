import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee";
import Procedures from "@/components/landing/Procedures";
import About from "@/components/landing/About";
import Results from "@/components/landing/Results";
import Gallery from "@/components/landing/Gallery";
import Objections from "@/components/landing/Objections";
import Testimonials from "@/components/landing/Testimonials";
import Offer from "@/components/landing/Offer";
import Footer from "@/components/landing/Footer";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";

const Index = () => {
  useEffect(() => {
    document.title = "Maison Estética · Clínica de Estética Premium";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute(
      "content",
      "Clínica de estética premium · botox, preenchimento, harmonização facial e skincare. Resultados naturais com segurança e elegância. Agende sua avaliação gratuita."
    );
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <Procedures />
      <About />
      <Results />
      <Gallery />
      <Objections />
      <Testimonials />
      <Offer />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
