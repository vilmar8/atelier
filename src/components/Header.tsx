import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Award, ShieldAlert, Sparkles, MapPin } from "lucide-react";

interface HeaderProps {
  onOpenDossier: () => void;
}

export default function Header({ onOpenDossier }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "O Mito do Mármore", href: "#mito" },
    { name: "Comparativo de Valores", href: "#comparativo" },
    { name: "Simulador de Investimento", href: "#simulador" },
    { name: "Nosso Acabamento 45°", href: "#precisao" },
    { name: "Filosofia & Escassez", href: "#filosofia" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5 py-4 px-6 flex items-center justify-between">
        {/* Discrete floating menu on left/right, centered logo */}
        <button
          id="menu-toggle-btn"
          onClick={() => setIsOpen(true)}
          className="p-2 -ml-2 text-gold-champagne hover:text-gold-light transition-colors"
          aria-label="Abrir Menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center">
          <span className="font-serif text-lg tracking-[0.25em] text-white font-semibold">
            ATELIER
          </span>
          <span className="font-sans text-[9px] tracking-[0.4em] text-gold-champagne font-medium -mt-1">
            PORCELANATARIA
          </span>
        </div>

        <button
          id="header-cta-btn"
          onClick={onOpenDossier}
          className="p-2 -mr-2 text-gold-champagne hover:text-gold-light transition-colors relative"
          aria-label="Orçamento Exclusivo"
        >
          <Phone className="w-5 h-5 animate-pulse" />
        </button>
      </header>

      {/* Drawer Menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/90 z-50 backdrop-blur-sm"
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-stone-nero border-r border-white/10 z-50 p-8 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex justify-between items-center mb-12">
                  <div className="flex flex-col">
                    <span className="font-serif text-xl tracking-[0.25em] text-white">
                      ATELIER
                    </span>
                    <span className="font-sans text-[10px] tracking-[0.4em] text-gold-champagne">
                      PORCELANATARIA
                    </span>
                  </div>
                  <button
                    id="close-menu-btn"
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.a
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block font-serif text-lg text-gray-300 hover:text-gold-champagne transition-colors py-2 border-b border-white/5"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              <div className="mt-12 space-y-6 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <Award className="w-4 h-4 text-gold-champagne shrink-0" />
                  <span>Apenas 6 projetos por mês.</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <ShieldAlert className="w-4 h-4 text-gold-champagne shrink-0" />
                  <span>Garantia vitalícia em acabamentos 45°.</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <MapPin className="w-4 h-4 text-gold-champagne shrink-0" />
                  <span>Atendimento em todo o Brasil.</span>
                </div>

                <button
                  id="drawer-cta-btn"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenDossier();
                  }}
                  className="w-full bg-gold-champagne hover:bg-gold-light text-black font-alt font-semibold tracking-wider text-xs uppercase py-4 rounded-md transition-all glow-gold"
                >
                  Agendar Consultoria d'Art
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
