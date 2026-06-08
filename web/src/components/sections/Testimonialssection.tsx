"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type TouchEvent,
} from "react";
import testimonialsData from "@/data/testimonialsData.json";

type Testimonial = {
  quote: string;
  company: string;
  type: string;
};

const testimonials: Testimonial[] = testimonialsData.testimonials;

const AUTO_PLAY_INTERVAL = 4000;

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    const next = (index + testimonials.length) % testimonials.length;
    setCurrent(next);
  }, []);

  const nextSlide = useCallback(() => goTo(current + 1), [current, goTo]);
  const prevSlide = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Update wrapper transform
  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = `translateX(-${current * 100}%)`;
    }
  }, [current]);

  // ── LIVE DRAG: card follows mouse/touch in real-time ──────────────────────
  const dragStart = useRef<number | null>(null);
  const isDragging = useRef(false);
  const liveOffset = useRef(0);

  const getBaseTranslate = () => -(current * 100);

  const applyLiveDrag = (diffPx: number) => {
    if (!wrapperRef.current) return;
    wrapperRef.current.style.transition = "none";
    wrapperRef.current.style.transform = `translateX(calc(${getBaseTranslate()}% + ${diffPx}px))`;
    liveOffset.current = diffPx;
  };

  const snapToCard = (diffPx: number) => {
    if (!wrapperRef.current) return;
    wrapperRef.current.style.transition = "transform 0.2s ease";
    const threshold = wrapperRef.current.offsetWidth * 0.2;
    if (diffPx < -threshold) goTo(current + 1);
    else if (diffPx > threshold) goTo(current - 1);
    else wrapperRef.current.style.transform = `translateX(${getBaseTranslate()}%)`;
    liveOffset.current = 0;
    dragStart.current = null;
    isDragging.current = false;
  };

  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    dragStart.current = e.clientX;
    isDragging.current = false;
    e.preventDefault();
  };
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    const diff = e.clientX - dragStart.current;
    if (!isDragging.current && Math.abs(diff) > 3) isDragging.current = true;
    if (isDragging.current) applyLiveDrag(diff);
  };
  const onMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    const diff = e.clientX - dragStart.current;
    if (isDragging.current) snapToCard(diff);
    else { dragStart.current = null; isDragging.current = false; }
  };
  const onMouseLeaveHandler = () => {
    if (isDragging.current) snapToCard(liveOffset.current);
    dragStart.current = null;
    isDragging.current = false;
  };
  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    dragStart.current = e.touches[0].clientX;
    isDragging.current = false;
  };
  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    const diff = e.touches[0].clientX - dragStart.current;
    if (!isDragging.current && Math.abs(diff) > 3) isDragging.current = true;
    if (isDragging.current) applyLiveDrag(diff);
  };
  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (dragStart.current !== null) {
      snapToCard(e.changedTouches[0].clientX - dragStart.current);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@200;400;600&family=Poppins:wght@400;600&display=swap');

        /* Exact from nurturehive.co CSS */

        .tm-main {
          display: flex;
          position: relative;
          overflow: hidden;
          scroll-snap-align: start;
        }

        .testimonials-section {
          display: flex;
          margin-top: 12vh;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 80px 5% 0 5%;
          width: 100%;
          background-color: #151515;
          color: #fff;
          min-height: 88vh;
          padding-bottom: 0;
        }

        /* Exact: align-self:flex-start | Space Grotesk | weight 200 | 2.5rem */
        .testimonials-section h2 {
          align-self: center;
          font-size: 2.5rem;
          font-weight: 200;
          font-family: "Space Grotesk", sans-serif;
          margin-bottom: 40px;
          color: #fff;
        }

        .testimonials-container {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 100%;
          max-width: 1200px;
          overflow: hidden;
        }

        .testimonials-wrapper {
          display: flex;
          width: 100%;
          transition: transform 0.2s ease;
          cursor: grab;
        }
        .testimonials-wrapper:active {
          cursor: grabbing;
        }

        /* Exact: flex:0 0 100% | flex-direction:column | center */
        .testimonial {
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;
          display: flex;
          flex-direction: column;
          flex: 0 0 100%;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          padding: 20px;
        }

        /* Exact: border #1ae9ab | border-radius 24px | relative */
        .testText {
          position: relative;
          border: 2px solid #1ae9ab;
          padding: 30px;
          border-radius: 24px;
          margin-bottom: 40px;
          max-width: 620px;
          width: 100%;
        }

        /* Exact: rotated div tail — 30×30 | left:50px | bottom:-15px | rotate(45deg) */
        .textBox {
          height: 30px;
          width: 30px;
          background: #151515;
          border-bottom-right-radius: 8px;
          border-right: 2px solid #1ae9ab;
          border-bottom: 2px solid #1ae9ab;
          position: absolute;
          bottom: -15px;
          left: 50px;
          transform: rotate(45deg);
        }

        .testimonial p {
          margin: 0;
          max-width: 50ch;
          font-family: "Poppins", sans-serif;
          font-size: 0.95rem;
          line-height: 1.8;
          color: #fff;
          text-align: center;
        }

        /* Exact: color #1ae9ab | text-align left */
        .author {
          margin-top: 30px;
          color: #1ae9ab;
          text-align: left;
          font-family: "Poppins", sans-serif;
          font-size: 1rem;
          font-weight: 600;
          width: 100%;
          max-width: 620px;
          padding-left: 4px;
        }

        /* Exact: font-size 0.8em | color #fff */
        .author span {
          display: block;
          font-size: 0.8em;
          color: #fff;
          font-weight: 400;
          margin-top: 4px;
        }

        /* Dots + arrows row */
        .testimonials-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: auto;
          padding: 40px 0 40px 0;
          gap: 0;
        }

        /* Exact: background none | color white | font-size 2rem | padding 10px | margin 0 10px */
        .nav-arrow {
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          padding: 10px;
          margin: 0 10px;
          line-height: 1;
          transition: color 0.2s;
        }
        .nav-arrow:hover { color: #1ae9ab; }

        /* Exact: 10×10 | white | border-radius 50% */
        .dot {
          height: 10px;
          width: 10px;
          margin: 0 5px;
          background-color: white;
          border-radius: 50%;
          display: inline-block;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        /* Exact active dot: star clip-path | color #1ae9ab */
        .dot.active {
          clip-path: polygon(
            20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%,
            80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%
          );
          background-color: #1ae9ab;
          height: 12px;
          width: 12px;
        }

        @media (max-width: 768px) {
          .testimonials-section h2 {
            font-size: 2rem;
          }
          .testimonial {
            padding: 10px;
          }
          .testText {
            padding: 20px;
          }
        }
      `}</style>

      <main className="tm-main">
        <section id="testimonials" className="testimonials-section">
          <h2>What Others Say About Us</h2>

          <div className="testimonials-container">
            <div
              className="testimonials-wrapper"
              ref={wrapperRef}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeaveHandler}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {testimonials.map((t, i) => (
                <div className="testimonial" key={i}>
                  <div className="testText">
                    <p>{t.quote}</p>
                    <div className="textBox" />
                  </div>
                  <div className="author">
                    {t.company}
                    <span>{t.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials-dots">
            <button className="nav-arrow" onClick={prevSlide} aria-label="Previous">
              ←
            </button>

            {testimonials.map((_, i) => (
              <button
                type="button"
                key={i}
                className={`dot${i === current ? " active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}

            <button className="nav-arrow" onClick={nextSlide} aria-label="Next">
              →
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
