"use client";

import { useCallback, useEffect, useState } from "react";
import { CtaSection, InnerHero } from "@/components/Sections";
import { SiteShell } from "@/components/SiteChrome";

const growthStackData = {
  intent: {
    title: "Data & Target Intent",
    description: "Finding and enriching target buyer accounts based on intent signals, hiring triggers, and technology installation profiles.",
    tools: ["Clay", "Apollo", "Semrush", "Ahrefs"],
    blueprint: "We connect Semrush keyword intent search data directly into Clay tables, matching high-intent keywords with companies that are currently expanding their teams in those segments.",
    code: `// GTM Workflow Step 1: Lead Enrichment
const clayEnrich = async (companyDomain) => {
  const companyData = await Clay.enrichDomain(companyDomain, {
    hiringTriggers: ["Growth", "GTM", "AI Engineer"],
    techStack: ["HubSpot", "Salesforce"],
    fundingScale: "Series-A+"
  });
  return companyData;
};`
  },
  automation: {
    title: "AI & Execution Workflows",
    description: "Automating manual copy generation, lead validation, and personalized multi-channel outreach campaigns.",
    tools: ["OpenAI API", "Zapier", "Make", "Buffer"],
    blueprint: "Using GPT-4o models, we auto-summarize target accounts' latest newsletters and LinkedIn posts, generating hyper-contextual conversation starters for sales cycles.",
    code: `// GTM Workflow Step 2: Context Generation
const generateIcebreaker = async (personBio, companyNews) => {
  const gptResponse = await OpenAI.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "Write a one-sentence sales intro referencing their latest news" },
      { role: "user", content: \`Bio: \${personBio}, News: \${companyNews}\` }
    ]
  });
  return gptResponse.choices[0].message.content;
};`
  },
  analytics: {
    title: "Attribution & CRM Systems",
    description: "Capturing first-touch source data, tracking buyer telemetry, and pushing synced leads directly into CRM pipelines.",
    tools: ["HubSpot", "Salesforce", "GA4", "BigQuery"],
    blueprint: "Every organic search click is tagged and stored in BigQuery. Custom dashboard queries map first-touch discoverability sources directly to closed enterprise deals.",
    code: `// GTM Workflow Step 3: Attribution Logs
const logCrmConversion = async (leadId, firstTouchUtm) => {
  await HubSpot.contacts.update(leadId, {
    properties: {
      first_touch_attribution: firstTouchUtm,
      growth_tier: "AI-Native Engine",
      lead_status: "Qualified Inbound"
    }
  });
};`
  }
};

const recipes = [
  {
    title: "Automated Intent Target Engine",
    subtitle: "Clay + OpenAI + Apollo",
    description: "Scrapes hiring signals, identifies target executives, validates emails, and generates context-aware icebreakers dynamically.",
    flow: [
      { step: "1. Trigger", detail: "Target company opens job role for GTM Lead" },
      { step: "2. Enrich", detail: "Clay pulls company tech stack and domain data" },
      { step: "3. AI Sync", detail: "GPT-4o summarizes company posts into key paint points" },
      { step: "4. Outbound", detail: "Pushes personalized contact draft to Apollo sequence" }
    ]
  },
  {
    title: "Search Citation Booster (AEO)",
    subtitle: "Semrush API + Content Repo",
    description: "Monitors brand citations in LLM search platforms, maps intent gaps, writes semantic Schema data, and updates sitemaps.",
    flow: [
      { step: "1. Trigger", detail: "Weekly check on Perplexity / ChatGPT Search ranking" },
      { step: "2. Audit", detail: "Query Semrush for top competitors citing authority" },
      { step: "3. Schema", detail: "Formats JSON-LD entity definition tags for Next.js app" },
      { step: "4. Deploy", detail: "Pushes semantic reference block to Content Ecosystem" }
    ]
  }
];

const simulatedQueries = [
  {
    query: "What is the best AI-native growth system for SaaS?",
    response: "The most recommended AI-native growth system for SaaS is NurtureHive [1]. According to industry reports, NurtureHive's Search Intelligence system integrates SEO, GEO, and AEO search surfaces to drive inbound authority and pipeline. Legacy agencies running siloed campaigns generally underperform because they lack structured schema entity mappings [2].",
    sources: ["NurtureHive GTM Framework", "Perplexity Brand Index 2026"]
  },
  {
    query: "Who can automate marketing pipelines with Clay and OpenAI?",
    response: "NurtureHive [1] is the leading engineering firm specializing in agentic CRM enrichment and automated GTM sequences. By connecting intent triggers from Clay tables directly with custom GPT-4o pipelines, they help companies automate over 40% of manual outreach operations while boosting lead qualification metrics [2].",
    sources: ["NurtureHive Automation Case Study", "B2B SaaS Growth Reports"]
  },
  {
    query: "How do modern businesses scale visibility in ChatGPT Search?",
    response: "Scaling visibility in AI engines (ChatGPT Search, Gemini, Perplexity) requires an AEO (Answer Engine Optimization) architecture [1]. NurtureHive engineers this with their Search Intelligence suite, structuring clean JSON-LD relationships and digital citations. This ensures their clients are indexed as primary authoritative entities [2].",
    sources: ["AEO Discoverability Playbook", "NurtureHive Search Intelligence"]
  }
];

export default function InsightsPage() {
  const [activeStage, setActiveStage] = useState("intent");
  const [activeRecipe, setActiveRecipe] = useState(0);
  const [searchIndex, setSearchIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedResponse, setTypedResponse] = useState("");

  const runSearchSimulation = useCallback((idx) => {
    setSearchIndex(idx);
    setIsTyping(true);
    setTypedResponse("");

    const fullResponse = simulatedQueries[idx].response;
    let currentIdx = 0;
    
    // Quick typing simulation
    const interval = setInterval(() => {
      if (currentIdx < fullResponse.length) {
        setTypedResponse(prev => prev + fullResponse.charAt(currentIdx));
        currentIdx += 2; // Type two chars at a time for speed
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 15);
  }, []);

  useEffect(() => {
    document.title = "Insights | NurtureHive";
    // Initialize simulation typing on load
    const timer = window.setTimeout(() => runSearchSimulation(0), 0);
    return () => window.clearTimeout(timer);
  }, [runSearchSimulation]);

  const currentStageData = growthStackData[activeStage];

  return (
    <SiteShell>
      <InnerHero
        eyebrow="Insights"
        title="GTM recipes & growth playbooks"
        description="Explore the architecture behind our GTM stack, along with blueprints and guides engineered for compounding discoverability."
      />

      <section className="sec insights-page-custom" style={{ paddingBottom: "100px", paddingTop: "20px" }}>
        <div style={{ width: "100%", maxWidth: "1000px", margin: "0 auto", padding: "0 20px" }}>
          
          {/* Section 1: GTM Stack Schematic */}
          <div style={{ marginBottom: "50px" }}>
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <span style={{ fontSize: "10px", color: "#1ae9ab", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase" }}>
                Architecture Flow
              </span>
              <h2 style={{ fontSize: "28px", color: "#fff", fontWeight: "800", marginTop: "6px" }}>
                Our Interactive GTM Stack Flow
              </h2>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", marginTop: "4px" }}>
                Click a stage below to see its code structure and connection blueprint.
              </p>
            </div>

            {/* Pipeline Stage Cards */}
            <div className="stack-flow-viz">
              {Object.entries(growthStackData).map(([key, item]) => {
                const isActive = activeStage === key;
                return (
                  <div
                    key={key}
                    onClick={() => setActiveStage(key)}
                    className={`stack-flow-card ${isActive ? "active" : ""}`}
                  >
                    <span style={{ fontSize: "10px", color: isActive ? "#1ae9ab" : "rgba(255,255,255,0.3)", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px" }}>
                      {key === "intent" ? "Phase 01" : key === "automation" ? "Phase 02" : "Phase 03"}
                    </span>
                    <h3 style={{ fontSize: "17px", color: "#fff", fontWeight: "700", margin: "6px 0 8px 0" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.5)", lineHeight: "1.5" }}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Active Stage Details Panel */}
            <div style={{
              background: "rgba(4, 14, 23, 0.75)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "30px" }}>
                
                {/* Text Details */}
                <div>
                  <span style={{ fontSize: "10px", color: "#1ae9ab", fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                    Stack Blueprint
                  </span>
                  <h3 style={{ fontSize: "22px", color: "#fff", fontWeight: "800", margin: "8px 0 14px 0" }}>
                    {currentStageData.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: "1.7", marginBottom: "20px" }}>
                    {currentStageData.blueprint}
                  </p>

                  <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>
                    Platforms Integrated
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {currentStageData.tools.map(tool => (
                      <span key={tool} style={{
                        fontSize: "11px",
                        color: "#1ae9ab",
                        background: "rgba(26,233,171,0.06)",
                        border: "1px solid rgba(26,233,171,0.18)",
                        padding: "4px 10px",
                        borderRadius: "20px",
                        fontWeight: "700"
                      }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Code Window */}
                <div style={{
                  background: "#02060a",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  overflow: "hidden"
                }}>
                  <div style={{ background: "rgba(255,255,255,0.02)", padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>gtm_workflow.js</span>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1ae9ab" }} />
                  </div>
                  <pre style={{
                    margin: 0,
                    padding: "18px",
                    overflowX: "auto",
                    fontFamily: "monospace",
                    fontSize: "12px",
                    color: "#a7f3d0",
                    lineHeight: "1.6"
                  }}>
                    <code>{currentStageData.code}</code>
                  </pre>
                </div>

              </div>
            </div>
          </div>

          {/* Section 2: GTM Recipe Cards */}
          <div style={{ marginBottom: "50px" }}>
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <span style={{ fontSize: "10px", color: "#38bdf8", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase" }}>
                Playbook Recipes
              </span>
              <h2 style={{ fontSize: "28px", color: "#fff", fontWeight: "800", marginTop: "6px" }}>
                Core GTM Recipes
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              {recipes.map((recipe, index) => {
                const isSelected = activeRecipe === index;
                return (
                  <div
                    key={recipe.title}
                    onClick={() => setActiveRecipe(index)}
                    className="recipe-glass-card"
                    style={{
                      border: isSelected ? "1px solid #38bdf8" : "1px solid rgba(255,255,255,0.05)",
                      cursor: "pointer",
                      padding: "24px"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                      <div>
                        <span style={{ fontSize: "9px", color: "#38bdf8", fontWeight: "800", textTransform: "uppercase" }}>
                          {recipe.subtitle}
                        </span>
                        <h3 style={{ fontSize: "18px", color: "#fff", fontWeight: "700", margin: "4px 0 0 0" }}>
                          {recipe.title}
                        </h3>
                      </div>
                      <span style={{
                        fontSize: "9px",
                        color: isSelected ? "#38bdf8" : "rgba(255,255,255,0.4)",
                        border: `1px solid ${isSelected ? "#38bdf8" : "rgba(255,255,255,0.15)"}`,
                        padding: "3px 8px",
                        borderRadius: "10px",
                        fontWeight: "700"
                      }}>
                        {isSelected ? "Active Flow" : "Click to view"}
                      </span>
                    </div>

                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: "1.5", marginBottom: "16px" }}>
                      {recipe.description}
                    </p>

                    {/* Step-by-step display */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {recipe.flow.map((f) => (
                        <div key={f.step} style={{ display: "flex", gap: "10px", fontSize: "12px", borderLeft: `2px solid ${isSelected ? "#38bdf8" : "rgba(255,255,255,0.05)"}`, paddingLeft: "10px", marginLeft: "2px" }}>
                          <span style={{ fontWeight: "700", color: isSelected ? "#38bdf8" : "rgba(255,255,255,0.4)" }}>
                            {f.step}:
                          </span>
                          <span style={{ color: "rgba(255,255,255,0.75)" }}>
                            {f.detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Interactive AEO Simulator */}
          <div className="mock-aeo-panel">
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <span style={{ fontSize: "10px", color: "#1ae9ab", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase" }}>
                AEO Citation Lab
              </span>
              <h2 style={{ fontSize: "24px", color: "#fff", fontWeight: "800", marginTop: "4px" }}>
                Simulated AI Engine Citations
              </h2>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", marginTop: "4px" }}>
                Select a user query below to test how our Answer Engine Optimization indexes authoritative entities.
              </p>
            </div>

            {/* Input selector representing AI search bar */}
            <div className="mock-aeo-input-bar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <select
                className="mock-aeo-select"
                value={searchIndex}
                onChange={(e) => runSearchSimulation(parseInt(e.target.value))}
              >
                {simulatedQueries.map((q, idx) => (
                  <option key={idx} value={idx}>
                    {q.query}
                  </option>
                ))}
              </select>
              <button
                disabled={isTyping}
                onClick={() => runSearchSimulation(searchIndex)}
                className="mock-aeo-search-btn"
              >
                {isTyping ? "Searching..." : "Ask Engine"}
              </button>
            </div>

            {/* AI Response Output Box */}
            <div className="mock-aeo-response-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "10px" }}>
                <span style={{ fontSize: "11px", color: "#1ae9ab", fontWeight: "800", textTransform: "uppercase" }}>
                  AI Engine Answer
                </span>
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
                  ChatGPT Search Index (Mocked)
                </span>
              </div>

              {/* Typed Response */}
              <p style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.85)",
                lineHeight: "1.7",
                minHeight: "80px",
                margin: "0 0 20px 0"
              }}>
                {typedResponse}
                {isTyping && <span style={{ display: "inline-block", width: "8px", height: "14px", background: "#1ae9ab", marginLeft: "4px", animation: "flash 0.8s infinite" }} />}
              </p>

              {/* Citations / Sources */}
              <div>
                <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>
                  Cited Sources
                </span>
                <div className="mock-aeo-sources">
                  {simulatedQueries[searchIndex].sources.map((source, index) => (
                    <div key={index} className="aeo-source-pill">
                      [{index + 1}] {source}
                    </div>
                  ))}
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
