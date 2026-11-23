import { ContentLayout } from "@/components/ContentLayout";
import { pageMeta } from "@/lib/page-meta";

export const metadata = pageMeta({
  title: "Terms of use",
  description: "Terms for using the free in-browser PNG to SVG converter on web-free.site.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <ContentLayout>
      <article>
        <h1>Terms of use</h1>
        <p>
          This tool is provided as-is without warranty. You are responsible for how you use exported
          SVG files, including trademark and copyright compliance.
        </p>
        <p>Do not use the site for unlawful content. These terms may be updated from time to time.</p>
      </article>
    </ContentLayout>
  );
}