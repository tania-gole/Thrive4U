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
        <p>I founded Thrive4U from the ground up, transforming a personal vision into a global coaching practice focused on meaningful and lasting change.</p>
        <p>Building the business required me to navigate uncertainty, make difficult decisions, remain resilient, and continually grow alongside the people I serve. I have experienced many of the same challenges my clients face: balancing ambition and wellbeing, overcoming self-doubt, adapting to change, and finding the courage to move forward.</p>
        <p>Through Thrive4U, I support women in recognising their strengths, finding their voice, and creating greater independence in both their professional and personal lives. My work is centered on helping women move beyond limiting beliefs, build confidence, and take intentional steps towards the future they want.</p>
        <p>I do not coach from theory alone. I draw from the realities of building, leading, adapting, and starting again. Thrive4U reflects my belief that every woman deserves the confidence, freedom, and opportunity to become the author of her own life.</p>
      </>
    ),
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
