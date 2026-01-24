# Quick Start Guide - Dokpa Expeditions

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit: http://localhost:5173

### 3. Build for Production
```bash
npm run build
```

Output: `dist/` folder

---

## 📱 Test the Website

### Desktop Testing
1. Open http://localhost:5173
2. Test navigation links
3. Toggle dark/light theme
4. Fill out contact form
5. Navigate to Destinations page

### Mobile Testing
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test hamburger menu
4. Check responsive layout
5. Test touch interactions

### Accessibility Testing
1. Navigate using Tab key
2. Check focus indicators
3. Test with screen reader
4. Verify skip to content link

---

## 🎨 Customization

### Change Colors
Edit `src/index.css`:
```css
:root {
  --color-sage: #6B8E6F;      /* Primary accent */
  --color-gold: #D4AF37;      /* Premium highlights */
  --color-charcoal: #1A1F23;  /* Dark backgrounds */
  --color-sand: #F7F3F0;      /* Light backgrounds */
}
```

### Update Content
- **Hero Text:** `src/components/Hero.jsx`
- **About Section:** `src/components/About.jsx`
- **Services:** `src/components/Services.jsx`
- **Destinations:** `src/components/Destinations.jsx`
- **Footer:** `src/components/Footer.jsx`

### Add Images
1. Place images in `public/` folder
2. Reference as `/image-name.jpg`
3. Add `loading="lazy"` for below-fold images

---

## 🔧 Common Tasks

### Add New Page
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`:
```jsx
<Route path="/new-page" element={<NewPage />} />
```
3. Add navigation link in `src/components/Navigation.jsx`

### Add New Component
1. Create file in `src/components/`
2. Import in parent component
3. Use inline styles or CSS modules

### Connect Contact Form
Edit `src/components/ContactForm.jsx`:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  // Replace with your API endpoint
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
};
```

---

## 📦 Project Structure

```
dokpa-expeditions/
├── public/              # Static assets
│   ├── images/         # All images
│   ├── .htaccess       # Server config
│   └── robots.txt      # SEO
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── App.jsx         # Main app
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite config
└── package.json        # Dependencies
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173
# Or use different port
npm run dev -- --port 3000
```

### Images Not Loading
- Check file path (case-sensitive)
- Verify image is in `public/` folder
- Clear browser cache (Ctrl+Shift+R)

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Theme Not Persisting
- Check browser localStorage
- Clear site data and reload
- Verify localStorage is enabled

---

## 📚 Documentation

- **Full README:** `README.md`
- **Deployment Guide:** `DEPLOYMENT.md`
- **Fixes Implemented:** `FIXES_IMPLEMENTED.md`

---

## 🆘 Need Help?

- Check browser console for errors
- Review component files for examples
- Test in incognito mode to rule out cache issues
- Contact: expeditions@dokpa.com

---

## ✅ Pre-Deployment Checklist

- [ ] All images optimized and uploaded
- [ ] Contact form connected to backend
- [ ] Meta tags updated with real URLs
- [ ] Google Analytics added (optional)
- [ ] SSL certificate configured
- [ ] Test on multiple devices
- [ ] Test all navigation links
- [ ] Verify mobile menu works
- [ ] Check form submission
- [ ] Test 404 page

---

**Happy Coding! 🏔️**
