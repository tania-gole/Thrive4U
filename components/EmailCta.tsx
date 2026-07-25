"use client";

import { useCallback, useEffect, useState } from "react";

const EMAIL = "sanahthrive4u@gmail.com";

/**
 * Contact call-to-action.
 *
 * The mailto: link only opens a composer when the visitor's device has a
 * default mail program registered — on a machine where none is set up it does
 * nothing at all, silently. So the address is also shown in full and can be
 * copied, which means the CTA never dead-ends.
 */
export default function EmailCta() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      // Clipboard API unavailable (older browser, or a non-secure origin).
      // Select the address instead so the visitor can copy it by hand.
      const el = document.getElementById("cta-email-address");
      if (!el) return;
      const range = document.createRange();
      range.selectNodeContents(el);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
  }, []);

  return (
    <>
      <a href={`mailto:${EMAIL}`} className="btn-white">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            fill="#C9900C"
          />
        </svg>
        Send me an email
      </a>

      <div className="cta-email-row">
        <span className="cta-email-label">or write to</span>
        <span id="cta-email-address" className="cta-email-address">
          {EMAIL}
        </span>
        <button
          type="button"
          className="cta-copy"
          onClick={copy}
          aria-label={`Copy email address ${EMAIL}`}
        >
          {copied ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="11" height="11" rx="2" />
              <path d="M5 15V5a2 2 0 0 1 2-2h10" />
            </svg>
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <span className="cta-copy-status" role="status" aria-live="polite">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </>
  );
}
