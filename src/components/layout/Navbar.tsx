"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import WhatsappCtaButton from "@/components/ui/WhatsappCtaButton";

// Los 3 links de la nav — el resto de secciones del plan (prueba social, FAQ
// completo, lead magnet) van al footer cuando existan, no acá. Contacto no es
// un link de la nav: es el CTA, y abre WhatsApp directo, no ancla a sección.
const LINKS = [
  { label: "Fabricación", id: "fabricacion" },
  { label: "Líneas", id: "lineas" },
  { label: "Preguntas", id: "preguntas" },
];

// Tokens de globals.css en rgb, para poder interpolar el alfa por scroll.
// --raw-card #ffffff · --raw-border #e2e8f0 · --raw-ink #12181f
const CARD_RGB = "255, 255, 255";
const BORDER_RGB = "226, 232, 240";
const INK_RGB = "18, 24, 31";

// Píldora liviana: llega rápido y asienta sin rebotar. Los valores de las
// skills (mass 3) están pensados para seguir el cursor, no para un salto corto.
const PILL_SPRING = {
  type: "spring",
  mass: 0.6,
  stiffness: 380,
  damping: 32,
} as const;

const IOS_EASE = [0.4, 0, 0.2, 1] as const;

function Navbar() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [lean, setLean] = useState(0);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const targetRef = useRef<string | null>(null);

  // Entrada al cargar: el contenedor aparece y los items caen escalonados.
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: reduceMotion ? 0 : 0.4,
        ease: IOS_EASE,
        staggerChildren: reduceMotion ? 0 : 0.06,
      },
    },
  };
  const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.06 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.35, ease: IOS_EASE },
    },
  };
  const pillTransition = reduceMotion ? { duration: 0 } : PILL_SPRING;

  // El hover manda mientras exista; si no, la sección en pantalla.
  const target = hovered ?? active;

  // Dirección del viaje, para que la etiqueta de destino entre empujada hacia
  // donde va la píldora. Se calcula en el handler para que caiga en el mismo
  // commit que el cambio de target.
  function updateLean(next: string | null) {
    const prevIndex = LINKS.findIndex((link) => link.id === targetRef.current);
    const nextIndex = LINKS.findIndex((link) => link.id === next);
    setLean(
      prevIndex !== -1 && nextIndex !== -1 && prevIndex !== nextIndex
        ? Math.sign(nextIndex - prevIndex)
        : 0
    );
    targetRef.current = next;
  }

  // Sección activa según el scroll real, sin depender del clic. Si las
  // secciones todavía no existen en la página (se van construyendo una a la
  // vez), el observer simplemente no tiene nada que mirar.
  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        updateLean(visible.target.id);
        setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    };
  }, []);

  // Entrar es inmediato, salir tiene retardo: evita el parpadeo al barrer el
  // mouse rápido por encima de los tres items.
  function handleEnter(id: string) {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    updateLean(id);
    setHovered(id);
  }

  function handleLeave() {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => {
      setLean(0);
      targetRef.current = null;
      setHovered(null);
    }, 140);
  }

  // Condensación al hacer scroll. Un solo valor 0→1 gobierna ancho, fondo,
  // borde y sombra, así todo llega junto. Arranca a los 40px (no en el 0)
  // para que sea una reacción al scroll y no un parpadeo al primer pixel, y
  // pasa por un spring para que no siga los escalones del trackpad.
  const { scrollY, scrollYProgress } = useScroll();
  const compactRaw = useTransform(scrollY, [40, 160], [0, 1]);
  const compactSpring = useSpring(compactRaw, {
    stiffness: 200,
    damping: 32,
    mass: 0.4,
  });
  const compact = reduceMotion ? compactRaw : compactSpring;

  // Animar el ancho es layout, no transform — rompe a propósito la regla de
  // "solo transform/opacity", porque escalar deformaría el texto. El costo
  // queda contenido a este subárbol de pocos elementos.
  const maxWidthRem = useTransform(compact, [0, 1], [64, 46]);
  const maxWidth = useMotionTemplate`${maxWidthRem}rem`;

  const bgAlpha = useTransform(compact, [0, 1], [0, 0.9]);
  const borderAlpha = useTransform(compact, [0, 1], [0, 1]);
  const shadowAlpha = useTransform(compact, [0, 1], [0, 0.08]);
  const blur = useTransform(compact, [0, 1], [0, 12]);

  const backgroundColor = useMotionTemplate`rgba(${CARD_RGB}, ${bgAlpha})`;
  const borderColor = useMotionTemplate`rgba(${BORDER_RGB}, ${borderAlpha})`;
  const boxShadow = useMotionTemplate`0 8px 30px rgba(${INK_RGB}, ${shadowAlpha})`;
  const backdropFilter = useMotionTemplate`blur(${blur}px)`;

  return (
    // Abajo en móvil (alcance del pulgar, sobre la safe area del notch),
    // arriba en desktop. Un solo elemento, dos anclajes.
    <header className="fixed inset-x-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-50 md:inset-x-0 md:bottom-auto md:top-4 md:px-6">
      <motion.nav
        aria-label="Navegación principal"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ maxWidth }}
        className="relative mx-auto flex items-center justify-between gap-2 rounded-full p-2 md:gap-10 md:py-2.5 md:pl-8 md:pr-3"
      >
        {/* Móvil: la barra flota sobre el contenido desde el scroll 0, así que
            el fondo es fijo. La condensación solo aplica en desktop. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full border border-border bg-card/90 shadow-[0_8px_30px_rgba(18,24,31,0.08)] backdrop-blur-md md:hidden"
        />
        <motion.div
          aria-hidden="true"
          style={{
            backgroundColor,
            borderColor,
            boxShadow,
            backdropFilter,
            WebkitBackdropFilter: backdropFilter,
          }}
          className="absolute inset-0 hidden rounded-full border md:block"
        />

        {/* Hairline de progreso de lectura, en el navy de marca — el verde de
            acento queda exclusivo para el CTA, nunca para un indicador. */}
        <motion.div
          aria-hidden="true"
          style={{ scaleX: scrollYProgress }}
          className="absolute inset-x-6 bottom-0 h-px origin-left bg-brand/40"
        />

        {/* El wordmark ya apareció en el Hero — en el pill móvil, angosto,
            cede el espacio a los links de navegación en vez de repetirlo. */}
        <motion.div variants={itemVariants} className="relative hidden shrink-0 md:block">
          <Link
            href="/"
            className="block text-base font-bold tracking-tight text-brand transition-opacity duration-200 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            EL GRANADINO
          </Link>
        </motion.div>

        <motion.ul
          variants={listVariants}
          onMouseLeave={handleLeave}
          className="relative flex items-center gap-1 md:gap-2"
        >
          {LINKS.map((link) => {
            const isTarget = target === link.id;

            return (
              <li key={link.id} className="relative">
                {isTarget && (
                  // Una sola píldora con layoutId: viaja entre items en vez de
                  // aparecer y desaparecer.
                  <motion.span
                    layoutId="nav-pill"
                    aria-hidden="true"
                    style={{ borderRadius: 9999 }}
                    transition={pillTransition}
                    className="absolute inset-0 z-0"
                  >
                    <motion.span
                      key={link.id}
                      initial={{ scaleX: reduceMotion ? 1 : 1.14 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: reduceMotion ? 0 : 0.42, ease: IOS_EASE }}
                      className="block h-full w-full rounded-full bg-foreground"
                    />
                  </motion.span>
                )}

                <motion.a
                  href={`#${link.id}`}
                  variants={itemVariants}
                  onMouseEnter={() => handleEnter(link.id)}
                  onFocus={() => handleEnter(link.id)}
                  onBlur={handleLeave}
                  whileTap={{ scale: 0.95 }}
                  className={`relative z-10 block rounded-full px-3 py-2.5 text-xs font-medium whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:px-4 md:py-2.5 md:text-sm ${
                    isTarget ? "text-background" : "text-foreground/70"
                  }`}
                >
                  <motion.span
                    key={isTarget ? "target" : "idle"}
                    initial={isTarget ? { x: reduceMotion ? 0 : lean * 6 } : false}
                    animate={{ x: 0 }}
                    transition={pillTransition}
                    className="block"
                  >
                    {link.label}
                  </motion.span>
                </motion.a>
              </li>
            );
          })}
        </motion.ul>

        <motion.div variants={itemVariants} className="relative shrink-0">
          <WhatsappCtaButton
            tag="navbar"
            className="min-h-11 px-4 py-2.5 text-xs md:px-5 md:py-2.5 md:text-sm"
          >
            Cotizar
          </WhatsappCtaButton>
        </motion.div>
      </motion.nav>
    </header>
  );
}

export { Navbar };
