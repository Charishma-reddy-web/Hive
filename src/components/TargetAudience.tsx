'use client';
/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconSaaS, IconAI, IconEnterprise, IconGlobal, IconConsulting, IconData, IconB2B, IconTransformation } from './TargetAudienceIcons';
const audiences = [
  { name: 'SaaS Businesses',        icon: IconSaaS,         color: '#00F0B5' },
  { name: 'AI Startups',            icon: IconAI,           color: '#8B5CF6' },
  { name: 'Enterprise Tech',        icon: IconEnterprise,   color: '#F59E0B' },
  { name: 'Global Capabilities',    icon: IconGlobal,       color: '#3B82F6' },
  { name: 'Consulting Firms',       icon: IconConsulting,   color: '#EC4899' },
  { name: 'Cloud Platforms',        icon: IconData,         color: '#10B981' },
  { name: 'B2B Services',           icon: IconB2B,          color: '#F43F5E' },
  { name: 'Transformation',         icon: IconTransformation, color: '#06B6D4' }
];

export default function TargetAudience() {
  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const allTitles = ['AI-first enterprises', ...audiences.map(a => a.name)];

  // Hover logic is now handled directly in onMouseEnter

  // Auto-cycle logic
  useEffect(() => {
    // Pause cycle if user is manually interacting
    if (hoveredName) return; 
    
    // Hold on "AI-first enterprises" for an extra second
    const delay = activeIndex === 0 ? 2500 : 1500;
    
    const timer = setTimeout(() => {
      setActiveIndex((prev) => {
        if (prev >= audiences.length) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, delay);
    
    return () => clearTimeout(timer);
  }, [hoveredName, activeIndex]);

  const activeAudience = activeIndex > 0 ? audiences[activeIndex - 1] : null;
  const displayTitle = activeAudience ? activeAudience.name : 'AI-first enterprises';

  return (
    <section id="industries" data-page="7" className="sec relative w-full py-8 md:py-10 bg-[#060C18] border-t border-white/[0.04] flex items-center justify-center overflow-hidden">
      
      {/* Subtle top light wash */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.01] blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 md:px-14 flex flex-col items-center text-center gap-6">
        
        <div className="flex flex-col items-center w-full gap-3">
          {/* Who We Serve Tag */}
          <div className="sec-tag">Who we serve</div>

          {/* Icons Row */}
          <div className="flex flex-row flex-nowrap items-center justify-center gap-3 md:gap-5 lg:gap-7 w-full mx-auto overflow-x-auto no-scrollbar py-4 relative z-10">
            {audiences.map((aud, index) => {
              const isActive = index + 1 === activeIndex || (activeIndex === 0 && index === -1);
              return (
                <motion.div
                  key={aud.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                  onMouseEnter={() => {
                    setHoveredName(aud.name);
                    setActiveIndex(index + 1);
                  }}
                  onMouseLeave={() => setHoveredName(null)}
                  className="group relative flex flex-col items-center justify-center shrink-0 cursor-default transition-all duration-300"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    backgroundColor: isActive ? `${aud.color}15` : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${isActive ? aud.color + '65' : 'rgba(255,255,255,0.07)'}`,
                    boxShadow: isActive
                      ? `0 14px 36px -6px ${aud.color}45, inset 0 1px 0 rgba(255,255,255,0.2), 0 0 0 1px ${aud.color}30`
                      : '0 4px 14px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)'
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl pointer-events-none transition-all duration-300"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${aud.color}, transparent)`,
                      opacity: isActive ? 1 : 0
                    }}
                  />
                  {isActive && (
                    <div
                      className="absolute inset-0 pointer-events-none mix-blend-screen opacity-50 rounded-xl"
                      style={{ background: `radial-gradient(circle at top, ${aud.color}40, transparent 70%)` }}
                    />
                  )}
                  <div 
                    className="w-[28px] h-[28px] relative z-10 transition-transform duration-300"
                    style={{ transform: isActive ? 'scale(1.15)' : 'scale(1)' }}
                  >
                    <aud.icon />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Text Content Area */}
          <div className="flex flex-col items-center w-full -mt-2 md:-mt-3 relative z-10">
            
            {/* Inner Wrapper: Centers the entire block on the page, but left-aligns the text inside it */}
            <div className="flex flex-col items-start mx-auto md:translate-x-6 lg:translate-x-10">
              
              {/* Medium-large font size for perfect visual balance */}
              <h2 className="text-[24px] md:text-[30px] lg:text-[38px] font-bold leading-[1.1] tracking-tight text-white/80 mb-0 flex justify-start">
                
                {/* Row container */}
                <div className="flex flex-row items-center justify-start w-full">
                  
                  <div className="shrink-0 flex justify-start items-center pr-2 md:pr-3">
                    <span>Built for</span>
                  </div>
                  
                  {/* Right Side: Animated text. Medium-large width and height */}
                  <div 
                    className="w-[265px] md:w-[350px] lg:w-[420px] shrink-0 relative h-[48px] md:h-[64px] lg:h-[72px] overflow-hidden text-left" 
                    style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }}
                  >
                    <motion.div
                      animate={{ y: `-${((allTitles.length - 1 - activeIndex) / allTitles.length) * 100}%` }}
                      transition={{ 
                        duration: activeIndex === 0 ? 0.3 : 0.4, // Fast fly-back on reset, snappy slide otherwise
                        ease: [0.2, 0.65, 0.3, 0.9]
                      }}
                      className="absolute top-0 left-0 flex flex-col justify-start text-left whitespace-nowrap"
                    >
                      {allTitles.slice().reverse().map((title, idx) => {
                        const aud = audiences.find(a => a.name === title);
                        return (
                          <div 
                            key={`${title}-${idx}`}
                            className="h-[48px] md:h-[64px] lg:h-[72px] shrink-0 flex items-center justify-start whitespace-nowrap"
                            style={{
                              color: aud ? aud.color : '#FFFFFF',
                              textShadow: aud ? `0 0 30px ${aud.color}80, 0 0 10px ${aud.color}40` : 'none'
                            }}
                          >
                            {title}
                          </div>
                        );
                      })}
                    </motion.div>
                  </div>
                </div>
              </h2>

              {/* 3rd Line: Now perfectly left-aligned with "Built for" */}
              <p className="text-[15px] md:text-[16px] text-white/45 font-normal leading-relaxed max-w-[600px] text-left mt-2 pl-0.5">
                Purpose-built for companies building authority in AI-first markets.
              </p>
              
            </div>
          </div>
        </div>

        {/* Icons were moved up to satisfy manager's request */}

      </div>
    </section>
  );
}



