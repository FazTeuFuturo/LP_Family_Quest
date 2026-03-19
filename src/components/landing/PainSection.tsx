import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';

export const PainSection: React.FC = () => {
  const pains = [
    {
      icon: "😤",
      text: "Pediu 10 vezes para arrumar o quarto e nada aconteceu."
    },
    {
      icon: "🏠",
      text: "Sente que a casa é um campo de batalha todo dia."
    },
    {
      icon: "💸",
      text: "Não sabe como ensinar o valor do dinheiro de forma prática."
    }
  ];

  return (
    <section id="pain" className="py-24 px-4 bg-[#0D0D0D] relative z-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-4 text-glow-gold">
            Reconhece alguma dessas situações?
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-10 rounded-sm text-center hud-border group hover:border-gold/30 transition-all duration-500"
            >
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(245,197,24,0.3)]">
                {pain.icon}
              </div>
              <p className="text-lg font-medium text-white/80 leading-relaxed italic font-sans">
                "{pain.text}"
              </p>
              
              <div className="mt-8 flex justify-center gap-1">
                {[1,2,3].map(i => (
                  <div key={i} className="w-1 h-1 bg-gold/20 rounded-full" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
