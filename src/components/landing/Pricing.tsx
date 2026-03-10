import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-4 bg-[#0D0D0D] relative z-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-4">
            Escolha sua Jornada
          </h2>
          <p className="text-text-muted text-lg">Sem pegadinhas. Planos simples para famílias épicas.</p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plano Gratuito */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111827] rounded-3xl border-2 border-white/10 p-8 flex flex-col relative overflow-hidden transition-all hover:border-white/30"
          >
            <div className="mb-8">
              <h3 className="font-cinzel text-2xl font-bold text-white mb-2">Jornada Inicial</h3>
              <p className="text-text-muted text-sm mb-6">Ideal para conhecer a dinâmica de gamificação.</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">R$ 0</span>
                <span className="text-text-muted">/para sempre</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Check className="w-5 h-5 text-gold" /> Até 1 Herói (Filho) e 1 Mestre
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Check className="w-5 h-5 text-gold" /> 2 Missões ativas simultâneas
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Check className="w-5 h-5 text-gold" /> 1 Missão recorrente diária
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Check className="w-5 h-5 text-gold" /> Taverna de Recompensas
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300 opacity-50">
                <X className="w-5 h-5 text-red-500" /> Suporte VIP WhatsApp
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl border border-white/20 text-white font-bold hover:bg-white/5 transition-colors">
              Começar Grátis
            </button>
          </motion.div>

          {/* Plano Lendário */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#111827] to-purple-magic/20 rounded-3xl border-2 border-gold p-8 flex flex-col relative overflow-hidden shadow-[0_0_30px_rgba(245,197,24,0.15)] transform md:-translate-y-4"
          >
            <div className="absolute top-0 right-0 bg-gold text-[#0D0D0D] font-bold text-xs uppercase tracking-wider py-1 px-4 rounded-bl-xl font-cinzel">
              Mais Popular
            </div>

            <div className="mb-8">
              <h3 className="font-cinzel text-2xl font-bold text-gold mb-2">Clã Lendário</h3>
              <p className="text-text-muted text-sm mb-6">Controle completo da rotina de múltiplos filhos.</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">R$ 9,90</span>
                <span className="text-text-muted">/mês</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-white font-medium">
                <Check className="w-5 h-5 text-gold drop-shadow-[0_0_5px_rgba(245,197,24,0.5)]" /> Até 3 Heróis e 2 Mestres (Co-parentalidade)
              </li>
              <li className="flex items-center gap-3 text-sm text-white font-medium">
                <Check className="w-5 h-5 text-gold drop-shadow-[0_0_5px_rgba(245,197,24,0.5)]" /> 200 Missões ativas (Ilimitado)
              </li>
              <li className="flex items-center gap-3 text-sm text-white font-medium">
                <Check className="w-5 h-5 text-gold drop-shadow-[0_0_5px_rgba(245,197,24,0.5)]" /> 200 Missões diárias (Ilimitado)
              </li>
              <li className="flex items-center gap-3 text-sm text-white font-medium">
                <Check className="w-5 h-5 text-gold drop-shadow-[0_0_5px_rgba(245,197,24,0.5)]" /> Todas as features desbloqueadas
              </li>
              <li className="flex items-center gap-3 text-sm text-white font-medium">
                <Check className="w-5 h-5 text-gold drop-shadow-[0_0_5px_rgba(245,197,24,0.5)]" /> Suporte VIP Canal Direto
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl bg-gold text-[#0D0D0D] font-bold font-cinzel text-lg shadow-brutal-gold hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all">
              Tornar-se Lendário
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
