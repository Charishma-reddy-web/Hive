"use client"

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import headerData from '@/data/headerdata.json'

export function AboutUs() {
  const { about } = headerData as any
  const sectionRef = useRef<HTMLElement | null>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [24, -24])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-white pt-24 pb-20"
    >
      {/* Left content: heading + paragraph */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 28, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 w-full px-[5%] md:px-0 md:ml-[10%] md:w-[40%] lg:w-[35%] xl:max-w-[450px]"
      >
        <h2
          className="font-extrabold text-black whitespace-nowrap leading-[1.2] tracking-wide mb-5 md:mb-7 font-[family-name:var(--font-space-grotesk)]"
          style={{ fontSize: "clamp(1.8rem, 3.1vw, 2.1rem)" }}
        >
          {about?.title}
        </h2>

        <p className="text-[16px] xl:text-[17px] leading-[1.6] font-[family-name:var(--font-poppins)] text-[#1a1a1a]">
          {about?.descriptionStart}
          <strong className="font-bold text-black">{about?.descriptionHighlight}</strong>
          {about?.descriptionEnd}
        </p>
      </motion.div>

      {/* Honeycomb Graphic */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: false, amount: 0.4 }}
        style={{ y: shouldReduceMotion ? 0 : parallaxY }}
        className="absolute right-[-1%] top-[0%] md:right-[0%] md:top-[-5%] md:w-[45%] h-[110%] pointer-events-none z-0 md:opacity-100 flex items-center justify-end"
      >
        <Image
          src="/about-vector.svg"
          alt="Honeycomb Graphic"
          width={1200}
          height={1200}
          className="w-full h-auto object-contain object-right-top"
          priority
        />
      </motion.div>
    </section>
  )
}
