import { ContentLayout } from "@/components/ContentLayout";
import { pageMeta } from "@/lib/page-meta";
import { SITE } from "@/site";

export const metadata = pageMeta({
  title: "Contact",
  description: `Contact ${SITE.name} for support or corrections.`,
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <ContentLayout>
      <article>
        <h1>Contact</h1>
        <p>
          Email <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a> for support,
          partnerships, or corrections.
        </p>
      </article>
    </ContentLayout>
  );
}