# 🚀 Quick Start Guide

## Your Website is Ready!

### 📍 Location
```
c:\React folder\hariom\ayurvedic-herbs-dealer
```

### 🌐 View Your Website

**Option 1: Browser Preview (Recommended)**
- Click the browser preview button in your IDE
- Or visit: http://localhost:5173

**Option 2: Direct Browser**
- Open any browser
- Go to: http://localhost:5173

---

## 🎯 Quick Navigation

### Pages Available:
1. **Home** - http://localhost:5173/
2. **Herbs Catalog** - http://localhost:5173/herbs
3. **About Us** - http://localhost:5173/about
4. **Contact** - http://localhost:5173/contact

---

## ⚙️ Commands

### Start Development Server
```bash
cd "c:\React folder\hariom\ayurvedic-herbs-dealer"
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Customize

### Add More Herbs
Edit: `src/data/herbsData.js`

Add a new object to the array:
```javascript
{
  id: 31,
  scientificName: "Your Scientific Name",
  commonName: "COMMON NAME",
  hindiName: "हिंदी नाम",
  description: "Description here...",
  benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
  image: "https://images.unsplash.com/photo-xxxxx"
}
```

### Change Colors
Edit: `tailwind.config.js`

Modify the primary color values in the theme section.

### Update Contact Information
Edit: `src/components/Footer.jsx` and `src/pages/Contact.jsx`

### Change Business Name
Edit: `src/components/Navbar.jsx` and `index.html`

---

## 📱 Test Responsive Design

### Desktop View
- Just open in browser normally

### Mobile View
- Press F12 in browser
- Click device toolbar icon
- Select mobile device

### Tablet View
- Same as mobile, select tablet device

---

## 🎨 What's Included

✅ 30 Ayurvedic Herbs with full details
✅ Bilingual content (English & Hindi)
✅ Search functionality
✅ Contact form
✅ Responsive design
✅ Modern UI with animations
✅ Professional color scheme
✅ Mobile menu
✅ SEO-friendly structure

---

## 📞 Features by User Type

### For Farmers (किसान)
- Information about selling herbs
- Fair pricing details
- Contact options

### For Dealers (व्यापारी)
- Complete herbs catalog
- Search functionality
- Bulk inquiry options

### For Industries (उद्योग)
- Detailed herb specifications
- Quality assurance info
- Quote request system

---

## 🔧 Troubleshooting

### Server Not Starting?
```bash
# Kill any running node processes
taskkill /F /IM node.exe

# Restart the server
npm run dev
```

### Port 5173 Already in Use?
The server will automatically use the next available port.

### Changes Not Showing?
- Hard refresh: Ctrl + Shift + R (Windows)
- Or clear browser cache

---

## 📦 Dependencies Installed

- react & react-dom
- react-router-dom (routing)
- tailwindcss (styling)
- lucide-react (icons)
- vite (build tool)

All dependencies are already installed and ready to use!

---

## 🎉 You're All Set!

Your professional ayurvedic herbs dealership website is:
- ✅ Built with modern technologies
- ✅ Fully responsive
- ✅ Production-ready
- ✅ Easy to customize
- ✅ Well-documented

**Enjoy your new website!** 🌿

---

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [React Router Documentation](https://reactrouter.com)
