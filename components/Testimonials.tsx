"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Item = {
  body: string;
  name: string;
  role: string;
  /** Date of the LinkedIn recommendation, ISO yyyy-mm-dd. Drives the ordering. */
  date?: string;
};

// Full text of each LinkedIn recommendation, wording untouched. Only mechanical
// typography is normalised: curly apostrophes throughout, no space before
// punctuation, sentences start capitalised, terminal full stops added. Blank
// lines mark the paragraph breaks from the original.
const rawItems: Item[] = [
  {
    date: "2026-07-23",
    body: `Sanah is not only an amazing human being with a wonderful presence, but she is also a master at her craft. Over our six months of coaching, every exchange was a pleasure and left me with newfound clarity and fresh perspectives.

Her thoughtful approach and deep questions unlocked conversations I didn’t know I needed to have. Most importantly, Sanah provided me with a structured system for multidimensional goal-setting that delivered tangible results and long-term sustainability. If you’re looking for an executive coach who combines deep empathy with a high-impact, practical framework, Sanah is the one.

Namaste.`,
    name: "Boris Fournier",
    role: "Mobile Software Engineering Manager, Digital Health",
  },
  {
    date: "2026-07-23",
    body: `I had the pleasure of working with Sanah as my business and career coach for several months and cannot recommend her more highly.

From our first conversation, she created an environment where I felt comfortable being completely open about my career aspirations, strengths, and challenges I was facing. She is incredibly easy to talk to, empathetic, and has a genuine ability to understand what motivates people.

Through her coaching, I gained real clarity on what I wanted in my next role and the confidence to pursue opportunities that truly aligned with my goals. This clarity has been instrumental in my career progression.

What I appreciated most was that Sanah always believed in me and my potential. She challenged my thinking, encouraged me to aim higher, and provided honest, thoughtful guidance every step of the way and this has had a lasting impact on both my confidence and my career.

If you are looking for a coach who genuinely cares about you and your success and has the ability to bring out the best in you, I would highly recommend working with Sanah.`,
    name: "Francois Krynauw",
    role: "Head of Merchant Acquisition, American Express",
  },
  {
    date: "2026-07-20",
    body: `It’s so rare to come across someone who is not only deeply emotionally intelligent but also able to express such deep intelligence so quickly and effectively. I will pose an idea or question that I have struggled with for YEARS and Sanah has the very unique ability to hear me, see my intentions, and guide me toward the best answers/actions for my circumstances.

I cannot stress how IMPRESSIVE it is to be wise enough to GUIDE someone else toward their own personal wisdom AND have immediate next steps following! And all in the span of 40 minutes?!?! But that’s what Sanah does! She is able to see these bigger themes in life and show you the bigger picture while helping you pull together the details that fit for your own life. She lets you on the right path and shows you how to take the next few steps forward.

Of course parts of this ability could be chalked up to experience (which she undoubtedly has), but it is truly a unique gift to be so emotionally and mentally grounding for everyone she comes across. Sanah has helped align me toward becoming a better human going forward. I feel prepared to be the leader that I know I can be throughout my life not just within the workplace. I could not be more grateful and more excited for what’s to come! I’m ready!`,
    name: "Jacquelyn Loi",
    role: "Portfolio Manager, CVS Health",
  },
  {
    date: "2026-07-04",
    body: `The value of great coaching is not that it gives you better answers; it helps you ask better questions.

Sanah does this exceptionally well.

Over the course of a year working together, she consistently helped me challenge assumptions, uncover new perspectives, and think more intentionally about my growth and future direction.

What stood out most was her ability to listen deeply and ask the right questions at the right time. Many of those questions continue to influence how I approach leadership, learning, and development today.

I would highly recommend Sanah to anyone looking for a thoughtful, insightful, and impactful coach.`,
    name: "M. Mushfiqur Rahman",
    role: "Learning Experience & Talent Partner, Chevron",
  },
  {
    date: "2025-06-12",
    body: "The executive coaching sessions with Sanah have been profoundly impactful and constructive, offering tailored insights and practical tools that I’m convinced will really enhance my professional growth. Sanah’s thoughtful and empathetic approach provided a safe space for exploring challenges, identifying strengths and strategizing solutions. Her ability to listen deeply and ask incisive questions has helped me uncover fresh perspectives enabling more informed and confident decision-making in my leadership role. Each session has been structured yet flexible, allowing us to focus on immediate priorities while maintaining alignment with long-term professional goals. One of the most valuable aspects of these sessions has been the focus on actionable strategies. Sanah has equipped me with techniques to navigate complex organisational dynamics and effectively manage competing priorities. Her emphasis on self-awareness and emotional intelligence has sharpened my ability to communicate authentically and I’m sure will help build stronger relationships with colleagues and stakeholders. Beyond the professional sphere the coaching has also prompted meaningful personal growth. Sanah’s encouragement to reflect on my core values and their alignment with my work has deepened my sense of purpose and fulfilment. Overall this coaching experience has been a transformative journey, leaving me better equipped to lead with clarity, confidence and compassion.",
    name: "Robert Glick OBE",
    role: "VP, Head of International Public Affairs, American Express",
  },
  {
    date: "2024-08-27",
    body: `I had the privilege of working with Sanah for six months, and during that time, she guided me through a transformative learning journey that has profoundly impacted my professional growth.

Sanah’s energy clicked with me straight away; she possesses a unique blend of wisdom, positivity, and the ability to challenge her clients in a supportive and compassionate manner. She helped me to set a clear vision for my career journey, reconnect with my purpose, and articulate my vision with confidence and clarity.

Throughout our coaching sessions, Sanah asked powerful questions that prompted deep reflection and self-discovery. I made transformational progress thanks to Sanah challenging me to reconnect with my purpose and potential.

In addition to her professionalism and expertise, Sanah brings a genuine warmth and empathy to her coaching sessions. She has a natural ability to connect with her clients on a personal level, which fosters a strong sense of trust and rapport.

Without reservation, I highly recommend Sanah as a career coach. I am grateful for the positive impact she has had on my perspective on life and career.`,
    name: "Tessa van Breugel",
    role: "Public/Private Partnerships, AI Policy & Impact Investment",
  },
  {
    date: "2023-05-30",
    body: "My coach/advisor in 2019. Thanks a lot for the humble and insightful sessions. Looking forward to work with you again.",
    name: "Kalpesh R Parmar",
    role: "General Manager, Mars Snacking Asia",
  },
  {
    date: "2023-05-29",
    body: "I had my first interaction with Sanah in 2020 when I was dealing with apprehension/self-doubt and many other lowlights in my professional and personal life. She created a safe space for me to share my inhibitions and find my own answers at my pace without being judged/pressurized or pushed. It’s been a privilege to work with Sanah and I continue to reach out to her everytime I feel muddled in my head and need a safe sounding board. Sanah’s patience and the method of questioning helped me to confront my fears to myself and helped me deal with situations and feelings that I feared and pushed under the carpet. I strongly recommend anyone who needs help to clear their mind to have a/few sessions with her to help you talk to your inner voice!",
    name: "Sahana Bapu",
    role: "Senior Program Manager, PMP & Lean Six Sigma Certified",
  },
  {
    date: "2020-03-03",
    body: `Getting coached by Sanah has been one of the smartest decisions I’ve made in recent times! With her experience in the area of learning facilitation and exposure to top notch organisations, Sanah has acquired the right perspectives and skills to be able to make a positive difference in the lives of others.

What I’ve really appreciated about her coaching engagement is that she is really able to ask the ‘right’ questions to enable me to dive inside myself and come up with the ‘right’ answers. It’s led me to a journey of self discovery that I’m sure I wouldn’t have managed to traverse on my own.

Truly grateful for her commitment, time and personal approach!`,
    name: "Vikas Dua",
    role: "HR Head, Weber Shandwick",
  },
  {
    date: "2018-05-14",
    body: `Sanah is a woman of integrity, creativity and power.

She knows how to listen, understand and empower others. You will enjoy her delightful company because she is incredibly sensitive, caring and loving AND knows how to help you create the results YOU want.`,
    name: "Nigel Hughes",
    role: "Leadership Transformation, Founder, Outstanding Global",
  },
  {
    date: "2014-01-31",
    body: "Sanah is a colleague and a coach, she is an authentic being with well rounded personality. Her sincerity and discipline to excellence is commendable. She is a charismatic leader who values individuality in others and maintains her own strong persona. I have also worked with her on learning and development projects and she brings commitment, vitality and integrity to her work. I would strongly recommend her for one to one performance coaching.",
    name: "Vivek Arora",
    role: "Theatre-based Soft Skills Learning, Artist",
  },
];

// Newest first. Undated entries sort to the end ("" loses every comparison).
const items = [...rawItems].sort((a, b) =>
  (b.date ?? "").localeCompare(a.date ?? ""),
);

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Parsed by hand rather than via `new Date(iso)`, which reads the string as UTC
// and can slip to the previous month for viewers behind it.
function formatDate(iso: string) {
  const [year, month] = iso.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

const CARD = 380 + 24;

// Bodies longer than this are clamped on the card and get a "Read full story"
// affordance that opens the whole recommendation in a modal.
const LONG_BODY = 380;

// Card view: collapse the stored paragraph breaks into one running block so the
// line clamp has a single box to work on.
const oneLine = (body: string) => body.replace(/\s+/g, " ").trim();

// Modal view: split on blank lines, collapsing soft wraps inside a paragraph.
function paragraphs(body: string) {
  return body
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(0);
  const [max, setMax] = useState(0);
  const [active, setActive] = useState<Item | null>(null);
  const posRef = useRef(0); // mirrors `pos` so drag handlers stay stable
  // Set while a pointer travels far enough to count as a drag, so the click
  // that fires afterwards doesn't also open a modal.
  const draggedRef = useRef(false);

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
      draggedRef.current = false;
      startX = e.clientX;
      startPos = posRef.current;
      track.style.cursor = "grabbing";
    };
    const move = (e: MouseEvent) => {
      if (!dragging) return;
      if (Math.abs(e.clientX - startX) > 5) draggedRef.current = true;
      moveTo(startPos - (e.clientX - startX));
    };
    const up = () => {
      dragging = false;
      track.style.cursor = "grab";
    };
    const tStart = (e: TouchEvent) => {
      draggedRef.current = false;
      startX = e.touches[0].clientX;
      startPos = posRef.current;
    };
    const tMove = (e: TouchEvent) => {
      if (Math.abs(e.touches[0].clientX - startX) > 5) draggedRef.current = true;
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

  const atStart = pos <= 0;
  // Only consider "at end" once the layout has actually been measured
  // (max > 0). Before measurement, max defaults to 0 which would falsely
  // mark every position as the end and hide the next-arrow on first render.
  const atEnd = max > 0 && pos >= max;

  return (
    <>
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
              {items.map((t) => {
                const long = t.body.length > LONG_BODY;
                const inner = (
                  <>
                    <div className="tcard-q">&ldquo;</div>
                    <p className="tcard-body">{oneLine(t.body)}</p>
                    {long && (
                      <span className="tcard-read-more">Read full story →</span>
                    )}
                    <div className="tcard-name">{t.name}</div>
                    <div className="tcard-role">{t.role}</div>
                    {t.date && (
                      <div className="tcard-date">{formatDate(t.date)}</div>
                    )}
                  </>
                );

                // Only the clamped testimonials are interactive — opening a
                // modal on one that's already fully visible would show nothing new.
                return long ? (
                  <button
                    type="button"
                    className="tcard tcard-clickable"
                    key={t.name}
                    onClick={() => {
                      if (draggedRef.current) return;
                      setActive(t);
                    }}
                    aria-label={`Read the full testimonial from ${t.name}`}
                  >
                    {inner}
                  </button>
                ) : (
                  <div className="tcard" key={t.name}>
                    {inner}
                  </div>
                );
              })}
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

      {active && (
        <div
          className="test-modal-overlay"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`Testimonial from ${active.name}`}
        >
          <div className="test-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="test-modal-close"
              onClick={close}
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <div className="test-modal-content">
              <div className="tcard-q test-modal-q">&ldquo;</div>
              <div className="test-modal-body">
                {paragraphs(active.body).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="test-modal-attrib">
                <div className="tcard-name">{active.name}</div>
                <div className="tcard-role">{active.role}</div>
                {active.date && (
                  <div className="tcard-date">{formatDate(active.date)}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
