import { CtaSection, InnerHero } from "@/components/Sections";
import { SiteShell } from "@/components/SiteChrome";

export const metadata = {
  title: "About | NurtureHive",
  description: "Editable about page for NurtureHive."
};

export default function AboutPage() {
  return (
    <SiteShell>
      <InnerHero
        eyebrow="About"
        title="About page created separately for easy future changes"
        description="Use this page to write your company story, mission, founder note, process, and credibility details without touching the homepage sections."
      />
      <section className="sec">
        <div className="g2">
          <div className="card">
            <h4>What NurtureHive stands for</h4>
            <p>
              AI-native growth intelligence that connects discoverability, authority, pipeline, and revenue into one
              scalable system.
            </p>
          </div>
          <div className="card">
            <h4>What you can edit later</h4>
            <p>
              Company summary, founder story, differentiators, values, process, proof points, and any custom about
              content you want to add.
            </p>
          </div>
        </div>
      </section>
      <CtaSection />
    </SiteShell>
  );
}
