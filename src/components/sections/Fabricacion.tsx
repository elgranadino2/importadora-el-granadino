"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import WhatsappCtaButton from "@/components/ui/WhatsappCtaButton";

const FEATURES = [
  "Precio de fábrica",
  "Sin intermediarios",
  "Despacho a nivel nacional",
  "Atención directa por WhatsApp",
];

// Números reales y verificables — no hay cifras de negocio (años, clientes,
// facturación) confirmadas todavía, así que no se inventan.
const STATS = [
  { valor: "5", label: "Líneas de producto" },
  { valor: "4", label: "Sectores: moto, ferretería, cacharrería y remates" },
  { valor: "0", label: "Intermediarios entre la fábrica y tu negocio" },
];

export default function Fabricacion() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.4, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section
      id="fabricacion"
      aria-labelledby="fabricacion-heading"
      className="border-t border-border bg-background"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[0.85fr_2fr] lg:gap-16"
      >
        <motion.div variants={item}>
          <h2
            id="fabricacion-heading"
            className="section-h2 tracking-tight text-foreground"
          >
            Por qué
            <br />
            elegirnos
          </h2>

          <ul className="mt-8 space-y-4">
            {FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm font-medium text-foreground/70"
              >
                <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {feature}
              </li>
            ))}
          </ul>

          <blockquote className="mt-10 border-l-2 border-brand/30 pl-4 text-sm leading-6 text-foreground/70 italic">
            &ldquo;Somos fabricantes de productos para motos, ferretería,
            cacharrería y remates.&rdquo;
            <footer className="mt-2 text-sm font-medium text-foreground not-italic">
              — El Granadino
            </footer>
          </blockquote>
        </motion.div>

        <div>
          <motion.p
            variants={item}
            className="text-2xl leading-snug font-medium tracking-tight text-balance text-foreground sm:text-3xl"
          >
            Fabricamos accesorios para{" "}
            <strong className="font-semibold">moto</strong>,{" "}
            <strong className="font-semibold">ferretería</strong>,{" "}
            <strong className="font-semibold">cacharrería</strong> y{" "}
            <strong className="font-semibold">remates</strong> — directo de
            fábrica a tu negocio.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-2xl border border-border p-6"
              >
                <span
                  aria-hidden
                  className="absolute -top-3 -right-1 text-7xl font-bold text-brand/5"
                >
                  {stat.valor}
                </span>
                <p className="relative text-4xl font-bold text-foreground">
                  {stat.valor}
                </p>
                <p className="relative mt-2 text-sm leading-5 text-foreground/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <WhatsappCtaButton tag="fabricacion" className="px-5 py-2.5 text-sm">
              Hablar con nosotros
            </WhatsappCtaButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
