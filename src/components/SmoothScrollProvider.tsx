'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // Synchronize Lenis and GSAP ticker to eliminate pin bouncing
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
  
    // Force GSAP and Lenis onto the same rendering frame
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0, 0); // Prevent GSAP from throwing off the sync during heavy loads
    
    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis 
      root 
      ref={lenisRef} 
      autoRaf={false} // Disable auto RAF so GSAP can drive it
      options={{ 
        lerp: 0.08,
        duration: 1.2, 
        smoothWheel: true,
        wheelMultiplier: 1,
        syncTouch: true
      }}
    >
      {children}
    </ReactLenis>
  );
}
