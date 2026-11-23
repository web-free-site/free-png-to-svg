import Link from "next/link";
import styles from "./page.module.css";
import SiteFooter from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { AdSlot } from "@/components/ads/AdSlot";
import { JsonLd, homeFaqJsonLd } from "@/components/JsonLd";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <JsonLd extra={[homeFaqJsonLd]} />
      <SiteHeader showHomeBanner />

      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Local files only · PNG · JPG · WebP
          </div>
          <h1 className={styles.heroTitle}>
            Free PNG to <span className="text-gradient">SVG</span> Converter
            <br />
            in Your Browser
          </h1>
          <p className={styles.heroSubtitle}>
            Vectorize logos, icons, signatures, and line art with VTracer and ImageTracer. Your files
            never upload to our servers.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/editor/" className="btn btn-primary btn-lg">
              Start converting
            </Link>
            <Link
              href="/how-to-convert-png-to-svg-in-the-browser/"
              className="btn btn-secondary btn-lg"
            >
              Read the how-to guide
            </Link>
          </div>
        </div>
      </section>

      <AdSlot slot="betweenToolContent728x90" className="ad-between" />

      <section className={styles.features} id="features">
        <div className={styles.featuresInner}>
          <h2 className={styles.sectionTitle}>Why use this converter?</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Private</h3>
              <p>Processing stays on your device. No accounts and no paid vectorizer APIs.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Two tracers</h3>
              <p>VTracer WASM for flat logos; imagetracerjs for detailed color art.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Download SVG</h3>
              <p>Tune colors and detail, optimize with SVGO, then save the vector file.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Guides</h3>
              <p>
                <Link href="/logo-to-svg-for-print/">Logos for print</Link>,{" "}
                <Link href="/convert-a-signature-to-svg/">signatures</Link>, and more how-tos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-faq" aria-labelledby="faq-heading">
        <h2 id="faq-heading">Frequently asked questions</h2>
        <details>
          <summary>Is my PNG uploaded to a server?</summary>
          <p>No. The converter reads files from your device and traces them with WebAssembly in the tab.</p>
        </details>
        <details>
          <summary>What file types work?</summary>
          <p>PNG and JPG are supported. WebP works when your browser can decode it.</p>
        </details>
        <details>
          <summary>Can I use the SVG commercially?</summary>
          <p>
            You must own or license the source image. The tool only changes format; it does not grant
            rights.
          </p>
        </details>
      </section>

      <AdSlot slot="nativeBelowResult" className="ad-between" />
      <AdSlot slot="content468x60" className="ad-between" />

      <SiteFooter />
    </div>
  );
}