import { motion } from "framer-motion";
import { Target, Zap, Shield, Users } from "lucide-react";

const points = [
  {
    icon: Target,
    title: "Mission-driven",
    desc: "We focus on outcomes that matter: security, efficiency, and growth for your business through AI and modern software.",
  },
  {
    icon: Zap,
    title: "Fast delivery",
    desc: "Agile teams and proven stacks help us ship MVPs and full products on time without compromising quality.",
  },
  {
    icon: Shield,
    title: "Enterprise-grade security",
    desc: "Private deployments, encryption, and compliance-first design so your data stays under your control.",
  },
  {
    icon: Users,
    title: "Dedicated experts",
    desc: "Senior engineers and AI specialists who become an extension of your team, not just vendors.",
  },
];

const AboutSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Why Mumble Technology
        </h2>
        <p className="mx-auto max-w-2xl text-3xl font-bold text-foreground md:text-4xl">
          Built for scale. Trusted by innovators.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          We combine deep expertise in AI, computer vision, and full-stack development with a commitment to clarity, speed, and security.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((point, i) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-border/50 card-gradient p-6 transition-all hover:border-primary/30 hover:glow-primary"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <point.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-base font-semibold text-foreground">{point.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{point.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
