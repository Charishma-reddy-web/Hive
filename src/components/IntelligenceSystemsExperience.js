"use client";

import { useEffect, useRef, useState } from "react";
import { systems } from "@/data/siteContent";

export default function IntelligenceSystemsExperience() {
  const stageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.24 }
    );

    observer.observe(stage);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sec intelligence-page">
      <div ref={stageRef} className={`systems-showcase${isVisible ? " is-visible" : ""}`}>
        <div className="systems-showcase-head">
          <span>Intelligence Stack</span>
          <h2>One growth engine, six operating layers</h2>
          <p>Each layer is shown as a wide operating slab, not a repeated grid card.</p>
        </div>

        <div className="system-slabs">
          {systems.map((item, index) => (
            <article className="system-slab" key={item.title} style={{ "--card-delay": `${index * 0.24}s` }}>
              <div className="system-slab-index">{String(index + 1).padStart(2, "0")}</div>
              <div className={`system-slab-accent accent-${item.tone}`} />
              <div className="system-slab-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="system-slab-kpi">{item.kpi}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
