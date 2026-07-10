import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Sparkles } from "lucide-react";

export default function StickyCTA({ onOpenDossier }: { onOpenDossier: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 inset-x-0 z-30 p-4 bg-gradient-to-t from-black via-black/90 to-transparent backdrop-blur-xs flex justify-center pointer-events-none"
        >
          <button
            id="sticky-whatsapp-cta"
            onClick={onOpenDossier}
            className="pointer-events-auto w-full max-w-sm bg-gold-champagne hover:bg-gold-light text-black font-alt font-extrabold tracking-wider text-xs uppercase py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-2xl shadow-gold-champagne/20 border border-gold-light/20 glow-gold"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black"></span>
            </span>
            <span>Orçamento Exclusivo no WhatsApp</span>
            <Phone className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
