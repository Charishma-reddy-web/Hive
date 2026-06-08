import { CtaSection, InnerHero } from "@/components/Sections";
import IntelligenceSystemsExperience from "@/components/IntelligenceSystemsExperience";
import { SiteShell } from "@/components/SiteChrome";

export const metadata = {
  title: "Intelligence Systems | NurtureHive",
  description: "Editable page for NurtureHive intelligence systems."
};

export default function IntelligenceSystemsPage() {
  return (
    <SiteShell>
      <InnerHero
        eyebrow="Intelligence Systems"
        title="Six systems working like one growth engine"
        description="Each system has a distinct job, but the real lift comes when visibility, authority, demand, automation, experience, and revenue data compound together."
      />
      <IntelligenceSystemsExperience />
      <CtaSection />
    </SiteShell>
  );
}
