// ============================================
// CAR WASH / DETAILING CONFIGURATION
// Edit these values for each business instance
// ============================================

export const businessConfig = {
  // Basic Info
  name: 'Your company name',
  logo: '',
  tagline: {
    hy: 'Պրեմիում ավտո խնամք',
    en: 'Premium Auto Care',
    ru: 'Премиум авто уход'
  },
  
  // Contact Information
  phone: '+374 00 123 456',
  whatsapp: '+37400123456',
  email: 'info@detailingpro.am',
  
  // Address
  address: {
    hy: 'Երևան, Գլխավոր փողոց 1',
    en: 'Yerevan, Main Street 1',
    ru: 'Ереван, Главная улица 1'
  },
  
  // Working Hours
  workingHours: {
    hy: 'Ամեն օր: 09:00 - 21:00',
    en: 'Daily: 09:00 - 21:00',
    ru: 'Ежедневно: 09:00 - 21:00'
  },
  
  // Social Media Links
  social: {
    instagram: 'https://instagram.com/detailingpro',
    facebook: 'https://facebook.com/detailingpro',
    tiktok: 'https://tiktok.com/@detailingpro',
  },
  
  // Google Maps Embed URL
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.8830123456789!2d44.5!3d40.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDEwJzQ4LjAiTiA0NMKwMzAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890',
  
  // WhatsApp message template
  whatsappMessage: {
    hy: 'Բարև, ցանկանում եմ ամրագրել մեքենայի detailing ծառայություն',
    en: 'Hello, I would like to book a car detailing service',
    ru: 'Здравствуйте, хотел бы записаться на детейлинг'
  },
  
  // Pricing packages
  pricing: [
    {
      id: 1,
      name: {
        hy: 'Հիմնական',
        en: 'Basic',
        ru: 'Базовый'
      },
      price: '15,000',
      currency: '֏',
      features: {
        hy: ['Արտաքին լվացում', 'Անվադողերի մաքրում', 'Պատուհանների մաքրում'],
        en: ['Exterior wash', 'Wheel cleaning', 'Window cleaning'],
        ru: ['Наружная мойка', 'Очистка колес', 'Мытье стекол']
      },
      popular: false
    },
    {
      id: 2,
      name: {
        hy: 'Պրեմիում',
        en: 'Premium',
        ru: 'Премиум'
      },
      price: '35,000',
      currency: '֏',
      features: {
        hy: ['Լիարժեք արտաքին լվացում', 'Սրահի մաքրում', 'Կաշվի մշակություն', 'Վահանակի փայլեցում'],
        en: ['Full exterior wash', 'Interior cleaning', 'Leather conditioning', 'Dashboard polish'],
        ru: ['Полная наружная мойка', 'Чистка салона', 'Обработка кожи', 'Полировка панели']
      },
      popular: true
    },
    {
      id: 3,
      name: {
        hy: 'Առավելագույն',
        en: 'Ultimate',
        ru: 'Максимальный'
      },
      price: '80,000',
      currency: '֏',
      features: {
        hy: ['Լիարժեք detailing', 'Ներկի ուղղում', 'Կերամիկական ծածկույթ', 'Շարժիչի մաքրում', '6 ամսվա երաշխիք'],
        en: ['Full detailing', 'Paint correction', 'Ceramic coating', 'Engine cleaning', '6-month warranty'],
        ru: ['Полный детейлинг', 'Коррекция ЛКП', 'Керамика', 'Мойка двигателя', 'Гарантия 6 мес.']
      },
      popular: false
    }
  ],
  
  // Before/After gallery
  beforeAfter: [
    {
      id: 1,
      before: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&sat=-100&bri=-10',
      after: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      title: { hy: 'Արտաքին փայլեցում', en: 'Exterior Polish', ru: 'Полировка кузова' }
    },
    {
      id: 2,
      before: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop&sat=-100&bri=-10',
      after: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
      title: { hy: 'Լիարժեք detailing', en: 'Full Detailing', ru: 'Полный детейлинг' }
    },
    {
      id: 3,
      before: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=600&fit=crop&sat=-100&bri=-10',
      after: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=600&fit=crop',
      title: { hy: 'Սրահի մաքրում', en: 'Interior Cleaning', ru: 'Чистка салона' }
    }
  ],
  
  // Gallery images
  gallery: [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&h=600&fit=crop',
      alt: { hy: 'Լվացման գոտի', en: 'Car Wash Area', ru: 'Зона мойки' }
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&h=600&fit=crop',
      alt: { hy: 'Detailing գործընթաց', en: 'Detailing Process', ru: 'Процесс детейлинга' }
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=600&fit=crop',
      alt: { hy: 'Պրեմիում արդյունք', en: 'Premium Results', ru: 'Премиум результат' }
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=600&fit=crop',
      alt: { hy: 'Պատրաստ մեքենա', en: 'Finished Car', ru: 'Готовый автомобиль' }
    }
  ]
};

export default businessConfig;
