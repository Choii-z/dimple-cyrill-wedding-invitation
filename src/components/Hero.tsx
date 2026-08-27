import React from 'react';
import { Calendar, MapPin, ChevronDown, Heart } from 'lucide-react';
import { WEDDING_CONFIG } from '../data/weddingData';
import { OliveSprig, GoldenDivider } from './Botanicals';

export function Hero() {
  return (
    <section
      id="hero"
      className="paper-texture relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FAF7F2]"
    >
      {/* Background with artistic gradient & soft photo overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80"
          alt="Angelika and Cyrill pre-wedding photoshoot"
          className="w-full h-full object-cover object-[center_35%] filter brightness-[0.92] contrast-[1.05] scale-105 animate-pulse-glow"
        />
        {/* Soft elegant veil overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/90 via-[#FAF7F2]/65 to-[#FAF7F2]/95" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#FAF7F2]/40 to-[#FAF7F2]/90" />
      </div>

      {/* Decorative Botanical Branch Overlays */}
      <OliveSprig className="absolute -top-6 -left-6 sm:left-4 w-32 sm:w-44 h-64 sm:h-80 text-[#5D6B4F] opacity-40 z-10 pointer-events-none" />
      <OliveSprig
        flip
        className="absolute -bottom-8 -right-6 sm:right-4 w-32 sm:w-44 h-64 sm:h-80 text-[#5D6B4F] opacity-40 z-10 pointer-events-none"
      />

      {/* Main Hero Card */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Monogram Crest */}
        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#CDB38B] bg-[#FAF7F2]/90 text-[#5B1E31] shadow-md mb-6 ring-4 ring-[#FAF7F2]/80">
          <span className="font-serif text-xl sm:text-2xl italic tracking-wider font-light">C&amp;D</span>
        </div>

        {/* Intro tag */}
        <div className="eyebrow text-[#5D6B4F] mb-4 sm:mb-6 tracking-[0.3em]">
          Together With Their Families
        </div>

        {/* Couple Names */}
        <h1 className="flex flex-col items-center gap-1 sm:gap-2 mb-6">
          <span className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#5B1E31] tracking-wide uppercase leading-tight">
            {WEDDING_CONFIG.bride}
          </span>
          <span className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-[#5D6B4F] font-light my-0.5">
            &amp;
          </span>
          <span className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#5B1E31] tracking-wide uppercase leading-tight">
            {WEDDING_CONFIG.groom}
          </span>
        </h1>

        <GoldenDivider className="my-4 sm:my-6" />

        {/* Date and Location Pills */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 my-4 text-xs sm:text-sm font-light text-[#2B2A27]">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF7F2]/80 border border-[#CDB38B]/50 shadow-xs backdrop-blur-xs">
            <Calendar className="w-4 h-4 text-[#5B1E31]" />
            <span className="font-serif text-base tracking-wide">{WEDDING_CONFIG.dateFormatted}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF7F2]/80 border border-[#CDB38B]/50 shadow-xs backdrop-blur-xs">
            <MapPin className="w-4 h-4 text-[#5D6B4F]" />
            <span className="font-serif text-base tracking-wide">
              {WEDDING_CONFIG.venue.name} · {WEDDING_CONFIG.venue.location}
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href="#rsvp"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#5B1E31] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#431422] transition-all shadow-md hover:shadow-lg hover:scale-105"
          >
            <Heart className="w-4 h-4 text-[#CDB38B] fill-current" />
            <span>RSVP for the Wedding</span>
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FAF7F2] text-[#5B1E31] border border-[#5B1E31]/40 text-xs uppercase tracking-widest font-medium hover:bg-[#F3ECE2] transition-all"
          >
            <span>Our Love Story</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#invitation"
          aria-label="Scroll down to formal invitation"
          className="mt-14 inline-flex flex-col items-center gap-2 text-[#5B1E31]/70 hover:text-[#5B1E31] transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#5B1E31]" />
        </a>
      </div>
    </section>
  );
}
