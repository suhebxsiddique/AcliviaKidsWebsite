# 🚀 Deployment Guide - Aclivia Kids Website

## Quick Start: Deploy in 5 Minutes with Vercel

### Step 1: Create GitHub Account (if you don't have one)
1. Go to [github.com](https://github.com)
2. Click "Sign up" and create account

### Step 2: Push Your Code to GitHub

Open PowerShell in your project folder and run:

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Aclivia Kids website"

# Create repository on GitHub
# 1. Go to github.com and click "New Repository"
# 2. Name it: aclivia-kids
# 3. Don't initialize with README (we already have one)
# 4. Copy the URL they give you

# Link your local code to GitHub (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/aclivia-kids.git

# Push code to GitHub
git push -u origin main
```

### Step 3: Deploy to Vercel (FREE!)

1. **Go to [vercel.com](https://vercel.com)**

2. **Click "Sign Up" → Continue with GitHub**

3. **Authorize Vercel** to access your GitHub

4. **Import Your Project:**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Find "aclivia-kids" in your list
   - Click "Import"

5. **Configure Project:**
   - **Project Name:** aclivia-kids (or your choice)
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** ./
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** .next (auto-filled)
   - Click **"Deploy"**

6. **Wait 2-3 minutes** ⏳
   - Vercel will build and deploy your site
   - You'll see a success screen with confetti! 🎉

7. **Your site is live!** 🌐
   - URL: `https://aclivia-kids.vercel.app`
   - Or: `https://your-project-name.vercel.app`

### Step 4: Add Custom Domain (Optional)

1. **Buy a domain** from:
   - Namecheap.com ($8-12/year)
   - GoDaddy.com
   - Google Domains

2. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your domain (e.g., acliviakids.com)
   - Follow DNS setup instructions

3. **Vercel provides FREE SSL certificate** automatically! 🔒

---

## Alternative: Deploy via Vercel CLI (Even Faster!)

### Option A: One-Command Deploy

```powershell
# Install Vercel CLI globally
npm install -g vercel

# Navigate to your project
cd "c:\Users\Suheb\Desktop\Aclivia Kods\aclivia-kids"

# Deploy with one command!
vercel

# Follow prompts:
# 1. "Set up and deploy?" → Y
# 2. "Which scope?" → Select your account
# 3. "Link to existing project?" → N
# 4. "What's your project's name?" → aclivia-kids
# 5. "In which directory is your code located?" → ./
# 6. Wait for deployment...

# Get production URL
vercel --prod
```

---

## Other Free Hosting Options

### Option 1: Netlify

**Steps:**
```powershell
# 1. Build your site
npm run build

# 2. Go to netlify.com and sign up

# 3. Drag & drop the `.next` folder to Netlify

# OR connect GitHub:
# - Click "New site from Git"
# - Choose GitHub
# - Select aclivia-kids repository
# - Build command: npm run build
# - Publish directory: .next
# - Click Deploy!
```

**Your site will be live at:** `https://your-site-name.netlify.app`

---

### Option 2: GitHub Pages (100% Free Forever)

**Setup:**

1. **Install gh-pages:**
```powershell
npm install --save-dev gh-pages
```

2. **Update `package.json`** - Add these scripts:
```json
{
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d out"
  }
}
```

3. **Update `next.config.mjs`:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/aclivia-kids',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

4. **Deploy:**
```powershell
npm run deploy
```

5. **Enable GitHub Pages:**
   - Go to your GitHub repository
   - Settings → Pages
   - Source: gh-pages branch
   - Save

**Your site will be live at:** `https://YOUR_USERNAME.github.io/aclivia-kids`

---

### Option 3: Render.com

**Steps:**
1. Go to [render.com](https://render.com) and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name:** aclivia-kids
   - **Environment:** Node
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
5. Click "Create Web Service"

**Free tier:** Automatically goes to sleep after 15 min of inactivity

---

### Option 4: Railway.app

**Steps:**
1. Go to [railway.app](https://railway.app)
2. Click "Start a New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Railway auto-detects Next.js and deploys!

**Free tier:** $5 credit monthly (usually enough for small sites)

---

## 🎯 Recommended: Vercel

**Why Vercel is best for this project:**
- ✅ Made by Next.js creators (perfect compatibility)
- ✅ Zero configuration needed
- ✅ Automatic SSL/HTTPS
- ✅ Global CDN (super fast worldwide)
- ✅ Generous free tier
- ✅ Auto-deploys on git push
- ✅ Preview deployments for testing
- ✅ Custom domains with free SSL
- ✅ 100GB bandwidth/month free
- ✅ Unlimited websites

---

## 📊 Deployment Checklist

Before deploying, make sure:

- [ ] All dependencies installed (`npm install`)
- [ ] Project builds successfully (`npm run build`)
- [ ] No TypeScript errors (`npm run lint`)
- [ ] Logo file exists in `public/aclivia-logo.png`
- [ ] Environment variables set (if any)
- [ ] Contact email updated in ContactSection.tsx
- [ ] All images loading correctly
- [ ] Tested on mobile, tablet, desktop

---

## 🔄 Continuous Deployment

Once set up, your workflow becomes:

```powershell
# 1. Make changes to your code
# 2. Test locally
npm run dev

# 3. Commit and push to GitHub
git add .
git commit -m "Updated timeline section"
git push

# 4. Vercel automatically deploys! 🎉
# No manual steps needed!
```

---

## 🌍 After Deployment

### Share Your Website
Your site will be live at:
- `https://aclivia-kids.vercel.app` (Vercel)
- `https://aclivia-kids.netlify.app` (Netlify)
- Or your custom domain!

### Performance Optimization
Vercel automatically provides:
- ⚡ Global CDN
- 🗜️ Image optimization
- 💾 Automatic caching
- 🔒 SSL certificate
- 📱 Mobile optimization

### Monitor Your Site
- Vercel Dashboard shows:
  - Page views
  - Load times
  - Build logs
  - Deployment history

---

## 🆘 Troubleshooting

### Build Fails
```powershell
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Images Not Loading
- Check `next.config.mjs` has correct `images.remotePatterns`
- Verify image URLs are accessible
- For static images, place in `public/` folder

### Port Already in Use
```powershell
# Kill process on port 3000
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process -Force

# Then restart
npm run dev
```

---

## 📞 Need Help?

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Deployment Issues:** Check build logs in hosting platform

---

**🎉 Congratulations! Your professional website is now live and accessible worldwide!**
