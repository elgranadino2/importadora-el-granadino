"use client";

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
      className="scroll-mt-28 border-t border-border bg-background"
    >
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <Reveal>
          <h2
            id="contacto-heading"
            className="hero-h1 tracking-tight text-balance text-foreground"
          >
            <FoldText
              text="Hablemos"
              splitBy="char"
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

        <Reveal className="mt-16 grid gap-10 border-t border-border pt-14 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-widest text-foreground/70 uppercase">
              Contacto
            </p>
            <a
              href={buildWhatsappLink({ tag: "contacto-numero" })}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-lg font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {NUMERO_LEGIBLE}
            </a>
            <p className="mt-2 text-sm text-foreground/70">
              Respuesta directa, sin intermediarios.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-foreground/70 uppercase">
              Cobertura
            </p>
            <p className="mt-4 text-lg font-medium text-foreground">
              Medellín, Colombia
            </p>
            <p className="mt-2 text-sm text-foreground/70">
              Despachos a nivel nacional.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
