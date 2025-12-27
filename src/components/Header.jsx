import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown, Car } from 'lucide-react';
import { businessConfig } from '../config/business';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: 'hy', name: 'ՀԱՅ', flag: '🇦🇲' },
    { code: 'en', name: 'ENG', flag: '🇬🇧' },
    { code: 'ru', name: 'РУС', flag: '🇷🇺' },
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#services', label: t('nav.services') },
    { href: '#gallery', label: t('nav.gallery') },
    { href: '#pricing', label: t('nav.pricing') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsLangOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-400/95 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
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
            <div className="relative">
              <span className="text-2xl font-display font-bold gradient-text">
                {businessConfig.name}
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-neon-cyan to-neon-blue"></div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors duration-300 uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side: Language + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors border border-white/10 rounded-lg hover:border-neon-cyan/50"
              >
                <span>{currentLang.flag}</span>
                <span>{currentLang.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-dark-300 border border-white/10 rounded-lg overflow-hidden shadow-xl">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-left hover:bg-neon-cyan/10 transition-colors ${
                        lang.code === i18n.language ? 'text-neon-cyan bg-neon-cyan/5' : 'text-gray-300'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <a href="#contact" className="btn-primary">
              {t('nav.bookNow')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-neon-cyan transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-dark-400/98 backdrop-blur-md border-b border-white/10">
            <div className="container-custom py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-medium text-gray-300 hover:text-neon-cyan transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex gap-2 pt-4 border-t border-white/10">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center gap-1 px-3 py-2 text-sm rounded-lg border transition-colors ${
                      lang.code === i18n.language 
                        ? 'border-neon-cyan text-neon-cyan bg-neon-cyan/10' 
                        : 'border-white/10 text-gray-400 hover:border-white/30'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>

              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary w-full mt-4"
              >
                {t('nav.bookNow')}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
