import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Meet Sanah Singh Tomar, life coach and consultant behind Thrive4U.",
};

export default function AboutPage() {
  return (
    <section className="section container">
      <h1>About Me</h1>
      <p className="lead muted">
        I&apos;m Sanah Singh Tomar — a life coach and consultant helping people
        live with intention, clarity, and self-trust.
      </p>

      <h2>My story</h2>
      <p>
        My path to coaching came from years of working alongside people in
        transition — career pivots, big life moves, and the quieter shifts that
        often matter most. I built Thrive4U to be a calm, practical space where
        clients can get honest about where they are and where they want to go.
      </p>

      <h2>Coaching philosophy</h2>
      <p>
        I believe meaningful change happens in small, consistent steps. My
        approach is grounded in compassionate accountability: I&apos;ll meet you
        where you are, and I won&apos;t let you stay there longer than you want
        to.
      </p>

      <h2>Credentials</h2>
      <ul>
        <li>Certified Life Coach</li>
        <li>Background in consulting and leadership development</li>
        <li>Continuous professional training in coaching methodology</li>
      </ul>
    </section>
  );
}
