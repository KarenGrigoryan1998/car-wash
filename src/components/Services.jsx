import { useTranslation } from 'react-i18next';
import { Droplets, SprayCan, Sparkles, Shield } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Droplets,
      title: t('services.exterior.title'),
      description: t('services.exterior.description'),
      color: 'neon-cyan',
      gradient: 'from-neon-cyan/20 to-transparent',
    },
    {
      icon: SprayCan,
      title: t('services.interior.title'),
      description: t('services.interior.description'),
      color: 'neon-blue',
      gradient: 'from-neon-blue/20 to-transparent',
    },
    {
      icon: Sparkles,
      title: t('services.polishing.title'),
      description: t('services.polishing.description'),
      color: 'neon-purple',
      gradient: 'from-neon-purple/20 to-transparent',
    },
    {
      icon: Shield,
      title: t('services.ceramic.title'),
      description: t('services.ceramic.description'),
      color: 'neon-orange',
      gradient: 'from-neon-orange/20 to-transparent',
    },
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dark-500"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-neon-cyan/10 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-neon-purple/10 via-transparent to-transparent"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">{t('services.title')}</span>
          </h2>
          <p className="text-gray-400 text-lg">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-dark-300/50 border border-white/5 hover:border-neon-cyan/30 transition-all duration-500 card-hover"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 mb-6 rounded-xl bg-${service.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 text-${service.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className={`absolute -top-10 -right-10 w-20 h-20 bg-${service.color}/10 rotate-45 group-hover:bg-${service.color}/20 transition-colors`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
