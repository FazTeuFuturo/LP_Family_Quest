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
      className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden bg-[#0D0D0D] pt-20 px-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <ParticlesBackground density={50} />
      
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-magic/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gold/10 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
        
        {/* Left Side: Content */}
        <div className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold font-cinzel tracking-widest mb-6"
          >
            Sua Família Além da Planilha ⚔️
          </motion.div>

          <h1 className="font-sans font-extrabold text-4xl md:text-6xl text-white leading-tight mb-8 text-center lg:text-left">
            Aventuras, quests e jogos em apenas alguns toques
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-text-muted text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed text-center lg:text-left"
          >
            No <span className="text-white font-bold">Family Quest</span>, arrumar o quarto vira um boss caseiro e o dever de casa gera recompensas épicas.
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
              className="w-full max-w-[340px] px-8 py-5 bg-hero-purple text-white font-black font-cinzel rounded-lg shadow-glow-purple hover:scale-[1.02] active:scale-[0.98] transition-all text-xl uppercase tracking-wider border-b-4 border-purple-900 flex items-center justify-center text-center"
            >
              Comece sua Jornada Agora
            </a>
            
            <div className="flex flex-col items-center lg:items-start w-full">
              <span className="text-white/60 text-[10px] font-bold font-cinzel mb-2 tracking-widest uppercase">Experiência da Família</span>
              <XPBar progress={75} />
            </div>
          </motion.div>
        </div>

        {/* Right Side: Cylinder Carousel */}
        <div className="order-1 lg:order-2">
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 hidden md:block cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }}
      >
        <ChevronDown size={40} />
      </motion.div>
    </section>
  );
};
