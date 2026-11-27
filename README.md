# SAJAN – Bersama, Bergerak, dan Berdampak

Website resmi **SAJAN**, gerakan anak muda Bireuen, Aceh.
It's a static multi-page site built with [Vite](https://vite.dev/).

## Requirements

- [Node.js](https://nodejs.org/) **20.19+** (LTS recommended), which includes npm

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:5173
```

## Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the local dev server with hot reload   |
| `npm run build`   | Build the production site into `dist/`       |
| `npm run preview` | Serve the production build locally           |

## Project structure

```
.
├── index.html                 # Home page (entry)
├── isu-3.html                 # Isu 03 documentation page (entry)
├── public/                    # Static files copied as-is (favicon, etc.)
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/kegiatan/   # Activity photos (optimized/hashed by Vite)
│   ├── pages/
│   │   ├── home/              # Home page script + styles
│   │   └── isu-3/             # Isu 03 page script + styles
│   └── shared/                # Reusable JS modules (footer year, lightbox)
├── vite.config.js             # Vite config (multi-page inputs)
└── package.json
```

### Adding a new page

1. Create `my-page.html` in the project root.
2. Create `src/pages/my-page/main.js` (import its CSS there) and load it with
   `<script type="module" src="/src/pages/my-page/main.js"></script>`.
3. Register it in `build.rollupOptions.input` in `vite.config.js`.

## Deployment

`npm run build` writes a fully static site to `dist/`. Because `base` is `./`,
the output works from any sub-path, e.g. GitHub Pages at `/SAJAN/`.
