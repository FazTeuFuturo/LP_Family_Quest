import { memo } from 'react';
import { motion, useTransform } from 'framer-motion';

const CARDS = [
    { id: 0, img: "/landing/poster_warrior_flat.png", color: "from-gold/20" },
    { id: 1, img: "/landing/poster_mage_flat.png", color: "from-purple-magic/20" },
    { id: 2, img: "/landing/poster_dragon_flat.png", color: "from-red-500/20" }
];

const FACE_COUNT = CARDS.length;
const FACE_WIDTH = 220;
const CYLINDER_WIDTH = FACE_WIDTH * FACE_COUNT;
const RADIUS = CYLINDER_WIDTH / (2 * Math.PI);

interface CylinderProps {
    rotationValue: any;
    isDragging: React.MutableRefObject<boolean>;
    velocityRef: React.MutableRefObject<number>;
}

export const CylinderCarousel = memo(({ rotationValue, isDragging, velocityRef }: CylinderProps) => {
    const cylinderTransform = useTransform(
        rotationValue,
        (v: number) => `rotate3d(0, 1, 0, ${v}deg)`
    );

    return (
        <div className="w-full h-[380px] flex items-center justify-center relative z-10" style={{ perspective: '1200px' }}>
            <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0}
                onDragStart={() => { isDragging.current = true; }}
                onDrag={(_, info) => {
                    rotationValue.set(rotationValue.get() + info.delta.x * 0.4);
                }}
                onDragEnd={(_, info) => {
                    isDragging.current = false;
                    velocityRef.current = info.velocity.x * 0.06;
                }}
                style={{
                    transform: cylinderTransform,
                    width: `${FACE_WIDTH}px`,
                    height: '100%',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    cursor: 'grab',
                }}
                whileTap={{ cursor: 'grabbing' }}
            >
                {CARDS.map((card, i) => (
                    <div
                        key={card.id}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: '50%',
                            width: `${FACE_WIDTH}px`,
                            height: '100%',
                            marginLeft: `-${FACE_WIDTH / 2}px`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: `rotateY(${i * (360 / FACE_COUNT)}deg) translateZ(${RADIUS + 20}px)`,
                            backfaceVisibility: 'hidden',
                        }}
                    >
                        <motion.div 
                          className="relative group w-full h-full"
                          initial={{ filter: 'blur(10px)', opacity: 0 }}
                          animate={{ filter: 'blur(0px)', opacity: 1 }}
                          transition={{ duration: 0.8, delay: i * 0.2 }}
                        >
                            {/* Card Frame */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${card.color} to-transparent opacity-40 rounded-xl border-2 border-white/10 group-hover:border-gold/50 transition-colors shadow-2xl`} />
                            
                            {/* Fallback image style (gradients) if assets missing, but aiming for images */}
                            <img
                                src={card.img}
                                alt={`Hero ${i}`}
                                draggable={false}
                                className="w-full h-full object-cover rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] pointer-events-none"
                                onError={(e) => {
                                  // Simple placeholder if image fails to load
                                  (e.target as HTMLImageElement).src = `https://placehold.co/400x600/111827/F5C518?text=Hero+${i+1}`;
                                }}
                            />
                            
                            {/* Decorative Corner */}
                            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold/50" />
                            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold/50" />
                        </motion.div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
});
