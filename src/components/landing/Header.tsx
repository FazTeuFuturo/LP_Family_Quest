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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#0D0D0D]/80 backdrop-blur-xl py-3 border-b border-gold/10 hud-border' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Stylized like the Screenshot */}
        <div 
          className="cursor-pointer font-cinzel font-black text-xl md:text-2xl text-gold tracking-[3px] text-glow-gold uppercase" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          FAMILY<span className="text-white/80">QUEST</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] font-bold text-white/40 hover:text-gold transition-all font-cinzel tracking-[0.2em] uppercase relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full" />
            </a>
          ))}
          <div className="flex items-center gap-6 pl-6 border-l border-white/10">
            <a 
              href="https://tarefas-ebon.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-8 py-2 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gold/10 border border-gold/30 rounded-sm skew-x-[-15deg] group-hover:bg-gold/20 transition-all" />
              <span className="relative z-10 font-cinzel font-bold text-gold text-xs uppercase tracking-widest">
                Login
              </span>
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
