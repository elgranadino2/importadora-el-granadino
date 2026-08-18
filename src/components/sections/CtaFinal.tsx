"use client";

import { Reveal } from "@/components/ui/Reveal";
import FoldText from "@/components/ui/FoldText";
import WhatsappQualifier from "@/components/ui/WhatsappQualifier";

export default function CtaFinal() {
  return (
    <section
      aria-labelledby="cta-final-heading"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
        <Reveal>
          <p className="text-xs font-semibold tracking-widest text-foreground/70 uppercase">
            Sin compromiso
          </p>
          <h2
            id="cta-final-heading"
            className="section-h2 mt-3 tracking-tight text-balance text-foreground"
          >
            <FoldText
              text="¿Te da desconfianza escribirle a un proveedor nuevo?"
              splitBy="word"
              trigger="scroll"
              hinge="top"
              fontSize="inherit"
              fontWeight="inherit"
              color="inherit"
            />
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/70">
            No pedimos compromiso: nos contás qué línea te interesa, te
            pasamos precio y condiciones, y decidís vos con la información
            completa.
          </p>
          <WhatsappQualifier tag="cta-final" className="mx-auto mt-8" />
        </Reveal>
      </div>
    </section>
  );
}
