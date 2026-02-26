import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What is AI video analytics?",
    a: "Video analytics powered by AI leverages computer vision and deep learning for real-time monitoring, anomaly detection, and actionable insights from surveillance footage.",
  },
  {
    q: "How has AI improved video analytics?",
    a: "AI-powered video analytics gathers video data from security cameras and analyzes them, delivering actionable insights across different industries.",
  },
  {
    q: "What are the major applications of computer vision?",
    a: "Computer vision AI has major applications such as defect detection, OCR, road condition monitoring, 3D model building, healthcare monitoring, and many more.",
  },
  {
    q: "Can you use ChatGPT in a private mode?",
    a: "Private GPT models provide robust privacy features for enterprises. With enterprise data, private ChatGPT can be integrated into existing systems securely.",
  },
  {
    q: "Is ChatGPT suitable for businesses?",
    a: "Yes, businesses can use ChatGPT for improving overall employee productivity. The chatbot can be integrated into training platforms for generating relevant instructional content.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope: MVPs often ship in 8–12 weeks; larger platforms can run 4–6 months. We provide a timeline and milestones after the discovery phase.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. We offer maintenance, monitoring, and feature updates so your product stays secure and performant. Support plans can be tailored to your needs.",
  },
  {
    q: "Can you work with our existing tech stack?",
    a: "We integrate with common stacks (cloud, APIs, databases) and can extend or modernize your current systems. We’ll align with your stack where it makes sense.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-24">
    <div className="container mx-auto max-w-3xl px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          FAQ
        </h2>
        <p className="text-3xl font-bold text-foreground md:text-4xl">
          Frequently Asked Questions
        </p>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.35 }}
          >
            <AccordionItem
              value={`faq-${i}`}
              className="rounded-xl border border-border/50 card-gradient px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
