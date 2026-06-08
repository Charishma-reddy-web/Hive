"use client";

import { useEffect, useState } from "react";
import { CtaSection, InnerHero } from "@/components/Sections";
import { SiteShell } from "@/components/SiteChrome";

const frameworkPhases = [
  {
    num: "01",
    id: "discover",
    title: "Discover",
    tagline: "Market and intent intelligence gathering",
    desc: "We run comprehensive audits of your market landscape, search visibility, competitor authority, and high-intent buyer signals. This maps out exactly where your buyers are looking for solutions and where citation gaps exist.",
    deliverables: [
      "AI Search Citation Gap Audit (GEO/AEO)",
      "Intent Keyword Cluster Map & Authority Gaps",
      "Competitor Authority & Backlink Benchmark",
      "GTM Data Flow & Telemetry Systems Audit"
    ],
    accent: "#1ae9ab",
    bg: "rgba(26,233,171,0.06)",
    glow: "rgba(26,233,171,0.22)"
  },
  {
    num: "02",
    id: "engineer",
    title: "Engineer",
    tagline: "Building your core GTM growth layers",
    desc: "We build and deploy the core growth infrastructure: content hubs, high-conversion landing routes, CRM synchronization, and tracking telemetry.",
    deliverables: [
      "AI-Optimized Content Hub & Repo Setup",
      "HubSpot / CRM Pipeline Integration & Fields Map",
      "Conversion Rate Optimization Architecture",
      "Event-Level Analytics & Telemetry Sync"
    ],
    accent: "#38bdf8",
    bg: "rgba(56,189,248,0.06)",
    glow: "rgba(56,189,248,0.22)"
  },
  {
    num: "03",
    id: "amplify",
    title: "Amplify",
    tagline: "Scaling authority and discoverability",
    desc: "We launch amplification cycles: thought leadership engines, distribution cascades, newsletter networks, and digital brand footprint expansions.",
    deliverables: [
      "Executive Content Cadence & Distribution Flows",
      "Newsletter Network & Sponsorship Pipeline",
      "Multi-Channel Authority Footprint Setup",
      "Targeted Organic Brand Search Campaigns"
    ],
    accent: "#818cf8",
    bg: "rgba(129,140,248,0.06)",
    glow: "rgba(129,140,248,0.22)"
  },
  {
    num: "04",
    id: "automate",
    title: "Automate",
    tagline: "Deploying intelligent workflows",
    desc: "We deploy automated GTM pipelines: agentic lead sorting, intent-based enrichment routing, automatic drip sequences, and operational dashboard syncs.",
    deliverables: [
      "Clay / Apollo Automations & Intent Enrichment",
      "Dynamic Lead Routing & Scoring Workflows",
      "Triggered Drip Campaign Sequences",
      "Automated Weekly Analytics Delivery"
    ],
    accent: "#f472b6",
    bg: "rgba(244,114,182,0.06)",
    glow: "rgba(244,114,182,0.22)"
  },
  {
    num: "05",
    id: "optimize",
    title: "Optimize",
    tagline: "Measuring pipeline impact & attribution",
    desc: "We continuously analyze pipeline velocity, CTR, attribution channels, and close-rate metrics. This telemetry fine-tunes future discoverability loops.",
    deliverables: [
      "First-Touch to Closed-Deal Attribution Dashboard",
      "Pipeline Velocity & Inbound CTR Audits",
      "Entity Reference Fine-Tuning Checklists",
      "Quarterly Growth Scale Roadmap Updates"
    ],
    accent: "#fb923c",
    bg: "rgba(251,146,60,0.06)",
    glow: "rgba(251,146,60,0.22)"
  }
];

export default function FrameworkPage() {
  const [activeTab, setActiveTab] = useState("discover");

  useEffect(() => {
    document.title = "Framework | NurtureHive";
  }, []);

  const currentPhase = frameworkPhases.find(p => p.id === activeTab);

  // Custom visual telemetry widgets representing each phase
  const renderPhaseWidget = (id, accent) => {
    if (id === "discover") {
      return (
        <div style={{ padding: "16px", background: "rgba(255,255,255,0.02)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "12px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "6px" }}>
            <span>GEO QUERY SURFACES</span>
            <span>RANK & CITATION</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,0.7)" }}>
              <span>Perplexity AI Search</span>
              <span style={{ color: accent }}>#1 Recommended [1]</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,0.7)" }}>
              <span>Gemini Answer Hub</span>
              <span style={{ color: accent }}>Cited: NurtureHive</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,0.7)" }}>
              <span>ChatGPT Search Index</span>
              <span style={{ color: accent }}>High Authority Entity</span>
            </div>
          </div>
        </div>
      );
    }
    if (id === "engineer") {
      return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "10px 0" }}>
          <svg width="240" height="70" viewBox="0 0 240 70">
            <rect x="5" y="20" width="60" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke={accent} strokeWidth="1.5" />
            <text x="35" y="39" fill="#fff" fontSize="10" fontWeight="700" textAnchor="middle">Web Hub</text>
            
            <path d="M65,35 L105,35" stroke={accent} strokeWidth="2" strokeDasharray="3 3" />
            
            <rect x="105" y="20" width="60" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke={accent} strokeWidth="1.5" />
            <text x="135" y="39" fill="#fff" fontSize="10" fontWeight="700" textAnchor="middle">CRM Pipe</text>

            <path d="M165,35 L205,35" stroke={accent} strokeWidth="2" strokeDasharray="3 3" />

            <circle cx="220" cy="35" r="15" fill="rgba(255,255,255,0.03)" stroke={accent} strokeWidth="1.5" />
            <text x="220" y="39" fill={accent} fontSize="12" fontWeight="900" textAnchor="middle">KPI</text>
          </svg>
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>Integrated GTM Engine Flow</span>
        </div>
      );
    }
    if (id === "amplify") {
      return (
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "10px 0" }}>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "28px", fontWeight: "900", color: accent, display: "block" }}>150K+</span>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>Audience Reach</span>
          </div>
          <div style={{ height: "40px", width: "1px", background: "rgba(255,255,255,0.1)" }} />
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "28px", fontWeight: "900", color: accent, display: "block" }}>84</span>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>Domain Score</span>
          </div>
        </div>
      );
    }
    if (id === "automate") {
      return (
        <div style={{ padding: "12px", background: "rgba(255,255,255,0.02)", borderRadius: "10px", fontSize: "11px" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "center", color: "rgba(255,255,255,0.8)" }}>
            <span style={{ color: accent, fontWeight: "700" }}>[TRIG]</span>
            <span>New Intent Signal from Clay</span>
          </div>
          <div style={{ height: "10px", width: "1px", background: accent, marginLeft: "14px" }} />
          <div style={{ display: "flex", gap: "10px", alignItems: "center", color: "rgba(255,255,255,0.8)" }}>
            <span style={{ color: accent, fontWeight: "700" }}>[ENRC]</span>
            <span>Profile Sync & Domain Verification</span>
          </div>
          <div style={{ height: "10px", width: "1px", background: accent, marginLeft: "14px" }} />
          <div style={{ display: "flex", gap: "10px", alignItems: "center", color: "rgba(255,255,255,0.8)" }}>
            <span style={{ color: accent, fontWeight: "700" }}>[EXEC]</span>
            <span>Trigger Personal Email Sequence</span>
          </div>
        </div>
      );
    }
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "10px 0" }}>
        <div style={{ display: "flex", justifyBetween: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>Pipeline Conversion Velocity</span>
          <span style={{ fontSize: "12px", color: accent, fontWeight: "700" }}>+48%</span>
        </div>
        <div style={{ width: "100%", height: "8px", background: "rgba(255,255,255,0.05)", borderRadius: "10px", overflow: "hidden" }}>
          <div style={{ width: "72%", height: "100%", background: accent }} />
        </div>
        <div style={{ display: "flex", justifyBetween: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>CAC Efficiency Multiplier</span>
          <span style={{ fontSize: "12px", color: accent, fontWeight: "700" }}>2.4X</span>
        </div>
        <div style={{ width: "100%", height: "8px", background: "rgba(255,255,255,0.05)", borderRadius: "10px", overflow: "hidden" }}>
          <div style={{ width: "88%", height: "100%", background: accent }} />
        </div>
      </div>
    );
  };

  return (
    <SiteShell>
      <InnerHero
        eyebrow="Framework"
        title="Our proprietary methodology"
        description="Explore the five-phase growth intelligence cycle engineered to transform legacy pipelines into self-compounding authority engines."
      />

      <section className="sec framework-page-custom" style={{ paddingBottom: "120px", paddingTop: "40px" }}>
        <div style={{ width: "100%", maxWidth: "1000px", margin: "0 auto", padding: "0 20px" }}>
          
          {/* Tabs Menu */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "10px",
            marginBottom: "40px"
          }}>
            {frameworkPhases.map(phase => {
              const isSelected = activeTab === phase.id;
              return (
                <button
                  key={phase.id}
                  onClick={() => setActiveTab(phase.id)}
                  style={{
                    background: isSelected ? phase.bg : "rgba(4, 14, 23, 0.45)",
                    border: `1px solid ${isSelected ? phase.accent : "rgba(255,255,255,0.06)"}`,
                    borderRadius: "12px",
                    padding: "16px 10px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    outline: "none",
                    textAlign: "center",
                    boxShadow: isSelected ? `0 0 16px ${phase.glow}` : "none"
                  }}
                >
                  <span style={{ display: "block", fontSize: "11px", color: isSelected ? phase.accent : "rgba(255,255,255,0.3)", fontWeight: "800", letterSpacing: "1px", marginBottom: "4px" }}>
                    PHASE {phase.num}
                  </span>
                  <span style={{ fontSize: "15px", color: isSelected ? "#fff" : "rgba(255,255,255,0.5)", fontWeight: "700" }}>
                    {phase.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Phase Content Display Card */}
          <div style={{
            background: "rgba(4, 14, 23, 0.75)",
            border: `1px solid ${currentPhase.accent}33`,
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            alignItems: "center"
          }}>
            
            {/* Left Column: Descriptions */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span style={{
                  fontSize: "13px",
                  fontWeight: "900",
                  color: "#fff",
                  background: currentPhase.accent,
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 10px ${currentPhase.accent}`
                }}>
                  {currentPhase.num}
                </span>
                <span style={{ fontSize: "13px", color: currentPhase.accent, fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>
                  {currentPhase.tagline}
                </span>
              </div>

              <h2 style={{ fontSize: "32px", color: "#fff", fontWeight: "800", marginBottom: "16px" }}>
                {currentPhase.title} Phase
              </h2>

              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", lineHeight: "1.75", marginBottom: "28px" }}>
                {currentPhase.desc}
              </p>

              {/* Telemetry Visual Widget */}
              <div>
                <h4 style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "14px" }}>
                  Phase Operational Output
                </h4>
                {renderPhaseWidget(currentPhase.id, currentPhase.accent)}
              </div>
            </div>

            {/* Right Column: Checklists / Deliverables */}
            <div style={{
              background: "rgba(255,255,255,0.01)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "16px",
              padding: "32px"
            }}>
              <h3 style={{ fontSize: "18px", color: "#fff", fontWeight: "700", marginBottom: "20px" }}>
                Key Deliverables & Artifacts
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {currentPhase.deliverables.map((item, idx) => (
                  <div key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={currentPhase.accent} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: "2px" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: "1.4" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      <CtaSection />
    </SiteShell>
  );
}
