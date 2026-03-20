"use client"

import Link from 'next/link'
import { Container } from '@/components/ui/container'
import headerData from '@/data/headerdata.json'
import { useState } from 'react'


const LogoIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 100 100"
    className="text-green-400 shrink-0"
    fill="none"
  >
    <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 35 20 L 52.3 30 L 52.3 50 L 35 60 L 17.7 50 L 17.7 30 Z" />
      <path d="M 69.6 20 L 86.9 30 L 86.9 50 L 69.6 60 L 52.3 50 L 52.3 30 Z" />
      <path d="M 52.3 50 L 69.6 60 L 69.6 80 L 52.3 90 L 35 80 L 35 60 Z" />

      <line x1="17.7" y1="50" x2="6" y2="57" />
      <circle cx="6" cy="57" r="4.5" fill="currentColor" stroke="none" />
      <line x1="86.9" y1="30" x2="96" y2="25" />
      <circle cx="96" cy="25" r="4.5" fill="currentColor" stroke="none" />
      <line x1="35" y1="80" x2="25" y2="86" />
      <circle cx="25" cy="86" r="4.5" fill="currentColor" stroke="none" />
      <circle cx="48" cy="8" r="3.5" fill="currentColor" stroke="none" />

      <path d="M 52.3 40 L 52.3 50 L 69.6 60 L 86.9 50 L 86.9 40 Z" fill="currentColor" stroke="none" />
      <path d="M 52.3 50 L 35 60 L 35 80 L 52.3 90 Z" fill="currentColor" stroke="none" />
    </g>
  </svg>
)

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full flex flex-col items-center mt-6 relative z-50">

      <div className="w-[80%] relative flex flex-col items-end">
        <header className="w-full bg-black text-white rounded-4xl px-8 py-9 shadow-lg relative z-20">
          <Container className="flex justify-between items-center">

            <Link href="/" className="text-[18px] font-bold flex items-center">
              <div className="-mt-4">
                <LogoIcon />
              </div>

              <div className="tracking-wide mr-16 mt-2 -ml-1 flex items-center">
                <span>{headerData.logo.text1}</span>
                <span className="text-green-400 ml-1.5">{headerData.logo.text2}</span>
              </div>
            </Link>

            <div className="flex items-center gap-3">

              <button className="bg-green-400 border border-white text-black px-4 py-2 rounded-lg font-bold">
                {headerData.buttonText}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex flex-col gap-1.5 items-end cursor-pointer group p-1 bg-transparent border-none ${isOpen ? 'text-green-400' : 'text-white'
                  }`}
              >
                <span className={`h-1 w-8 rounded-full transition-all duration-300 ${isOpen ? 'bg-green-400' : 'bg-white'}`}></span>
                <span className={`h-1 w-8 rounded-full transition-all duration-300 ${isOpen ? 'bg-green-400' : 'bg-white'}`}></span>
                <span className={`h-1 w-4 rounded-full transition-all duration-300 ${isOpen ? 'bg-green-400' : 'bg-white'}`}></span>
              </button>

            </div>
          </Container>
        </header>

        <div
          className={`absolute top-[80%] left-1/2 -translate-x-1/2 w-max z-10 bg-white border border-black border-t-0 rounded-b-4xl shadow-xl px-12 py-6 pt-10 transition-all duration-300 origin-top flex ${isOpen ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-4 invisible'
            }`}
        >
          <nav className="flex justify-center gap-10 text-base font-medium text-black">
            <button className="px-3 py-1 rounded-2xl hover:ring-2 hover:ring-black hover:text-black transition-all duration-200">{headerData.buttons["buttons-1"]}</button>
            <button className="px-3 py-1 rounded-2xl hover:ring-2 hover:ring-black hover:text-black transition-all duration-200">{headerData.buttons["buttons-2"]}</button>
            <button className="px-3 py-1 rounded-2xl hover:ring-2 hover:ring-black hover:text-black transition-all duration-200">{headerData.buttons["buttons-3"]}</button>
            <button className="px-3 py-1 rounded-2xl hover:ring-2 hover:ring-black hover:text-black transition-all duration-200">{headerData.buttons["buttons-4"]}</button>
            <button className="px-3 py-1 rounded-2xl hover:ring-2 hover:ring-black hover:text-black transition-all duration-200">{headerData.buttons["buttons-5"]}</button>
          </nav>
        </div>
      </div>

    </div>
  )
}