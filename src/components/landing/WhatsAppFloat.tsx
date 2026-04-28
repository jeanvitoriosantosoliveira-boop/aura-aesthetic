import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o.";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-6 right-6 z-50 group"
  >
    <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
    <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxury transition-transform duration-500 group-hover:scale-110">
      <MessageCircle className="h-6 w-6" />
    </span>
    <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-2 text-xs tracking-elegant uppercase text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      Falar agora
    </span>
  </a>
);

export default WhatsAppFloat;
export { WHATSAPP_URL };
