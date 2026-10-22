import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { CONTACT, emailLinkProps } from "../lib/site";

const updates = [
  { label: "Text or image change", price: "£40" },
  { label: "Text + images update", price: "£60" },
  { label: "Complete redesign", price: "£100" },
];

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Pricing = () => {
  return (
    <section id="pricing" className="relative z-20 py-24 sm:py-32" data-testid="pricing-section">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl mb-14">
          <span className="section-eyebrow">Pricing</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl mt-4 leading-tight">
            Simple, honest pricing.
          </h2>
          <p className="text-[hsl(var(--muted))] mt-4 text-base sm:text-lg">
            No hidden fees. Start for just £299, or rent monthly for £30 (you have to pay more for updates though) — you decide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            data-testid="pricing-own-card"
            className="glass accent-glow rounded-3xl p-8 relative overflow-hidden"
          >
            <span className="absolute top-6 right-6 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--bg))] text-xs font-semibold px-3 py-1">
              Most popular
            </span>
            <h3 className="font-display font-semibold text-xl">Own your website</h3>
            <div className="mt-4 flex items-end gap-2">
              <span className="font-display font-extrabold text-5xl">£299</span>
              <span className="text-[hsl(var(--muted))] mb-2 text-sm">upfront to start</span>
            </div>
            <p className="text-[hsl(var(--accent))] text-sm mt-2 font-medium">
              then £50 a month starting from 28th each month if you want to keep it
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Only £299 to get started — low risk",
                "£50 a month, includes maintenance, domain costs and 1 monthly update of your choice",
                "Don't want to pay £50 a month? Drop to £30 a month and pay per update instead",
                "If you ever have problems or want to cancel, just message",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-[hsl(var(--muted))]">
                  <Check size={17} className="text-[hsl(var(--accent))] mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              {...emailLinkProps("Enquiry — Own your website (£299)")}
              data-testid="pricing-own-cta"
              className="btn-accent mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm"
            >
              Enquire about a build <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div
            custom={1}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            data-testid="pricing-rent-card"
            className="glass rounded-3xl p-8"
          >
            <h3 className="font-display font-semibold text-xl">Rent a website</h3>
            <div className="mt-4 flex items-end gap-2">
              <span className="font-display font-extrabold text-5xl">£30</span>
              <span className="text-[hsl(var(--muted))] mb-2 text-sm">/ month</span>
            </div>
            <p className="text-[hsl(var(--muted))] text-sm mt-2">
              Low upfront cost — everything managed for you.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Professionally designed site, fully managed",
                "Hosting & domain included",
                "Cancel or upgrade to owning it anytime",
                "Free homepage concept before you commit",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-[hsl(var(--muted))]">
                  <Check size={17} className="text-[hsl(var(--accent))] mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="pricing-rent-cta"
              className="btn-ghost mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm"
            >
              Ask about renting <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div
          custom={2}
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="glass rounded-3xl p-8 mt-5"
          data-testid="pricing-updates-card"
        >
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <h3 className="font-display font-semibold text-xl">Updates & changes</h3>
              <p className="text-[hsl(var(--muted))] text-sm mt-1">
                Need a tweak later? Pay only for what you need (if you're not under the £50 monthly contract).
              </p>
            </div>
            <a
              {...emailLinkProps("Website update request")}
              className="text-sm text-[hsl(var(--accent))] hover:underline inline-flex items-center gap-1"
            >
              Request an update <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {updates.map((u) => (
              <div
                key={u.label}
                className="rounded-2xl border border-[hsl(var(--border))] p-5 hover:border-[hsl(var(--accent)/0.5)] transition-colors"
              >
                <div className="font-display font-bold text-2xl text-[hsl(var(--accent))]">
                  {u.price}
                </div>
                <div className="text-sm text-[hsl(var(--muted))] mt-1">{u.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
