import { buildWhatsappLink } from "@/lib/whatsapp";

const NAV_LINKS = [
  { label: "Fabricación", href: "#fabricacion" },
  { label: "Líneas de producto", href: "#lineas" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Preguntas frecuentes", href: "#preguntas" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-footer">
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-10 sm:pt-28">
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-14 lg:flex-row lg:items-end">
          <p
            aria-hidden
            className="hidden text-[9rem] leading-none font-bold tracking-tighter text-white/5 select-none sm:block lg:text-[10rem]"
          >
            GRANADINO
          </p>

          <div className="max-w-sm lg:pb-4">
            <p className="text-lg leading-relaxed text-white/80">
              Fabricamos accesorios para moto, ferretería, cacharrería y
              remates.
            </p>
            <a
              href={buildWhatsappLink({ tag: "footer" })}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              Escribinos por WhatsApp
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-widest text-white/50 uppercase">
              Navegación
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-white/50 uppercase">
              Contacto
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>+57 310 606 9871</li>
              <li>Medellín, Colombia</li>
              <li>Despachos a nivel nacional</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} El Granadino. Fabricantes en
            Medellín, Colombia.
          </p>
        </div>
      </div>
    </footer>
  );
}
