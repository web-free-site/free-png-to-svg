import Link from "next/link";
import { ContentLayout } from "@/components/ContentLayout";
import { pageMeta } from "@/lib/page-meta";
import { AdSlot } from "@/components/ads/AdSlot";

export const metadata = pageMeta({
  title: "How to convert PNG to SVG in the browser",
  description:
    "Step-by-step guide to vectorizing PNG and JPG files locally with Free PNG to SVG Converter — no upload and no account.",
  path: "/how-to-convert-png-to-svg-in-the-browser/",
});

export default function HowToBrowserPage() {
  return (
    <ContentLayout>
      <article>
        <h1>How to convert PNG to SVG in the browser</h1>
        <p>
          You can turn a raster logo or drawing into an SVG without installing software or sending
          files to a cloud API. Everything runs on your device.
        </p>
        <h2>Steps</h2>
        <ol>
          <li>
            Open the <Link href="/editor/">converter</Link>.
          </li>
          <li>Drag a PNG or JPG from your computer, or paste an image from the clipboard.</li>
          <li>Pick a preset (logo, icon, signature, or line art) or adjust quality and colors.</li>
          <li>Preview the SVG, then download it.</li>
        </ol>
        <h2>Tips for better SVG output</h2>
        <ul>
          <li>Use high-contrast artwork when possible.</li>
          <li>For flat logos, try the VTracer engine; for sketches, try ImageTracer.</li>
          <li>Reduce noise in the source PNG before tracing complex photos.</li>
        </ul>
        <AdSlot slot="content300x250" className="ad-content" />
      </article>
    </ContentLayout>
  );
}