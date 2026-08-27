import React, { useState } from 'react';
import { ENTOURAGE_DATA } from '../data/weddingData';
import { SectionHeader, GoldenDivider, WaxSeal } from './Botanicals';
import { Users, Heart, Crown, Sparkles } from 'lucide-react';

export function Entourage() {
  const [activeTab, setActiveTab] = useState(0);

  const getTabIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Heart className="w-3.5 h-3.5" />;
      case 1:
        return <Crown className="w-3.5 h-3.5" />;
      case 2:
        return <Users className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="entourage" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="With Deep Gratitude"
          title="The Wedding Entourage"
          subtitle="Our beloved parents, cherished sponsors, and dearest friends who stand beside us as we begin our married life."
        />

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {ENTOURAGE_DATA.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all ${
                activeTab === idx
                  ? 'bg-[#5B1E31] text-[#FAF7F2] shadow-md scale-105'
                  : 'bg-[#F3ECE2] text-[#2B2A27]/80 hover:bg-[#CDB38B]/20 hover:text-[#5B1E31]'
              }`}
            >
              {getTabIcon(idx)}
              <span>{cat.category.split('(')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Entourage Content Panel */}
        <div className="bg-[#F3ECE2]/80 p-8 sm:p-12 rounded-2xl border border-[#CDB38B]/40 shadow-md">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#5B1E31]">
              {ENTOURAGE_DATA[activeTab]?.category}
            </h3>
            <div className="w-12 h-px bg-[#CDB38B] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ENTOURAGE_DATA[activeTab]?.members.map((memberGroup, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] p-6 sm:p-8 rounded-xl border border-[#CDB38B]/30 shadow-xs flex flex-col items-center text-center hover:border-[#CDB38B] transition-colors"
              >
                <div className="eyebrow text-[#5D6B4F] mb-4 pb-2 border-b border-[#CDB38B]/30 w-full">
                  {memberGroup.role}
                </div>

                <div className="space-y-2.5 w-full">
                  {memberGroup.names.map((name, nameIdx) => (
                    <p
                      key={nameIdx}
                      className="font-serif text-lg sm:text-xl font-normal text-[#2B2A27] tracking-wide"
                    >
                      {name}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
