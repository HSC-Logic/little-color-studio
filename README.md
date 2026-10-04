# Little Color Studio

A browser-only React/TypeScript coloring book for children. It includes 20 original local SVG pages, fill and pointer drawing tools, bounded undo/redo, IndexedDB saving, PNG/SVG/PDF exports, backup/import, responsive layouts, and offline PWA support.

## Run locally

```bash
npm ci
npm run dev
```

Production checks:

```bash
npm run typecheck
npm test
npm run build
```

## GitHub Pages

Push `main`, then select **GitHub Actions** under repository Settings → Pages. The workflow derives `/<repository-name>/` from `GITHUB_REPOSITORY`.

For a root site or custom domain, set the build environment variable `VITE_BASE_PATH=/`. For another deployment prefix, use a value with leading and trailing slashes, such as `/coloring/`.

## Install and offline use

After the first successful load and service-worker activation, visited pages and generated assets are cached. Install through the browser’s Install or Add to Home Screen command where supported. Browser installation behavior varies.

Artwork is stored only in IndexedDB on the current browser/device. Clearing site data may remove it. There is no cloud sync; use **Backup** to download a versioned JSON copy and **Import** to restore it.

## Add a template

1. Add a portrait `600 × 800` SVG to `public/templates/`.
2. Keep a white background, safe margins, thick outlines, and simple closed shapes.
3. Give each colorable shape a stable ID beginning with `region-`; never reuse an ID within the file.
4. Add its metadata to `src/templates.ts`. Increment `version` only when region compatibility changes.

Decorative strokes must not use `region-` IDs. No template may reference remote assets.
