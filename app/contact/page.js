import { InnerHero } from "@/components/Sections";
import { SiteShell } from "@/components/SiteChrome";

export const metadata = {
  title: "Contact | NurtureHive",
  description: "Simple contact page."
};

export default function ContactPage() {
  return (
    <SiteShell>
      <InnerHero
        eyebrow="Contact"
        title="Schedule a strategy session"
        description="This page is ready for your form, Calendly link, WhatsApp button, email, or phone number."
      />
      <section className="sec">
        <div className="g2">
          <div className="card">
            <h4>Email</h4>
            <p>hello@nurturehive.com</p>
          </div>
          <div className="card">
            <h4>Next step</h4>
            <p>Replace this with your actual contact form or booking flow whenever you are ready.</p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
