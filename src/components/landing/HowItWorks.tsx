import React from 'react';
import { motion } from 'framer-motion';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: "🧙",
      title: "O Mestre Cria",
      description: "Você define as Quests e as recompensas na Taverna.",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: "⚔️",
      title: "O Herói Age",
      description: "Seu filho completa as tarefas e ganha XP e FC (Moedas).",
      color: "from-gold to-yellow-300"
    },
    {
      icon: "🏆",
      title: "A Recompensa",
      description: "Ele resgata prêmios reais: pizza, tempo de jogo, passeio.",
      color: "from-purple-magic to-purple-light"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 bg-[#0D0D0D] relative z-20 border-t border-white/5 overflow-hidden">
      {/* Background HUD Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #7B2FBE 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-6 text-glow-gold uppercase tracking-tighter">
            Como a Magia Acontece
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-sans">
            Transforme obrigações em uma jornada de gamificação.
          </p>
          <div className="w-32 h-[1px] bg-gold/30 mx-auto mt-8 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gold rotate-45" />
          </div>
        </motion.div>

        <div className="relative">
          {/* Connecting line (Desktop only) */}
          <div className="hidden md:block absolute top-[64px] left-[15%] right-[15%] h-[1px] bg-white/10 z-0">
             <motion.div 
               className="h-full bg-gradient-to-r from-purple-magic via-gold to-purple-magic shadow-[0_0_10px_rgba(123,47,190,0.5)]"
               initial={{ width: 0 }}
               whileInView={{ width: "100%" }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.4 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-10">
                  <div className="w-32 h-32 rounded-sm flex items-center justify-center text-5xl bg-glass p-1 border border-white/10 relative overflow-hidden group-hover:border-gold/50 transition-colors duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                    <span className="relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{step.icon}</span>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold/40" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold/40" />
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#0D0D0D] text-gold font-bold flex items-center justify-center border border-gold/40 font-cinzel text-xl skew-x-[-10deg] shadow-[4px_4px_0px_rgba(245,197,24,0.1)]">
                    {index + 1}
                  </div>
                </div>

                <h3 className="font-cinzel font-bold text-2xl text-white mb-4 group-hover:text-gold transition-colors tracking-wide">
                  {step.title}
                </h3>
                <p className="text-white/50 leading-relaxed max-w-xs font-sans text-sm md:text-base group-hover:text-white/70 transition-colors">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
