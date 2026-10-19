#  Apple.com Exact Reconstruction

An exact, high-fidelity reconstruction of Apple’s official website ([apple.com](https://www.apple.com/)), engineered with modern React, Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lenis smooth scrolling.

Built to mirror Apple’s authentic design language, official product lineups (iPhone Duo, iPhone 18 Pro, MacBook Pro M4, iPad Pro M4, Apple Watch Series 12 & Ultra 4, Vision Pro), interactive color pickers, fluid SwiftUI-inspired modals, and responsive geometry across desktop, tablet, and mobile.

---

## ✨ Key Features

- **133 Static Routes Prerendered:** Complete coverage of Apple's primary product categories, individual hardware detail pages, comparison tables, OS showcases, support, store, and sitemap.
- **Authentic Apple Assets:** Utilizes high-resolution official Apple isolated product cutouts, Retina assets (`2x`), inline video animations, and promotional typography.
- **SwiftUI Spring Modal System:** Portal-rendered modals that mount directly to `document.body` with fluid spring transitions, zero layout shifting, and backdrop blur.
- **Dynamic Interactive Color Selectors:** Real-time finish swatches that dynamically switch product photography across Titanium, Midnight, Starlight, and vibrant pastel finishes.
- **Cart & Bag Drawer:** Full client-side shopping bag state management with quantity adjusters, subtotal calculations, and free contactless delivery messaging.
- **Apple Navigation Bar:** Glassmorphism frosted header with integrated drop-down menus, live search overlay with quick links, and mobile accordion drawer.
- **Pixel-Level Geometry & Tokens:** Conforms to Apple's measured spacing, typography scale (SF Pro Display / Text fallback), button radii, and 12-column responsive layout grids.
- **Zero-Lag Page Transitions:** Optimized Next.js `<Link prefetch={true}>` routing with GPU-accelerated fade transitions and top progress indicators.

---

## 🗂️ Project Structure

```text
├── .agents/                    # Agent guidelines and design system rules
├── app/                        # Next.js 14 App Router routes (133 pages)
│   ├── [...slug]/              # Sitemap catch-all dynamic directory renderer
│   ├── accessories/            # Official accessories catalog
│   ├── airpods/                # AirPods lineup and comparisons
│   ├── apple-card/             # Apple Card & financing showcase
│   ├── apple-homeview/         # Apple HomeView smart display hub
│   ├── apple-intelligence/     # Apple Intelligence personal AI features
│   ├── apple-vision-pro/       # Spatial computing overview
│   ├── ipad/                   # iPad lineup (Pro, Air, 10th Gen, Mini)
│   ├── iphone/                 # iPhone lineup (Duo, 18 Pro, Air, 17, 16)
│   ├── mac/                    # Mac lineup (MacBook Air/Pro, iMac, Mac mini)
│   ├── os/                     # iOS, macOS, watchOS, visionOS overviews
│   ├── store/                  # Store landing and buying flows
│   ├── tv-home/                # Apple TV 4K, HomePod, HomeView
│   ├── watch/                  # Apple Watch Series 12, Ultra 4, SE
│   ├── globals.css             # Tailwind design tokens, typography, and variables
│   └── layout.tsx              # Root HTML wrapper, fonts, navigation, and footer
├── components/                 # 17 Modular, reusable UI components
│   ├── ChapterNav.tsx          # Sticky product category sub-navigation
│   ├── GlobalNav.tsx           # Desktop and mobile primary header
│   ├── GlobalFooter.tsx        # Directory footer with 5-column link lists
│   ├── HeroUnit.tsx            # Full-bleed responsive video & image hero cards
│   ├── ProductLineupFilter.tsx # Tabbed product cards with color swatches & specs
│   ├── PromoGrid.tsx           # 2-column promotional grid cards
│   ├── SwiftUIModal.tsx        # React Portal-mounted spring modal dialog
│   └── ...
├── context/                    # React Context (CartContext)
├── docs/                       # Route inventories, crawl reports, and asset manifests
│   ├── apple-route-inventory.json # 132 indexed Apple routes
│   ├── apple-asset-manifest.json  # Catalog of mapped official media assets
│   └── apple-crawl-report.md      # Crawl verification report
├── public/                     # Static media and assets
├── scripts/                    # Asset extraction & route auditing utilities
└── sitemap.json                # Complete verified Apple route registry
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17.0 or later
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/hackerstudent29/apple-replica.git
cd apple-replica

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Build all 133 static routes
npm run build

# Start the production server
npm run start
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** | App Router, Static Site Generation (SSG), dynamic routes |
| **TypeScript** | Strict type safety across all components and models |
| **Tailwind CSS** | Apple design token implementation, responsive utilities |
| **Framer Motion** | Spring animations, drawer transitions, and filter morphing |
| **Lenis** | Smooth momentum-based inertial scrolling |
| **Lucide Icons** | Crisp SVG vector glyphs matching Apple's SF Symbols |

---

## 📄 License
This project is an educational, non-commercial reconstruction of Apple's website design. All product names, logos, trademarks, and media assets belong to [Apple Inc.](https://www.apple.com/).
