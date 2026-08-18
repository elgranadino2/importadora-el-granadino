"use client";

import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

/** Reveal-on-scroll reutilizable — mismo patrón whileInView que ya usan Hero, LineasDeProducto, Fabricacion y ComoFunciona. */
export function Reveal({ children, ...props }: HTMLMotionProps<"div">) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-20px" }}
      variants={reduceMotion ? undefined : variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}
