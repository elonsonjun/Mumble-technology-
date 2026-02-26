import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Mumble Technology delivered our video analytics platform on time. The AI models they built have become core to our security operations.",
    name: "Sarah Chen",
    role: "CTO, SecureFlow Inc.",
  },
  {
    quote: "We needed a private ChatGPT for our internal docs. They integrated it seamlessly and our team productivity has visibly increased.",
    name: "James Okonkwo",
    role: "Head of Product, DataFirst",
  },
  {
    quote: "From computer vision for quality checks to the web dashboard, one team handled it all. Professional and easy to work with.",
    name: "Elena Vasquez",
    role: "Operations Director, Manufactura",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Testimonials
        </h2>
        <p className="mx-auto max-w-2xl text-3xl font-bold text-foreground md:text-4xl">
          What our clients say
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-border/50 card-gradient p-6 transition-all hover:border-primary/30"
          >
            <Quote className="mb-4 h-8 w-8 text-primary/60" />
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
