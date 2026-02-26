import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";

const Blog = () => {
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
                Blog
              </p>
              <h1 className="mx-auto max-w-2xl text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Insights on AI, digital solutions & industry trends
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Articles and updates from Mumble Technology on custom ERP, SaaS, computer vision, and transforming businesses with technology.
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
              {blogPosts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 * i }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block overflow-hidden rounded-xl border border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="aspect-video overflow-hidden bg-muted/30">
                      <img
                        src={post.image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {post.category}
                      </span>
                      <h2 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Blog;
