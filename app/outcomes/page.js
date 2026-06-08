"use client";

import { useEffect, useState } from "react";
import { CtaSection, InnerHero } from "@/components/Sections";
import { SiteShell } from "@/components/SiteChrome";

const outcomesDetailData = {
  "signal-01": {
    title: "Organic Inbound Contribution",
    value: "60%",
    label: "Organic inbound contribution from intelligence-led content systems",
    primary: "Traffic Driver",
    badge: "Primary Revenue Driver",
    strategy: "Tri-layer SEO + GEO + AEO intent clustering. We match entities and citation parameters across modern AI search engines to place your solutions in primary search outcomes.",
    tech: ["Semrush", "OpenAI", "Next.js", "Ahrefs"],
    timeline: "Month 1-2: Entity auditing & intent clustering. Month 3-4: Auto-indexing content pipeline. Month 5+: Compound organic authority loop."
  },
  "signal-02": {
    title: "GTM Execution Velocity",
    value: "3X",
    label: "Faster GTM execution with AI-native growth workflows",
    primary: "Velocity",
    badge: "Core Workflow Accelerator",
    strategy: "Deploying custom agentic prompts, automated intent-based enrichment sequences, and LLM-assisted drafting engines to remove traditional content bottlenecks.",
    tech: ["OpenAI", "Clay", "Apollo", "Zapier"],
    timeline: "Month 1: Workflow bottleneck mapping. Month 2: Custom enrichments sync. Month 3+: Automated triggered campaigns."
  },
  "signal-03": {
    title: "Ops Manual Reduction",
    value: "40%",
    label: "Reduction in manual marketing operations through agentic automation",
    primary: "Automation",
    badge: "Operational Efficiency",
    strategy: "Agentic data gathering and lead sorting workflows. Replaces manual lead lists, data cleaning, and routing cycles with autonomous software loops.",
    tech: ["Clay", "HubSpot", "Zapier", "OpenAI"],
    timeline: "Month 1: Tool integrations sync. Month 2: Lead enrichment rules. Month 3+: Live agentic sync routes."
  },
  "signal-04": {
    title: "Professional Audience Reach",
    value: "150K+",
    label: "Professional audience reach built through executive branding systems",
    primary: "Reach",
    badge: "Authority KPI",
    strategy: "Executive content distribution systems. We amplify profile nodes across LinkedIn and major newsletters to establish compounding organic presence.",
    tech: ["LinkedIn API", "Buffer", "Clay"],
    timeline: "Month 1: Profile audit & alignment. Month 2-3: Structured content launch. Month 4+: Authority node amplification."
  },
  "signal-05": {
    title: "AI Search Visibility",
    value: "AI-Ready",
    label: "Search visibility architecture across SEO, GEO, and AEO surfaces",
    primary: "Indexing",
    badge: "Discoverability Surface",
    strategy: "Optimizing schemas, references, and entity citation structures across AI discovery platforms (Perplexity, ChatGPT Search, and Gemini).",
    tech: ["Perplexity API", "Gemini", "Ahrefs"],
    timeline: "Month 1: AI search citation audit. Month 2: Schema optimization. Month 3+: AI query rank dominance."
  },
  "signal-06": {
    title: "Stack Alignment",
    value: "Multi-Cloud",
    label: "GTM systems aligned with AWS, Azure, and GCP ecosystems",
    primary: "Stack Alignment",
    badge: "Enterprise Integration",
    strategy: "Securing data loops, ensuring zero-trust pipelines, and building direct cloud integrations matching enterprise security baselines.",
    tech: ["AWS", "Azure", "GCP", "Salesforce"],
    timeline: "Month 1: Architecture review. Month 2-3: Cloud data integrations. Month 4+: Secure CRM pipeline synchronization."
  }
};

export default function OutcomesPage() {
  const [selectedSignal, setSelectedSignal] = useState("signal-01");

  useEffect(() => {
    document.title = "Outcomes | NurtureHive";
  }, []);

  const currentDetail = outcomesDetailData[selectedSignal];

  return (
    <SiteShell>
      <InnerHero
        eyebrow="Outcomes"
        title="Proof points engineered for impact"
        description="Interact with our growth signals to explore the telemetry, strategy, and execution details behind each metrics outcome."
      />

      <section className="sec outcomes-page-custom" style={{ paddingBottom: "120px", paddingTop: "40px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "32px",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px"
        }}>
          
          {/* Responsive Layout Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            alignItems: "start"
          }}>
            
            {/* Left Column: Telemetry Console */}
            <div style={{
              background: "rgba(4, 14, 23, 0.75)",
              border: "1px solid rgba(26,233,171,0.2)",
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
              position: "sticky",
              top: "100px"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span style={{ fontSize: "11px", color: "#1ae9ab", fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                  TELEMETRY PANEL
                </span>
                <span style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.5)",
                  background: "rgba(255,255,255,0.05)",
                  padding: "4px 8px",
                  borderRadius: "6px"
                }}>
                  {currentDetail.primary}
                </span>
              </div>

              <h2 style={{ fontSize: "28px", color: "#fff", fontWeight: "800", marginBottom: "12px" }}>
                {currentDetail.title}
              </h2>
              
              <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "20px" }}>
                <span style={{ fontSize: "42px", fontWeight: "900", color: "#1ae9ab", textShadow: "0 0 12px rgba(26,233,171,0.3)" }}>
                  {currentDetail.value}
                </span>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                  (Verified Outcome)
                </span>
              </div>

              <div style={{ borderTop: "1px dashed rgba(255,255,255,0.1)", paddingTop: "20px", marginBottom: "24px" }}>
                <h4 style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
                  Strategy Outline
                </h4>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: "1.6" }}>
                  {currentDetail.strategy}
                </p>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <h4 style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
                  Tech Stack Utilized
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {currentDetail.tech.map(t => (
                    <span key={t} style={{
                      fontSize: "11px",
                      color: "#fff",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      padding: "4px 10px",
                      borderRadius: "20px"
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: "1px dashed rgba(255,255,255,0.1)", paddingTop: "20px" }}>
                <h4 style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
                  Implementation Blueprint
                </h4>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: "1.65" }}>
                  {currentDetail.timeline}
                </p>
              </div>
            </div>

            {/* Right Column: Clickable List Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
              {Object.entries(outcomesDetailData).map(([id, item], index) => {
                const isSelected = selectedSignal === id;
                return (
                  <div
                    key={id}
                    onClick={() => setSelectedSignal(id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === "Enter") setSelectedSignal(id); }}
                    style={{
                      background: isSelected ? "rgba(26,233,171,0.06)" : "rgba(4, 14, 23, 0.45)",
                      border: `1px solid ${isSelected ? "#1ae9ab" : "rgba(255,255,255,0.06)"}`,
                      borderRadius: "16px",
                      padding: "24px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      boxShadow: isSelected ? "0 0 20px rgba(26,233,171,0.08)" : "none",
                      transform: isSelected ? "translateX(6px)" : "none"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                      <span style={{ fontSize: "11px", color: isSelected ? "#1ae9ab" : "rgba(255,255,255,0.3)", fontWeight: "700" }}>
                        SIGNAL 0{index + 1} · {item.primary.toUpperCase()}
                      </span>
                      <span style={{
                        fontSize: "18px",
                        fontWeight: "900",
                        color: isSelected ? "#1ae9ab" : "#fff",
                        transition: "color 0.3s"
                      }}>
                        {item.value}
                      </span>
                    </div>
                    <p style={{
                      fontSize: "14px",
                      color: isSelected ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.5)",
                      margin: 0,
                      lineHeight: "1.5",
                      transition: "color 0.3s"
                    }}>
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      <CtaSection />
    </SiteShell>
  );
}
