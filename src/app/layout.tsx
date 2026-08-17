import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "El Granadino | Accesorios para moto, ferretería y cacharrería al por mayor",
  description:
    "Fabricantes de accesorios para moto, ferretería y cacharrería en Medellín. Precio de fábrica para tu negocio, sin intermediarios. Cotiza por WhatsApp.",
  openGraph: {
    title: "El Granadino | Accesorios al por mayor para moto, ferretería y cacharrería",
    description:
      "Fabricantes en Medellín. Precio de fábrica para tu negocio, sin intermediarios.",
    locale: "es_CO",
  },
};

// Sin punto físico (confirmado por el cliente) — Organization con areaServed,
// no LocalBusiness con address. Dominio aún no definido: sin campo `url`.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "El Granadino",
  description:
    "Fabricantes de accesorios para moto, ferretería y cacharrería al por mayor.",
  telephone: `+${WHATSAPP_NUMBER}`,
  areaServed: {
    "@type": "City",
    name: "Medellín",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
