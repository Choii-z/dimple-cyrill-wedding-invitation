import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'motion/react';
import { WEDDING_CONFIG } from '../data/weddingData';
import { WaxSeal, GoldenDivider, OliveSprig } from './Botanicals';
import { ArrowUp, Heart, Sparkles, PartyPopper } from 'lucide-react';

export function Footer() {
  const [celebrationActive, setCelebrationActive] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const triggerCelebrationEasterEgg = () => {
    setCelebrationActive(true);
    setToastMessage('💐 Cheers to Cyrill & Dimple! Showering the couple with love & gold!');

    // 1. Center burst of gold & burgundy confetti
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.85, x: 0.5 },
      colors: ['#CDB38B', '#5B1E31', '#85374E', '#FAF7F2', '#D4AF37'],
      startVelocity: 45,
      scalar: 1.2,
    });

    // 2. Left and Right cannon streams
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 75,
        origin: { x: 0.1, y: 0.8 },
        colors: ['#CDB38B', '#D9899C', '#5B1E31', '#E6D7C3'],
        startVelocity: 50,
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 75,
        origin: { x: 0.9, y: 0.8 },
        colors: ['#CDB38B', '#D9899C', '#5B1E31', '#E6D7C3'],
        startVelocity: 50,
      });
    }, 250);

    // 3. Falling gold & rose petal shower
    setTimeout(() => {
      const end = Date.now() + 2000;
      const interval: ReturnType<typeof setInterval> = setInterval(() => {
        if (Date.now() > end) {
          return clearInterval(interval);
        }
        confetti({
          startVelocity: 20,
          spread: 360,
          ticks: 80,
          origin: {
            x: Math.random(),
            y: Math.random() * 0.3,
          },
          colors: ['#CDB38B', '#5B1E31', '#A44A63', '#FAF7F2', '#D4AF37'],
          scalar: 1.1,
          gravity: 0.7,
          drift: (Math.random() - 0.5) * 1.5,
        });
      }, 200);
    }, 500);

    // Reset celebration banner after 4.5s
    setTimeout(() => {
      setToastMessage(null);
      setCelebrationActive(false);
    }, 4500);
  };

  return (
    <footer className="bg-[#431422] text-[#FAF7F2] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
      {/* Decorative sprigs */}
      <OliveSprig className="absolute -bottom-10 left-4 w-32 h-64 text-[#CDB38B] opacity-15 pointer-events-none" />
      <OliveSprig flip className="absolute -bottom-10 right-4 w-32 h-64 text-[#CDB38B] opacity-15 pointer-events-none" />

      {/* Floating Celebration Toast Popup */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3.5 rounded-full bg-[#2B0A14]/95 text-[#FAF7F2] border-2 border-[#CDB38B] shadow-2xl backdrop-blur-md flex items-center gap-3 text-xs sm:text-sm font-serif"
          >
            <PartyPopper className="w-4 h-4 text-[#CDB38B] animate-bounce shrink-0" />
            <span className="tracking-wide">{toastMessage}</span>
            <Sparkles className="w-4 h-4 text-[#CDB38B] animate-pulse shrink-0" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Interactive Wax Seal Easter Egg */}
        <div className="mb-6 relative group">
          <motion.button
            id="footer-easter-egg-seal-btn"
            type="button"
            onClick={triggerCelebrationEasterEgg}
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            whileTap={{ scale: 0.92 }}
            aria-label="Secret Easter egg: Click to shower gold & floral petal confetti!"
            title="✨ Click to shower gold & floral petal confetti!"
            className="relative cursor-pointer rounded-full focus:outline-hidden ring-offset-2 ring-offset-[#431422] focus:ring-2 focus:ring-[#CDB38B]"
          >
            <WaxSeal className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-lg group-hover:brightness-110 transition-all" />
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.95, 1.1, 0.95] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-1 rounded-full border border-[#CDB38B]/50 pointer-events-none"
            />
          </motion.button>

          {/* Discreet Easter egg hint on hover */}
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] uppercase tracking-widest text-[#CDB38B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-sans font-medium">
            ✨ Click for celebration
          </span>
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#FAF7F2] mb-2 mt-2">
          {WEDDING_CONFIG.bride} <span className="text-[#CDB38B] font-serif italic text-2xl sm:text-3xl">&amp;</span> {WEDDING_CONFIG.groom}
        </h3>

        <p className="eyebrow text-[#CDB38B] mb-6 tracking-[0.25em]">
          {WEDDING_CONFIG.dateFormatted} · {WEDDING_CONFIG.venue.name}, {WEDDING_CONFIG.venue.location}
        </p>

        <GoldenDivider className="my-6 max-w-xs mx-auto" />

        <p className="text-xs sm:text-sm font-light text-[#FAF7F2]/80 max-w-md mx-auto leading-relaxed mb-6">
          "Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up."
          <span className="block text-[11px] text-[#CDB38B] mt-1 font-normal">— Ecclesiastes 4:9-10</span>
        </p>

        {/* Wedding Hashtags */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-[#CDB38B] font-serif text-sm tracking-wider border border-[#CDB38B]/30">
            #CyrillAndDimple
          </span>
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-[#CDB38B] font-serif text-sm tracking-wider border border-[#CDB38B]/30">
            #ForteForever2026
          </span>
        </div>

        {/* Action buttons: Back to top and Celebratory Sparkle Button */}
        <div className="flex items-center gap-3">
          <button
            id="footer-back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs uppercase tracking-widest text-[#FAF7F2] transition-colors border border-white/20 cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top</span>
          </button>

          <button
            id="footer-celebrate-easter-egg-btn"
            type="button"
            onClick={triggerCelebrationEasterEgg}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#5B1E31] hover:bg-[#6e243b] text-xs uppercase tracking-widest text-[#CDB38B] hover:text-[#FAF7F2] transition-all border border-[#CDB38B]/50 hover:border-[#CDB38B] cursor-pointer shadow-sm hover:scale-105"
            title="Celebrate with confetti!"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#CDB38B]" />
            <span>Celebrate</span>
          </button>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 w-full text-[11px] text-[#FAF7F2]/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <button
            type="button"
            onClick={triggerCelebrationEasterEgg}
            className="hover:text-[#CDB38B] transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-[#CDB38B] fill-current inline-block hover:scale-125 transition-transform" />
            <span>for Dimple &amp; Cyrill's Wedding</span>
          </button>
          <span>December 22, 2026 · Jade Resort, La Union</span>
        </div>
      </div>
    </footer>
  );
}
