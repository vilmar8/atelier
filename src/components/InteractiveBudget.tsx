import React, { useState } from "react";
import { PROJECT_TYPES } from "../data";
import { Sliders, Calculator, Check, Sparkle, ArrowUpRight } from "lucide-react";

export default function InteractiveBudget({ onOpenDossier }: { onOpenDossier: () => void }) {
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0].id);
  const [meters, setMeters] = useState(4); // default 4 linear/sq meters

  const activeProject = PROJECT_TYPES.find((p) => p.id === selectedType) || PROJECT_TYPES[0];

  // Calculate costs
  const naturalCost = activeProject.avgNaturalPrice * meters;
  const porcelainCost = activeProject.avgPorcelainPrice * meters;
  const savings = naturalCost - porcelainCost;

  // Format currency helper (Brazilian Real)
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="simulador" className="bg-black px-6 py-16 border-t border-white/5 relative">
      <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-gold-champagne/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-md mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-champagne font-bold block mb-2">
            SIMULADOR DE VALOR
          </span>
          <h2 className="font-serif text-2xl text-white tracking-wide leading-tight">
            Simulador de <br />
            <span className="italic text-gold-champagne font-normal">Investimento Inteligente</span>
          </h2>
          <p className="font-sans text-xs text-gray-400 mt-3 leading-relaxed">
            Alta tecnologia em porcelanataria com o melhor custo-benefício da região. Projetos sofisticados que cabem no seu orçamento.
          </p>
        </div>

        {/* Environment Selector Buttons (Grid 2x2 for mobile) */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {PROJECT_TYPES.map((type) => (
            <button
              id={`select-project-${type.id}`}
              key={type.id}
              onClick={() => {
                setSelectedType(type.id);
                if (type.id === "banheiro") {
                  setMeters(2); // default bancadas
                } else {
                  setMeters(4); // default meters
                }
              }}
              className={`p-4 rounded-lg border text-left transition-all duration-300 ${
                selectedType === type.id
                  ? "bg-gold-champagne/10 border-gold-champagne text-white shadow-lg shadow-gold-champagne/5"
                  : "bg-graphite-dark border-white/5 text-gray-400 hover:border-white/15"
              }`}
            >
              <h3 className="font-serif text-xs uppercase tracking-wider font-semibold mb-1">
                {type.name.split("&")[0]}
              </h3>
              <p className="font-sans text-[9px] text-gray-400 leading-tight">
                {type.id === "banheiro" ? "A partir de R$ 790 por projeto/bancada padrão" : `A partir de R$ ${type.avgPorcelainPrice}/m`}
              </p>
            </button>
          ))}
        </div>

        {/* Dimension Slider */}
        <div className="bg-graphite-dark border border-white/10 rounded-xl p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <label className="font-serif text-xs text-gray-300 uppercase tracking-widest font-semibold">
              {selectedType === "banheiro" ? "Quantidade de Bancadas" : "Extensão Estimada"}
            </label>
            <span className="font-mono text-sm text-gold-champagne font-bold">
              {meters} {selectedType === "banheiro" ? (meters === 1 ? "Bancada Padrão" : "Bancadas Padrão") : selectedType === "piso" ? "m² de Área" : "Metros Lineares"}
            </span>
          </div>

          <input
            id="dimension-slider"
            type="range"
            min={selectedType === "banheiro" ? "1" : "2"}
            max={selectedType === "banheiro" ? "10" : "20"}
            value={meters}
            onChange={(e) => setMeters(Number(e.target.value))}
            className="w-full accent-gold-champagne bg-black/60 h-1.5 rounded-lg cursor-pointer"
          />

          <div className="flex justify-between font-mono text-[8px] text-gray-500 uppercase mt-2">
            <span>Mín: {selectedType === "banheiro" ? "1" : "2m"}</span>
            <span>Máx: {selectedType === "banheiro" ? "10" : "20m"}</span>
          </div>
        </div>

        {/* Results Block */}
        <div className="bg-gradient-to-b from-graphite-dark to-stone-nero border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          {/* Main Saving Highlight */}
          <div className="bg-gold-champagne/10 border-b border-gold-champagne/20 p-6 text-center">
            <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold-champagne font-bold block mb-1">
              Economia Inteligente
            </span>
            <span className="font-serif text-3xl text-gold-champagne font-bold block tracking-tight">
              {formatCurrency(savings)}
            </span>
            <span className="font-sans text-[10px] text-gray-400 mt-2 block leading-relaxed">
              Diferença investida em armários de luxo, louças ou automação.
            </span>
          </div>

          {/* Individual comparison details */}
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center text-xs pb-3 border-b border-white/5">
              <span className="font-sans text-gray-400 font-light">Mármore Natural Importado</span>
              <span className="font-mono text-red-400 font-medium">{formatCurrency(naturalCost)}</span>
            </div>

            <div className="flex justify-between items-center text-xs pb-3 border-b border-white/5">
              <span className="font-sans text-gray-100 font-light flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-gold-champagne rounded-full" />
                Porcelanato Slabs Atelier
              </span>
              <span className="font-mono text-gold-champagne font-bold">{formatCurrency(porcelainCost)}</span>
            </div>

            <div className="bg-black/40 rounded-lg p-4 space-y-2 mt-4">
              <div className="flex items-start gap-2.5 text-[10px] text-gray-400">
                <Check className="w-3.5 h-3.5 text-gold-champagne shrink-0 mt-0.5" />
                <span>Mesmo impacto estético com maior resistência estrutural</span>
              </div>
              <div className="flex items-start gap-2.5 text-[10px] text-gray-400">
                <Check className="w-3.5 h-3.5 text-gold-champagne shrink-0 mt-0.5" />
                <span>Instalação inclusa realizada por artesãos certificados</span>
              </div>
            </div>

            <button
              id="calculator-cta-button"
              onClick={onOpenDossier}
              className="w-full mt-4 bg-gold-champagne hover:bg-gold-light text-black font-alt font-bold tracking-widest text-xs uppercase py-4 rounded-md transition-all flex items-center justify-center gap-2 shadow-lg glow-gold"
            >
              <span>Garantir Essa Economia</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
