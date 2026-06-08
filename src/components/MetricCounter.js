"use client";

import { useEffect, useRef, useState } from "react";

export default function MetricCounter({ end = 150, suffix = "K+" }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          return;
        }

        if (!entry.isIntersecting) {
          setIsVisible(false);
          setCount(0);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    let frameId = 0;
    const duration = 1400;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(end * eased));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(update);
        return;
      }
    }

    frameId = window.requestAnimationFrame(update);
    return () => window.cancelAnimationFrame(frameId);
  }, [end, isVisible]);

  return (
    <span ref={containerRef} className="metric-counter">
      {count}
      {suffix}
    </span>
  );
}
