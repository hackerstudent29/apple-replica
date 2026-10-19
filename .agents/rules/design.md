---
trigger: always_on
---

# MASTER PROMPT: EXACT APPLE.COM RECONSTRUCTION

## Mission

Act as a senior frontend engineer, website reverse engineer, UI/UX designer, asset-retrieval engineer, and animation specialist. Reconstruct Apple's website as faithfully as possible inside my existing Next.js project.

**Reference:** https://www.apple.com/  
**Reverse-engineering toolkit:** https://github.com/morluto/rea.git  
**Existing route inventory:** `apple_important_routes.csv`, `apple_important_routes.md`, and `apple_important_routes.json`, if available.

Use Next.js, TypeScript, React, the existing project's architecture, and Motion for React/Framer Motion. The result must reproduce the important pages, routing, content, images, videos, typography, dimensions, colors, layouts, icons, interactions, animations, and responsive behavior of the reference.

This is a full multi-page website reconstruction, not a homepage redesign or an Apple-inspired mockup. Accuracy, completeness, responsiveness, and functional behavior are mandatory.

## 1. Inspect the project and configure REA

Before changing files, inspect the existing repository, package manager, framework, dependencies, routing, components, styling, and project instructions. Preserve working functionality.

Clone or inspect `https://github.com/morluto/rea.git` and read its README, installation instructions, tool catalog, and documentation. Determine which tools are available through the current agent, MCP server, or CLI. If installation is required, follow the documented setup and verify that it works without overwriting existing configuration unnecessarily.

Use REA's supported capabilities to investigate DOM structure, page scripts, network resources, navigation, screenshots, and other observable website details. Use Playwright, browser developer tools, and HTTP requests wherever REA cannot provide the required evidence.

Do not assume reverse engineering automatically recovers Apple's original source code. Inspect real pages and assets, record evidence, and reproduce observable behavior. Follow website access restrictions and applicable asset licenses. Never bypass authentication, DRM, or technical access controls.

## 2. Crawl all important pages and routing

Start with the existing route inventory, but verify and expand it. Discover child pages through Apple's navigation, footer, product links, internal links, and accessible XML sitemaps.

Inspect these official starting points:

- https://www.apple.com/
- https://www.apple.com/sitemap/
- https://www.apple.com/robots.txt
- https://www.apple.com/shop/sitemap.xml
- https://www.apple.com/newsroom/sitemap.xml
- https://www.apple.com/retail/sitemap/sitemap.xml
- https://www.apple.com/today/sitemap-index.xml
- https://support.apple.com/

Parse available sitemap indexes and child sitemaps recursively. Crawl internal links from important pages, deduplicate routes, follow appropriate redirects, and discover meaningful routes missing from the existing inventory. If a sitemap cannot be retrieved, use browser navigation and other permitted methods. Never mark a route as inspected without evidence.

Cover all important page families, including:

- Mac, MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio, and comparisons.
- iPhone, individual models, features, switching, and comparisons.
- iPad, iPad Pro, iPad Air, iPad mini, and comparisons.
- Apple Watch, bands, product details, and comparisons.
- AirPods, variants, and comparisons.
- Apple Vision Pro.
- Apple TV, HomePod, Home, AirTag, and accessories.
- Apple Music, Apple TV+, Apple Arcade, Apple Fitness+, Apple News+, Apple One, and iCloud.
- Apple Intelligence, operating systems, and creative software.
- Store categories, individual product pages, buying/configuration flows, accessories, Trade In, refurbished products, financing and delivery information where accessible.
- Support, retail locations, Genius Bar, Today at Apple, About Apple, Newsroom, environmental information, careers, and other important corporate pages.

Do not stop at this list. Follow real links and include other significant publicly accessible pages discovered during the crawl. Include important nested product-detail and feature routes, not just category landing pages.

Create and maintain:

- `docs/apple-route-inventory.csv`
- `docs/apple-route-inventory.json`
- `docs/apple-crawl-report.md`

For each route, record its source URL, local route, title, category, parent, discovery source, HTTP/fetch status, redirects, canonical URL where available, page template, collected assets, captured viewports, implementation status, QA status, and limitations.

The initial inventory contains approximately 132 routes, but this is only a starting point. Verify and expand it. Do not invent routes or claim exhaustive coverage without evidence. Record inaccessible routes explicitly.

## 3. Reverse-engineer every important page

Before implementing each page, open the reference URL and inspect the complete page, not just its first viewport. Capture full-page screenshots and individual viewport screenshots. Investigate sticky elements, scrolling sections, responsive changes, product selectors, menus, galleries, and important interaction states.

Use DOM inspection and computed CSS to obtain actual element positions and dimensions whenever possible. Record:

**Layout:** viewport dimensions, page margins, container widths, section heights, header height, grid structure, gaps, alignment, padding, element positions, image/video dimensions, aspect ratios, sticky offsets, stacking order, and section boundaries.

**Typography:** exact text, font family, weight, size, line height, letter spacing, text width, alignment, color, opacity, line breaks, and responsive changes.

**Appearance:** backgrounds, color values, gradients, borders, radii, shadows, overlays, transparency, blur, dividers, and hover/focus/active states.

**Interactions:** navigation menus, image galleries, color selectors, carousels, product configurators, scroll transitions, buttons, overlays, video behavior, and mobile-specific interactions.

Measure rather than guess. Text wrapping and typography directly affect section height and element positioning. Use actual measurements where obtainable and label estimates honestly.

Create `docs/page-measurements/<route-slug>.json` for important routes. Associate each specification with its viewport, element role, dimensions, typography, colors, and evidence screenshot.

## 4. Fetch and map all relevant assets

Images and videos are essential to fidelity. Do not replace original imagery with random stock photography, generated products, generic placeholders, or unrelated assets.

Inspect image elements, `srcset`, `<picture>` sources, lazy-loaded resources, CSS background images, SVGs, video elements, poster images, and browser network requests. Obtain the highest appropriate publicly accessible resolution permitted for the intended use.

Pay special attention to product galleries. For each product, inspect and collect all available relevant images, alternate angles, colors, finishes, and responsive media variants. A blue product selector must display the appropriate blue product image, not the same silver image used for every selection. Implement actual gallery and swatch behavior.

For videos, inspect sources, posters, aspect ratios, autoplay/mute/loop behavior, responsive variants, and scroll-triggered behavior. Use the correct local video and poster when retrieval is permitted. Do not replace important video sections with static images unless necessary, and document any unavailable media. Never bypass DRM or restricted access.

Organize assets under:

`public/assets/apple/`

Use clear subdirectories such as `mac/`, `iphone/`, `ipad/`, `watch/`, `airpods/`, `vision/`, `home/`, `services/`, `accessories/`, `store/`, `retail/`, and `shared/`.

Create `docs/apple-asset-manifest.json` recording each asset's source URL, local path, associated route, type, dimensions, variant/color, responsive use, component/section, retrieval status, and relevant usage notes.

Check for missing files, incorrect product variants, corrupted media, duplicates, and incorrect mappings. Prefer local assets to provide stable rendering and reproducible tests. If an asset cannot be retrieved lawfully, document that fact instead of silently substituting unrelated imagery.

## 5. Rebuild the actual Next.js application

Work directly in the existing project. Use its current architecture if suitable, or implement Next.js App Router with TypeScript and reusable React components.

Use route-specific content and data-driven components rather than one enormous component or generic pages that merely change their heading and image.

Recommended component groups:

- Navigation, desktop menus, mobile menus, footer.
- Hero sections, promotional grids, feature sections, product cards.
- Product galleries, color swatches, comparison tables.
- Video sections, carousels, buttons, dialogs, and overlays.
- Shared page layouts, responsive components, animation utilities, and route-specific data.

Implement each route according to its actual reference. Reuse components only where the source genuinely shares a pattern. Components must support different media ratios, text alignments, colors, section layouts, CTA placement, and mobile behavior.

Preserve the source's text content, heading hierarchy, paragraph structure, button labels, feature descriptions, captions, comparisons, footnotes, and relevant disclosures where permitted. Do not use placeholder marketing copy or fabricated specifications.

All important links should navigate to the corresponding local reconstructed routes. Implement appropriate local demonstration behavior for interfaces dependent on private backend services; do not fake real purchases, accounts, payments, or authentication. Unknown routes should display an appropriate 404 page rather than silently rendering the homepage.

## 6. Pixel-level visual fidelity

Treat each reference page as a measured specification.

Reproduce the original:

- Header and navigation geometry.
- Hero height and position within the viewport.
- Exact heading and paragraph placement.
- Font sizes, weights, line heights, text widths, and line breaks.
- Image and video positions, dimensions, aspect ratios, crops, and alignment.
- Section spacing, content widths, grids, and background transitions.
- Button dimensions, text, colors, radii, borders, and spacing.
- Product selector shapes, spacing, and selected states.
- Icon shapes, size, stroke, and alignment.
- Footer structure and typography.
- Sticky navigation, overlays, and layering.

Use measured CSS values and well-defined design tokens. Do not apply one generic layout to all pages or add arbitrary gradients, shadows, blur, or decorative effects absent from the reference.

Use publicly accessible official Apple icon/SVG assets when permitted. Avoid emojis or unrelated icons as substitutes for distinctive source icons. Use the closest appropriate lawful alternative only when the real asset is inaccessible.

Prefer stable layouts over approximation. Prevent fonts and media from shifting content after load. Correct every unintended overlap, clipping issue, overflow, and incorrect image placement.

## 7. Desktop, tablet, and mobile

Do not simply scale the desktop page down. Inspect each important page at multiple sizes, identify actual breakpoint behavior, and reproduce the layout changes.

Test at these viewports and additional widths when needed:

- Desktop large: 1440 × 900.
- Desktop standard: 1280 × 800.
- Compact laptop: 1024 × 768.
- Tablet portrait: 820 × 1180.
- Tablet landscape: 1180 × 820.
- Mobile: 375 × 812, 390 × 844, and 430 × 932

Measure and implement changes in navigation, typography, margins, columns, section order, image assets, image crops, CTA stacking, media sizing, carousels, sticky elements, and footer structure.

The mobile layout must be deliberately reconstructed from mobile