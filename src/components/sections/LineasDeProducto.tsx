"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import WhatsappCtaButton from "@/components/ui/WhatsappCtaButton";
import FoldText from "@/components/ui/FoldText";
import ShieldCheckIcon from "@/components/icons/ShieldCheckIcon";
import LinkIcon from "@/components/icons/LinkIcon";

type Categoria = "Protección" | "Sujeción";

type Linea = {
  numero: string;
  slug: string;
  categoria: Categoria;
  nombre: string;
  descripcion: string;
  variantes: string[];
  destacada?: boolean;
};

// Reconstruido a partir de las 8 piezas publicitarias del cliente (ver nota
// de investigación en el vault) — no hay lista de precios ni ficha técnica
// real todavía, así que el detalle fino queda para cuando llegue esa data.
const LINEAS: Linea[] = [
  {
    numero: "01",
    slug: "pijamas",
    categoria: "Protección",
    nombre: "Pijamas para moto",
    descripcion:
      "Forro impermeable en polietileno de alta densidad, con ojales metálicos y elástico de ajuste.",
    variantes: ["Talla S", "Talla M", "Talla L"],
  },
  {
    numero: "02",
    slug: "impermeables",
    categoria: "Protección",
    nombre: "Impermeables",
    descripcion: "Traje con capucha, pantalón y bolsa de empaque.",
    variantes: ["3 colores metalizados", "Tallas S a XXL"],
  },
  {
    numero: "03",
    slug: "eslaiders",
    categoria: "Protección",
    nombre: "Eslaiders",
    descripcion: "Defensas de moto en ABS, protección contra caídas.",
    variantes: ["ABS", "Varios modelos"],
  },
  {
    numero: "04",
    slug: "pulpos",
    categoria: "Sujeción",
    nombre: "Pulpos y mallas de caucho",
    descripcion:
      "Pulpos en caucho redondo y mallas elásticas para asegurar carga sobre la moto.",
    variantes: ["1 m", "1,5 m", "2 m", "Varios colores de gancho"],
    destacada: true,
  },
  {
    numero: "05",
    slug: "mallas-vehiculo",
    categoria: "Sujeción",
    nombre: "Mallas para vehículo",
    descripcion: "Malla de carga para techo de carro o camioneta.",
    variantes: ["120 cm", "6 ganchos"],
  },
];

const ICONO_POR_CATEGORIA: Record<Categoria, typeof ShieldCheckIcon> = {
  Protección: ShieldCheckIcon,
  Sujeción: LinkIcon,
};

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
            <FoldText
              text="Líneas de producto"
              splitBy="word"
              trigger="scroll"
              hinge="top"
              fontSize="inherit"
              fontWeight="inherit"
              color="inherit"
            />
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
          {LINEAS.map((linea) => {
            const Icono = ICONO_POR_CATEGORIA[linea.categoria];

            return (
              <motion.article
                key={linea.slug}
                variants={item}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border p-6 transition-[border-color,box-shadow] duration-200 hover:border-brand/25 hover:shadow-xl hover:shadow-brand/5 ${
                  linea.destacada ? "lg:col-span-2" : ""
                }`}
              >
                <span
                  aria-hidden
                  className="absolute top-5 right-5 text-4xl font-bold text-brand/10"
                >
                  {linea.numero}
                </span>

                <div className="relative max-w-sm">
                  <div className="flex items-center gap-2">
                    <Icono className="h-5 w-5 text-brand" />
                    <p className="text-xs font-semibold tracking-wide text-foreground/70 uppercase">
                      {linea.categoria}
                    </p>
                    {linea.destacada && (
                      <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-brand uppercase">
                        Mayor variedad
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-foreground">
                    {linea.nombre}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/70">
                    {linea.descripcion}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {linea.variantes.map((v) => (
                      <span
                        key={v}
                        className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-foreground/70"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative mt-6">
                  <WhatsappCtaButton
                    tag={`lineas-${linea.slug}`}
                    linea={linea.nombre}
                    className="px-4 py-2 text-sm"
                  >
                    Cotizar
                  </WhatsappCtaButton>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
