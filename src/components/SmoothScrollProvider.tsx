'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ReactNode } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
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
      {children as any}
    </ReactLenis>
  );
}
