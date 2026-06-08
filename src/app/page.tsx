import TargetAudience from '@/components/TargetAudience';
import CaseStudies from '@/components/CaseStudies';
import Integrations from '@/components/Integrations';
import CtaFooter from '@/components/CtaFooter';
import MethodologyFramework from '@/components/MethodologyFramework';

export default function Home() {
  return (
    <div className="nh">
      <MethodologyFramework />
      <TargetAudience />
      <CaseStudies />
      <Integrations />
      <CtaFooter />
    </div>
  );
}

