import React from 'react';
import { motion } from 'framer-motion';

interface XPBarProps {
  progress?: number;
}

export const XPBar: React.FC<XPBarProps> = ({ progress = 75 }) => {
  return (
    <div className="w-full max-w-md mx-auto relative z-10">
      <div className="flex justify-between items-end mb-2">
        <span className="font-cinzel text-gold font-bold text-sm tracking-widest uppercase text-shadow">XP da Família</span>
        <span className="text-xs text-text-muted font-medium">Nível 5</span>
      </div>
      <div className="h-6 w-full bg-black/80 border-2 border-gold/40 rounded-sm overflow-hidden relative shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-magic to-purple-light shadow-[0_0_15px_rgba(168,85,247,0.8)] relative"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <div className="absolute inset-0 bg-white/20 w-full h-1 top-0 opacity-50"></div>
        </motion.div>
        
        {/* Pattern overlay for the RPG look */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay z-20"
          style={{ backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')` }} 
        />
      </div>
    </div>
  );
};
