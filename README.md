# Harishanker Tripathi — Portfolio

Personal portfolio, built as a Three.js/WebGL experience: an animated deep-space network graph as the backdrop (custom GLSL, mouse-reactive, click ripples), GSAP ScrollTrigger reveals, and Lenis smooth scrolling.

**Live:** https://harishankert.github.io/portfolio/

An earlier Astro + Tailwind version of this site is preserved at the [`archive/astro-portfolio`](https://github.com/harishankert/portfolio/tree/archive/astro-portfolio) tag.

## Stack

- **Vite + TypeScript** — no framework, small and fast
- **Three.js** — custom GLSL shaders for the network graph, starfield, and nebula (no external assets/models)
- **GSAP + ScrollTrigger** — scroll-driven reveals and the hero → background scroll-linked fade
- **Lenis** — smooth scrolling, kept in sync with anchor-link navigation

## Design notes

- The hero background is a GPU-only particle/line network (fibonacci-sphere node placement, nearest-neighbour edges, animated pulse-along-edge shader) meant to echo "interconnected enterprise systems," set against a volumetric starfield and soft nebula glows — not a generic particle field.
- The network reacts to the cursor (proximity glow) and clicks (a ripple that propagates through the graph).
- `prefers-reduced-motion` disables rotation, twinkle, pulse animation, and Lenis smoothing; the scene still renders one static frame so the page isn't empty.
- No WebGL → the canvas is removed and a CSS radial-gradient fallback (`body.no-webgl`) takes over.
- `devicePixelRatio` capped at 3 (2 on detected low-power devices), `antialias` set at renderer construction, node/star counts scaled down on low-power devices (few cores, low `deviceMemory`, or narrow viewport).

## Commands

| Command           | Action                              |
| ------------------ | ------------------------------------ |
| `npm install`      | Install dependencies                 |
| `npm run dev`       | Start dev server at `localhost:5173` |
| `npm run build`     | Type-check + production build to `./dist/` |
| `npm run preview`   | Preview the production build locally |

## Deployment

`.github/workflows/deploy.yml` builds and deploys `dist/` to GitHub Pages on every push to `main` (or via manual dispatch). `vite.config.ts` uses a relative `base: './'`, so no repo-name-specific path config is needed.
