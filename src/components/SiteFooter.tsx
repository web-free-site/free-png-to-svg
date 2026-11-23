"use client";

import Link from "next/link";
import { SITE } from "@/site";
import { SponsoredSmartlink } from "@/components/ads/AdSlot";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        <a href={SITE.hubUrl} rel="noopener noreferrer">
          More free tools on web-free.site
        </a>
      </p>
      <p>
        Based on the MIT{" "}
        <a href="https://github.com/dipeshwalia/image2svg" rel="noopener noreferrer">
          Image2SVG
        </a>{" "}
        project by dipeshwalia. Tracing uses{" "}
        <a href="https://github.com/jankovicsandras/imagetracerjs" rel="noopener noreferrer">
          imagetracerjs
        </a>{" "}
        (Unlicense),{" "}
        <a href="https://github.com/visioncortex/vtracer" rel="noopener noreferrer">
          VTracer
        </a>{" "}
        WASM, and{" "}
        <a href="https://github.com/svg/svgo" rel="noopener noreferrer">
          SVGO
        </a>
        .
      </p>
      <p>
        <Link href="/privacy/">Privacy</Link>
        {" · "}
        <Link href="/terms/">Terms</Link>
        {" · "}
        <Link href="/about/">About</Link>
        {" · "}
        <Link href="/contact/">Contact</Link>
        {" · "}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
      </p>
      <p className="site-footer__muted">Your images stay on your device. Nothing is uploaded.</p>
      <SponsoredSmartlink />
    </footer>
  );
}