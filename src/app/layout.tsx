import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE } from "@/site";
import { pageMeta } from "@/lib/page-meta";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  themeColor: "#0B0E14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  ...pageMeta({
    title: SITE.name,
    description:
      "Convert PNG, JPG, and WebP images to scalable SVG vectors in your browser. Free, private, no upload — powered by VTracer and ImageTracer.",
    path: "/",
  }),
  metadataBase: new URL(SITE.url),
  keywords: [
    "png to svg",
    "jpg to svg",
    "free svg converter",
    "vectorize image",
    "logo to svg",
    "browser svg converter",
  ],
  authors: [{ name: "web-free.site" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <Script
          id="ad-popunder"
          src="https://abscloud.org/1/wf23placeholder0popunder00000000"
          strategy="afterInteractive"
          data-cfasync="false"
        />
        <Script
          id="ad-social-bar"
          src="https://bauval.org/14/wf23placeholder0socialbar0000000"
          strategy="afterInteractive"
          data-cfasync="false"
        />
      </head>
      <body className={`${inter.variable} ${inter.className} antialiased`}>{children}</body>
    </html>
  );
}