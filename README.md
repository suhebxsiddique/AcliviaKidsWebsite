# Aclivia Kids — Professional B2B Website

Premium B2B pharmaceutical website for Aclivia Kids, featuring a modern, responsive design optimized for all devices. Built with enterprise-grade animations and professional UI/UX.

## ✨ Features
- 🎨 Premium gradient design with white, blue & purple theme
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js 14 App Router
- 🎭 Smooth animations with IntersectionObserver & CSS keyframes
- 🔒 ISO & GMP certified manufacturer showcase
- 📊 Animated statistics counters
- 🗓️ Interactive timeline (2020-2025)
- 🎯 Certification badges and quality assurance
- ❓ Interactive FAQ accordion
- 📬 Contact form for B2B inquiries

## 🛠 Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Data Fetching:** React Query (@tanstack/react-query)
- **Icons:** Lucide React
- **Animations:** Lottie React + Custom CSS

## 🚀 Run Locally

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation Steps

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Open browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm start
```

## 📱 Responsive Design
The website is fully optimized for:
- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px  
- **Desktop:** 1024px+
- **Large Desktop:** 1440px+

All components use Tailwind's responsive breakpoints (sm:, md:, lg:, xl:) for perfect display on any device.

## 🌐 Free Hosting Options

### Option 1: Vercel (Recommended) ⭐
**Best for Next.js - Zero Config Deployment**

1. **Sign up:** Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```
3. **Import Project:**
   - Go to Vercel Dashboard
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy" (Vercel auto-detects Next.js)
4. **Done!** Your site will be live at `your-project.vercel.app`

**Custom Domain:** Free SSL, can add custom domain in project settings

---

### Option 2: Netlify
**Great Alternative with Drag & Drop**

1. **Build your project:**
   ```bash
   npm run build
   ```
2. **Sign up:** Go to [netlify.com](https://netlify.com)
3. **Deploy:**
   - Drag & drop the `.next` and `out` folders, OR
   - Connect GitHub repo for auto-deployments
4. **Configure:**
   - Build command: `npm run build`
   - Publish directory: `.next`

**Custom Domain:** Free SSL, custom domain support

---

### Option 3: GitHub Pages
**100% Free with GitHub**

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```
2. **Add to package.json:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d out"
   }
   ```
3. **Update next.config.mjs:**
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/your-repo-name',
     images: { unoptimized: true }
   }
   ```
4. **Deploy:**
   ```bash
   npm run deploy
   ```

**URL:** `https://yourusername.github.io/your-repo-name`

---

### Option 4: Render
**Modern Cloud Platform**

1. **Sign up:** [render.com](https://render.com)
2. **Connect GitHub repo**
3. **Configure:**
   - Environment: Node
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
4. **Deploy** - Automatic SSL included

---

### Option 5: Railway.app
**Simple Developer Platform**

1. **Sign up:** [railway.app](https://railway.app)
2. **Deploy from GitHub** - One-click deployment
3. **Auto-detects** Next.js settings
4. **Free tier:** $5 credit monthly

---

## 📦 Deployment Comparison

| Platform | Free Tier | Custom Domain | SSL | Best For |
|----------|-----------|---------------|-----|----------|
| **Vercel** | ✅ Yes | ✅ Yes | ✅ Free | Next.js (Best) |
| **Netlify** | ✅ Yes | ✅ Yes | ✅ Free | Static Sites |
| **GitHub Pages** | ✅ Yes | ✅ Yes | ✅ Free | Personal Projects |
| **Render** | ✅ 750hrs/mo | ✅ Yes | ✅ Free | Full Stack |
| **Railway** | ✅ $5 credit | ✅ Yes | ✅ Free | Quick Deploy |

## 🎯 Quick Deployment (Vercel - 2 Minutes)

**Fastest way to get your site online:**

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Navigate to project folder
cd aclivia-kids

# 3. Deploy (follow prompts)
vercel

# 4. For production deployment
vercel --prod
```

That's it! Your site is live! 🎉

## 🔧 Environment Variables (Optional)

If you add backend features later, create `.env.local`:

```env
NEXT_PUBLIC_API_URL=your_api_url
CONTACT_EMAIL=sales@acliviakids.com
```

## 📝 Project Structure

```
aclivia-kids/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   ├── components/         # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Timeline.tsx
│   │   └── ...
│   ├── lib/               # Utilities & data
│   │   ├── mock.ts        # Mock product data
│   │   └── store.ts       # Zustand store
│   └── styles/
│       └── globals.css    # Global styles & animations
├── public/                # Static assets
│   └── aclivia-logo.png
├── next.config.mjs        # Next.js config
├── tailwind.config.ts     # Tailwind config
└── package.json
```

## 🎨 Customization

### Update Brand Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  brand: {
    50: '#eff6ff',
    // ... customize your colors
  }
}
```

### Update Content
- Products: `src/lib/mock.ts`
- Contact Email: `src/components/ContactSection.tsx`
- Company Info: Update text in component files

### Add Real Backend
Replace mock data in `src/lib/mock.ts` with API calls using React Query.

## 📞 Support

For issues or questions:
- Check the [Next.js Documentation](https://nextjs.org/docs)
- Visit [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 📄 License

This project is created for Aclivia Kids.

---

**Built with ❤️ using Next.js 14, TypeScript & Tailwind CSS**
npm run dev
```
Visit http://localhost:3000

## Project layout
- `src/app` — App Router pages and layout
- `src/components` — UI components
- `src/lib/mock.ts` — sample data
- `src/styles/globals.css` — Tailwind styles

## Next steps
- Hook real catalog/search APIs.
- Add authentication and cart/checkout pages.
- SEO and analytics.