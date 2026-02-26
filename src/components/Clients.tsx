import { motion } from "framer-motion";

const clients = [
  { logo: "/client-african-industries.png", name: "African Industries" },
  { logo: "/client-primezerve.png", name: "Primezerve" },
  { logo: "/client-abb.png", name: "ABB" },
  { logo: "/client-hitachi-energy.png", name: "Hitachi Energy" },
  { logo: "/client-cipla.png", name: "Cipla" },
  { logo: "/client-ceat.png", name: "CEAT" },
  { logo: "/client-haldirams.png", name: "Haldiram's" },
  { logo: "/client-addlife.png", name: "AddLife" },
  { logo: "/client-aequs.png", name: "Aequs" },
  { logo: "/client-avr-swarna-mahal.png", name: "AVR Swarna Mahal Jewellers" },
  { logo: "/client-sami-sabinsa.png", name: "SAMI-SABINSA Group" },
  { logo: "/client-psg.png", name: "PSG Institute" },
];

const Clients = () => (
  <section id="clients" className="py-24 bg-muted/20">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Our Recent Clients
        </h2>
        <p className="mx-auto max-w-2xl text-3xl font-bold text-foreground md:text-4xl">
          Trusted by Industry Leaders
        </p>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          We provide scalable and custom-quality solutions across a global range of industries.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto"
      >
        {clients.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="rounded-xl border border-border/40 bg-background p-6 flex flex-col items-center justify-center min-h-[130px] transition-all hover:border-primary/30 hover:shadow-sm"
          >
            <div className="w-full h-16 flex items-center justify-center flex-1 shrink-0">
              <img
                src={c.logo}
                alt={c.name}
                className="max-h-14 w-full max-w-[160px] object-contain object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <span className="mt-3 text-xs font-medium text-muted-foreground">{c.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Clients;
