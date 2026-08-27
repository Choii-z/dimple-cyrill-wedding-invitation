import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_PHOTOS } from '../data/weddingData';
import { GalleryPhoto } from '../types';
import { SectionHeader } from './Botanicals';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Image as ImageIcon } from 'lucide-react';

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'romantic', label: 'Romance' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'garden', label: 'Garden & Arches' },
    { id: 'moments', label: 'Candid Moments' },
  ];

  const filteredPhotos = activeCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  const handleNext = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => ((prev! + 1) % filteredPhotos.length));
    }
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const handlePrev = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  }, [selectedPhotoIndex, filteredPhotos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, handleNext, handlePrev]);

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPhotoIndex]);

  return (
    <section id="gallery" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Pre-Wedding Memories"
          title="Captured Moments"
          subtitle="Glimpses of our pre-wedding photoshoot filled with love, laughter, and timeless romance."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`gallery-filter-${cat.id}`}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedPhotoIndex(null);
              }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#5B1E31] text-[#FAF7F2] shadow-sm scale-105'
                  : 'bg-[#F3ECE2] text-[#2B2A27]/80 hover:bg-[#CDB38B]/20 hover:text-[#5B1E31]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredPhotos.map((photo, index) => {
            const isSpan = photo.aspect === 'wide' ? 'sm:col-span-2' : '';

            return (
              <motion.div
                key={photo.id}
                id={`gallery-item-${photo.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedPhotoIndex(index)}
                className={`relative group overflow-hidden rounded-2xl cursor-pointer bg-[#F3ECE2] border border-[#CDB38B]/40 shadow-xs hover:shadow-xl transition-all duration-500 ${isSpan}`}
              >
                <div className="h-72 sm:h-80 w-full overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                </div>

                {/* Hover overlay with caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="eyebrow text-[#CDB38B] text-[10px] mb-1 font-semibold uppercase tracking-wider">
                    {photo.category}
                  </span>
                  <p className="font-serif text-sm sm:text-base font-light italic text-[#FAF7F2]">
                    {photo.caption}
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] text-[#FAF7F2]/90 uppercase tracking-widest font-sans font-medium">
                    <Maximize2 className="w-3 h-3 text-[#CDB38B]" /> Click to expand full screen
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
          <motion.div
            id="gallery-lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#16040A]/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 select-none"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            {/* Top Toolbar */}
            <div
              className="w-full max-w-6xl flex items-center justify-between z-50 pt-2 px-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 text-white/80">
                <ImageIcon className="w-4 h-4 text-[#CDB38B]" />
                <span className="text-xs uppercase tracking-widest text-[#FAF7F2]/90 font-sans">
                  Photo {selectedPhotoIndex + 1} of {filteredPhotos.length}
                </span>
              </div>

              {/* Close Button */}
              <button
                id="lightbox-close-btn"
                type="button"
                aria-label="Close Lightbox"
                onClick={() => setSelectedPhotoIndex(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] transition-colors cursor-pointer border border-[#CDB38B]/30 hover:border-[#CDB38B]"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Main Image Stage with Navigation */}
            <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center py-2 sm:py-4">
              {/* Prev button */}
              <button
                id="lightbox-prev-btn"
                type="button"
                aria-label="Previous Photo"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/40 hover:bg-black/70 text-[#FAF7F2] transition-all cursor-pointer border border-[#CDB38B]/30 hover:border-[#CDB38B] hover:scale-110 z-50"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Next button */}
              <button
                id="lightbox-next-btn"
                type="button"
                aria-label="Next Photo"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/40 hover:bg-black/70 text-[#FAF7F2] transition-all cursor-pointer border border-[#CDB38B]/30 hover:border-[#CDB38B] hover:scale-110 z-50"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Active Image Container */}
              <motion.div
                key={filteredPhotos[selectedPhotoIndex].id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="max-h-[70vh] sm:max-h-[74vh] max-w-full flex flex-col items-center justify-center px-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  id={`lightbox-img-${filteredPhotos[selectedPhotoIndex].id}`}
                  src={filteredPhotos[selectedPhotoIndex].src}
                  alt={filteredPhotos[selectedPhotoIndex].alt}
                  className="max-h-[64vh] sm:max-h-[68vh] max-w-full object-contain rounded-xl shadow-2xl border-2 border-[#CDB38B]/40"
                />

                {/* Caption & Category */}
                <div className="mt-3 text-center text-white max-w-2xl px-4">
                  <p className="font-serif text-base sm:text-xl font-light italic text-[#CDB38B]">
                    "{filteredPhotos[selectedPhotoIndex].caption}"
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Thumbnail Strip */}
            <div
              className="w-full max-w-4xl overflow-x-auto py-2 px-2 flex items-center justify-center gap-2 z-50 scrollbar-none"
              onClick={(e) => e.stopPropagation()}
            >
              {filteredPhotos.map((thumb, idx) => (
                <button
                  key={thumb.id}
                  id={`lightbox-thumb-${thumb.id}`}
                  type="button"
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden shrink-0 transition-all cursor-pointer border-2 ${
                    idx === selectedPhotoIndex
                      ? 'border-[#CDB38B] scale-110 shadow-lg'
                      : 'border-transparent opacity-50 hover:opacity-100 hover:border-white/50'
                  }`}
                >
                  <img
                    src={thumb.src}
                    alt={thumb.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
