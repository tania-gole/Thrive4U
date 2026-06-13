"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type Pillar = {
  id: string;
  title: string;
  icon: React.ReactNode;
  blurb: string;
  story: string;
  image?: string;
};

const pillars: Pillar[] = [
  {
    id: "wellness",
    title: "Wellness in Practice",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c-2 3-3 6-3 9 0 3 1 6 3 8 2-2 3-5 3-8 0-3-1-6-3-9z" />
        <path d="M3 12c2 1 5 2 7 2M21 12c-2 1-5 2-7 2" />
      </svg>
    ),
    blurb:
      "Living what she teaches — yoga, meditation, and mindful nutrition are daily rituals, not professional talking points.",
    story:
      "Full wellness story coming soon — add the longer narrative here.",
  },
  {
    id: "service",
    title: "Service & Community",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    blurb:
      "Pro bono coaching for emerging leaders and active advocacy for women in the workforce.",
    story:
      "Full service & community story coming soon — add the longer narrative here.",
  },
  {
    id: "mountains",
    title: "Mountains & Movement",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20l5.5-10 4 7 3-5L21 20H3z" />
        <circle cx="9" cy="6" r="1.5" />
      </svg>
    ),
    blurb:
      "Twenty-plus treks across the Himalayas — perspective and resilience earned at altitude.",
    story:
      "Full mountains & movement story coming soon — add the longer narrative here.",
  },
  {
    id: "founder",
    title: "Founder of Thrive4U",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.39 6.96L22 10l-5.5 4.99L18 22l-6-3.6L6 22l1.5-7.01L2 10l7.61-1.04L12 2z" />
      </svg>
    ),
    blurb:
      "Built a global coaching practice from the ground up, navigating the same complexity her clients face.",
    story:
      "Full founder story coming soon — add the longer narrative here.",
  },
];

export default function WholePerson() {
  const [active, setActive] = useState<Pillar | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  return (
    <>
      <section id="whole-person">
        <div className="wp-inner">
          <span className="sec-eyebrow wp-eyebrow reveal">A fuller picture</span>
          <h2 className="wp-h2 reveal">
            The <em>whole person</em>
          </h2>

          <div className="wp-grid stagger">
            {pillars.map((p) => (
              <button
                key={p.id}
                type="button"
                className="wp-card"
                onClick={() => setActive(p)}
                aria-label={`Read more about ${p.title}`}
              >
                <div className="wp-icon" aria-hidden="true">{p.icon}</div>
                <div className="wp-title">{p.title}</div>
                <div className="wp-body">{p.blurb}</div>
                <span className="wp-read-more">Read more →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          className="wp-modal-overlay"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="wp-modal-title"
        >
          <div className="wp-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="wp-modal-close"
              onClick={close}
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            {active.image && (
              <div className="wp-modal-image">
                <Image
                  src={active.image}
                  alt={active.title}
                  width={800}
                  height={500}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
            )}
            <div className="wp-modal-content">
              <div className="wp-icon wp-modal-icon" aria-hidden="true">{active.icon}</div>
              <h3 id="wp-modal-title" className="wp-modal-title">{active.title}</h3>
              <p className="wp-modal-body">{active.story}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
