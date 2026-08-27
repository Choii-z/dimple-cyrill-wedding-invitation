import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/weddingData';
import { SectionHeader } from './Botanicals';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="Helpful Details"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about celebrating our wedding day with us."
        />

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-[#F3ECE2] rounded-2xl border border-[#CDB38B]/40 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F3ECE2]/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#FAF7F2] text-[#5B1E31] border border-[#CDB38B]/50 flex items-center justify-center text-xs font-serif font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#5B1E31]">
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5D6B4F] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#5B1E31]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#2B2A27]/85 font-light leading-relaxed border-t border-[#CDB38B]/20 animate-in fade-in duration-300">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center bg-[#F3ECE2]/60 p-6 rounded-2xl border border-[#CDB38B]/40 max-w-xl mx-auto">
          <MessageCircle className="w-6 h-6 text-[#5B1E31] mx-auto mb-2" />
          <h4 className="font-serif text-lg font-medium text-[#5B1E31] mb-1">
            Have Any Other Questions?
          </h4>
          <p className="text-xs text-[#6B6862]">
            Feel free to contact our wedding coordinators or message us directly at{' '}
            <span className="font-semibold text-[#5B1E31]">events@jaderesortlaunion.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}
