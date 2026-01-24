# DOKPA Expeditions - Frontend

Premium travel website for Himalayan adventures in Ladakh, India.

## 🚀 Features

- **Modern React SPA** with React Router for seamless navigation
- **Dark/Light Theme Toggle** with localStorage persistence
- **Responsive Design** - Mobile-first approach with hamburger menu
- **Smooth Animations** - Intersection Observer for reveal effects
- **Accessibility** - WCAG compliant with focus states and skip links
- **Performance Optimized** - Lazy loading images, reduced motion support
- **SEO Ready** - Meta tags and semantic HTML
- **Error Handling** - Error boundaries and 404 page

## 🛠️ Tech Stack

- React 18.3.1
- React Router DOM 7.12.0
- Vite 6.0.5
- CSS3 with Custom Properties
- Modern JavaScript (ES6+)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

### Color Palette
- **Sage Green** (#6B8E6F) - Primary accent
- **Gold** (#D4AF37) - Premium highlights
- **Charcoal** (#1A1F23) - Dark backgrounds
- **Sand** (#F7F3F0) - Light backgrounds

### Typography
- **Headings**: Outfit (serif)
- **Body**: Inter (sans-serif)
- Fluid typography using clamp()

### Spacing Scale
- Uses consistent spacing system (--s-1 through --s-24)
- Based on 0.25rem increments

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── ContactForm.jsx
│   ├── Destinations.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Loading.jsx
│   ├── Navigation.jsx
│   ├── Navigation.css
│   ├── Services.jsx
│   ├── Testimonials.jsx
│   └── TrustBar.jsx
├── pages/
│   ├── Home.jsx
│   └── DestinationsPage.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🌐 Pages

- **Home** (`/`) - Hero, About, Destinations, Services, Testimonials, Contact
- **Destinations** (`/destinations`) - Detailed destination information
- **404** - Custom not found page

## ♿ Accessibility Features

- Skip to content link
- Keyboard navigation support
- Focus visible states
- ARIA labels on interactive elements
- Semantic HTML structure
- Reduced motion support

## 🎯 Performance

- Lazy loading images
- Optimized animations
- Code splitting ready
- Font display swap
- Mobile-optimized parallax

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 968px
- Desktop: > 968px

## 🔧 Configuration

### Theme Toggle
Theme preference is saved to localStorage and respects system preferences.

### Environment Variables
Add to `.env` file:
```
VITE_API_URL=your_api_url
```

## 🚢 Deployment

Build the project:
```bash
npm run build
```

The `dist` folder contains the production-ready files.

### Deploy to Hostinger
1. Build the project
2. Upload `dist` folder contents to public_html
3. Configure .htaccess for SPA routing

## 📄 License

© 2024 Dokpa Expeditions. All rights reserved.

## 🤝 Contributing

This is a private project. For inquiries, contact expeditions@dokpa.com

---

**Built with ❤️ in the Himalayas**