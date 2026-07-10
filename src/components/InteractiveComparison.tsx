import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { COMPARISONS } from "../data";
import { AlertCircle, Check, HelpCircle, ArrowRight, ShieldCheck, Sparkle } from "lucide-react";

export default function InteractiveComparison() {
  // Store selected state for each card: "stone" or "porcelain"
  const [selectedViews, setSelectedViews] = useState<{ [key: string]: "stone" | "porcelain" }>({
    "nero-marquina": "porcelain",
    "grafite-silk": "porcelain",
    "calacatta-black": "porcelain",
  });

  const toggleView = (cardId: string, type: "stone" | "porcelain") => {
    setSelectedViews((prev) => ({
      ...prev,
      [cardId]: type,
    }));
  };

  return (
    <section id="comparativo" className="bg-stone-nero px-6 py-16 border-t border-white/5 relative">
      {/* Absolute subtle glowing sphere background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-gold-champagne/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-md mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-champagne font-bold block mb-2">
            VALOR INTELIGENTE
          </span>
          <h2 className="font-serif text-2xl text-white tracking-wide leading-tight">
            Estética de Alta Joalheria, <br />
            <span className="italic text-gold-champagne font-normal">Investimento Inteligente</span>
          </h2>
          <p className="font-sans text-xs text-gray-400 mt-3 leading-relaxed">
            Como conseguimos entregar o mesmo impacto visual, profundidade de veios e imponência de um Mármore Nero Marquina Internacional por um valor que cabe no seu planejamento? O segredo não está na redução da qualidade, mas na eficiência do nosso processo. Por sermos uma porcelanataria especializada e de fabricação própria, eliminamos intermediários, lojas de shopping e margens abusivas. Você investe na precisão do corte em 45°, na segurança da estrutura reforçada e leva o visual da pedra mais nobre do mundo direto da nossa oficina para a sua casa. É a inteligência da engenharia moderna a favor do seu bolso.
          </p>
        </div>

        {/* Stack of Cards */}
        <div className="space-y-10">
          {COMPARISONS.map((card, index) => {
            const currentView = selectedViews[card.id] || "porcelain";
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-graphite-dark border border-white/10 rounded-xl overflow-hidden shadow-2xl relative"
              >
                {/* Save Ribbon */}
                <div className="absolute top-4 right-4 z-20 bg-gold-champagne/90 text-black font-alt font-extrabold text-[9px] uppercase px-2.5 py-1 rounded-full tracking-wider flex items-center gap-1 shadow-md">
                  <Sparkle className="w-2.5 h-2.5 fill-black" />
                  Economia de {card.savingsPercentage}%
                </div>

                {/* Card Title Header */}
                <div className="p-5 border-b border-white/5 bg-gradient-to-r from-black/50 to-transparent">
                  <span className="text-[10px] uppercase tracking-widest text-gold-champagne font-bold">Categoria {index + 1}</span>
                  <h3 className="font-serif text-lg text-white font-medium mt-0.5">{card.title}</h3>
                </div>

                {/* Card Main Image with overlay */}
                <div className="relative h-48 bg-stone-900 overflow-hidden">
                  <img
                    src={card.porcelainImage}
                    alt={card.title}
                    className="w-full h-full object-cover object-center filter brightness-90 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-dark via-transparent to-transparent" />
                </div>

                {/* Multi-toggle Switcher (Natural Stone vs Premium Porcelain) */}
                <div className="p-4 bg-black/40 border-y border-white/5 flex gap-2">
                  <button
                    id={`toggle-${card.id}-stone`}
                    onClick={() => toggleView(card.id, "stone")}
                    className={`flex-1 py-2 text-[10px] font-alt font-semibold uppercase tracking-wider rounded transition-all duration-300 ${
                      currentView === "stone"
                        ? "bg-red-900/40 text-red-200 border border-red-800/60"
                        : "bg-transparent text-gray-500 border border-transparent hover:text-gray-300"
                    }`}
                  >
                    Mármore Natural
                  </button>
                  <button
                    id={`toggle-${card.id}-porcelain`}
                    onClick={() => toggleView(card.id, "porcelain")}
                    className={`flex-1 py-2 text-[10px] font-alt font-semibold uppercase tracking-wider rounded transition-all duration-300 ${
                      currentView === "porcelain"
                        ? "bg-gold-champagne text-black font-extrabold shadow-md"
                        : "bg-transparent text-gray-500 border border-transparent hover:text-gray-300"
                    }`}
                  >
                    Porcelanato Slabs (Recomendado)
                  </button>
                </div>

                {/* Comparison Details Area */}
                <div className="p-5 min-h-[220px] flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    {currentView === "stone" ? (
                      <motion.div
                        key="stone-view"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div>
                          <div className="flex items-center gap-1.5 text-red-400 mb-1.5">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            <span className="font-serif text-xs font-semibold uppercase tracking-wider text-red-300">
                              Os Riscos Reais
                            </span>
                          </div>
                          <p className="font-sans text-[11px] text-gray-400 leading-relaxed font-light italic">
                            "{card.stonePriceLabel}"
                          </p>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-white/5">
                          {card.stoneWeakness.map((weak, wIdx) => (
                            <div key={wIdx} className="flex items-start gap-2.5 text-[11px] text-gray-300">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0 mt-1.5" />
                              <span className="font-sans font-light leading-relaxed">{weak}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="porcelain-view"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div>
                          <div className="flex items-center gap-1.5 text-gold-champagne mb-1.5">
                            <ShieldCheck className="w-4 h-4 shrink-0 animate-pulse" />
                            <span className="font-serif text-xs font-semibold uppercase tracking-wider text-gold-champagne">
                              O Superpoder da Alta Engenharia
                            </span>
                          </div>
                          <p className="font-sans text-[11px] text-gray-400 leading-relaxed font-light italic">
                            "{card.porcelainPriceLabel}"
                          </p>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-white/5">
                          {card.porcelainStrengths.map((str, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-2.5 text-[11px] text-gray-100">
                              <Check className="w-3.5 h-3.5 text-gold-champagne shrink-0 mt-0.5" />
                              <span className="font-sans font-light leading-relaxed">{str}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Smart Insight bottom tip */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-400">
                    <span className="font-mono text-gray-500 uppercase">Juntas do material</span>
                    <span className="font-sans text-gray-200">
                      {currentView === "stone" ? "Largas (2 a 4mm)" : "Invisíveis (0.5 a 1.2mm)"}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
