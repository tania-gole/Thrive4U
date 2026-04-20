import Image from "next/image";
import Testimonials from "@/components/Testimonials";

const clientLogos = [
  { src: "/images/Google-Logo.webp", alt: "Google" },
  { src: "/images/McKinsey-Logo.png", alt: "McKinsey" },
  { src: "/images/BCG-Logo.png", alt: "BCG" },
  { src: "/images/HSBC-Logo.jpg", alt: "HSBC" },
  { src: "/images/EY-Logo.jpg", alt: "EY" },
  { src: "/images/Accenture-Logo.png", alt: "Accenture" },
  { src: "/images/Pfizer-Logo.avif", alt: "Pfizer" },
  { src: "/images/Pepsi-Logo.avif", alt: "Pepsi" },
  { src: "/images/Cisco-Logo.jpg", alt: "Cisco" },
  { src: "/images/Intel-Logo.svg", alt: "Intel" },
  { src: "/images/Dyson-Logo.png", alt: "Dyson" },
  { src: "/images/LEGO-logo.png", alt: "LEGO" },
  { src: "/images/Walt-Disney-Logo.png", alt: "Walt Disney" },
  { src: "/images/Amex-Logo.png", alt: "American Express" },
  { src: "/images/Wells-Fargo-Logo.png", alt: "Wells Fargo" },
];

const supportingCerts = [
  {
    img: "/images/Harvard-Certificate.png",
    title: "Lifestyle & Wellness Coaching",
    issuer: "Harvard Medical School",
  },
  {
    img: "/images/CMA-Logo.jpeg",
    title: "Certified Master Coach",
    issuer: "Coach Masters Academy",
  },
  {
    img: "/images/GCG-Certificate.png",
    title: "Certified Global Leadership Assessment Coach",
    issuer: "Global Coach Group",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section id="home">
        <div className="hero-left">
          <div className="hero-left-inner">
            <span className="hero-eyebrow">Sanah Singh Tomar</span>
            <h1 className="hero-h1">
              Your transformation
              <br />
              partner.
            </h1>
            <p className="hero-body">
              ICF Master Certified Coach (MCC) and EMCC Senior Practitioner,
              partnering with women leaders, high potentials, and C-suite
              executives for real, measurable transformation.
            </p>

            <div className="hero-socials">
              <a
                href="mailto:sanahthrive4u@gmail.com"
                className="hero-social"
                aria-label="Email"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    fill="rgba(60,26,0,0.7)"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                    fill="rgba(60,26,0,0.7)"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sanahthrive4u/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
                    fill="rgba(60,26,0,0.7)"
                  />
                </svg>
              </a>
            </div>

            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">
                Start your journey
              </a>
              <a href="#about" className="btn-secondary">
                Learn more
              </a>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <Image
            src="/images/Headshot-Sanah.jpg"
            alt="Sanah Singh Tomar"
            width={960}
            height={1280}
            className="hero-photo"
            priority
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about-bg" />
        <div className="about-overlay" />
        <div className="about-fade" />
        <div className="about-inner">
          <div className="stagger">
            <span className="sec-eyebrow about-eyebrow">My story</span>
            <h2 className="about-h2">
              Every individual
              <br />
              is <em>unique.</em>
            </h2>
            <p className="about-p">
              I started my career as a hotelier with the Oberoi Group,
              learning early that people are at the heart of everything. That
              belief has never left me.
            </p>
            <p className="about-p">
              Over 25 years, I&apos;ve worked across HR, training, coaching and
              consulting, with organisations as varied as Google, McKinsey, BCG,
              Pfizer, Walt Disney, and the US Airforce, across the US, Europe,
              and Asia Pacific.
            </p>
            <p className="about-p">
              My work goes beyond surface-level goals. I engage the whole
              person, uncovering patterns, challenging thinking, building
              behaviours that sustain performance in today&apos;s complex world.
            </p>
            <a href="#contact" className="btn-gold">
              Work with me
            </a>
          </div>
          <div />
        </div>
      </section>

      {/* CREDENTIALS */}
      <section id="credentials">
        <div className="cred-inner">
          <span className="sec-eyebrow cred-eyebrow reveal">
            Qualifications &amp; Accreditations
          </span>
          <h2 className="cred-h2 reveal">
            Credentials that <em>speak for themselves</em>
          </h2>

          <div className="cred-row-2 stagger">
            <div className="cred-card-hero">
              <Image
                src="/images/ICF-Logo.jpeg"
                alt="ICF"
                width={130}
                height={130}
              />
              <div>
                <div className="cred-tag">Highest ICF Level</div>
                <div className="cred-title">Master Certified Coach (MCC)</div>
                <div className="cred-issuer">
                  International Coaching Federation
                </div>
              </div>
            </div>
            <div className="cred-card-hero">
              <Image
                src="/images/EMCC-Logo.jpeg"
                alt="EMCC"
                width={130}
                height={130}
              />
              <div>
                <div className="cred-tag">Senior Practitioner</div>
                <div className="cred-title">EMCC Senior Practitioner</div>
                <div className="cred-issuer">
                  European Mentoring &amp; Coaching Council
                </div>
              </div>
            </div>
          </div>

          <div className="cred-row-3 stagger">
            {supportingCerts.map((c) => (
              <div className="cred-card-sm" key={c.title}>
                <Image src={c.img} alt={c.title} width={120} height={120} />
                <div>
                  <div className="cred-title">{c.title}</div>
                  <div className="cred-issuer">{c.issuer}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="stats stagger">
            <div className="stat">
              <div className="stat-n">25+</div>
              <div className="stat-l">Years</div>
            </div>
            <div className="stat">
              <div className="stat-n">6500+</div>
              <div className="stat-l">Coached and Trained</div>
            </div>
            <div className="stat">
              <div className="stat-n">5,000+</div>
              <div className="stat-l">Hours</div>
            </div>
          </div>

          <div>
            <span className="clients-label">Trusted by professionals at</span>
            <div className="clients-marquee">
              <div className="clients-track">
                {[...clientLogos, ...clientLogos].map((l, i) => (
                  <Image
                    key={`${l.alt}-${i}`}
                    src={l.src}
                    alt={l.alt}
                    width={140}
                    height={56}
                    style={{ objectFit: "contain" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
        <div className="process-inner">
          <div className="process-head reveal">
            <span className="sec-eyebrow">My process</span>
            <h2 className="process-h2">
              How we work <em>together</em>
            </h2>
          </div>

          <div className="process-logo">
            <Image
              src="/images/Logo.jpeg"
              alt="Thrive4U"
              width={325}
              height={415}
              className="process-logo-img"
            />
          </div>

          <div className="pillars stagger">
            <div className="pillar">
              <div className="pillar-title">Reflect</div>
              <div className="pillar-body">
                We begin by holding up a mirror. Uncovering your patterns,
                beliefs, and blind spots so you can see yourself with full
                clarity and without judgement.
              </div>
            </div>
            <div className="pillar pillar-red">
              <div className="pillar-title">Root</div>
              <div className="pillar-body">
                We go deep. Identifying your values, strengths, and the core
                beliefs that either anchor or limit you, building the foundation
                for lasting change.
              </div>
            </div>
            <div className="pillar">
              <div className="pillar-title">Rise</div>
              <div className="pillar-body">
                We build upward. Developing new habits, behaviours, and ways of
                thinking that allow you to grow consciously and lead with
                greater impact.
              </div>
            </div>
            <div className="pillar pillar-red">
              <div className="pillar-title">Thrive</div>
              <div className="pillar-body">
                We move. With clarity, confidence, and intention, you step
                forward into your next chapter, fully equipped for the
                complexity ahead.
              </div>
            </div>
          </div>

          <div className="process-quote reveal">
            <p>
              &ldquo;Meaningful change isn&apos;t accidental. It&apos;s
              consciously created.&rdquo;
            </p>
            <div className="process-quote-sub">
              Each pillar builds on the last. Together they form a complete
              journey, from awareness to action, from insight to transformation.
              This is how real, lasting change happens.
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-inner stagger">
          <span className="sec-eyebrow">Contact</span>
          <h2 className="contact-h2">
            Ready to <em>begin?</em>
          </h2>

          <div className="cta-box">
            <h3>Start your journey</h3>
            <p>
              Take the first step towards the life you truly want.
              <br />A single conversation can change everything.
            </p>
            <a href="mailto:sanahthrive4u@gmail.com" className="btn-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                  fill="#C9900C"
                />
              </svg>
              Send me an email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
