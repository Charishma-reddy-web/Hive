"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let animationFrame = 0;
    let particles = [];

    const createParticles = () => {
      const parent = canvas.parentElement;
      const width = parent.offsetWidth;
      const height = parent.offsetHeight;
      const count = Math.min(30, Math.floor((width * height) / 18000));

      canvas.width = width;
      canvas.height = height;
      particles = Array.from({ length: count }, (_, index) => {
        const large = index % 13 === 0;

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (large ? 0.12 : 0.28),
          vy: (Math.random() - 0.5) * (large ? 0.12 : 0.28),
          radius: large ? Math.random() * 12 + 10 : Math.random() * 2.4 + 1,
          alpha: large ? Math.random() * 0.2 + 0.1 : Math.random() * 0.42 + 0.18,
          large,
          phase: Math.random() * Math.PI * 2
        };
      });
    };

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;

      context.clearRect(0, 0, width, height);

      const background = context.createRadialGradient(width * 0.12, height * 0.62, 0, width * 0.12, height * 0.62, width * 0.42);
      background.addColorStop(0, "rgba(29, 158, 117, 0.1)");
      background.addColorStop(1, "rgba(29, 158, 117, 0)");
      context.fillStyle = background;
      context.fillRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.phase += 0.012;

        if (particle.x < -30) particle.x = width + 30;
        if (particle.x > width + 30) particle.x = -30;
        if (particle.y < -30) particle.y = height + 30;
        if (particle.y > height + 30) particle.y = -30;
      });

      particles.forEach((particle, index) => {
        if (particle.large) return;

        particles.slice(index + 1).forEach((other) => {
          if (other.large) return;

          const distance = Math.hypot(particle.x - other.x, particle.y - other.y);

          if (distance < 82) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(122, 232, 196, ${0.045 * (1 - distance / 82)})`;
            context.lineWidth = 0.35;
            context.stroke();
          }
        });
      });

      particles.forEach((particle) => {
        const pulse = 0.75 + 0.25 * Math.sin(particle.phase);
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius * pulse, 0, Math.PI * 2);

        if (particle.large) {
          const glow = context.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.radius * 3.8
          );
          glow.addColorStop(0, `rgba(29, 230, 166, ${particle.alpha})`);
          glow.addColorStop(1, "rgba(29, 230, 166, 0)");
          context.fillStyle = glow;
        } else {
          context.fillStyle = `rgba(122, 255, 224, ${particle.alpha * pulse})`;
        }

        context.fill();
      });

      animationFrame = requestAnimationFrame(draw);
    };

    createParticles();
    draw();

    window.addEventListener("resize", createParticles);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", createParticles);
    };
  }, []);

  return <canvas className="particle-bg" ref={canvasRef} aria-hidden="true" />;
}
