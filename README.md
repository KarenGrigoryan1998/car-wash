# Car Wash / Detailing Landing Page

A modern, responsive landing page for car wash and detailing services built with React + Vite + Tailwind CSS.

## 🎨 Design Features

- **Bold, masculine style** with dark background
- **Neon gradients** (cyan, blue, purple)
- **High contrast** for readability
- **Speed & performance feel** with modern animations
- **Fully responsive** design

## 🌐 Languages

- Armenian (hy) - Default
- English (en)
- Russian (ru)

## 📦 Sections

1. **Hero** - Main headline with CTAs (Book Now / WhatsApp)
2. **Services** - Exterior wash, Interior cleaning, Polishing, Ceramic coating
3. **Before/After Gallery** - Interactive slider comparison
4. **Why Choose Us** - Professional equipment, Quality chemicals, Fast service
5. **Pricing** - Three-tier pricing packages
6. **Contact** - Phone, WhatsApp, Location with Google Maps

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ⚙️ Configuration

All business-specific content is centralized in configuration files for easy customization:

### `src/config/business.js`
- Business name and tagline
- Contact information (phone, WhatsApp, email)
- Address (multilingual)
- Working hours
- Social media links
- Google Maps embed URL
- WhatsApp message templates
- Pricing packages
- Before/After gallery images
- General gallery images

### `src/i18n/translations.js`
- All UI text in three languages
- Easy to add more languages

## 🔄 Creating a New Business Landing Page

To duplicate this project for a new business (e.g., beauty salon, barbershop):

1. **Copy the project folder**
   ```bash
   cp -r car-wash new-business-name
   cd new-business-name
   ```

2. **Update `package.json`**
   - Change the `name` field

3. **Update `src/config/business.js`**
   - Business name, tagline
   - Contact details
   - Address
   - Working hours
   - Social links
   - Google Maps URL
   - Pricing packages
   - Images

4. **Update `src/i18n/translations.js`**
   - All UI text for your business type

5. **Update `index.html`**
   - Meta tags (title, description, keywords)
   - Open Graph tags

6. **Customize styling (optional)**
   - `tailwind.config.js` - Colors, fonts
   - `src/index.css` - Custom styles

7. **Replace images**
   - Update Unsplash URLs or add your own images
   - Update favicon

## 📁 Project Structure

```
car-wash/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation + language switcher
│   │   ├── Hero.jsx        # Hero section with CTAs
│   │   ├── Services.jsx    # Services grid
│   │   ├── BeforeAfter.jsx # Interactive comparison gallery
│   │   ├── WhyUs.jsx       # Features/benefits section
│   │   ├── Pricing.jsx     # Pricing packages
│   │   ├── Contact.jsx     # Contact info + map
│   │   └── Footer.jsx      # Footer with links
│   ├── config/
│   │   └── business.js     # Business configuration
│   ├── i18n/
│   │   ├── index.js        # i18n setup
│   │   └── translations.js # All translations
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Global styles + Tailwind
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **i18next** - Internationalization
- **Lucide React** - Icons

## 📝 License

MIT License - Feel free to use for your projects!
