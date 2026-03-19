import React from 'react';
import { motion } from 'framer-motion';
import { ParticlesBackground } from './ParticlesBackground';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-[#0D0D0D] border-t border-white/5">
      {/* Background Particles (Denser) */}
      <ParticlesBackground density={60} />
      
      {/* Background HUD Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-10">
        <div className="absolute inset-x-0 h-[2px] bg-purple-magic/40 blur-[2px] animate-hud-scanline" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-20">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-5 py-2 rounded-sm bg-purple-magic/10 border border-purple-magic/30 text-purple-light text-xs font-bold mb-10 uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(123,47,190,0.3)] font-cinzel">
            Aventura Sem Limites
          </div>
          
          <h2 className="font-cinzel text-4xl md:text-7xl font-bold text-white mb-10 text-glow-gold tracking-tight lowercase">
            Sua Família Está Pronta para a Aventura?
          </h2>
          
          <div className="flex flex-col items-center mb-16">
             <div className="glass-card p-6 px-10 rounded-sm border border-gold/40 shadow-[0_0_30px_rgba(245,197,24,0.2)] md:skew-x-[-10deg]">
               <div className="md:skew-x-[10deg] flex items-center gap-4">
                 <span className="text-4xl font-black text-white text-glow-gold">R$ 9,90</span>
                 <span className="text-white/40 font-cinzel text-sm uppercase tracking-widest border-l border-white/10 pl-4">por mês / Clã Lendário</span>
               </div>
             </div>
             
             <p className="mt-8 text-white/60 font-medium text-lg font-sans">
               🛡️ Sua família engajada ou seu dinheiro de volta — <span className="text-gold font-bold text-glow-gold underline decoration-gold/30 underline-offset-4">7 dias de teste grátis</span>.
             </p>
          </div>
          
          <a 
            href="https://tarefas-ebon.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-purple-magic text-white font-cinzel font-black text-xl md:text-3xl px-12 py-6 rounded-sm shadow-[0_0_30px_rgba(123,47,190,0.5)] hover:scale-[1.05] active:scale-[0.95] transition-all w-full md:w-auto flex items-center justify-center text-center uppercase tracking-widest overflow-hidden"
          >
            <span className="relative z-10">⚔️ Quero Transformar Minha Família</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold/50" />
          </a>
          
          <p className="mt-10 text-xs text-white/30 font-medium font-cinzel tracking-widest uppercase">
            Mais de 500 famílias já entraram na aventura. Restaure a paz gamificada na sua casa.
          </p>
        </motion.div>
      </div>
      
      {/* HUD Brackets for Final Section */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-white/5 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-white/5 pointer-events-none" />
    </section>
  );
};
