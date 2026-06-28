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
      "Through yoga, meditation, mindful breathing, and conscious nutrition, I create the balance, energy, and clarity that ground me every day.",
    story: (
      <>
        <p>Wellness is not simply something I teach; it is how I choose to live.</p>
        <p>Yoga, mindfulness, conscious breathing, and meditation are part of my daily routine. They help me slow down, reconnect with myself, and approach life with greater clarity, calm, and intention.</p>
        <p>These practices keep me grounded during demanding moments and remind me to create space for stillness, reflection, and renewal. I also believe that nourishing the body is an essential part of caring for the mind. Eating well, moving regularly, and listening to what my body needs allow me to feel energised, balanced, and at my best.</p>
        <p>For me, wellness is not about perfection. It is about making thoughtful choices each day that bring me back to my center.</p>
      </>
    ),
    images: ["/images/Wellness.jpeg", "/images/Wellness2.jpeg", "/images/Wellness3.jpeg"],
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
      "I use yoga, mindfulness, and service to empower women, support my community, and make wellbeing accessible to those who need it most.",
    story: (
      <>
        <p>Giving back to my community has always been an important part of who I am.</p>
        <p>Through yoga, mindfulness, and acts of service, I create opportunities for people to experience greater calm, confidence, and connection in their lives. I regularly share yoga and wellbeing practices with members of my community, using what I have learned to support and uplift others.</p>
        <p>I am especially passionate about empowering women and sharing practical knowledge with those who may not otherwise have access to these tools. Whether I am leading a yoga session, supporting women as they build their confidence, or offering guidance rooted in mindfulness, my intention is always to make wellbeing more inclusive and accessible.</p>
        <p>Service reminds me that even small actions can create meaningful change. By sharing my knowledge and experience, I hope to help others recognise their own strength, develop greater self-belief, and move forward with purpose.</p>
      </>
    ),
    images: ["/images/Service.jpeg", "/images/Service2.jpeg"],
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
      "From Kilimanjaro to Everest Base Camp, every climb has strengthened my resilience and deepened my connection with nature.",
    story: (
      <>
        <p>Mountaineering and trekking have taken me to some of the world’s most extraordinary landscapes, including Mount Kinabalu, Mount Kilimanjaro, and Everest Base Camp.</p>
        <p>Each journey has challenged me physically and mentally while offering a powerful sense of freedom, perspective, and connection. I love the experience of moving through nature, adapting to changing conditions, and taking each climb one step at a time.</p>
        <p>The mountains demand patience, preparation, humility, and resilience. They remind me that progress is rarely achieved all at once; it is built through consistent effort, self-belief, and the willingness to continue when the path becomes difficult.</p>
        <p>Every trek gives me the opportunity to step away from the noise of everyday life and return with renewed energy and clarity. In the mountains, I reconnect with nature, test my limits, and rediscover what truly matters.</p>
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
                    <Image
                      src={src}
                      alt={`${active.title} ${i + 1}`}
                      width={600}
                      height={600}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
