import { motion } from "framer-motion";
import { Mail, Phone, Instagram, ArrowUpRight } from "lucide-react";
import { CONTACT } from "../lib/site";

const methods = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: CONTACT.mailto,
    testid: "contact-email",
    external: false,
  },
  {
    icon: Phone,
    label: "Call or text",
    value: CONTACT.phoneDisplay,
    href: CONTACT.tel,
    testid: "contact-phone",
    external: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: `@${CONTACT.instagram}`,
    href: CONTACT.instagramUrl,
    testid: "contact-instagram",
    external: true,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative z-20 py-24 sm:py-32" data-testid="contact-section">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-[2rem] p-8 sm:p-14 text-center relative overflow-hidden"
        >
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full blur-3xl opacity-20"
            style={{ background: "hsl(var(--accent))" }}
            aria-hidden="true"
          />
          <span className="section-eyebrow relative">Free homepage concept</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl mt-4 leading-tight relative">
            Not sure what your business could look like online?
          </h2>
          <p className="text-[hsl(var(--muted))] mt-4 max-w-xl mx-auto relative">
            I'll create a free homepage concept for your business. If you like it, we build
            the rest — if you don't, no worries. Message me directly, no forms, no waiting.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto relative">
            {methods.map((m) => {
              const Icon = m.icon;
              return (
                <a
                  key={m.label}
                  href={m.href}
                  data-testid={m.testid}
                  {...(m.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group rounded-2xl border border-[hsl(var(--border))] p-6 hover:border-[hsl(var(--accent)/0.6)] hover:bg-[hsl(var(--surface)/0.5)] transition-all duration-300 flex flex-col items-center gap-3"
                >
                  <span className="grid place-items-center h-12 w-12 rounded-xl bg-[hsl(var(--accent)/0.12)] text-[hsl(var(--accent))] group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </span>
                  <div>
                    <div className="text-xs text-[hsl(var(--muted))] uppercase tracking-wide">
                      {m.label}
                    </div>
                    <div className="font-display font-medium text-sm mt-1 flex items-center gap-1 justify-center">
                      {m.value}
                      <ArrowUpRight
                        size={14}
                        className="text-[hsl(var(--accent))] opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
