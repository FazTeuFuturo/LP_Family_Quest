import React from 'react';
import { motion } from 'framer-motion';
import { ParticlesBackground } from './ParticlesBackground';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-b from-[#0D0D0D] to-[#1a0a2e]">
      {/* Background Particles (Denser) */}
      <ParticlesBackground density={40} />
      
      <div className="max-w-4xl mx-auto text-center relative z-20">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-magic/20 border border-purple-light/50 text-purple-light text-sm font-bold mb-8 uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            Aventura Sem Limites
          </div>
          
          <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-white mb-8">
            Sua Família Está Pronta para a Aventura?
          </h2>
          
          <div className="flex flex-col items-center mb-12">
             <div className="flex items-center gap-3 bg-[#0D0D0D] p-4 rounded-xl border border-gold/30 shadow-brutal-gold">
               <span className="text-3xl font-black text-white">R$ 9,90</span>
               <span className="text-text-muted font-cinzel">por mês / Clã Lendário</span>
             </div>
             
             <p className="mt-6 text-gray-300 font-medium text-lg">
               🛡️ Sua família engajada ou seu dinheiro de volta — <span className="text-white font-bold">7 dias de teste grátis</span>.
             </p>
          </div>
          
          <button onClick={() => document.getElementById('pricing')?.scrollIntoView()} className="bg-gold text-[#0D0D0D] font-cinzel font-black text-xl md:text-2xl px-10 py-5 rounded-lg shadow-brutal animate-[glow-pulse_3s_infinite] hover:translate-x-1 hover:translate-y-1 transition-transform w-full md:w-auto">
            ⚔️ Quero Transformar Minha Família
          </button>
          
          <p className="mt-8 text-sm text-text-muted font-medium">
            Mais de 500 famílias já entraram na aventura. Restaurne a paz gamificada na sua casa.
          </p>
        </motion.div>
      </div>
      
      {/* Glow Base at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-magic/20 to-transparent pointer-events-none"></div>
    </section>
  );
};
