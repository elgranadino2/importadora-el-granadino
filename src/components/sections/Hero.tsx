"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import WhatsappCtaButton from "@/components/ui/WhatsappCtaButton";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-background">
      <div aria-hidden className="hero-dots absolute inset-0" />

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-32"
      >
        <motion.div variants={item}>
          <p className="text-base font-bold tracking-tight text-brand">
            EL GRANADINO
          </p>
          <p className="mt-2 text-xs font-semibold tracking-widest text-foreground/70 uppercase">
            Fabricantes · Medellín
          </p>
        </motion.div>

        <motion.h1
          variants={item}
          className="hero-h1 mt-8 tracking-tight text-balance"
        >
          <span className="block font-medium text-foreground/50">
            Accesorios para moto,
          </span>
          <span className="block font-semibold text-foreground">
            ferretería y cacharrería al por mayor
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-md text-lg leading-8 text-foreground/70"
        >
          Precio de fábrica para tu negocio: sin intermediarios, despacho a
          todo el país.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col items-center">
          <WhatsappCtaButton tag="hero" className="px-8 py-3.5 text-base">
            Cotizar mi pedido
          </WhatsappCtaButton>
          <p className="mt-3 text-sm text-foreground/70">
            Respuesta directa por WhatsApp
          </p>
          <p className="mt-6 text-xs text-foreground/70">
            Fabricación nacional · Despachos a todo el país
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
