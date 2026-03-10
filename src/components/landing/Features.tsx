import React from 'react';
import { motion } from 'framer-motion';

export const Features: React.FC = () => {
  const featus = [
    {
      icon: "🪙",
      title: "Economia Real",
      desc: "Family Coins que compram recompensas reais definidas por você na Taverna."
    },
    {
      icon: "📈",
      title: "Educação Financeira",
      desc: "A criança aprende que esforço gera recursos, na prática de forma lúdica."
    },
    {
      icon: "🎮",
      title: "Design de Game",
      desc: "Não parece planilha de controle. Parece um jogo de console de última geração."
    },
    {
      icon: "🏅",
      title: "Leaderboard Familiar",
      desc: "Competição saudável entre irmãos e dependentes pelo topo do ranking."
    }
  ];

  return (
    <section id="features" className="py-24 px-4 bg-[#111827] relative z-20 border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-4">
            Por que o Family Quest é diferente
          </h2>
          <div className="w-24 h-1 bg-purple-magic mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featus.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="bg-[#0D0D0D] p-8 rounded-2xl border-2 border-transparent hover:border-gold hover:shadow-[0_0_30px_rgba(245,197,24,0.15)] transition-all flex gap-6 items-start group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl p-4 bg-[#111827] rounded-xl border border-white/10 group-hover:border-gold/30 transition-colors shadow-inner relative z-10">
                {feat.icon}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold font-cinzel text-white mb-2 group-hover:text-gold transition-colors">{feat.title}</h3>
                <p className="text-text-muted leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
