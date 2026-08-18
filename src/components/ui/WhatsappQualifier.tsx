"use client";

import { useState } from "react";
import WhatsappCtaButton from "@/components/ui/WhatsappCtaButton";
import {
  CIUDADES_DISTRIBUIDOR,
  LINEAS_PRODUCTO,
  type CiudadDistribuidor,
  type LineaProducto,
} from "@/lib/lineas";

type WhatsappQualifierProps = {
  tag: string;
  className?: string;
  align?: "center" | "start";
};

function ChipGroup<T extends string>({
  legend,
  options,
  value,
  onChange,
  name,
}: {
  legend: string;
  options: readonly T[];
  value: T | null;
  onChange: (next: T) => void;
  name: string;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-foreground">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = value === option;
          return (
            <button
              key={option}
              type="button"
              name={name}
              aria-pressed={selected}
              onClick={() => onChange(option)}
              className={`min-h-11 cursor-pointer rounded-full border px-4 py-2.5 text-sm font-medium transition-[border-color,background-color,color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                selected
                  ? "border-brand bg-brand/5 text-brand"
                  : "border-border bg-background text-foreground/70 hover:border-brand/30 hover:text-foreground"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function WhatsappQualifier({
  tag,
  className = "",
  align = "center",
}: WhatsappQualifierProps) {
  const [linea, setLinea] = useState<LineaProducto | null>(null);
  const [ciudad, setCiudad] = useState<CiudadDistribuidor | null>(null);
  const ready = linea !== null && ciudad !== null;

  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex w-full max-w-lg flex-col ${alignClass} ${className}`}>
      <ChipGroup
        legend="¿Qué línea te interesa?"
        options={LINEAS_PRODUCTO}
        value={linea}
        onChange={setLinea}
        name="linea"
      />

      <div className="mt-6 w-full">
        <ChipGroup
          legend="¿Desde dónde nos escribís?"
          options={CIUDADES_DISTRIBUIDOR}
          value={ciudad}
          onChange={setCiudad}
          name="ciudad"
        />
      </div>

      <div className="mt-8 flex w-full flex-col items-center">
        {ready ? (
          <>
            <WhatsappCtaButton
              tag={tag}
              linea={linea}
              ciudad={ciudad}
              className="min-h-11 px-8 py-3.5 text-base"
            >
              Cotizar mi pedido
            </WhatsappCtaButton>
            <p className="mt-3 text-sm text-foreground/70">
              Tu mensaje llega calificado — línea y ciudad incluidas
            </p>
          </>
        ) : (
          <p className="text-sm text-foreground/70">
            Elegí tu línea y tu ciudad para abrir WhatsApp
          </p>
        )}
      </div>
    </div>
  );
}
