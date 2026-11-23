import type { Metadata } from "next";
import { SITE } from "@/site";

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = path === "/" ? `${SITE.url}/` : `${SITE.url}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${SITE.name}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: "website",
      siteName: SITE.name,
      images: [{ url: "/banner.png", width: 1280, height: 640, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/banner.png"],
    },
  };
}