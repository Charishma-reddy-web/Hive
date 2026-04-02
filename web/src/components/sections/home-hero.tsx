"use client"

import { useCallback } from 'react'
import { Container } from '@/components/ui/container'
import { motion, useReducedMotion } from 'framer-motion'
import headerData from '@/data/headerdata.json'

export function HomeHero() {
  const { hero } = headerData;
  const shouldReduceMotion = useReducedMotion()

  // ✅ Scroll function
  const scrollToAbout = useCallback(() => {
    const section = document.getElementById("about")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-visible pt-12 pb-20">

      <Container className="relative z-10">
        <div className="flex flex-col items-center">

          <div className="w-full flex flex-col items-center justify-center gap-12 relative">

            {/* Main Content Area */}
            <div className="w-full lg:w-3/4 text-center flex flex-col items-center gap-16 -mt-14 lg:-mt-40">

              {/* Heading */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4"
              >
                <h1 className="text-[25px] md:text-[35px] lg:text-[45px] font-black leading-[1.05] tracking-[-0.01em] text-black">
                  {hero.titlePart1} {hero.titlePart2}
                  <span className="block mt-5">
                    {hero.titlePart3}{" "}
                    <span className="text-[#1AE9AB]">
                      {hero.titleAccentpart1}
                    </span>
                  </span>
                  <span className="block text-[#1AE9AB] mt-6">
                    {hero.titleAccentpart2}
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="text-[20px] md:text-[24px] text-black font-normal leading-[1.4] mx-auto tracking-tight whitespace-pre-line -mt-10"
              >
                {hero.description}
              </motion.p>

              {/* Button */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ x: [0, -2, 2, -2, 2, 0] }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{
                  opacity: { duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
                  x: { duration: 0.4 }
                }}
                className="-mt-10"
              >
                <button
                  onClick={scrollToAbout}
                  className="bg-black text-white px-5 py-4 rounded-2xl text-[13px] md:text-[15px] font-normal border border-white/20 hover:bg-[#333333] hover:text-black hover:border-black transition-all duration-500 shadow-xl"
                >
                  {hero.ctaText}
                </button>
              </motion.div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  )
}