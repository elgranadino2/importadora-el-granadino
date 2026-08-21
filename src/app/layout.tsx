import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lafabricaelgranadino.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "El Granadino | Accesorios para moto, ferretería y cacharrería al por mayor",
  description:
    "Fabricantes de accesorios para moto, ferretería y cacharrería en Medellín. Precio de fábrica para tu negocio, sin intermediarios. Cotiza por WhatsApp.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "El Granadino | Accesorios al por mayor para moto, ferretería y cacharrería",
    description:
      "Fabricantes en Medellín. Precio de fábrica para tu negocio, sin intermediarios.",
    url: "/",
    locale: "es_CO",
    type: "website",
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
    <html
      lang="es"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
