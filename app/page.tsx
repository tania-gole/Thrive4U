import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <h1>Coaching for the life you actually want.</h1>
        <p className="lead">
          Thrive4U is a one-on-one coaching practice helping you move from stuck
          to clear — with practical tools, honest reflection, and steady
          support.
        </p>
        <Link href="/process" className="btn">
          See how it works
        </Link>

        <div className="video-wrap">
          {/* Replace VIDEO_ID with the real YouTube video ID */}
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Thrive4U intro video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="section container">
        <div className="grid">
          <div className="card">
            <h3>1:1 Coaching</h3>
            <p>
              Personalized sessions focused on the change you want to make,
              backed by a clear plan.
            </p>
          </div>
          <div className="card">
            <h3>Consulting</h3>
            <p>
              Strategic support for individuals and small teams navigating
              transitions or growth.
            </p>
          </div>
          <div className="card">
            <h3>Workshops</h3>
            <p>
              Group sessions on clarity, resilience, and leading yourself well.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
