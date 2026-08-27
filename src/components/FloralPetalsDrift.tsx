import React, { useMemo } from 'react';
import { motion } from 'motion/react';

interface PetalConfig {
  id: number;
  left: number; // percentage 0-100
  size: number; // width in px
  delay: number; // seconds
  duration: number; // seconds
  swayAmount: number; // px
  rotationStart: number;
  rotationEnd: number;
  colorType: 'rose' | 'blush' | 'burgundy' | 'gold' | 'champagne';
  opacity: number;
  type: 1 | 2 | 3;
}

interface FloralPetalsDriftProps {
  count?: number;
  className?: string;
  durationRange?: [number, number];
  fadeAfter?: number; // optional auto-fade seconds
}

export function FloralPetalsDrift({
  count = 20,
  className = 'fixed inset-0 pointer-events-none z-40 overflow-hidden',
  durationRange = [14, 26],
}: FloralPetalsDriftProps) {
  const petals: PetalConfig[] = useMemo(() => {
    const colors: PetalConfig['colorType'][] = ['rose', 'blush', 'burgundy', 'gold', 'champagne'];
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 14 + 12, // 12px to 26px
      delay: Math.random() * 6,
      duration: durationRange[0] + Math.random() * (durationRange[1] - durationRange[0]),
      swayAmount: (Math.random() - 0.5) * 160,
      rotationStart: Math.random() * 360,
      rotationEnd: (Math.random() > 0.5 ? 1 : -1) * (180 + Math.random() * 240),
      colorType: colors[i % colors.length],
      opacity: 0.35 + Math.random() * 0.45,
      type: ((i % 3) + 1) as 1 | 2 | 3,
    }));
  }, [count, durationRange]);

  const getColor = (colorType: PetalConfig['colorType']) => {
    switch (colorType) {
      case 'burgundy':
        return '#5B1E31';
      case 'rose':
        return '#A44A63';
      case 'blush':
        return '#D9899C';
      case 'gold':
        return '#CDB38B';
      case 'champagne':
        return '#E6D7C3';
    }
  };

  return (
    <div className={className} aria-hidden="true">
      {petals.map((petal) => {
        const fill = getColor(petal.colorType);
        return (
          <motion.div
            key={petal.id}
            initial={{
              top: '-8%',
              left: `${petal.left}%`,
              opacity: 0,
              rotate: petal.rotationStart,
              scale: 0.8,
            }}
            animate={{
              top: '108%',
              x: [0, petal.swayAmount, -petal.swayAmount * 0.6, petal.swayAmount * 0.3, 0],
              opacity: [0, petal.opacity, petal.opacity, petal.opacity * 0.6, 0],
              rotate: petal.rotationEnd,
              scale: [0.8, 1.05, 0.95, 1],
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              position: 'absolute',
              width: petal.size,
              height: petal.size * 1.3,
            }}
          >
            {petal.type === 1 ? (
              // Organic Rose Petal shape
              <svg viewBox="0 0 30 40" fill="none" className="w-full h-full drop-shadow-xs">
                <path
                  d="M15 2 C23 2, 29 10, 28 22 C27 31, 20 38, 15 39 C10 38, 3 31, 2 22 C1 10, 7 2, 15 2 Z"
                  fill={fill}
                  fillOpacity="0.85"
                />
                <path
                  d="M15 6 C17 14, 16 26, 15 36"
                  stroke={petal.colorType === 'gold' ? '#FAF7F2' : '#CDB38B'}
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>
            ) : petal.type === 2 ? (
              // Soft Curled Blossom Petal
              <svg viewBox="0 0 32 38" fill="none" className="w-full h-full drop-shadow-xs">
                <path
                  d="M16 2 C24 3, 30 12, 29 23 C28 32, 21 37, 16 37 C11 37, 3 31, 3 21 C3 11, 8 2, 16 2 Z"
                  fill={fill}
                  fillOpacity="0.8"
                />
                {/* Petal fold curve */}
                <path
                  d="M10 14 C15 17, 20 16, 24 12"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              // Delicate botanical leaf / petal flake
              <svg viewBox="0 0 28 42" fill="none" className="w-full h-full drop-shadow-xs">
                <path
                  d="M14 2 C22 8, 26 20, 24 30 C22 38, 16 41, 14 41 C12 41, 6 38, 4 30 C2 20, 6 8, 14 2 Z"
                  fill={fill}
                  fillOpacity="0.8"
                />
                <path
                  d="M14 6 L14 36"
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth="0.6"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
