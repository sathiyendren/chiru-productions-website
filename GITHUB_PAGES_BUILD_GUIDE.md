# GitHub Pages Build & Deployment Guide

## 🎯 Overview
This guide explains how GitHub Pages works with your React app and how to ensure build/deployed files work properly.

## 📁 Project Structure

### **Source Files (main branch)**
```
chiru-productions-website/
├── src/
│   ├── components/     # React components
│   ├── data.js         # Website content
│   ├── utils/          # Utility functions
│   └── index.css       # Main stylesheet
├── public/             # Static assets
├── package.json        # Dependencies & scripts
└── vite.config.js      # Build configuration
```

### **Built Files (gh-pages branch)**
```
chiru-productions-website/
├── index.html          # Main HTML file
├── css/                # Compiled CSS
├── js/                 # Compiled JavaScript
├── images/             # Optimized images
├── media/              # Video files
└── CNAME               # Custom domain (if configured)
```

## 🔧 How GitHub Pages Works

### **1. Build Process**
```bash
npm run build
```
This command:
- Takes your React source code
- Compiles JSX to JavaScript
- Optimizes CSS and images
- Creates production-ready files in `dist/` folder

### **2. Deployment Process**
```bash
npm run deploy
```
This command:
- Runs `npm run build` first
- Copies files from `dist/` to `gh-pages` branch
- Pushes to GitHub
- GitHub Pages serves these files

### **3. GitHub Pages Serving**
- GitHub looks at the `gh-pages` branch
- Serves `index.html` as the main page
- All assets are served from the branch root

## ⚙️ Configuration Files

### **vite.config.js** - Critical for GitHub Pages
```javascript
export default defineConfig({
  base: '/chiru-productions-website/',  // ← IMPORTANT!
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Organizes built files into folders
          if (/\.(mp4|webm|ogg|mp3|wav)/.test(assetInfo.name)) {
            return `media/[name]-[hash][extname]`
          }
          if (/\.(png|jpe?g|gif|svg|webp)/.test(assetInfo.name)) {
            return `images/[name]-[hash][extname]`
          }
          return `${extType}/[name]-[hash][extname]`
        }
      }
    }
  }
})
```

### **package.json** - Build Scripts
```json
{
  "scripts": {
    "build": "vite build",
    "deploy": "npm run build && gh-pages -d dist",
    "prebuild": "node scripts/update-ga.js"
  }
}
```

## 🚀 Making Build Files Work

### **1. Correct Base Path**
The `base: '/chiru-productions-website/'` in `vite.config.js` is crucial:
- Tells Vite the app will be served from a subdirectory
- Updates all asset paths to include the repo name
- Prevents 404 errors for CSS/JS files

### **2. Asset Path Handling**
In your React components, use imports like:
```javascript
import video from '../assets/chiru-logo.mp4'
import image from '../assets/poster.jpg'
```

Vite automatically handles these during build.

### **3. Font and External Resources**
```javascript
// In index.html - these work automatically
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet" />
```

## 🔄 Deployment Workflow

### **Step 1: Make Changes**
Edit source files in the `src/` directory on `main` branch

### **Step 2: Build & Deploy**
```bash
npm run deploy
```

### **Step 3: Automatic Process**
1. Vite builds your React app
2. Files are optimized and placed in `dist/`
3. `gh-pages` copies files to `gh-pages` branch
4. GitHub Pages serves the updated files

### **Step 4: Access Website**
```
https://sathiyendren.github.io/chiru-productions-website/
```

## 🐛 Common Issues & Solutions

### **Issue 1: Blank Screen**
**Cause**: Missing source files or wrong branch
**Solution**: 
```bash
git checkout main  # Work on main branch
npm run deploy     # Rebuild and deploy
```

### **Issue 2: CSS/JS 404 Errors**
**Cause**: Wrong `base` path in vite.config.js
**Solution**: Ensure `base: '/chiru-productions-website/'` matches your repo name

### **Issue 3: Images Not Loading**
**Cause**: Incorrect import paths
**Solution**: Use relative imports in React components
```javascript
// Correct
import logo from '../assets/logo.svg'

// Wrong (for GitHub Pages)
import logo from '/assets/logo.svg'
```

### **Issue 4: Custom Domain Not Working**
**Cause**: DNS or GitHub Pages configuration
**Solution**: 
1. Configure DNS CNAME: `www` → `sathiyendren.github.io`
2. Set custom domain in GitHub repository Settings → Pages

## 📊 File Structure After Build

### **Before Build (src/)**
```
src/
├── components/
│   ├── Hero.jsx
│   ├── Films.jsx
│   └── Nav.jsx
├── assets/
│   └── chiru-logo.mp4
└── index.css
```

### **After Build (dist/)**
```
dist/
├── index.html
├── css/
│   └── index-D2Kdx0j-.css
├── js/
│   ├── index-BeDkWEva.js
│   └── vendor-awliAPFB.js
├── images/
│   └── favicon-Dgj9OuB4.png
└── media/
    └── chiru-logo-CDbBx3c_.mp4
```

## 🔍 Debugging Build Issues

### **1. Check Build Output**
```bash
npm run build
# Look for errors in the build log
```

### **2. Test Locally**
```bash
npm run build
npm run preview
# Visit http://localhost:4173/chiru-productions-website/
```

### **3. Check GitHub Pages**
1. Go to repository Settings → Pages
2. Check if source is set to "Deploy from a branch"
3. Ensure branch is `gh-pages` and folder is `/ (root)`

### **4. Verify File Paths**
In browser dev tools, check Network tab for 404 errors.

## 🎯 Best Practices

### **1. Always Work on main Branch**
```bash
git checkout main  # Development branch
# Never work directly on gh-pages
```

### **2. Use npm run deploy**
This ensures build and deployment happen together.

### **3. Check Build Before Deploy**
```bash
npm run build    # Check for errors first
npm run deploy   # Then deploy
```

### **4. Test After Deployment**
Always visit the live URL after deployment to verify it works.

## 🚀 Quick Commands

```bash
# Build only
npm run build

# Build and deploy
npm run deploy

# Preview build locally
npm run preview

# Check current branch
git branch

# Switch to main branch
git checkout main

# Check deployment status
git log --oneline gh-pages
```

## 📞 Troubleshooting Checklist

- [ ] Working on `main` branch?
- [ ] `base` path correct in vite.config.js?
- [ ] All imports use relative paths?
- [ ] Build completes without errors?
- [ ] Files appear in `dist/` folder?
- [ ] GitHub Pages source set to `gh-pages` branch?
- [ ] No 404 errors in browser Network tab?

Following this guide ensures your build files work perfectly on GitHub Pages!
