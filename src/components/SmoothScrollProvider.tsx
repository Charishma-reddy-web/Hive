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

  return (
    <ReactLenis 
      root 
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
