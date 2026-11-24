import type { ReactNode } from "react";
import { pageMeta } from "@/lib/page-meta";

export const metadata = pageMeta({
  title: "SVG Editor",
  description:
    "Convert and edit PNG, JPG, and WebP images to SVG in the browser. VTracer and ImageTracer presets, live preview, SVGO optimization — files stay on your device.",
  path: "/editor/",
});

export default function EditorLayout({ children }: { children: ReactNode }) {
  return children;
}