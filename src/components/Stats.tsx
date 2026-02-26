import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Brilliant Minds" },
  { value: 300, suffix: "+", label: "Satisfied Clients" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "International Offices" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl font-bold text-foreground md:text-5xl">
      {count}
      <span className="text-primary">{suffix}</span>
    </div>
  );
};

const Stats = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Who We Are
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          We are a premium team of innovators transforming traditional business concepts into robust digital solutions by implementing advanced technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <Counter target={s.value} suffix={s.suffix} />
            <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
