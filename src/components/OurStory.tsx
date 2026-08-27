import React from 'react';
import { STORY_CHAPTERS } from '../data/weddingData';
import { SectionHeader, OliveSprig } from './Botanicals';
import { Quote, Sparkles } from 'lucide-react';

export function OurStory() {
  return (
    <section id="story" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative sprig */}
      <OliveSprig className="absolute top-1/4 -right-10 w-36 h-72 text-[#5D6B4F] opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="How Our Journey Began"
          title="Our Love Story"
          subtitle="Every step led us to each other, and every chapter is a testament to God's perfect timing and grace."
        />

        {/* Story Chapters List */}
        <div className="space-y-16 sm:space-y-24 relative">
          {/* Subtle vertical center connector line */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-[#CDB38B]/60 to-transparent -translate-x-1/2" />

          {STORY_CHAPTERS.map((chapter, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={chapter.id}
                className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Container */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg border-2 border-[#CDB38B]/40 bg-[#F3ECE2]">
                    <img
                      src={chapter.image}
                      alt={chapter.title}
                      className="w-full h-72 sm:h-96 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Chapter Number Badge Overlay */}
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#FAF7F2]/90 backdrop-blur-sm border border-[#CDB38B] text-[#5B1E31] text-xs font-serif italic tracking-wider font-semibold">
                      Chapter {chapter.number}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
                  <div className="flex items-center gap-2 text-[#5D6B4F] text-xs uppercase tracking-widest font-medium mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#CDB38B]" />
                    <span>{chapter.date}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-[#5B1E31] mb-2 leading-tight">
                    {chapter.title}
                  </h3>

                  <p className="eyebrow text-[#5D6B4F] text-[11px] mb-4">
                    {chapter.subtitle}
                  </p>

                  <p className="text-sm sm:text-base font-light text-[#2B2A27]/85 leading-relaxed mb-6">
                    {chapter.story}
                  </p>

                  {chapter.quote && (
                    <div className="p-4 rounded-xl bg-[#F3ECE2] border-l-3 border-[#5B1E31] flex items-start gap-3">
                      <Quote className="w-5 h-5 text-[#CDB38B] shrink-0 mt-0.5" />
                      <p className="font-serif italic text-sm sm:text-base text-[#5B1E31] font-light leading-snug">
                        "{chapter.quote}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
