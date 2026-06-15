/* eslint-disable */
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { integrationData } from './IntegrationIcons';

const TILE_H      = 80;
const TILE_W      = 80;
const EXPANDED_W  = 300;   // fixed px — CSS transition works perfectly with fixed values
const TILE_GAP    = 8;
const CYCLE_MS    = 2400;

const tiles = [
  { name: 'AWS',        color: '#C07A45', bg: '#1A1008', desc: 'Global cloud infrastructure & compute',    cat: 'Cloud & Compute'     },
  { name: 'Azure',      color: '#4A82C4', bg: '#080E1A', desc: 'Enterprise cloud platform by Microsoft',   cat: 'Cloud & Compute'     },
  { name: 'GCP',        color: '#4A9E68', bg: '#081208', desc: 'Google-powered cloud & AI services',       cat: 'Cloud & Compute'     },
  { name: 'Vercel',     color: '#8A9BB0', bg: '#0E1218', desc: 'Frontend deployment & edge network',       cat: 'Cloud & Compute'     },

  { name: 'Snowflake',  color: '#3A9EC4', bg: '#081318', desc: 'Cloud data warehouse & analytics',         cat: 'Data & Intelligence' },
  { name: 'Databricks', color: '#C45840', bg: '#180A08', desc: 'Unified data & AI lakehouse platform',     cat: 'Data & Intelligence' },
  { name: 'OpenAI',     color: '#3AA882', bg: '#081410', desc: 'GPT-powered intelligence & automation',    cat: 'Data & Intelligence' },
  { name: 'GA4',        color: '#C4A040', bg: '#181208', desc: 'Next-gen web & app analytics by Google',   cat: 'Data & Intelligence' },

  { name: 'HubSpot',    color: '#C47058', bg: '#180C08', desc: 'All-in-one inbound CRM platform',          cat: 'CRM & Pipeline'      },
  { name: 'Salesforce', color: '#3A90C4', bg: '#081018', desc: 'Enterprise CRM & sales cloud',             cat: 'CRM & Pipeline'      },
  { name: 'Semrush',    color: '#C46840', bg: '#180E08', desc: 'SEO, content & competitive intelligence',  cat: 'CRM & Pipeline'      },
  { name: 'Ahrefs',     color: '#3AB8C8', bg: '#081518', desc: 'Backlink & keyword research engine',       cat: 'CRM & Pipeline'      },

  { name: 'Clay',       color: '#8A68C4', bg: '#100818', desc: 'AI-powered data enrichment for GTM',       cat: 'GTM & Operations'    },
  { name: 'Apollo',     color: '#6870C4', bg: '#0A0818', desc: 'B2B lead intelligence & outreach',         cat: 'GTM & Operations'    },
  { name: 'Stripe',     color: '#7868C4', bg: '#0C0818', desc: 'Payments & revenue infrastructure',        cat: 'GTM & Operations'    },
  { name: 'Figma',      color: '#C46050', bg: '#180A08', desc: 'Collaborative design & prototyping',       cat: 'GTM & Operations'    },
];

const rowOffsets = [0, 0.5, 0, 0.5];
const EASE = 'cubic-bezier(0.25, 0, 0.2, 1)';
const DUR  = '0.18s';

// ─── Tile — pure CSS transitions, zero layout recalculation ─────────────────
function Tile({
  tile,
  isOpen,
  onEnter,
  onLeave,
}: {
  tile: typeof tiles[0];
  isOpen: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const toolData = integrationData.find(t => t.name === tile.name);

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        width:          isOpen ? EXPANDED_W : TILE_W,
        height:         TILE_H,
        borderRadius:   16,
        flexShrink:     0,
        position:       'relative',
        display:        'flex',
        alignItems:     'center',
        overflow:       'hidden',
        transition:     `width ${DUR} ${EASE}, background-color ${DUR} ${EASE}, border-color ${DUR} ${EASE}, box-shadow ${DUR} ${EASE}`,
        backgroundColor: isOpen ? tile.bg : 'rgba(10,16,26,0.75)',
        border:         `1px solid ${isOpen ? tile.color + '68' : 'rgba(255,255,255,0.08)'}`,
        boxShadow:      isOpen
          ? `0 0 0 1px ${tile.color}1a, 0 16px 52px rgba(0,0,0,0.78), 0 0 44px ${tile.color}28, inset 0 1px 0 rgba(255,255,255,0.16)`
          : '0 4px 14px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)',
        backdropFilter: 'blur(16px)',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, transparent, ${tile.color}${isOpen ? 'dd' : '30'}, transparent)`,
        transition: `opacity ${DUR} ${EASE}`,
        pointerEvents: 'none',
      }} />

      {/* Inner colour wash */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(160px circle at 40px center, ${tile.color}1e, transparent)`,
        opacity: isOpen ? 1 : 0,
        transition: `opacity ${DUR} ${EASE}`,
      }} />

      {/* ── Icon — always pinned left, never moves ── */}
      <div style={{
        width: TILE_W, height: TILE_H, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', zIndex: 2,
      }}>
        <div style={{
          width: 38, height: 38,
          transform: isOpen ? 'scale(1.1)' : 'scale(1)',
          transition: `transform ${DUR} ${EASE}`,
        }}>
          {toolData ? <toolData.icon /> : null}
        </div>
      </div>

      {/* ── Text — fades in, no layout shift ── */}
      <div style={{
        display: 'flex', alignItems: 'center',
        flexDirection: 'row',
        /* width is fixed so no reflow; opacity + transform are composited */
        width: EXPANDED_W - TILE_W,
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateX(0)' : 'translateX(-10px)',
        transition: `opacity ${DUR} ${EASE}, transform ${DUR} ${EASE}`,
        pointerEvents: 'none',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}>
        {/* Divider */}
        <div style={{
          width: 1, height: 36, flexShrink: 0, marginRight: 14,
          background: `linear-gradient(to bottom, transparent, ${tile.color}55, transparent)`,
        }} />

        {/* Labels */}
        <div style={{ 
          display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0,
          alignItems: 'flex-start',
          textAlign: 'left'
        }}>
          <span style={{
            fontSize: 9, fontWeight: 700, letterSpacing: '0.28em',
            textTransform: 'uppercase', color: `${tile.color}bb`, fontFamily: 'monospace',
          }}>
            {tile.cat}
          </span>
          <span style={{
            fontSize: 17, fontWeight: 800, color: '#fff',
            letterSpacing: '-0.02em', lineHeight: 1.15,
          }}>
            {tile.name}
          </span>
          <span style={{
            fontSize: 11, color: 'rgba(255,255,255,0.42)', lineHeight: 1.5,
          }}>
            {tile.desc}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────
export default function Integrations() {
  const sectionRef  = useRef<HTMLElement>(null);
  const gridRef     = useRef<HTMLDivElement>(null);
  const timerRef    = useRef<ReturnType<typeof setInterval> | null>(null);
  const indexRef    = useRef(0);

  const [openIndex,  setOpenIndex]  = useState(0);
  const [hovering,   setHovering]   = useState<number | null>(null);
  const [visible,    setVisible]    = useState(false);
  const [mousePos,   setMousePos]   = useState({ x: 0, y: 0 });

  const activeIndex = hovering !== null ? hovering : openIndex;
  const activeColor = tiles[activeIndex].color;

  // Intersection observer
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Auto-cycle — stops while hovering
  useEffect(() => {
    if (!visible || hovering !== null) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % tiles.length;
      setOpenIndex(indexRef.current);
    }, CYCLE_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [visible, hovering]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!gridRef.current) return;
    const r = gridRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <section
      ref={sectionRef}
      data-page="9"
      className="relative z-10 w-full py-24 md:py-32 bg-[#060C18] border-t border-white/[0.04] overflow-hidden"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.016] [background-image:radial-gradient(rgba(255,255,255,1)_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Ambient colour glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none rounded-full blur-[160px]"
        animate={{ backgroundColor: `${activeColor}09` }}
        transition={{ duration: 1.0, ease: 'easeInOut' }}
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-12">

        {/* LEFT */}
        <div className="flex flex-col items-start flex-shrink-0 lg:w-[380px]">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#00F0B5]/25 bg-[#00F0B5]/[0.08] mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00F0B5] animate-pulse shadow-[0_0_8px_#00F0B5]" />
            <p className="text-[11px] font-bold tracking-[0.35em] uppercase text-[#00F0B5] font-mono">Growth Infrastructure</p>
          </div>

          <h2 className="text-[48px] md:text-[64px] font-bold tracking-tight text-white leading-[1.05]">
            We don't just<br />use tools.
          </h2>
          <p className="mt-4 text-[20px] md:text-[22px] text-white/30 font-light italic leading-snug">
            We build integrated<br />revenue engines.
          </p>
          <p className="mt-8 text-[16px] text-white/40 leading-relaxed max-w-[340px]">
            16 best-in-class platforms across four strategic layers — all working as one seamlessly integrated system.
          </p>

          <div className="mt-10 flex items-center gap-10">
            {[{ n: '16', l: 'Platforms' }, { n: '4', l: 'Layers' }, { n: '1', l: 'Engine' }].map(s => (
              <div key={s.l} className="flex flex-col">
                <span className="text-[36px] font-black text-white tracking-tight leading-none">{s.n}</span>
                <span className="mt-2 text-[11px] text-white/30 uppercase tracking-[0.2em] font-mono">{s.l}</span>
              </div>
            ))}
          </div>

          {/* Dot progress */}
          <div className="mt-8 flex gap-[5px] flex-wrap">
            {tiles.map((tile, i) => (
              <div
                key={tile.name}
                style={{
                  height: 5, borderRadius: 999,
                  width:           activeIndex === i ? 20 : 5,
                  backgroundColor: activeIndex === i ? tile.color : 'rgba(255,255,255,0.12)',
                  opacity:         activeIndex === i ? 1 : 0.45,
                  transition: `width 0.35s ${EASE}, background-color 0.35s ${EASE}, opacity 0.35s ${EASE}`,
                }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT — Grid */}
        <div className="flex-1 flex justify-start items-center ml-4 md:ml-12 overflow-visible">
          <div
            ref={gridRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
            className="relative flex flex-col items-start p-6"
            style={{ gap: TILE_GAP }}
          >
            {/* Cursor spotlight — CSS transition, no Framer overhead */}
            <div
              className="absolute pointer-events-none rounded-full blur-[80px] z-0"
              style={{
                width: 320, height: 320,
                left: mousePos.x - 160, top: mousePos.y - 160,
                background: `radial-gradient(circle, ${activeColor}12 0%, transparent 65%)`,
                opacity: mousePos.x === 0 && mousePos.y === 0 ? 0 : 1,
                transition: `opacity 0.4s ease, background 0.6s ease`,
              }}
            />

            {[0, 1, 2, 3].map(rowIndex => {
              const rowTiles = tiles.slice(rowIndex * 4, rowIndex * 4 + 4);
              const offsetPx = rowOffsets[rowIndex] * (TILE_W + TILE_GAP);
              return (
                <div
                  key={rowIndex}
                  className="flex items-center relative z-10"
                  style={{ gap: TILE_GAP, paddingLeft: offsetPx }}
                >
                  {rowTiles.map((tile, colIndex) => {
                    const gi = rowIndex * 4 + colIndex;
                    return (
                      <Tile
                        key={tile.name}
                        tile={tile}
                        isOpen={activeIndex === gi}
                        onEnter={() => {
                          setHovering(gi);
                          indexRef.current = gi;
                          setOpenIndex(gi);
                        }}
                        onLeave={() => setHovering(null)}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

