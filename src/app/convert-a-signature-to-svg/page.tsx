import Link from "next/link";
import { ContentLayout } from "@/components/ContentLayout";
import { pageMeta } from "@/lib/page-meta";
import { AdSlot } from "@/components/ads/AdSlot";

export const metadata = pageMeta({
  title: "Convert a signature to SVG",
  description:
    "Turn a scanned or photographed signature into a transparent SVG for documents and branding — processed locally in your browser.",
  path: "/convert-a-signature-to-svg/",
});

export default function SignaturePage() {
  return (
    <ContentLayout>
      <article>
        <h1>Convert a signature to SVG</h1>
        <p>
          Signatures are usually dark ink on white paper. Tracing them to SVG lets you place a
          transparent vector on PDFs, slides, or email headers.
        </p>
        <h2>Recommended settings</h2>
        <ul>
          <li>Crop tightly around the ink before converting.</li>
          <li>
            Choose the <strong>Signature</strong> preset in the{" "}
            <Link href="/editor/">converter</Link> for high-contrast binary tracing.
          </li>
          <li>Download SVG and verify transparency in your target app.</li>
        </ul>
        <p>Because processing stays in your browser, sensitive identity images are not uploaded.</p>
        <AdSlot slot="content300x250" className="ad-content" />
      </article>
    </ContentLayout>
  );
}