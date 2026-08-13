# Harishanker Tripathi — Portfolio

Personal portfolio website built with **Astro** and **Tailwind CSS**, deployed to **GitHub Pages**.

## 🚀 Live Site

**https://harishankert.github.io/PortFoilo/**

## 🛠️ Tech Stack

- **Astro 7.x** — static site generator
- **Tailwind CSS 4.x** — utility-first styling
- **TypeScript** — strict mode
- **Node.js** ≥ 22.12.0

## 📁 Project Structure

```text
/
├── public/              # Static assets (favicon, robots.txt, sitemap, llms.txt)
├── src/
│   ├── components/      # Section components (Hero, About, Skills, etc.)
│   ├── layouts/         # Layout.astro (SEO, nav, global shell)
│   ├── pages/           # index.astro (single page)
│   └── styles/          # global.css (design tokens, utilities)
├── .github/workflows/   # GitHub Actions deployment workflow
├── astro.config.mjs     # Astro config (site, base, output)
└── package.json
```

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🚢 Deployment

This project uses **GitHub Actions** to automatically build and deploy to GitHub Pages on every push to `main`.

### How it works

1. Push changes to the `main` branch
2. The `.github/workflows/deploy.yml` workflow runs automatically
3. The workflow builds the site with `npm run build`
4. The built `dist/` output is deployed to GitHub Pages

### Manual deployment

You can also trigger the workflow manually from the **Actions** tab in the GitHub repository.

### Configuration notes

- `astro.config.mjs` uses `base: '/PortFoilo/'` to match the repository name
- GitHub Pages is configured with **build_type: workflow** (deploy from GitHub Actions)
- The site URL is `https://harishankert.github.io/PortFoilo/`

## 🔍 SEO & AI Discovery

- `public/robots.txt` — allows all major search engines and AI crawlers
- `public/sitemap.xml` — sitemap for search engines
- `public/llms.txt` — structured plain-text profile for AI agents and LLMs
- JSON-LD structured data (Person schema) in `Layout.astro`
- Open Graph and Twitter Card meta tags

## 📄 License

© 2026 Harishanker Tripathi. All rights reserved.