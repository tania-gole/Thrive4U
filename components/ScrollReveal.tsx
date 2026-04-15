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
      // Trigger when ~15% of the element is visible from the bottom of viewport.
      // Larger negative bottom margin = element must be more visible before
      // animating, so the user actually sees the fade-up effect happen.
      { threshold: 0.15, rootMargin: "0px 0px -120px 0px" }
    );

    // Observe everything (don't auto-reveal in-view elements). The IO will
    // fire immediately for anything already in view, triggering its animation.
    els.forEach((el) => obs.observe(el));

    return () => {
      obs.disconnect();
      document.body.classList.remove("js-ready");
    };
  }, []);

  return null;
}
