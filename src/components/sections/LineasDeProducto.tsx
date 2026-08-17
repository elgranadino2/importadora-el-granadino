"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import WhatsappCtaButton from "@/components/ui/WhatsappCtaButton";

type Linea = {
  numero: string;
  slug: string;
  nombre: string;
  descripcion: string;
  variantes: string;
  destacada?: boolean;
};

// Reconstruido a partir de las 8 piezas publicitarias del cliente (ver nota
// de investigación en el vault) — no hay lista de precios ni ficha técnica
// real todavía, así que el detalle fino queda para cuando llegue esa data.
const LINEAS: Linea[] = [
  {
    numero: "01",
    slug: "pijamas",
    nombre: "Pijamas para moto",
    descripcion:
      "Forro impermeable en polietileno de alta densidad, con ojales metálicos y elástico de ajuste.",
    variantes: "Tallas S · M · L",
  },
  {
    numero: "02",
    slug: "impermeables",
    nombre: "Impermeables",
    descripcion: "Traje con capucha, pantalón y bolsa de empaque.",
    variantes: "3 colores metalizados · Tallas S a XXL",
  },
  {
    numero: "03",
    slug: "eslaiders",
    nombre: "Eslaiders",
    descripcion: "Defensas de moto en ABS, protección contra caídas.",
    variantes: "Varios modelos",
  },
  {
    numero: "04",
    slug: "pulpos",
    nombre: "Pulpos y mallas de caucho",
    descripcion:
      "Pulpos en caucho redondo y mallas elásticas para asegurar carga sobre la moto.",
    variantes: "3 medidas (1 · 1,5 · 2 m) · Varios colores de gancho",
    destacada: true,
  },
  {
    numero: "05",
    slug: "mallas-vehiculo",
    nombre: "Mallas para vehículo",
    descripcion: "Malla de carga para techo de carro o camioneta.",
    variantes: "120 cm · 6 ganchos",
  },
];

export default function LineasDeProducto() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } },
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
    <section id="lineas" aria-labelledby="lineas-heading" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-foreground/70 uppercase">
            Lo que fabricamos
          </p>
          <h2
            id="lineas-heading"
            className="section-h2 mt-3 tracking-tight text-balance text-foreground"
          >
            Líneas de producto
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/70">
            Precio de fábrica en cada línea. Elige la tuya y te pasamos la
            lista completa por WhatsApp.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {LINEAS.map((linea) => (
            <motion.article
              key={linea.slug}
              variants={item}
              className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border p-6 ${
                linea.destacada ? "lg:col-span-2" : ""
              }`}
            >
              <span
                aria-hidden
                className="absolute top-5 right-5 text-3xl font-bold text-brand/10"
              >
                {linea.numero}
              </span>

              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {linea.nombre}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-foreground/70">
                  {linea.descripcion}
                </p>
                <p className="mt-3 text-xs font-medium text-foreground/70">
                  {linea.variantes}
                </p>
              </div>

              <div className="mt-6">
                <WhatsappCtaButton
                  tag={`lineas-${linea.slug}`}
                  linea={linea.nombre}
                  className="px-4 py-2 text-sm"
                >
                  Cotizar {linea.nombre}
                </WhatsappCtaButton>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
