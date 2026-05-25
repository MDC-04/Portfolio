# Mohamed Dyae Chellaf — Portfolio

A modern, production-ready developer portfolio built with Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **i18n:** next-intl (French, English, Spanish)
- **Dark Mode:** next-themes
- **Icons:** Lucide React

## Features

- Multilingual support (FR / EN / ES)
- Dark/Light mode with smooth transitions
- Responsive design (mobile-first)
- Animated sections with Framer Motion
- SEO optimized with proper metadata
- Accessible and performant
- Production-ready for Vercel deployment

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure

```
src/
├── app/                  # Next.js App Router pages & layout
│   ├── globals.css       # Global styles & Tailwind theme
│   ├── layout.tsx        # Root layout with providers
│   ├── page.tsx          # Home page (all sections)
│   └── not-found.tsx     # 404 page
├── components/           # Reusable UI components
│   ├── LanguageSwitcher  # i18n language dropdown
│   ├── SectionHeader     # Consistent section headers
│   ├── SectionWrapper    # Scroll-reveal animation wrapper
│   ├── ThemeProvider     # Dark mode provider
│   └── ThemeToggle       # Dark/light mode toggle
├── data/                 # Static data (skills, experiences, etc.)
├── hooks/                # Custom React hooks
├── i18n/                 # Internationalization config
├── lib/                  # Utilities & animation variants
├── sections/             # Page sections (Hero, About, Skills, etc.)
├── translations/         # JSON translation files (fr, en, es)
└── types/                # TypeScript type definitions
```

## Customization

### Content
- Edit data files in `src/data/` to update experiences, skills, projects, etc.
- Update translations in `src/translations/` for each language.

### Assets
- Place your CV as `public/cv.pdf`
- Add project screenshots in `public/projects/`
- Add technology icons in `public/icons/`
- Replace company logos in `public/logos/`

### Contact Form
The contact form currently simulates submission. To connect it to a real backend:
- Use a service like Resend, SendGrid, or Formspree
- Create an API route in `src/app/api/contact/route.ts`

## Deploy on Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel will auto-detect Next.js and configure the build
4. Click **Deploy**

No environment variables are required for the base deployment.

## Future Improvements

- Add a blog section with MDX support
- Integrate a real contact form backend (Resend/SendGrid)
- Add page transition animations
- Add a project detail page with gallery
- Add analytics (Vercel Analytics / Plausible)
- Add a CMS for content management (Sanity/Contentful)
- PWA support
- Performance monitoring with Web Vitals

## License

MIT
