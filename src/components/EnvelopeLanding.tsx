import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WEDDING_CONFIG } from '../data/weddingData';
import { FloralCorner, FloralWreath } from './Botanicals';
import { FloralPetalsDrift } from './FloralPetalsDrift';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

interface EnvelopeLandingProps {
  onOpen: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
}

export function EnvelopeLanding({ onOpen }: EnvelopeLandingProps) {
  // 'sealed' -> 'opening' -> 'revealed' -> 'entering'
  const [stage, setStage] = useState<'sealed' | 'opening' | 'revealed' | 'entering'>('sealed');
  const [particles, setParticles] = useState<Particle[]>([]);

  const handleOpenEnvelope = () => {
    if (stage !== 'sealed') return;
    setStage('opening');
    // Flap opens and card slides up smoothly
    setTimeout(() => {
      setStage('revealed');
    }, 1100);
  };

  const handleEnterWebsite = () => {
    if (stage === 'entering') return;
    setStage('entering');

    // Generate celebratory burst of gold and rose floral confetti / spark particles
    const newParticles: Particle[] = Array.from({ length: 42 }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 800,
      y: (Math.random() - 0.8) * 700,
      size: Math.random() * 8 + 4,
      color: i % 3 === 0 ? '#CDB38B' : i % 3 === 1 ? '#E6D7C3' : '#85374E',
      rotation: Math.random() * 360,
    }));
    setParticles(newParticles);

    // Give time for zoom, golden light flash, and particle burst before mounting main page
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={stage === 'entering' ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#230910] px-4 select-none overflow-hidden"
    >
      {/* Background ambient lighting */}
      <motion.div
        animate={
          stage === 'entering'
            ? {
                scale: 1.4,
                opacity: 0.9,
                transition: { duration: 1.2, ease: 'easeOut' },
              }
            : { scale: 1, opacity: 1 }
        }
        className="absolute inset-0 bg-radial from-[#4D1525]/85 via-[#2E0B16]/95 to-[#16040A] pointer-events-none"
      />

      {/* Golden Light Bloom overlay during transition */}
      <AnimatePresence>
        {stage === 'entering' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 2.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-radial from-[#FAF7F2]/90 via-[#CDB38B]/40 to-transparent pointer-events-none z-50"
          />
        )}
      </AnimatePresence>

      {/* Decorative Floral Screen Corners */}
      <FloralCorner
        position="top-left"
        className="absolute top-0 left-0 w-36 sm:w-56 h-36 sm:h-56 text-[#CDB38B] opacity-25 pointer-events-none"
      />
      <FloralCorner
        position="top-right"
        className="absolute top-0 right-0 w-36 sm:w-56 h-36 sm:h-56 text-[#CDB38B] opacity-25 pointer-events-none"
      />
      <FloralCorner
        position="bottom-left"
        className="absolute bottom-0 left-0 w-36 sm:w-56 h-36 sm:h-56 text-[#CDB38B] opacity-25 pointer-events-none"
      />
      <FloralCorner
        position="bottom-right"
        className="absolute bottom-0 right-0 w-36 sm:w-56 h-36 sm:h-56 text-[#CDB38B] opacity-25 pointer-events-none"
      />

      {/* Gentle drifting floral petals in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '15%', left: '12%', size: 'w-4 h-4', delay: 0 },
          { top: '25%', right: '15%', size: 'w-3 h-3', delay: 1.2 },
          { top: '70%', left: '18%', size: 'w-3.5 h-3.5', delay: 0.8 },
          { top: '80%', right: '20%', size: 'w-4 h-4', delay: 2.1 },
        ].map((petal, idx) => (
          <motion.div
            key={idx}
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
              rotate: [0, 15, -10, 0],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 5 + idx,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: petal.delay,
            }}
            style={{ top: petal.top, left: petal.left, right: petal.right }}
            className={`absolute ${petal.size} text-[#CDB38B]`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full opacity-60">
              <path d="M12 2C9 7 5 11 5 15C5 18.866 8.134 22 12 22C15.866 22 19 18.866 19 15C19 11 15 7 12 2Z" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Continuous Romantic Floating Petals */}
      <FloralPetalsDrift count={16} durationRange={[16, 26]} />

      {/* Transition Confetti / Floral Petal Burst */}
      {stage === 'entering' && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-45">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ x: 0, y: 0, opacity: 1, scale: 0.5, rotate: 0 }}
              animate={{
                x: p.x,
                y: p.y,
                opacity: 0,
                scale: 1.4,
                rotate: p.rotation + 180,
              }}
              transition={{
                duration: 1.2,
                ease: [0.25, 1, 0.5, 1],
              }}
              style={{
                width: p.size,
                height: p.size * 1.4,
                backgroundColor: p.color,
                borderRadius: '50% 50% 50% 0',
              }}
              className="absolute shadow-sm"
            />
          ))}
        </div>
      )}

      {/* Main Envelope & Card Stage */}
      <motion.div
        animate={
          stage === 'entering'
            ? {
                scale: 1.15,
                y: -40,
                opacity: 0,
                transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
              }
            : { scale: 1, y: 0, opacity: 1 }
        }
        className="relative w-full max-w-[360px] sm:max-w-[460px] h-[340px] sm:h-[400px] flex items-center justify-center z-10 perspective-[1400px]"
      >
        {/* Soft shadow beneath the envelope */}
        <div className="absolute bottom-2 sm:bottom-6 w-4/5 h-12 bg-black/70 blur-2xl rounded-full pointer-events-none" />

        {/* Envelope Structure */}
        <div className="relative w-[320px] sm:w-[420px] h-[220px] sm:h-[280px]">
          {/* 1. Envelope Back Base (Opaque background with floral inner lining) */}
          <div className="absolute inset-0 bg-[#350C18] rounded-xl border border-[#CDB38B]/40 shadow-2xl overflow-hidden">
            {/* Rich inner liner gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#22070E] to-[#3D0E1C]" />
            {/* Inner subtle floral watermarks inside liner */}
            <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
              <FloralWreath className="w-48 h-48 text-[#CDB38B]" />
            </div>
            <div className="absolute inset-2 border border-[#CDB38B]/20 rounded-lg pointer-events-none" />
          </div>

          {/* 2. The Sliding Invitation Card */}
          <motion.div
            initial={false}
            animate={
              stage === 'sealed'
                ? {
                    y: 20,
                    scale: 0.94,
                    opacity: 0,
                    zIndex: 10,
                  }
                : stage === 'entering'
                ? {
                    y: -150,
                    scale: 1.08,
                    opacity: 0.95,
                    zIndex: 35,
                    boxShadow: '0 25px 50px -12px rgba(205, 179, 139, 0.4)',
                    transition: { duration: 0.8 },
                  }
                : {
                    y: -135,
                    scale: 1.02,
                    opacity: 1,
                    zIndex: 35,
                    transition: {
                      delay: 0.35,
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }
            }
            className="absolute inset-x-3 sm:inset-x-5 top-3 h-[255px] sm:h-[305px] bg-[#FAF7F2] rounded-xl border-2 border-[#CDB38B] shadow-2xl p-4 sm:p-6 text-center flex flex-col justify-between overflow-hidden"
          >
            {/* Floral Card Corner Flourishes */}
            <FloralCorner position="top-left" className="absolute top-1 left-1 w-12 h-12 text-[#CDB38B] opacity-60 pointer-events-none" />
            <FloralCorner position="top-right" className="absolute top-1 right-1 w-12 h-12 text-[#CDB38B] opacity-60 pointer-events-none" />
            <FloralCorner position="bottom-left" className="absolute bottom-1 left-1 w-12 h-12 text-[#CDB38B] opacity-60 pointer-events-none" />
            <FloralCorner position="bottom-right" className="absolute bottom-1 right-1 w-12 h-12 text-[#CDB38B] opacity-60 pointer-events-none" />

            {/* Inner frame */}
            <div className="absolute inset-2 border border-[#CDB38B]/50 rounded-lg pointer-events-none" />

            {/* Top Monogram inside Floral Wreath */}
            <div className="relative z-10 pt-1 flex flex-col items-center justify-center">
              <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14">
                <FloralWreath className="absolute inset-0 w-full h-full text-[#CDB38B]" />
                <span className="font-serif text-base sm:text-lg text-[#5B1E31] italic tracking-widest font-normal">
                  C &amp; D
                </span>
              </div>
            </div>

            {/* Couple names & details */}
            <div className="relative z-10 my-auto py-1">
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#5D6B4F] font-semibold block mb-0.5">
                The Wedding Of
              </span>
              <h2 className="font-serif text-lg sm:text-2xl font-normal text-[#5B1E31] leading-tight">
                {WEDDING_CONFIG.bride}
              </h2>
              <span className="font-serif italic text-xs text-[#CDB38B] my-0.5 block">&amp;</span>
              <h2 className="font-serif text-lg sm:text-2xl font-normal text-[#5B1E31] leading-tight">
                {WEDDING_CONFIG.groom}
              </h2>

              <div className="mt-2 pt-1.5 border-t border-[#CDB38B]/30">
                <p className="font-serif text-xs sm:text-sm text-[#2B2A27] font-semibold">
                  {WEDDING_CONFIG.dateFormatted}
                </p>
                <p className="text-[9px] sm:text-[10px] text-[#6B6862]">
                  {WEDDING_CONFIG.venue.name} · {WEDDING_CONFIG.venue.location}
                </p>
              </div>
            </div>

            {/* Entry Action Button */}
            <div className="relative z-10 pb-1">
              {stage === 'revealed' || stage === 'entering' ? (
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileTap={{ scale: 0.96 }}
                  type="button"
                  onClick={handleEnterWebsite}
                  disabled={stage === 'entering'}
                  className="w-full py-2 sm:py-2.5 px-4 rounded-full bg-[#5B1E31] text-[#FAF7F2] text-xs uppercase tracking-widest font-bold hover:bg-[#431422] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-90"
                >
                  <Heart className="w-3 h-3 text-[#CDB38B] fill-current" />
                  <span>{stage === 'entering' ? 'Welcome to Our Wedding...' : 'Enter Wedding Celebration'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#CDB38B]" />
                </motion.button>
              ) : (
                <span className="text-[10px] text-[#5D6B4F] font-serif italic">
                  Opening your personal invitation...
                </span>
              )}
            </div>
          </motion.div>

          {/* 3. Envelope Front Pocket (Opaque with botanical engravings) */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 420 280"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Left Flap */}
              <polygon
                points="0,0 210,140 0,280"
                fill="#481120"
                stroke="#CDB38B"
                strokeWidth="0.75"
                opacity="1"
              />
              {/* Left flap inner gold leaf line */}
              <polyline
                points="10,20 190,135 10,260"
                stroke="#CDB38B"
                strokeWidth="0.5"
                strokeDasharray="4 3"
                opacity="0.5"
              />

              {/* Right Flap */}
              <polygon
                points="420,0 210,140 420,280"
                fill="#430F1D"
                stroke="#CDB38B"
                strokeWidth="0.75"
                opacity="1"
              />
              {/* Right flap inner gold leaf line */}
              <polyline
                points="410,20 230,135 410,260"
                stroke="#CDB38B"
                strokeWidth="0.5"
                strokeDasharray="4 3"
                opacity="0.5"
              />

              {/* Bottom Flap (Overlaps Left & Right) */}
              <polygon
                points="0,280 210,130 420,280"
                fill="#541627"
                stroke="#CDB38B"
                strokeWidth="1"
                opacity="1"
              />
              {/* Bottom flap gold leaf stitch */}
              <polyline
                points="20,270 210,145 400,270"
                stroke="#CDB38B"
                strokeWidth="0.6"
                strokeDasharray="5 3"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* 4. Top Triangular Flap (Folds DOWN over the pocket when sealed, FLIPS UP when opened) */}
          <motion.div
            initial={false}
            animate={
              stage === 'sealed'
                ? {
                    rotateX: 0,
                    zIndex: 30,
                  }
                : {
                    rotateX: 180,
                    zIndex: 5,
                    transition: {
                      duration: 0.75,
                      ease: [0.25, 1, 0.5, 1],
                    },
                  }
            }
            style={{ transformOrigin: 'top center' }}
            className="absolute top-0 inset-x-0 h-[145px] sm:h-[155px] pointer-events-none"
          >
            <svg
              className="w-full h-full drop-shadow-md"
              viewBox="0 0 420 155"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Top Flap Triangle */}
              <polygon
                points="0,0 210,150 420,0"
                fill="#5E192C"
                stroke="#CDB38B"
                strokeWidth="1.2"
                opacity="1"
              />
              {/* Decorative inner stitch line with floral leaf peak */}
              <polyline
                points="20,5 210,140 400,5"
                stroke="#CDB38B"
                strokeWidth="0.75"
                strokeDasharray="4 3"
                opacity="0.6"
              />
              {/* Tiny gold leaf emblem at flap apex */}
              <g transform="translate(210, 136)">
                <ellipse cx="-4" cy="-2" rx="3" ry="1.5" fill="#CDB38B" opacity="0.8" transform="rotate(-30)" />
                <ellipse cx="4" cy="-2" rx="3" ry="1.5" fill="#CDB38B" opacity="0.8" transform="rotate(30)" />
                <circle cx="0" cy="0" r="1.5" fill="#CDB38B" />
              </g>
            </svg>
          </motion.div>

          {/* 5. Clickable Wax Seal with Floral Leaves & "C & D" */}
          <AnimatePresence>
            {stage === 'sealed' && (
              <motion.button
                type="button"
                onClick={handleOpenEnvelope}
                exit={{ scale: 0, opacity: 0, transition: { duration: 0.25 } }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                aria-label="Click to open Cyrill & Dimple's wedding invitation"
                className="absolute z-40 top-[110px] sm:top-[125px] left-1/2 -translate-x-1/2 w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-gradient-to-br from-[#85374E] via-[#5B1E31] to-[#3B111E] text-[#FAF7F2] shadow-2xl ring-4 ring-[#CDB38B] flex flex-col items-center justify-center cursor-pointer group"
              >
                {/* Botanical leaves ring inside seal */}
                <div className="absolute inset-1.5 rounded-full border border-dashed border-[#CDB38B]/80 pointer-events-none" />
                <svg className="absolute inset-0 w-full h-full p-1 opacity-50 pointer-events-none" viewBox="0 0 100 100" fill="none">
                  <path d="M50 14 C52 18 52 22 50 26 C48 22 48 18 50 14 Z" fill="#CDB38B" />
                  <path d="M50 86 C52 82 52 78 50 74 C48 78 48 82 50 86 Z" fill="#CDB38B" />
                  <path d="M14 50 C18 52 22 52 26 50 C22 48 18 48 14 50 Z" fill="#CDB38B" />
                  <path d="M86 50 C82 52 78 52 74 50 C78 48 82 48 86 50 Z" fill="#CDB38B" />
                </svg>

                <span className="font-serif text-xl sm:text-2xl italic tracking-wider font-light text-[#FAF7F2] drop-shadow-xs relative z-10">
                  C&amp;D
                </span>
                <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.2em] text-[#CDB38B] font-sans font-bold mt-0.5 relative z-10">
                  Open
                </span>

                {/* Pulsing glow ring */}
                <div className="absolute -inset-1.5 rounded-full border border-[#CDB38B]/40 animate-ping pointer-events-none" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Subtle Hint & Couple Tagline */}
      <motion.div
        animate={stage === 'entering' ? { opacity: 0 } : { opacity: 1 }}
        className="mt-8 text-center z-10"
      >
        {stage === 'sealed' ? (
          <button
            type="button"
            onClick={handleOpenEnvelope}
            className="text-xs uppercase tracking-[0.25em] text-[#CDB38B] hover:text-[#FAF7F2] transition-colors flex items-center justify-center gap-2 cursor-pointer font-serif italic"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#CDB38B]" />
            <span>Click on the Wax Seal to Open Invitation</span>
            <Sparkles className="w-3.5 h-3.5 text-[#CDB38B]" />
          </button>
        ) : (
          <p className="text-xs text-[#CDB38B]/90 font-serif italic tracking-wide">
            Cyrill &amp; Dimple · December 22, 2026
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
