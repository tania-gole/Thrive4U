"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#home" className="nav-logo" aria-label="Thrive4U home">
        <Image
          src="/images/Logo.jpeg"
          alt="Thrive4U"
          width={130}
          height={165}
          priority
        />
      </a>
    </nav>
  );
}
