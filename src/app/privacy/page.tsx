import { ContentLayout } from "@/components/ContentLayout";
import { pageMeta } from "@/lib/page-meta";
import { SITE } from "@/site";

export const metadata = pageMeta({
  title: "Privacy policy",
  description:
    "How Free PNG to SVG Converter handles your data: local browser processing only, optional ad cookies, and contact details.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <ContentLayout>
      <article>
        <h1>Privacy</h1>
        <p>
          {SITE.name} processes images entirely in your browser. We do not operate a user account
          system and we do not receive your image files on our servers.
        </p>
        <p>
          Ad networks (Adsterra) may set cookies when ad units are enabled. Review their policy when
          ads are active in production.
        </p>
        <p>
          Cloudflare Web Analytics may collect anonymous usage metrics. Contact{" "}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a> for privacy questions.
        </p>
      </article>
    </ContentLayout>
  );
}