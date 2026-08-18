"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import WhatsappCtaButton from "@/components/ui/WhatsappCtaButton";
import FoldText from "@/components/ui/FoldText";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: reduceMotion ? 0 : 0.35,
        staggerChildren: reduceMotion ? 0 : 0.14,
      },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    // min-h deja asomar ~96px de la siguiente sección (sliver, agent-01) para
    // invitar al scroll sin llenar el viewport entero.
    <section className="relative flex min-h-[calc(100svh-6rem)] flex-col overflow-hidden bg-background">
      <div aria-hidden className="hero-dots absolute inset-0" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(20,51,92,0.06),transparent_70%)]" />

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="relative mx-auto flex flex-1 max-w-3xl flex-col items-center justify-center px-6 py-16 text-center sm:py-20"
      >
        <motion.div variants={item}>
          <p className="text-base font-bold tracking-tight text-brand">
            <FoldText
              text="EL GRANADINO"
              splitBy="char"
              stagger={0.03}
              trigger="mount"
              hinge="top"
              fontSize="inherit"
              fontWeight="inherit"
              color="inherit"
            />
          </p>
          <p className="mt-2 text-xs font-semibold tracking-widest text-foreground/70 uppercase">
            Fabricantes · Medellín
          </p>
        </motion.div>

        <h1 className="hero-h1 mt-8 tracking-tight text-balance">
          <span className="block font-medium text-foreground/50">
            <FoldText
              text="Accesorios para moto,"
              splitBy="word"
              stagger={0.06}
              trigger="mount"
              hinge="top"
              fontSize="inherit"
              fontWeight="inherit"
              color="inherit"
            />
          </span>
          <span className="block font-semibold text-foreground">
            <FoldText
              text="ferretería y cacharrería al por mayor"
              splitBy="word"
              stagger={0.06}
              trigger="mount"
              hinge="top"
              fontSize="inherit"
              fontWeight="inherit"
              color="inherit"
            />
          </span>
        </h1>

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
