"use client";

import { useEffect, useRef } from "react";

const labels = [
  "Search\nIntel",
  "GTM\nAuto",
  "Content\nEco",
  "AI\nVisibility",
  "Revenue\nIntel",
  "Demand\nSys",
  "Agentic\nAI",
  "SEO+GEO\n+AEO"
];

const activeIndexes = [0, 2, 4, 6, 9, 12, 15, 18];

export default function HiveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrame = 0;
    let pulse = 0;
    let cells = [];

    function hexPath(cx, cy, r) {
      ctx.beginPath();
      for (let i = 0; i < 6; i += 1) {
        const angle = (Math.PI / 180) * (60 * i - 30);
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
    }

    function buildCells(width, height) {
      cells = [];
      const radius = 46;
      const columnWidth = radius * Math.sqrt(3);
      const rowHeight = radius * 1.5;
      const cols = 5;
      const rows = 6;
      const offsetX = Math.max(10, width - cols * columnWidth - 42);
      const offsetY = -15;
      let index = 0;

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const cx = offsetX + col * columnWidth + (row % 2 === 1 ? columnWidth / 2 : 0);
          const cy = offsetY + row * rowHeight + radius;
          const isActive = activeIndexes.includes(index);
          const label = isActive ? labels[activeIndexes.indexOf(index) % labels.length] : null;

          cells.push({
            cx,
            cy,
            r: radius,
            isActive,
            label,
            phase: Math.random() * Math.PI * 2
          });
          index += 1;
        }
      }
    }

    function draw() {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      cells.forEach((cell) => {
        const { cx, cy, r, isActive, label, phase } = cell;
        if (cx < -r || cx > width + r || cy < -r || cy > height + r) {
          return;
        }

        const localPulse = isActive ? 0.5 + 0.5 * Math.sin(pulse * 0.03 + phase) : 0;
        const reveal = Math.min(1, Math.max(0, (pulse - cell.cx * 0.12 - cell.cy * 0.08) / 90));
        const drawX = cx;
        const drawY = cy;

        // Calculate a smooth fade-out factor for cells on the left edge of the grid
        const fadeFactor = Math.min(1, Math.max(0, (cx - width * 0.04) / (width * 0.24)));

        hexPath(drawX, drawY, r - 3);
        if (isActive) {
          ctx.fillStyle = `rgba(29,158,117,${(0.06 + localPulse * 0.12) * reveal * fadeFactor})`;
          ctx.strokeStyle = `rgba(29,158,117,${(0.25 + localPulse * 0.55) * reveal * fadeFactor})`;
          ctx.lineWidth = 0.8;
        } else {
          ctx.fillStyle = `rgba(255,255,255,${0.025 * reveal * fadeFactor})`;
          ctx.strokeStyle = `rgba(255,255,255,${0.07 * reveal * fadeFactor})`;
          ctx.lineWidth = 0.5;
        }
        ctx.fill();
        ctx.stroke();

        if (isActive && label) {
          const lines = label.split("\n");
          ctx.fillStyle = `rgba(29,158,117,${(0.55 + localPulse * 0.45) * reveal * fadeFactor})`;
          ctx.font = '500 9.5px "Sora"';
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          const lineHeight = 12;
          const startY = drawY - ((lines.length - 1) * lineHeight) / 2;
          lines.forEach((line, idx) => {
            ctx.fillText(line, drawX, startY + idx * lineHeight);
          });
        }
      });

      pulse += 1;
      animationFrame = window.requestAnimationFrame(draw);
    }

    function resize() {
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      buildCells(canvas.width, canvas.height);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hive-canvas" />;
}
