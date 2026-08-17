"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import WhatsappCtaButton from "@/components/ui/WhatsappCtaButton";
import CheckCircleIcon from "@/components/icons/CheckCircleIcon";
import XCircleIcon from "@/components/icons/XCircleIcon";

const CONTRAS = [
  "Precio inflado por cada intermediario que pasa por el producto",
  "Nadie garantiza el pedido si se agota el stock",
  "Vueltas y esperas para saber si hay disponibilidad",
  "No sabés quién fabrica lo que estás comprando",
];

// "Producción garantizada" es un claim textual del propio arte publicitario
// del cliente (Ref-01) — se reutiliza, no se inventa.
const PROS = [
  "Precio de fábrica, sin sobrecosto",
  "Producción garantizada — fabricamos lo que vendemos",
  "Respuesta directa por WhatsApp, sin intermediarios",
  "Despacho a nivel nacional",
];

// Números reales y verificables — no hay cifras de negocio (años, clientes,
// facturación) confirmadas todavía, así que no se inventan.
const STATS = [
  { valor: "5", label: "Líneas de producto" },
  { valor: "4", label: "Sectores atendidos" },
  { valor: "0", label: "Intermediarios" },
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
        className="mx-auto max-w-5xl px-6 py-24 sm:py-32"
      >
        <motion.div variants={item} className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-foreground/70 uppercase">
            Fabricante, no intermediario
          </p>
          <h2
            id="fabricacion-heading"
            className="section-h2 mt-3 tracking-tight text-balance text-foreground"
          >
            Le compras a quien fabrica, no a quien revende
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/70">
            Un intermediario no fabrica lo que te vende — le compra a alguien
            más y le sube el precio. Nosotros fabricamos accesorios para
            moto, ferretería, cacharrería y remates, y te despachamos
            directo, sin que nadie más se quede con el margen.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2"
        >
          <div className="bg-background p-8">
            <p className="text-xs font-semibold tracking-widest text-foreground/70 uppercase">
              Con un intermediario
            </p>
            <ul className="mt-6 space-y-4">
              {CONTRAS.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-foreground/70">
                  <XCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-foreground/30" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand/[0.03] p-8">
            <p className="text-xs font-semibold tracking-widest text-brand uppercase">
              Comprando directo a El Granadino
            </p>
            <ul className="mt-6 space-y-4">
              {PROS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm font-medium text-foreground">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid gap-10 border-t border-border pt-14 lg:grid-cols-[1.4fr_1fr] lg:items-start"
        >
          <blockquote>
            <p className="text-2xl leading-snug font-medium tracking-tight text-balance text-foreground sm:text-3xl">
              &ldquo;Somos fabricantes de productos para motos, ferretería,
              cacharrería y remates.&rdquo;
            </p>
            <footer className="mt-4 text-sm font-medium text-foreground/70">
              — El Granadino
            </footer>
          </blockquote>

          <div className="flex gap-8 sm:gap-10 lg:flex-col lg:gap-6 lg:border-l lg:border-border lg:pl-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-foreground">{stat.valor}</p>
                <p className="mt-1 text-sm text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className="mt-12">
          <WhatsappCtaButton tag="fabricacion" className="px-5 py-2.5 text-sm">
            Hablar con nosotros
          </WhatsappCtaButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
