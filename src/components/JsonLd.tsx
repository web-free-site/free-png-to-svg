import { SITE } from "@/site";

type JsonLdProps = {
  extra?: Record<string, unknown>[];
};

const defaultApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: SITE.name,
  url: SITE.url,
  applicationCategory: "DesignApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Convert PNG, JPG, and WebP images to clean SVG vectors in your browser. No upload, no account, powered by ImageTracer and VTracer WASM.",
};

export function JsonLd({ extra = [] }: JsonLdProps) {
  const blocks = [defaultApp, ...extra];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}

export const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does this PNG to SVG converter upload my files?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Processing runs entirely in your browser with WebAssembly tracers. Your images never leave your device.",
      },
    },
    {
      "@type": "Question",
      name: "Which image formats can I convert to SVG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can open local PNG and JPG files. WebP is supported when your browser can decode it.",
      },
    },
    {
      "@type": "Question",
      name: "When should I use VTracer versus ImageTracer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VTracer works well for logos, icons, and flat color art. ImageTracer is handy for detailed line art and sketches. You can switch engines in the editor.",
      },
    },
  ],
};