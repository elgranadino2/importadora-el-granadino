"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import WhatsappCtaButton from "@/components/ui/WhatsappCtaButton";
import FoldText from "@/components/ui/FoldText";
import { buildWhatsappLink } from "@/lib/whatsapp";

const NUMERO_LEGIBLE = "+57 310 606 9871";

export default function Contacto() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-heading"
      className="relative z-10 scroll-mt-28 border-t border-border bg-background"
    >
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <Reveal>
          {/* Badge de disponibilidad en vivo */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/5 px-3.5 py-1 text-xs font-semibold text-brand">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span>Atención Inmediata por WhatsApp · Lun a Sáb</span>
          </div>

          <h2
            id="contacto-heading"
            className="hero-h1 mt-4 tracking-tight text-balance text-foreground"
          >
            <FoldText
              text="Hablemos"
              splitBy="char"
              stagger={0.04}
              trigger="scroll"
              hinge="top"
              fontSize="inherit"
              fontWeight="inherit"
              color="inherit"
            />
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-foreground/70">
            ¿Tenés preguntas o querés cotizar tu pedido? Escribinos por
            WhatsApp y te respondemos directo — sin formularios, sin
            esperas.
          </p>
          <div className="mt-8">
            <WhatsappCtaButton tag="contacto" className="min-h-11 px-6 py-3 text-sm">
              Escribir por WhatsApp
            </WhatsappCtaButton>
          </div>
        </Reveal>

        {/* Tarjetas de acción táctil interactivas (Mobile First) */}
        <Reveal className="mt-16 grid gap-6 border-t border-border pt-14 sm:grid-cols-2 lg:gap-8">
          <motion.a
            href={buildWhatsappLink({ tag: "contacto-numero" })}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.98 }}
            className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-2xs transition-all duration-300 hover:border-brand/30 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold tracking-widest text-foreground/60 uppercase">
                  Contacto directo
                </p>
                <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                  ⚡ Respuesta en minutos
                </span>
              </div>
              <p className="mt-4 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-brand sm:text-2xl">
                {NUMERO_LEGIBLE}
              </p>
              <p className="mt-2 text-sm leading-6 text-foreground/70">
                Llama o escribe por WhatsApp. Sin intermediarios ni demoras.
              </p>
            </div>
          </motion.a>

          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-2xs transition-all duration-300">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold tracking-widest text-foreground/60 uppercase">
                  Cobertura comercial
                </p>
                <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                  🇨🇴 Despachos diarios
                </span>
              </div>
              <p className="mt-4 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Medellín, Colombia
              </p>
              <p className="mt-2 text-sm leading-6 text-foreground/70">
                Fabricación local y despachos asegurados a todo el país.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
