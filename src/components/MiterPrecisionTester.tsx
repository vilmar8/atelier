import React, { useState } from "react";
import { Sliders, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";

export default function MiterPrecisionTester() {
  const [sliderVal, setSliderVal] = useState(50); // 0 to 100

  return (
    <section id="precisao" className="bg-graphite-deep px-6 py-16 border-t border-white/5 relative">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-champagne font-bold block mb-2">
            RIGOR GEOMÉTRICO
          </span>
          <h2 className="font-serif text-2xl text-white tracking-wide leading-tight">
            O Segredo da <br />
            <span className="italic text-gold-champagne font-normal">Bancada Monolítica (Bloco Único)</span>
          </h2>
          <p className="font-sans text-xs text-gray-400 mt-3 leading-relaxed">
            A verdadeira arte da nossa porcelanataria está em fazer várias peças parecerem uma só pedra maciça e indestrutível. Nós alcançamos esse efeito através do corte milimétrico em 45° combinado com um Sistema de Colagem de Alta Performance. Sua bancada é projetada para resistir ao impacto do dia a dia, calor e umidade sem sofrer microfissuras.
          </p>
        </div>

        {/* Clean Split-Screen Comparison Slider */}
        <div className="bg-stone-nero border border-white/10 rounded-xl p-3 shadow-inner">
          <div className="relative h-64 w-full rounded-lg overflow-hidden border border-white/5 bg-black select-none">
            
            {/* 1. BACKGROUND IMAGE (RIGHT SIDE): COMMON WORK / COMPERITORS */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600"
                alt="Acabamento Comum de Mercado"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.4]"
                referrerPolicy="no-referrer"
              />
              {/* Reddish tint to represent poor quality */}
              <div className="absolute inset-0 bg-red-950/20 mix-blend-multiply" />
              
              {/* Badge for Common Work */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-red-950/90 border border-red-800/40 rounded-full">
                <AlertTriangle className="w-3 h-3 text-red-400" />
                <span className="font-sans text-[8px] text-red-200 uppercase tracking-widest font-semibold">Padrão Comum</span>
              </div>
            </div>

            {/* 2. FOREGROUND IMAGE (LEFT SIDE): OUR PREMIUM MITER FINISH */}
            <div 
              className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-gold-champagne z-20"
              style={{ width: `${sliderVal}%` }}
            >
              {/* Inner container with a fixed width to prevent image squishing on slide */}
              <div className="absolute inset-y-0 left-0 w-[calc(100vw-48px)] max-w-[392px] h-full">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600"
                  alt="Nosso Acabamento Premium"
                  className="w-full h-full object-cover filter brightness-90"
                  referrerPolicy="no-referrer"
                />
                
                {/* Badge for Premium Work */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-gold-dark/95 border border-gold-champagne/40 rounded-full">
                  <ShieldCheck className="w-3 h-3 text-gold-light" />
                  <span className="font-sans text-[8px] text-white uppercase tracking-widest font-semibold">Nosso Acabamento</span>
                </div>
              </div>
            </div>

            {/* 3. DRAG HANDLE INDICATOR */}
            <div 
              className="absolute inset-y-0 pointer-events-none flex items-center justify-center z-30"
              style={{ left: `${sliderVal}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-gold-champagne border border-black flex items-center justify-center shadow-lg -ml-4">
                <Sliders className="w-3.5 h-3.5 text-black transform rotate-90" />
              </div>
            </div>
          </div>

          {/* Interactive Drag Control Slider */}
          <div className="mt-4 space-y-2">
            <input 
              id="miter-slider"
              type="range" 
              min="0" 
              max="100" 
              value={sliderVal}
              onChange={(e) => setSliderVal(Number(e.target.value))}
              className="w-full accent-gold-champagne bg-gray-800 h-1.5 rounded-lg cursor-pointer animate-pulse"
            />
            <div className="flex justify-between font-mono text-[9px] text-gray-500 uppercase">
              <span>Deslize para comparar</span>
              <span className="text-gold-champagne font-bold">{sliderVal}% Nosso Padrão</span>
            </div>
          </div>
        </div>

        {/* CLEAN EXPLANATORY TEXTS BELOW THE SLIDER (NO POINTING LINES) */}
        <div className="mt-8 space-y-5 bg-black/40 border border-white/5 rounded-xl p-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-champagne animate-pulse" />
              <p className="font-serif text-xs text-gold-champagne uppercase tracking-widest font-bold">
                NOSSO PADRÃO
              </p>
            </div>
            <p className="font-sans text-[11px] text-gray-200 leading-relaxed font-light">
              Junta invisível, quina em 45° perfeita e alinhamento contínuo de veios, parecendo uma pedra única maciça.
            </p>
          </div>

          <div className="border-t border-white/5 pt-4 space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <p className="font-serif text-xs text-red-400 uppercase tracking-widest font-bold">
                PADRÃO COMUM
              </p>
            </div>
            <p className="font-sans text-[11px] text-gray-400 leading-relaxed font-light">
              Juntas largas de 3mm com resina comum, desalinhamento estético de veios, acúmulo de sujeira e emendas grosseiras propensas a trincas.
            </p>
          </div>
        </div>

        {/* Highlight details bullet lists */}
        <div className="mt-8 space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-gold-champagne shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-xs uppercase text-white tracking-wider font-semibold">Veios Contínuos (Bookmatching)</h4>
              <p className="font-sans text-[11px] text-gray-400 leading-relaxed">
                Os veios da pedra não terminam na borda. Eles dobram perfeitamente em 45 graus, mantendo a harmonia visual em todas as faces da bancada.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-gold-champagne shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-xs uppercase text-white tracking-wider font-semibold">Sistema de Colagem de Alta Performance</h4>
              <p className="font-sans text-[11px] text-gray-400 leading-relaxed">
                Utilizamos compostos de fixação de altíssima aderência integrados com estruturas internas reforçadas para evitar fissuras, resistindo a calor e impactos cotidianos de forma perfeita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
