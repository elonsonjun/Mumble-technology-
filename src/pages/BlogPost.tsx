import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogPostBySlug } from "@/data/blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-foreground">Post not found</h1>
          <Button asChild className="mt-6 rounded-full" variant="outline">
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      <main className="pt-20">
        <article className="border-b border-border/50 bg-background">
          <div className="container mx-auto max-w-3xl px-4 py-12 lg:px-8 lg:py-16">
            <Button variant="ghost" size="sm" className="mb-6 -ml-2 text-muted-foreground" asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <div className="mb-8 overflow-hidden rounded-xl bg-muted/30">
              <img
                src={post.image}
                alt=""
                className="h-auto w-full object-cover"
              />
            </div>
            <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {post.category}
            </span>
            <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
            {post.body && (
              <div className="mt-6 space-y-4 text-foreground leading-relaxed">
                <p>{post.body}</p>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </motion.div>
  );
};

export default BlogPost;
