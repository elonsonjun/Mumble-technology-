import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  ShoppingCart,
  Building2,
  Factory,
  GraduationCap,
  Landmark,
  Truck,
  Plane,
  Film,
} from "lucide-react";
import { industries } from "@/data/industries";

const iconMap = {
  healthcare: Heart,
  retail: ShoppingCart,
  "real-estate": Building2,
  manufacturing: Factory,
  "educational-elearning": GraduationCap,
  fintech: Landmark,
  logistics: Truck,
  "travel-hospitality": Plane,
  entertainment: Film,
} as const;

const IndustriesSection = () => (
  <section id="industries" className="section-alt py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Industries We Serve
        </h2>
        <p className="mx-auto max-w-2xl text-3xl font-bold text-foreground md:text-4xl">
          Solutions built for your sector
        </p>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          We bring AI, computer vision, and custom software to regulated and complex industries.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind, i) => {
          const Icon = iconMap[ind.slug as keyof typeof iconMap] ?? Building2;
          return (
            <motion.div
              key={ind.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={`/industries/${ind.slug}`}
                className="flex gap-4 rounded-2xl border border-border/50 card-gradient p-5 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 font-semibold text-foreground">{ind.name}</h3>
                  <p className="text-sm text-muted-foreground">{ind.shortDesc}</p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
