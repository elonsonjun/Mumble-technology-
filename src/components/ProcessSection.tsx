import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    desc: "We map your goals, constraints, and data so the solution fits your business from day one.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    desc: "UX, architecture, and security are designed together so we build the right thing.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Develop",
    desc: "Agile sprints with clear milestones. You get demos and feedback loops, not black boxes.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Deploy",
    desc: "We launch, monitor, and support so your product stays fast, secure, and scalable.",
  },
];

const ProcessSection = () => (
  <section id="process" className="section-alt py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          How We Work
        </h2>
        <p className="mx-auto max-w-2xl text-3xl font-bold text-foreground md:text-4xl">
          From idea to production
        </p>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          A clear, repeatable process that keeps you in the loop and delivers on time.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative rounded-2xl border border-border/50 card-gradient p-6 transition-all hover:border-primary/30"
          >
            <span className="absolute right-4 top-4 text-4xl font-bold text-primary/20">
              {s.step}
            </span>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 lg:block">
                <div className="h-0.5 w-8 bg-gradient-to-r from-primary/50 to-transparent" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
