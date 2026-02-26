import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getFeaturedBySlug } from "@/data/featured-solutions";

const FeaturedDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = slug ? getFeaturedBySlug(slug) : undefined;

  if (!solution) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-foreground">Page not found</h1>
          <Button asChild className="mt-6 rounded-full">
            <Link to="/#solutions">Back to Solutions</Link>
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
                <Link to="/#solutions">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Solutions
                </Link>
              </Button>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                Solution
              </p>
              <h1 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                {solution.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {solution.shortDesc}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
              >
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
                {solution.paragraphs && solution.paragraphs.length > 0 && (
                  <div className="mt-8 space-y-6">
                    {solution.paragraphs.map((para, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </motion.div>

              {solution.images && solution.images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-12"
                >
                  <h2 className="mb-6 text-xl font-semibold text-foreground">
                    In focus
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {solution.images.map((src, i) => (
                      <div
                        key={i}
                        className="overflow-hidden rounded-xl border border-border bg-muted/30"
                      >
                        <img
                          src={src}
                          alt={`${solution.title} — image ${i + 1}`}
                          className="h-56 w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-16 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center"
              >
                <p className="mb-4 font-medium text-foreground">
                  Ready to build with {solution.title}?
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

export default FeaturedDetail;
