import React, { useState } from 'react';
import { WEDDING_CONFIG } from '../data/weddingData';
import { SectionHeader, GoldenDivider } from './Botanicals';
import { Sparkles, Check, Copy, AlertCircle, Shirt } from 'lucide-react';

export function AttireGuide() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyHex = (hex: string, name: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(name);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <section id="attire" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="What To Wear"
          title="Dress Code &amp; Color Palette"
          subtitle="We invite our beloved guests to dress in our wedding color tones for an unforgettable, picturesque celebration."
        />

        {/* Primary Dress Code Banner */}
        <div className="bg-[#5B1E31] text-[#FAF7F2] p-8 sm:p-10 rounded-2xl shadow-lg border border-[#CDB38B]/40 mb-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-radial from-[#85374E]/30 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="eyebrow text-[#CDB38B] tracking-[0.25em]">Attire Theme</span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-wide my-3">
              {WEDDING_CONFIG.dressCode.title}
            </h3>
            <p className="text-sm sm:text-base font-light text-[#FAF7F2]/90 leading-relaxed">
              {WEDDING_CONFIG.dressCode.description}
            </p>
          </div>
        </div>

        {/* Color Palette Swatches */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <h4 className="font-serif text-2xl text-[#5B1E31] font-light">
              Our Curated Color Palette
            </h4>
            <p className="text-xs text-[#6B6862] mt-1">
              Click any color swatch to copy its hex code for your shopping inspiration!
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {WEDDING_CONFIG.dressCode.colors.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() => copyHex(c.hex, c.name)}
                className="group relative flex flex-col items-center bg-[#F3ECE2] p-4 rounded-xl border border-[#CDB38B]/40 shadow-xs hover:shadow-md transition-all text-center"
              >
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-inner mb-3 transition-transform group-hover:scale-105 border-2 border-white/60 ${c.bgClass}`}
                />
                <span className="font-serif text-sm sm:text-base font-medium text-[#2B2A27]">
                  {c.name}
                </span>
                <span className="text-[10px] font-mono text-[#6B6862] uppercase tracking-wider mt-0.5">
                  {c.hex}
                </span>
                {copiedColor === c.name ? (
                  <span className="text-[10px] text-[#5D6B4F] font-bold mt-1 inline-flex items-center gap-1">
                    <Check className="w-3 h-3" /> Copied!
                  </span>
                ) : (
                  <span className="text-[10px] text-[#CDB38B] opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                    Click to copy
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Guidelines for Men & Women */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Ladies */}
          <div className="bg-[#F3ECE2] p-8 rounded-2xl border border-[#CDB38B]/40 shadow-xs">
            <div className="eyebrow text-[#5D6B4F] mb-3">For The Ladies</div>
            <h4 className="font-serif text-2xl font-light text-[#5B1E31] mb-3">
              Floor-Length Gowns &amp; Midi Dresses
            </h4>
            <p className="text-sm font-light text-[#2B2A27]/85 leading-relaxed mb-4">
              {WEDDING_CONFIG.dressCode.ladies}
            </p>
            <ul className="text-xs text-[#6B6862] space-y-1.5 list-disc list-inside">
              <li>Flowy chiffon, silk, satin, or delicate lace fabrics</li>
              <li>Comfortable block heels or elegant wedges suitable for garden lawn walking</li>
              <li>Minimalist gold or pearl jewelry accents</li>
            </ul>
          </div>

          {/* Gentlemen */}
          <div className="bg-[#F3ECE2] p-8 rounded-2xl border border-[#CDB38B]/40 shadow-xs">
            <div className="eyebrow text-[#5D6B4F] mb-3">For The Gentlemen</div>
            <h4 className="font-serif text-2xl font-light text-[#5B1E31] mb-3">
              Suits &amp; Formal Barong Tagalog
            </h4>
            <p className="text-sm font-light text-[#2B2A27]/85 leading-relaxed mb-4">
              {WEDDING_CONFIG.dressCode.gentlemen}
            </p>
            <ul className="text-xs text-[#6B6862] space-y-1.5 list-disc list-inside">
              <li>Modern Piña or Jusilyn Barong Tagalog with dark undershirt</li>
              <li>Tailored suits in deep burgundy, navy, charcoal, or earth olive</li>
              <li>Polished leather dress shoes or loafers</li>
            </ul>
          </div>
        </div>

        {/* Gentle Etiquette Reminder */}
        <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#CDB38B]/60 shadow-xs flex items-start gap-3.5 max-w-2xl mx-auto">
          <AlertCircle className="w-5 h-5 text-[#5B1E31] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#2B2A27]/85 leading-relaxed">
            <span className="font-semibold text-[#5B1E31]">Gentle Reminder:</span>{' '}
            {WEDDING_CONFIG.dressCode.avoid}
          </div>
        </div>
      </div>
    </section>
  );
}
