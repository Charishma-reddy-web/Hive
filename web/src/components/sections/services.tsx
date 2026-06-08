"use client"

import { useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Container } from '@/components/layout/container'
import headerData from '@/data/headerdata.json'

type ServicesProps = {
  variant?: 'home' | 'page'
}

export function Services({ variant = 'home' }: ServicesProps) {
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

  const sectionClassName =
    variant === 'page'
      ? "relative self-center flex min-h-screen w-full scroll-mt-14 items-center justify-end overflow-hidden bg-white pt-4 pb-0 lg:w-[80%] lg:pr-[20%]"
      : "relative scroll-mt-14 overflow-visible bg-white pt-14 pb-24"

  const imageClassName =
    variant === 'page'
      ? "pointer-events-none absolute left-0 top-1/2 z-0 hidden w-[42%] max-w-[520px] -translate-y-1/2 items-start justify-start lg:flex"
      : "absolute left-0 -top-8 md:-top-12 md:w-[42%] max-w-[560px] pointer-events-none z-0 opacity-40 md:opacity-100 flex items-start justify-start"

  return (
    <section ref={sectionRef} id="services" className={sectionClassName}>
      {/* Services Vector Graphic (Left Side) */}
      {variant !== 'page' && (
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, amount: 0.25 }}
          style={{ y: shouldReduceMotion ? 0 : parallaxY }}
          className={imageClassName}
        >
          <Image
            src="/servicesVector.svg"
            alt="Services Graphic"
            width={1200}
            height={1200}
            sizes="(max-width: 768px) 80vw, 45vw"
            fetchPriority="high"
            className="w-full h-auto object-contain object-left-top"
            priority
          />
        </motion.div>
      )}

      <div className="relative z-10">
        <Container className={variant === 'page' ? "ml-0 lg:ml-[10%]" : ""}>
          <div className={variant === 'page' ? "relative flex min-h-screen items-center justify-between overflow-hidden" : ""}>
            {variant === 'page' && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -400 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: false, amount: 0.25 }}
                className={imageClassName}
              >
                <Image
                  src="/servicesVector.svg"
                  alt="Services Graphic"
                  width={1200}
                  height={1200}
                  sizes="(max-width: 1024px) 88vw, 42vw"
                  fetchPriority="high"
                  className="h-auto w-full object-contain object-left-top"
                  priority
                />
              </motion.div>
            )}

            <div className={variant === 'page' ? "relative z-10 pt-2 lg:ml-[48%] lg:w-[52%]" : ""}>
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={variant === 'page' ? "mb-4 mt-0" : "textServices mb-3 md:ml-[40%] mt-3 md:mt-5 lg:mt-7"}
                style={variant === 'page' ? { width: "auto" } : { width: "auto" }}
              >
                <h2
                  className="mb-4 font-[family-name:var(--font-space-grotesk)] font-extrabold text-black tracking-tight"
                  style={{ fontSize: "clamp(1.5rem, 2.4vw, 6rem)", width: "auto" }}
                >
                  {servicesTitle}
                </h2>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 200 },
                  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className={variant === 'page' ? "serviceList services-list max-w-xl space-y-2 mt-0" : "serviceList services-list md:ml-[41%] max-w-xl space-y-2 mt-0 md:mt-0"}
              >
                {services.map((service: { title: string, items: { name: string, description: string }[] }, idx: number) => (
                  <motion.div
                    key={service.title}
                    variants={rowVariants}
                    layout
                    transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35, ease }}
                    className={`service-item pb-2 relative ${openSection === idx ? 'border-none' : ''}`}
                  >
                    <motion.button
                      onClick={() => setOpenSection(openSection === idx ? null : idx)}
                      className={`service-header w-[90%] md:w-[83%] ${openSection === idx ? 'service-header--open' : ''}`}
                    >
                      <span className="text-[14px] md:text-[16px] text-black font-[family-name:var(--font-poppins)]">
                        {service.title}
                      </span>

                      <motion.div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openSection === idx ? 'bg-[#1AE9AB]' : 'bg-[#1AE9AB]'}`}
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
                      >
                        <motion.svg
                          width="15" height="15" viewBox="0 0 24 24" fill="none"
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
                            className="service-content active w-[90%] md:w-[83%] flex flex-wrap gap-3 py-2 pt-1 pb-2 font-[family-name:var(--font-space-grotesk)]"
                          >
                            {service.items.map((item, itemIdx) => (
                              <motion.div
                                key={item.name}
                                data-info={item.description}
                                className={`relative group/item ${activeItem?.section === idx && activeItem?.index === itemIdx ? 'tooltip-active' : ''}`}
                                variants={chipItem}
                              >
                                <motion.button
                                  onClick={() => setActiveItem(activeItem?.section === idx && activeItem?.index === itemIdx ? null : { section: idx, index: itemIdx })}
                                  className={`px-4 py-2 rounded-md transition-all duration-200 text-[14px] font-normal
                              ${activeItem?.section === idx && activeItem?.index === itemIdx
                                    ? 'bg-white text-[#2a2a2a]'
                                    : 'bg-white text-[#5f5f5f]'}`}
                                  whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                                >
                                  {item.name}
                                </motion.button>
                              </motion.div>
                            ))}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
