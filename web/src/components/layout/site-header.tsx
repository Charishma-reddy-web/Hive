"use client"

import Link from 'next/link'
import headerData from '@/data/headerdata.json'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'


export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full flex flex-col items-center pt-6 sticky top-0 z-50 px-4">

      <div className="w-full md:w-[80%] relative flex flex-col items-end">
        <motion.header
          initial={{ y: -400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="w-full bg-black text-white rounded-3xl md:rounded-4xl py-6 md:py-8 shadow-lg relative z-20 overflow-hidden"
        >
          <div className="w-full flex justify-between items-center pr-2 md:pr-6">

            <Link href="/" className="flex items-center pl-8 md:pl-12 group">
              <div className="shrink-0 flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Nurture Hive Logo"
                  width={215}
                  height={65}
                  priority
                  decoding="async"
                  className="w-auto h-5 md:h-12"
                />
              </div>
            </Link>

            <div className="flex items-center gap-3">

              <Link
                href={headerData.buttonHref || "/#contact"}
                replace={(headerData.buttonHref || "/#contact").includes("#")}
                className="bg-[#1AE9AB] border border-white !text-black hover:!text-black px-4 py-2 rounded-lg transition-all active:scale-95 whitespace-nowrap"
              >
                {headerData.buttonText}
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Toggle Navigation Menu"
                className="flex flex-col gap-2 items-end cursor-pointer group p-1 bg-transparent border-none focus:outline-none"
              >
                <div className={`h-1 w-8 rounded-full transition-colors duration-300 ${isOpen ? 'bg-[#1AE9AB]' : 'bg-white'}`} />
                <div className={`h-1 w-8 rounded-full transition-colors duration-300 ${isOpen ? 'bg-[#1AE9AB]' : 'bg-white'}`} />
                <div className={`h-1 w-4 rounded-full transition-colors duration-300 ${isOpen ? 'bg-[#1AE9AB]' : 'bg-white'}`} />
              </button>

            </div>
          </div>
        </motion.header>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95, x: "-50%" }}
              animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
              exit={{ opacity: 0, y: -10, scale: 0.95, x: "-50%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-[85%] left-1/2 w-[90%] md:w-max z-[19] bg-white/80 backdrop-blur-md border border-black border-t-0 rounded-b-2xl md:rounded-b-4xl shadow-xl px-4 md:px-7 py-4 pt-8 flex flex-col md:flex-row items-center"
            >
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-base font-normal text-black"
              >
                {headerData.buttons.map((item, index) => (
                  <div key={index}>
                    <Link
                      href={item.href || "#"}
                      replace={(item.href || "#").includes("#")}
                      className="px-3 py-1 block rounded-2xl hover:ring-2 hover:ring-black transition duration-200 whitespace-nowrap cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  )
}
