# Youth Forge Website

A professional website for Youth Forge, a youth-led nonprofit organization focused on uncovering challenges faced by young entrepreneurs under 25.

## Features

- 🎨 Swiss minimalism design
- 🌍 Interactive global chapters map (Leaflet)
- 📝 Blog with Supabase integration
- 🎭 Animated logo with SVG components
- 📱 Fully responsive design
- ⚡ Built with Next.js 14, TypeScript, and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Move your logo assets to the `public` folder:
   - logo-transparent.png
   - globe-svgrepo-com.svg
   - magnifying-glass-svgrepo-com.svg
   - bar-chart-svgrepo-com.svg
   - trend-up-thin-svgrepo-com.svg

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Supabase Setup (Optional)

The blog uses Supabase for content management. To set it up:

1. Create a table called `blog` with the following structure:
```sql
create table blog (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text unique not null,
  excerpt text,
  content text,
  featured_image text,
  author text,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  published boolean default false
);
```

2. The credentials are already configured in `.env.local`

## Project Structure

```
youth-forge/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog listing and posts
│   ├── chapters/          # Chapters with map
│   ├── contact/           # Contact form
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Site header
│   ├── Footer.tsx         # Site footer
│   ├── LogoAnimation.tsx  # Animated logo
│   └── Map.tsx            # Leaflet map
├── lib/                   # Utilities
│   └── supabase.ts        # Supabase client
└── public/                # Static assets

```

## Color Palette

Primary (Blue shades):
- #8bc4e0
- #619bb6
- #37738d
- #004e66
- #002c42

Accents:
- Green: #7BC043
- Red: #EF3E36
- Blue: #0074D9
- Yellow: #FFDC00

## Build for Production

```bash
npm run build
npm start
```

## License

© 2024 Youth Forge. All rights reserved.
