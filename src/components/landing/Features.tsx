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
    <section id="features" className="py-24 px-4 bg-[#0D0D0D] relative z-20 border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16 relative"
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-purple-magic/10 blur-3xl -z-10" />
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-4 text-glow-gold">
            Por que o Family Quest é diferente
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6 shadow-[0_0_10px_rgba(245,197,24,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featus.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`glass-card p-8 rounded-sm hover:border-gold/50 transition-all group relative overflow-hidden flex flex-col justify-between hud-border ${
                i === 0 || i === 3 ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-4xl mb-6 w-16 h-16 flex items-center justify-center bg-purple-magic/10 rounded-lg border border-purple-magic/20 group-hover:neon-glow-purple transition-all duration-500">
                  {feat.icon}
                </div>
                
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-cinzel text-white mb-3 group-hover:text-gold transition-colors tracking-wide">
                    {feat.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-sans text-sm md:text-base">
                    {feat.desc}
                  </p>
                </div>
              </div>

              {/* HUD Decorative Elements */}
              <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-100 transition-opacity">
                <div className="text-[10px] font-cinzel text-gold tracking-widest uppercase">
                  System.Log_{i + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
