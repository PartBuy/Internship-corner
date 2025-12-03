import React, { useEffect, useRef, useState } from "react";
import "./metrics-strip.css";

/**
 * MetricsStrip: displays three stats as a centered row
 */
export default function MetricsStrip({
  stats = [
    { value: 110000, label: "Beta" },
    { value: 25000, label: "Beta" },
    { value: 4200, label: "Beta" },
  ],
  duration = 1500,
}) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState(() => stats.map(() => 0));
  const rafIds = useRef([]);
  const reducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
          break;
        }
      }
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    if (reducedMotion) {
      setValues(stats.map((s) => Math.round(s.value)));
      return;
    }

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    stats.forEach((stat, idx) => {
      const target = Math.round(Math.max(0, stat.value));
      const stagger = idx * 120;
      const startRef = { val: null };

      const step = (ts) => {
        if (startRef.val === null) startRef.val = ts + stagger;
        const progress = Math.min(1, Math.max(0, (ts - startRef.val) / duration));
        const eased = easeOut(progress);
        const current = Math.round(eased * target);

        setValues((prev) => {
          const copy = prev.slice();
          copy[idx] = current;
          return copy;
        });

        if (progress < 1) {
          rafIds.current[idx] = requestAnimationFrame(step);
        } else {
          setValues((prev) => {
            const copy = prev.slice();
            copy[idx] = target;
            return copy;
          });
        }
      };

      rafIds.current[idx] = requestAnimationFrame(step);
    });

    return () => {
      rafIds.current.forEach((id) => cancelAnimationFrame(id));
      rafIds.current = [];
    };
  }, [visible, stats, duration, reducedMotion]);

  return (
    <div className="metrics-row-wrap" ref={containerRef}>
      <div className={`metrics-strip ${visible ? "is-visible" : ""}`}>
        {stats.map((s, i) => (
          <div key={i} className="metric-card" tabIndex={0}>
            <div className="metric-number" aria-live="polite">
              {values[i].toLocaleString()}
            </div>
            <div className="metric-label">{s.label ?? "Beta"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}