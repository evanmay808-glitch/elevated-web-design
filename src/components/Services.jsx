import { motion } from "framer-motion";
import { Palette, Wrench, RefreshCw, Server, Rocket, Sparkles } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Custom Website Design",
    desc: "A bespoke, mobile-first website designed around your brand — not a template.",
  },
  {
    icon: Server,
    title: "Hosting & Domain",
    desc: "I handle hosting, your domain and keeping everything online and secure.",
  },
  {
    icon: Wrench,
    title: "Ongoing Maintenance",
    desc: "Updates, fixes and peace of mind so your site stays fresh and fast.",
  },
  {
    icon: RefreshCw,
    title: "Redesigns & Updates",
    desc: "From a quick text change to a full redesign whenever your business evolves.",
  },
  {
    icon: Rocket,
    title: "Rent-a-Website",
    desc: "Get online with low upfront cost — rent a fully managed site monthly.",
  },
  {
    icon: Sparkles,
    title: "Free Homepage Demo",
    desc: "Not sure what your business could look like online? I'll design a homepage concept before you commit.",
  },
];

const card = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Services = () => {
  return (
    <section id="services" className="relative z-20 py-24 sm:py-32" data-testid="services-section">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl mb-14">
          <span className="section-eyebrow">What I do</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl mt-4 leading-tight">
            Everything you need to get online, done right.
          </h2>
          <p className="text-[hsl(var(--muted))] mt-4 text-base sm:text-lg">
            One person, full service — design, build, launch and support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                custom={i}
                variants={card}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                data-testid={`service-card-${i}`}
                className="glass rounded-2xl p-6 hover:border-[hsl(var(--accent)/0.5)] transition-colors duration-300 group"
              >
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-[hsl(var(--accent)/0.12)] text-[hsl(var(--accent))] mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                <p className="text-[hsl(var(--muted))] text-sm mt-2 leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};