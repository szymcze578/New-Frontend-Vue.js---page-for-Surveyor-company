# Geodimetr - Professional Geodetic Services Website

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF)
![Sanity](https://img.shields.io/badge/CMS-Sanity-F03E2F)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6)
![License](https://img.shields.io/badge/License-Proprietary-red)

A modern, responsive single-page website for **Geodimetr**, a professional geodetic surveying company based in Zawiercie, Silesia, Poland. All content is managed via Sanity CMS.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Vue 3 (Composition API + `<script setup>`) |
| Build tool | Vite |
| Styling | Tailwind CSS v4 |
| State management | Pinia |
| CMS | Sanity (studio in `sanity/`) |
| Animations | @vueuse/motion |
| Icons | Lucide Vue Next |
| Maps | @fawmi/vue-google-maps |
| Deployment | Railway |

## Getting Started

### Prerequisites

Create a `.env.local` file in the project root:

```env
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_GOOGLE_API_KEY=your_google_maps_api_key
```

### Install & run

```bash
# Install Vue app dependencies
npm install

# Start Vue dev server (http://localhost:3000)
npm run dev

# Install Sanity Studio dependencies
cd sanity && npm install

# Start Sanity Studio (http://localhost:3333)
cd sanity && npm run dev
```

### Build for production

```bash
npm run build
```

## Project Structure

```
├── src/
│   ├── components/        # Page sections (TheHeader, Hero, Services, etc.)
│   │   └── widgets/       # Reusable sub-components (SectionHeader, etc.)
│   ├── composables/
│   │   └── useIconMap.ts  # Maps CMS icon name strings to Lucide components
│   ├── lib/
│   │   └── sanity.ts      # Sanity client + image URL builder
│   ├── stores/
│   │   └── content.ts     # Pinia store — fetches all content via single GROQ query
│   ├── types/
│   │   └── content.ts     # TypeScript interfaces for all content types
│   └── assets/
│       └── theme.css      # CSS custom properties / design tokens
├── sanity/
│   ├── schemas/           # Sanity document type definitions
│   └── sanity.config.ts   # Studio configuration
```

## CMS Content Types

All page content is managed in Sanity Studio at http://localhost:3333.

| Document | Type | Description |
|---|---|---|
| Hero | singleton | Headline, subheading, location, stats |
| Usługi (Services) | list | Geodetic service cards with icon, features |
| Statystyki (Trust Stats) | list | Key numbers/stats cards |
| Kroki procesu (Process) | list | Step-by-step process |
| Atuty (Advantages) | list | Why-choose-us cards |
| Projekty (Projects) | list | Portfolio items with image |
| FAQ | list | Questions & answers |
| Opinie (Testimonials) | list | Client reviews |
| Dane kontaktowe | singleton | Phone, email, address |
| Nawigacja i Stopka | singleton | Nav links, footer description, Facebook URL |
| Nagłówki sekcji | singleton | Badge/title/description for each section |

## Development Status

- ✅ Single-page responsive layout
- ✅ Sanity CMS integration (all content managed via Studio)
- ✅ Google Maps integration
- ✅ Scroll-triggered animations
- ✅ Mobile navigation
- ✅ Contact form
