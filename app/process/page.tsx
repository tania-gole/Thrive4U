import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Process",
  description:
    "How coaching with Thrive4U works — from the first conversation to lasting change.",
};

const steps = [
  {
    title: "1. Discovery call",
    body: "A free 30-minute call to understand what you want to work on and see if we’re a good fit.",
  },
  {
    title: "2. Foundation session",
    body: "A deeper session where we map your current reality, your goals, and the obstacles in between.",
  },
  {
    title: "3. Ongoing coaching",
    body: "Regular sessions tailored to your pace — combining reflection, structure, and clear next steps.",
  },
  {
    title: "4. Integration",
    body: "We close the engagement with a review of growth, lessons learned, and a plan for what comes next.",
  },
];

export default function ProcessPage() {
  return (
    <section className="section container">
      <h1>My Process</h1>
      <p className="lead muted">
        A simple, structured path designed to create real momentum.
      </p>

      <div className="grid">
        {steps.map((s) => (
          <div key={s.title} className="card">
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
