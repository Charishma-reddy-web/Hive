'use client'
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import { imageMap } from "@/assets/images portfolio/imageMap";
import portfolioData from "@/data/portfolioData.json";

const PortfolioSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const vectorRef = useRef<HTMLDivElement>(null);

  const currentX = useRef(900);
  const targetX = useRef(900);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quad",
    });

    let rafId: number;
    let isRunning = true;

    const OFFSET = 900;

    const computeTarget = () => {
      if (!sectionRef.current) return OFFSET;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Section not in view — keep hidden off to the right
      if (rect.bottom <= 0 || rect.top >= viewportHeight) return OFFSET;

      // progress: 0 → section just entered viewport from bottom
      //           1 → section is well settled (~35% from top)
      const progress = Math.min(
        1,
        Math.max(
          0,
          (viewportHeight - rect.top) / (viewportHeight * 0.65)
        )
      );

      // Ease-out cubic: fast slide-in, smooth deceleration into final resting position
      const eased = 1 - Math.pow(1 - progress, 3);

      return OFFSET * (1 - eased);
    };

    const animate = () => {
      if (!isRunning) return;

      if (vectorRef.current) {
        targetX.current = computeTarget();

        // 0.18 = fast yet smooth. Raise to 0.25 for even snappier feel.
        const lerpFactor = 0.18;
        currentX.current += (targetX.current - currentX.current) * lerpFactor;

        // Hard-snap when negligibly close — prevents infinite micro-drift
        if (Math.abs(currentX.current - targetX.current) < 0.15) {
          currentX.current = targetX.current;
        }

        vectorRef.current.style.transform = `translate3d(${currentX.current}px, 0, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      isRunning = false;
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between lg:min-h-screen w-full bg-white overflow-hidden py-10 lg:py-20 px-6 lg:pl-[10%] lg:pr-0 snap-start font-poppins"
    >
      {/* LEFT: Text Content — z-10 + backdrop-blur so it floats above the sliding vector */}
      <div
        data-aos="fade-up"
        className="relative z-10 flex-shrink-0 w-full lg:w-[52%] pt-10 lg:pt-20 lg:backdrop-blur-[5px] bg-white/5 rounded-2xl"
      >
        <h1 className="text-3xl lg:text-[2.5rem] font-extrabold text-[#111111] leading-[1.2] mb-4">
          {portfolioData.heading}
        </h1>

        <p className="text-[17px] leading-[1.8] text-[#555555] max-w-[620px] mb-0">
          {portfolioData.paragraph.start}
          <b className="text-[#111111]">{portfolioData.paragraph.bold}</b>
          {portfolioData.paragraph.end}
        </p>

        {/* Logo row */}
        <div className="flex flex-row flex-wrap items-center gap-4 mt-12">
          {portfolioData.logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex-shrink-0 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
            >
              <Image
                src={imageMap[logo.imageId]}
                alt={logo.alt}
                width={155}
                height={178}
                className="object-contain block w-[100px] h-[115px] sm:w-[140px] sm:h-[160px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: portVector — slides in from the right on scroll */}
      <div
        id="portfolioVector"
        ref={vectorRef}
        className="absolute -right-[40px] top-10 lg:top-[5%] lg:right-0 w-[280px] lg:w-[850px] h-[280px] lg:h-[800px] pointer-events-none select-none z-0 will-change-transform"
        style={{
          transform: 'translate3d(900px, 0, 0)',
        }}
      >
        <Image
          src={imageMap[portfolioData.bgVector]}
          alt=""
          aria-hidden="true"
          fill
          className="object-contain object-right-top"
          priority
        />
      </div>
    </section>
  );
};

export default PortfolioSection;