# Google Analytics Setup Guide

## Overview
Your Chiru Productions website now has Google Analytics 4 (GA4) integration implemented. This will help you track user behavior, engagement, and performance metrics.

## 🔧 Setup Required

### 1. Get Your GA4 Measurement ID
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Admin" (gear icon) in the bottom left
4. Under "Account", create a new account or select existing
5. Under "Property", create a new property:
   - Property name: "Chiru Productions Website"
   - Time zone: Select your time zone
   - Currency: Select your currency
6. Under "Business details", fill in your information
7. Click "Next" and select your industry
8. Click "Create" and accept the terms
9. You'll see your **Measurement ID** (format: G-XXXXXXXXXX)

### 2. Update Your Measurement ID
Replace `GA_MEASUREMENT_ID` in the following file with your actual ID:

#### In `src/data.js` (line 3):
```javascript
export const GA_CONFIG = {
  MEASUREMENT_ID: 'GA_MEASUREMENT_ID', // Replace with your actual GA4 Measurement ID
  ENABLED: true, // Set to false to disable analytics
  DEBUG_MODE: false, // Set to true for debugging
}
```

**Note**: The build process automatically updates `index.html` and other files with the measurement ID from `data.js`, so you only need to update it in one place!

## 📊 What's Being Tracked

### Page Views
- Automatic page view tracking
- Custom page path tracking for SPA navigation

### User Interactions
- **Film Clicks**: When users click on film cards
- **Trailer Plays**: When users watch film trailers
- **Coming Soon Views**: When users view coming soon modals
- **Navigation Clicks**: When users navigate to different sections
- **Mobile Menu Usage**: Open/close interactions
- **External Link Clicks**: Links to external sites
- **CTA Button Clicks**: "Explore Films" and "Watch Showreel" buttons

### Engagement Metrics
- Scroll depth tracking
- Mobile menu interactions
- Content engagement patterns

## 🧪 Testing Your Setup

### 1. Real-time Testing
1. Open your website in a browser
2. Go to Google Analytics → Real-time reports
3. You should see your active user appear

### 2. Event Testing
1. Open browser developer tools
2. Go to Console tab
3. Type: `window.gtag`
4. If it returns a function, GA is properly loaded

### 3. Debug Mode (Optional)
For testing, you can add debug mode:
```javascript
gtag('config', 'G-YOUR_ID', { debug_mode: true });
```

## 📈 Key Reports to Monitor

### Audience Reports
- Users and sessions
- New vs returning visitors
- Geographic distribution
- Device categories

### Engagement Reports
- Average engagement time
- Events tracked
- Conversions (if set up)
- Page views and sessions

### Acquisition Reports
- Traffic sources
- Organic search
- Direct traffic
- Referral traffic

## 🔒 Privacy Considerations

- No personal data is collected
- Analytics respects user privacy settings
- Users can opt-out via browser extensions
- Consider adding a privacy policy to your website

## 🚀 Next Steps

1. **Set up your GA4 property** and get your Measurement ID
2. **Update the code** with your actual Measurement ID
3. **Deploy the changes** using `npm run deploy`
4. **Test the tracking** by visiting your website
5. **Monitor the data** in your Google Analytics dashboard

## 📞 Support

If you need help with Google Analytics setup:
- Google Analytics Help Center
- Google Analytics YouTube tutorials
- Consider hiring a GA specialist for advanced tracking

## 🎯 Pro Tips

- Set up goals for key conversions (contact forms, etc.)
- Create custom dashboards for film-specific metrics
- Set up email reports for weekly insights
- Link with Google Search Console for SEO data
- Consider setting up enhanced ecommerce if you add ticket sales

---

**Note**: Replace all instances of `GA_MEASUREMENT_ID` with your actual Google Analytics 4 Measurement ID before deploying.
