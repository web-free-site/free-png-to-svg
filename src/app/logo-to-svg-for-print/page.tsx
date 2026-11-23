import Link from "next/link";
import { ContentLayout } from "@/components/ContentLayout";
import { pageMeta } from "@/lib/page-meta";
import { AdSlot } from "@/components/ads/AdSlot";

export const metadata = pageMeta({
  title: "Logo to SVG for print",
  description:
    "Prepare a logo PNG for print by converting it to SVG with clean paths and controlled colors in your browser.",
  path: "/logo-to-svg-for-print/",
});

export default function LogoPrintPage() {
  return (
    <ContentLayout>
      <article>
        <h1>Logo to SVG for print</h1>
        <p>
          Print shops and sign makers often need vector artwork. A PNG logo can be traced to SVG so
          it scales to any size without pixelation.
        </p>
        <h2>Workflow</h2>
        <ul>
          <li>Start with the largest PNG you have (transparent background helps).</li>
          <li>
            In the <Link href="/editor/">editor</Link>, use the Logo or Icon preset and VTracer.
          </li>
          <li>Increase quality if small details disappear, then download the SVG.</li>
          <li>Open the SVG in Inkscape or Illustrator for final print color checks.</li>
        </ul>
        <p>
          This tool does not replace professional prepress review, but it gives you a private first
          pass before you share files with a vendor.
        </p>
        <AdSlot slot="content300x250" className="ad-content" />
      </article>
    </ContentLayout>
  );
}