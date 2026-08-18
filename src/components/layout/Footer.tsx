"use client";

import WhatsappCtaButton from "@/components/ui/WhatsappCtaButton";

const NAV_LINKS = [
  { label: "Fabricación", href: "#fabricacion" },
  { label: "Líneas de producto", href: "#lineas" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Preguntas frecuentes", href: "#preguntas" },
];

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="relative overflow-hidden rounded-t-3xl border-t border-white/10 bg-footer shadow-[0_-12px_40px_rgba(0,0,0,0.3)]">
      {/* Luz de fondo sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-10 sm:pt-28">
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-14 lg:flex-row lg:items-end">
          <p
            aria-hidden
            className="hidden text-[9rem] leading-none font-bold tracking-tighter text-white/[0.04] select-none sm:block lg:text-[10rem]"
          >
            GRANADINO
          </p>

          <div className="max-w-sm lg:pb-4">
            <p className="text-lg leading-relaxed text-white/80">
              Fabricamos accesorios para moto, ferretería, cacharrería y
              remates directo para tu negocio.
            </p>
            <div className="mt-5">
              <WhatsappCtaButton tag="footer" className="min-h-10 px-4 py-2 text-xs">
                Escribinos por WhatsApp
              </WhatsappCtaButton>
            </div>
          </div>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xs font-semibold tracking-widest text-white/50 uppercase">
              Navegación
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block text-sm text-white/70 transition-all duration-200 hover:translate-x-1 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-white/50 uppercase">
              Contacto comercial
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li className="font-semibold text-white">+57 310 606 9871</li>
              <li>Medellín, Colombia</li>
              <li>Despachos asegurados a nivel nacional</li>
            </ul>
          </div>

          <div className="flex flex-col justify-between sm:col-span-2 lg:col-span-1 lg:items-end">
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 transition-all hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              <span>Volver arriba</span>
              <span>↑</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} El Granadino. Fabricantes en
            Medellín, Colombia.
          </p>
          <p className="text-white/30">Sin intermediarios · Venta mayorista</p>
        </div>
      </div>
    </footer>
  );
}
