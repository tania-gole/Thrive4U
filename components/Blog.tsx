"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type Post = {
  id: string;
  date: string;
  body: string;
  image?: string;
};

const posts: Post[] = [
  {
    id: "pivot",
    date: "1 week ago",
    image: "/images/Article1.jpeg",
    body: `How can I stay relevant? A coaching question that's showing up a lot in recent years.

For most, the answer that's coming from within is…

Don't be afraid to Pivot!

Two of my clients are medical professionals (Doctors), who are now business leaders in pharma and technology respectively. They got MBAs and technical certifications after they were practicing doctors. (How forward thinking was that?)

Career longevity comes from #curiosity, being #competitive, learning soft skills, #networking unapologetically, and not being overwhelmed with the rate of change.

How quickly are you willing to pivot? Is this your Pivot year?

Be #strategic, think through, put your energy and attention in that direction. Become friends with failure and go do it anyway.

Brianna Wiest has written a book by the same name… that can motivate you daily if you are in that space.

#Careerlongevity #fear #adapting #changemanagement`,
  },
  {
    id: "sunday",
    date: "2 weeks ago",
    body: `Is Sunday the right day to be on LinkedIn? Will anyone read the post? Can I write about something that may not be work related but matters to me?

What does this say about who I am? How do we know what is appropriate here?

Eight years ago when I started writing here, that was some of my internal chatter. It still shows up some days. It is also the internal conflict of many that want to show up here, but don't.

#LinkedIn's mission is to connect the professionals of the world and make them more #productive and #successful.

If what you write about supports that, then it is appropriate.

If it helps you #connect with others, then it works. If it helps you #build your talent of writing, expressing and in the process becoming successful, that should work too.

Finding your #voice and expressing it without the #fear of judgement is hard to do. Yet, owning yourself completely and authentically is one of the most valuable human traits one can develop to live successfully.

What can be more appropriate than that?

Any thoughts?`,
  },
  {
    id: "books",
    date: "4 weeks ago",
    body: `A lot of my clients ask me to share how I understand the world. Here is a view of my constant companions.

Some people read to escape. I usually read to return — to myself 😊 That helps me serve others.

Some of my favourite genres are here:
💡 #Performance books sharpen execution.
💡 #Psychology books expand understanding of human behaviour.
💡 #Spiritual books create space between thought and wisdom.

Over the years, I've realised that #coaching at the highest level is not built only through certifications or conversations — it is built through continuously refining the quality of our inner world.

Have you read any of these or are you reading something that could help me grow further?

#books #growth #innerworld`,
  },
  {
    id: "telephone",
    date: "1 month ago",
    image: "/images/Article4.jpeg",
    body: `I am choosing this visual to represent the work that I do.

A restored London telephone booth — once designed for noise, urgency, interruption, and constant communication — now quietly growing flowers from within.

That, to me, feels a lot like #coaching.

Because most of us live like open telephone lines. Ringing!! Constantly receiving opinions, expectations, pressure, comparison, information, advice, and noise. Especially the voices in the space between our own ears.

Coaching offers something rare in today's world: a confidential, trusting, psychologically safe space where a person can pause long enough to truly hear themselves again.

And something beautiful can happen in that #pause.
#Awareness deepens.
#Clarity begins to bloom.
#Possibilities begin to expand.

At its heart, coaching is simply a powerful conversation — one that can foster understanding, accountability, and meaningful growth.

A #coach is not there to tell you who to become. They are there to help you listen more deeply to who you already are beneath the noise.

Unlike family or friends, a coach brings no personal agenda, emotional entanglement, judgement, or need to direct your life. They become a clear mirror — helping you see yourself more honestly and more fully.

You may lean on a coach for a season. But the purpose of coaching is never dependence. It is greater #ownership and personal #agency.

Growth does not always come from adding more noise to our lives. It mostly begins when we finally create enough quiet and #stillness for something within us to flower.

Coaches do you agree, and others, have you experienced this pause yet?

#internationalcoachingweek`,
  },
];

function renderBody(body: string) {
  const paragraphs = body
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);

  return paragraphs.map((para, pi) => {
    const parts = para.split(/(#[A-Za-z0-9]+)/g);
    return (
      <p key={pi}>
        {parts.map((part, i) =>
          /^#[A-Za-z0-9]+$/.test(part) ? (
            <span key={i} className="blog-tag">{part}</span>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </p>
    );
  });
}

const PAGE_SIZE = 2;

export default function Blog() {
  const [page, setPage] = useState(0);
  const [active, setActive] = useState<Post | null>(null);
  const totalPages = Math.ceil(posts.length / PAGE_SIZE);
  const visible = posts.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

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
      <section id="blog">
        <div className="blog-inner">
          <span className="sec-eyebrow blog-eyebrow reveal">From the journal</span>
          <h2 className="blog-h2 reveal">
            Notes on <em>coaching &amp; growth</em>
          </h2>

          <div className="blog-grid" key={page}>
            {visible.map((p) => (
              <button
                type="button"
                className="blog-card"
                key={p.id}
                onClick={() => setActive(p)}
                aria-label={`Read full post from ${p.date}`}
              >
                <header className="blog-head">
                  <div className="blog-avatar">
                    <Image
                      src="/images/Headshot-Sanah.jpg"
                      alt="Sanah Singh Tomar"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="blog-meta">
                    <div className="blog-name">Sanah Singh Tomar</div>
                    <div className="blog-role">
                      Executive Growth Coach · ICF-MCC · EMCC Senior Practitioner
                    </div>
                    <div className="blog-date">{p.date}</div>
                  </div>
                </header>

                {p.image && (
                  <div className="blog-image">
                    <Image
                      src={p.image}
                      alt=""
                      width={800}
                      height={500}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                )}

                <div className="blog-body">{renderBody(p.body)}</div>
                <span className="blog-read-more">Read more →</span>
              </button>
            ))}
          </div>

          <div className="blog-nav">
            <button
              type="button"
              className="blog-nav-btn"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous posts"
            >
              ← Previous
            </button>
            <div className="blog-dots" aria-hidden="true">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`blog-dot${i === page ? " is-active" : ""}`}
                  onClick={() => setPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              className="blog-nav-btn"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              aria-label="Next posts"
            >
              Next →
            </button>
          </div>
        </div>
      </section>

      {active && (
        <div
          className="blog-modal-overlay"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Blog post"
        >
          <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="blog-modal-close"
              onClick={close}
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <div className="blog-modal-content">
              <header className="blog-head blog-modal-head">
                <div className="blog-avatar">
                  <Image
                    src="/images/Headshot-Sanah.jpg"
                    alt="Sanah Singh Tomar"
                    width={56}
                    height={56}
                  />
                </div>
                <div className="blog-meta">
                  <div className="blog-name">Sanah Singh Tomar</div>
                  <div className="blog-role">
                    Executive Growth Coach · ICF-MCC · EMCC Senior Practitioner
                  </div>
                  <div className="blog-date">{active.date}</div>
                </div>
              </header>

              {active.image && (
                <div className="blog-modal-image">
                  <Image
                    src={active.image}
                    alt=""
                    width={1200}
                    height={800}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
              )}

              <div className="blog-modal-body">{renderBody(active.body)}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
