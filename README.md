# Free PNG to SVG Converter

Browser-native raster-to-SVG converter for [free-png-to-svg.web-free.site](https://free-png-to-svg.web-free.site).

Based on [Image2SVG](https://github.com/dipeshwalia/image2svg) (MIT). Uses **VTracer** WASM, **imagetracerjs**, and **SVGO** in the client. Images are never uploaded.

## Develop

```bash
npm install
npm run dev
```

## Build (static export for Cloudflare Workers assets)

```bash
npm run build
```

Output directory: `out/` (also writes `out/sitemap.xml` and injects the shared web-free.site footer snippets).

## Preview production build

```bash
npm run build
npm start
```

## Tests

```bash
npm test
```

## Deploy

Deployment is handled separately from this repo (`wrangler.toml` is for the operator). Do not commit API tokens.