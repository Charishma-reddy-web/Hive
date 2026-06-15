import { SiteShell } from '@/components/SiteChrome';

export default function SecondPage() {
  return (
    <SiteShell>
      <section className="second-page-section" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow text-teal-400">Second Page</p>
          <h1 className="text-5xl font-semibold text-white">Welcome to page two</h1>
          <p className="mt-6 text-lg text-slate-300">
            This is the second page route. Use the navigation above to return to the home page or explore more sections.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
