"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function InitialPageCurtain() {
  const reduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(() => !reduceMotion);

  useEffect(() => {
    if (reduceMotion) return;

    // Micro-task duration to give a luxury entrance feel without delaying the user
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 650);

    return () => clearTimeout(timer);
  }, [reduceMotion]);

  if (!isVisible) return null;

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="initial-curtain"
          initial={{ y: "0%" }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1], // Gold-standard luxury agency easing curve
            },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand px-6 text-white select-none pointer-events-auto"
        >
          {/* Subtle background radial glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.08),transparent_60%)]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.25 } }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative flex flex-col items-center text-center"
          >
            <p className="font-display text-2xl font-bold tracking-wider text-white sm:text-3xl">
              EL GRANADINO
            </p>
            <p className="mt-2 text-xs font-semibold tracking-widest text-accent-light text-emerald-400 uppercase">
              Fabricantes · Medellín
            </p>

            {/* Micro loading progress line */}
            <div className="mt-6 h-0.5 w-28 overflow-hidden rounded-full bg-white/15">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="h-full w-full bg-emerald-400"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
