"use client";

import { useEffect } from "react";
import { CtaSection } from "@/components/Sections";
import { SiteShell } from "@/components/SiteChrome";
import { infrastructure } from "@/data/siteContent";



function InfraIcon({ title, isActive }) {
  const key = title.trim().toLowerCase();
  
  let color = "#1ae9ab"; // default Teal
  let shadow = "rgba(26,233,171,0.45)";

  if (key === "ai search visibility") {
    color = isActive ? "#1ae9ab" : "rgba(26,233,171,0.5)";
    shadow = isActive ? "rgba(26,233,171,0.45)" : "none";
  } else if (key === "gtm automation") {
    color = isActive ? "#38bdf8" : "rgba(56,189,248,0.5)";
    shadow = isActive ? "rgba(56,189,248,0.45)" : "none";
  } else if (key === "content intelligence") {
    color = isActive ? "#818cf8" : "rgba(129,140,248,0.5)";
    shadow = isActive ? "rgba(129,140,248,0.45)" : "none";
  } else if (key === "funnel systems") {
    color = isActive ? "#f472b6" : "rgba(244,114,182,0.5)";
    shadow = isActive ? "rgba(244,114,182,0.45)" : "none";
  } else if (key === "crm integrations") {
    color = isActive ? "#fb923c" : "rgba(251,146,60,0.5)";
    shadow = isActive ? "rgba(251,146,60,0.45)" : "none";
  } else if (key === "executive branding") {
    color = isActive ? "#34d399" : "rgba(52,211,153,0.5)";
    shadow = isActive ? "rgba(52,211,153,0.45)" : "none";
  } else if (key === "marketing analytics") {
    color = isActive ? "#a78bfa" : "rgba(167,139,250,0.5)";
    shadow = isActive ? "rgba(167,139,250,0.45)" : "none";
  } else if (key === "conversion engineering") {
    color = isActive ? "#fb7185" : "rgba(251,113,133,0.5)";
    shadow = isActive ? "rgba(251,113,133,0.45)" : "none";
  }

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
    style: { filter: shadow !== "none" ? `drop-shadow(0 0 6px ${shadow})` : "none" }
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



function UnusedThreeDIcon({ index, isActive }) {
  const id = `tdp-alt-${index}-${isActive ? "a" : "i"}`;
  const c1 = isActive ? "#1ae9ab" : "rgba(26,233,171,0.5)";
  const c2 = isActive ? "#378add" : "rgba(55,138,221,0.5)";
  const c3 = isActive ? "#9b51e0" : "rgba(155,81,224,0.5)";
  const hi = isActive ? "#5dfcd1" : "rgba(93,252,209,0.6)";
  const gl = isActive ? 0.3 : 0.07;

  if (index === 0) return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style={{ overflow: "visible" }}>
      <defs>
        <radialGradient id={`${id}-g`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="55%" stopColor={c1} stopOpacity="0.5" />
          <stop offset="100%" stopColor="rgba(8,22,38,0.8)" />
        </radialGradient>
      </defs>
      <circle cx="10" cy="10" r="6.5" fill={`url(#${id}-g)`} stroke={c1} strokeWidth="1.6" style={{ filter: `drop-shadow(0 0 8px rgba(26,233,171,${gl}))` }} />
      <circle cx="8.5" cy="8.5" r="2.2" fill="rgba(255,255,255,0.15)" stroke="none" />
      <circle cx="10" cy="10" r="3.5" fill="none" stroke={hi} strokeWidth="0.7" opacity="0.7" />
      <path d="M14.8 14.8 L20.5 20.5" stroke={c2} strokeWidth="2.8" strokeLinecap="round" />
      <path d="M14.8 14.8 L17.5 17.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );

  if (index === 1) return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style={{ overflow: "visible" }}>
      <defs>
        <radialGradient id={`${id}-n1`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="50%" stopColor={c1} />
          <stop offset="100%" stopColor="rgba(8,22,38,0.9)" />
        </radialGradient>
        <radialGradient id={`${id}-n2`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="50%" stopColor={c2} />
          <stop offset="100%" stopColor="rgba(8,22,38,0.9)" />
        </radialGradient>
        <radialGradient id={`${id}-n3`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="50%" stopColor={c3} />
          <stop offset="100%" stopColor="rgba(8,22,38,0.9)" />
        </radialGradient>
      </defs>
      <line x1="6" y1="17" x2="12" y2="7" stroke={c1} strokeWidth="1.2" strokeDasharray="2 1.5" opacity="0.6" />
      <line x1="12" y1="7" x2="18" y2="17" stroke={c2} strokeWidth="1.2" strokeDasharray="2 1.5" opacity="0.6" />
      <line x1="6" y1="17" x2="18" y2="17" stroke={c3} strokeWidth="1.2" strokeDasharray="2 1.5" opacity="0.6" />
      <circle cx="12" cy="7" r="3.8" fill={`url(#${id}-n2)`} style={{ filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.5))" }} />
      <circle cx="6" cy="17" r="3.8" fill={`url(#${id}-n1)`} style={{ filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.5))" }} />
      <circle cx="18" cy="17" r="3.8" fill={`url(#${id}-n3)`} style={{ filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.5))" }} />
    </svg>
  );

  if (index === 2) return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style={{ overflow: "visible" }}>
      <path d="M4 7 L12 4 L20 7 L12 10 Z" fill="rgba(8,22,38,0.85)" stroke={c2} strokeWidth="0.8" opacity="0.55" />
      <path d="M4 12 L12 9 L20 12 L12 15 Z" fill="rgba(8,22,38,0.92)" stroke={c2} strokeWidth="1.1" opacity="0.8" />
      <path d="M4 12 L4 14.5 L12 17.5 L12 15 Z" fill={c2} opacity="0.18" />
      <path d="M20 12 L20 14.5 L12 17.5 L12 15 Z" fill={c1} opacity="0.15" />
      <path d="M4 16 L12 13 L20 16 L12 19 Z" fill="rgba(8,22,38,0.98)" stroke={c1} strokeWidth="1.6" style={{ filter: `drop-shadow(0 2px 8px rgba(26,233,171,${gl}))` }} />
      <path d="M4 16 L4 18.5 L12 21.5 L12 19 Z" fill={c1} opacity="0.28" />
      <path d="M20 16 L20 18.5 L12 21.5 L12 19 Z" fill={hi} opacity="0.18" />
      <path d="M7.5 15.5 L11 14.4 M7.5 17.2 L14 15" stroke={hi} strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );

  if (index === 3) return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style={{ overflow: "visible" }}>
      <ellipse cx="12" cy="6" rx="9" ry="3.5" stroke={c1} strokeWidth="1.8" fill="rgba(26,233,171,0.07)" style={{ filter: `drop-shadow(0 0 8px rgba(26,233,171,${gl}))` }} />
      <ellipse cx="12" cy="12" rx="6" ry="2.4" stroke={c2} strokeWidth="1.5" fill="rgba(55,138,221,0.07)" />
      <ellipse cx="12" cy="17" rx="3" ry="1.2" stroke={c3} strokeWidth="1.2" fill="rgba(155,81,224,0.09)" />
      <path d="M3 6 L9 17 M21 6 L15 17" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7" strokeDasharray="2 2" />
      <circle cx="12" cy="17" r="1.2" fill={hi} />
    </svg>
  );

  if (index === 4) return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id={`${id}-cy`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={c2} stopOpacity="0.85" />
          <stop offset="45%" stopColor="rgba(8,22,38,0.95)" />
          <stop offset="100%" stopColor={c1} stopOpacity="0.75" />
        </linearGradient>
      </defs>
      <ellipse cx="12" cy="4.5" rx="7" ry="2.2" fill="rgba(8,22,38,0.9)" stroke={hi} strokeWidth="1.1" style={{ filter: `drop-shadow(0 0 6px rgba(93,252,209,${gl * 1.5}))` }} />
      <path d="M5 4.5 L5 8.5 C5 9.7 19 9.7 19 8.5 L19 4.5" fill={`url(#${id}-cy)`} />
      <ellipse cx="12" cy="8.5" rx="7" ry="2.2" fill="rgba(8,22,38,0.92)" stroke={c1} strokeWidth="0.8" />
      <ellipse cx="12" cy="10.5" rx="7" ry="2.2" fill="rgba(8,22,38,0.92)" stroke={c2} strokeWidth="0.8" />
      <path d="M5 10.5 L5 14.5 C5 15.7 19 15.7 19 14.5 L19 10.5" fill={`url(#${id}-cy)`} opacity="0.85" />
      <ellipse cx="12" cy="14.5" rx="7" ry="2.2" fill="rgba(8,22,38,0.93)" stroke={c2} strokeWidth="0.85" />
      <ellipse cx="12" cy="16.5" rx="7" ry="2.2" fill="rgba(8,22,38,0.93)" stroke={c1} strokeWidth="0.85" />
      <path d="M5 16.5 L5 20.5 C5 21.7 19 21.7 19 20.5 L19 16.5" fill={`url(#${id}-cy)`} opacity="0.9" />
      <ellipse cx="12" cy="20.5" rx="7" ry="2.2" fill="rgba(8,22,38,0.95)" stroke={hi} strokeWidth="1.2" />
    </svg>
  );

  if (index === 5) return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id={`${id}-sh`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c2} stopOpacity="0.9" />
          <stop offset="100%" stopColor="rgba(8,22,38,0.95)" />
        </linearGradient>
      </defs>
      <path d="M12 3 L4.5 5.5 L4.5 12 C4.5 17.5 12 21.5 12 21.5 C12 21.5 19.5 17.5 19.5 12 L19.5 5.5 Z" fill={`url(#${id}-sh)`} stroke={c1} strokeWidth="1.6" style={{ filter: `drop-shadow(0 4px 12px rgba(26,233,171,${gl}))` }} />
      <path d="M12 5 L6 7 L6 12 C6 16.5 12 19.5 12 19.5 C12 19.5 18 16.5 18 12 L18 7 Z" fill="none" stroke={hi} strokeWidth="0.7" opacity="0.45" />
      <polygon points="12,8 13.2,10.8 16.2,11.2 14.1,13.2 14.6,16.2 12,14.8 9.4,16.2 9.9,13.2 7.8,11.2 10.8,10.8" fill={hi} opacity="0.9" />
    </svg>
  );

  if (index === 6) return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style={{ overflow: "visible" }}>
      <path d="M3.5 17.5 L6.5 16 L6.5 21 L3.5 21 Z" fill={c2} opacity="0.5" />
      <path d="M6.5 16 L9.5 17.5 L9.5 21 L6.5 21 Z" fill={c2} opacity="0.72" />
      <path d="M3.5 17.5 L6.5 16 L9.5 17.5 L6.5 19 Z" fill={hi} opacity="0.8" />
      <path d="M9 7.5 L12 6 L12 21 L9 21 Z" fill={c1} opacity="0.7" />
      <path d="M12 6 L15 7.5 L15 21 L12 21 Z" fill={c1} opacity="0.92" />
      <path d="M9 7.5 L12 6 L15 7.5 L12 9 Z" fill={hi} />
      <path d="M14.5 12.5 L17.5 11 L17.5 21 L14.5 21 Z" fill={c2} opacity="0.65" />
      <path d="M17.5 11 L20.5 12.5 L20.5 21 L17.5 21 Z" fill={c2} opacity="0.88" />
      <path d="M14.5 12.5 L17.5 11 L20.5 12.5 L17.5 14 Z" fill={hi} opacity="0.95" />
    </svg>
  );

  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id={`${id}-lg`} x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
          <stop offset="30%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
      </defs>
      <ellipse cx="12" cy="20.5" rx="5" ry="1.5" fill={c1} opacity="0.2" />
      <path d="M14 2 L7.5 12 L12.5 12 L10 22 L17 10.5 L12 10.5 Z" fill={`url(#${id}-lg)`} style={{ filter: `drop-shadow(0 0 10px rgba(26,233,171,${gl * 2}))` }} />
      <path d="M13.5 2.5 L8.5 11.5 L12 11.5" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" fill="none" />
    </svg>
  );
}




const infraColors = {
  "ai search visibility": {
    glow: "rgba(26,233,171,0.18)",
    border: "rgba(26,233,171,0.2)",
    bg: "rgba(26,233,171,0.16)"
  },
  "gtm automation": {
    glow: "rgba(56,189,248,0.18)",
    border: "rgba(56,189,248,0.2)",
    bg: "rgba(56,189,248,0.16)"
  },
  "content intelligence": {
    glow: "rgba(129,140,248,0.18)",
    border: "rgba(129,140,248,0.2)",
    bg: "rgba(129,140,248,0.16)"
  },
  "funnel systems": {
    glow: "rgba(244,114,182,0.18)",
    border: "rgba(244,114,182,0.2)",
    bg: "rgba(244,114,182,0.16)"
  },
  "crm integrations": {
    glow: "rgba(251,146,60,0.18)",
    border: "rgba(251,146,60,0.2)",
    bg: "rgba(251,146,60,0.16)"
  },
  "executive branding": {
    glow: "rgba(52,211,153,0.18)",
    border: "rgba(52,211,153,0.2)",
    bg: "rgba(52,211,153,0.16)"
  },
  "marketing analytics": {
    glow: "rgba(167,139,250,0.18)",
    border: "rgba(167,139,250,0.2)",
    bg: "rgba(167,139,250,0.16)"
  },
  "conversion engineering": {
    glow: "rgba(251,113,133,0.18)",
    border: "rgba(251,113,133,0.2)",
    bg: "rgba(251,113,133,0.16)"
  }
};

export default function InfrastructurePage() {
  useEffect(() => {
    document.title = "Infrastructure | NurtureHive";
  }, []);

  return (
    <SiteShell>
      <section className="sec infrastructure-page" style={{ paddingBottom: "120px", paddingTop: "140px" }}>

        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="sec-tag center">Infrastructure</div>
          <h1 style={{ fontSize: "clamp(32px, 4vw, 54px)", color: "#fff", marginBottom: "18px", fontWeight: "700", lineHeight: 1.1 }}>
            Scalable GTM building blocks
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto" }}>
            Architecture-grade GTM infrastructure — core growth channels and automation tools, all in one place.
          </p>
        </div>

        {/* All Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
        }}>
          {infrastructure.map(([title, sub], index) => {
            const key = title.trim().toLowerCase();
            const col = infraColors[key] || {
              glow: "rgba(26,233,171,0.18)",
              border: "rgba(26,233,171,0.2)",
              bg: "rgba(26,233,171,0.16)"
            };
            return (
              <div
                key={title}
                className="infra-grid-card"
              >
                {/* Icon with glow background */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", marginBottom: "12px", height: "48px" }}>
                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    background: `radial-gradient(circle at 35% 30%, ${col.bg}, rgba(8,22,38,0.65))`,
                    boxShadow: `0 0 18px ${col.glow}, 0 6px 16px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)`,
                    border: `1px solid ${col.border}`,
                    flexShrink: 0,
                  }}>
                    <InfraIcon title={title} isActive={true} />
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

      <CtaSection />
    </SiteShell>
  );
}
