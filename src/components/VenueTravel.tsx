import React from 'react';
import { WEDDING_CONFIG, ACCOMMODATIONS } from '../data/weddingData';
import { SectionHeader, GoldenDivider } from './Botanicals';
import { MapPin, Navigation, Phone, Mail, Car, Plane, Hotel, ExternalLink } from 'lucide-react';

export function VenueTravel() {
  return (
    <section id="venue" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F3ECE2] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Destination &amp; Travel"
          title="The Venue &amp; Accommodations"
          subtitle="Jade Resort in Bauang, La Union is a serene coastal sanctuary overlooking the West Philippine Sea."
        />

        {/* Jade Resort Main Feature Card */}
        <div className="bg-[#FAF7F2] rounded-2xl border border-[#CDB38B]/50 shadow-xl overflow-hidden mb-16 grid grid-cols-1 lg:grid-cols-12">
          {/* Image */}
          <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-[440px]">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
              alt="Jade Resort Bauang La Union"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#FAF7F2]/90 backdrop-blur-sm border border-[#CDB38B] text-[#5B1E31] text-xs font-serif font-semibold">
              Official Wedding Venue
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="eyebrow text-[#5D6B4F] mb-2">Beachfront Resort</div>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#5B1E31] mb-4">
                {WEDDING_CONFIG.venue.name}
              </h3>
              <p className="text-sm text-[#2B2A27]/85 font-light leading-relaxed mb-6">
                Nestled along the golden sands of Bauang, La Union, Jade Resort offers an intimate seaside backdrop with lush manicured gardens, open ocean breeze, and a grand reception ballroom.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-[#2B2A27] mb-6">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#5B1E31] shrink-0 mt-0.5" />
                  <span>{WEDDING_CONFIG.venue.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#5D6B4F] shrink-0" />
                  <span>{WEDDING_CONFIG.venue.phone}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#5D6B4F] shrink-0" />
                  <span>{WEDDING_CONFIG.venue.email}</span>
                </div>
                <div className="flex items-start gap-2.5 text-[#5D6B4F] italic text-xs pt-1">
                  <Car className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{WEDDING_CONFIG.venue.notes}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[#CDB38B]/30">
              <a
                href={WEDDING_CONFIG.venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5B1E31] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#431422] transition-colors shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-[#CDB38B]" />
                <span>Open in Google Maps</span>
              </a>
              <a
                href={WEDDING_CONFIG.venue.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F2] border border-[#5D6B4F] text-[#5D6B4F] text-xs uppercase tracking-widest font-medium hover:bg-[#5D6B4F]/10 transition-colors"
              >
                <Car className="w-3.5 h-3.5" />
                <span>Navigate via Waze</span>
              </a>
            </div>
          </div>
        </div>

        {/* Travel Instructions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#CDB38B]/40 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#5B1E31]/10 flex items-center justify-center text-[#5B1E31] mb-4">
              <Car className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-xl font-medium text-[#5B1E31] mb-2">
              From Metro Manila
            </h4>
            <p className="text-xs sm:text-sm text-[#2B2A27]/80 font-light leading-relaxed">
              Take NLEX, SCTEX, and TPLEX exiting at Rosario or Pozorrubio. Continue northward along MacArthur Highway / Manila North Road to Bauang, La Union (Approx. 3.5 – 4 hours drive).
            </p>
          </div>

          <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#CDB38B]/40 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#5D6B4F]/10 flex items-center justify-center text-[#5D6B4F] mb-4">
              <Plane className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-xl font-medium text-[#5B1E31] mb-2">
              From Clark Airport (CRK)
            </h4>
            <p className="text-xs sm:text-sm text-[#2B2A27]/80 font-light leading-relaxed">
              For guests flying into Clark International Airport (CRK), take the SCTEX/TPLEX north directly into La Union. Private airport transfers and car rentals are available (Approx. 2.5 hours).
            </p>
          </div>

          <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#CDB38B]/40 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#CDB38B]/20 flex items-center justify-center text-[#5B1E31] mb-4">
              <Hotel className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-xl font-medium text-[#5B1E31] mb-2">
              From Baguio City
            </h4>
            <p className="text-xs sm:text-sm text-[#2B2A27]/80 font-light leading-relaxed">
              Descend via Naguilian Road / Bauang-Baguio Road straight into Bauang town proper (Approx. 1.5 hours scenic mountain drive).
            </p>
          </div>
        </div>

        {/* Accommodations Grid */}
        <div>
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#5B1E31] font-light">
              Recommended Accommodations
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6862] mt-1">
              Convenient hotels and beachfront resorts located near our wedding venue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACCOMMODATIONS.map((hotel, index) => (
              <div
                key={index}
                className="bg-[#FAF7F2] rounded-xl border border-[#CDB38B]/40 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-mono">
                      {hotel.priceRange}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-[11px] font-medium text-[#5D6B4F] uppercase tracking-wider mb-1">
                      {hotel.type} · {hotel.distance}
                    </div>
                    <h5 className="font-serif text-lg font-medium text-[#5B1E31] mb-2">
                      {hotel.name}
                    </h5>
                    <p className="text-xs text-[#2B2A27]/80 font-light leading-relaxed mb-3">
                      {hotel.description}
                    </p>
                    <p className="text-[11px] text-[#6B6862]">
                      📞 {hotel.contact}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  {hotel.bookingLink && (
                    <a
                      href={hotel.bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg border border-[#CDB38B] text-[#5B1E31] text-xs font-medium hover:bg-[#F3ECE2] transition-colors"
                    >
                      <span>View Map &amp; Info</span>
                      <ExternalLink className="w-3 h-3 text-[#6B6862]" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
