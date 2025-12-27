import { useTranslation } from 'react-i18next';
import { Heart, Instagram, Facebook, Phone, Mail, Car } from 'lucide-react';
import { businessConfig } from '../config/business';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#services', label: t('nav.services') },
    { href: '#gallery', label: t('nav.gallery') },
    { href: '#pricing', label: t('nav.pricing') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-600"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      <div className="container-custom relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block mb-6">
              <span className="flex items-center gap-2">
                {businessConfig.logo ? (
                  <>
                    <img
                      src={businessConfig.logo}
                      alt={businessConfig.name}
                      className="h-10 w-auto object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <span style={{ display: 'none' }} className="flex items-center justify-center">
                      <Car className="w-8 h-8 text-neon-cyan" />
                    </span>
                  </>
                ) : (
                  <Car className="w-8 h-8 text-neon-cyan" />
                )}
                <span className="text-2xl font-display font-bold gradient-text">
                  {businessConfig.name}
                </span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-xs">
              {t('footer.description')}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {businessConfig.social.instagram && (
                <a
                  href={businessConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-300/50 border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {businessConfig.social.facebook && (
                <a
                  href={businessConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-300/50 border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold text-white mb-6">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold text-white mb-6">
              {t('contact.title')}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${businessConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  <Phone className="w-5 h-5 text-neon-cyan" />
                  {businessConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessConfig.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  <Mail className="w-5 h-5 text-neon-cyan" />
                  {businessConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="text-neon-cyan mt-1">📍</span>
                {businessConfig.address[currentLang] || businessConfig.address.en}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {businessConfig.name}. {t('footer.rights')}
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              {t('footer.madeWith')} <Heart className="w-4 h-4 text-neon-pink fill-neon-pink" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
