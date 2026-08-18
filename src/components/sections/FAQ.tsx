"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import FoldText from "@/components/ui/FoldText";
import { buildWhatsappLink } from "@/lib/whatsapp";

type FAQItem = { question: string; answer: string };

// Solo preguntas que se pueden responder con datos reales hoy. Mínimo de
// pedido, tiempos exactos y métodos de pago quedan pendientes hasta que el
// cliente los confirme (ver sección 8 de la nota de investigación).
const FAQS: FAQItem[] = [
  {
    question: "¿Cómo hago un pedido?",
    answer:
      "Nos escribís por WhatsApp, nos contás qué línea te interesa y te pasamos precio, opciones y tiempos de despacho.",
  },
  {
    question: "¿Son fabricantes o intermediarios?",
    answer:
      "Fabricamos directamente accesorios para moto, ferretería, cacharrería y remates. Por eso comprás a precio de fábrica, sin intermediarios.",
  },
  {
    question: "¿Venden al detal o solo al por mayor?",
    answer: "Trabajamos con distribuidores — ventas al por mayor.",
  },
  {
    question: "¿Hacen envíos a todo el país?",
    answer: "Sí, despachamos a nivel nacional.",
  },
  {
    question: "¿Tienen tienda física?",
    answer:
      "No — trabajamos solo por pedido y despacho, sin local físico. Todo el proceso es por WhatsApp.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="preguntas"
      aria-labelledby="preguntas-heading"
      className="scroll-mt-28 border-t border-border bg-background"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-24 sm:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="flex flex-col gap-4 lg:sticky lg:top-28 lg:h-fit">
          <p className="text-xs font-semibold tracking-widest text-foreground/70 uppercase">
            Antes de escribirnos
          </p>
          <h2
            id="preguntas-heading"
            className="section-h2 max-w-md tracking-tight text-balance text-foreground"
          >
            <FoldText
              text="Preguntas frecuentes"
              splitBy="word"
              trigger="scroll"
              hinge="top"
              fontSize="inherit"
              fontWeight="inherit"
              color="inherit"
            />
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-foreground/70">
            ¿No encontrás lo que buscás?{" "}
            <a
              href={buildWhatsappLink({ tag: "faq" })}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand transition-colors hover:text-brand/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Escribinos por WhatsApp
            </a>{" "}
            y te respondemos directo.
          </p>
        </Reveal>

        <Reveal className="flex flex-col divide-y divide-border border-t border-border">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              open={openIndex === i}
              onToggle={() => setOpenIndex((prev) => (prev === i ? null : i))}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function FAQItem({
  faq,
  open,
  onToggle,
}: {
  faq: FAQItem;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <span className="text-base font-semibold text-foreground md:text-lg">
          {faq.question}
        </span>
        <span className="relative h-5 w-5 shrink-0 text-brand">
          <span
            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current"
            aria-hidden
          />
          <span
            className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current transition-transform duration-300 ease-out"
            style={{ transform: open ? "scaleY(0)" : "scaleY(1)" }}
            aria-hidden
          />
        </span>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p
            className="max-w-2xl pb-6 text-sm leading-relaxed text-foreground/70 transition-opacity duration-300 md:text-base"
            style={{
              opacity: open ? 1 : 0,
              transitionDelay: open ? "100ms" : "0ms",
            }}
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
