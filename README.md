# Rabiul Islam Naba - Portfolio

A modern, enterprise-quality personal portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4?style=flat-square&logo=framer)

## About

This portfolio showcases **Rabiul Islam Naba**, an accomplished supply chain and procurement leader with extensive experience across Bangladesh's manufacturing, energy, and technology sectors. Currently serving as the **Head of Supply Chain at Fervent Multiboard Industries Limited**.

### Professional Highlights

- **Current Role**: Head of Supply Chain at Fervent Multiboard Industries Limited
- **Previous Experience**: Rahimafrooz Storage Power Business, Walton Micro-Tech Corporation
- **Education**: B.Sc. in Industrial & Production Engineering from BUET
- **Location**: Dhaka, Bangladesh

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Smooth animations |
| **Google Fonts** | Inter & Playfair Display |

## Features

- **Premium Design System** - Custom color palette, typography scale, and spacing
- **Responsive Layout** - Mobile-first design with adaptive navigation
- **Smooth Animations** - Framer Motion powered transitions and hover effects
- **SEO Optimized** - Complete metadata, Open Graph, and Twitter cards
- **Accessible** - WCAG compliant with proper focus states
- **Performance** - Optimized builds with code splitting

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── error.tsx           # Error boundary
│   ├── loading.tsx         # Loading state
│   └── not-found.tsx       # 404 page
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   ├── Badge.tsx
│   │   ├── ProgressBar.tsx
│   │   └── Input.tsx
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   └── layout/
│       ├── Navbar.tsx
│       └── Footer.tsx
├── lib/
│   ├── utils.ts            # Utility functions
│   └── animations.ts       # Framer Motion presets
├── data/
│   └── portfolio.ts        # Portfolio content
└── styles/
    └── globals.css         # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- Yarn or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/naba-portfolio-nextjs.git

# Navigate to project directory
cd naba-portfolio-nextjs

# Install dependencies
yarn install

# Start development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server |
| `yarn build` | Create production build |
| `yarn start` | Run production server |
| `yarn lint` | Run ESLint |

## Customization

### Update Personal Information

Edit `src/data/portfolio.ts` to update:
- Personal details
- Work experience
- Education
- Skills
- Social links

### Modify Design System

Customize `tailwind.config.ts` for:
- Color palette
- Typography
- Spacing scale
- Animation presets

### Add Your Photo

Replace the placeholder in the Hero section with your actual photo by updating `src/components/sections/Hero.tsx`.

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
yarn build
```

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Load JS**: ~145kB (optimized)
- **Static Generation**: Pre-rendered pages for fast loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Rabiul Islam Naba**
- Location: Dhaka, Bangladesh
- LinkedIn: [Connect](https://linkedin.com/in/rabiulnaba)
- Facebook: [Follow](https://facebook.com/rabiulnaba)

---

Built with precision in Bangladesh
