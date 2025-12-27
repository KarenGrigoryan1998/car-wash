import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { businessConfig } from '../config/business';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const whatsappUrl = `https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(businessConfig.whatsappMessage[currentLang] || businessConfig.whatsappMessage.en)}`;

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: businessConfig.phone,
      href: `tel:${businessConfig.phone.replace(/\s/g, '')}`,
      color: 'neon-cyan',
    },
    {
      icon: MessageCircle,
      label: t('contact.whatsapp'),
      value: 'WhatsApp',
      href: whatsappUrl,
      color: 'neon-green',
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: businessConfig.address[currentLang] || businessConfig.address.en,
      href: '#',
      color: 'neon-purple',
    },
    {
      icon: Clock,
      label: t('contact.hours'),
      value: businessConfig.workingHours[currentLang] || businessConfig.workingHours.en,
      href: null,
      color: 'neon-orange',
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-500"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-cyan/5 via-transparent to-transparent"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">{t('contact.title')}</span>
          </h2>
          <p className="text-gray-400 text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-dark-300/50 border border-white/5 hover:border-neon-cyan/30 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-${item.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-6 h-6 text-${item.color}`} />
                  </div>
                  <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-lg font-semibold text-white hover:text-neon-cyan transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-lg font-semibold text-white">{item.value}</div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Box */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-neon-cyan/20 via-neon-blue/10 to-neon-purple/20 border border-neon-cyan/30">
              <h3 className="text-2xl font-display font-bold text-white mb-3">
                {t('contact.ctaTitle')}
              </h3>
              <p className="text-gray-400 mb-6">
                {t('contact.ctaSubtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${businessConfig.phone.replace(/\s/g, '')}`}
                  className="btn-primary flex-1"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {businessConfig.phone}
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp flex-1"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-white/10 h-full min-h-[400px]">
              <iframe
                src={businessConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>

            {/* Map Overlay Gradient */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl border border-neon-cyan/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
