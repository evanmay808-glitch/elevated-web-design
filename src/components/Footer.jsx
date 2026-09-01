import { CONTACT } from "../lib/site";

export const Footer = () => {
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
          <a href={CONTACT.mailto} className="hover:text-[hsl(var(--fg))] transition-colors">
            {CONTACT.email}
          </a>
          <span>·</span>
          <a href={CONTACT.tel} className="hover:text-[hsl(var(--fg))] transition-colors">
            {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </footer>
  );
};
