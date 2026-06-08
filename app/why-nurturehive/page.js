import { ComparisonSection, CtaSection, InnerHero } from "@/components/Sections";
import { SiteShell } from "@/components/SiteChrome";

export const metadata = {
  title: "Why NurtureHive | NurtureHive",
  description: "Editable page comparing traditional marketing vs NurtureHive."
};

export default function WhyNurtureHivePage() {
  return (
    <SiteShell>
      <InnerHero
        eyebrow="Why NurtureHive"
        title="The modern growth problem, separated cleanly"
        description="Use this page whenever you want to edit the comparison story between old marketing models and your intelligence-led model."
      />
      <ComparisonSection />
      <CtaSection />
    </SiteShell>
  );
}
