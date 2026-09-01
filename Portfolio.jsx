import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO } from "../lib/site";

const card = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Portfolio = () => {
  return (
    <section id="work" className="relative z-20 py-24 sm:py-32" data-testid="portfolio-section">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Selected work</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl mt-4 leading-tight">
              Live sites, real businesses.
            </h2>
          </div>
          <p className="text-[hsl(var(--muted))] text-sm max-w-xs">
            Click any project to open the live website in a new tab.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {PORTFOLIO.map((p, i) => (
            <motion.a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              data-testid={`portfolio-card-${i}`}
              className="group glass rounded-3xl overflow-hidden hover:border-[hsl(var(--accent)/0.5)] transition-all duration-300"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[hsl(var(--bg-soft))]">
                <iframe
                  title={p.title}
                  src={p.url}
                  loading="lazy"
                  className="portfolio-frame absolute top-0 left-0"
                  style={{
                    width: "1440px",
                    height: "900px",
                    transform: "scale(0.42)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--bg))] via-transparent to-transparent opacity-70" />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full glass px-3 py-1 text-xs text-[hsl(var(--muted))]">
                    {p.tag}
                  </span>
                </div>
                <div className="absolute top-4 right-4 grid place-items-center h-10 w-10 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--bg))] opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-semibold text-xl">{p.title}</h3>
                  <span className="text-xs text-[hsl(var(--accent))] group-hover:underline">
                    Visit site
                  </span>
                </div>
                <p className="text-[hsl(var(--muted))] text-sm mt-2">{p.blurb}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
