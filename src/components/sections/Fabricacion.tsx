"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import WhatsappCtaButton from "@/components/ui/WhatsappCtaButton";
import FoldText from "@/components/ui/FoldText";
import CheckCircleIcon from "@/components/icons/CheckCircleIcon";
import XCircleIcon from "@/components/icons/XCircleIcon";

const CONTRAS = [
  "Precio inflado por cada intermediario que pasa por el producto",
  "Nadie garantiza el pedido si se agota el stock",
  "Vueltas y esperas para saber si hay disponibilidad",
  "No sabés quién fabrica lo que estás comprando",
];

const PROS = [
  "Precio de fábrica, sin sobrecosto ni recargos",
  "Producción garantizada — fabricamos lo que vendemos",
  "Respuesta directa por WhatsApp, sin intermediarios",
  "Despacho asegurado a nivel nacional",
];

const STATS = [
  { target: 5, label: "Líneas de producto activas" },
  { target: 4, label: "Sectores comerciales atendidos" },
  { target: 0, label: "Intermediarios en tu compra" },
];

function StatCounter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView || target === 0) return;

    let start = 0;
    const duration = 1000;
    const stepTime = Math.max(Math.floor(duration / target), 80);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="group flex flex-col">
      <p className="text-4xl font-extrabold tracking-tight text-brand transition-colors group-hover:text-accent">
        {target === 0 ? "0" : `${count}`}
      </p>
      <p className="mt-1 text-sm font-medium text-foreground/70">{label}</p>
    </div>
  );
}

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
      className="relative z-10 scroll-mt-28 rounded-t-3xl border-t border-border bg-background shadow-[0_-8px_32px_rgba(18,24,31,0.05)]"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20px" }}
        variants={container}
        className="mx-auto max-w-5xl px-6 py-24 sm:py-32"
      >
        <motion.div variants={item} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand">
            <span>Fabricante directo · Medellín, Colombia</span>
          </div>
          <h2
            id="fabricacion-heading"
            className="section-h2 mt-4 tracking-tight text-balance text-foreground"
          >
            <FoldText
              text="Le compras a quien fabrica, no a quien revende"
              splitBy="word"
              trigger="scroll"
              hinge="top"
              fontSize="inherit"
              fontWeight="inherit"
              color="inherit"
            />
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/70">
            Un intermediario no fabrica lo que te vende — le compra a alguien
            más y le sube el precio. Nosotros fabricamos accesorios para
            moto, ferretería, cacharrería y remates, y te despachamos
            directo, sin que nadie más se quede con el margen.
          </p>
        </motion.div>

        {/* Tabla comparativa CRO con alto contraste y micro-interacciones de nivel producción */}
        <motion.div
          variants={item}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8"
        >
          {/* Lado Intermediario (Fricción / Rojo sutil) */}
          <div className="flex flex-col justify-between rounded-2xl border border-red-500/20 bg-red-500/[0.02] p-8 transition-colors duration-300">
            <div>
              <p className="text-xs font-semibold tracking-widest text-red-600 uppercase">
                <FoldText
                  text="Con un intermediario"
                  splitBy="word"
                  stagger={0.04}
                  trigger="scroll"
                  hinge="top"
                  fontSize="inherit"
                  fontWeight="inherit"
                  color="inherit"
                />
              </p>
              <ul className="mt-6 space-y-4">
                {CONTRAS.map((c) => (
                  <motion.li
                    key={c}
                    whileHover={{ x: 2 }}
                    className="group flex items-start gap-3 text-sm text-foreground/75"
                  >
                    <XCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-red-500/80 transition-transform duration-200 group-hover:-rotate-12" />
                    <span>{c}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Lado El Granadino (Ganador / Navy Profundo con Verde Esmeralda) */}
          <div className="flex flex-col justify-between rounded-2xl border border-brand/40 bg-brand p-8 text-white shadow-xl">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold tracking-widest text-accent uppercase">
                  <FoldText
                    text="Comprando directo a El Granadino"
                    splitBy="word"
                    stagger={0.04}
                    trigger="scroll"
                    hinge="top"
                    fontSize="inherit"
                    fontWeight="inherit"
                    color="inherit"
                  />
                </p>
                <span className="relative flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1 text-[11px] font-semibold text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  <span>Mejor opción</span>
                </span>
              </div>

              <ul className="mt-6 space-y-4">
                {PROS.map((p) => (
                  <motion.li
                    key={p}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="group flex items-start gap-3 text-sm font-medium text-white/95 cursor-default"
                  >
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-hover:scale-125" />
                    <span className="transition-colors duration-200 group-hover:text-white">
                      {p}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Cita & Contadores Animados */}
        <motion.div
          variants={item}
          className="mt-16 grid gap-10 border-t border-border pt-14 lg:grid-cols-[1.4fr_1fr] lg:items-center"
        >
          <blockquote className="relative">
            <p className="text-2xl leading-snug font-medium tracking-tight text-balance text-foreground sm:text-3xl">
              &ldquo;Somos fabricantes de productos para motos, ferretería,
              cacharrería y remates.&rdquo;
            </p>
            <footer className="mt-4 text-sm font-medium text-foreground/70">
              — El Granadino · Medellín, Colombia
            </footer>
          </blockquote>

          <div className="flex flex-wrap gap-8 sm:gap-10 lg:flex-col lg:gap-6 lg:border-l lg:border-border lg:pl-8">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} target={stat.target} label={stat.label} />
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className="mt-12">
          <WhatsappCtaButton tag="fabricacion" className="min-h-11 px-5 py-2.5 text-sm">
            Cotizar al por mayor
          </WhatsappCtaButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
