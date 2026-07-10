import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ShieldCheck, Sparkle } from "lucide-react";
import heroBg from "../assets/images/nero_marquina_countertop_1783558021433.jpg";

interface HeroSectionProps {
  onOpenDossier: () => void;
}

export default function HeroSection({ onOpenDossier }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-black px-6 pt-8 pb-12">
      {/* Premium Dark Stone Background with sutil light animation */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Bancada de Porcelanato Nero Marquina"
          className="w-full h-full object-cover object-center opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Deep dark gradient overlays to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
        
        {/* Subtle sliding light beam animation */}
        <motion.div
          animate={{
            x: ["-150%", "150%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            repeatDelay: 3,
          }}
          className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transform -skew-x-12 pointer-events-none"
        />
      </div>

      {/* Decorative Stamp or Top Tag */}
      <div className="relative z-10 self-center flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
        <Sparkle className="w-3.5 h-3.5 text-gold-champagne animate-spin-slow" />
        <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-gray-300 font-semibold">
          ALTA ENGENHARIA DE MATERIAIS
        </span>
      </div>

      {/* Main Copy Area */}
      <div className="relative z-10 flex-grow flex flex-col justify-center my-8 text-center max-w-lg mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-3xl sm:text-4xl text-white tracking-wide leading-tight mb-4"
        >
          O Esplendor da <br />
          <span className="italic font-normal text-gold-champagne font-serif text-4xl sm:text-5xl block mt-1">
            Matéria Eterna
          </span>
          no seu Projeto
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-light px-4 mb-6"
        >
          Do desenho milimétrico ao acabamento invisível em 45°. Esculpimos cubas, bancadas e lareiras sob medida com os porcelanatos mais nobres do mundo.
        </motion.p>

        {/* Dynamic Key Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-6 text-left border-y border-white/5 py-4 my-2"
        >
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-gold-champagne shrink-0 mt-0.5" />
            <div>
              <p className="font-serif text-xs text-white uppercase tracking-wider font-semibold">Absorção Zero</p>
              <p className="font-sans text-[10px] text-gray-400">Imune a manchas de ácidos</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-gold-champagne shrink-0 mt-0.5" />
            <div>
              <p className="font-serif text-xs text-white uppercase tracking-wider font-semibold">45° Milimétrico</p>
              <p className="font-sans text-[10px] text-gray-400">Juntas imperceptíveis</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA Area - Mobile Thumb Targeted */}
      <div className="relative z-10 w-full max-w-sm mx-auto">
        <motion.button
          id="hero-cta-button"
          onClick={onOpenDossier}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gold-champagne hover:bg-gold-light text-black font-alt font-bold tracking-widest text-xs uppercase py-4 rounded-md transition-all duration-300 flex items-center justify-center gap-2 shadow-lg glow-gold"
        >
          <span>Solicitar Dossier & Orçamento</span>
          <ArrowUpRight className="w-4 h-4" />
        </motion.button>
        <p className="text-[10px] text-gray-500 font-sans text-center mt-3 tracking-wide">
          ✦ Resposta prioritária via assessoria direta de arquitetura.
        </p>
      </div>
    </section>
  );
}
