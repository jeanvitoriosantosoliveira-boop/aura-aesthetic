import { MessageCircle, Instagram } from "lucide-react";

const WHATSAPP_NUMBER = "5546991163405";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Vim pelo site e gostaria de agendar minha avaliação na Maison Estética."
)}`;
const INSTAGRAM_URL = "https://www.instagram.com/jeandeveloper/";

const WhatsAppFloat = () => (
  <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="group relative"
    >
      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-luxury transition-transform duration-500 group-hover:scale-110">
        <Instagram className="h-5 w-5" />
      </span>
    </a>

    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group relative"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxury transition-transform duration-500 group-hover:scale-110">
        <MessageCircle className="h-6 w-6" />
      </span>
      <span className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-2 text-[10px] tracking-elegant uppercase text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
        Agendar agora
      </span>
    </a>
  </div>
);

export default WhatsAppFloat;
export { WHATSAPP_URL, INSTAGRAM_URL, WHATSAPP_NUMBER };
