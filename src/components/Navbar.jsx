import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { CONTACT } from "../lib/site";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      data-testid="navbar"
    >
      <div
        className={`mx-auto max-w-6xl px-5 mt-3 flex items-center justify-between rounded-2xl transition-all duration-300 ${
          scrolled ? "glass py-3 shadow-2xl" : "py-4"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 group" data-testid="brand-logo">
          <img
            src="/logo.png"
            alt="Elevated Web Design"
            className="h-9 w-9 rounded-xl object-cover"
          />
          <span className="font-display font-semibold text-[15px] tracking-tight hidden sm:block">
            Elevated<span className="text-[hsl(var(--muted))]"> Web Design</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="px-4 py-2 text-sm text-[hsl(var(--muted))] hover:text-[hsl(var(--fg))] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          
            href={CONTACT.mailto}
            data-testid="nav-quote-btn"
            className="btn-accent hidden sm:inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm"
          >
            Get a free demo <ArrowUpRight size={16} />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            data-testid="mobile-menu-toggle"
            className="md:hidden grid place-items-center h-10 w-10 rounded-xl glass"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-2 glass rounded-2xl p-3"
            data-testid="mobile-menu"
          >
            {links.map((l) => (
              
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-[hsl(var(--muted))] hover:text-[hsl(var(--fg))] hover:bg-[hsl(var(--surface))] transition-colors"
              >
                {l.label}
              </a>
            ))}
            
              href={CONTACT.mailto}
              className="btn-accent mt-1 flex items-center justify-center gap-1.5 rounded-xl px-5 py-3 text-sm"
            >
              Get a free demo <ArrowUpRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
