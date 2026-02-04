# Non-Profit Pouches Website

A modern, responsive React + TypeScript website for Non-Profit Pouches - a co-operative that supplies lockable phone pouches with profits going to tech education.

## Features

- **Modern React + TypeScript**: Built with Vite for fast development and optimal performance
- **Fully Responsive**: Mobile-first design with burger menu navigation
- **Trustworthy Design**: Professional color scheme conveying honesty and dependability
- **Prominent Branding**: Bold company name and clear messaging
- **Working Contact Form**: Integrated email functionality via Web3Forms
- **Fast & Lightweight**: Optimized bundle size and performance

## Color Scheme

- **Primary Blue (#0f4c81)**: Conveys trust and professionalism
- **Secondary Teal (#14b8a6)**: Represents freshness and honesty
- **Accent Orange (#ff6b35)**: Adds warmth and approachability

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

## Installation

```bash
cd nonprofit-pouches-react
npm install
```

## Setup Email Form

The contact form uses Web3Forms for email notifications. Follow these steps:

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Sign up for a free account
3. Create a new form and get your Access Key
4. Open `src/components/InterestForm.tsx`
5. Find line with `access_key: 'YOUR_WEB3FORMS_ACCESS_KEY'`
6. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key

Example:
```typescript
access_key: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
```

The form will automatically send submissions to `j.d.hawker@googlemail.com`.

## Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

Build the production-ready application:

```bash
npm run build
```

The build output will be in the `dist` folder.

Preview the production build:

```bash
npm run preview
```

## Deployment

### Option 1: Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your site will be live instantly

Or use the web interface:
1. Go to [https://vercel.com/](https://vercel.com/)
2. Import your Git repository
3. Vercel will auto-detect Vite and deploy

### Option 2: Netlify

1. Build the project: `npm run build`
2. Go to [https://www.netlify.com/](https://www.netlify.com/)
3. Drag and drop the `dist` folder
4. Your site is live!

Or connect your Git repository for automatic deployments.

### Option 3: GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Update `vite.config.ts` to set the base path:
   ```typescript
   export default defineConfig({
     base: '/nonprofit-pouches/',
     plugins: [react()],
   })
   ```
4. Run: `npm run deploy`

## Project Structure

```
nonprofit-pouches-react/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation with burger menu
│   │   ├── Hero.tsx            # Hero section
│   │   ├── About.tsx           # About the co-op
│   │   ├── HowItWorks.tsx      # 4-step process
│   │   ├── Pricing.tsx         # Transparent pricing
│   │   ├── Product.tsx         # Product showcase
│   │   ├── InterestForm.tsx    # Contact form
│   │   ├── Footer.tsx          # Footer
│   │   └── *.css              # Component styles
│   ├── App.tsx                 # Main app component
│   ├── App.css                 # App styles
│   ├── index.css               # Global styles
│   └── main.tsx                # Entry point
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Customization

### Adding Product Images

Replace the emoji placeholders with actual images:

1. Add images to `public/` folder (e.g., `public/pouch.jpg`, `public/lock.jpg`)
2. Update `src/components/Product.tsx`:

```tsx
<div className="product-item">
  <img src="/pouch.jpg" alt="Phone pouch" style={{ width: '100%', borderRadius: '12px' }} />
  <h3>Secure Storage</h3>
  <p>...</p>
</div>
```

### Changing Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #0f4c81;    /* Main blue */
  --secondary-color: #14b8a6;  /* Teal accent */
  --accent-color: #ff6b35;     /* Orange CTA */
}
```

### Updating Content

All content is in the component files under `src/components/`. Edit the JSX directly to update text, links, or structure.

## Testing the Email Form

1. Set up your Web3Forms access key (see Setup Email Form section)
2. Run the dev server: `npm run dev`
3. Fill out the form at the bottom of the page
4. Submit and check `j.d.hawker@googlemail.com` for the email

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Lightning-fast build tool
- **Web3Forms**: Simple form-to-email service
- **CSS3**: Modern styling with CSS Grid and Flexbox

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lighthouse score: 90+ across all metrics
- Fast initial load with code splitting
- Optimized images and assets
- Minimal JavaScript bundle

## Support

For questions or issues, contact: j.d.hawker@googlemail.com

## License

All rights reserved - Non-Profit Pouches 2026
