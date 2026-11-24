# Cursor agent brief — free-png-to-svg

Target: https://free-png-to-svg.web-free.site
Repo name (wrangler `name`): `free-png-to-svg`
English name: "Free PNG to SVG Converter". English primary.

Follow every rule in the attached `agent-brief-common.md`, with one SEO override below. Do not write the tool from scratch. Do not deploy. Do not switch models. Push to `main` of this repo when the work is done.

**SEO / language override (takes precedence over the common brief):** do **not** add a French or Swahili landing page, UI translation, or how-to pages. How-to and legal pages are English only. You may omit `hreflang` fr.

This is a **local-file** PNG/JPG-to-SVG vectorizer (logos, icons, signatures, line art). The user opens a local image, adjusts colours / detail, and downloads an SVG. No upload. No paid vectorizer API (no Vectorizer.AI or similar).

## Recommended base (use this)

- Repo: https://github.com/dipeshwalia/image2svg
- License: MIT (keep `LICENSE`, credit Image2SVG / dipeshwalia in the footer and on `/about`)
- Stars: 2
- Last commit: 11 May 2026, 22:03 Africa/Kigali — `1d50744dee` on `main`
- Official demo: `https://image2svg-delta.vercel.app/`
- Stack: Next.js 16, React 19, TypeScript, XState, `imagetracerjs` (Unlicense, https://github.com/jankovicsandras/imagetracerjs, 1,550 stars), `vtracer-wasm`, `svgo`, optional `tesseract.js`. A complete browser-native converter. **The current `next.config.ts` has no `output: 'export'`.** You **must** switch it to a static export (or otherwise prerender every public page to static HTML) so it can be hosted on Cloudflare Workers static assets. Do not keep a Node server.
- Cloudflare: only after static export. No bare SPA fallback. Drop or disable the PWA service worker if it interferes with ads or prerendered pages.
- Verification (this box, 23 Nov 2026, Africa/Kigali): GitHub API. `LICENSE` is a real MIT file (Copyright (c) 2026 Image2SVG contributors). Declared dependencies are client-side libraries; do not add a backend or a paid upscaler/vectorizer. If the app has an "AI upscaling" path that calls a remote API, remove it.
- Why this one: MIT with a real `LICENSE` file, a complete working website built on imagetracerjs (the library named in our research) plus VTracer and SVGO.

## Backup (MIT; already a static site)

- Repo: https://github.com/vtavakkoli/ClusterGlyph
- License: MIT (LICENSE file, Copyright (c) 2026 Vahid Tavakkoli)
- Stars: 2
- Last commit: 14 Nov 2026, 22:21 Africa/Kigali — `e4f4ba2366` on `main`
- Official demo: `https://vtavakkoli.github.io/ClusterGlyph/`
- Stack: vanilla JS, no build step, 100% in-browser Lab clustering + contour tracing, tests, recently maintained. A strong backup if static-exporting the Next.js app is painful. Credit ClusterGlyph and keep it client-side only.

Second backup: https://github.com/CHAOTIC-RAY/vectra (MIT, Copyright (c) 2026 CHAOTIC-RAY, last commit 15 Oct 2026, 07:58 Africa/Kigali, `d66b894d47`) — in-browser VTracer WASM, already aimed at Cloudflare Workers. Specialize and prerender pages.

`jankovicsandras/imagetracerjs` is the Unlicense library, not a full site. You may keep it as a dependency. Do not use GPL potrace-based apps (for example SVGcode forks under GPL-2.0) unless every MIT/Apache/BSD/Unlicense base above fails, and even then STOP and report first.

## Do not use these

- Repos without a license (`justynroberts/FinVector`, `Luo-hongyi/ImageTracer-CHROMA`, etc.).
- Anything that proxies Vectorizer.AI or another paid API, or that uploads the image to a server.

## What to build on top of dipeshwalia/image2svg

1. Import the base into this repo, keep the MIT license, and credit Image2SVG / dipeshwalia, imagetracerjs / jankovicsandras (Unlicense), and VTracer / SVGO as used. Omit GitHub Actions workflows if any (the token lacks the `workflow` scope — do not restore them).
2. Rebrand to "Free PNG to SVG Converter". English primary. No FR/SW translations of the site. Keep colour / detail controls and SVG download. A "logo / icon / signature / line art" preset or guidance is welcome. Enable static export / prerender.
3. Keep everything 100% in the browser. No accounts, no paid APIs, no API keys, no file upload. Accept local PNG and JPG (WebP too if easy). Let the user download the SVG.
4. Adsterra only, never AdSense. Use **only** the placeholder keys in this brief (or real keys if a follow-up provides them). Follow the `free-invoice-generator` pattern: all 10 units, banners in isolated iframes, `public/ads.json`. Never set COEP/COOP headers. Ads must not break tracing or download.
5. SEO: prerendered HTML for every page (no bare SPA fallback); unique title, meta description, canonical, OG; JSON-LD (WebApplication + FAQPage); `sitemap.xml` and `robots.txt` for `https://free-png-to-svg.web-free.site`; English how-to pages, at least `/how-to-convert-png-to-svg-in-the-browser`, `/logo-to-svg-for-print`, and `/convert-a-signature-to-svg` (each with its own title, description and canonical); prerendered `/privacy`, `/terms`, `/about`, `/contact`. Canonicals must be `https://free-png-to-svg.web-free.site`. No French landing page.
6. Footer: credit the upstream project and the tracing libraries, and add a link back to the hub `https://web-free.site/?ref=png-to-svg`.
7. On every prerendered HTML page, before `</body>`, add the More free tools block and the Cloudflare Web Analytics beacon (see below). Implement this with `scripts/inject-more-tools.mjs` hooked into `postbuild` or the end of `npm run build`, so a later rebuild cannot drop the home-page snippets. Do not rely on a one-off manual edit of `dist/` / `out/`.
   - The same **"More free tools"** block used on the other web-free.site tools (`id="wf-more-tools"`). Include a "Guides on this site" column for the how-to pages. List every current hub tool, plus the six other sites in this batch. Show **Free PNG to SVG Converter** as bold text, not a self-link. Every outbound tool/hub link must carry `?ref=png-to-svg`.
     - **Documents & writing:** Free Word Counter (`https://free-word-counter.web-free.site/?ref=png-to-svg`), Free PDF Converter (`https://free-pdf-converter.web-free.site/?ref=png-to-svg`), Free CV Maker (`https://free-cv-maker.web-free.site/?ref=png-to-svg`), Free Invoice Generator (`https://free-invoice-generator.web-free.site/?ref=png-to-svg`), Free Typing Test (`https://free-typing-test.web-free.site/?ref=png-to-svg`), Free Signature Generator (`https://free-signature-generator.web-free.site/?ref=png-to-svg`), Free Email Signature Generator (`https://free-email-signature-generator.web-free.site/?ref=png-to-svg`).
     - **Images & codes:** Free QR Code Creator (`https://free-qr-code-creator.web-free.site/?ref=png-to-svg`), Free Image Resizer (`https://free-image-resizer.web-free.site/?ref=png-to-svg`), Free Image to Text (`https://free-image-to-text.web-free.site/?ref=png-to-svg`), Free Background Remover (`https://free-background-remover.web-free.site/?ref=png-to-svg`), Free Image Compressor (`https://free-image-compressor.web-free.site/?ref=png-to-svg`), Free HEIC to JPG Converter (`https://free-heic-to-jpg.web-free.site/?ref=png-to-svg`), Free Image Upscaler (`https://free-image-upscaler.web-free.site/?ref=png-to-svg`), Free Passport Photo Maker (`https://free-passport-photo-maker.web-free.site/?ref=png-to-svg`), **Free PNG to SVG Converter**.
     - **Calculators & currency:** Free Online Calculator (`https://free-online-calculator.web-free.site/en/?ref=png-to-svg`), Free Currency Converter (`https://free-currency-converter.web-free.site/?ref=png-to-svg`), Free Unit Converter (`https://free-unit-converter.web-free.site/?ref=png-to-svg`), Free Loan Calculator (`https://free-loan-calculator.web-free.site/?ref=png-to-svg`), Free Age Calculator (`https://free-age-calculator.web-free.site/?ref=png-to-svg`), Free Percentage Calculator (`https://free-percentage-calculator.web-free.site/?ref=png-to-svg`), Free BMI Calculator (`https://free-bmi-calculator.web-free.site/?ref=png-to-svg`).
     - **Text & SEO:** Free AI Humanizer (`https://free-ai-humanizer.web-free.site/?ref=png-to-svg`), Free SEO Generator (`https://free-seo-generator.web-free.site/?ref=png-to-svg`), Free Backlink Generator (`https://free-backlink-generator.web-free.site/?ref=png-to-svg`), Free JSON Formatter (`https://free-json-formatter.web-free.site/?ref=png-to-svg`), Free Text to Speech (`https://free-text-to-speech.web-free.site/?ref=png-to-svg`), Free Speech to Text (`https://free-speech-to-text.web-free.site/?ref=png-to-svg`), Free Diff Checker (`https://free-diff-checker.web-free.site/?ref=png-to-svg`).
     - **Audio & video:** Free Video to MP3 Converter (`https://free-video-to-mp3.web-free.site/?ref=png-to-svg`), Free MP3 Cutter (`https://free-mp3-cutter.web-free.site/?ref=png-to-svg`), Free Screen Recorder (`https://free-screen-recorder.web-free.site/?ref=png-to-svg`), Free Video Compressor (`https://free-video-compressor.web-free.site/?ref=png-to-svg`), Free Video to GIF Converter (`https://free-video-to-gif.web-free.site/?ref=png-to-svg`), Free Audio Converter (`https://free-audio-converter.web-free.site/?ref=png-to-svg`).
     - **Files:** Free ZIP Tool (`https://free-zip-tool.web-free.site/?ref=png-to-svg`).
     - **Test data:** Free Fake Address Generator (`https://free-fake-address-generator.web-free.site/?ref=png-to-svg`), Free Fake Name Generator (`https://free-fake-name-generator.web-free.site/?ref=png-to-svg`).
     - **Security & passwords:** Free Password Generator (`https://free-password-generator.web-free.site/?ref=png-to-svg`).
   - The same Cloudflare Web Analytics tag used on the other sites: `<!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "3e2f5f96ab32442ebb6e6f650615b58a"}'></script><!-- End Cloudflare Web Analytics -->`
8. `wrangler.toml`: `name = "free-png-to-svg"`, `[assets]` pointing at the static build output (`dist` or `out`). Use `html_handling = "auto-trailing-slash"` and `not_found_handling = "none"`. Custom domain `free-png-to-svg.web-free.site`. **Do not put `account_id` (or API tokens) in the committed file.** **Do not deploy.** Push to this repo only. Deploy happens from Gentil's box. Add a `.assetsignore` so Worker assets do not publish `AGENT_BRIEF.md`, `wrangler.toml`, `package.json`, `package-lock.json`, `.git/`, `node_modules/`, or other source/config files.
9. Test: production build, run locally (without COEP/COOP), convert a simple logo-like PNG and a signature-like image to SVG, open the SVG in the browser, check mobile at 390px, confirm no file is uploaded, fix bugs. Critique your own result and fix issues.
10. Push everything to `main`. Final report: base repo + license, which tracer(s) you shipped, how you made the site static, pages, tests and results, remaining caveats, commit hash.

## Adsterra ad codes

Real Adsterra codes were not ready when this brief was written (the publisher-dashboard collection was stopped mid-run on an earlier attempt). **Do not invent real-looking keys.** Wire all 10 units and `public/ads.json` with the exact placeholder strings below (32 characters each, prefix `wf23placeholder0`). A later swap (or a follow-up to you with real keys) will replace them before deploy.

Code formats (KEY = the 32-char placeholder, later a 32-hex hash):
- Popunder: <script data-cfasync="false" src="https://abscloud.org/1/KEY"></script>
- Native Banner: <script async="async" data-cfasync="false" src="https://bauval.org/21/KEY"></script><div id="container-KEY"></div>
- Social Bar: <script data-cfasync="false" src="https://bauval.org/14/KEY"></script>
- Banner WxH: <script>atOptions = {'key':'KEY','format':'iframe','height':H,'width':W,'params':{}};</script><script src="https://bauval.org/22/KEY"></script>
- Smartlink URL: https://araplhn.org/4/KEY

## free-png-to-svg.web-free.site — site ID SITE_ID_PENDING
Popunder wf23placeholder0popunder00000000
Native Banner wf23placeholder0nativebanner0000
Smartlink wf23placeholder0smartlink0000000
Social Bar wf23placeholder0socialbar0000000
468x60 wf23placeholder0banner468x600000
160x300 wf23placeholder0banner160x300000
320x50 wf23placeholder0banner320x500000
300x250 wf23placeholder0banner300x250000
160x600 wf23placeholder0banner160x600000
728x90 wf23placeholder0banner728x900000


---
NOTE: any /workspace/... box path mentioned above is NOT accessible to you; everything you need is inline below. Clone the base repo from GitHub yourself.

# COMMON RULES (contents of agent-brief-common.md)
COMMON RULES (from Gentil, mandatory):
- Start from an existing, usable open-source repository: search GitHub, then compare stars, activity, license (MIT/Apache/BSD preferred; avoid AGPL/GPL unless nothing else fits) and code quality. Import its code into this repo, keep its LICENSE, and credit it in the footer and on /about.
- Do NOT write the tool from scratch. If no suitable open-source base exists, STOP before coding and report the 2-3 best candidates and why they fail. Gentil must approve any from-scratch work, and he only allows it for one or two simple pages.
- Keep the model you were launched with. Do not switch models.
- Must be hostable on Cloudflare Workers with static assets (free plan). No paid APIs, no server costs, no API keys. Client-side processing preferred.
- Monetization: Adsterra only, never AdSense. This brief ships obviously fake placeholder keys (the `wf23placeholder0…` strings). Wire all 10 units with those exact strings so they can be swapped later. Do not invent real-looking 32-hex Adsterra keys, URLs, or site IDs. If this prompt (or a later follow-up) includes a filled "ADSTERRA CODES FOR THIS SITE" section with real 32-hex keys, use those instead of the placeholders. Integrate all 10 units following the free-invoice-generator pattern: Popunder and Social Bar in the HTML; 728x90 at the top; sidebar 160x600 and 160x300; mid-page 728x90, 468x60 and Native; 300x250; sticky 320x50 on mobile; Smartlink as a discreet link. Banners go in isolated iframes with atOptions {key, format:'iframe', height, width, params:{}} and src https://bauval.org/22/<key>. Also write public/ads.json with all the codes. Never set COEP/COOP headers. Ads must not break the tool.
- SEO: prerendered HTML for every page (no bare SPA fallback); unique title, meta description, canonical and OG tags; JSON-LD (WebApplication + FAQPage); a long-tail keyword page or two; FAQ and how-to content; /privacy, /terms, /about and /contact pages (prerendered). The site-specific brief may override hreflang / French landing pages.
- Name: "Free <Tool>". English primary.
- Hook a `scripts/inject-more-tools.mjs` (or equivalent) into `postbuild` or the end of `npm run build`, so the Cloudflare Web Analytics beacon and the "More free tools" block are injected into every built HTML page and cannot be dropped by a later rebuild.
- Add wrangler.toml with name = <repo name> and [assets] pointing to the build output. Do NOT deploy: Gentil's box deploys it.
- Test: build, run it locally, exercise the main feature in a browser, check mobile at 390px, and fix bugs. Critique your own result and fix the issues you find.
- Push everything to main of this repo.
- Final report: the base repo and its license, the pages, the tests and their results, the remaining caveats, and the commit hash.

# ADSTERRA CODES FOR THIS SITE (use only these)
- Popunder: <script data-cfasync="false" src="https://abscloud.org/1/KEY"></script>
- Native Banner: <script async="async" data-cfasync="false" src="https://bauval.org/21/KEY"></script><div id="container-KEY"></div>
- Social Bar: <script data-cfasync="false" src="https://bauval.org/14/KEY"></script>
- Banner WxH: <script>atOptions = {'key':'KEY','format':'iframe','height':H,'width':W,'params':{}};</script><script src="https://bauval.org/22/KEY"></script>
- Smartlink URL: https://araplhn.org/4/KEY

## free-png-to-svg.web-free.site — site ID SITE_ID_PENDING
Popunder wf23placeholder0popunder00000000
Native Banner wf23placeholder0nativebanner0000
Smartlink wf23placeholder0smartlink0000000
Social Bar wf23placeholder0socialbar0000000
468x60 wf23placeholder0banner468x600000
160x300 wf23placeholder0banner160x300000
320x50 wf23placeholder0banner320x500000
300x250 wf23placeholder0banner300x250000
160x600 wf23placeholder0banner160x600000
728x90 wf23placeholder0banner728x900000
