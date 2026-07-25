"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type Pillar = {
  id: string;
  title: string;
  icon: React.ReactNode;
  blurb: React.ReactNode;
  story: React.ReactNode;
  images?: string[];
};

const pillars: Pillar[] = [
  {
    id: "founder",
    title: "Founder of Thrive4U",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.39 6.96L22 10l-5.5 4.99L18 22l-6-3.6L6 22l1.5-7.01L2 10l7.61-1.04L12 2z" />
      </svg>
    ),
    blurb:
      "What began as a vision has grown into a global coaching practice centered on confidence, independence, and meaningful change.",
    story: (
      <>
        <p>I founded <strong>Thrive4U</strong> from a deeply held belief: that meaningful transformation begins when we have the courage to see ourselves clearly, challenge our limitations, and step into our fullest potential.</p>
        <p>What began as a personal vision has evolved into a global executive coaching and wellbeing practice, partnering with C-suite leaders, high-potential talent, and women seeking greater confidence, clarity, and independence in their lives and careers.</p>
        <p>Building Thrive4U has been a journey of courage, uncertainty, and reinvention. I have navigated difficult decisions, embraced change, balanced ambition with wellbeing, and continually evolved alongside the people I serve. Like many of my clients, I have experienced self-doubt, faced pivotal crossroads, and discovered that growth often asks us to let go of who we were to become who we are capable of being.</p>
        <p>This is why I do not coach from theory alone.</p>
        <p>I bring the lived experience of building, leading, adapting, and starting again. I understand the complexity of leadership, the pressure of high expectations, and the deeply human challenges that accompany success and change.</p>
        <p>Through Thrive4U, I partner with my clients to:</p>
        <ul>
          <li>Lead with greater clarity, confidence, and authenticity</li>
          <li>Navigate transitions and uncertainty with resilience</li>
          <li>Break through limiting beliefs and self-imposed barriers</li>
          <li>Strengthen their presence, influence, and impact</li>
          <li>Create success that is both meaningful and sustainable</li>
        </ul>
        <p>At the heart of Thrive4U is a simple yet powerful belief: when people reconnect with who they truly are and lead from that place of authenticity, they don’t just transform their own lives—they create a ripple effect that transforms the people, teams, and communities around them.</p>
        <p>My role is to hold up the mirror, ask the questions that matter, and create the space for lasting change.</p>
        <p>Because thriving isn’t about becoming someone else. It’s about having the courage to become more fully yourself.</p>
      </>
    ),
    images: ["/images/Founder1.jpeg"],
  },
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
      "Energy is the currency I exchange with the world — tending to it physically, mentally, emotionally, and spiritually is how I stay present.",
    story: (
      <>
        <p><strong>Wellness is not simply something I advocate; it is how I choose to live.</strong></p>
        <p>I believe that <strong>energy is the currency I exchange with the world</strong>. As a coach, the energy I bring into the room matters. It influences how deeply I listen, how present I am, the questions I ask, and the space I create for my clients to think, reflect, and grow.</p>
        <p>That is why <strong>energy management is at the heart of my own well-being practice</strong>.</p>
        <p>For me, holistic well-being means caring for the whole person—<strong>physical, mental, emotional, and spiritual</strong>. I have consciously invested in each of these dimensions over the past 15 years because I know that the quality of my energy directly impacts the quality of the work I do and I bring this expertise to the table for my clients as well.</p>
        <p>Yoga, mindfulness, conscious breathing, and meditation are part of my daily rhythm. They help me slow down, reconnect with myself, and approach life with greater clarity, calm, and intention.</p>
        <p>I also prioritise daily movement and physical strength. Swimming, strength training, and staying active help me sustain the physical energy.</p>
        <p>I pay attention to what I consume, choosing nourishing food and content that supports my energy and well-being. I value sleep as much as I value productivity.</p>
        <p>These practices keep me grounded through demanding moments and remind me to create space for <strong>stillness, reflection, recovery, and renewal</strong>.</p>
        <p>I don’t believe wellness is about following a rigid formula. It is about becoming more aware of what gives you energy, what drains it, and what you need to do to return to your centre.</p>
        <p>This is the philosophy I bring into my coaching.</p>
        <p>Together, we explore not just <strong>what you want to achieve</strong>, but <strong>how you want to feel while achieving it</strong>. Because sustainable performance, meaningful leadership, and a fulfilling life require more than managing time—they require managing the one resource you can never replenish: <strong>your energy</strong>.</p>
        <p><strong>Because when you manage your energy well, you don’t just perform better. You thrive.</strong></p>
      </>
    ),
    images: ["/images/Wellness.jpeg", "/images/Wellness2.jpeg", "/images/Wellness3.jpeg"],
  },
  {
    id: "service",
    title: "Service and Contribution",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    blurb:
      "From classrooms to soup kitchens, I share what I have learned to help women and my community find their own strength and possibility.",
    story: (
      <>
        <p>Contributing and giving back has always been an important part of who I am. I believe that the knowledge, skills, and experiences we gain become even more meaningful when we use them to uplift others.</p>
        <p>Over the years, I have volunteered in many ways—from teaching underprivileged children and serving meals to displaced people through Robin Hood India, to volunteering at a soup kitchen with Willing Hearts in Singapore. Today, I continue to serve the women in my community—helpers, young women, and seniors—by sharing practical wellbeing practices and creating spaces for connection, reflection, and growth.</p>
        <p>I am especially passionate about empowering women and making practical tools for wellbeing accessible to those who may not otherwise have access to them. Whether I am leading a yoga session or a hike, helping someone build confidence, or offering guidance rooted in mindfulness, my intention remains the same: to help people recognise their own strength and possibility.</p>
        <p>Service continually reminds me that even small acts can create meaningful change. By sharing my knowledge, time, and experience, I hope to help others cultivate greater self-belief, nurture their wellbeing, and move forward with greater confidence, clarity, and purpose.</p>
      </>
    ),
    images: ["/images/Service.jpeg", "/images/Service2.jpeg"],
  },
  {
    id: "human",
    title: "The Human behind the Coach",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
    blurb:
      "Mum, partner, trekker, reader, dancer, dog lover — the many dimensions that keep me curious, grounded, and deeply human.",
    story: (
      <>
        <p>Being a devoted mum to two young adults and an equal partner to my husband has been a deeply meaningful part of my world. My family has shaped me in countless ways and continues to be one of my greatest sources of joy, learning, and perspective.</p>
        <p>And then there is the part of me that feels most alive when I am outdoors.</p>
        <p>My love for nature, adventure, and physical fitness has drawn me to hiking and trekking in some of the world’s most extraordinary landscapes. My journeys have taken me to Tiger’s Nest in Bhutan, Mount Kinabalu in Malaysia, Mount Kilimanjaro in Africa, Everest Base Camp in Nepal, and Mount Rinjani in Indonesia.</p>
        <p>Every journey has challenged me physically and mentally while offering an incredible sense of freedom, perspective, and connection. I love the experience of moving through nature, adapting to changing conditions, and taking each climb one step—and one breath—at a time.</p>
        <p>The mountains have taught me some of life’s most valuable lessons. They demand patience, preparation, humility, and resilience. They remind me that progress is rarely achieved all at once; it is built through consistent effort, self-belief, and the willingness to keep going when the path becomes difficult.</p>
        <p>Every trek gives me the opportunity to step away from the noise of everyday life and return with renewed energy and clarity. In the mountains, I reconnect with nature, test my limits, and rediscover what truly matters.</p>
        <p>Beyond the mountains, I find joy in the simple things that make life rich—getting lost in a good book, listening to music, dancing with abandon, and spending time with dogs, with whom I seem to share an exceptional and rather effortless connection!</p>
        <p>These are the many dimensions of who I am—mother, partner, adventurer, reader, dancer, dog lover, and lifelong student of life. They keep me curious, grounded, energised, and connected to the very human experience that I bring into my work with others.</p>
      </>
    ),
    images: ["/images/Mountain1.jpeg", "/images/Mountain2.jpeg"],
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
            {active.images && active.images.length > 0 && (
              <div
                className={`wp-modal-gallery wp-modal-gallery-${active.images.length}`}
              >
                {active.images.map((src, i) => (
                  <div className="wp-modal-gallery-cell" key={src}>
                    {/* Sizing/cropping is owned by .wp-modal-gallery-* in CSS
                        so the single-image case can show a portrait uncropped. */}
                    <Image
                      src={src}
                      alt={`${active.title} ${i + 1}`}
                      width={600}
                      height={600}
                      sizes="(max-width: 640px) 90vw, 600px"
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="wp-modal-content">
              <div className="wp-icon wp-modal-icon" aria-hidden="true">{active.icon}</div>
              <h3 id="wp-modal-title" className="wp-modal-title">{active.title}</h3>
              <div className="wp-modal-body">{active.story}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
