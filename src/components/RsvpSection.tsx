import React, { useState, useEffect } from 'react';
import { WEDDING_CONFIG } from '../data/weddingData';
import { RsvpEntry } from '../types';
import { SectionHeader, WaxSeal, GoldenDivider } from './Botanicals';
import {
  Heart,
  CheckCircle2,
  Calendar,
  MapPin,
  Sparkles,
  Utensils,
  Music,
  User,
  Mail,
  Phone,
  MessageSquare,
  Printer,
  RotateCcw,
} from 'lucide-react';

export function RsvpSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    attending: 'true',
    guestCount: 1,
    guestNames: '',
    mealPreference: 'Herb-Crusted Prime Beef Tenderloin',
    dietaryRestrictions: '',
    songRequest: '',
    message: '',
  });

  const [submittedEntry, setSubmittedEntry] = useState<RsvpEntry | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Load existing RSVP from localStorage if present
  useEffect(() => {
    try {
      const saved = localStorage.getItem('wedding_rsvp_entry');
      if (saved) {
        setSubmittedEntry(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const mealOptions = [
    {
      id: 'beef',
      name: 'Herb-Crusted Prime Beef Tenderloin',
      desc: 'Truffle potato purée, roasted garden vegetables, port wine reduction'
    },
    {
      id: 'chicken',
      name: 'Rosemary Citrus Grilled Chicken',
      desc: 'Wild rice pilaf, sautéed French beans, garlic thyme jus'
    },
    {
      id: 'salmon',
      name: 'Pan-Seared Salmon with Lemon Butter',
      desc: 'Herb quinoa, grilled asparagus, caper dill cream sauce'
    },
    {
      id: 'veg',
      name: 'Vegetarian Harvest Risotto (Vegan/GF)',
      desc: 'Arborio rice, roasted wild mushrooms, sweet peas, crispy shallots'
    },
    {
      id: 'kids',
      name: 'Petite Kids Meal',
      desc: 'Crispy chicken tenders, mac & cheese, seasonal fruit cup'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    const isAttending = formData.attending === 'true';
    const newEntry: RsvpEntry = {
      id: 'rsvp-' + Date.now(),
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      attending: isAttending,
      guestCount: isAttending ? Number(formData.guestCount) : 0,
      guestNames: isAttending ? formData.guestNames.trim() : undefined,
      mealPreference: isAttending ? formData.mealPreference : undefined,
      dietaryRestrictions: isAttending ? formData.dietaryRestrictions.trim() : undefined,
      songRequest: formData.songRequest.trim(),
      message: formData.message.trim(),
      submittedAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    };

    setTimeout(() => {
      try {
        localStorage.setItem('wedding_rsvp_entry', JSON.stringify(newEntry));
      } catch {
        // ignore
      }
      setSubmittedEntry(newEntry);
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedEntry(null);
    try {
      localStorage.removeItem('wedding_rsvp_entry');
    } catch {
      // ignore
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="rsvp" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F3ECE2] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="Celebrate With Us"
          title="RSVP &amp; Confirmation"
          subtitle={`Kindly confirm your attendance on or before ${WEDDING_CONFIG.rsvpDeadline}. We can't wait to share our special day with you!`}
        />

        {/* If RSVP has already been submitted, show Digital Pass */}
        {submittedEntry ? (
          <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-2xl border-2 border-[#CDB38B] shadow-2xl relative text-center animate-in zoom-in-95 duration-500">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#5D6B4F]/15 text-[#5D6B4F] mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="eyebrow text-[#5D6B4F] block mb-1">
              Official Guest RSVP Pass
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#5B1E31] font-light mb-2">
              {submittedEntry.attending
                ? "We Can't Wait To Celebrate With You!"
                : "Thank You For Letting Us Know"}
            </h3>
            <p className="text-sm text-[#6B6862] max-w-md mx-auto mb-6">
              {submittedEntry.attending
                ? "Your response has been registered. Below is your digital invitation confirmation."
                : "We are sorry you won't be able to make it, but we appreciate your love and well wishes!"}
            </p>

            <GoldenDivider className="my-6" />

            {/* Pass Body */}
            <div className="bg-[#F3ECE2]/80 p-6 sm:p-8 rounded-xl border border-[#CDB38B]/40 max-w-lg mx-auto text-left space-y-4">
              <div className="flex justify-between items-start border-b border-[#CDB38B]/30 pb-3">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#6B6862] block">
                    Guest Name
                  </span>
                  <span className="font-serif text-xl font-medium text-[#5B1E31]">
                    {submittedEntry.fullName}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#6B6862] block">
                    Status
                  </span>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    submittedEntry.attending
                      ? 'bg-[#5D6B4F]/20 text-[#3E4A32]'
                      : 'bg-[#5B1E31]/15 text-[#5B1E31]'
                  }`}>
                    {submittedEntry.attending ? '✓ Confirmed Attending' : 'Declined'}
                  </span>
                </div>
              </div>

              {submittedEntry.attending && (
                <>
                  <div className="grid grid-cols-2 gap-4 border-b border-[#CDB38B]/30 pb-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#6B6862] block">
                        Party Size
                      </span>
                      <span className="text-sm font-medium text-[#2B2A27]">
                        {submittedEntry.guestCount} {submittedEntry.guestCount === 1 ? 'Guest' : 'Guests'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#6B6862] block">
                        Date &amp; Time
                      </span>
                      <span className="text-sm font-medium text-[#2B2A27]">
                        Dec 22, 2026 · 3:00 PM
                      </span>
                    </div>
                  </div>

                  {submittedEntry.guestNames && (
                    <div className="border-b border-[#CDB38B]/30 pb-3">
                      <span className="text-[10px] uppercase tracking-wider text-[#6B6862] block">
                        Accompanying Guests
                      </span>
                      <span className="text-sm text-[#2B2A27]">
                        {submittedEntry.guestNames}
                      </span>
                    </div>
                  )}

                  <div className="border-b border-[#CDB38B]/30 pb-3">
                    <span className="text-[10px] uppercase tracking-wider text-[#6B6862] block">
                      Entrée Preference
                    </span>
                    <span className="text-sm font-medium text-[#5B1E31]">
                      {submittedEntry.mealPreference}
                    </span>
                  </div>

                  {submittedEntry.dietaryRestrictions && (
                    <div className="border-b border-[#CDB38B]/30 pb-3">
                      <span className="text-[10px] uppercase tracking-wider text-[#6B6862] block">
                        Dietary Notes / Allergies
                      </span>
                      <span className="text-sm text-[#2B2A27]">
                        {submittedEntry.dietaryRestrictions}
                      </span>
                    </div>
                  )}
                </>
              )}

              {submittedEntry.songRequest && (
                <div className="border-b border-[#CDB38B]/30 pb-3">
                  <span className="text-[10px] uppercase tracking-wider text-[#6B6862] block">
                    Song Request for DJ
                  </span>
                  <span className="text-sm text-[#5D6B4F] italic">
                    🎵 {submittedEntry.songRequest}
                  </span>
                </div>
              )}

              {submittedEntry.message && (
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#6B6862] block">
                    Your Blessing to the Couple
                  </span>
                  <span className="text-sm italic text-[#2B2A27]/90 font-serif">
                    "{submittedEntry.message}"
                  </span>
                </div>
              )}
            </div>

            {/* Actions for pass */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F2] border border-[#5B1E31] text-[#5B1E31] text-xs uppercase tracking-widest font-medium hover:bg-[#F3ECE2] transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save Pass</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6B6862]/15 text-[#2B2A27] text-xs uppercase tracking-widest font-medium hover:bg-[#6B6862]/25 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Submit Another Response</span>
              </button>
            </div>
          </div>
        ) : (
          /* RSVP Form */
          <form
            onSubmit={handleSubmit}
            className="bg-[#FAF7F2] p-8 sm:p-12 rounded-2xl border border-[#CDB38B]/50 shadow-xl relative"
          >
            {errorMsg && (
              <div className="mb-6 p-4 rounded-xl bg-[#5B1E31]/10 border border-[#5B1E31]/30 text-[#5B1E31] text-xs sm:text-sm font-medium">
                {errorMsg}
              </div>
            )}

            {/* Attendance Toggle */}
            <div className="mb-8">
              <label className="eyebrow text-[#5D6B4F] block mb-3">
                Will you be attending? *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    formData.attending === 'true'
                      ? 'bg-[#5B1E31]/5 border-[#5B1E31] ring-1 ring-[#5B1E31]'
                      : 'bg-[#F3ECE2] border-[#CDB38B]/40 hover:bg-[#FAF7F2]'
                  }`}
                >
                  <input
                    type="radio"
                    name="attending"
                    value="true"
                    checked={formData.attending === 'true'}
                    onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                    className="accent-[#5B1E31] w-4 h-4"
                  />
                  <div>
                    <span className="font-serif text-lg font-medium text-[#5B1E31] block">
                      Joyfully Accepts
                    </span>
                    <span className="text-xs text-[#6B6862]">
                      I will attend the wedding with pleasure
                    </span>
                  </div>
                </label>

                <label
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    formData.attending === 'false'
                      ? 'bg-[#5B1E31]/5 border-[#5B1E31] ring-1 ring-[#5B1E31]'
                      : 'bg-[#F3ECE2] border-[#CDB38B]/40 hover:bg-[#FAF7F2]'
                  }`}
                >
                  <input
                    type="radio"
                    name="attending"
                    value="false"
                    checked={formData.attending === 'false'}
                    onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                    className="accent-[#5B1E31] w-4 h-4"
                  />
                  <div>
                    <span className="font-serif text-lg font-medium text-[#6B6862] block">
                      Regretfully Declines
                    </span>
                    <span className="text-xs text-[#6B6862]">
                      I will be celebrating with you in spirit
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="eyebrow text-[#5D6B4F] block mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#CDB38B] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maria Clara Santos"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F3ECE2] border border-[#CDB38B]/40 focus:outline-none focus:border-[#5B1E31] text-sm text-[#2B2A27]"
                  />
                </div>
              </div>

              <div>
                <label className="eyebrow text-[#5D6B4F] block mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#CDB38B] absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="e.g. maria@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F3ECE2] border border-[#CDB38B]/40 focus:outline-none focus:border-[#5B1E31] text-sm text-[#2B2A27]"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="eyebrow text-[#5D6B4F] block mb-2">
                Mobile / Contact Number
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#CDB38B] absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  placeholder="e.g. +63 917 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F3ECE2] border border-[#CDB38B]/40 focus:outline-none focus:border-[#5B1E31] text-sm text-[#2B2A27]"
                />
              </div>
            </div>

            {/* Attending Guests Section */}
            {formData.attending === 'true' && (
              <div className="space-y-6 pt-4 border-t border-[#CDB38B]/30 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="eyebrow text-[#5D6B4F] block mb-2">
                      Total Attending in Party *
                    </label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F3ECE2] border border-[#CDB38B]/40 focus:outline-none focus:border-[#5B1E31] text-sm text-[#2B2A27]"
                    >
                      <option value={1}>1 Person (Just Me)</option>
                      <option value={2}>2 Persons (Me + 1 Guest)</option>
                      <option value={3}>3 Persons</option>
                      <option value={4}>4 Persons</option>
                      <option value={5}>5 Persons</option>
                    </select>
                  </div>

                  {formData.guestCount > 1 && (
                    <div>
                      <label className="eyebrow text-[#5D6B4F] block mb-2">
                        Names of Accompanying Guests
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Juan Santos, Sofia Santos"
                        value={formData.guestNames}
                        onChange={(e) => setFormData({ ...formData, guestNames: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F3ECE2] border border-[#CDB38B]/40 focus:outline-none focus:border-[#5B1E31] text-sm text-[#2B2A27]"
                      />
                    </div>
                  )}
                </div>

                {/* Meal Preference */}
                <div>
                  <label className="eyebrow text-[#5D6B4F] block mb-3">
                    Dinner Entrée Selection *
                  </label>
                  <div className="space-y-2.5">
                    {mealOptions.map((opt) => (
                      <label
                        key={opt.id}
                        className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                          formData.mealPreference === opt.name
                            ? 'bg-[#5B1E31]/5 border-[#5B1E31]'
                            : 'bg-[#F3ECE2] border-[#CDB38B]/30 hover:bg-[#FAF7F2]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="mealPreference"
                          value={opt.name}
                          checked={formData.mealPreference === opt.name}
                          onChange={(e) => setFormData({ ...formData, mealPreference: e.target.value })}
                          className="accent-[#5B1E31] mt-1"
                        />
                        <div>
                          <span className="font-serif text-base font-medium text-[#5B1E31] block">
                            {opt.name}
                          </span>
                          <span className="text-xs text-[#6B6862] font-light">
                            {opt.desc}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Dietary restrictions */}
                <div>
                  <label className="eyebrow text-[#5D6B4F] block mb-2">
                    Dietary Restrictions or Food Allergies
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Peanut allergy, Pescatarian, Gluten-free, etc."
                    value={formData.dietaryRestrictions}
                    onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F3ECE2] border border-[#CDB38B]/40 focus:outline-none focus:border-[#5B1E31] text-sm text-[#2B2A27]"
                  />
                </div>
              </div>
            )}

            {/* Song Request */}
            <div className="mb-6">
              <label className="eyebrow text-[#5D6B4F] block mb-2">
                A Song That Gets You On The Dance Floor 🎶
              </label>
              <div className="relative">
                <Music className="w-4 h-4 text-[#CDB38B] absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder="e.g. Can't Take My Eyes Off You - Frankie Valli"
                  value={formData.songRequest}
                  onChange={(e) => setFormData({ ...formData, songRequest: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F3ECE2] border border-[#CDB38B]/40 focus:outline-none focus:border-[#5B1E31] text-sm text-[#2B2A27]"
                />
              </div>
            </div>

            {/* Message to couple */}
            <div className="mb-8">
              <label className="eyebrow text-[#5D6B4F] block mb-2">
                Well Wishes &amp; Blessings For The Couple
              </label>
              <textarea
                rows={3}
                placeholder="Share your love, advice, or blessings for Angelika & Cyrill..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#F3ECE2] border border-[#CDB38B]/40 focus:outline-none focus:border-[#5B1E31] text-sm text-[#2B2A27] resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#5B1E31] text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold hover:bg-[#431422] transition-all shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 inline-flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 text-[#CDB38B] fill-current" />
                <span>{isSubmitting ? 'Confirming...' : 'Submit RSVP Response'}</span>
              </button>
              <p className="text-[11px] text-[#6B6862] mt-3">
                Responses can be updated anytime before {WEDDING_CONFIG.rsvpDeadline}.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
