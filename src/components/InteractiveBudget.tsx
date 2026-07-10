import React, { useState } from "react";
import { PROJECT_TYPES } from "../data";
import { Droplet, Maximize2, Sparkles, Check, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function InteractiveBudget({ onOpenDossier }: { onOpenDossier: (category: string) => void }) {
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0].id);

  const activeProject = PROJECT_TYPES.find((p) => p.id === selectedType) || PROJECT_TYPES[0];

  // Map icon names to components
  const getIcon = (id: string) => {
    switch (id) {
      case "lavatorio":
        return <Droplet className="w-5 h-5 text-gold-champagne shrink-0" />;
      case "nicho":
        return <Maximize2 className="w-5 h-5 text-gold-champagne shrink-0" />;
      case "combo":
        return <Sparkles className="w-5 h-5 text-gold-champagne shrink-0" />;
      default:
        return <Sparkles className="w-5 h-5 text-gold-champagne shrink-0" />;
    }
  };

  // Premium details based on selection
  const getPremiumSpecs = (id: string) => {
    switch (id) {
      case "lavatorio":
        return [
          "Bordas chanfradas e cortes em meia esquadria (45°) milimétricos.",
          "Cuba com caimento inteligente integrado e ralo oculto no porcelanato.",
          "Estrutura interna reforçada contra vibrações e trincas.",
          "Fácil higienização com absorção praticamente nula (< 0,05%)."
        ];
      case "nicho":
        return [
          "Acabamento interno polido com moldura lapidada em 45°.",
          "Profundidade ideal para cosméticos sem comprometer a estrutura.",
          "Impermeabilização tripla das emendas para vedação absoluta contra umidade.",
          "Instalação embutida perfeitamente alinhada ao revestimento."
        ];
      case "combo":
        return [
          "Harmonização estética perfeita de tonalidade e veios do porcelanato.",
          "Layout sob medida otimizando cada centímetro do seu banheiro.",
          "Sinergia de acabamento esculpido na bancada e no nicho integrado.",
          "Custo-benefício exclusivo para o desenvolvimento conjunto das peças."
        ];
      default:
        return [];
    }
  };

  return (
    <section id="simulador" className="bg-black px-6 py-16 border-t border-white/5 relative">
      <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-gold-champagne/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-md mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-champagne font-bold block mb-2">
            Simulador de Projetos
          </span>
          <h2 className="font-serif text-2xl text-white tracking-wide leading-tight">
            Configure seu <br />
            <span className="italic text-gold-champagne font-normal">Projeto de Alto Padrão</span>
          </h2>
          <p className="font-sans text-xs text-gray-400 mt-3 leading-relaxed">
            Selecione a categoria desejada para visualizar as características e solicitar um estudo de viabilidade exclusivo para o seu ambiente.
          </p>
        </div>

        {/* Category Selector Buttons */}
        <div className="space-y-3 mb-8">
          {PROJECT_TYPES.map((type) => (
            <button
              id={`select-project-${type.id}`}
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`w-full p-4 rounded-lg border text-left flex items-start gap-4 transition-all duration-300 ${
                selectedType === type.id
                  ? "bg-gold-champagne/10 border-gold-champagne text-white shadow-lg shadow-gold-champagne/5"
                  : "bg-graphite-dark border-white/5 text-gray-400 hover:border-white/15"
              }`}
            >
              <div className="mt-1 bg-black/40 p-2 rounded border border-white/10 shrink-0">
                {getIcon(type.id)}
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xs uppercase tracking-wider font-semibold mb-1 text-white">
                  {type.name}
                </h3>
                <p className="font-sans text-[11px] text-gray-400 leading-normal font-light">
                  {type.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Specifications Box */}
        <div className="bg-gradient-to-b from-graphite-dark to-stone-nero border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-4 h-4 text-gold-champagne" />
              <span className="font-serif text-xs font-semibold uppercase tracking-wider text-gold-champagne">
                Especificações de Alta Costura
              </span>
            </div>

            <div className="space-y-3.5 min-h-[180px]">
              {getPremiumSpecs(selectedType).map((spec, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-gray-300">
                  <Check className="w-4 h-4 text-gold-champagne shrink-0 mt-0.5" />
                  <span className="font-sans font-light leading-relaxed">{spec}</span>
                </div>
              ))}
            </div>

            <button
              id="calculator-cta-button"
              onClick={() => onOpenDossier(selectedType)}
              className="w-full mt-6 bg-gold-champagne hover:bg-gold-light text-black font-alt font-bold tracking-widest text-xs uppercase py-4 rounded-md transition-all flex items-center justify-center gap-2 shadow-lg glow-gold"
            >
              <span>Solicitar Orçamento Exclusivo</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
