import { useTranslation } from 'react-i18next';
import { Wrench, FlaskConical, Zap, ShieldCheck } from 'lucide-react';

const WhyUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Wrench,
      title: t('whyUs.equipment.title'),
      description: t('whyUs.equipment.description'),
      color: 'neon-cyan',
    },
    {
      icon: FlaskConical,
      title: t('whyUs.chemicals.title'),
      description: t('whyUs.chemicals.description'),
      color: 'neon-blue',
    },
    {
      icon: Zap,
      title: t('whyUs.fast.title'),
      description: t('whyUs.fast.description'),
      color: 'neon-purple',
    },
    {
      icon: ShieldCheck,
      title: t('whyUs.warranty.title'),
      description: t('whyUs.warranty.description'),
      color: 'neon-green',
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-500"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-neon-blue/5 via-transparent to-transparent"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              <span className="gradient-text">{t('whyUs.title')}</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              {t('whyUs.subtitle')}
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex gap-4 p-4 rounded-xl bg-dark-300/30 border border-white/5 hover:border-neon-cyan/30 transition-all duration-300"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-${feature.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 group-hover:text-neon-cyan transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image/Visual */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=600&fit=crop"
                alt="Professional Car Detailing"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-400/80 via-transparent to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-dark-300/90 backdrop-blur-md border border-neon-cyan/30 neon-glow">
              <div className="text-4xl font-display font-bold text-neon-cyan mb-1">10+</div>
              <div className="text-sm text-gray-400">Years of Excellence</div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-neon-purple/30 rounded-full"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 border border-neon-cyan/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
