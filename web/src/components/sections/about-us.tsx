"use client"

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import headerData from '@/data/headerdata.json'

type AboutUsProps = {
  variant?: 'home' | 'page'
}

export function AboutUs({ variant = 'home' }: AboutUsProps) {
  const { about } = headerData as any
  const sectionRef = useRef<HTMLElement | null>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [24, -24])
  const ease = [0.22, 1, 0.36, 1] as const
  const sectionClassName =
    variant === 'page'
      ? "relative flex w-full min-h-[calc(100vh-6rem)] scroll-mt-14 items-center overflow-visible bg-white pt-4 pb-0"
      : "relative -mb-10 flex w-full min-h-screen scroll-mt-14 items-center overflow-visible bg-white pt-12 pb-6"
  const contentClassName =
    variant === 'page'
      ? "textAbout relative z-[1] w-full px-[6%] [backdrop-filter:blur(5px)] md:ml-[8%] md:px-0 lg:w-[40%] xl:max-w-[520px]"
      : "textAbout relative z-[1] w-full px-[5%] [backdrop-filter:blur(5px)] md:ml-[10%] md:px-0 lg:w-[36%] xl:max-w-[450px]"
  const imageWrapperClassName =
    variant === 'page'
      ? "imgSec hidden right-0 bottom-0 h-auto w-[74%] max-h-none pointer-events-none opacity-100 items-end justify-end lg:flex lg:w-[45%]"
      : "imgSec hidden right-0 bottom-0 h-auto w-[80%] max-h-none pointer-events-none opacity-100 items-end justify-end lg:flex lg:w-[43%]"

  return (
    <section
      ref={sectionRef}
      id="about"
      className={sectionClassName}
    >
      {/* Left content: heading + paragraph */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease }}
        viewport={{ once: false, amount: 0.3 }}
        className={contentClassName}
      >
        <h2
          className="font-extrabold text-black whitespace-nowrap leading-[1.2] tracking-wide mb-5 md:mb-7 font-[family-name:var(--font-space-grotesk)]"
          style={{ fontSize: "clamp(1.8rem, 3.1vw, 2.1rem)" }}
        >
          {about?.title}
        </h2>

        <p
          className="leading-[1.5] font-[family-name:var(--font-poppins)] text-[#1a1a1a] break-words"
          style={{ fontSize: "clamp(1rem, 1.2vw, 1.5rem)" }}
        >
          {about?.descriptionStart}
          <strong className="font-bold text-black">{about?.descriptionHighlight}</strong>
          {about?.descriptionEnd}
        </p>
      </motion.div>

      {/* Honeycomb Graphic */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 180 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: false, amount: 0.25 }}
        style={{ y: shouldReduceMotion ? 0 : parallaxY }}
        className={imageWrapperClassName}
      >
        <img
          src="/about-vector.svg"
          alt="Honeycomb Graphic"
          id="aboutVector"
          className="w-full h-auto object-contain object-right-top"
          loading="eager"
          draggable={false}
        />
      </motion.div>
    </section>
  )
}
