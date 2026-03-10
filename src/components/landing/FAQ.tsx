import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Funciona para crianças de qual idade?",
      a: "O Family Quest é recomendado para crianças a partir de 6 anos e adolescentes até 14 anos. As missões podem ser adaptadas (desde escovar os dentes até arrumar o próprio quarto ou alimentar o pet)."
    },
    {
      q: "Preciso pagar por cada filho?",
      a: "Não! O Plano Lendário (Premium) permite gerenciar até 3 Heróis (Filhos) e convidar até 2 Mestres (Pais) na mesma assinatura de R$ 9,90 mensais."
    },
    {
      q: "Posso usar no celular das crianças?",
      a: "Sim. O Family Quest é um PWA (Web App Progressivo), o que significa que ele pode ser instalado direto na tela do celular sem ocupar espaço como um app de loja."
    },
    {
      q: "As moedas e prêmios são fornecidos pelo app?",
      a: "As Family Coins (FC) são moedas virtuais do aplicativo que a criança ganha ao completar as missões. Porém, as recompensas da Taverna (onde as moedas são gastas) são objetos reais ou vivências definidos por você: uma noite de pizza, um passeio ao parque ou liberação de horas no videogame."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 bg-[#111827] relative z-20 border-t border-b border-white/5">
      <div className="max-w-3xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white mb-4">
            Dúvidas Frequentes
          </h2>
          <div className="w-24 h-1 bg-purple-magic mx-auto mt-6"></div>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.3, delay: index * 0.1 }}
               className="border border-white/10 rounded-xl overflow-hidden bg-[#0D0D0D]"
             >
               <button
                 onClick={() => setOpenIndex(openIndex === index ? null : index)}
                 className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-white hover:text-gold transition-colors focus:outline-none"
               >
                 <span>{faq.q}</span>
                 <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-gold" : "text-gray-500"}`} />
               </button>
               
               <AnimatePresence>
                 {openIndex === index && (
                   <motion.div
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: "auto", opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     transition={{ duration: 0.3 }}
                   >
                     <div className="px-6 pb-6 text-text-muted leading-relaxed">
                       {faq.a}
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
