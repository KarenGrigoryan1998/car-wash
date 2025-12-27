import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { businessConfig } from '../config/business';

const BeforeAfter = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [activeSliders, setActiveSliders] = useState({});

  const handleSliderChange = (id, value) => {
    setActiveSliders(prev => ({ ...prev, [id]: value }));
  };

  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-400"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">{t('beforeAfter.title')}</span>
          </h2>
          <p className="text-gray-400 text-lg">
            {t('beforeAfter.subtitle')}
          </p>
        </div>

        {/* Before/After Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {businessConfig.beforeAfter.map((item) => {
            const sliderValue = activeSliders[item.id] ?? 50;
            
            return (
              <div key={item.id} className="group">
                {/* Comparison Container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 neon-border">
                  {/* After Image (Background) */}
                  <img
                    src={item.after}
                    alt="After"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Before Image (Clipped) */}
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderValue}%` }}
                  >
                    <img
                      src={item.before}
                      alt="Before"
                      className="absolute inset-0 w-full h-full object-cover grayscale brightness-75"
                      style={{ 
                        width: `${100 / (sliderValue / 100)}%`,
                        maxWidth: 'none'
                      }}
                    />
                  </div>

                  {/* Slider Line */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-neon-cyan shadow-lg"
                    style={{ left: `${sliderValue}%`, transform: 'translateX(-50%)' }}
                  >
                    {/* Slider Handle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-dark-400 border-2 border-neon-cyan rounded-full flex items-center justify-center shadow-lg neon-glow cursor-grab active:cursor-grabbing">
                      <div className="flex gap-0.5">
                        <div className="w-0.5 h-4 bg-neon-cyan rounded-full"></div>
                        <div className="w-0.5 h-4 bg-neon-cyan rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Slider Input */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={(e) => handleSliderChange(item.id, parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-grab active:cursor-grabbing"
                  />

                  {/* Labels */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-dark-400/80 backdrop-blur-sm rounded-full text-xs font-medium text-gray-300 border border-white/10">
                    Before
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-neon-cyan/20 backdrop-blur-sm rounded-full text-xs font-medium text-neon-cyan border border-neon-cyan/30">
                    After
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-center text-lg font-semibold text-white mt-4 group-hover:text-neon-cyan transition-colors">
                  {item.title[currentLang] || item.title.en}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
