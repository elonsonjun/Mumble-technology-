import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import { featuredSolutions } from "@/data/featured-solutions";

const Portfolio = () => {
  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      <main className="pt-20">
        <section className="border-b border-border/50 bg-background">
          <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="text-center"
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                Portfolio
              </p>
              <h1 className="mx-auto max-w-2xl text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Featured solutions & case studies
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Explore our work across AI, computer vision, generative AI, and intelligent systems.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {featuredSolutions.map((item, i) => (
                <motion.article
                  key={item.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 * i }}
                >
                  <Link
                    to={`/featured/${item.slug}`}
                    className="group block overflow-hidden rounded-xl border border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="aspect-video overflow-hidden bg-muted/30">
                      <img
                        src={item.images[0]}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h2 className="text-lg font-semibold text-foreground group-hover:text-primary">
                        {item.title}
                      </h2>
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                        {item.shortDesc}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                        View case study
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <Clients />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Portfolio;
