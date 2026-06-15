/* eslint-disable */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function CtaFooter() {
  return (
    <>
      {/* Option 2: The "Asymmetrical Overlap" CTA (Now standard layout with tight gaps) */}
      <section data-page="10" className="relative z-20 w-full py-12 md:py-16 bg-[#060C18]">
        
        {/* Subtle Infrastructure Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative">
            
            {/* Left Side: The Pitch */}
            <div className="lg:col-span-6 flex flex-col items-start relative z-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.08] mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#00F0B5] animate-pulse shadow-[0_0_12px_#00F0B5]" />
                <span className="text-[10px] uppercase tracking-widest text-white/80 font-mono font-bold">Ready to scale</span>
              </div>
              
              <h2 className="text-[36px] md:text-[48px] font-semibold tracking-tight text-white leading-[1.05] mb-6">
                Build a smarter<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0B5] to-[#A855F7]">
                  growth engine.
                </span>
              </h2>
              
              <p className="text-white/50 text-[16px] md:text-[18px] leading-relaxed max-w-[480px] mb-8">
                AI-native growth systems engineered specifically for complex B2B ecosystems. Discoverability, authority, pipeline, and scale.
              </p>

              {/* Trust/Social Proof mini-stack */}
              <div className="flex flex-col gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md w-fit">
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Trusted by modern teams</p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A111A] bg-[#111A24] flex items-center justify-center relative overflow-hidden shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                        <svg className="w-4 h-4 text-white/20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                      </div>
                    ))}
                  </div>
                  <span className="text-[15px] text-white/70 font-medium">Join 50+ scaling companies</span>
                </div>
              </div>
            </div>

            {/* Right Side: The Form Card (No Overlap) */}
            <div className="lg:col-span-6 xl:col-span-5 xl:col-start-8 relative z-30">
              
              {/* Form glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#00F0B5]/10 to-[#A855F7]/10 rounded-[32px] blur-3xl opacity-60" />
              
              {/* Massive Frosted Glass Card */}
              <div className="relative bg-[#0A111A]/60 backdrop-blur-3xl border border-white/[0.08] rounded-[32px] p-6 md:p-8 shadow-[0_40px_100px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden">
                
                {/* Noise Texture */}
                <div 
                  className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none" 
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
                />

                <div className="relative z-10">
                  <h3 className="text-[26px] font-bold text-white mb-2 tracking-tight">Let's build.</h3>
                  <p className="text-[14px] text-white/40 mb-8">Tell us about your pipeline goals.</p>

                  <form className="flex flex-col gap-5">
                    {/* Minimalist Inputs: No borders, just bottom line */}
                    
                    <div className="relative group">
                      <input 
                        type="text" 
                        placeholder="Name"
                        className="w-full bg-transparent border-b border-white/20 focus:border-[#00F0B5] rounded-none px-0 py-2.5 text-[15px] text-white focus:outline-none transition-all duration-300 placeholder-white/30 font-light"
                      />
                    </div>

                    <div className="relative group">
                      <input 
                        type="email" 
                        placeholder="Work Email"
                        className="w-full bg-transparent border-b border-white/20 focus:border-[#00F0B5] rounded-none px-0 py-2.5 text-[15px] text-white focus:outline-none transition-all duration-300 placeholder-white/30 font-light"
                      />
                    </div>

                    <div className="relative group">
                      <input 
                        type="text" 
                        placeholder="Company"
                        className="w-full bg-transparent border-b border-white/20 focus:border-[#00F0B5] rounded-none px-0 py-2.5 text-[15px] text-white focus:outline-none transition-all duration-300 placeholder-white/30 font-light"
                      />
                    </div>

                    <div className="relative group mt-1">
                      <textarea 
                        rows={2}
                        placeholder="How can we help?"
                        className="w-full bg-transparent border-b border-white/20 focus:border-[#00F0B5] rounded-none px-0 py-2.5 text-[15px] text-white focus:outline-none transition-all duration-300 placeholder-white/30 font-light resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="button"
                      className="w-full mt-4 bg-[#00F0B5] hover:bg-[#00D09E] text-[#060C18] font-bold text-[15px] py-3.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,240,181,0.2)] hover:shadow-[0_0_40px_rgba(0,240,181,0.5)] hover:-translate-y-1"
                    >
                      Request Session
                    </button>
                  </form>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ultra-Premium Modern Footer */}
      <footer data-page="11" className="relative bg-[#020408] pt-24 md:pt-32 overflow-hidden border-t border-white/[0.02]">
        
        {/* Ethereal Top Glow Divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-[#00F0B5]/40 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00F0B5]/5 blur-[120px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 pb-4 md:pb-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="flex items-center mb-8">
                <span className="text-[28px] font-bold text-white tracking-tight">
                  Nurture <span className="text-[#00F0B5]">Hive</span>
                </span>
              </div>
              
              <p className="text-[#8ca3b8] text-[16px] md:text-[17px] font-light leading-[1.7] max-w-[340px] mb-10">
                AI-native growth intelligence for modern businesses. We engineer discoverability, authority, and revenue scale.
              </p>
              
              {/* Interactive Social Links */}
              <div className="flex items-center gap-4">
                <a className="w-11 h-11 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-white/40 hover:text-[#00F0B5] hover:border-[#00F0B5]/30 hover:bg-[#00F0B5]/10 transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a className="w-11 h-11 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-white/40 hover:text-[#00F0B5] hover:border-[#00F0B5]/30 hover:bg-[#00F0B5]/10 transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
              
              <div className="flex flex-col">
                <h5 className="text-[12px] uppercase tracking-[0.2em] text-white/90 font-bold mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F0B5] shadow-[0_0_10px_#00F0B5]"></span>
                  Intelligence
                </h5>
                <div className="flex flex-col gap-3.5">
                  <a className="text-[15px] text-[#8ca3b8] hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Search Intelligence</a>
                  <a className="text-[15px] text-[#8ca3b8] hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Demand Systems</a>
                  <a className="text-[15px] text-[#8ca3b8] hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Content Ecosystems</a>
                  <a className="text-[15px] text-[#8ca3b8] hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Revenue Intel</a>
                </div>
              </div>

              <div className="flex flex-col">
                <h5 className="text-[12px] uppercase tracking-[0.2em] text-white/90 font-bold mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] shadow-[0_0_10px_#A855F7]"></span>
                  Industries
                </h5>
                <div className="flex flex-col gap-3.5">
                  <a className="text-[15px] text-[#8ca3b8] hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">SaaS</a>
                  <a className="text-[15px] text-[#8ca3b8] hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">AI Startups</a>
                  <a className="text-[15px] text-[#8ca3b8] hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Enterprise Tech</a>
                  <a className="text-[15px] text-[#8ca3b8] hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">GCCs</a>
                </div>
              </div>

              <div className="flex flex-col">
                <h5 className="text-[12px] uppercase tracking-[0.2em] text-white/90 font-bold mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F0B5] shadow-[0_0_10px_#00F0B5]"></span>
                  Insights
                </h5>
                <div className="flex flex-col gap-3.5">
                  <a className="text-[15px] text-[#8ca3b8] hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">AI Growth Blog</a>
                  <a className="text-[15px] text-[#8ca3b8] hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">GTM Reports</a>
                  <a className="text-[15px] text-[#8ca3b8] hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">GEO/AEO Guides</a>
                  <a className="text-[15px] text-[#8ca3b8] hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Frameworks</a>
                </div>
              </div>

              <div className="flex flex-col">
                <h5 className="text-[12px] uppercase tracking-[0.2em] text-white/90 font-bold mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] shadow-[0_0_10px_#A855F7]"></span>
                  Company
                </h5>
                <div className="flex flex-col gap-3.5">
                  <a className="text-[15px] text-[#8ca3b8] hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">About</a>
                  <a className="text-[15px] text-[#8ca3b8] hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Case Studies</a>
                  <a className="text-[15px] text-[#8ca3b8] hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">LinkedIn</a>
                  <a className="text-[15px] text-[#8ca3b8] hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Contact</a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* MASSIVE INTERACTIVE BACKGROUND TYPOGRAPHY */}
        <div className="relative w-full overflow-hidden select-none mt-2 md:mt-4 -mb-[5%] md:-mb-[3%] z-0">
          <motion.div
            className="flex whitespace-nowrap cursor-crosshair group relative"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
            whileHover={{ scale: 0.95 }}
          >
            {/* Repeated text to create seamless infinite scroll loop */}
            <h1 className="text-[16vw] md:text-[18vw] font-black text-white/[0.02] group-hover:text-white/[0.12] group-hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] tracking-tighter leading-none px-8 transition-all duration-700">
              NURTUREHIVE <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.05)' }}>✦</span> NURTUREHIVE <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.05)' }}>✦</span> NURTUREHIVE <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.05)' }}>✦</span> NURTUREHIVE
            </h1>
          </motion.div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="relative z-20 w-full border-t border-white/[0.05] bg-[#020408]/80 backdrop-blur-md pt-6 pb-8">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-white/40 font-light">© 2026 NurtureHive. All rights reserved.</p>
            
            <div className="flex items-center gap-8">
              <a className="text-[13px] text-white/40 hover:text-white transition-colors cursor-pointer font-light">Privacy Policy</a>
              <a className="text-[13px] text-white/40 hover:text-white transition-colors cursor-pointer font-light">Terms of Service</a>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
}

