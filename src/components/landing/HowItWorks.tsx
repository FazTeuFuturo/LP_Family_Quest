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
    <section id="how-it-works" className="py-24 px-4 bg-[#0D0D0D] relative z-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Como a Magia Acontece
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">Transforme obrigações em uma jornada de gamificação.</p>
        </motion.div>

        <div className="relative">
          {/* Connecting line (Desktop only) */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-1 bg-gray-800 z-0 rounded-full overflow-hidden">
             <motion.div 
               className="h-full bg-gold"
               initial={{ width: 0 }}
               whileInView={{ width: "100%" }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.4 }}
                className="flex flex-col items-center text-center"
              >
                <div className={`w-32 h-32 rounded-full flex items-center justify-center text-5xl mb-6 bg-gradient-to-br ${step.color} shadow-lg shadow-black/50 border-4 border-[#0D0D0D] ring-2 ring-gold/40 relative`}>
                  <div className="absolute inset-0 bg-black/20 rounded-full rounded-full mix-blend-overlay"></div>
                  <span className="relative z-10 drop-shadow-md">{step.icon}</span>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-bg-secondary text-gold font-bold flex items-center justify-center border-2 border-gold font-cinzel">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-cinzel font-bold text-2xl text-text-primary mb-3">{step.title}</h3>
                <p className="text-text-muted leading-relaxed max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
