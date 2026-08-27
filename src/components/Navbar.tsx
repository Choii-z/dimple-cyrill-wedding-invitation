import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X, Heart, Music, Volume2, VolumeX } from 'lucide-react';
import { WEDDING_CONFIG } from '../data/weddingData';

interface NavbarProps {
  isPlaying: boolean;
  onToggleMusic: () => void;
  onReopenEnvelope?: () => void;
}

export function Navbar({ isPlaying, onToggleMusic, onReopenEnvelope }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Our Story", href: "#story" },
    { label: "Schedule", href: "#schedule" },
    { label: "Entourage", href: "#entourage" },
    { label: "Attire", href: "#attire" },
    { label: "Venue", href: "#venue" },
    { label: "Gallery", href: "#gallery" },
    { label: "Registry", href: "#registry" },
  ];

  return (
    <>
      {/* Subtle, elegant golden scroll progress bar */}
      <div className="fixed top-0 inset-x-0 h-[3px] z-[60] bg-transparent pointer-events-none">
        <motion.div
          style={{ scaleX, transformOrigin: '0%' }}
          className="h-full w-full bg-gradient-to-r from-[#CDB38B] via-[#85374E] to-[#5B1E31] shadow-[0_1px_8px_rgba(205,179,139,0.6)]"
        />
      </div>

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#CDB38B]/30 py-3.5'
            : 'bg-gradient-to-b from-[#FAF7F2]/90 via-[#FAF7F2]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Monogram / Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2 group text-[#5B1E31] transition-transform hover:scale-105"
          >
            <span className="font-serif text-2xl sm:text-3xl font-light tracking-[0.2em] uppercase">
              C <span className="text-[#5D6B4F] font-serif italic text-xl">&amp;</span> D
            </span>
            <span className="hidden md:inline-block text-[10px] tracking-widest uppercase text-[#5D6B4F] border-l border-[#CDB38B] pl-2 py-0.5">
              Dec 22, 2026
            </span>
          </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest text-[#2B2A27]/80 hover:text-[#5B1E31] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#5B1E31] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action buttons (Music + Envelope + RSVP) */}
        <div className="flex items-center gap-2.5">
          {onReopenEnvelope && (
            <button
              type="button"
              onClick={onReopenEnvelope}
              aria-label="View Wax Sealed Envelope Invitation"
              title="Re-open Wedding Envelope"
              className="p-2 rounded-full border border-[#CDB38B]/60 text-[#5B1E31] hover:bg-[#CDB38B]/20 transition-colors flex items-center gap-1.5 text-xs cursor-pointer"
            >
              <span className="text-xs font-serif font-bold text-[#5B1E31]">✉</span>
              <span className="hidden xl:inline text-[10px] uppercase tracking-wider text-[#5D6B4F]">Envelope</span>
            </button>
          )}

          <button
            type="button"
            onClick={onToggleMusic}
            aria-label={isPlaying ? "Mute background music" : "Play background music"}
            title={isPlaying ? "Mute music" : "Play music"}
            className="p-2 rounded-full border border-[#CDB38B]/60 text-[#5B1E31] hover:bg-[#CDB38B]/20 transition-colors flex items-center gap-1.5 text-xs"
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-4 h-4 text-[#5B1E31] animate-pulse" />
                <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-[#5D6B4F]">Playing</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-[#6B6862]" />
                <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-[#6B6862]">Music</span>
              </>
            )}
          </button>

          <a
            href="#rsvp"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#5B1E31] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#431422] transition-all shadow-sm hover:shadow hover:scale-105"
          >
            <Heart className="w-3.5 h-3.5 fill-current text-[#CDB38B]" />
            <span>RSVP</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#5B1E31] lg:hidden hover:bg-[#CDB38B]/20 rounded-md transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-[#FAF7F2]/98 backdrop-blur-lg flex flex-col items-center justify-center p-6 lg:hidden border-t border-[#CDB38B]/30 animate-in fade-in duration-300">
          <div className="font-serif text-3xl text-[#5B1E31] mb-2 font-light italic">
            Angelika &amp; Cyrill
          </div>
          <p className="eyebrow text-[#5D6B4F] mb-6">Jade Resort · Bauang, La Union</p>
          <div className="w-16 h-px bg-[#CDB38B] mb-6" />
          
          <nav className="flex flex-col items-center gap-5 w-full max-w-xs text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base uppercase tracking-widest text-[#2B2A27] hover:text-[#5B1E31] py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            {onReopenEnvelope && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReopenEnvelope();
                }}
                className="w-full py-2.5 rounded-full border border-[#5B1E31] text-[#5B1E31] text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
              >
                <span>✉ View Envelope Invitation</span>
              </button>
            )}
            <a
              href="#rsvp"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full py-3 rounded-full bg-[#5B1E31] text-[#FAF7F2] text-sm uppercase tracking-widest font-medium shadow-md flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-current text-[#CDB38B]" />
              Confirm Your Attendance
            </a>
          </nav>
        </div>
      )}
    </header>
    </>
  );
}
