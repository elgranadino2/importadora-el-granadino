"use client";

import { Reveal } from "@/components/ui/Reveal";
import FoldText from "@/components/ui/FoldText";
import WhatsappCtaButton from "@/components/ui/WhatsappCtaButton";

export default function CtaFinal() {
  return (
    <section
      aria-labelledby="cta-final-heading"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
        <Reveal>
          <p className="text-xs font-semibold tracking-widest text-foreground/70 uppercase">
            Antes de que te vayas
          </p>
          <h2
            id="cta-final-heading"
            className="section-h2 mt-3 tracking-tight text-balance text-foreground"
          >
            <FoldText
              text="¿Hablamos por WhatsApp?"
              splitBy="word"
              trigger="scroll"
              hinge="top"
              fontSize="inherit"
              fontWeight="inherit"
              color="inherit"
            />
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/70">
            Sabemos que da desconfianza escribirle a un proveedor que recién
            estás conociendo. Por eso no pedimos compromiso: nos escribís, te
            pasamos precio y condiciones, y decidís vos con la información
            completa.
          </p>
          <div className="mt-8 flex flex-col items-center">
            <WhatsappCtaButton tag="cta-final" className="px-8 py-3.5 text-base">
              Cotizar mi pedido
            </WhatsappCtaButton>
            <p className="mt-3 text-sm text-foreground/70">
              Respuesta directa por WhatsApp
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
