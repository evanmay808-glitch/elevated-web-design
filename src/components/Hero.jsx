import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Sparkles } from "lucide-react";
import { CONTACT } from "../lib/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden" data-testid="hero-section">
      <div className="relative z-20 mx-auto max-w-6xl px-5 min-h-[100svh] flex flex-col justify-center pt-24 pb-16">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-[hsl(var(--muted))] mb-6"
          >
            <Sparkles size={14} className="text-[hsl(var(--accent))]" />
            Freelance web designer · UK based
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.02]"
          >
            More customers, from a website that actually looks <span className="text-gradient">elevated</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-base sm:text-lg text-[hsl(var(--muted))] max-w-xl leading-relaxed"
          >
            I design and build fast, modern websites for small businesses — built to look
            premium and turn visitors into paying customers. See a free homepage concept
            of your business before you commit to anything.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={CONTACT.mailto}
              data-testid="hero-quote-btn"
              className="btn-accent inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm"
            >
              Get a free website demo <ArrowUpRight size={17} />
            </a>
            <a
              href="#work"
              data-testid="hero-work-btn"
              className="btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm"
            >
              See my work
            </a>
            <a
              href={CONTACT.tel}
              data-testid="hero-call-btn"
              className="inline-flex items-center gap-2 px-3 py-3.5 text-sm text-[hsl(var(--muted))] hover:text-[hsl(var(--fg))] transition-colors"
            >
              <Phone size={16} /> {CONTACT.phoneDisplay}
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-6 text-xs text-[hsl(var(--muted))]">
            <div>
              <div className="font-display text-xl text-[hsl(var(--fg))]">Free</div>
              homepage concept
            </div>
            <div className="h-8 w-px bg-[hsl(var(--border))]" />
            <div>
              <div className="font-display text-xl text-[hsl(var(--fg))]">4</div>
              live projects
            </div>
            <div className="h-8 w-px bg-[hsl(var(--border))]" />
            <div>
              <div className="font-display text-xl text-[hsl(var(--fg))]">UK</div>
              based · quick reply
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
