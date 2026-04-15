import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thrive4U",
  description:
    "Thrive4U Coaching & Consulting — Sanah Singh Tomar, ICF Master Certified Coach (MCC) and EMCC Senior Practitioner. Partnering with women leaders, high potentials, and C-suite executives for real, measurable transformation.",
  openGraph: {
    title: "Thrive4U, Coaching & Consulting",
    description:
      "Sanah Singh Tomar — ICF Master Certified Coach. Coaching for women leaders, high potentials, and C-suite executives.",
    siteName: "Thrive4U",
    type: "website",
    images: [
      {
        url: "/images/Logo.jpeg",
        width: 325,
        height: 415,
        alt: "Thrive4U",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Thrive4U",
    description:
      "Sanah Singh Tomar — ICF Master Certified Coach. Coaching for women leaders, high potentials, and C-suite executives.",
    images: ["/images/Logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
