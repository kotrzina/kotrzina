# Kotrzina

Static landing page for the Kotrzina organization (Veselice, Czech Republic). Displays cards linking to related community websites:

- **Hriste ve Veselici** - Sports field reservation system
- **Lesempolem** - Running races organized since 2013
- **SDH Veselice** - Volunteer firefighters
- **Fotky** - Photo gallery from local events

## Tech Stack

- Next.js 16 (static export)
- React 19
- TypeScript
- React Bootstrap

## Development

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
# Build static site to out/ directory
yarn build

# Run linter
yarn lint
```

## Project Structure

```
├── components/
│   └── Board.tsx       # Reusable card component
├── images/             # WebP images for cards
├── pages/
│   └── index.tsx       # Main landing page
└── styles/
    ├── globals.css     # Global styles
    └── Home.module.css # Page layout styles
```
