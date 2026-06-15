"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import BlurText from "@/components/BlurText";
import HiveCanvas from "@/components/HiveCanvas";
import MagicBento from "@/components/MagicBento";
import {
  cases,
  comparison,
  frameworkSteps,
  hero,
  industries,
  infrastructure,
  outcomes,
  systems,
  techPills
} from "@/data/siteContent";

const partnerLogos = [
  { name: "AdContext IQ", src: "/logos/adcontext-iq.png" },
  { name: "Clair AI", src: "/logos/clair-ai.png" },
  { name: "The Lockout Co.", src: "/logos/the-lockout-co.png" },
  { name: "D2P 2Pay", src: "/logos/d2p-2pay.png" },
  { name: "Megan Soft", src: "/logos/megan-soft.png" },
  { name: "iGuroo", src: "/logos/iguroo.png" },
  { name: "Mamaeatz", src: "/logos/mamaeatz.png" },
  { name: "Cloud Gear", src: "/logos/cloud-gear.png" },
  { name: "TNT Crane & Rigging", src: "/logos/tnt-crane.png" }
];

function SectionIntro({ tag, title, description, centered = false, titleStyle = {} }) {
  return (
    <>
      <div className={`sec-tag${centered ? " center" : ""}`}>{tag}</div>
      <div className={`sec-h${centered ? " center" : ""}`} style={titleStyle}>{title}</div>
      {description ? <p className={`sec-p${centered ? " center" : ""}`}>{description}</p> : null}
    </>
  );
}

function SystemIcon({ title }) {
  const key = title.trim().toLowerCase();

  let color = "currentColor";
  let shadow = "none";

  if (key === "search intelligence") {
    color = "#1ae9ab"; // Teal
    shadow = "rgba(26,233,171,0.45)";
  } else if (key === "content ecosystems") {
    color = "#38bdf8"; // Sky Blue
    shadow = "rgba(56,189,248,0.45)";
  } else if (key === "demand systems") {
    color = "#6366f1"; // Indigo
    shadow = "rgba(99,102,241,0.45)";
  } else if (key === "agentic ai marketing") {
    color = "#a78bfa"; // Violet
    shadow = "rgba(167,139,250,0.45)";
  } else if (key === "digital experience engineering") {
    color = "#f472b6"; // Pink
    shadow = "rgba(244,114,182,0.45)";
  } else if (key === "revenue intelligence") {
    color = "#1ae9ab";
    shadow = "rgba(26,233,171,0.45)";
  }

  const iconProps = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: shadow !== "none" ? { filter: `drop-shadow(0 0 6px ${shadow})` } : {}
  };

  if (key === "search intelligence") {
    return (
      <svg {...iconProps}>
        {/* Search lens + network globe */}
        <circle cx="10" cy="10" r="5" />
        <line x1="21" y1="21" x2="15" y2="15" />
        <path d="M10 5v10 M5 10h10" strokeWidth="1.2" opacity="0.6" />
      </svg>
    );
  }

  if (key === "content ecosystems") {
    return (
      <svg {...iconProps}>
        {/* Repeating text sheets representing an ecosystem */}
        <path d="M12 2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6l6-6V4a2 2 0 0 0-2-2z" />
        <path d="M12 2v6h6" />
        <line x1="7" y1="12" x2="13" y2="12" />
        <line x1="7" y1="15" x2="11" y2="15" />
      </svg>
    );
  }

  if (key === "demand systems") {
    return (
      <svg {...iconProps}>
        {/* Growth funnel channels */}
        <path d="M4 20h16M4 20V4l6 8 4-4 6 12" />
        <circle cx="20" cy="20" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (key === "agentic ai marketing") {
    return (
      <svg {...iconProps}>
        {/* Automation gear with central AI sparkle star */}
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2 M12 20v2 M2 12h2 M20 12h2 M5 5l1.5 1.5 M17.5 17.5l1.5 1.5 M5 19l1.5-1.5 M17.5 6.5l1.5 1.5" />
        <path d="M12 9v6 M9 12h6" strokeWidth="1.2" />
      </svg>
    );
  }

  if (key === "digital experience engineering") {
    return (
      <svg {...iconProps}>
        {/* Code terminal window */}
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 9l3 3-3 3 M13 15h4" />
      </svg>
    );
  }

  if (key === "revenue intelligence") {
    return (
      <svg {...iconProps}>
        {/* Security shield + currency coin */}
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="11" r="3" />
        <path d="M12 9v4 M10.5 11h3" />
      </svg>
    );
  }

  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
    </svg>
  );
}



export function HeroSection() {
  const logoStageRef = useRef(null);

  useEffect(() => {
    if (!logoStageRef.current) return undefined;

    const ctx = gsap.context(() => {
      const track = logoStageRef.current.querySelector(".logo-scroll-track");
      const logos = gsap.utils.toArray(".gsap-logo-scroll .partner-logo");

      gsap.set(logos, {
        opacity: 0,
        opacity: 0,
        y: 28,
        scale: 0.82,
        rotateY: -18
      });

      gsap.to(logos, {
        opacity: 1,
        scale: 1,
        y: 0,
        rotateY: 0,
        duration: 0.75,
        ease: "power3.out",
        stagger: {
          each: 0.07,
          from: "center"
        }
      });

      logos.forEach((logo, index) => {
        gsap.to(logo, {
          y: index % 2 === 0 ? -8 : 8,
          rotateY: index % 2 === 0 ? 7 : -7,
          rotateZ: index % 3 === 0 ? 1.2 : -1.2,
          duration: 3 + index * 0.12,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.6 + index * 0.08
        });
      });

      if (track) {
        gsap.fromTo(
          track,
          { xPercent: 0 },
          {
            xPercent: -50,
            duration: 24,
            repeat: -1,
            ease: "none"
          }
        );
      }
    }, logoStageRef);

    return () => ctx.revert();
  }, []);

  return (
    <section data-page="1" className="hero-page">
      <div className="hero-wrap">
        <div className="hero-left">
          <div className="badge">
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <polygon points="5,0.5 9.5,3 9.5,7 5,9.5 0.5,7 0.5,3" fill="#1D9E75" />
            </svg>
            {hero.badge}
          </div>
          <div className="hero-h1">
            <BlurText
              text="The Intelligence Layer"
              delay={150}
              animateBy="words"
              direction="bottom"
              className="hero-h1-line"
            />
            <BlurText
              text="Behind Modern Growth"
              delay={150}
              animateBy="words"
              direction="bottom"
              className="hero-h1-line"
              initialDelay={0.45}
            />
          </div>
          <p className="hero-sub">{hero.description}</p>
        </div>
        <div className="hero-right">
          <HiveCanvas />
        </div>
      </div>

      <div ref={logoStageRef} className="hero-partners gsap-logo-scroll" aria-label="Partner logos">
        <div className="logo-scroll-track">
          {[...partnerLogos, ...partnerLogos].map((partner, index) => (
            <div className="partner-logo" key={`${partner.name}-${index}`}>
              <img
                src={partner.src}
                alt={partner.name}
                className="filter-logo-monochrome"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SystemsSection() {
  const [selectedSystem, setSelectedSystem] = useState("");

  return (
    <section data-page="2" className="sec" id="systems">
      <div className="systems-intro">
        <div className="sec-tag">What we actually do</div>
        <h2 className="sec-h systems-heading">Intelligence systems for scalable growth</h2>
        <p className="sec-p systems-description">
          Six integrated systems that drive pipeline, authority, and revenue - not isolated campaigns.
        </p>
      </div>
      <div className="systems-bento">
        {systems.map((item, index) => (
          <div
            className={`card systems-card systems-card-${index + 1}${selectedSystem === item.title ? " is-selected" : ""}`}
            key={item.title}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedSystem(item.title)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelectedSystem(item.title);
              }
            }}
            style={{ animationDelay: `${index * 0.12}s`, "--card-delay": `${index * 0.12}s` }}
          >
            <svg className="card-outline-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <rect className="card-outline-base" x="0.5" y="0.5" width="99" height="99" rx="0" pathLength="400" />
              <rect className="card-outline-trace" x="0.5" y="0.5" width="99" height="99" rx="0" pathLength="400" />
            </svg>
            <svg className="hex-border-svg" viewBox="0 0 100 100" aria-hidden="true">
              <path className="hex-border-base" d="M50 3 L94 25 L94 75 L50 97 L6 75 L6 25 Z" pathLength="360" />
              <path className="hex-border-trace" d="M50 3 L94 25 L94 75 L50 97 L6 75 L6 25 Z" pathLength="360" />
            </svg>
            <div className={`card-icon ci-${item.tone}`}>
              <SystemIcon title={item.title} />
            </div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <span className="kpi">
              <span className="kpi-arrow">{item.kpi.slice(0, 1)}</span>
              <span>{item.kpi.slice(1).trim()}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function OutcomesSection() {
  return (
    <section data-page="3" className="sec" id="outcomes" style={{ paddingBottom: "24px", paddingTop: "40px" }}>
      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        
        <div className="outcomes-section-head">
          <span className="sec-tag">Growth backed by outcomes</span>
          <h2 className="sec-h">
            Measurable results, not vanity metrics
          </h2>
          <p className="sec-p">
            Every engagement is tied to pipeline impact, discoverability, and revenue.
          </p>
        </div>

        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="26, 233, 171"
        />
      </div>
    </section>
  );
}

export function ComparisonSection() {
  const legacyItems = [
    "Siloed teams running disconnected campaigns",
    "Vanity metrics with no pipeline attribution",
    "Manual execution that doesn't scale",
    "Reactive campaigns, no predictive intelligence",
    "No visibility in AI search or GEO/AEO surfaces"
  ];

  const modernItems = [
    "Built for AI-first search: SEO + GEO + AEO",
    "Integrated intelligence-driven growth systems",
    "Measurable pipeline impact with full attribution",
    "AI-native automation that scales with your team",
    "Predictive, proactive GTM operations"
  ];

  return (
    <section data-page="4" className="sec modern-problem-section" id="comparison">
      <div className="modern-problem-wrap">
        <div className="modern-problem-head">
          <span>THE MODERN GROWTH PROBLEM</span>
          <h2 className="sec-h systems-heading comparison-heading-line">
            Traditional marketing wasn&apos;t built for the AI era
          </h2>
          <p>Most growth teams are running playbooks designed for a world that no longer exists.</p>
        </div>

        <div className="modern-problem-grid">
          <article className="modern-problem-card legacy">
            <h3>Traditional agencies</h3>
            <ul>
              {legacyItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="modern-problem-card modern">
            <h3>NurtureHive intelligence systems</h3>
            <ul>
              {modernItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function InfraIcon({ title }) {
  const key = title.trim().toLowerCase();
  
  let color = "#1ae9ab"; // default Teal
  let shadow = "rgba(26,233,171,0.45)";

  if (key === "ai search visibility") {
    color = "#1ae9ab"; // Teal
    shadow = "rgba(26,233,171,0.45)";
  } else if (key === "gtm automation") {
    color = "#38bdf8"; // Light Blue/Cyan
    shadow = "rgba(56,189,248,0.45)";
  } else if (key === "content intelligence") {
    color = "#818cf8"; // Indigo
    shadow = "rgba(129,140,248,0.45)";
  } else if (key === "funnel systems") {
    color = "#f472b6"; // Pink/Magenta
    shadow = "rgba(244,114,182,0.45)";
  } else if (key === "crm integrations") {
    color = "#fb923c"; // Amber/Orange
    shadow = "rgba(251,146,60,0.45)";
  } else if (key === "executive branding") {
    color = "#34d399"; // Emerald Green
    shadow = "rgba(52,211,153,0.45)";
  } else if (key === "marketing analytics") {
    color = "#a78bfa"; // Violet
    shadow = "rgba(167,139,250,0.45)";
  } else if (key === "conversion engineering") {
    color = "#fb7185"; // Rose
    shadow = "rgba(251,113,133,0.45)";
  }

  color = "#1ae9ab";
  shadow = "rgba(26,233,171,0.45)";

  const iconProps = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: { filter: `drop-shadow(0 0 6px ${shadow})` }
  };

  if (key === "ai search visibility") {
    return (
      <svg {...iconProps}>
        {/* Magnifying search lens */}
        <circle cx="11" cy="11" r="6" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        {/* Glow / visibility sparkles inside */}
        <path d="M11 8v6 M8 11h6" strokeWidth="1.5" />
      </svg>
    );
  }

  if (key === "gtm automation") {
    return (
      <svg {...iconProps}>
        {/* Loop cycle representing automated sequence */}
        <path d="M21 12A9 9 0 0 1 12 21a9 9 0 0 1-9-9 9 9 0 0 1 9-9" />
        <path d="M12 2v4 M12 18v4 M4.9 4.9l2.8 2.8 M16.3 16.3l2.8 2.8" />
        {/* Clock hand indicator */}
        <polyline points="12 8 12 12 14 14" />
      </svg>
    );
  }

  if (key === "content intelligence") {
    return (
      <svg {...iconProps}>
        {/* Document sheet */}
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        {/* Text lines representing content */}
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    );
  }

  if (key === "funnel systems") {
    return (
      <svg {...iconProps}>
        {/* Funnel structure */}
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    );
  }

  if (key === "crm integrations") {
    return (
      <svg {...iconProps}>
        {/* Interlocking links representing connection plug/sync */}
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    );
  }

  if (key === "executive branding") {
    return (
      <svg {...iconProps}>
        {/* Shield badge */}
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        {/* Profile avatar outline */}
        <circle cx="12" cy="10" r="3" />
        <path d="M7 16c0-2 3-3 5-3s5 1 5 3" />
      </svg>
    );
  }

  if (key === "marketing analytics") {
    return (
      <svg {...iconProps}>
        {/* Bar chart column graphs */}
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    );
  }

  if (key === "conversion engineering") {
    return (
      <svg {...iconProps}>
        {/* Concentric targets */}
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        {/* Conversion crosshairs */}
        <path d="M12 2v4 M12 18v4 M2 12h4 M18 12h4" />
      </svg>
    );
  }

  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
    </svg>
  );
}
const infraColors = {
  "ai search visibility": {
    glow: "rgba(26,233,171,0.22)",
    border: "rgba(26,233,171,0.25)",
    bg: "rgba(26,233,171,0.18)"
  },
  "gtm automation": {
    glow: "rgba(56,189,248,0.22)",
    border: "rgba(56,189,248,0.25)",
    bg: "rgba(56,189,248,0.18)"
  },
  "content intelligence": {
    glow: "rgba(129,140,248,0.22)",
    border: "rgba(129,140,248,0.25)",
    bg: "rgba(129,140,248,0.18)"
  },
  "funnel systems": {
    glow: "rgba(244,114,182,0.22)",
    border: "rgba(244,114,182,0.25)",
    bg: "rgba(244,114,182,0.18)"
  },
  "crm integrations": {
    glow: "rgba(251,146,60,0.22)",
    border: "rgba(251,146,60,0.25)",
    bg: "rgba(251,146,60,0.18)"
  },
  "executive branding": {
    glow: "rgba(52,211,153,0.22)",
    border: "rgba(52,211,153,0.25)",
    bg: "rgba(52,211,153,0.18)"
  },
  "marketing analytics": {
    glow: "rgba(167,139,250,0.22)",
    border: "rgba(167,139,250,0.25)",
    bg: "rgba(167,139,250,0.18)"
  },
  "conversion engineering": {
    glow: "rgba(251,113,133,0.22)",
    border: "rgba(251,113,133,0.25)",
    bg: "rgba(251,113,133,0.18)"
  }
};

export function InfrastructureSection() {
  return (
    <section data-page="5" className="sec blade-stack-section" id="infrastructure">

      {/* Content — top */}
      <div className="infrastructure-heading-block">
        <div className="sec-tag infrastructure-heading-tag">Growth infrastructure</div>
        <h2 className="infrastructure-heading-title infrastructure-heading-line">
          The infrastructure behind modern growth
        </h2>
        <p className="infrastructure-heading-copy">
          Architecture-grade building blocks powering your entire GTM motion - from discovery to revenue.
        </p>
      </div>

      {/* All cards — below content */}
      <div
        className="tab-fade-in infrastructure-card-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "18px",
          width: "100%",
        }}
      >
        {infrastructure.map(([title, sub]) => {
          const col = {
            glow: "rgba(26,233,171,0.22)",
            border: "rgba(26,233,171,0.25)",
            bg: "rgba(26,233,171,0.18)"
          };
          return (
            <div
              key={title}
              className="infra-grid-card"
            >
              {/* Icon with glow background */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", marginBottom: "14px", height: "58px" }}>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  background: `radial-gradient(circle at 35% 30%, ${col.bg}, rgba(8,22,38,0.65))`,
                  boxShadow: `0 0 22px ${col.glow}, 0 8px 20px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.12)`,
                  border: `1px solid ${col.border}`,
                  flexShrink: 0,
                }}>
                  <InfraIcon title={title} />
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 style={{ fontSize: "16px", color: "#fff", margin: "0 0 6px 0", fontWeight: "700" }}>{title}</h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.55 }}>{sub}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}



export function FrameworkSection() {
  return (
    <section className="sec" id="framework">
      <SectionIntro
        tag="Our proprietary methodology"
        title="The NurtureHive intelligence framework"
        description="Five phases from fragmented campaigns to compounding intelligence-led growth."
      />
      <div className="fw-steps">
        {frameworkSteps.map(([num, title, text], index) => (
          <div className="fw-step" key={title}>
            <div className="fw-num">{num}</div>
            {index < frameworkSteps.length - 1 ? <div className="fw-line" /> : null}
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

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
    bg: "rgba(26,233,171,0.04)"
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
    bg: "rgba(56,189,248,0.04)"
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
    bg: "rgba(129,140,248,0.04)"
  }
];

function IndustryCard({ data }) {
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
        <span style={{ fontSize: "10px", color: mode === "native" ? data.accent : "#ef4444", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1.5px" }}>
          {data.tagline}
        </span>
        <h3 style={{ fontSize: "20px", color: "#fff", fontWeight: "800", margin: "8px 0 12px 0" }}>
          {data.title}
        </h3>
        
        <div className="toggle-group">
          <div className={`toggle-bg-slider ${mode === "legacy" ? "left" : "right"}`} />
          <button onClick={() => setMode("legacy")} className={`toggle-btn ${mode === "legacy" ? "active" : ""}`}>
            Legacy
          </button>
          <button onClick={() => setMode("native")} className={`toggle-btn ${mode === "native" ? "active" : ""}`}>
            AI-Native
          </button>
        </div>

        {mode === "legacy" ? (
          <div style={{ minHeight: "180px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h4 style={{ color: "#ef4444", fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
                Blocker
              </h4>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: "1.6" }}>
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
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: "1.6", marginBottom: "14px" }}>
                {data.desc}
              </p>
              <h4 style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>
                GTM System
              </h4>
              <p style={{ fontSize: "12px", color: "#fff", fontWeight: "600" }}>
                {data.systems}
              </p>
            </div>
          </div>
        )}
      </div>

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
              strokeDashoffset: mode === "native" ? strokeDashoffset : 125.6 * 0.7,
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

export function IndustriesSection() {
  const [selectedSim, setSelectedSim] = useState("saas");
  const [budget, setBudget] = useState(25000);

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
      pipelineMultiplier = (2.2 + (budget / 60000) * 1.6).toFixed(1);
      timeSavedVal = Math.round(25 + (budget / 12000) * 6);
      cacReduction = Math.round(20 + (budget / 15000) * 3);
    }

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
    <section className="sec" id="industries" style={{ paddingBottom: "100px", paddingTop: "40px" }}>
      <div style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
        
        <div className="who-serve-heading">
          <span>WHO WE SERVE</span>
          <h2>Built for SaaS Businesses</h2>
          <p>Purpose-built for companies building authority in AI-first markets.</p>
        </div>

        {/* Interactive Grid */}
        <div className="ind-redesign-grid">
          {industryData.map((item) => (
            <IndustryCard key={item.id} data={item} />
          ))}
        </div>

        {/* ROI Simulator */}
        <div className="roi-sim-container">
          <div className="roi-grid">
            
            {/* Left Controls */}
            <div>
              <h3 style={{ fontSize: "22px", color: "#fff", fontWeight: "800", marginBottom: "8px" }}>
                GTM Performance Simulator
              </h3>
              <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.45)", lineHeight: "1.6", marginBottom: "24px" }}>
                Select your model and budget scale to calculate your estimated NurtureHive impact benchmarks.
              </p>

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

            {/* Right Outputs */}
            <div className="roi-output-box">
              <div>
                <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "4px" }}>
                  Estimated Pipeline Growth
                </span>
                <div className="roi-stat-num">{results.multiplier}</div>
                <span style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.4)" }}>
                  Increase in inbound opportunity value
                </span>
              </div>

              <div style={{ borderTop: "1px dashed rgba(255,255,255,0.06)", paddingTop: "16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div>
                  <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.5px", display: "block" }}>
                    Hours Saved / Mo
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
  );
}

export function CasesSection() {
  return (
    <section className="sec" id="cases">
      <SectionIntro
        tag="Growth systems in action"
        title="Results we've engineered"
        description="Real outcomes from intelligence-led systems - not vanity metrics."
      />
      <div className="cases-grid">
        {cases.map((item) => (
          <div className="case-card" key={item.title}>
            <span className="case-tag">{item.tag}</span>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <div className="case-out">{item.outcome}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

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
      { step: "4. Deploy", detail: "Pushes reference block to Content Ecosystem" }
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

export function TechnologySection() {
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
    
    const interval = setInterval(() => {
      if (currentIdx < fullResponse.length) {
        setTypedResponse(prev => prev + fullResponse.charAt(currentIdx));
        currentIdx += 2;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 15);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => runSearchSimulation(0), 0);
    return () => window.clearTimeout(timer);
  }, [runSearchSimulation]);

  const currentStageData = growthStackData[activeStage];

  return (
    <section className="sec" id="insights" style={{ paddingBottom: "100px", paddingTop: "40px" }}>
      <div style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Section 1: GTM Stack Schematic */}
        <div style={{ marginBottom: "50px" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <span style={{ fontSize: "10px", color: "#1ae9ab", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase" }}>
              Architecture Flow
            </span>
            <h2 style={{ fontSize: "28px", color: "#fff", fontWeight: "800", marginTop: "6px" }}>
              Our GTM Technology Stack
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
                border: "1px solid rgba(255, 255, 255, 0.08)",
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

          <div className="mock-aeo-response-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "10px" }}>
              <span style={{ fontSize: "11px", color: "#1ae9ab", fontWeight: "800", textTransform: "uppercase" }}>
                AI Engine Answer
              </span>
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
                ChatGPT Search Index (Mocked)
              </span>
            </div>

            <p style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.85)",
              lineHeight: "1.7",
              minHeight: "80px",
              margin: "0 0 20px 0"
            }}>
              {typedResponse}
              {isTyping && <span style={{ display: "inline-block", width: "8px", height: "14px", background: "#1ae9ab", marginLeft: "4px" }} />}
            </p>

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
  );
}

export function CtaSection() {
  return (
    <div className="cta-box" id="contact">
      <div className="sec-tag center">Ready to grow intelligently?</div>
      <h2>Build a smarter growth engine</h2>
      <p>AI-native growth systems engineered for discoverability, authority, pipeline, and scale.</p>
      <div className="cta-btns">
        <Link href="#contact" className="btn-p">
          Schedule Strategy Session
        </Link>
        <Link href="#systems" className="btn-g">
          Explore Growth Systems
        </Link>
      </div>
    </div>
  );
}

export function InnerHero({ eyebrow, title, description }) {
  return (
    <section className="inner-hero">
      <div className="badge">{eyebrow}</div>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

