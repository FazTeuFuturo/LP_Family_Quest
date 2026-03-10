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
    <section id="pain" className="py-24 px-4 bg-[#111827] relative z-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Reconhece alguma dessas situações?
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <SpotlightCard className="h-full flex flex-col items-center text-center">
                <div className="text-6xl mb-6">{pain.icon}</div>
                <p className="text-lg font-medium text-text-primary leading-relaxed">
                  "{pain.text}"
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
