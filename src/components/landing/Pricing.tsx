import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-4 bg-[#0D0D0D] relative z-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-6 text-glow-gold uppercase tracking-tighter">
            Escolha sua Jornada
          </h2>
          <p className="text-white/60 text-lg font-sans">Sem pegadinhas. Planos simples para famílias épicas.</p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Plano Gratuito */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-sm p-10 flex flex-col relative overflow-hidden transition-all hud-border group"
          >
            <div className="mb-8">
              <h3 className="font-cinzel text-2xl font-bold text-white mb-2 tracking-wide uppercase">Jornada Inicial</h3>
              <p className="text-white/40 text-sm mb-8 font-sans">Ideal para conhecer a dinâmica de gamificação.</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-white text-glow-gold">R$ 0</span>
                <span className="text-white/30 font-cinzel text-xs uppercase tracking-widest">/para sempre</span>
              </div>
            </div>

            <ul className="space-y-5 mb-10 flex-1">
              <li className="flex items-center gap-4 text-sm text-white/70 font-sans">
                <Check className="w-5 h-5 text-gold/60" /> Até 1 Herói (Filho) e 1 Mestre
              </li>
              <li className="flex items-center gap-4 text-sm text-white/70 font-sans">
                <Check className="w-5 h-5 text-gold/60" /> 2 Missões ativas simultâneas
              </li>
              <li className="flex items-center gap-4 text-sm text-white/70 font-sans">
                <Check className="w-5 h-5 text-gold/60" /> 1 Missão recorrente diária
              </li>
              <li className="flex items-center gap-4 text-sm text-white/70 font-sans">
                <Check className="w-5 h-5 text-gold/60" /> Taverna de Recompensas
              </li>
              <li className="flex items-center gap-4 text-sm text-white/30 font-sans line-through opacity-50">
                <X className="w-5 h-5 text-red-500/50" /> Suporte VIP WhatsApp
              </li>
            </ul>

            <a 
              href="https://tarefas-ebon.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-sm border border-white/10 text-white font-bold font-cinzel hover:bg-white/5 transition-all flex items-center justify-center text-center uppercase tracking-widest group-hover:border-white/30"
            >
              Começar Grátis
            </a>
          </motion.div>

          {/* Plano Lendário */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-sm p-10 flex flex-col relative overflow-hidden shadow-[0_0_40px_rgba(123,47,190,0.3)] transform md:-translate-y-4 hud-border border-purple-magic/40 group"
          >
            <div className="absolute top-0 right-0 bg-gold text-[#0D0D0D] font-bold text-[10px] uppercase tracking-[0.2em] py-2 px-6 rounded-bl-sm font-cinzel text-glow-gold">
              Mais Popular
            </div>

            <div className="mb-8">
              <h3 className="font-cinzel text-2xl font-bold text-gold mb-2 tracking-wide uppercase text-glow-gold">Clã Lendário</h3>
              <p className="text-white/40 text-sm mb-8 font-sans">Controle completo da rotina de múltiplos filhos.</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-white text-glow-gold">R$ 9,90</span>
                <span className="text-white/30 font-cinzel text-xs uppercase tracking-widest">/mês</span>
              </div>
            </div>

            <ul className="space-y-5 mb-10 flex-1">
              <li className="flex items-center gap-4 text-sm text-white font-medium font-sans">
                <Check className="w-5 h-5 text-gold drop-shadow-[0_0_8px_rgba(245,197,24,0.6)]" /> Até 3 Heróis e 2 Mestres (Co-parentalidade)
              </li>
              <li className="flex items-center gap-4 text-sm text-white font-medium font-sans">
                <Check className="w-5 h-5 text-gold drop-shadow-[0_0_8px_rgba(245,197,24,0.6)]" /> 200 Missões ativas (Ilimitado)
              </li>
              <li className="flex items-center gap-4 text-sm text-white font-medium font-sans">
                <Check className="w-5 h-5 text-gold drop-shadow-[0_0_8px_rgba(245,197,24,0.6)]" /> 200 Missões diárias (Ilimitado)
              </li>
              <li className="flex items-center gap-4 text-sm text-white font-medium font-sans">
                <Check className="w-5 h-5 text-gold drop-shadow-[0_0_8px_rgba(245,197,24,0.6)]" /> Todas as features desbloqueadas
              </li>
              <li className="flex items-center gap-4 text-sm text-white font-medium font-sans">
                <Check className="w-5 h-5 text-gold drop-shadow-[0_0_8px_rgba(245,197,24,0.6)]" /> Suporte VIP Canal Direto
              </li>
            </ul>

            <a 
              href="https://tarefas-ebon.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-5 rounded-sm bg-purple-magic text-white font-bold font-cinzel text-xl shadow-[0_0_20px_rgba(123,47,190,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center text-center uppercase tracking-widest relative overflow-hidden"
            >
              <span className="relative z-10">Tornar-se Lendário</span>
              <div className="absolute inset-x-0 h-[2px] bg-white/20 bottom-0 group-hover:animate-hud-scanline" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
