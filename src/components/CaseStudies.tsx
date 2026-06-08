'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const cases = [
  {
    title: "AI visibility transformation for a B2B SaaS company",
    desc: "Deployed tri-layer SEO + GEO + AEO strategy across 12 core intent clusters.",
    metric: "+220%",
    label: "Organic Visibility",
    color: "#00F0B5",
    iconColor: "#00F0B5",
    tag: "Search Intelligence",
    illustration: (color: string, size = 100) => (
      <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: color, opacity: 0.18, filter: 'blur(28px)' }} />
        <svg viewBox="0 0 100 100" width={size * 0.78} height={size * 0.78} style={{ position: 'relative', zIndex: 1, filter: `drop-shadow(0 6px 18px rgba(0,0,0,0.9)) drop-shadow(0 0 30px ${color}70)` }}>
          <defs>
            <linearGradient id="gG" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fff" stopOpacity="0.55"/><stop offset="100%" stopColor="#000" stopOpacity="0.55"/></linearGradient>
            <linearGradient id="rG" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor={color}/><stop offset="100%" stopColor={`${color}40`}/></linearGradient>
          </defs>
          <g transform="rotate(-45 50 50)">
            <rect x="42" y="63" width="16" height="32" rx="6" fill="#2a2a2a" stroke="#111" strokeWidth="1.5" />
            <rect x="45" y="58" width="10" height="8" fill={color} />
            <circle cx="50" cy="35" r="27" fill="none" stroke="url(#rG)" strokeWidth="7" />
            <circle cx="50" cy="35" r="24" fill="url(#gG)" />
          </g>
          <path d="M 34 26 Q 46 14 56 23 Q 46 29 34 26 Z" fill="#fff" opacity="0.5" />
        </svg>
      </div>
    )
  },
  {
    title: "Funnel engineering for an AI startup's enterprise GTM",
    desc: "Rebuilt lead qualification with agentic AI and intent-based routing.",
    metric: "3X",
    label: "Qualification Efficiency",
    color: "#00F0B5",
    iconColor: "#A855F7",
    tag: "GTM Automation",
    illustration: (color: string, size = 100) => (
      <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: color, opacity: 0.18, filter: 'blur(28px)' }} />
        <svg viewBox="0 0 100 100" width={size * 0.78} height={size * 0.78} style={{ position: 'relative', zIndex: 1, filter: `drop-shadow(0 6px 18px rgba(0,0,0,0.9)) drop-shadow(0 0 30px ${color}70)` }}>
          <defs>
            <linearGradient id="fG" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor={color} stopOpacity="0.9"/><stop offset="100%" stopColor="#000" stopOpacity="0.85"/></linearGradient>
            <radialGradient id="ftG" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#111" stopOpacity="0.9"/><stop offset="100%" stopColor={color} stopOpacity="1"/></radialGradient>
          </defs>
          <path d="M 15 28 L 85 28 L 58 68 L 42 68 Z" fill="url(#fG)" />
          <rect x="42" y="68" width="16" height="14" fill="url(#fG)" />
          <ellipse cx="50" cy="82" rx="8" ry="3" fill="#000" stroke={color} strokeWidth="1.5" />
          <ellipse cx="50" cy="28" rx="35" ry="11" fill="url(#ftG)" stroke={color} strokeWidth="2" />
          <path d="M 22 34 L 42 68 L 38 68 L 18 34 Z" fill="#fff" opacity="0.12" />
          <circle cx="50" cy="8" r="4" fill="#fff" style={{ filter: `drop-shadow(0 0 8px ${color})` }} />
        </svg>
      </div>
    )
  },
  {
    title: "Thought leadership ecosystem for a consulting firm",
    desc: "Multi-channel authority engine spanning LinkedIn, content, and AI surfaces.",
    metric: "150K+",
    label: "Audience Reach",
    color: "#00F0B5",
    iconColor: "#F59E0B",
    tag: "Executive Branding",
    illustration: (color: string, size = 100) => (
      <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: color, opacity: 0.18, filter: 'blur(28px)' }} />
        <svg viewBox="0 0 100 100" width={size * 0.78} height={size * 0.78} style={{ position: 'relative', zIndex: 1, filter: `drop-shadow(0 6px 18px rgba(0,0,0,0.9)) drop-shadow(0 0 30px ${color}70)` }}>
          <defs>
            <linearGradient id="pG" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor={color} stopOpacity="0.9"/><stop offset="100%" stopColor="#000" stopOpacity="0.85"/></linearGradient>
            <radialGradient id="ptG" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor={color} stopOpacity="1"/><stop offset="100%" stopColor={color} stopOpacity="0.3"/></radialGradient>
          </defs>
          <rect x="25" y="62" width="50" height="26" fill="url(#pG)" />
          <ellipse cx="50" cy="88" rx="25" ry="7" fill="#000" stroke={color} strokeWidth="2" />
          <ellipse cx="50" cy="62" rx="25" ry="7" fill="url(#ptG)" stroke={color} strokeWidth="2" />
          <rect x="32" y="62" width="5" height="26" fill="#fff" opacity="0.12" />
          <circle cx="50" cy="28" r="12" fill={color} style={{ filter: `drop-shadow(0 0 16px ${color}) drop-shadow(0 0 32px ${color})` }} />
          <circle cx="50" cy="28" r="5" fill="#fff" opacity="0.55" />
        </svg>
      </div>
    )
  }
];

const CYCLE_MS = 3800;
const N = cases.length;

export default function CaseStudies() {
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progRef  = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearAll = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progRef.current)  clearInterval(progRef.current);
  };

  const startCycle = useCallback((fromIndex: number) => {
    clearAll();
    setProgress(0);
    const step = 100 / (CYCLE_MS / 40);
    progRef.current = setInterval(() => setProgress(p => Math.min(p + step, 100)), 40);
    timerRef.current = setInterval(() => {
      setActive(i => (i + 1) % N);
      setProgress(0);
    }, CYCLE_MS);
  }, []);

  useEffect(() => {
    if (!paused) startCycle(active);
    else clearAll();
    return clearAll;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, active]);

  const goTo = (i: number) => { setActive(i); setProgress(0); };
  const prev = () => goTo((active - 1 + N) % N);
  const next = () => goTo((active + 1) % N);

  // Compute each card's 3D position
  const getStyle = (i: number): React.CSSProperties => {
    let offset = ((i - active) % N + N) % N;
    if (offset > N / 2) offset -= N; // normalise to -1, 0, +1

    if (offset === 0) {
      // Front & center
      return {
        position: 'absolute',
        left: '26%', // Centers the 48% wide card
        width: '48%',
        height: '100%',
        transform: 'translateX(0%) perspective(900px) rotateY(0deg) translateZ(0px) scale(1)',
        zIndex: 10,
        opacity: 1,
        filter: 'brightness(1)',
        cursor: 'default',
        transition: 'all 0.75s cubic-bezier(0.16,1,0.3,1)',
      };
    } else if (offset === -1 || offset === N - 1) {
      // Left card
      return {
        position: 'absolute',
        left: '6%',
        top: '5%',
        width: '32%',
        height: '90%',
        transform: 'translateX(0%) perspective(900px) rotateY(28deg) translateZ(-80px) scale(0.92)',
        zIndex: 5,
        opacity: 0.55,
        filter: 'brightness(0.55)',
        cursor: 'pointer',
        transition: 'all 0.75s cubic-bezier(0.16,1,0.3,1)',
      };
    } else {
      // Right card
      return {
        position: 'absolute',
        right: '6%',
        top: '5%',
        width: '32%',
        height: '90%',
        transform: 'translateX(0%) perspective(900px) rotateY(-28deg) translateZ(-80px) scale(0.92)',
        zIndex: 5,
        opacity: 0.55,
        filter: 'brightness(0.55)',
        cursor: 'pointer',
        transition: 'all 0.75s cubic-bezier(0.16,1,0.3,1)',
      };
    }
  };

  return (
    <section style={{ background: '#060C18', borderTop: '1px solid rgba(255,255,255,0.05)', width: '100%', color: '#fff', position: 'relative' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '52px 64px 56px' }}>

        {/* ── Header ── */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, border: '1px solid rgba(0,240,181,0.3)', background: 'rgba(0,240,181,0.08)', marginBottom: 16 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00F0B5', boxShadow: '0 0 8px #00F0B5', display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#00F0B5', fontFamily: 'monospace' }}>Growth Systems in Action</span>
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, color: '#fff', margin: '0 0 10px' }}>
              Results we've engineered
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', fontWeight: 300, lineHeight: 1.6, maxWidth: 480, margin: 0 }}>
              Real outcomes from intelligence-led systems — not vanity metrics.
            </p>
          </div>

          {/* Arrows */}
          <div style={{ display: 'flex', gap: 10 }}>
            {[{ fn: prev, icon: <ChevronLeft size={18} />, label: 'Prev' }, { fn: next, icon: <ChevronRight size={18} />, label: 'Next' }].map(({ fn, icon, label }) => (
              <button key={label} onClick={fn}
                onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
                aria-label={label}
                style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'rgba(255,255,255,0.7)', transition: 'all 0.2s' }}>
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* ── 3D Coverflow Stage ── */}
        <div
          style={{ position: 'relative', height: 310, transformStyle: 'preserve-3d' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Reflective floor gradient */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to top, rgba(0,240,181,0.03), transparent)', pointerEvents: 'none', zIndex: 0 }} />

          {cases.map((c, i) => {
            const isActive = i === active;
            const isExpanded = isActive && hoveredIndex === i;
            const cardStyle = getStyle(i);

            return (
              <div
                key={i}
                onClick={() => !isActive && goTo(i)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  ...cardStyle,
                  borderRadius: 24,
                  overflow: 'hidden',
                  /* Thick layered dark background with depth */
                  background: isActive
                    ? `linear-gradient(145deg, ${c.color}18 0%, #0C1520 30%, #070C14 70%, #04080F 100%)`
                    : 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, #090E18 60%, #050810 100%)',
                  /* Thick 2.5px glowing border */
                  border: `2.5px solid ${isActive ? `${c.color}80` : 'rgba(255,255,255,0.08)'}`,
                  boxShadow: isActive
                    ? `0 0 0 1px ${c.color}15, 0 40px 100px rgba(0,0,0,0.85), 0 0 80px ${c.color}20, inset 0 2px 0 ${c.color}40, inset 0 0 120px ${c.color}06`
                    : '0 12px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Deep ambient glow — top & bottom */}
                <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: `radial-gradient(ellipse at 50% -10%, ${c.color}35, transparent 55%)`, opacity: isActive ? 1 : 0.3, transition: 'opacity 0.6s' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', pointerEvents: 'none', background: `radial-gradient(ellipse at 50% 100%, ${c.color}12, transparent 70%)`, opacity: isActive ? 1 : 0, transition: 'opacity 0.6s' }} />

                {/* Diagonal light sweep */}
                <div style={{ position: 'absolute', top: '-40%', left: '-30%', width: '160%', height: '180%', background: `linear-gradient(110deg, transparent 35%, ${c.color}08 50%, transparent 65%)`, opacity: isActive ? 1 : 0, pointerEvents: 'none', transition: 'opacity 0.5s' }} />

                {/* Thick glowing progress bar */}
                {isActive && (
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'rgba(0,0,0,0.4)', zIndex: 20, borderRadius: '24px 24px 0 0' }}>
                    <div style={{ height: '100%', width: `${progress}%`, background: `linear-gradient(90deg, ${c.color}80, ${c.color})`, boxShadow: `0 0 16px ${c.color}, 0 0 6px ${c.color}`, transition: 'width 0.04s linear', borderRadius: '24px 0 0 0' }} />
                  </div>
                )}

                {/* Inner content */}
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', height: '100%' }}>

                  {/* Left: Illustration with platform disc AND heading */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: isExpanded ? '34%' : '100%', transition: 'width 0.7s cubic-bezier(0.16,1,0.3,1)', flexShrink: 0, flexDirection: 'column', gap: isExpanded ? 0 : 20 }}>
                    {/* Glow platform under icon */}
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ position: 'absolute', width: isExpanded ? 90 : (isActive ? 120 : 80), height: isExpanded ? 90 : (isActive ? 120 : 80), borderRadius: '50%', background: `radial-gradient(circle, ${c.iconColor}20, transparent 70%)`, transition: 'all 0.7s' }} />
                      {c.illustration(c.iconColor, isExpanded ? 70 : (isActive ? 95 : 65))}
                    </div>
                    
                    {/* Heading visible when NOT expanded */}
                    <div style={{
                      opacity: isExpanded ? 0 : 1,
                      height: isExpanded ? 0 : 'auto',
                      overflow: 'hidden',
                      transition: 'opacity 0.4s ease',
                      textAlign: 'center',
                      padding: '0 24px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}>
                      <div style={{ width: 24, height: 2, background: `linear-gradient(90deg, transparent, ${c.color}, transparent)`, marginBottom: 14 }} />
                      <h3 style={{ fontSize: isActive ? 20 : 15, fontWeight: 700, color: '#fff', lineHeight: 1.3, letterSpacing: '-0.01em', transition: 'all 0.5s', maxWidth: 280, margin: 0 }}>
                        {c.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right: Content — only on active AND expanded */}
                  <div style={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    padding: isExpanded ? '20px 24px 20px 0' : '20px 0 20px 0', 
                    overflow: 'hidden',
                    width: isExpanded ? '66%' : '0%',
                    opacity: isExpanded ? 1 : 0,
                    transition: 'width 0.7s cubic-bezier(0.16,1,0.3,1), padding 0.7s, opacity 0.4s ease 0.15s',
                  }}>
                    {/* ── ANTI-SQUISH WRAPPER ── */}
                    {/* This fixed width ensures the text never word-wraps during the transition */}
                    <div style={{ width: '380px', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
                      {/* Tag pill */}
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 999, background: `${c.color}16`, border: `1px solid ${c.color}35`, marginBottom: 10, width: 'fit-content' }}>
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: c.color, boxShadow: `0 0 6px ${c.color}`, display: 'inline-block' }} />
                        <span style={{ fontSize: 9, color: c.color, textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700, fontFamily: 'monospace' }}>{c.tag}</span>
                      </div>

                      {/* Big bold metric */}
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
                        <span style={{ fontSize: 38, fontWeight: 900, color: c.color, lineHeight: 1, letterSpacing: '-0.03em', textShadow: `0 0 30px ${c.color}60` }}>{c.metric}</span>
                        <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, maxWidth: 90, lineHeight: 1.3 }}>{c.label}</span>
                      </div>

                      {/* Colored separator line */}
                      <div style={{ height: 2, width: 28, background: `linear-gradient(90deg, ${c.color}, ${c.color}00)`, borderRadius: 2, marginBottom: 10 }} />

                      {/* Title — bold and chunky */}
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.35, margin: '0 0 8px', whiteSpace: 'normal', letterSpacing: '-0.02em' }}>
                        {c.title}
                      </h3>

                      {/* Desc */}
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: '0 0 14px' }}>
                        {c.desc}
                      </p>

                      {/* CTA */}
                      <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: c.color, textDecoration: 'none', width: 'fit-content' }}>
                        Read case study <ArrowRight size={11} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* "Click to expand" hint on inactive */}
                {!isActive && (
                  <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 5 }}>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Click to view</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Dot nav ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 28 }}>
          {cases.map((c, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: active === i ? 32 : 8, height: 8, borderRadius: 4,
                border: 'none', padding: 0, cursor: 'pointer',
                background: active === i ? c.color : 'rgba(255,255,255,0.18)',
                boxShadow: active === i ? `0 0 14px ${c.color}90` : 'none',
                transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
 