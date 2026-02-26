import { useParams, Link } from "react-router-dom";
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
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getServiceBySlug } from "@/data/services";

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

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const Icon = slug && slug in iconMap ? iconMap[slug as keyof typeof iconMap] : Globe;

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-foreground">Service not found</h1>
          <Button asChild className="mt-6 rounded-full">
            <Link to="/#services">View all services</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="border-b border-border/50 bg-background">
          <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl"
            >
              <Button variant="ghost" size="sm" className="mb-6 -ml-2 text-muted-foreground" asChild>
                <Link to="/#services">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  All services
                </Link>
              </Button>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                Service
              </p>
              <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {service.shortDesc}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-none"
              >
                <h2 className="mb-6 text-xl font-semibold text-foreground">
                  What we do
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {service.longDesc}
                </p>
                {service.paragraphs?.length > 0 && (
                  <div className="mt-6 space-y-6">
                    {service.paragraphs.map((para, idx) => (
                      <p key={idx} className="text-muted-foreground leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </motion.div>

              {service.images && service.images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 }}
                  className="mt-12"
                >
                  <h2 className="mb-6 text-xl font-semibold text-foreground">
                    In focus
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {service.images.map((src, i) => (
                      <div
                        key={i}
                        className="overflow-hidden rounded-xl border border-border bg-muted/30"
                      >
                        <img
                          src={src}
                          alt={`${service.title} — image ${i + 1}`}
                          className="h-56 w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-16"
              >
                <h2 className="mb-8 text-xl font-semibold text-foreground">
                  Things we work on
                </h2>
                <ul className="space-y-6">
                  {service.thingsToWorkOn.map((item, i) => (
                    <motion.li
                      key={item.title}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      className="flex gap-4 rounded-2xl border border-border/50 card-gradient p-6"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-16 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center"
              >
                <p className="mb-4 font-medium text-foreground">
                  Ready to get started with {service.title}?
                </p>
                <Button size="lg" className="rounded-full px-8" asChild>
                  <Link to="/contact">Get in touch</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
