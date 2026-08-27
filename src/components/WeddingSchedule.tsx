import React from 'react';
import {
  Clock,
  MapPin,
  Compass,
  Heart,
  GlassWater,
  Sparkles,
  Utensils,
  Cake,
  Music,
  Flame,
  Users,
  ExternalLink,
} from 'lucide-react';
import { WEDDING_CONFIG, TIMELINE_EVENTS } from '../data/weddingData';
import { SectionHeader, GoldenDivider } from './Botanicals';

export function WeddingSchedule() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-[#5B1E31] fill-current" />;
      case 'GlassWater':
        return <GlassWater className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#CDB38B]" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5" />;
      case 'Cake':
        return <Cake className="w-5 h-5" />;
      case 'Music':
        return <Music className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#85374E]" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  return (
    <section id="schedule" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F3ECE2] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="The Wedding Day"
          title="Events &amp; Timeline"
          subtitle="A celebration of love, sacred vows, delightful dining, and festive dancing on December 22, 2026."
        />

        {/* Ceremony and Reception Primary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Ceremony Card */}
          <div className="bg-[#FAF7F2] p-8 sm:p-10 rounded-2xl border border-[#CDB38B]/50 shadow-md relative group hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B1E31]/10 text-[#5B1E31] text-xs uppercase tracking-widest font-semibold mb-4">
                <Heart className="w-3.5 h-3.5 fill-current text-[#5B1E31]" />
                <span>The Solemn Ceremony</span>
              </div>
              <h3 className="font-serif text-3xl font-light text-[#5B1E31] mb-2">
                Holy Matrimony
              </h3>
              <p className="text-sm font-medium text-[#5D6B4F] mb-4">
                3:00 PM (Guests arrive at 2:30 PM)
              </p>
              <div className="space-y-2 text-sm text-[#2B2A27]/85 mb-6">
                <p className="font-serif text-lg font-medium text-[#2B2A27]">
                  Jade Resort — Ceremonial Lawn
                </p>
                <p className="text-xs sm:text-sm text-[#6B6862]">
                  {WEDDING_CONFIG.venue.address}
                </p>
                <p className="text-xs text-[#5D6B4F] italic pt-1">
                  Outdoor garden setting surrounded by coastal flora.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#CDB38B]/30 flex flex-wrap items-center gap-3">
              <a
                href={WEDDING_CONFIG.venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#5B1E31] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#431422] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#CDB38B]" />
                <span>Google Maps</span>
              </a>
              <a
                href={WEDDING_CONFIG.venue.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#5D6B4F] text-[#5D6B4F] text-xs uppercase tracking-widest font-medium hover:bg-[#5D6B4F]/10 transition-colors"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Waze</span>
              </a>
            </div>
          </div>

          {/* Reception Card */}
          <div className="bg-[#FAF7F2] p-8 sm:p-10 rounded-2xl border border-[#CDB38B]/50 shadow-md relative group hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5D6B4F]/10 text-[#5D6B4F] text-xs uppercase tracking-widest font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#5D6B4F]" />
                <span>The Celebration</span>
              </div>
              <h3 className="font-serif text-3xl font-light text-[#5B1E31] mb-2">
                Dinner &amp; Reception Party
              </h3>
              <p className="text-sm font-medium text-[#5D6B4F] mb-4">
                5:45 PM onwards
              </p>
              <div className="space-y-2 text-sm text-[#2B2A27]/85 mb-6">
                <p className="font-serif text-lg font-medium text-[#2B2A27]">
                  Jade Resort — Grand Ballroom
                </p>
                <p className="text-xs sm:text-sm text-[#6B6862]">
                  {WEDDING_CONFIG.venue.address}
                </p>
                <p className="text-xs text-[#5D6B4F] italic pt-1">
                  Air-conditioned ballroom, coastal sunset deck, and open dance floor.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#CDB38B]/30 flex flex-wrap items-center gap-3">
              <a
                href="#rsvp"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#5D6B4F] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#3E4A32] transition-colors"
              >
                <Heart className="w-3.5 h-3.5 fill-current text-[#CDB38B]" />
                <span>Select Meal Preference</span>
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Timeline Schedule */}
        <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-2xl border border-[#CDB38B]/40 shadow-lg">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#5B1E31] font-light">
              Day-Of Itinerary
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6862] mt-1">
              Estimated schedule of joyous events for the afternoon &amp; evening
            </p>
          </div>

          <div className="relative pl-6 sm:pl-10 space-y-8 before:content-[''] before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-px before:bg-[#CDB38B]/70">
            {TIMELINE_EVENTS.map((event, index) => (
              <div key={index} className="relative group">
                {/* Node bullet */}
                <div className="absolute -left-6 sm:-left-10 top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#FAF7F2] border-2 border-[#5B1E31] flex items-center justify-center text-[#5B1E31] group-hover:bg-[#5B1E31] group-hover:text-[#FAF7F2] transition-colors shadow-xs">
                  <span className="text-[10px] font-bold">{index + 1}</span>
                </div>

                <div className="bg-[#F3ECE2]/70 p-5 rounded-xl border border-[#CDB38B]/30 transition-all hover:bg-[#F3ECE2] hover:shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[#5B1E31]">{getIcon(event.iconName)}</span>
                      <h4 className="font-serif text-lg sm:text-xl font-medium text-[#5B1E31]">
                        {event.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#5D6B4F]/15 text-[#3E4A32] text-xs font-semibold tracking-wider">
                        {event.time}
                      </span>
                      {event.location && (
                        <span className="text-xs text-[#6B6862] hidden md:inline">
                          📍 {event.location}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#2B2A27]/80 font-light leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
