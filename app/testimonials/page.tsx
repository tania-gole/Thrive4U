import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What clients say about coaching with Thrive4U.",
};

const testimonials = [
  {
    quote:
      "Working with Sanah gave me the clarity I had been chasing for years. Her process is calm, structured, and genuinely transformative.",
    name: "A.K.",
    role: "Product Manager",
  },
  {
    quote:
      "Sanah holds space in a way that makes you actually want to do the work. I left every session feeling lighter and more focused.",
    name: "M.S.",
    role: "Founder",
  },
  {
    quote:
      "I came in unsure what I needed. I left with direction, confidence, and tools I still use every day.",
    name: "R.D.",
    role: "Educator",
  },
];

export default function TestimonialsPage() {
  return (
    <section className="section container">
      <h1>Testimonials</h1>
      <p className="lead muted">Real words from real clients.</p>

      <div>
        {testimonials.map((t) => (
          <div key={t.name} className="testimonial">
            <blockquote>“{t.quote}”</blockquote>
            <cite>
              — {t.name}, {t.role}
            </cite>
          </div>
        ))}
      </div>
    </section>
  );
}
