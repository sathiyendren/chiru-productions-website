# Domain Setup Guide - Point to GitHub Pages

## 🎯 Goal
Make `www.chiruproductions.com` show your GitHub Pages website instead of GoDaddy website builder.

## 📋 Current Status
- ✅ CNAME file created and deployed
- ✅ GitHub Pages ready for custom domain
- ⏳ DNS configuration needed

## 🔧 DNS Configuration Steps

### **Step 1: Log into Your Domain Registrar**
Go to where you purchased `chiruproductions.com` (GoDaddy, Namecheap, etc.)

### **Step 2: Update DNS Settings**

#### **Option A: CNAME Record (Recommended)**
1. Find DNS Management or Domain Settings
2. Add a new CNAME record:
   - **Type**: CNAME
   - **Host/Name**: www
   - **Value/Points to**: sathiyendren.github.io
   - **TTL**: 1 hour (or default)

#### **Option B: A Record**
1. Add a new A record:
   - **Type**: A
   - **Host/Name**: www
   - **Value/Points to**: 185.199.108.153
   - **TTL**: 1 hour (or default)

### **Step 3: Configure GitHub Pages**
1. Go to your repository: https://github.com/sathiyendren/chiru-productions-website
2. Click **Settings** → **Pages**
3. Under "Custom domain", enter: `www.chiruproductions.com`
4. Click **Save**
5. Wait for the green checkmark indicating DNS is verified

## ⏱️ **Propagation Time**
DNS changes can take **24-48 hours** to propagate worldwide.

## 🧪 **Testing Steps**

### **1. Check DNS Propagation**
```bash
# Check CNAME record
dig www.chiruproductions.com CNAME

# Or use online tool:
# https://www.whatsmydns.net/
```

### **2. Test Website Access**
After DNS propagation, visit: `https://www.chiruproductions.com`

### **3. Verify SSL Certificate**
GitHub Pages automatically provides SSL certificates once DNS is verified.

## 🔍 **Troubleshooting**

### **If you still see GoDaddy:**
1. DNS hasn't propagated yet (wait longer)
2. Wrong DNS record configured
3. Caching in your browser (clear cache)

### **If you get SSL errors:**
1. Wait for SSL certificate provisioning (can take up to 24 hours)
2. Ensure DNS is properly configured
3. Check GitHub Pages domain status

### **If site doesn't load:**
1. Verify CNAME file is deployed
2. Check GitHub Pages domain settings
3. Ensure DNS record points correctly

## 📊 **Popular Domain Registrars**

### **GoDaddy**
1. Go to "DNS Management"
2. Add CNAME record as above
3. Save changes

### **Namecheap**
1. Go to "Domain List" → "Manage"
2. "Advanced DNS" tab
3. Add CNAME record

### **Google Domains**
1. Go to "DNS" section
2. Add custom record
3. Select CNAME type

## 🎯 **Expected Result**
After successful configuration:
- `www.chiruproductions.com` → Your GitHub Pages website
- SSL certificate automatically provided
- No more GoDaddy website builder
- Full functionality of your Chiru Productions website

## 📞 **If You Need Help**
1. Check your domain registrar's help documentation
2. Use online DNS lookup tools
3. Contact your domain registrar support

## 🚀 **Alternative: Use GitHub Pages URL**
If domain setup is complex, you can always use:
```
https://sathiyendren.github.io/chiru-productions-website/
```

This URL works perfectly with SSL and all features!
