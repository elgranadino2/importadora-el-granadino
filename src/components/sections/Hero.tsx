"use client";

import type { MouseEvent } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import WhatsappCtaButton from "@/components/ui/WhatsappCtaButton";
import FoldText from "@/components/ui/FoldText";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";

const EASE_FLUID = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const handleScrollToFabricacion = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("fabricacion");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const container: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : -36 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: EASE_FLUID,
        staggerChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : -16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.55, ease: EASE_FLUID },
    },
  };

  return (
    // min-h deja asomar ~96px de la siguiente sección (sliver, agent-01) para
    // invitar al scroll sin llenar el viewport entero.
    <section className="relative flex min-h-[calc(100svh-6rem)] flex-col overflow-hidden bg-background">
      <div aria-hidden className="hero-dots absolute inset-0" />
      {/* Luz Ambiental Respirable en el Fondo */}
      <div
        aria-hidden
        className="hero-ambient-glow pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(20,51,92,0.08),transparent_70%)]"
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="relative mx-auto flex flex-1 max-w-3xl flex-col items-center justify-center px-6 py-14 text-center sm:py-20"
      >
        <motion.div variants={item} className="flex flex-col items-center gap-2">
          {/* Badge de Despachos a nivel nacional */}
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand backdrop-blur-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span>Despachos a todo el país</span>
          </span>

          <p className="mt-2 text-base font-bold tracking-tight text-brand">
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
          <p className="text-xs font-semibold tracking-widest text-foreground/70 uppercase">
            Fabricantes · Medellín
          </p>
        </motion.div>

        <h1 className="hero-h1 mt-6 tracking-tight text-balance">
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

        <motion.div variants={item} className="mt-8 flex flex-col items-center">
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

        {/* Micro-Indicador de Scroll ultra-fluido */}
        <motion.div variants={item} className="mt-8">
          <a
            href="#fabricacion"
            onClick={handleScrollToFabricacion}
            aria-label="Conocer más sobre fabricación"
            className="group flex flex-col items-center gap-1 text-xs font-medium text-foreground/50 transition-colors hover:text-brand"
          >
            <span className="text-[11px] tracking-wider uppercase">Conocer más</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDownIcon className="h-4 w-4 text-brand/70 transition-transform group-hover:scale-110" />
            </motion.span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
