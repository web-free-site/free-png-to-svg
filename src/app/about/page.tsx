import Link from "next/link";
import { ContentLayout } from "@/components/ContentLayout";
import { pageMeta } from "@/lib/page-meta";
import { SITE } from "@/site";
import { AdSlot } from "@/components/ads/AdSlot";

export const metadata = pageMeta({
  title: "About",
  description:
    "About Free PNG to SVG Converter — browser-native tracing with Image2SVG, imagetracerjs, VTracer WASM, and SVGO.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <ContentLayout>
      <article>
        <h1>About</h1>
        <p>
          {SITE.name} helps you turn logos, icons, signatures, and line art into clean SVG files
          without uploading anything to a server. It is part of the{" "}
          <a href={SITE.hubUrl}>web-free.site</a> collection of free browser tools.
        </p>
        <h2>Open-source base</h2>
        <p>
          The editor is based on <strong>Image2SVG</strong> by{" "}
          <a href="https://github.com/dipeshwalia/image2svg">dipeshwalia</a> (MIT license). We keep
          the upstream license in this repository and credit the original authors.
        </p>
        <h2>Tracing libraries</h2>
        <ul>
          <li>
            <a href="https://github.com/jankovicsandras/imagetracerjs">imagetracerjs</a> (Unlicense)
            for color posterization and path tracing.
          </li>
          <li>
            <a href="https://github.com/visioncortex/vtracer">VTracer</a> compiled to WebAssembly for
            high-quality curve fitting on flat artwork.
          </li>
          <li>
            <a href="https://github.com/svg/svgo">SVGO</a> to minify and tidy SVG output in the
            browser.
          </li>
        </ul>
        <p>
          Operator: {SITE.operator} —{" "}
          <a href={SITE.hubUrl}>web-free.site</a>
        </p>
        <p>
          <Link href="/editor/">Open the converter</Link>
        </p>
        <AdSlot slot="content300x250" className="ad-content" />
      </article>
    </ContentLayout>
  );
}