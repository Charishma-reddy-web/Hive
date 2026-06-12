'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconSaaS, IconAI, IconEnterprise, IconGlobal, IconConsulting, IconData, IconB2B, IconTransformation } from './TargetAudienceIcons';
const audiences = [
  { name: 'SaaS Businesses',        icon: IconSaaS,         color: '#00F0B5' },
  { name: 'AI Startups',            icon: IconAI,           color: '#8B5CF6' },
  { name: 'Enterprise Tech',        icon: IconEnterprise,   color: '#F59E0B' },
  { name: 'Global Capabilities',    icon: IconGlobal,       color: '#3B82F6' },
  { name: 'Consulting Firms',       icon: IconConsulting,   color: '#EC4899' },
  { name: 'Cloud & Data Platforms', icon: IconData,         color: '#10B981' },
  { name: 'B2B Services',           icon: IconB2B,          color: '#F43F5E' },
  { name: 'Transformation',         icon: IconTransformation, color: '#06B6D4' }
];

export default function TargetAudience() {
  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  // Auto-cycle logic
  useEffect(() => {
    // Pause cycle if user is manually interacting
    if (hoveredName) return; 
    
    const interval = setInterval(() => {
      // Cycles from -1 (default state) to 7 (last audience)
      setActiveIndex((prev) => (prev >= audiences.length - 1 ? -1 : prev + 1));
    }, 2800); // 2.8 seconds per item
    
    return () => clearInterval(interval);
  }, [hoveredName]);

  const activeAudience = hoveredName 
    ? audiences.find(a => a.name === hoveredName)
    : (activeIndex >= 0 ? audiences[activeIndex] : null);

  const displayTitle = activeAudience ? activeAudience.name : 'modern growth teams';

  return (
    <section data-page="7" className="relative w-full py-12 md:py-16 bg-[#060C18] border-t border-white/[0.04] flex items-center justify-center">
      
      {/* Subtle top light wash */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.01] blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-8 md:px-12 flex flex-col items-center text-center gap-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center w-full">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#00F0B5]/25 bg-[#00F0B5]/[0.08] mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00F0B5] shadow-[0_0_8px_#00F0B5] animate-pulse" />
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#00F0B5] font-mono">Who we serve</p>
          </div>
          <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-[1.1] tracking-tight text-white/80 mb-6 flex flex-col items-center">
            <span>Built for</span>
            <div className="relative h-[48px] md:h-[56px] lg:h-[64px] w-full min-w-[min(88vw,620px)] mt-2 flex justify-center">
              <AnimatePresence>
                <motion.span
                  key={displayTitle}
                  initial={{ opacity: 0, filter: 'blur(8px)', y: 6 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  exit={{ opacity: 0, filter: 'blur(8px)', y: -6 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 font-bold whitespace-nowrap"
                  style={{
                    color: activeAudience ? activeAudience.color : '#FFFFFF',
                    textShadow: activeAudience ? `0 0 30px ${activeAudience.color}80, 0 0 10px ${activeAudience.color}40` : 'none'
                  }}
                >
                  {displayTitle}
                </motion.span>
              </AnimatePresence>
            </div>
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/45 font-normal leading-relaxed max-w-[460px]">
            Purpose-built for companies building authority in AI-first markets.
          </p>
        </div>

        {/* Right Side: Horizontal icon row */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full">
          {audiences.map((aud, index) => {
            const isActive = activeAudience?.name === aud.name;

            return (
              <motion.div
                key={aud.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                onMouseEnter={() => setHoveredName(aud.name)}
                onMouseLeave={() => setHoveredName(null)}
                className="group relative flex flex-col items-center justify-center shrink-0 cursor-default transition-all duration-300"
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  backgroundColor: isActive ? `${aud.color}15` : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${isActive ? aud.color + '65' : 'rgba(255,255,255,0.07)'}`,
                  boxShadow: isActive
                    ? `0 14px 36px -6px ${aud.color}45, inset 0 1px 0 rgba(255,255,255,0.2), 0 0 0 1px ${aud.color}30`
                    : '0 4px 14px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)'
                }}
              >
                {/* Top glowing line when hovered */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl pointer-events-none transition-all duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${aud.color}, transparent)`,
                    opacity: isActive ? 1 : 0
                  }}
                />
                
                {/* Inner ambient glow */}
                {isActive && (
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-screen opacity-50 rounded-xl"
                    style={{ background: `radial-gradient(circle at top, ${aud.color}40, transparent 70%)` }}
                  />
                )}

                {/* Custom 3D SVG Icon */}
                <div 
                  className="w-7 h-7 relative z-10 transition-transform duration-300"
                  style={{ transform: isActive ? 'scale(1.15)' : 'scale(1)' }}
                >
                  <aud.icon />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

