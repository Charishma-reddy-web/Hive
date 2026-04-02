'use client'

import { useRef } from 'react'

export function HomeHero() {
  const sectionRef = useRef<HTMLElement | null>(null)

  return (
    <section
      ref={sectionRef}
      className="relative bg-neutral-950 h-screen"
      style={{ overflow: "hidden" }}
      aria-label="Hero"
    >
      {/* ── Subtle decorative gradient bg ── */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 30%, rgba(20,241,149,0.12) 0%, transparent 70%)',
        }}
      />
    </section>
  )
}