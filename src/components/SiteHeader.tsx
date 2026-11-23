"use client";

import Link from "next/link";
import { AdSlot, useAdScripts } from "@/components/ads/AdSlot";
import { SITE } from "@/site";

type Props = {
  showHomeBanner?: boolean;
  compact?: boolean;
};

export function SiteHeader({ showHomeBanner = false, compact = false }: Props) {
  useAdScripts();

  return (
    <>
      <header className="site-header">
        <AdSlot slot="header728x90" className="ad-header" label="Sponsored" />
        <div className="site-header__inner">
          <Link href="/" className="site-brand">
            <img src="/logo.png" alt="" width={28} height={28} className="site-brand__icon" />
            <span className="site-brand__text">
              <strong>{SITE.shortName}</strong>
              {!compact && <small>{SITE.name}</small>}
            </span>
          </Link>
          <nav className="site-nav" aria-label="Main">
            <Link href="/editor/">Open converter</Link>
            <Link href="/how-to-convert-png-to-svg-in-the-browser/">How-to</Link>
            <Link href="/about/">About</Link>
          </nav>
        </div>
        {showHomeBanner ? <AdSlot slot="homeTop728x90" className="ad-home-top" label="Sponsored" /> : null}
      </header>
      <AdSlot slot="mobileSticky320x50" className="ad-mobile-sticky" label="Sponsored" />
    </>
  );
}