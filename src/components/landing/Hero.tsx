import { useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { ParticlesBackground } from './ParticlesBackground';
import { XPBar } from './XPBar';
import { CylinderCarousel } from './CylinderCarousel';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const rotationValue = useMotionValue(0);
  const isDragging = useRef(false);
  const velocityRef = useRef(0);
  const autoSpeedRef = useRef(0.25);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const tick = () => {
        if (!isDragging.current) {
            velocityRef.current *= 0.92;
            rotationValue.set(rotationValue.get() + autoSpeedRef.current + velocityRef.current);
        }
        rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [rotationValue]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const offset = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      autoSpeedRef.current = offset * 2.5;
  }, []);

  const handleMouseLeave = useCallback(() => {
      autoSpeedRef.current = 0.25;
  }, []);



  return (
    <section 
      className="relative h-[100dvh] flex flex-col justify-center items-center overflow-hidden bg-[#0D0D0D] pt-20 px-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <ParticlesBackground density={50} />
      
      {/* HUD Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-20">
        <div className="absolute inset-x-0 h-[2px] bg-purple-magic/40 blur-[2px] animate-hud-scanline" />
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-magic/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gold/10 blur-[100px] rounded-full"></div>

      {/* HUD Brackets / Frame */}
      <div className="absolute inset-10 pointer-events-none z-10 border border-white/5">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/40" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/40" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/40" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/40" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
        
        {/* Left Side: Content */}
        <div className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-purple-magic/10 border border-purple-magic/40 text-purple-light text-xs font-bold font-cinzel tracking-[0.2em] mb-6 neon-glow-purple"
          >
            Sua Família Além da Planilha ⚔️
          </motion.div>

          <h1 className="font-cinzel font-extrabold text-4xl md:text-6xl text-white leading-tight mb-8 text-center lg:text-left text-glow-gold">
            Aventuras, quests e jogos em apenas alguns toques
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white/70 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed text-center lg:text-left font-sans"
          >
            No <span className="text-gold font-bold text-glow-gold">Family Quest</span>, arrumar o quarto vira um boss caseiro e o dever de casa gera recompensas épicas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col gap-8 w-full items-center lg:items-start"
          >
            <a 
              href="https://tarefas-ebon.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full max-w-[340px] px-8 py-5 bg-purple-magic text-white font-black font-cinzel rounded-sm hover:scale-[1.02] active:scale-[0.98] transition-all text-xl uppercase tracking-wider overflow-hidden flex items-center justify-center text-center shadow-[0_0_20px_rgba(123,47,190,0.5)]"
            >
              <span className="relative z-10">Comece sua Jornada Agora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <div className="absolute -inset-[1px] border border-gold/30 rounded-sm pointer-events-none" />
            </a>
            
            <div className="flex flex-col items-center lg:items-start w-full max-w-[400px] glass-card p-4 rounded-lg border border-white/5">
              <span className="text-gold/60 text-[10px] font-bold font-cinzel mb-3 tracking-[0.3em] uppercase">Status da Aliança Familiar</span>
              <XPBar progress={75} />
            </div>
          </motion.div>
        </div>

        {/* Right Side: Cylinder Carousel - Hidden on Mobile/Tablet */}
        <div className="hidden lg:block order-1 lg:order-2 relative">
          <div className="absolute -inset-10 border border-white/5 pointer-events-none -z-10 bg-radial-gradient from-purple-magic/5 to-transparent blur-2xl" />
          <CylinderCarousel 
            rotationValue={rotationValue} 
            isDragging={isDragging} 
            velocityRef={velocityRef} 
          />
        </div>

      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/40 hidden md:block cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }}
      >
        <ChevronDown size={40} className="drop-shadow-[0_0_8px_rgba(245,197,24,0.3)]" />
      </motion.div>
    </section>
  );
};
