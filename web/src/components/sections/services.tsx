"use client"

import { useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Container } from '@/components/layout/container'
import headerData from '@/data/headerdata.json'

export function Services() {
  const { services, servicesTitle } = headerData as any
  const sectionRef = useRef<HTMLElement | null>(null)
  const shouldReduceMotion = useReducedMotion()
  const [openSection, setOpenSection] = useState<number | null>(null)
  const [activeItem, setActiveItem] = useState<{ section: number, index: number } | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [30, -30])
  const ease = [0.22, 1, 0.36, 1] as const

  const rowVariants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease }
    }
  }

  const chipContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    }
  }

  const chipItem = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.35, ease }
    }
  }

  return (
    <section ref={sectionRef} id="services" className="pt-28 pb-32 bg-white relative overflow-hidden">
      {/* Services Vector Graphic (Left Side) */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: false, amount: 0.3 }}
        style={{ y: shouldReduceMotion ? 0 : parallaxY }}
        className="absolute left-[0%] top-[0%] md:left-[0%] md:top-[0%] md:w-[45%] h-[50vh] pointer-events-none z-0 opacity-40 md:opacity-100 flex items-start justify-start"
      >
        <Image
          src="/servicesVector.svg"
          alt="Services Graphic"
          width={1200}
          height={1200}
          className="w-full h-auto object-contain object-left-top "
          priority
        />
      </motion.div>

      <div className="relative z-10">
        <Container>
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 md:ml-[44%] mt-12 md:mt-20 lg:mt-24"
          >
            <h2 className="text-[20px] md:text-[30px] lg:text-[32px] font-extrabold font-[family-name:var(--font-space-grotesk)] text-black tracking-tight mb-6">
              {servicesTitle}
            </h2>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="md:ml-[45%] max-w-xl space-y-2"
          >
            {services.map((service: { title: string, items: { name: string, description: string }[] }, idx: number) => (
              <motion.div
                key={service.title}
                variants={rowVariants}
                layout
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35, ease }}
                className={`pb-2 relative ${openSection === idx ? 'border-none' : 'border-b border-gray-200'}`}
              >
                <motion.button
                  onClick={() => setOpenSection(openSection === idx ? null : idx)}
                  className="w-full flex items-center justify-between max-w-[500px] pt-3 pb-1"
                >
                  <span className="text-[14px] md:text-[16px] text-black">
                    {service.title}
                  </span>

                  <motion.div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${openSection === idx ? 'bg-[#1AE9AB]' : 'bg-[#1AE9AB]'}`}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
                  >
                    <motion.svg
                      width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke={openSection === idx ? "black" : "black"}
                      strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
                      animate={{ rotate: openSection === idx ? 90 : 0 }}
                      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35, ease }}
                    >
                      <path d="M9 18l6-6-6-6" />
                    </motion.svg>
                  </motion.div>
                </motion.button>

                <AnimatePresence mode="wait">
                  {openSection === idx && (
                    <motion.div
                      layout
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, ease }}
                    >
                      <motion.div
                        variants={chipContainer}
                        initial="hidden"
                        animate="show"
                        className="flex flex-wrap gap-3 py-6 pt-2 pb-6 font-[family-name:var(--font-space-grotesk)]"
                      >
                        {service.items.map((item, itemIdx) => (
                          <motion.div
                            key={item.name}
                            className="relative group/item"
                            variants={chipItem}
                          >
                            <motion.button
                              onClick={() => setActiveItem(activeItem?.section === idx && activeItem?.index === itemIdx ? null : { section: idx, index: itemIdx })}
                              className={`px-4 py-2 rounded-md border border-black transition-all duration-200 text-[14px] font-normal
                              ${activeItem?.section === idx && activeItem?.index === itemIdx
                                ? 'bg-white text-[#2a2a2a]'
                                : 'bg-white text-[#5f5f5f]'}`}
                              whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                            >
                              {item.name}
                            </motion.button>
                            <AnimatePresence>
                              {activeItem?.section === idx && activeItem?.index === itemIdx && (
                                <motion.div
                                  initial={{ opacity: 0, y: 8 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 8 }}
                                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3, ease }}
                                  className="absolute left-0 top-full z-30 mt-1 inline-block w-[220px] md:w-[240px] rounded-md border border-black bg-white px-2 py-1.5"
                                >
                                  <p className="text-[13px] text-[#5f5f5f] leading-relaxed font-normal font-[family-name:var(--font-space-grotesk)]">
                                    {item.description}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </div>
    </section>
  )
}
