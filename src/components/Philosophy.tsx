import React from "react";
import { motion } from "motion/react";
import { PHILOSOPHY_TEXTS, INSTANT_BENEFITS } from "../data";
import { Award, Check, Sparkle, Maximize2, ShieldAlert, Layers } from "lucide-react";
import carvedSinkImg from "../assets/images/carved_sink_1783558036384.jpg";

export default function Philosophy() {
  // Map string icon names to Lucide components
  const getIcon = (name: string) => {
    switch (name) {
      case "Maximize2":
        return <Maximize2 className="w-5 h-5 text-gold-champagne" />;
      case "ShieldAlert":
        return <Layers className="w-5 h-5 text-gold-champagne" />;
      default:
        return <Award className="w-5 h-5 text-gold-champagne" />;
    }
  };

  return (
    <section id="mito" className="bg-black px-6 py-20 relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-dark/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-md mx-auto">
        {/* Editorial Section Header */}
        <div className="mb-12">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-champagne font-bold block mb-2">
            FILOSOFIA DO MATERIAL
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-white tracking-wide leading-tight">
            A Nobreza da Natureza, <br />
            <span className="italic text-gold-champagne font-normal">A Perfeição da Engenharia</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold-champagne mt-4" />
        </div>

        {/* Short, highly engaging story blocks */}
        <div className="space-y-6 text-gray-300 font-sans text-xs sm:text-sm leading-relaxed font-light">
          <p className="border-l-2 border-gold-champagne pl-4 text-white font-serif text-sm italic font-medium">
            "{PHILOSOPHY_TEXTS.quote}"
          </p>
          <p>{PHILOSOPHY_TEXTS.paragraphs[0]}</p>
          <p>{PHILOSOPHY_TEXTS.paragraphs[1]}</p>
          <p>{PHILOSOPHY_TEXTS.paragraphs[2]}</p>
        </div>

        {/* Splendid Image of the Carved Sink to show the physical art */}
        <div className="my-12 relative rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
          <img
            src={carvedSinkImg}
            alt="Cuba Esculpida com Meia-Esquadria Milimétrica"
            className="w-full h-auto object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-4 rounded-lg border border-white/5">
            <span className="font-serif text-xs text-white uppercase tracking-wider block font-semibold">
              O Rigor da Meia-Esquadria 45°
            </span>
            <span className="font-sans text-[10px] text-gray-400 block mt-1 leading-relaxed">
              Cuba esculpida sob medida no Atelier Premium. Junções invisíveis e cantos lapidados a laser.
            </span>
          </div>
        </div>

        {/* Instant Benefit Icons */}
        <div className="mt-12 space-y-6">
          <h3 className="font-serif text-sm uppercase tracking-widest text-white mb-6 text-center">
            Padrões Técnicos Absolutos
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {INSTANT_BENEFITS.map((benefit, bIdx) => (
              <div key={bIdx} className="bg-graphite-dark border border-white/5 rounded-lg p-5 flex gap-4">
                <div className="w-10 h-10 bg-black border border-white/10 rounded-md flex items-center justify-center shrink-0 shadow-inner">
                  {getIcon(benefit.icon)}
                </div>
                <div>
                  <h4 className="font-serif text-xs uppercase tracking-wider text-white font-semibold mb-1">
                    {benefit.title}
                  </h4>
                  <p className="font-sans text-[11px] text-gray-400 leading-relaxed font-light">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Scarcity Block */}
        <div id="filosofia" className="mt-16 bg-gradient-to-b from-graphite-dark to-black border border-gold-champagne/20 rounded-xl p-6 text-center relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-gold-champagne/10 rounded-full blur-2xl" />
          
          <span className="inline-block px-3 py-1 bg-gold-champagne/10 border border-gold-champagne/20 text-gold-champagne font-mono text-[9px] uppercase rounded-full mb-4 tracking-widest">
            NÚMERO RESTRITO
          </span>

          <h3 className="font-serif text-lg text-white tracking-wide mb-2 font-medium">
            {PHILOSOPHY_TEXTS.scarcityTitle}
          </h3>
          <p className="font-serif text-xs italic text-gold-champagne mb-4">
            {PHILOSOPHY_TEXTS.scarcitySubtitle}
          </p>
          <p className="font-sans text-[11px] text-gray-400 leading-relaxed font-light px-2 mb-4">
            {PHILOSOPHY_TEXTS.scarcityReason}
          </p>

          <div className="border-t border-white/5 pt-4 flex justify-around items-center">
            <div>
              <p className="font-serif text-base text-gold-champagne font-bold">6</p>
              <p className="font-sans text-[8px] uppercase tracking-widest text-gray-500">Vagas / Mês</p>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div>
              <p className="font-serif text-base text-gold-champagne font-bold">100%</p>
              <p className="font-sans text-[8px] uppercase tracking-widest text-gray-500">Foco Singular</p>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div>
              <p className="font-serif text-base text-gold-champagne font-bold">vitalícia</p>
              <p className="font-sans text-[8px] uppercase tracking-widest text-gray-500">Garantia estrutural</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
