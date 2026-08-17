"use client";

import { Fragment } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

// Paso 1 = clic en el CTA, paso 2 = el trabajo condensado, paso 3 = la
// transformación real (no "recibís tu pedido" — eso es logística, no beneficio).
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
      id="como-funciona"
      aria-labelledby="como-funciona-heading"
      className="relative overflow-hidden border-t border-border bg-background"
    >
      <div
        aria-hidden
        className="circle-dots pointer-events-none absolute top-1/2 right-0 hidden h-[420px] w-[420px] -translate-y-1/2 translate-x-1/4 lg:block"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-8 hidden -translate-y-1/2 flex-col items-center gap-2.5 lg:flex"
      >
        <span className="h-1 w-1 rounded-full bg-border" />
        <span className="h-1 w-1 rounded-full bg-border" />
        <span className="h-1 w-1 rounded-full bg-border" />
        <p
          className="mt-2 text-[10px] font-semibold tracking-widest text-foreground/40 uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Pasos
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
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
            Cómo funciona
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/70">
            Sin trámites ni vueltas: cotizás y recibís donde estés.
          </p>
        </motion.div>

        <div className="mt-16 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-6">
          {PASOS.map((paso, index) => (
            <Fragment key={paso.numero}>
              <motion.div variants={item} className="flex-1">
                <p className="text-5xl font-bold text-brand/20">{paso.numero}</p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  {paso.titulo}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-foreground/70">
                  {paso.descripcion}
                </p>
              </motion.div>

              {index < PASOS.length - 1 && (
                <ArrowRightIcon className="hidden h-5 w-5 shrink-0 self-center text-brand/25 lg:mt-2 lg:block" />
              )}
            </Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
