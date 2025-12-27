import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle, Sparkles, Clock, Award } from 'lucide-react';
import { businessConfig } from '../config/business';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const whatsappUrl = `https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(businessConfig.whatsappMessage[currentLang] || businessConfig.whatsappMessage.en)}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-400">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-neon-cyan/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-neon-purple/20 via-transparent to-transparent"></div>
        
        {/* Background Image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-400/80 via-dark-400/60 to-dark-400"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-neon-cyan border border-neon-cyan/30 rounded-full bg-neon-cyan/5 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>{businessConfig.tagline[currentLang] || businessConfig.tagline.en}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in-up">
            <span className="text-white">{t('hero.headline').split(' ').slice(0, -1).join(' ')} </span>
            <span className="gradient-text text-glow">{t('hero.headline').split(' ').slice(-1)}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t('hero.subheadline')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              <Phone className="w-5 h-5 mr-2" />
              {t('hero.bookNow')}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full sm:w-auto">
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('hero.whatsapp')}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center p-4 rounded-xl bg-dark-300/50 border border-white/5">
              <div className="text-3xl md:text-4xl font-display font-bold text-neon-cyan mb-1">5000+</div>
              <div className="text-xs md:text-sm text-gray-400">{t('hero.badges.carsServiced')}</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-dark-300/50 border border-white/5">
              <div className="text-3xl md:text-4xl font-display font-bold text-neon-blue mb-1">10+</div>
              <div className="text-xs md:text-sm text-gray-400">{t('hero.badges.yearsExperience')}</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-dark-300/50 border border-white/5">
              <div className="text-3xl md:text-4xl font-display font-bold text-neon-purple mb-1">100%</div>
              <div className="text-xs md:text-sm text-gray-400">{t('hero.badges.satisfaction')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
