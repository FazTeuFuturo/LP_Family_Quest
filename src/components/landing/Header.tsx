import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Diferenciais', href: '#features' },
    { name: 'Preço', href: '#pricing' },
    { name: 'Depoimentos', href: '#testimonials' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0D0D0D]/90 backdrop-blur-md py-3 border-b border-gold/20' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo Stylized like the Screenshot */}
        <div 
          className="cursor-pointer font-cinzel-deco font-black text-xl md:text-2xl text-gold tracking-[2px]" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          FAMILYQUEST
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-text-muted hover:text-gold transition-colors font-cinzel tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-lg">⋮</span>
            <a 
              href="https://tarefas-ebon.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-[#0D0D0D] px-6 py-2 rounded-md font-cinzel font-bold shadow-[0_0_15px_rgba(245,197,24,0.3)] hover:scale-105 transition-transform text-sm uppercase flex items-center justify-center"
            >
              Entrar
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gold p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0D0D0D] border-b border-gold/20 p-6 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-white hover:text-gold transition-colors font-cinzel px-4 py-2 border-l-2 border-transparent hover:border-gold"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('pricing')?.scrollIntoView();
              }}
              className="bg-gold text-[#0D0D0D] w-full py-4 rounded-md font-cinzel font-black shadow-brutal"
            >
              ENTRE NA TAVERNA
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
