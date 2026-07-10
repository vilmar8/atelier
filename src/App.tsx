import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InteractiveComparison from "./components/InteractiveComparison";
import MiterPrecisionTester from "./components/MiterPrecisionTester";
import InteractiveBudget from "./components/InteractiveBudget";
import Philosophy from "./components/Philosophy";
import DossierModal from "./components/DossierModal";
import StickyCTA from "./components/StickyCTA";
import { Award, ShieldAlert, Sparkles, Phone, ShieldCheck, Mail, MapPin, MessageCircle } from "lucide-react";

export default function App() {
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("lavatorio");

  const handleOpenDossier = (category?: string) => {
    if (category) {
      setSelectedCategory(category);
    }
    setIsDossierOpen(true);
  };

  return (
    <div className="bg-black text-gray-300 font-sans min-h-screen selection:bg-gold-champagne selection:text-black">
      {/* Header with menu drawer triggers */}
      <Header onOpenDossier={() => handleOpenDossier("lavatorio")} />

      {/* Main interactive sections */}
      <main className="pb-24">
        {/* Section 1: Hero Impactante */}
        <HeroSection onOpenDossier={() => handleOpenDossier("lavatorio")} />

        {/* Section 2: Comparativo Visual de Valores */}
        <InteractiveComparison />

        {/* Section 3: Teste de Precisão 45° (Custom premium experience) */}
        <MiterPrecisionTester />

        {/* Section 4: Simulador de Investimento */}
        <InteractiveBudget onOpenDossier={(category) => handleOpenDossier(category)} />

        {/* Section 5: Filosofia do Material, o Mito do Mármore e Escassez */}
        <Philosophy />

        {/* Brand Authority Footer Notes */}
        <section className="bg-black px-6 py-12 border-t border-white/5 text-center relative overflow-hidden">
          <div className="max-w-md mx-auto space-y-8">
            <div className="flex justify-center gap-2 text-gold-champagne">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="font-serif text-xs uppercase tracking-[0.3em] font-semibold">ATELIER AUTORIZADO</span>
            </div>
            
            <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
              Nossa equipe é formada por engenheiros de produção de pedras de luxo e marmoristas artesãos de 3ª geração. Cada peça que entregamos acompanha certificado numerado de autenticidade estrutural.
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8 text-center">
              <div>
                <p className="font-serif text-sm text-white font-medium">100%</p>
                <p className="font-sans text-[8px] uppercase tracking-wider text-gray-500 mt-1">Slabs Calibrados</p>
              </div>
              <div>
                <p className="font-serif text-sm text-white font-medium">0.5mm</p>
                <p className="font-sans text-[8px] uppercase tracking-wider text-gray-500 mt-1">Margem Tolerância</p>
              </div>
              <div>
                <p className="font-serif text-sm text-white font-medium">12 anos</p>
                <p className="font-sans text-[8px] uppercase tracking-wider text-gray-500 mt-1">Garantia Técnica</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Branding Area */}
      <footer className="bg-stone-nero border-t border-white/5 py-12 px-6 text-center text-[10px] text-gray-600 space-y-6">
        <div className="max-w-xs mx-auto space-y-4">
          <div className="flex flex-col items-center">
            <span className="font-serif text-base tracking-[0.25em] text-white">
              ATELIER
            </span>
            <span className="font-sans text-[8px] tracking-[0.4em] text-gold-champagne uppercase -mt-0.5">
              PORCELANATARIA
            </span>
          </div>
          
          <p className="font-sans leading-relaxed text-gray-500">
            Esculpindo o futuro da arquitetura de alto padrão com precisão cirúrgica e design de herança.
          </p>

          <div className="flex justify-center gap-4 text-xs text-gray-400">
            <a href="mailto:contato@atelierporcelanaria.com.br" className="hover:text-gold-champagne transition-colors" aria-label="E-mail">
              <Mail className="w-4 h-4 inline mr-1" />
            </a>
            <a href="tel:+5599985180711" className="hover:text-gold-champagne transition-colors" aria-label="Telefone">
              <Phone className="w-4 h-4 inline mr-1" />
            </a>
            <a 
              href={`https://wa.me/5599985180711?text=${encodeURIComponent("Olá! 👋 Acessei o site do Atelier Porcelanataria e gostaria de solicitar um orçamento para um projeto exclusivo! ✨")}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gold-champagne transition-colors" 
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 inline mr-1" />
            </a>
          </div>

          <div className="text-[9px] text-gray-600 font-sans pt-4 border-t border-white/5 space-y-1">
            <p>© 2026 Atelier Porcelanataria Premium. Todos os direitos reservados.</p>
            <p>CNPJ: 00.000.000/0001-00 — Atendimento exclusivo sob agendamento.</p>
          </div>
        </div>
      </footer>

      {/* Interactive Questionnaire Modal Trigger */}
      <DossierModal isOpen={isDossierOpen} onClose={() => setIsDossierOpen(false)} defaultCategory={selectedCategory} />

      {/* Floating Sticky Mobile Thumb CTA */}
      <StickyCTA onOpenDossier={() => handleOpenDossier("lavatorio")} />
    </div>
  );
}
