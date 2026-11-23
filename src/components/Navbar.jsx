import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Moon, Sun } from "lucide-react";
import { emailLinkProps } from "../lib/site";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("evans-theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    try {
      localStorage.setItem("evans-theme", darkMode ? "dark" : "light");
    } catch {
      // Theme still works for this visit when storage is unavailable.
    }
  }, [darkMode]);

  const themeToggle = (
    <button
      type="button"
      onClick={() => setDarkMode(value => !value)}
      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[hsl(var(--border))] text-[hsl(var(--fg))] transition-colors hover:bg-[hsl(var(--bg-soft))]"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-5 mt-3">
        <div className="flex items-center justify-between rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))]/95 px-4 py-3 shadow-sm backdrop-blur">
          <a href="/" className="flex items-center gap-3" aria-label="Evans Web Design home" onClick={() => setOpen(false)}>
            <img src="/logo.png" alt="" className="h-10 w-10 object-contain" />
            <span className="font-semibold tracking-tight text-[hsl(var(--fg))]">Evans <span className="font-normal text-[hsl(var(--muted))]">Web Design</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {links.map(link => <a key={link.href} href={link.href} className="text-sm text-[hsl(var(--muted))] hover:text-[hsl(var(--fg))] transition-colors">{link.label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            {themeToggle}
            <a {...emailLinkProps("Free homepage concept request")} className="hidden sm:inline-flex btn-accent items-center gap-2 rounded-full px-5 py-2.5 text-sm">
              Get a free demo <ArrowUpRight size={15} />
            </a>
            <button type="button" onClick={() => setOpen(!open)} className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-[hsl(var(--border))]" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="md:hidden mt-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-3 shadow-lg" aria-label="Mobile navigation">
            {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-sm text-[hsl(var(--muted))] hover:bg-[hsl(var(--bg-soft))] hover:text-[hsl(var(--fg))]">{link.label}</a>)}
            <a {...emailLinkProps("Free homepage concept request")} onClick={() => setOpen(false)} className="btn-accent mt-2 flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm">Get a free demo <ArrowUpRight size={15} /></a>
          </nav>
        )}
      </div>
    </header>
  );
};
