import React from 'react';
import { motion } from 'framer-motion';

export const Testimonials: React.FC = () => {
  const tests = [
    {
      initials: "AL",
      text: "Minha filha de 8 anos pediu para lavar a louça porque queria ganhar FCs para a pizza da sexta. Nunca imaginei que isso fosse possível.",
      author: "Ana Lima, São Paulo"
    },
    {
      initials: "CM",
      text: "Acabou a guerra do quarto sujo. Em 2 semanas meu filho de 11 anos já faz tudo sozinho. Competição saudável com o irmão mais novo salvou nosso tempo.",
      author: "Carlos Mendes, BH"
    },
    {
      initials: "MC",
      text: "O melhor investimento que fiz pela harmonia da minha família. A gente se diverte definindo as missões no domingo à noite agora.",
      author: "Mariana Costa, Curitiba"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 bg-[#0D0D0D] relative z-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-4 text-glow-gold">
            Famílias que viraram Lendas
          </h2>
          <div className="w-24 h-[1px] bg-gold/30 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tests.map((t, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.2 }}
               className="glass-card p-10 rounded-sm border border-white/5 relative group hover:border-gold/30 transition-all duration-500 hud-border"
             >
               <div className="flex flex-col items-center text-center mt-6">
                 <div className="w-20 h-20 bg-purple-magic/20 border border-purple-magic/40 text-purple-light flex items-center justify-center font-cinzel font-bold text-2xl mb-8 neon-glow-purple relative overflow-hidden">
                   <div className="absolute inset-x-0 h-[10%] bg-white/10 animate-hud-scanline opacity-30" />
                   {t.initials}
                 </div>
                 
                 <p className="text-white/70 italic mb-8 relative z-10 leading-relaxed min-h-[120px] font-sans text-lg">
                   "{t.text}"
                 </p>
                 
                 <div className="mt-auto">
                   <p className="font-bold text-white font-cinzel tracking-wider">{t.author}</p>
                   <div className="flex justify-center gap-1 mt-4">
                     {[1,2,3,4,5].map(star => (
                       <span key={star} className="text-gold text-lg motion-safe:animate-pulse" style={{ animationDelay: `${star * 0.1}s` }}>★</span>
                     ))}
                   </div>
                 </div>
               </div>

               {/* Decorative HUD corners */}
               <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/10" />
               <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/10" />
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
