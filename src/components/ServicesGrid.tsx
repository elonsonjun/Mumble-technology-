import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Brain,
  LayoutDashboard,
  Cloud,
  Globe,
  Smartphone,
  CloudCog,
  Users,
  Palette,
  Megaphone,
} from "lucide-react";
import { servicesData } from "@/data/services";
import CustomizedSolutions from "@/components/CustomizedSolutions";

const iconMap = {
  "ai-and-ml": Brain,
  "custom-erp": LayoutDashboard,
  saas: Cloud,
  "web-development": Globe,
  "mobile-app-development": Smartphone,
  "cloud-devops": CloudCog,
  "resource-as-a-service": Users,
  "ux-ui-design": Palette,
  "digital-marketing": Megaphone,
} as const;

const ServicesGrid = () => (
  <section id="services" className="section-alt py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="mb-2 text-lg font-semibold uppercase tracking-widest text-primary md:text-xl">
          Our Services
        </h2>
      </motion.div>

      <CustomizedSolutions />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="mx-auto max-w-2xl text-3xl font-bold text-foreground md:text-4xl">
          Amplifying Business Growth
        </p>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          We empower businesses to embrace innovative solutions through full-stack development and design revolution.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((s, i) => {
          const Icon = iconMap[s.slug as keyof typeof iconMap] ?? Globe;
          return (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/services/${s.slug}`}
                className="group block rounded-2xl border border-border/50 card-gradient p-6 transition-all hover:border-primary/30 hover:glow-primary"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.shortDesc}</p>
                <p className="mt-3 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more →
                </p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
