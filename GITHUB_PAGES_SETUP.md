# GitHub Pages Deployment Guide

## What I've Set Up

1. **Updated `vite.config.js`**: Added `base: '/chiru-productions-website/'` for correct asset paths
2. **Created GitHub Actions workflow**: `.github/workflows/deploy.yml` for automatic deployment
3. **Added deploy script**: `npm run deploy` in package.json

## Steps to Deploy

### 1. Fix Authentication Issue
You're getting an authentication error. Choose one of these solutions:

**Option A: Use SSH (Recommended)**
```bash
git remote set-url origin git@github.com:sathiyendren/chiru-productions-website.git
```

**Option B: Use Personal Access Token**
- Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
- Generate new token with `repo` scope
- Use it when prompted for password

### 2. Push Your Changes
```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub: https://github.com/sathiyendren/chiru-productions-website
2. Click **Settings** → **Pages** (in left sidebar)
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. Save

### 4. Trigger Deployment
Once you push to main, GitHub Actions will automatically:
- Build your React app
- Deploy to GitHub Pages

Your site will be live at:
**https://sathiyendren.github.io/chiru-productions-website/**

## Verify Deployment

1. Go to **Actions** tab in your GitHub repo
2. Watch the "Deploy to GitHub Pages" workflow run
3. Once complete (green checkmark), visit your live site

## Local Testing

Test the production build locally:
```bash
npm run build
npm run preview
```

## Troubleshooting

- **404 on refresh**: GitHub Pages doesn't support client-side routing by default. You may need to add a 404.html redirect.
- **Assets not loading**: Verify the `base` path in vite.config.js matches your repo name
- **Build fails**: Check the Actions tab for error logs

## Future Updates

Every push to `main` branch will automatically rebuild and redeploy your site.
