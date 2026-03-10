import { memo } from 'react';
import { motion } from 'framer-motion';

// Bell curve helper: concentra partículas no centro mas espalha até as bordas
const bell = () => (Math.random() + Math.random() + Math.random()) / 3;

const PARTICLES = Array.from({ length: 70 }, (_, i) => ({
    id: i,
    left: 2 + bell() * 96,
    bottom: 5 + Math.random() * 60,
    size: 1.5 + Math.random() * 4,
    delay: Math.random() * 10,
    duration: 6 + Math.random() * 8,
    drift: (Math.random() - 0.5) * 100,
    maxOp: 0.3 + Math.random() * 0.4,
    color: i % 10 < 4 
        ? 'rgba(245,197,24,1)'    // Ouro (Gold)
        : i % 10 < 8 
            ? 'rgba(168,85,247,1)'// Roxo (Magic)
            : 'rgba(255,255,255,1)' // Branco
}));

interface ParticlesBackgroundProps {
  density?: number;
}

export const ParticlesBackground = memo(({ density = 70 }: ParticlesBackgroundProps) => {
  const displayedParticles = PARTICLES.slice(0, density);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {displayedParticles.map(p => (
            <motion.div
                key={p.id}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0, p.maxOp, p.maxOp * 0.5, 0],
                    y: [0, -180, -400, -600],
                    x: [0, p.drift * 0.3, p.drift, p.drift * 0.7],
                }}
                transition={{
                    duration: p.duration,
                    delay: p.delay,
                    repeat: Infinity,
                    ease: 'linear',
                    times: [0, 0.15, 0.65, 1],
                }}
                className="absolute"
                style={{
                    bottom: `${p.bottom}%`,
                    left: `${p.left}%`,
                    width: p.size,
                    height: p.size,
                    borderRadius: '50%',
                    background: p.color,
                    boxShadow: `0 0 ${p.size * 2}px ${p.color}, 0 0 ${p.size * 5}px ${p.color.replace(',1)', ',0.3)')}`,
                }}
            />
        ))}
    </div>
  );
});
