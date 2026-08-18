"use client";

import { Fragment } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import FoldText from "@/components/ui/FoldText";

const PASOS = [
  {
    numero: "01",
    titulo: "Escribinos por WhatsApp",
    descripcion: "Elegís tu línea y nos contás qué necesita tu negocio.",
  },
  {
    numero: "02",
    titulo: "Te cotizamos directo",
    descripcion: "Precio de fábrica, cantidad mínima y tiempos, sin vueltas.",
  },
  {
    numero: "03",
    titulo: "Ganás margen real",
    descripcion:
      "Comprás directo a quien fabrica, sin que un intermediario se quede con la diferencia.",
  },
];

export default function ComoFunciona() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const lineHorizontalVariants: Variants = {
    hidden: { scaleX: 0 },
    show: {
      scaleX: 1,
      transition: { duration: reduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
    },
  };

  const lineVerticalVariants: Variants = {
    hidden: { scaleY: 0 },
    show: {
      scaleY: 1,
      transition: { duration: reduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
    },
  };

  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-heading"
      className="relative overflow-hidden scroll-mt-28 border-t border-border bg-background"
    >
      <div
        aria-hidden
        className="circle-dots pointer-events-none absolute top-1/2 right-0 hidden h-[420px] w-[420px] -translate-y-1/2 translate-x-1/4 lg:block"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-8 hidden -translate-y-1/2 flex-col items-center gap-2.5 lg:flex"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        <span className="h-1 w-1 rounded-full bg-border" />
        <span className="h-1 w-1 rounded-full bg-border" />
        <p
          className="mt-2 text-[10px] font-semibold tracking-widest text-foreground/50 uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Pasos
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20px" }}
        variants={container}
        className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32"
      >
        <motion.div variants={item} className="max-w-xl">
          <p className="text-xs font-semibold tracking-widest text-foreground/70 uppercase">
            Así de simple
          </p>
          <h2
            id="como-funciona-heading"
            className="section-h2 mt-3 tracking-tight text-balance text-foreground"
          >
            <FoldText
              text="Cómo funciona"
              splitBy="char"
              stagger={0.035}
              trigger="scroll"
              hinge="top"
              fontSize="inherit"
              fontWeight="inherit"
              color="inherit"
            />
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/70">
            Sin trámites ni vueltas: cotizás y recibís donde estés.
          </p>
        </motion.div>

        {/* Flujo de pasos limpio con línea progresiva de avance */}
        <div className="relative mt-16">
          {/* Línea horizontal en Desktop */}
          <div className="absolute top-7 left-0 hidden w-full h-[2px] bg-border/60 lg:block pointer-events-none">
            <motion.div
              variants={lineHorizontalVariants}
              className="h-full w-full bg-gradient-to-r from-brand/40 via-brand to-accent origin-left"
            />
          </div>

          {/* Línea vertical en Mobile */}
          <div className="absolute top-4 left-3 block w-[2px] h-[calc(100%-2rem)] bg-border/60 lg:hidden pointer-events-none">
            <motion.div
              variants={lineVerticalVariants}
              className="w-full h-full bg-gradient-to-b from-brand/40 via-brand to-accent origin-top"
            />
          </div>

          <div className="flex flex-col gap-10 pl-8 lg:flex-row lg:items-start lg:gap-6 lg:pl-0">
            {PASOS.map((paso, index) => (
              <Fragment key={paso.numero}>
                <motion.div variants={item} className="group relative flex-1">
                  <p className="text-5xl font-bold text-brand/25 transition-colors duration-300 group-hover:text-brand select-none">
                    {paso.numero}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-foreground">
                    <FoldText
                      text={paso.titulo}
                      splitBy="word"
                      stagger={0.04}
                      trigger="scroll"
                      hinge="top"
                      fontSize="inherit"
                      fontWeight="inherit"
                      color="inherit"
                    />
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-foreground/70">
                    {paso.descripcion}
                  </p>
                </motion.div>

                {/* Flecha impulsora entre pasos (Desktop) */}
                {index < PASOS.length - 1 && (
                  <div className="hidden shrink-0 items-center justify-center self-center lg:flex lg:mt-2">
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRightIcon className="h-5 w-5 text-brand/35 transition-colors group-hover:text-brand" />
                    </motion.div>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
