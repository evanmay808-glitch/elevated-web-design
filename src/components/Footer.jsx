import { CONTACT, emailLinkProps } from "../lib/site";
import { ArrowUpRight } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--bg-soft))] py-10" data-testid="footer">
    <div className="mx-auto max-w-6xl px-5">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <a href="/" className="inline-flex items-center gap-3">
            <img src="/logo.png" alt="" className="h-10 w-10 object-contain" />
            <span className="font-semibold tracking-tight">Evans <span className="font-normal text-[hsl(var(--muted))]">Web Design</span></span>
          </a>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[hsl(var(--muted))]">Straightforward websites for businesses that want to look established and make it easier for customers to get in touch.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[hsl(var(--muted))]">
          <a href="/#work" className="hover:text-[hsl(var(--fg))]">Work</a>
          <a href="/#services" className="hover:text-[hsl(var(--fg))]">Services</a>
          <a href="/#pricing" className="hover:text-[hsl(var(--fg))]">Pricing</a>
          <a href="/#contact" className="hover:text-[hsl(var(--fg))]">Contact</a>
          <a href="/privacy" className="hover:text-[hsl(var(--fg))]">Privacy</a>
          <a href="/cookies" className="hover:text-[hsl(var(--fg))]">Cookies</a>
          <a href="/terms" className="hover:text-[hsl(var(--fg))]">Terms</a>
          <button type="button" onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))} className="hover:text-[hsl(var(--fg))]">Cookie settings</button>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-2 border-t border-[hsl(var(--border))] pt-5 text-xs text-[hsl(var(--muted))] sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} {CONTACT.brand}. All rights reserved.</span>
        <a {...emailLinkProps("Website enquiry — Evans Web Design")} className="inline-flex items-center gap-1 hover:text-[hsl(var(--fg))]">{CONTACT.email} <ArrowUpRight size={12} /></a>
      </div>
    </div>
  </footer>
);
