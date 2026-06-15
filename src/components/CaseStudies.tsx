"use client";

import React, { useState, MouseEvent, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
const caseStudies = [
  {
    id: "01",
    badge: "Search intelligence",
    title: "AI visibility transformation for a B2B SaaS company",
    description: "Deployed tri-layer SEO + GEO + AEO strategy across 12 core intent clusters.",
    metric: "+220%",
    metricLabel: "organic visibility",
  },
  {
    id: "02",
    badge: "GTM automation",
    title: "Funnel engineering for an AI startup's enterprise GTM",
    description: "Rebuilt lead qualification with agentic AI and intent-based routing.",
    metric: "3X",
    metricLabel: "lead qualification efficiency",
  },
  {
    id: "03",
    badge: "Executive branding",
    title: "Thought leadership ecosystem for a consulting firm",
    description: "Multi-channel authority engine spanning LinkedIn, content, and AI surfaces.",
    metric: "150K+",
    metricLabel: "audience reach",
  },
];

// --- Custom Animated Number Component ---
function AnimatedMetric({ value }: { value: string }) {
  const match = value.match(/^([^0-9]*)([0-9]+)([^0-9]*)$/);
  const num = match ? parseInt(match[2], 10) : 0;

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!match) return;
    const controls = animate(count, num, { duration: 1.2, ease: "easeOut" });
    return controls.stop;
  }, [num, count, match]);

  if (!match) return <span>{value}</span>;
  
  const prefix = match[1];
  const suffix = match[3];

  return (
    <span>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function DynamicBento() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStudy = caseStudies[activeIndex];

  // Mouse tracking function for the Laser Edge borders
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="cases" data-page="8" className="sec bg-[#060C18] text-white py-16 md:py-24 flex flex-col justify-center selection:bg-[#00F0B5]/30">
      <div className="max-w-[1200px] mx-auto w-full px-8 md:px-14">
        
        {/* EXACT MATCH HEADER */}
        <div className="w-full flex flex-col items-start mb-10 md:mb-12">
          <div className="sec-tag">Growth Systems in Action</div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-4 tracking-tight">
            Results we&apos;ve engineered
          </h2>
          <p className="text-white/50 text-lg font-light">
            Real outcomes from intelligence-led systems — not vanity metrics.
          </p>
        </div>

        {/* Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Dynamic Navigation Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4 relative">
            {caseStudies.map((study, index) => {
              const isActive = activeIndex === index;
              
              // Standard JS comment used here so it doesn't break the JSX return
              // OUTER BORDER WRAPPER
              return (
                <div
                  key={study.id}
                  onClick={() => setActiveIndex(index)}
                  onMouseMove={handleMouseMove}
                  className={`group relative p-[1px] rounded-2xl cursor-pointer overflow-hidden transition-all duration-500
                    ${isActive ? "bg-white/20 shadow-[0_0_30px_rgba(0,240,181,0.15)]" : "bg-white/5 hover:bg-white/10"}
                  `}
                >
                  {/* The Glowing Border Spotlight (Only shines through the 1px padding) */}
                  <div 
                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: "radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,240,181,0.4), transparent 40%)"
                    }}
                  />

                  {/* INNER CARD SURFACE */}
                  <div className={`relative z-10 rounded-[15px] px-5 py-0 flex items-center gap-4 h-[88px] transition-colors duration-500 overflow-hidden
                    ${isActive ? "bg-[#060C18]/90 backdrop-blur-md" : "bg-[#060C18]/40"}
                  `}>
                    
                    {/* Active Green Left Edge */}
                    <div 
                      className={`absolute top-0 left-0 w-1 h-full bg-[#00F0B5] transition-all duration-500 origin-left z-20
                        ${isActive ? "scale-x-100 shadow-[0_0_15px_#00F0B5]" : "scale-x-0"}
                      `} 
                    />

                    {/* Content */}
                    <span className={`font-mono text-sm font-semibold transition-colors duration-300 relative z-30
                      ${isActive ? "text-[#00F0B5]" : "text-white/30 group-hover:text-white/60"}
                    `}>
                      {study.id}
                    </span>
                    <h3 className={`text-[12px] md:text-[13px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 relative z-30 pr-2
                      ${isActive ? "text-white" : "text-white/50 group-hover:text-white/80"}
                    `}>
                      {study.badge}
                    </h3>

                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: The Main Data Stage */}
          <div className="lg:col-span-6 lg:col-start-7 lg:-mt-6 xl:-mt-8">
            
            {/* OUTER BORDER WRAPPER FOR MAIN CARD */}
            <div 
              onMouseMove={handleMouseMove}
              className="group relative p-[2px] rounded-3xl transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_60px_rgba(0,240,181,0.3)] overflow-hidden bg-[#060C18]"
            >
              
              {/* Animated Spinning Gradient Border (Thicker and Brighter) */}
              <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(0,240,181,0.15)_0%,rgba(0,240,181,0.4)_40%,#00F0B5_50%,rgba(0,240,181,0.15)_60%,rgba(0,240,181,0.15)_100%)] group-hover:bg-[conic-gradient(from_90deg_at_50%_50%,rgba(0,240,181,0.25)_0%,rgba(0,240,181,0.6)_40%,#00F0B5_50%,#ffffff_52%,rgba(0,240,181,0.25)_60%,rgba(0,240,181,0.25)_100%)] transition-colors duration-500" />

              {/* INNER CARD SURFACE (Upgraded to Translucent Glass) */}
              <div className="relative z-10 w-full bg-[#060C18]/85 backdrop-blur-3xl rounded-[calc(1.5rem-1px)] overflow-hidden">
                
                {/* Dynamic Inner Glass Surface Spotlight */}
                <div 
                  className="absolute inset-0 z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,240,181,0.08), transparent 50%)"
                  }}
                />

                {/* Decorative Corner Accents */}
                <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-[#00F0B5]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-[#00F0B5]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Data Content */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeStudy.id} 
                    initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative z-10 p-6 md:p-8 flex flex-col"
                  >
                    
                    <h4 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3 leading-snug">
                      {activeStudy.title}
                    </h4>

                    <p className="text-sm md:text-base text-[#8a9ab0] font-light leading-relaxed mb-6 max-w-lg">
                      {activeStudy.description}
                    </p>

                    {/* DIVIDER */}
                    <div className="w-full h-[1px] bg-gradient-to-r from-white/20 via-white/5 to-transparent mb-6" />

                    {/* METRIC */}
                    <div className="flex flex-col">
                      <p className="font-sans text-6xl md:text-[84px] font-black tracking-tighter bg-gradient-to-br from-[#00F0B5] to-[#00F0B5]/40 bg-clip-text text-transparent leading-none mb-3 drop-shadow-[0_0_20px_rgba(0,240,181,0.1)]">
                        <AnimatedMetric value={activeStudy.metric} />
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-[#00F0B5]">›</span>
                        <p className="text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase">
                          {activeStudy.metricLabel}
                        </p>
                      </div>
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}