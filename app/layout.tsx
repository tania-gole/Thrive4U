import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Thrive4U Coaching & Consulting",
    template: "%s | Thrive4U",
  },
  description:
    "Thrive4U Coaching & Consulting — life coaching with Sanah Singh Tomar. Practical guidance, grounded process, and meaningful change.",
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
