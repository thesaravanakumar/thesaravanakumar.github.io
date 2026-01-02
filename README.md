## About This Project

This is a **portfolio website** that demonstrates:

- **High-performance static site generation** with server-side rendering
- **Beautiful, responsive UI** with modern design patterns
- **Mobile-first development** approach
- **SEO optimization** with dynamic Open Graph image generation
- **Content management** through MDX for rich, interactive articles
- **Fast load times** and optimized performance
- **Type-safe development** with TypeScript across the stack

## Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend Framework** | React 18+ with Next.js 14+ (App Router) |
| **Language** | TypeScript (100% type-safe) |
| **Styling** | Tailwind CSS + PostCSS |
| **Content** | MDX (Markdown + JSX components) |
| **Runtime** | Node.js |
| **Image Optimization** | Dynamic OG image generation, AVIF support |
| **Module System** | ES Modules |

### Key Features

**Next.js Excellence:**
- Static Site Generation (SSG) for blazing-fast performance
- Server-Side Rendering (SSR) for dynamic content
- API Routes for serverless functions
- File-based routing with intuitive structure
- Built-in optimization and code splitting

**Developer Experience:**
- Full type safety with TypeScript
- Component-driven architecture
- CSS-in-utility approach with Tailwind
- Development and production modes with hot reload

## Project Architecture

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # Serverless API endpoints (Spotify integration, OG generation)
│   ├── articles/          # Blog/article pages with MDX support
│   └── work/              # Portfolio projects showcase
├── components/            # Reusable React components
│   ├── articles/          # Article-specific layouts
│   ├── home/              # Homepage sections & experiments
│   ├── shared/            # Global UI components
│   ├── svgs/              # Custom SVG illustrations & icons
│   └── work/              # Work/portfolio components
└── utils/                 # Helper functions & utilities
    ├── fetch-articles.ts  # Content fetching
    ├── spotify.ts         # Spotify API integration
    └── helpers.ts         # Common utilities
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/thesaravanakumar/thesaravanakumar.github.io.git
cd thesaravanakumar.github.io

# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

## Featured Sections

- **Articles**: In-depth technical writing on infrastructure, programming, and cloud technologies
- **Work**: Portfolio of completed projects and experiments
- **Experiments**: Interactive demos showcasing cloud platforms (AWS, Azure, GCP, Aviatrix)
- **Listening**: Real-time Spotify integration showing currently playing music

## Technical Highlights

**Performance Optimized**: Static generation for instant page loads
**SEO Ready**: Dynamic OG image generation, structured metadata
**Accessible**: Semantic HTML, keyboard navigation, ARIA support
**Maintainable**: Clear component structure, TypeScript safety, consistent patterns
**Scalable**: Modular architecture, easy to add features and content
**Modern Stack**: Using latest React and Next.js patterns

## Key Dependencies

- `next` - React framework with SSR/SSG
- `react` - UI library
- `typescript` - Static type checking
- `tailwindcss` - Utility-first CSS
- `mdx-js` - MDX support for rich content

## Contributing

This is a personal portfolio project, but feedback and suggestions are always welcome!
