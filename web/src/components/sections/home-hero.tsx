"use client"

import { useCallback } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import headerData from '@/data/headerdata.json'

type HeroContent = {
  titlePart1?: string
  titlePart2?: string
  titlePart3?: string
  titleAccentpart1?: string
  titleAccentpart2?: string
  description?: string
  ctaText?: string
  servicesLeft?: {
    serviceleft1?: string
    serviceleft2?: string
    serviceleft3?: string
    serviceleft4?: string
  }
  servicesRight?: {
    serviceright1?: string
    serviceright2?: string
    serviceright3?: string
    serviceright4?: string
  }
}

export function HomeHero() {
  const hero = headerData.hero as HeroContent
  const shouldReduceMotion = useReducedMotion() ?? false
  const ease = [0.22, 1, 0.36, 1] as const

  const scrollToContact = useCallback(() => {
    const section = document.getElementById("contact")
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top, behavior: "smooth" })
    }
  }, [])

  return (
    <section className="relative flex min-h-screen w-full snap-start flex-col items-center justify-start overflow-visible p-[4vw] pt-[3rem] md:pt-[3.75rem]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white to-transparent" />
      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? { opacity: 1, x: 0, filter: "none" } : { opacity: 0, x: -24, filter: "none" }}
        animate={{ opacity: 1, x: 0, filter: "none" }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease }}
        style={{ x: 0, y: 0, rotate: 0, scale: 1 }}
        className="pointer-events-auto absolute bottom-[28vw] left-[-1vw] z-0 h-[13vw] w-[13vw] cursor-pointer transition-[filter] duration-300 ease-in-out"
      >
        <div
          className="flex h-full w-full items-center justify-center bg-black"
          style={{ clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)" }}
        >
          <div
            className="box-border flex h-[98%] w-[98%] items-center justify-center bg-white p-5"
            style={{ clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)" }}
          >
            <div className="w-[20ch] text-center font-[Poppins] text-[clamp(0.7rem,1.2vw,1rem)] [text-wrap:wrap]">
              {hero.servicesLeft?.serviceleft1}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? { opacity: 1, x: 0, filter: "none" } : { opacity: 0, x: 24, filter: "none" }}
        animate={{ opacity: 1, x: 0, filter: "none" }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease }}
        style={{ x: 0, y: 0, rotate: 0, scale: 1 }}
        className="pointer-events-auto absolute bottom-[28vw] right-[-1vw] z-0 h-[13vw] w-[13vw] cursor-pointer transition-[filter] duration-300 ease-in-out"
      >
        <div
          className="flex h-full w-full items-center justify-center bg-black"
          style={{ clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)" }}
        >
          <div
            className="box-border flex h-[98%] w-[98%] items-center justify-center bg-white p-5"
            style={{ clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)" }}
          >
            <div className="w-[20ch] text-center font-[Poppins] text-[clamp(0.7rem,1.2vw,1rem)] [text-wrap:wrap]">
              {hero.servicesRight?.serviceright1}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? { opacity: 1, x: 0, filter: "none" } : { opacity: 0, x: 24, filter: "none" }}
        animate={{ opacity: 1, x: 0, filter: "none" }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.95, delay: 0.15, ease }}
        style={{ x: 0, y: 0, rotate: 0, scale: 1 }}
        className="pointer-events-auto absolute bottom-[12vw] right-[11vw] z-0 h-[10vw] w-[10vw] cursor-pointer transition-[filter] duration-300 ease-in-out"
      >
        <div
          className="flex h-full w-full items-center justify-center bg-black"
          style={{ clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)" }}
        >
          <div
            className="box-border flex h-[98%] w-[98%] items-center justify-center bg-white p-5"
            style={{ clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)" }}
          >
            <div className="w-[20ch] text-center font-[Poppins] text-[clamp(0.7rem,1.2vw,1rem)] [text-wrap:wrap]">
              {hero.servicesRight?.serviceright3}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? { opacity: 1, x: 0, filter: "none" } : { opacity: 0, x: 24, filter: "none" }}
        animate={{ opacity: 1, x: 0, filter: "none" }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 1, delay: 0.2, ease }}
        style={{ x: 0, y: 0, rotate: 0, scale: 1 }}
        className="pointer-events-auto absolute bottom-[12vw] right-[0.5vw] z-0 h-[10vw] w-[10vw] cursor-pointer transition-[filter] duration-300 ease-in-out"
      >
        <div
          className="flex h-full w-full items-center justify-center bg-black"
          style={{ clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)" }}
        >
          <div
            className="box-border flex h-[98%] w-[98%] items-center justify-center bg-white p-5"
            style={{ clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)" }}
          >
            <div className="w-[20ch] text-center font-[Poppins] text-[clamp(0.7rem,1.2vw,1rem)] [text-wrap:wrap]">
              {hero.servicesRight?.serviceright4}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        aria-hidden="true"
        id="active"
        initial={shouldReduceMotion ? { opacity: 1, x: 0, filter: "none" } : { opacity: 0, x: 24, filter: "none" }}
        animate={{ opacity: 1, x: 0, filter: "none" }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.85, delay: 0.05, ease }}
        style={{ x: 0, y: 0, rotate: 0, scale: 1 }}
        className="pointer-events-auto absolute bottom-[20vw] right-[-5vw] z-0 h-[10vw] w-[10vw] cursor-pointer transition-[filter] duration-300 ease-in-out"
      >
        <div
          className="flex h-full w-full items-center justify-center bg-[#1AE9AB] text-[#1AE9AB]"
          style={{ clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)" }}
        >
          <div
            className="box-border flex h-[98%] w-[98%] items-center justify-center bg-[#1AE9AB] p-5"
            style={{ clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)" }}
          />
        </div>
      </motion.div>
      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? { opacity: 1, x: 0, filter: "none" } : { opacity: 0, x: 24, filter: "none" }}
        animate={{ opacity: 1, x: 0, filter: "none" }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.9, delay: 0.1, ease }}
        style={{ x: 0, y: 0, rotate: 0, scale: 1 }}
        className="pointer-events-auto absolute bottom-[20vw] right-[5.5vw] z-0 h-[10vw] w-[10vw] cursor-pointer transition-[filter] duration-300 ease-in-out"
      >
        <div
          className="flex h-full w-full items-center justify-center bg-black"
          style={{ clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)" }}
        >
          <div
            className="box-border flex h-[98%] w-[98%] items-center justify-center bg-white p-5"
            style={{ clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)" }}
          >
            <div className="w-[20ch] text-center font-[Poppins] text-[clamp(0.7rem,1.2vw,1rem)] [text-wrap:wrap]">
              {hero.servicesRight?.serviceright2}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        aria-hidden="true"
        id="active"
        initial={shouldReduceMotion ? { opacity: 1, x: 0, filter: "none" } : { opacity: 0, x: -24, filter: "none" }}
        animate={{ opacity: 1, x: 0, filter: "none" }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.85, delay: 0.05, ease }}
        style={{ x: 0, y: 0, rotate: 0, scale: 1 }}
        className="pointer-events-auto absolute bottom-[20vw] left-[-5vw] z-0 h-[10vw] w-[10vw] cursor-pointer transition-[filter] duration-300 ease-in-out"
      >
        <div
          className="flex h-full w-full items-center justify-center bg-[#1AE9AB] text-[#1AE9AB]"
          style={{ clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)" }}
        >
          <div
            className="box-border flex h-[98%] w-[98%] items-center justify-center bg-[#1AE9AB] p-5"
            style={{ clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)" }}
          />
        </div>
      </motion.div>
      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? { opacity: 1, x: 0, filter: "none" } : { opacity: 0, x: -24, filter: "none" }}
        animate={{ opacity: 1, x: 0, filter: "none" }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.9, delay: 0.1, ease }}
        style={{ x: 0, y: 0, rotate: 0, scale: 1 }}
        className="pointer-events-auto absolute bottom-[20vw] left-[5.5vw] z-0 h-[10vw] w-[10vw] cursor-pointer transition-[filter] duration-300 ease-in-out"
      >
        <div
          className="flex h-full w-full items-center justify-center bg-black"
          style={{ clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)" }}
        >
          <div
            className="box-border flex h-[98%] w-[98%] items-center justify-center bg-white p-5"
            style={{ clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)" }}
          >
            <div className="w-[20ch] text-center font-[Poppins] text-[clamp(0.7rem,1.2vw,1rem)] [text-wrap:wrap]">
              {hero.servicesLeft?.serviceleft2}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? { opacity: 1, x: 0, filter: "none" } : { opacity: 0, x: -24, filter: "none" }}
        animate={{ opacity: 1, x: 0, filter: "none" }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.95, delay: 0.15, ease }}
        style={{ x: 0, y: 0, rotate: 0, scale: 1 }}
        className="pointer-events-auto absolute bottom-[12vw] left-[11vw] z-0 h-[10vw] w-[10vw] cursor-pointer transition-[filter] duration-300 ease-in-out"
      >
        <div
          className="flex h-full w-full items-center justify-center bg-black"
          style={{ clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)" }}
        >
          <div
            className="box-border flex h-[98%] w-[98%] items-center justify-center bg-white p-5"
            style={{ clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)" }}
          >
            <div className="w-[20ch] text-center font-[Poppins] text-[clamp(0.7rem,1.2vw,1rem)] [text-wrap:wrap]">
              {hero.servicesLeft?.serviceleft4}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? { opacity: 1, x: 0, filter: "none" } : { opacity: 0, x: -24, filter: "none" }}
        animate={{ opacity: 1, x: 0, filter: "none" }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 1, delay: 0.2, ease }}
        style={{ x: 0, y: 0, rotate: 0, scale: 1 }}
        className="pointer-events-auto absolute bottom-[12vw] left-[0.5vw] z-0 h-[10vw] w-[10vw] cursor-pointer transition-[filter] duration-300 ease-in-out"
      >
        <div
          className="flex h-full w-full items-center justify-center bg-black"
          style={{ clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)" }}
        >
          <div
            className="box-border flex h-[98%] w-[98%] items-center justify-center bg-white p-5"
            style={{ clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)" }}
          >
            <div className="w-[20ch] text-center font-[Poppins] text-[clamp(0.7rem,1.2vw,1rem)] [text-wrap:wrap]">
              {hero.servicesLeft?.serviceleft3}
            </div>
          </div>
        </div>
      </motion.div>

      <Container className="relative z-10">
        <div className="relative mx-auto flex min-h-[62svh] w-full items-start justify-center">
          <motion.div
            initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 1.1, ease }}
            className="relative z-10 mx-auto -mt-[4rem] flex w-full max-w-[920px] flex-col items-center text-center lg:-mt-[5.5rem]"
          >
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
              className="z-[2] max-w-full font-[family-name:var(--font-poppins)] text-[clamp(2rem,5vw,3rem)] font-black leading-[0.98] tracking-[-0.03em] text-black [backdrop-filter:blur(5px)] lg:max-w-[65%]"
            >
              {hero.titlePart1 ?? 'Marketing'} {hero.titlePart2 ?? 'Makeover?'}
              <span className="mt-3 block text-black">
                {hero.titlePart3 ?? "We’re the"}{" "}
                <span className="text-[#1AE9AB]">{hero.titleAccentpart1 ?? 'Digital Da'}</span>
              </span>
              <span className="mt-3 block text-[#1AE9AB]">{hero.titleAccentpart2 ?? 'Vincis!'}</span>
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.06, ease }}
              className="z-[2] mt-8 max-w-full whitespace-pre-line font-[family-name:var(--font-poppins)] text-[clamp(1rem,2vw,1.5rem)] leading-[1.5] text-black [backdrop-filter:blur(5px)] lg:max-w-[85%]"
            >
              {hero.description ??
                "Is your marketing stuck in the dark ages? We’re here to spark your Renaissance."}
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={shouldReduceMotion ? undefined : { x: [0, 4, -4, 4, -4, 0] }}
              transition={{
                opacity: { duration: 0.42, delay: 0.12, ease },
                x: { duration: 0.6, ease: "easeInOut" }
              }}
              className="z-[2] mt-8 flex max-w-[80%] flex-col items-center justify-center gap-4"
            >
              <button
                onClick={scrollToContact}
                className="rounded-[1.3rem] border border-white/20 bg-black px-6 py-4 text-[1rem] font-medium text-white shadow-[0_16px_34px_rgba(0,0,0,0.2)] transition-all duration-500 hover:border-black hover:bg-[#333333] hover:text-white"
              >
                {hero.ctaText ?? 'Get a Free Site Audit!'}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
