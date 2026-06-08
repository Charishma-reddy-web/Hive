import {
  HeroSection,
  SystemsSection,
  OutcomesSection,
  ComparisonSection,
  InfrastructureSection
} from '@/components/Sections';
import { SiteShell } from '@/components/SiteChrome';
import TargetAudience from '@/components/TargetAudience';
import CaseStudies from '@/components/CaseStudies';
import Integrations from '@/components/Integrations';
import CtaFooter from '@/components/CtaFooter';
import MethodologyFramework from '@/components/MethodologyFramework';

export default function Home() {
  return (
    <SiteShell>
      {/* Colleague's Top 5 Sections */}
      <HeroSection />
      <SystemsSection />
      <hr className="divider" />
      <OutcomesSection />
      <hr className="divider" />
      <ComparisonSection />
      <hr className="divider" />
      <InfrastructureSection />

      {/* User's Bottom Sections */}
      <div className="nh" style={{ marginTop: '40px' }}>
        <MethodologyFramework />
        <TargetAudience />
        <CaseStudies />
        <Integrations />
        <CtaFooter />
      </div>
    </SiteShell>
  );
}
