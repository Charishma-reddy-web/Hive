import { CasesSection, CtaSection, InnerHero } from "@/components/Sections";
import { SiteShell } from "@/components/SiteChrome";

export const metadata = {
  title: "Case Studies | NurtureHive",
  description: "Editable page for case studies and results."
};

export default function CaseStudiesPage() {
  return (
    <SiteShell>
      <InnerHero
        eyebrow="Case Studies"
        title="Results and use cases in a dedicated page"
        description="This page keeps the success stories separate so they are easy to update as new client stories come in."
      />
      <CasesSection />
      <CtaSection />
    </SiteShell>
  );
}
