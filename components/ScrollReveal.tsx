"use client";

import { useEffect } from "react";

/**
 * Mounts a single IntersectionObserver that watches every element with
 * `.reveal` or `.stagger` and adds `.is-visible` once they scroll into view.
 * Fires once per element (no toggle on scroll-out).
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .stagger");
    if (!els.length) return;

    // Respect users with reduced-motion preference: skip animations entirely.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // Mark JS as ready — CSS uses this to actually hide reveal items.
    // Without this class, content stays visible (graceful fallback).
    document.body.classList.add("js-ready");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => {
      // If an element is already in view at mount, reveal immediately.
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        el.classList.add("is-visible");
      } else {
        obs.observe(el);
      }
    });

    return () => {
      obs.disconnect();
      document.body.classList.remove("js-ready");
    };
  }, []);

  return null;
}
