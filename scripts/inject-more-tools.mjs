import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { readdirSync, statSync } from "node:fs";

const OUT = join(process.cwd(), "out");
const REF = "png-to-svg";
const hub = `https://web-free.site/?ref=${REF}`;

const links = {
  guides: [
    ["/how-to-convert-png-to-svg-in-the-browser/", "How to convert PNG to SVG in the browser"],
    ["/logo-to-svg-for-print/", "Logo to SVG for print"],
    ["/convert-a-signature-to-svg/", "Convert a signature to SVG"],
  ],
  documents: [
    ["https://free-word-counter.web-free.site/", "Free Word Counter"],
    ["https://free-pdf-converter.web-free.site/", "Free PDF Converter"],
    ["https://free-cv-maker.web-free.site/", "Free CV Maker"],
    ["https://free-invoice-generator.web-free.site/", "Free Invoice Generator"],
    ["https://free-typing-test.web-free.site/", "Free Typing Test"],
    ["https://free-signature-generator.web-free.site/", "Free Signature Generator"],
    ["https://free-email-signature-generator.web-free.site/", "Free Email Signature Generator"],
  ],
  images: [
    ["https://free-qr-code-creator.web-free.site/", "Free QR Code Creator"],
    ["https://free-image-resizer.web-free.site/", "Free Image Resizer"],
    ["https://free-image-to-text.web-free.site/", "Free Image to Text"],
    ["https://free-background-remover.web-free.site/", "Free Background Remover"],
    ["https://free-image-compressor.web-free.site/", "Free Image Compressor"],
    ["https://free-heic-to-jpg.web-free.site/", "Free HEIC to JPG Converter"],
    ["https://free-image-upscaler.web-free.site/", "Free Image Upscaler"],
    ["https://free-passport-photo-maker.web-free.site/", "Free Passport Photo Maker"],
  ],
  calculators: [
    ["https://free-online-calculator.web-free.site/", "Free Online Calculator"],
    ["https://free-currency-converter.web-free.site/", "Free Currency Converter"],
    ["https://free-unit-converter.web-free.site/", "Free Unit Converter"],
    ["https://free-loan-calculator.web-free.site/", "Free Loan Calculator"],
    ["https://free-age-calculator.web-free.site/", "Free Age Calculator"],
    ["https://free-percentage-calculator.web-free.site/", "Free Percentage Calculator"],
    ["https://free-bmi-calculator.web-free.site/", "Free BMI Calculator"],
  ],
  textSeo: [
    ["https://free-ai-humanizer.web-free.site/", "Free AI Humanizer"],
    ["https://free-seo-generator.web-free.site/", "Free SEO Generator"],
    ["https://free-backlink-generator.web-free.site/", "Free Backlink Generator"],
    ["https://free-json-formatter.web-free.site/", "Free JSON Formatter"],
    ["https://free-text-to-speech.web-free.site/", "Free Text to Speech"],
    ["https://free-speech-to-text.web-free.site/", "Free Speech to Text"],
    ["https://free-diff-checker.web-free.site/", "Free Diff Checker"],
  ],
  audioVideo: [
    ["https://free-video-to-mp3.web-free.site/", "Free Video to MP3 Converter"],
    ["https://free-mp3-cutter.web-free.site/", "Free MP3 Cutter"],
    ["https://free-screen-recorder.web-free.site/", "Free Screen Recorder"],
    ["https://free-video-compressor.web-free.site/", "Free Video Compressor"],
    ["https://free-video-to-gif.web-free.site/", "Free Video to GIF Converter"],
    ["https://free-audio-converter.web-free.site/", "Free Audio Converter"],
  ],
  files: [["https://free-zip-tool.web-free.site/", "Free ZIP Tool"]],
  testData: [
    ["https://free-fake-address-generator.web-free.site/", "Free Fake Address Generator"],
    ["https://free-fake-name-generator.web-free.site/", "Free Fake Name Generator"],
  ],
  security: [["https://free-password-generator.web-free.site/", "Free Password Generator"]],
};

function withRef(url) {
  if (url.startsWith("/")) return url;
  const u = new URL(url);
  u.searchParams.set("ref", REF);
  return u.toString();
}

function listItems(entries, options = {}) {
  return entries
    .map(([href, label]) => {
      const path = withRef(href);
      if (options.bold === label) return `<li><strong>${label}</strong></li>`;
      return `<li><a href="${path}">${label}</a></li>`;
    })
    .join("");
}

function cat(title, itemsHtml, extraClass = "") {
  return `<div class="wf-mt-cat ${extraClass}"><h3>${title}</h3><ul>${itemsHtml}</ul></div>`;
}

const guidesHtml = listItems(links.guides);
const documentsHtml = listItems(links.documents);
const imagesHtml =
  listItems(links.images) + `<li><strong>Free PNG to SVG Converter</strong></li>`;

const grid = [
  cat("Guides on this site", guidesHtml, "wf-mt-guides"),
  cat("Documents &amp; writing", documentsHtml),
  cat("Images &amp; codes", imagesHtml),
  cat("Calculators &amp; currency", listItems(links.calculators)),
  cat("Text &amp; SEO", listItems(links.textSeo)),
  cat("Audio &amp; video", listItems(links.audioVideo)),
  cat("Files", listItems(links.files)),
  cat("Test data", listItems(links.testData)),
  cat("Security &amp; passwords", listItems(links.security)),
].join("");

const MORE_TOOLS = `
<aside id="wf-more-tools" class="wf-more-tools" aria-labelledby="wf-mt-title">
  <style>
    .wf-more-tools{box-sizing:border-box;width:100%;margin:2.5rem 0 0;padding:1.5rem 1rem 5rem;border-top:1px solid rgba(255,255,255,.14);background:rgba(22,24,28,.96);color:#f2f2f2;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:15px;line-height:1.5}
    .wf-more-tools *{box-sizing:border-box}
    .wf-more-tools h2{margin:0 0 .35rem;font-size:1.15rem;font-weight:700}
    .wf-more-tools .wf-mt-lead{margin:0 0 1rem;color:#c8c8c8}
    .wf-more-tools .wf-mt-lead a{color:#8ab4f8}
    .wf-more-tools .wf-mt-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:1rem 1.25rem}
    .wf-more-tools h3{margin:0 0 .4rem;font-size:.8rem;text-transform:uppercase;letter-spacing:.04em;color:#c8c8c8}
    .wf-more-tools ul{margin:0;padding:0;list-style:none}
    .wf-more-tools li{margin:0 0 .25rem}
    .wf-more-tools a{color:#8ab4f8;text-decoration:underline}
    .wf-more-tools a:hover{text-decoration:none}
  </style>
  <h2 id="wf-mt-title">More free tools</h2>
  <p class="wf-mt-lead">These utilities run in your browser. Browse the full list on <a href="${hub}">web-free.site</a>.</p>
  <div class="wf-mt-grid">${grid}<h3>Time</h3><ul><li><a href="https://free-time-zone-converter.web-free.site/?ref=png-to-svg">Free Time Zone Converter</a></li></ul><h3>Drawing</h3><ul><li><a href="https://free-whiteboard.web-free.site/?ref=png-to-svg">Free Whiteboard</a></li></ul><h3>Random &amp; pickers</h3><ul><li><a href="https://free-spin-wheel.web-free.site/?ref=png-to-svg">Free Spin Wheel</a></li></ul></div>
</aside>`;

const ANALYTICS = `<!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "3e2f5f96ab32442ebb6e6f650615b58a"}'></script><!-- End Cloudflare Web Analytics -->`;

const INJECT = `${MORE_TOOLS}\n${ANALYTICS}`;

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

let count = 0;
for (const file of walk(OUT)) {
  let html = readFileSync(file, "utf8");
  if (html.includes('id="wf-more-tools"')) continue;
  const marker = "</body>";
  const idx = html.lastIndexOf(marker);
  if (idx === -1) {
    console.warn("No </body> in", file);
    continue;
  }
  html = html.slice(0, idx) + INJECT + "\n" + html.slice(idx);
  writeFileSync(file, html, "utf8");
  count += 1;
}

console.log(`Injected more-tools + analytics into ${count} HTML files`);