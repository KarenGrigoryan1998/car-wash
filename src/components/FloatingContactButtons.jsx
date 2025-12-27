import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle } from 'lucide-react';
import { businessConfig } from '../config/business';

const FloatingContactButtons = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const phoneHref = `tel:${businessConfig.phone.replace(/\s/g, '')}`;
  const whatsappUrl = `https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(businessConfig.whatsappMessage[currentLang] || businessConfig.whatsappMessage.en)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group relative grid place-items-center w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-lg shadow-green-500/20 transition-all duration-300 hover:shadow-green-500/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-dark-400 animate-float"
      >
        <span className="absolute inset-0 rounded-full bg-green-500/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <MessageCircle className="relative w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
      </a>

      <a
        href={phoneHref}
        aria-label="Phone"
        className="group relative grid place-items-center w-14 h-14 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue shadow-lg shadow-neon-cyan/20 transition-all duration-300 hover:shadow-neon-cyan/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-dark-400 animate-pulse-neon"
      >
        <span className="absolute inset-0 rounded-full bg-neon-cyan/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <Phone className="relative w-6 h-6 text-dark-900 transition-transform duration-300 group-hover:scale-110" />
      </a>
    </div>
  );
};

export default FloatingContactButtons;
