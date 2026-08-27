import React from 'react';
import { WEDDING_CONFIG } from '../data/weddingData';
import { WaxSeal, FlowerFlourish, GoldenDivider } from './Botanicals';

interface InvitationProps {
  onReopenEnvelope?: () => void;
}

export function Invitation({ onReopenEnvelope }: InvitationProps) {
  return (
    <section id="invitation" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F3ECE2] relative overflow-hidden">
      {/* Subtle corner flourishes */}
      <div className="absolute top-6 left-6 text-[#CDB38B]/40">
        <FlowerFlourish className="w-16 h-16 transform -rotate-45" />
      </div>
      <div className="absolute bottom-6 right-6 text-[#CDB38B]/40">
        <FlowerFlourish className="w-16 h-16 transform rotate-135" />
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Invitation Letter Card */}
        <div className="bg-[#FAF7F2] p-8 sm:p-14 rounded-2xl shadow-xl border border-[#CDB38B]/50 relative text-center">
          {/* Inner gold frame */}
          <div className="border border-[#CDB38B]/40 p-6 sm:p-10 rounded-xl relative">
            {/* Wax Seal at top center */}
            <div className="flex justify-center -mt-14 sm:-mt-18 mb-6">
              <WaxSeal className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>

            <div className="eyebrow text-[#5D6B4F] mb-4">Formal Invitation</div>

            <h2 className="font-serif text-2xl sm:text-4xl font-light text-[#5B1E31] leading-relaxed mb-6">
              Request the honour of your presence at the marriage of
            </h2>

            <div className="my-6 space-y-2">
              <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5B1E31] font-light tracking-wide">
                {WEDDING_CONFIG.bride}
              </p>
              <p className="font-serif text-2xl italic text-[#5D6B4F]">&amp;</p>
              <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5B1E31] font-light tracking-wide">
                {WEDDING_CONFIG.groom}
              </p>
            </div>

            <GoldenDivider className="my-6" />

            <div className="space-y-3 text-sm sm:text-base font-light text-[#2B2A27]/85 max-w-xl mx-auto leading-relaxed">
              <p>
                As they unite their lives in holy matrimony and celebrate their love before God, family, and cherished friends.
              </p>
              <div className="pt-4 pb-2">
                <p className="font-serif text-xl sm:text-2xl text-[#5B1E31] font-normal">
                  {WEDDING_CONFIG.dateFormatted}
                </p>
                <p className="eyebrow text-[#5D6B4F] mt-1">{WEDDING_CONFIG.timeFormatted}</p>
              </div>
              <p className="font-serif text-lg text-[#2B2A27] font-medium">
                {WEDDING_CONFIG.venue.name}
              </p>
              <p className="text-xs sm:text-sm text-[#6B6862]">
                {WEDDING_CONFIG.venue.location}
              </p>
              <p className="text-xs text-[#5D6B4F] pt-2 italic">
                Dinner, drinks, and joyful dancing to follow immediately after the ceremony.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#CDB38B]/30 flex flex-col items-center gap-3">
              <p className="text-xs uppercase tracking-widest text-[#6B6862]">
                Kindly respond by {WEDDING_CONFIG.rsvpDeadline}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#rsvp"
                  className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#5D6B4F] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#3E4A32] transition-colors shadow-xs"
                >
                  Respond to Invitation
                </a>
                {onReopenEnvelope && (
                  <button
                    type="button"
                    onClick={onReopenEnvelope}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#5B1E31] text-[#5B1E31] text-xs uppercase tracking-widest font-medium hover:bg-[#5B1E31]/10 transition-colors cursor-pointer"
                  >
                    <span>✉ View Wax-Sealed Envelope</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
