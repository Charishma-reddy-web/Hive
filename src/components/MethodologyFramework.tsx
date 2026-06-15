/* eslint-disable */
'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

// ─── Data ───────────────────────────────────────────────────────────────────
export const phases = [
  {
    num: '01', title: 'Discover',
    short: 'Market and intent intelligence',
    detail: 'Deep-dive into competitor gaps, keyword clusters, ICP signals, and intent data to map your entire growth landscape before writing a single line of strategy.',
    stat: 3, statSuffix: ' weeks', statLabel: 'Discovery sprint',
    tag: 'Foundation',
  },
  {
    num: '02', title: 'Engineer',
    short: 'Build AI-native growth systems',
    detail: 'Architect SEO, GEO, and AEO infrastructure alongside automation frameworks that are purpose-built for your GTM motion and tech stack.',
    stat: 6, statSuffix: ' weeks', statLabel: 'Build phase',
    tag: 'Infrastructure',
  },
  {
    num: '03', title: 'Amplify',
    short: 'Scale authority & discoverability',
    detail: 'Multi-channel content engine spanning LinkedIn, AI surfaces, newsletters, and organic search — designed to dominate mindshare across every surface your buyers use.',
    stat: 60, statSuffix: '%', statLabel: 'Organic inbound lift',
    tag: 'Distribution',
  },
  {
    num: '04', title: 'Automate',
    short: 'Deploy intelligent workflows',
    detail: 'Agentic AI pipelines handle lead scoring, nurture sequences, and GTM ops at scale — so your team focuses exclusively on pipeline and closing.',
    stat: 40, statSuffix: '%', statLabel: 'Ops reduction',
    tag: 'Automation',
  },
  {
    num: '05', title: 'Optimize',
    short: 'Measure pipeline impact',
    detail: 'Full-funnel attribution dashboards that connect first touch to closed revenue — real GTM clarity, zero vanity metrics, and a clear view of what compounds.',
    stat: 3, statSuffix: '×', statLabel: 'GTM velocity',
    tag: 'Intelligence',
  },
];

// ─── Main Component ──────────────────────────────────────────────────────────
export default function MethodologyFramework() {
  const trackRef      = useRef<HTMLDivElement>(null);
  const progressRef   = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const activeRef     = useRef(0);
  const [hasMouseMoved, setHasMouseMoved] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
    const handleMove = () => {
      setHasMouseMoved(true);
      window.removeEventListener('mousemove', handleMove);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const cursorX = useMotionValue(50);
  const cursorY = useMotionValue(50);
  const smoothX = useSpring(cursorX, { damping: 30, stiffness: 200 });
  const smoothY = useSpring(cursorY, { damping: 30, stiffness: 200 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    cursorX.set(((e.clientX - rect.left) / rect.width) * 100);
    cursorY.set(((e.clientY - rect.top) / rect.height) * 100);
  }, [cursorX, cursorY]);

  // Bulletproof Pure React Scroll Tracking
  // No GSAP, No Framer-Motion useScroll, No conflicts with Lenis
  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      
      const rect = trackRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the track
      const scrollDistance = -rect.top;
      const maxScroll = trackRef.current.offsetHeight - windowHeight;
      
      if (maxScroll <= 0) return;
      
      let progress = scrollDistance / maxScroll;
      progress = Math.max(0, Math.min(1, progress));
      
      // Update visual progress bar instantly
      if (progressRef.current) {
        progressRef.current.style.height = `${progress * 100}%`;
      }
      
      // Determine active phase based on precise intervals
      const totalPhases = phases.length;
      // Math.round snaps the active state when the line is halfway to the next dot
      const idx = Math.max(0, Math.min(Math.round(progress * (totalPhases - 1)), totalPhases - 1));
      
      if (idx !== activeRef.current) {
        activeRef.current = idx;
        setActive(idx);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phase = phases[active];

  return (
    <section ref={trackRef} id="framework" data-page="6" className="sec relative w-full h-[300vh] bg-[#060C18]">
      <div
        onMouseMove={handleMouseMove}
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col pt-8 md:pt-10 pb-16 lg:pb-24"
      >
        {/* ── CURSOR SPOTLIGHT ── */}
        <SpotlightLayer smoothX={smoothX} smoothY={smoothY} />

        {/* Ambient radial glow per phase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`glow-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 55% 50% at 42% 50%, rgba(0,240,181,0.08) 0%, transparent 70%)`,
            }}
          />
        </AnimatePresence>

        {/* Unified Section Header */}
        <div className="relative z-20 w-full flex flex-col items-start mb-2 lg:mb-4 pointer-events-none">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#00F0B5]/25 bg-[#00F0B5]/[0.08] mb-4 shadow-[0_0_15px_rgba(0,240,181,0.1)] pointer-events-auto">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00F0B5] animate-pulse shadow-[0_0_8px_#00F0B5]" />
            <p className="text-[11px] font-bold tracking-[0.35em] uppercase text-[#00F0B5] font-mono">
              The Intelligence Framework
            </p>
          </div>
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-white leading-[1.05] mb-2">
            Our proprietary<br className="hidden lg:block" /> methodology
          </h2>
        </div>

        {/* ── 2-COLUMN ORBITAL LAYOUT ── */}
        <div className="relative z-10 w-full flex flex-col md:flex-row gap-6 lg:gap-16 items-center justify-center flex-1">

          {/* LEFT: Phase List */}
          <div className="relative flex-1 flex items-center justify-center">
            
            {/* Vertical Stack of Phases - Added explicit width to hold the line perfectly */}
            <div className="relative z-10 flex flex-col gap-2 w-[280px]">
              
              {/* Progress bar line connecting dots - Now locked to the list container */}
              <div className="absolute right-[5px] top-[24px] bottom-[24px] w-[2px] bg-white/[0.05] rounded-full overflow-hidden z-0">
                <div 
                  ref={progressRef}
                  className="w-full bg-gradient-to-b from-[#00F0B5] to-[#157A5A] rounded-full origin-top transition-all duration-[50ms]"
                  style={{ height: '0%' }}
                />
              </div>

              {phases.map((p, i) => (
                <div 
                  key={i} 
                  className="relative flex items-center h-[48px] md:h-[56px] cursor-pointer group z-10"
                  onMouseEnter={() => {
                    if (!hasMouseMoved) return;
                    activeRef.current = i;
                    setActive(i);
                  }}
                >
                  {/* Active Glassmorphic Card Wrapper */}
                  {i === active && (
                    <motion.div 
                      layoutId="active-orb-card"
                      className="absolute w-[320px] -left-6 h-full rounded-2xl border border-[#00F0B5]/20 bg-gradient-to-r from-[#00F0B5]/[0.08] to-transparent backdrop-blur-[4px] -z-10"
                      style={{ boxShadow: 'inset 1px 0 0 rgba(0,240,181,0.3), 0 0 30px rgba(0,240,181,0.1)' }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    />
                  )}
                  
                  {/* Item Content */}
                  <div className="relative z-10 w-full flex items-center justify-between">
                    <div className="flex gap-5 items-center">
                      <div className="flex flex-col ml-4">
                        <span 
                          className={`text-[20px] font-bold transition-all duration-300 transform
                            ${i === active 
                              ? "text-white translate-x-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" 
                              : "text-white/30 group-hover:text-white/70 group-hover:translate-x-1"
                            }
                          `}
                        >
                          {p.title}
                        </span>
                      </div>
                    </div>
                    
                    {/* Enhanced Dot Button */}
                    {i === active && (
                      <motion.div 
                        layoutId="active-dot"
                        className="w-3 h-3 rounded-full flex-shrink-0 ml-4 relative flex items-center justify-center bg-[#060C18]"
                        style={{ 
                          background: 'radial-gradient(circle, #00F0B5 0%, #157A5A 100%)',
                          boxShadow: '0 0 12px 1px rgba(0,240,181,0.5), inset 0 1px 1px rgba(255,255,255,0.4)' 
                        }}
                      >
                        <div className="w-[4px] h-[4px] bg-white rounded-full opacity-70" />
                        <motion.div
                          className="absolute inset-0 rounded-full border border-[#00F0B5]"
                          animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                          transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Content Area */}
          <div className="flex-1 min-w-0 flex flex-col relative z-10 h-[400px]">

            {/* Ambient glow behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00F0B5]/[0.04] blur-[120px] rounded-full pointer-events-none -z-10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${active}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col"
              >
                {/* Giant watermark number */}
                <div
                  className="absolute right-[-20px] lg:right-[-40px] top-1/2 -translate-y-1/2 pointer-events-none select-none z-[-5]"
                  style={{
                    fontSize:           'clamp(180px, 28vw, 320px)',
                    fontWeight:         900,
                    lineHeight:         0.8,
                    background:         'linear-gradient(180deg, rgba(0,240,181,0.08) 0%, rgba(3,6,12,0) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    WebkitTextStroke:   '1px rgba(0,240,181,0.12)',
                    fontVariantNumeric: 'tabular-nums',
                    letterSpacing:      '-0.06em',
                  }}
                >
                  {phase.num}
                </div>

                {/* Tag + counter */}
                <div className="flex items-center gap-5 mb-6">
                  <span
                    className="relative overflow-hidden text-[11px] font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full flex items-center gap-2"
                    style={{
                      background: 'linear-gradient(90deg, rgba(0,240,181,0.05), rgba(0,240,181,0.15))',
                      border:     '0.5px solid rgba(0,240,181,0.3)',
                      color:      '#00F0B5',
                      boxShadow:  '0 0 20px rgba(0,240,181,0.1), inset 0 1px 1px rgba(255,255,255,0.1)',
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F0B5] shadow-[0_0_8px_#00F0B5] animate-pulse" />
                    {phase.tag}
                    
                    <motion.div 
                      className="absolute top-0 bottom-0 left-0 w-full"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }}
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2.5, ease: 'linear', repeat: Infinity, repeatDelay: 3 }}
                    />
                  </span>

                  <span className="text-[12px] md:text-[13px] font-mono tracking-widest uppercase text-[#00F0B5]/60 flex items-center gap-1.5">
                    Phase {phase.num} <span className="text-white/20">/ 05</span>
                  </span>
                </div>

                {/* Subtitle */}
                <h3 className="text-[28px] md:text-[36px] font-light leading-[1.15] tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#00F0B5]/80">
                  {phase.short}
                </h3>

                {/* Detail */}
                <p className="text-white/50 text-[14px] leading-[1.8] max-w-[480px] mb-8">
                  {phase.detail}
                </p>

                {/* Stat Card */}
                <div
                  className="inline-flex flex-col px-6 py-4 rounded-xl relative overflow-hidden self-start"
                  style={{
                    background: 'rgba(0,240,181,0.06)',
                    border:     '0.5px solid rgba(0,240,181,0.2)',
                    boxShadow:  '0 0 24px rgba(0,240,181,0.08), inset 0 1px 0 rgba(0,240,181,0.2)',
                  }}
                >
                  <div
                    className="absolute top-0 left-4 right-4 h-[1px]"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(0,240,181,0.6), transparent)' }}
                  />
                  <span className="text-[38px] font-semibold text-white leading-none tracking-tight tabular-nums font-mono">
                    {phase.stat}{phase.statSuffix}
                  </span>
                  <span className="text-[11px] text-white/40 mt-1 tracking-wide">
                    {phase.statLabel}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Cursor spotlight optimized with useMotionTemplate (Zero React Re-renders) ──
function SpotlightLayer({ smoothX, smoothY }: { smoothX: any; smoothY: any }) {
  const bg = useMotionTemplate`radial-gradient(circle 300px at ${smoothX}% ${smoothY}%, rgba(0,240,181,0.06) 0%, transparent 65%)`;

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 transition-none"
      style={{ background: bg }}
    />
  );
}
