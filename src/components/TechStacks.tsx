import { motion } from "framer-motion";
import { Code, Smartphone, Database, Layout } from "lucide-react";

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SIMPLE = "https://cdn.simpleicons.org";

// Logo URL for each technology (devicon or simple-icons)
const techLogos: Record<string, string> = {
  "Node.js": `${CDN}/nodejs/nodejs-original.svg`,
  Python: `${CDN}/python/python-original.svg`,
  "Java Spring Boot": `${CDN}/java/java-original.svg`,
  "Laravel PHP": `${CDN}/laravel/laravel-original.svg`,
  LLM: `${SIMPLE}/openai/412991`,
  React: `${CDN}/react/react-original.svg`,
  Angular: `${CDN}/angularjs/angularjs-original.svg`,
  "Vue.js": `${CDN}/vuejs/vuejs-original.svg`,
  HTML5: `${CDN}/html5/html5-original.svg`,
  JavaScript: `${CDN}/javascript/javascript-original.svg`,
  iOS: `${CDN}/apple/apple-original.svg`,
  Android: `${CDN}/android/android-original.svg`,
  "React Native": `${CDN}/react/react-original.svg`,
  Flutter: `${CDN}/flutter/flutter-original.svg`,
  MongoDB: `${CDN}/mongodb/mongodb-original.svg`,
  PostgreSQL: `${CDN}/postgresql/postgresql-original.svg`,
  MySQL: `${CDN}/mysql/mysql-original.svg`,
  Redis: `${CDN}/redis/redis-original.svg`,
  Firebase: `${CDN}/firebase/firebase-original.svg`,
};

const categories = [
  {
    icon: Code,
    title: "Backend Development",
    desc: "We have skilled backend professionals creating tailor-made solutions for your business.",
    techs: ["Node.js", "Python", "Java Spring Boot", "Laravel PHP", "LLM"],
  },
  {
    icon: Layout,
    title: "Frontend Development",
    desc: "Our Front-end professionals build secure and user-friendly applications.",
    techs: ["React", "Angular", "Vue.js", "HTML5", "JavaScript"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Build scalable mobile apps on iOS and Android platforms.",
    techs: ["iOS", "Android", "React Native", "Flutter"],
  },
  {
    icon: Database,
    title: "Database Development",
    desc: "Powering enhanced business outcomes with premium database development.",
    techs: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  },
];

const TechStacks = () => (
  <section id="technologies" className="section-alt py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Resource As A Service
        </h2>
        <p className="mx-auto max-w-2xl text-3xl font-bold text-foreground md:text-4xl">
          Advanced Technology Stacks
        </p>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Mumble Technology has mastered advanced technology stacks to deliver unique and next-gen digital solutions.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-border/50 card-gradient p-6 transition-all hover:border-primary/30"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <cat.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{cat.title}</h3>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">{cat.desc}</p>
            <div className="flex flex-wrap gap-2">
              {cat.techs.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                >
                  {techLogos[t] ? (
                    <img
                      src={techLogos[t]}
                      alt=""
                      className="h-4 w-4 shrink-0 object-contain"
                      width={16}
                      height={16}
                    />
                  ) : null}
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStacks;
