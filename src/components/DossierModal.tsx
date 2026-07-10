import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, Check, Send, Phone, Lock, ClipboardList } from "lucide-react";
import { PROJECT_TYPES, PROJECT_ENVIRONMENTS } from "../data";

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export default function DossierModal({ isOpen, onClose, defaultCategory = "lavatorio" }: DossierModalProps) {
  const [step, setStep] = useState(1);
  const [selectedEnv, setSelectedEnv] = useState("lavabo");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [reference, setReference] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const handleNextStep = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      // Compile WhatsApp details
      const activeEnv = PROJECT_ENVIRONMENTS.find((e) => e.id === selectedEnv) || PROJECT_ENVIRONMENTS[0];
      const categoryObj = PROJECT_TYPES.find((c) => c.id === defaultCategory) || PROJECT_TYPES[0];

      const msg = `Olá! ✨ Gostaria de fazer um orçamento com o Atelier Porcelanataria. Montei uma ideia no simulador do site e gostaria de validar com vocês:
- 📐 Tipo de Projeto: ${categoryObj.name}
- 💎 Tipo de Acabamento: Estrutura Reforçada
- 📍 Endereço: ${address}
- 📌 Referência: ${reference || "Não informado"}`;
      const encodedMsg = encodeURIComponent(msg);
      // Open WhatsApp redirect
      window.open(`https://wa.me/5599985180711?text=${encodedMsg}`, "_blank");
      setStep(3); // Success step
    }
  };

  const resetForm = () => {
    setStep(1);
    setName("");
    setAddress("");
    setReference("");
    setWhatsapp("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          {/* Blur backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="fixed inset-0 bg-black/95 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-stone-nero border border-white/10 w-full max-w-md rounded-xl overflow-hidden shadow-2xl z-50 flex flex-col justify-between"
          >
            {/* Top close button */}
            <button
              id="modal-close-btn"
              onClick={resetForm}
              className="absolute top-4 right-4 text-gray-500 hover:text-white p-2 z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="p-6 border-b border-white/5 bg-gradient-to-r from-black/50 to-transparent flex items-center gap-3">
              <div className="w-10 h-10 bg-gold-champagne/10 border border-gold-champagne/20 rounded-full flex items-center justify-center text-gold-champagne">
                {step === 1 && <ClipboardList className="w-5 h-5" />}
                {step === 2 && <Phone className="w-5 h-5" />}
                {step === 3 && <Check className="w-5 h-5" />}
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-gold-champagne font-bold">Solicitação de Estudo</span>
                <h3 className="font-serif text-base text-white font-medium">Orçamento & Dossier Premium</h3>
              </div>
            </div>

            {/* Steps Progress Indicator */}
            {step < 3 && (
              <div className="flex bg-black/40 h-1 border-b border-white/5">
                <div 
                  className="bg-gold-champagne h-full transition-all duration-300"
                  style={{ width: `${(step / 2) * 100}%` }}
                />
              </div>
            )}

            {/* Modal Content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block font-serif text-xs uppercase tracking-widest text-white mb-2 font-semibold">
                        Selecione o Ambiente do Projeto
                      </label>
                      <div className="grid grid-cols-1 gap-2.5">
                        {PROJECT_ENVIRONMENTS.map((env) => (
                          <button
                            id={`modal-env-${env.id}`}
                            key={env.id}
                            onClick={() => setSelectedEnv(env.id)}
                            className={`w-full p-4 rounded-lg border text-left flex items-center justify-between transition-all ${
                              selectedEnv === env.id
                                ? "bg-gold-champagne/10 border-gold-champagne text-white"
                                : "bg-black/30 border-white/5 text-gray-400 hover:border-white/10"
                            }`}
                          >
                            <div>
                              <span className="font-serif text-xs uppercase tracking-wider block font-semibold text-white">
                                {env.name}
                              </span>
                              <span className="font-sans text-[10px] text-gray-400 mt-1 block font-light">
                                {env.description}
                              </span>
                            </div>
                            {selectedEnv === env.id && (
                              <div className="w-4 h-4 bg-gold-champagne rounded-full flex items-center justify-center">
                                <Check className="w-2.5 h-2.5 text-black font-extrabold" />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      id="modal-next-1-btn"
                      onClick={handleNextStep}
                      className="w-full mt-4 bg-gold-champagne hover:bg-gold-light text-black font-alt font-bold tracking-widest text-xs uppercase py-4 rounded-md transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      <span>Avançar</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="space-y-4">
                      <div>
                        <label className="block font-serif text-xs uppercase tracking-widest text-white mb-1.5 font-semibold">
                          Seu Nome Completo
                        </label>
                        <input
                          id="modal-input-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ex: Dr. Roberto Guimarães"
                          className="w-full bg-black/60 border border-white/10 rounded-lg py-3.5 px-4 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-champagne"
                        />
                      </div>

                      <div>
                        <label className="block font-serif text-xs uppercase tracking-widest text-white mb-1.5 font-semibold">
                          Endereço e Número
                        </label>
                        <input
                          id="modal-input-address"
                          type="text"
                          required
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Ex: Rua da Olaria, nº 150"
                          className="w-full bg-black/60 border border-white/10 rounded-lg py-3.5 px-4 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-champagne"
                        />
                      </div>

                      <div>
                        <label className="block font-serif text-xs uppercase tracking-widest text-white mb-1.5 font-semibold">
                          Ponto de Referência
                        </label>
                        <input
                          id="modal-input-reference"
                          type="text"
                          value={reference}
                          onChange={(e) => setReference(e.target.value)}
                          placeholder="Ex: Próximo ao Comercial Santo Antônio"
                          className="w-full bg-black/60 border border-white/10 rounded-lg py-3.5 px-4 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-champagne"
                        />
                      </div>

                      <div>
                        <label className="block font-serif text-xs uppercase tracking-widest text-white mb-1.5 font-semibold">
                          WhatsApp de Contato
                        </label>
                        <input
                          id="modal-input-phone"
                          type="tel"
                          required
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="Ex: (11) 99999-9999"
                          className="w-full bg-black/60 border border-white/10 rounded-lg py-3.5 px-4 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-champagne"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <button
                        id="modal-back-2-btn"
                        onClick={() => setStep(1)}
                        className="flex-1 border border-white/10 text-gray-400 font-alt font-semibold tracking-widest text-xs uppercase py-4 rounded-md hover:text-white"
                      >
                        Voltar
                      </button>
                      <button
                        id="modal-submit-btn"
                        onClick={handleNextStep}
                        disabled={!name || !address || !whatsapp}
                        className={`flex-1 font-alt font-bold tracking-widest text-xs uppercase py-4 rounded-md transition-all flex items-center justify-center gap-2 shadow-lg ${
                          name && address && whatsapp
                            ? "bg-gold-champagne hover:bg-gold-light text-black glow-gold"
                            : "bg-gray-800 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        <span>Gerar Dossier</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 justify-center text-gray-500 text-[10px] mt-4 font-sans">
                      <Lock className="w-3 h-3" />
                      <span>Seus dados estão protegidos por criptografia militar.</span>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 space-y-6"
                  >
                    <div className="w-16 h-16 bg-gold-champagne/10 border-2 border-gold-champagne rounded-full flex items-center justify-center mx-auto text-gold-champagne animate-bounce">
                      <Check className="w-8 h-8" />
                    </div>

                    <div>
                      <h4 className="font-serif text-lg text-white font-medium">Briefing Compilado com Sucesso!</h4>
                      <p className="font-sans text-xs text-gray-400 mt-2 leading-relaxed px-4">
                        Seu dossier exclusivo está sendo montado pela nossa assessoria. Para agilizar o atendimento, você foi direcionado para nosso WhatsApp prioritário.
                      </p>
                    </div>

                    <button
                      id="modal-done-btn"
                      onClick={resetForm}
                      className="w-full bg-gold-champagne hover:bg-gold-light text-black font-alt font-bold tracking-widest text-xs uppercase py-4 rounded-md transition-all"
                    >
                      Concluir
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
