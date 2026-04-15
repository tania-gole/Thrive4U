"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  {
    body: "Sanah's thoughtful and empathetic approach provided a safe space for exploring challenges, identifying strengths and strategising solutions. Her ability to listen deeply and ask incisive questions has helped me uncover fresh perspectives enabling more informed and confident decision-making in my leadership role.",
    name: "Robert Glick OBE",
    role: "VP, Head of International Public Affairs, American Express",
  },
  {
    body: "She helped me to set a clear vision for my career journey, reconnect with my purpose, and articulate my vision with confidence and clarity. Sanah asked powerful questions that prompted deep reflection and self-discovery. I made transformational progress thanks to Sanah challenging me to reconnect with my purpose and potential.",
    name: "Tessa van Breugel",
    role: "AI Strategy, Public/Private Partnerships",
  },
  {
    body: "She created a safe space for me to share my inhibitions and find my own answers at my pace without being judged or pressurised. Sanah's patience and the method of questioning helped me to confront my fears and deal with situations and feelings that I feared and pushed under the carpet.",
    name: "Sahana Bapu",
    role: "Senior Program Manager, PMP & Lean Six Sigma Certified",
  },
  {
    body: "Getting coached by Sanah has been one of the smartest decisions I've made in recent times! She is really able to ask the right questions to enable me to dive inside myself and come up with the right answers. It's led me to a journey of self discovery that I'm sure I wouldn't have managed to traverse on my own.",
    name: "Vikas Dua",
    role: "HR Head, Weber Shandwick",
  },
  {
    body: "My coach and advisor in 2019. Thanks a lot for the humble and insightful sessions. Looking forward to working with you again.",
    name: "Kalpesh R Parmar",
    role: "General Manager, Mars Snacking Asia",
  },
  {
    body: "Sanah is a wonderful and highly skilled facilitator. She is thoroughly professional, straightforward and empathetic. I found her very insightful, a keen learner and a seeker, a rare dimension prevalent nowadays.",
    name: "Dr. Sunil Omanwar",
    role: "Leadership Development, Organisation Development",
  },
  {
    body: "Sanah is a woman of integrity, creativity and power. She knows how to listen, understand and empower others. You will enjoy her delightful company because she is incredibly sensitive, caring and loving, and knows how to help you create the results YOU want.",
    name: "Nigel Hughes",
    role: "Leadership Transformation, Founder, Outstanding Global",
  },
  {
    body: "Sanah is an authentic being with a well-rounded personality. Her sincerity and discipline to excellence is commendable. She brings commitment, vitality and integrity to her work. I would strongly recommend her for one-to-one performance coaching.",
    name: "Vivek Arora",
    role: "Experiential Coach, Theatre-based Learning",
  },
];

const CARD = 380 + 24;

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(0);
  const [max, setMax] = useState(0);
  const posRef = useRef(0); // mirrors `pos` so drag handlers stay stable

  // recompute max scroll position on mount + resize
  useEffect(() => {
    const calc = () => {
      const t = trackRef.current;
      const r = railRef.current;
      if (!t || !r) return;
      setMax(Math.max(0, t.scrollWidth - r.offsetWidth));
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const moveTo = (next: number) => {
    const t = trackRef.current;
    const r = railRef.current;
    if (!t || !r) return;
    const m = Math.max(0, t.scrollWidth - r.offsetWidth);
    const clamped = Math.max(0, Math.min(next, m));
    posRef.current = clamped;
    setPos(clamped);
  };

  // Bind drag listeners exactly once. Read latest pos via ref to avoid
  // re-binding on every cursor move (which previously cycled ~60×/sec).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let dragging = false;
    let startX = 0;
    let startPos = 0;

    const down = (e: MouseEvent) => {
      dragging = true;
      startX = e.clientX;
      startPos = posRef.current;
      track.style.cursor = "grabbing";
    };
    const move = (e: MouseEvent) => {
      if (!dragging) return;
      moveTo(startPos - (e.clientX - startX));
    };
    const up = () => {
      dragging = false;
      track.style.cursor = "grab";
    };
    const tStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startPos = posRef.current;
    };
    const tMove = (e: TouchEvent) => {
      moveTo(startPos - (e.touches[0].clientX - startX));
    };

    track.addEventListener("mousedown", down);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    track.addEventListener("touchstart", tStart, { passive: true });
    track.addEventListener("touchmove", tMove, { passive: true });
    return () => {
      track.removeEventListener("mousedown", down);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      track.removeEventListener("touchstart", tStart);
      track.removeEventListener("touchmove", tMove);
    };
  }, []);

  const atStart = pos <= 0;
  const atEnd = pos >= max;

  return (
    <section id="testimonials">
      <div className="test-head">
        <span className="sec-eyebrow">Testimonials</span>
        <h2 className="test-h2">
          Stories of <em>transformation</em>
        </h2>
      </div>

      <div className="test-rail-wrap">
        {!atStart && (
          <button
            className="test-arrow test-arrow-left"
            onClick={() => moveTo(pos - CARD)}
            aria-label="Previous"
          >
            ←
          </button>
        )}
        <div className="test-rail" ref={railRef}>
          <div
            className="test-track"
            ref={trackRef}
            style={{ transform: `translateX(-${pos}px)` }}
          >
            {items.map((t) => (
              <div className="tcard" key={t.name}>
                <div className="tcard-q">&ldquo;</div>
                <p className="tcard-body">{t.body}</p>
                <div className="tcard-name">{t.name}</div>
                <div className="tcard-role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
        {!atEnd && (
          <button
            className="test-arrow test-arrow-right"
            onClick={() => moveTo(pos + CARD)}
            aria-label="Next"
          >
            →
          </button>
        )}
      </div>
    </section>
  );
}
