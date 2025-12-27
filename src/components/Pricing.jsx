import { useTranslation } from 'react-i18next';
import { Check, Star } from 'lucide-react';
import { businessConfig } from '../config/business';

const Pricing = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-400"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-neon-cyan/10 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-neon-purple/10 via-transparent to-transparent"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">{t('pricing.title')}</span>
          </h2>
          <p className="text-gray-400 text-lg">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {businessConfig.pricing.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                plan.popular
                  ? 'bg-gradient-to-b from-neon-cyan/20 via-dark-300/80 to-dark-300/80 border-2 border-neon-cyan/50 scale-105 neon-glow'
                  : 'bg-dark-300/50 border border-white/10 hover:border-neon-cyan/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-neon-cyan to-neon-blue py-2 text-center">
                  <span className="text-sm font-bold text-dark-900 uppercase tracking-wider flex items-center justify-center gap-1">
                    <Star className="w-4 h-4" />
                    {t('pricing.popular')}
                  </span>
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                {/* Plan Name */}
                <h3 className="text-xl font-display font-semibold text-white mb-2">
                  {plan.name[currentLang] || plan.name.en}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-display font-bold text-neon-cyan">
                    {plan.price}
                  </span>
                  <span className="text-xl text-gray-400 ml-1">{plan.currency}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {(plan.features[currentLang] || plan.features.en).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full ${plan.popular ? 'bg-neon-cyan' : 'bg-neon-cyan/20'} flex items-center justify-center mt-0.5`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-dark-900' : 'text-neon-cyan'}`} />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {t('pricing.bookNow')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
