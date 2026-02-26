import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Message sent!",
      description: `Thanks ${form.name}. We'll get back to you at ${form.email} within 24 hours.`,
    });
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Get In Touch
            </h2>
            <p className="mb-6 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </p>
            <p className="mb-6 text-muted-foreground leading-relaxed sm:mb-8">
              Have a project in mind? We'd love to hear about it. Fill out the
              form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-5">
              {/* India - Bangalore */}
              <div className="rounded-xl border border-border/50 card-gradient p-4">
                <h4 className="mb-3 text-base font-semibold text-foreground">India – Bangalore</h4>
                <p className="mb-3 text-sm text-muted-foreground">
                  2nd floor, 198 CMH Road, Opp HDFC Bank, Indiranagar, Bangalore 560038
                </p>
                <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                  <a href="mailto:pm@mumbletech.in" className="inline-flex min-h-[44px] items-center gap-1.5 py-2 text-primary hover:underline">
                    <Mail className="h-4 w-4 shrink-0" /> E: pm@mumbletech.in
                  </a>
                  <a href="tel:+919845166525" className="inline-flex min-h-[44px] items-center gap-1.5 py-2 text-primary hover:underline">
                    <Phone className="h-4 w-4 shrink-0" /> T: +91 9845166525
                  </a>
                  <a href="tel:+919916990011" className="inline-flex min-h-[44px] items-center gap-1.5 py-2 text-primary hover:underline">
                    <Phone className="h-4 w-4 shrink-0" /> T: +91 9916990011
                  </a>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=198+CMH+Road+Opp+HDFC+Bank+Indiranagar+Bangalore+560038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-1.5 py-2 text-sm font-medium text-primary hover:underline"
                >
                  <MapPin className="h-4 w-4 shrink-0" /> View on Google Maps
                </a>
              </div>

              {/* Canada - Calgary */}
              <div className="rounded-xl border border-border/50 card-gradient p-4">
                <h4 className="mb-3 text-base font-semibold text-foreground">Canada – Calgary</h4>
                <p className="mb-3 text-sm text-muted-foreground">
                  450, 8th Avenue South East, Calgary T2G 1T2, Canada
                </p>
                <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                  <a href="mailto:pm@mumbletech.in" className="inline-flex min-h-[44px] items-center gap-1.5 py-2 text-primary hover:underline">
                    <Mail className="h-4 w-4 shrink-0" /> E: pm@mumbletech.in
                  </a>
                  <a href="tel:+15878926064" className="inline-flex min-h-[44px] items-center gap-1.5 py-2 text-primary hover:underline">
                    <Phone className="h-4 w-4 shrink-0" /> T: +1 587 892 6064
                  </a>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=450+8th+Avenue+SouthEast+Calgary+T2G1T2+Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-1.5 py-2 text-sm font-medium text-primary hover:underline"
                >
                  <MapPin className="h-4 w-4 shrink-0" /> View on Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border/50 card-gradient p-4 sm:p-6 md:p-8"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="mb-4 h-16 w-16 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    Thank you, {form.name}!
                  </h3>
                  <p className="text-muted-foreground">
                    Your message has been sent successfully. We'll get back to you at{" "}
                    <span className="font-medium text-foreground">{form.email}</span> within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm text-foreground">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="your name"
                        required
                        className="min-h-[48px] border-border/50 bg-secondary/50 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your email"
                        required
                        className="min-h-[48px] border-border/50 bg-secondary/50 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm text-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="your phone number"
                        className="min-h-[48px] border-border/50 bg-secondary/50 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm text-foreground">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="min-h-[48px] border-border/50 bg-secondary/50 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm text-foreground">
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your work "
                      rows={5}
                      required
                      className="min-h-[120px] border-border/50 bg-secondary/50 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="min-h-[48px] w-full rounded-xl glow-primary">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
