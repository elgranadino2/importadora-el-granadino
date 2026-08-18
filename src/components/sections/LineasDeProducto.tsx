"use client";

import type { SVGProps } from "react";
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
  argumentoB2B: string;
  destacada?: boolean;
};

// Íconos específicos por línea de producto
function MotoCoverIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M8 11h8" />
    </svg>
  );
}

function RainSuitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 14v6" />
      <path d="M8 14v6" />
      <path d="M12 16v6" />
    </svg>
  );
}

function EslaiderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ElasticStrapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function CargoNetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
    </svg>
  );
}

const ICONO_POR_SLUG: Record<string, typeof ShieldCheckIcon> = {
  pijamas: MotoCoverIcon,
  impermeables: RainSuitIcon,
  eslaiders: EslaiderIcon,
  pulpos: ElasticStrapIcon,
  "mallas-vehiculo": CargoNetIcon,
};

const LINEAS: Linea[] = [
  {
    numero: "01",
    slug: "pijamas",
    categoria: "Protección",
    nombre: "Pijamas para moto",
    descripcion:
      "Forro impermeable en polietileno de alta densidad, con ojales metálicos y elástico de ajuste.",
    variantes: ["Talla S", "Talla M", "Talla L"],
    argumentoB2B: "Empaque individual · Alta rotación",
  },
  {
    numero: "02",
    slug: "impermeables",
    categoria: "Protección",
    nombre: "Impermeables",
    descripcion: "Traje con capucha, pantalón y bolsa de empaque.",
    variantes: ["3 colores metalizados", "Tallas S a XXL"],
    argumentoB2B: "Sellado 100% térmico",
  },
  {
    numero: "03",
    slug: "eslaiders",
    categoria: "Protección",
    nombre: "Eslaiders",
    descripcion: "Defensas de moto en ABS, protección contra caídas.",
    variantes: ["ABS", "Varios modelos"],
    argumentoB2B: "Inyección ABS de alto impacto",
  },
  {
    numero: "04",
    slug: "pulpos",
    categoria: "Sujeción",
    nombre: "Pulpos y mallas de caucho",
    descripcion:
      "Pulpos en caucho redondo y mallas elásticas para asegurar carga sobre la moto.",
    variantes: ["1 m", "1,5 m", "2 m", "Varios colores de gancho"],
    argumentoB2B: "Caucho de alta resiliencia mayorista",
    destacada: true,
  },
  {
    numero: "05",
    slug: "mallas-vehiculo",
    categoria: "Sujeción",
    nombre: "Mallas para vehículo",
    descripcion: "Malla de carga para techo de carro o camioneta.",
    variantes: ["120 cm", "6 ganchos"],
    argumentoB2B: "Ganchos plásticos reforzados",
  },
];

export default function LineasDeProducto() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28, scale: reduceMotion ? 1 : 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: reduceMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="lineas" aria-labelledby="lineas-heading" className="scroll-mt-28 bg-background">
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
              splitBy="char"
              stagger={0.03}
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
          viewport={{ once: true, margin: "-20px" }}
          variants={container}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {LINEAS.map((linea) => {
            const Icono = ICONO_POR_SLUG[linea.slug] || LinkIcon;

            return (
              <motion.article
                key={linea.slug}
                variants={item}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_16px_36px_rgba(20,51,92,0.08)] active:scale-[0.99] active:border-brand/30 active:shadow-md ${
                  linea.destacada ? "lg:col-span-2" : ""
                }`}
              >
                {/* Marca de agua reactiva con escala y resplandor */}
                <span
                  aria-hidden
                  className="absolute top-5 right-5 text-4xl font-bold text-brand/10 transition-all duration-300 group-hover:scale-115 group-hover:text-brand/30 group-active:scale-115 group-active:text-brand/30 select-none"
                >
                  {linea.numero}
                </span>

                <div className={`relative ${linea.destacada ? "lg:flex lg:items-start lg:justify-between lg:gap-8" : ""}`}>
                  <div className="max-w-sm">
                    <div className="flex items-center gap-2">
                      {/* Ícono dinámico específico por línea de producto */}
                      <Icono className="h-5 w-5 text-brand transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[-6deg] group-active:scale-125" />
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
                      <FoldText
                        text={linea.nombre}
                        splitBy={linea.nombre.split(" ").length <= 2 ? "char" : "word"}
                        stagger={0.03}
                        trigger="scroll"
                        hinge="top"
                        fontSize="inherit"
                        fontWeight="inherit"
                        color="inherit"
                      />
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-foreground/70">
                      {linea.descripcion}
                    </p>

                    {/* 1. Micro-Badge de Argumento Comercial B2B */}
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-accent/8 px-2.5 py-1 text-xs font-semibold text-accent border border-accent/20">
                      <span>✓ {linea.argumentoB2B}</span>
                    </div>

                    {/* Badges de especificaciones interactivos */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {linea.variantes.map((v) => (
                        <span
                          key={v}
                          className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-foreground/70 transition-all duration-200 group-hover:border-brand/25 group-hover:bg-brand/5 group-hover:text-brand group-active:border-brand/25 group-active:bg-brand/5 group-active:text-brand"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative mt-6">
                  {/* 3. Botón de conversión con copy B2B claro */}
                  <WhatsappCtaButton
                    tag={`lineas-${linea.slug}`}
                    linea={linea.nombre}
                    className="min-h-11 px-4 py-2 text-sm"
                  >
                    Cotizar precios al por mayor
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
