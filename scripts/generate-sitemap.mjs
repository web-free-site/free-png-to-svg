import { writeFileSync } from "node:fs";
import { join } from "node:path";

const SITE = "https://free-png-to-svg.web-free.site";
const outDir = join(process.cwd(), "out");

const paths = [
  "/",
  "/editor/",
  "/privacy/",
  "/terms/",
  "/about/",
  "/contact/",
  "/how-to-convert-png-to-svg-in-the-browser/",
  "/logo-to-svg-for-print/",
  "/convert-a-signature-to-svg/",
];

const lastmod = new Date().toISOString().slice(0, 10);

const body = paths
  .map(
    (p) =>
      `  <url><loc>${SITE}${p === "/" ? "/" : p}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>${p === "/" ? "1.0" : p === "/editor/" ? "0.9" : "0.7"}</priority></url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

writeFileSync(join(outDir, "sitemap.xml"), xml, "utf8");
console.log(`Wrote sitemap.xml with ${paths.length} URLs`);