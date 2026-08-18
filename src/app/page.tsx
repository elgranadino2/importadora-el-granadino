import Hero from "@/components/sections/Hero";
import LineasDeProducto from "@/components/sections/LineasDeProducto";
import Fabricacion from "@/components/sections/Fabricacion";
import ComoFunciona from "@/components/sections/ComoFunciona";
import FAQ from "@/components/sections/FAQ";
import CtaFinal from "@/components/sections/CtaFinal";
import Contacto from "@/components/sections/Contacto";

export default function Home() {
  return (
    <main>
      <Hero />
      <Fabricacion />
      <LineasDeProducto />
      <ComoFunciona />
      <FAQ />
      <CtaFinal />
      <Contacto />
    </main>
  );
}
