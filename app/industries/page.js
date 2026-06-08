"use client";

import { useEffect, useState, useRef } from "react";
import { CtaSection, InnerHero } from "@/components/Sections";
import { SiteShell } from "@/components/SiteChrome";

const industryData = [
  {
    id: "saas",
    title: "SaaS & AI Startups",
    tagline: "Velocity-driven GTM scaling",
    desc: "For rapid-growth software and AI companies, GTM execution velocity is everything. We bypass slow traditional agency loops and build automated content engines that scale organic authority rapidly.",
    pain: "Siloed content output, slow organic indexing, and zero discoverability in Perplexity, ChatGPT, or AI search panels.",
    systems: "Search Intelligence · Agentic AI Marketing · Conversion Engineering",
    metric: "3X GTM Velocity",
    percent: 85,
    accent: "#1ae9ab",
    bg: "rgba(26,233,171,0.04)",
    glow: "rgba(26,233,171,0.22)"
  },
  {
    id: "enterprise",
    title: "Enterprise Tech & GCCs",
    tagline: "Secure, scalable demand architecture",
    desc: "For enterprise technology divisions and Global Capability Centers (GCCs), data security, CRM synchronization, and high-fidelity inbound pipelines are critical for steady scaling.",
    pain: "Disconnected CRM systems, low-fidelity outbound target lists, and legacy tools with zero pipeline attribution.",
    systems: "CRM Integrations · Marketing Analytics · Demand Systems",
    metric: "60% Inbound",
    percent: 60,
    accent: "#38bdf8",
    bg: "rgba(56,189,248,0.04)",
    glow: "rgba(56,189,248,0.22)"
  },
  {
    id: "consulting",
    title: "B2B Consulting & Services",
    tagline: "Authority and trust-building engines",
    desc: "For consulting and transformation services, deals close on trust. We transform your executive team's subject-matter expertise into a compounding digital authority engine.",
    pain: "Relying on legacy outbound calling, static sales decks, and word-of-mouth with no organic inbound interest.",
    systems: "Content Intelligence · Executive Branding · Funnel Systems",
    metric: "+150K Reach",
    percent: 75,
    accent: "#818cf8",
    bg: "rgba(129,140,248,0.04)",
    glow: "rgba(129,140,248,0.22)"
  }
];

function Card({ data }) {
  const [mode, setMode] = useState("native"); // "legacy" or "native"
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  // Radial calculation (radius is 20, circumference is ~125.6)
  const strokeDashoffset = 125.6 - (125.6 * data.percent) / 100;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="premium-glass-card"
      style={{
        border: mode === "native" ? `1px solid ${data.accent}20` : "1px solid rgba(239, 68, 68, 0.15)",
        background: mode === "native" ? `linear-gradient(180deg, ${data.bg}, rgba(4,14,23,0.7))` : "linear-gradient(180deg, rgba(239,68,68,0.02), rgba(4,14,23,0.7))"
      }}
    >
      <div className="card-glow" style={{ background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${mode === "native" ? data.accent : "#ef4444"}15, transparent 50%)` }} />
      
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Card Header */}
        <span style={{ fontSize: "10px", color: mode === "native" ? data.accent : "#ef4444", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1.5px" }}>
          {data.tagline}
        </span>
        <h3 style={{ fontSize: "20px", color: "#fff", fontWeight: "800", margin: "8px 0 12px 0" }}>
          {data.title}
        </h3>
        
        {/* Toggle Mode */}
        <div className="toggle-group">
          <div className={`toggle-bg-slider ${mode === "legacy" ? "left" : "right"}`} />
          <button onClick={() => setMode("legacy")} className={`toggle-btn ${mode === "legacy" ? "active" : ""}`}>
            Legacy Bottleneck
          </button>
          <button onClick={() => setMode("native")} className={`toggle-btn ${mode === "native" ? "active" : ""}`}>
            AI-Native Hub
          </button>
        </div>

        {/* Content Mode */}
        {mode === "legacy" ? (
          <div style={{ minHeight: "180px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h4 style={{ color: "#ef4444", fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
                Primary Growth Blocker
              </h4>
              <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.55)", lineHeight: "1.6" }}>
                {data.pain}
              </p>
            </div>
            <div style={{ marginTop: "14px", padding: "10px 14px", borderRadius: "10px", background: "rgba(239, 68, 68, 0.03)", border: "1px dashed rgba(239, 68, 68, 0.15)", fontSize: "11.5px", color: "#ef4444", fontWeight: "600" }}>
              ✕ Stagnated conversion pipeline
            </div>
          </div>
        ) : (
          <div style={{ minHeight: "180px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.7)", lineHeight: "1.6", marginBottom: "14px" }}>
                {data.desc}
              </p>
              
              <h4 style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>
                GTM System Core
              </h4>
              <p style={{ fontSize: "12px", color: "#fff", fontWeight: "600" }}>
                {data.systems}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer KPI Gauge */}
      <div className="radial-kpi-container" style={{ borderTop: mode === "native" ? `1px solid ${data.accent}15` : "1px solid rgba(239,68,68,0.15)" }}>
        <svg className="radial-kpi-svg">
          <circle cx="24" cy="24" r="20" className="radial-bg-ring" />
          <circle
            cx="24"
            cy="24"
            r="20"
            className="radial-fill-ring"
            style={{
              stroke: mode === "native" ? data.accent : "#ef4444",
              strokeDashoffset: mode === "native" ? strokeDashoffset : 125.6 * 0.7, // default legacy blocker offset
            }}
          />
        </svg>
        <div>
          <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1px", display: "block" }}>
            Target Outcome
          </span>
          <span style={{ fontSize: "18px", fontWeight: "900", color: mode === "native" ? data.accent : "#ef4444" }}>
            {mode === "native" ? data.metric : "Blocked Pipeline"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function IndustriesPage() {
  const [selectedSim, setSelectedSim] = useState("saas");
  const [budget, setBudget] = useState(25000);

  useEffect(() => {
    document.title = "Industries | NurtureHive";
  }, []);

  // Simulator Calculations
  const calculateROI = () => {
    let pipelineMultiplier = 2.0;
    let timeSavedVal = 20;
    let cacReduction = 15;

    if (selectedSim === "saas") {
      pipelineMultiplier = (1.8 + (budget / 50000) * 1.5).toFixed(1);
      timeSavedVal = Math.round(30 + (budget / 10000) * 8);
      cacReduction = Math.round(25 + (budget / 12000) * 4);
    } else if (selectedSim === "enterprise") {
      pipelineMultiplier = (1.5 + (budget / 40000) * 1.2).toFixed(1);
      timeSavedVal = Math.round(20 + (budget / 8000) * 10);
      cacReduction = Math.round(15 + (budget / 10000) * 5);
    } else {
      // Consulting
      pipelineMultiplier = (2.2 + (budget / 60000) * 1.6).toFixed(1);
      timeSavedVal = Math.round(25 + (budget / 12000) * 6);
      cacReduction = Math.round(20 + (budget / 15000) * 3);
    }

    // Limit maximum bounds
    pipelineMultiplier = Math.min(parseFloat(pipelineMultiplier), 4.2).toFixed(1);
    timeSavedVal = Math.min(timeSavedVal, 120);
    cacReduction = Math.min(cacReduction, 65);

    return {
      multiplier: `${pipelineMultiplier}X`,
      hours: `${timeSavedVal} hrs`,
      cac: `${cacReduction}%`
    };
  };

  const results = calculateROI();

  return (
    <SiteShell>
      <InnerHero
        eyebrow="Industries"
        title="Target architectures for scalable sectors"
        description="Every industry faces unique pipeline bottlenecks. We deploy tailormade growth systems built for your specific buyer journey."
      />

      <section className="sec industries-page-custom" style={{ paddingBottom: "80px", paddingTop: "20px" }}>
        <div style={{ width: "100%", maxWidth: "1000px", margin: "0 auto", padding: "0 20px" }}>
          
          <div className="who-serve-heading">
            <span>WHO WE SERVE</span>
            <h2>Built for SaaS Businesses</h2>
            <p>Purpose-built for companies building authority in AI-first markets.</p>
          </div>

          {/* Interactive Card Grid */}
          <div className="ind-redesign-grid">
            {industryData.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>

          {/* ROI & GTM Simulator */}
          <div className="roi-sim-container">
            <div className="roi-grid">
              
              {/* Left Column Controls */}
              <div>
                <h3 style={{ fontSize: "22px", color: "#fff", fontWeight: "800", marginBottom: "8px" }}>
                  GTM Performance Simulator
                </h3>
                <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.45)", lineHeight: "1.6", marginBottom: "24px" }}>
                  Select your model and budget scale to calculate your estimated NurtureHive impact benchmarks.
                </p>

                {/* Model Selector Buttons */}
                <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "10px" }}>
                  Select Growth Model
                </span>
                <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
                  {["saas", "enterprise", "consulting"].map((model) => (
                    <button
                      key={model}
                      onClick={() => setSelectedSim(model)}
                      style={{
                        flex: 1,
                        background: selectedSim === model ? "rgba(26,233,171,0.08)" : "rgba(255,255,255,0.01)",
                        border: selectedSim === model ? "1px solid #1ae9ab" : "1px solid rgba(255,255,255,0.05)",
                        color: selectedSim === model ? "#fff" : "rgba(255,255,255,0.5)",
                        padding: "10px 8px",
                        borderRadius: "10px",
                        fontSize: "12px",
                        fontWeight: "700",
                        cursor: "pointer",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        transition: "all 0.2s"
                      }}
                    >
                      {model === "saas" ? "SaaS" : model === "enterprise" ? "Enterprise" : "Consulting"}
                    </button>
                  ))}
                </div>

                {/* Budget Slider */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1px" }}>
                    Monthly Growth Budget
                  </span>
                  <span style={{ fontSize: "16px", color: "#1ae9ab", fontWeight: "800" }}>
                    ${budget.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                  className="slider-custom"
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
                  <span>$5K</span>
                  <span>$50K</span>
                  <span>$100K</span>
                </div>

              </div>

              {/* Right Column Outputs */}
              <div className="roi-output-box">
                
                <div>
                  <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "4px" }}>
                    Estimated Pipeline Growth
                  </span>
                  <div className="roi-stat-num">{results.multiplier}</div>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                    Increase in inbound opportunity value
                  </span>
                </div>

                <div style={{ borderTop: "1px dashed rgba(255,255,255,0.06)", paddingTop: "16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <div>
                    <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.5px", display: "block" }}>
                      Ops Hours Saved / Mo
                    </span>
                    <span style={{ fontSize: "20px", fontWeight: "800", color: "#fff" }}>
                      {results.hours}
                    </span>
                  </div>
                  <div>
                    <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.5px", display: "block" }}>
                      Estimated CAC Cut
                    </span>
                    <span style={{ fontSize: "20px", fontWeight: "800", color: "#1ae9ab" }}>
                      {results.cac}
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      <CtaSection />
    </SiteShell>
  );
}
