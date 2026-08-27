import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EnvelopeLanding } from './components/EnvelopeLanding';
import { FloralPetalsDrift } from './components/FloralPetalsDrift';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Invitation } from './components/Invitation';
import { CountdownSection } from './components/CountdownSection';
import { OurStory } from './components/OurStory';
import { WeddingSchedule } from './components/WeddingSchedule';
import { Entourage } from './components/Entourage';
import { AttireGuide } from './components/AttireGuide';
import { VenueTravel } from './components/VenueTravel';
import { GallerySection } from './components/GallerySection';
import { RsvpSection } from './components/RsvpSection';
import { GuestbookSection } from './components/GuestbookSection';
import { RegistrySection } from './components/RegistrySection';
import { MusicPlayer } from './components/MusicPlayer';
import { Footer } from './components/Footer';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
}

function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenEnvelope = () => {
    setHasEntered(true);
    // User interaction enables audio playback
    setIsPlaying(true);
  };

  const handleReopenEnvelope = () => {
    setHasEntered(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMusic = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B2A27] font-sans selection:bg-[#5B1E31] selection:text-[#FAF7F2] relative">
      {/* 0. Wax-Sealed Landing Screen with Cinematic Exit */}
      <AnimatePresence mode="wait">
        {!hasEntered && (
          <EnvelopeLanding onOpen={handleOpenEnvelope} />
        )}
      </AnimatePresence>

      {/* Main Page with Soft Cinematic Fade-in & Scale Reveal */}
      {hasEntered && (
        <motion.div
          key="main-wedding-content"
          initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Sticky Luxury Navigation */}
          <Navbar
            isPlaying={isPlaying}
            onToggleMusic={toggleMusic}
            onReopenEnvelope={handleReopenEnvelope}
          />

          {/* Romantic Subtle Floating Petals Drift */}
          <FloralPetalsDrift count={16} durationRange={[18, 30]} className="fixed inset-0 pointer-events-none z-30 overflow-hidden" />

          {/* Main Content Sections */}
          <main id="main-content">
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Formal Wedding Invitation Card */}
            <ScrollReveal>
              <Invitation onReopenEnvelope={handleReopenEnvelope} />
            </ScrollReveal>

            {/* 3. Live Countdown & Add to Calendar */}
            <ScrollReveal>
              <CountdownSection />
            </ScrollReveal>

            {/* 4. Our Love Story (4 Chapters) */}
            <ScrollReveal>
              <OurStory />
            </ScrollReveal>

            {/* 5. Schedule & Day-of Itinerary */}
            <ScrollReveal>
              <WeddingSchedule />
            </ScrollReveal>

            {/* 6. Wedding Entourage & Sponsors */}
            <ScrollReveal>
              <Entourage />
            </ScrollReveal>

            {/* 7. Dress Code & Color Palette */}
            <ScrollReveal>
              <AttireGuide />
            </ScrollReveal>

            {/* 8. Venue & Nearby Accommodations */}
            <ScrollReveal>
              <VenueTravel />
            </ScrollReveal>

            {/* 9. Curated Photo Gallery */}
            <ScrollReveal>
              <GallerySection />
            </ScrollReveal>

            {/* 10. Interactive RSVP & Digital Pass */}
            <ScrollReveal>
              <RsvpSection />
            </ScrollReveal>

            {/* 11. Guest Blessings & Guestbook */}
            <ScrollReveal>
              <GuestbookSection />
            </ScrollReveal>

            {/* 12. Gift Registry & Wishing Well */}
            <ScrollReveal>
              <RegistrySection />
            </ScrollReveal>
          </main>

          {/* Floating Romantic Music Player */}
          <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />

          {/* Luxury Footer */}
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
