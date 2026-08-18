"use client";

import type { SVGProps } from "react";
import { Fragment } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import FoldText from "@/components/ui/FoldText";

function ChatStepIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function QuoteStepIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function MarginStepIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

const PASOS = [
  {
    numero: "01",
    titulo: "Escribinos por WhatsApp",
    descripcion: "Elegís tu línea y nos contás qué necesita tu negocio.",
    icono: ChatStepIcon,
    etiqueta: "Contacto directo",
  },
  {
    numero: "02",
    titulo: "Te cotizamos directo",
    descripcion: "Precio de fábrica, cantidad mínima y tiempos, sin vueltas.",
    icono: QuoteStepIcon,
    etiqueta: "Respuesta en minutos",
  },
  {
    numero: "03",
    titulo: "Ganás margen real",
    descripcion:
      "Comprás directo a quien fabrica, sin que un intermediario se quede con la diferencia.",
    icono: MarginStepIcon,
    etiqueta: "Rentabilidad mayorista",
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

        {/* Flujo de pasos sobrio con barra superior conectora de avance */}
        <div className="relative mt-16">
          {/* Barra de progreso superior en Desktop */}
          <div className="relative mb-10 hidden w-full lg:block pointer-events-none">
            <div className="h-[3px] w-full rounded-full bg-border/60 overflow-hidden">
              <motion.div
                variants={lineHorizontalVariants}
                className="h-full w-full rounded-full bg-gradient-to-r from-brand via-brand to-accent origin-left"
              />
            </div>
            <div className="absolute -top-[5px] left-0 flex w-full justify-between px-2">
              <span className="h-3 w-3 rounded-full bg-brand ring-4 ring-background shadow-xs" />
              <span className="h-3 w-3 rounded-full bg-brand ring-4 ring-background shadow-xs" />
              <span className="h-3 w-3 rounded-full bg-accent ring-4 ring-background shadow-xs" />
            </div>
          </div>

          {/* Línea vertical en Mobile */}
          <div className="absolute top-2 left-0 block w-[2px] h-[calc(100%-1rem)] bg-border/60 lg:hidden pointer-events-none">
            <motion.div
              variants={lineVerticalVariants}
              className="w-full h-full bg-gradient-to-b from-brand via-brand to-accent origin-top"
            />
          </div>

          <div className="flex flex-col gap-12 pl-6 lg:flex-row lg:items-start lg:gap-6 lg:pl-0">
            {PASOS.map((paso, index) => {
              const IconoPaso = paso.icono;

              return (
                <Fragment key={paso.numero}>
                  <motion.div
                    initial={{ opacity: 0.55, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-15% 0px -15% 0px" }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative flex-1"
                  >
                    <div className="flex items-center gap-3">
                      <p className="text-4xl font-bold text-brand/30 transition-all duration-300 group-hover:scale-110 group-hover:text-brand select-none">
                        {paso.numero}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-brand/80">
                        <IconoPaso className="h-4 w-4 text-brand" />
                        <span>{paso.etiqueta}</span>
                      </div>
                    </div>

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
                    <div className="hidden shrink-0 items-center justify-center self-center lg:flex lg:mt-6">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRightIcon className="h-5 w-5 text-brand/35 transition-colors group-hover:text-brand" />
                      </motion.div>
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
