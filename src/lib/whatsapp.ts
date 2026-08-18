export const WHATSAPP_NUMBER = "573106069871";

type QualifiedMessage = {
  linea?: string;
  ciudad?: string;
  tag: string;
};

/** Arma el link de wa.me con el mensaje pre-cargado y la etiqueta de origen. */
export function buildWhatsappLink({ linea, ciudad }: QualifiedMessage): string {
  const lines = ["Hola El Granadino, soy distribuidor y quiero cotizar productos al por mayor."];

  if (linea && ciudad) {
    lines.push(`Línea de interés: ${linea}`);
    lines.push(`Ciudad: ${ciudad}`);
    lines.push(
      "¿Me pueden brindar la lista mayorista y cantidad mínima de pedido?"
    );
  } else {
    if (linea) lines.push(`Línea de interés: ${linea}`);
    if (ciudad) lines.push(`Ciudad: ${ciudad}`);
  }

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

function demo() {
  const generic = buildWhatsappLink({ tag: "hero" });
  console.assert(generic.startsWith(`https://wa.me/${WHATSAPP_NUMBER}?text=`), "número o base de link incorrectos");
  console.assert(decodeURIComponent(generic).includes("[web · hero]"), "falta la etiqueta de origen");
  console.assert(!decodeURIComponent(generic).includes("me interesa la línea"), "no debe calificar sin línea y ciudad");

  const parcial = buildWhatsappLink({ linea: "Pulpos y mallas de caucho", tag: "lineas-pulpos" });
  const parcialDecoded = decodeURIComponent(parcial);
  console.assert(parcialDecoded.includes("Línea de interés: Pulpos y mallas de caucho"), "no arma la línea parcial");
  console.assert(!parcialDecoded.includes("me interesa la línea"), "parcial no usa plantilla completa");

  const calificado = buildWhatsappLink({
    linea: "Pulpos y mallas de caucho",
    ciudad: "Medellín",
    tag: "hero",
  });
  const decoded = decodeURIComponent(calificado);
  console.assert(decoded.includes("me interesa la línea: Pulpos y mallas de caucho"), "no arma la línea");
  console.assert(decoded.includes("Ciudad: Medellín"), "no arma la ciudad");
  console.assert(decoded.includes("lista mayorista"), "falta el cierre del mensaje");
  console.assert(decoded.includes("[web · hero]"), "no arma la etiqueta");

  console.log("whatsapp.ts: self-check OK");
}

// Verificar: node src/lib/whatsapp.ts
if (import.meta.url === `file://${process.argv[1]}`) demo();
