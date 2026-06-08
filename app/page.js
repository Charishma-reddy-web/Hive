import {
  ComparisonSection,
  HeroSection,
  InfrastructureSection,
  OutcomesSection,
  SystemsSection
} from "@/components/Sections";
import { SiteShell } from "@/components/SiteChrome";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <SystemsSection />
      <hr className="divider" />
      <OutcomesSection />
      <hr className="divider" />
      <ComparisonSection />
      <hr className="divider" />
      <InfrastructureSection />
    </SiteShell>
  );
}
