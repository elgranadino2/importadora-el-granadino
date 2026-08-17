import Hero from "@/components/sections/Hero";
import LineasDeProducto from "@/components/sections/LineasDeProducto";
import Fabricacion from "@/components/sections/Fabricacion";
import ComoFunciona from "@/components/sections/ComoFunciona";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <LineasDeProducto />
      <Fabricacion />
      <ComoFunciona />
      <FAQ />
    </main>
  );
}
