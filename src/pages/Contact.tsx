import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Contact = () => {
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
                Contact
              </p>
              <h1 className="mx-auto max-w-2xl text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Get in touch
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Have a project in mind or a question? We’d love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Contact;
