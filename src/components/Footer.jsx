import { useState } from "react";
import { CONTACT, isMobile, emailLinkProps } from "../lib/site";

export const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handlePhoneClick = isMobile
    ? undefined
    : (e) => {
        e.preventDefault();
        navigator.clipboard?.writeText(CONTACT.phoneDisplay);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      };

  return (
    <footer
      className="relative z-20 border-t border-[hsl(var(--border))] py-12"
      data-testid="footer"
    >
      <div className="mx-auto max-w-6xl px-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[hsl(var(--muted))]">
        <div>
          © {new Date().getFullYear()} {CONTACT.brand}. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a
            {...emailLinkProps("Website enquiry — Evans Web Design")}
            className="hover:text-[hsl(var(--fg))] transition-colors"
          >
            {CONTACT.email}
          </a>
          <span>·</span>
          <a
            href={CONTACT.tel}
            onClick={handlePhoneClick}
            className="hover:text-[hsl(var(--fg))] transition-colors"
          >
            {copied ? "Number copied!" : CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </footer>
  );
};
