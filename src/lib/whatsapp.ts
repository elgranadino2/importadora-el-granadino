export const WHATSAPP_NUMBER = "573106069871";

type QualifiedMessage = {
  linea?: string;
  ciudad?: string;
  tag: string;
};

/** Arma el link de wa.me con el mensaje pre-cargado y la etiqueta de origen. */
export function buildWhatsappLink({ linea, ciudad, tag }: QualifiedMessage): string {
  const lines = ["Hola El Granadino 👋", "Soy distribuidor y quiero cotizar productos al por mayor."];
  if (linea) lines.push(`Línea de interés: ${linea}`);
  if (ciudad) lines.push(`Ciudad: ${ciudad}`);
  lines.push("", `[web · ${tag}]`);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

function demo() {
  const generic = buildWhatsappLink({ tag: "hero" });
  console.assert(generic.startsWith(`https://wa.me/${WHATSAPP_NUMBER}?text=`), "número o base de link incorrectos");
  console.assert(decodeURIComponent(generic).includes("[web · hero]"), "falta la etiqueta de origen");
  console.assert(!decodeURIComponent(generic).includes("Línea de interés"), "no debe mencionar línea si no se pasó");

  const calificado = buildWhatsappLink({ linea: "Pulpos y mallas de caucho", ciudad: "Medellín", tag: "lineas · pulpos" });
  const decoded = decodeURIComponent(calificado);
  console.assert(decoded.includes("Línea de interés: Pulpos y mallas de caucho"), "no arma la línea");
  console.assert(decoded.includes("Ciudad: Medellín"), "no arma la ciudad");
  console.assert(decoded.includes("[web · lineas · pulpos]"), "no arma la etiqueta compuesta");

  console.log("whatsapp.ts: self-check OK");
}

// Verificar: node src/lib/whatsapp.ts
if (import.meta.url === `file://${process.argv[1]}`) demo();
