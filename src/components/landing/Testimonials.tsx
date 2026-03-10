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
    <section id="testimonials" className="py-24 px-4 bg-[#0D0D0D] relative z-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-4">
            Famílias que viraram Lendas
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tests.map((t, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.2 }}
               className="bg-[#111827] rounded-2xl p-8 border border-white/5 relative group hover:border-purple-magic/50 transition-colors"
             >
               {/* Quote Element */}
               <div className="text-4xl text-purple-magic/40 font-serif absolute top-6 left-6 select-none font-bold">
                 "
               </div>
               
               <div className="flex flex-col items-center text-center mt-6">
                 <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-yellow-500 text-[#0D0D0D] flex items-center justify-center font-cinzel font-bold text-xl mb-6 shadow-[0_0_15px_rgba(245,197,24,0.4)] ring-4 ring-[#111827]">
                   {t.initials}
                 </div>
                 
                 <p className="text-gray-300 italic mb-6 relative z-10 leading-relaxed min-h-[120px]">
                   "{t.text}"
                 </p>
                 
                 <div className="mt-auto">
                   <p className="font-bold text-white font-cinzel">{t.author}</p>
                   <div className="flex justify-center gap-1 mt-2">
                     {[1,2,3,4,5].map(star => (
                       <span key={star} className="text-gold text-sm">★</span>
                     ))}
                   </div>
                 </div>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
