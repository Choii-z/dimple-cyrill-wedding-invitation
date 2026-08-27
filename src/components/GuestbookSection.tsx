import React, { useState, useEffect } from 'react';
import { INITIAL_GUESTBOOK_MESSAGES } from '../data/weddingData';
import { GuestbookMessage } from '../types';
import { SectionHeader, GoldenDivider } from './Botanicals';
import { MessageSquarePlus, Heart, Send, Sparkles, User } from 'lucide-react';

export function GuestbookSection() {
  const [messages, setMessages] = useState<GuestbookMessage[]>(INITIAL_GUESTBOOK_MESSAGES);
  const [author, setAuthor] = useState('');
  const [relationship, setRelationship] = useState('Family / Friend');
  const [message, setMessage] = useState('');
  const [selectedStamp, setSelectedStamp] = useState('🥂');
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  // Load user submitted guestbook entries from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('wedding_guestbook_messages');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const stamps = [
    { emoji: '🥂', label: 'Cheers' },
    { emoji: '💍', label: 'Rings' },
    { emoji: '💐', label: 'Bouquet' },
    { emoji: '🕊️', label: 'Peace' },
    { emoji: '💌', label: 'Love Letter' },
    { emoji: '🤍', label: 'Pure Love' },
  ];

  const handlePostMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    const newMsg: GuestbookMessage = {
      id: 'msg-' + Date.now(),
      author: author.trim(),
      relationship: relationship.trim(),
      message: message.trim(),
      stamp: selectedStamp,
      date: 'Just now',
      likes: 1,
    };

    const updated = [newMsg, ...messages];
    setMessages(updated);
    try {
      localStorage.setItem('wedding_guestbook_messages', JSON.stringify(updated));
    } catch {
      // ignore
    }

    setAuthor('');
    setMessage('');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
  };

  const handleLike = (id: string) => {
    if (likedIds[id]) return;
    setLikedIds({ ...likedIds, [id]: true });

    const updated = messages.map((m) =>
      m.id === id ? { ...m, likes: m.likes + 1 } : m
    );
    setMessages(updated);
    try {
      localStorage.setItem('wedding_guestbook_messages', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  return (
    <section id="guestbook" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Words of Love"
          title="Guest Blessings &amp; Wishes"
          subtitle="Leave a warm message, funny memory, or marital blessing for Angelika and Cyrill."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Post Message Form */}
          <div className="lg:col-span-5">
            <div className="bg-[#F3ECE2] p-6 sm:p-8 rounded-2xl border border-[#CDB38B]/40 shadow-md sticky top-28">
              <div className="flex items-center gap-2 mb-4 text-[#5B1E31]">
                <MessageSquarePlus className="w-5 h-5" />
                <h3 className="font-serif text-2xl font-light">Leave a Blessing</h3>
              </div>

              {showSuccess && (
                <div className="mb-4 p-3 rounded-lg bg-[#5D6B4F]/15 text-[#3E4A32] text-xs font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#5D6B4F]" />
                  <span>Thank you! Your blessing has been added to our wall.</span>
                </div>
              )}

              <form onSubmit={handlePostMessage} className="space-y-4">
                <div>
                  <label className="eyebrow text-[#5D6B4F] block mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ninang Teresa"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#CDB38B]/40 focus:outline-none focus:border-[#5B1E31] text-xs sm:text-sm text-[#2B2A27]"
                  />
                </div>

                <div>
                  <label className="eyebrow text-[#5D6B4F] block mb-1.5">
                    Relationship to Couple
                  </label>
                  <select
                    value={relationship}
                    onChange={(e) => setRelationship(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#CDB38B]/40 focus:outline-none focus:border-[#5B1E31] text-xs sm:text-sm text-[#2B2A27]"
                  >
                    <option value="Family / Relative">Family / Relative</option>
                    <option value="Ninong / Ninang">Ninong / Ninang (Sponsor)</option>
                    <option value="Lifelong Friend">Lifelong Friend</option>
                    <option value="Bridal Party">Bridal Party Entourage</option>
                    <option value="Colleague">Colleague / Work Friend</option>
                    <option value="Well Wisher">Well Wisher</option>
                  </select>
                </div>

                <div>
                  <label className="eyebrow text-[#5D6B4F] block mb-1.5">
                    Select a Decorative Stamp
                  </label>
                  <div className="flex items-center gap-2">
                    {stamps.map((st) => (
                      <button
                        key={st.emoji}
                        type="button"
                        onClick={() => setSelectedStamp(st.emoji)}
                        className={`p-2 rounded-xl text-lg transition-transform ${
                          selectedStamp === st.emoji
                            ? 'bg-[#5B1E31] text-white scale-110 shadow-xs'
                            : 'bg-[#FAF7F2] border border-[#CDB38B]/40 hover:bg-white'
                        }`}
                        title={st.label}
                      >
                        {st.emoji}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="eyebrow text-[#5D6B4F] block mb-1.5">
                    Your Blessing or Advice *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write something heartfelt for the bride and groom..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#CDB38B]/40 focus:outline-none focus:border-[#5B1E31] text-xs sm:text-sm text-[#2B2A27] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#5B1E31] text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold hover:bg-[#431422] transition-colors shadow-sm inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-[#CDB38B]" />
                  <span>Post Blessing</span>
                </button>
              </form>
            </div>
          </div>

          {/* Messages Wall */}
          <div className="lg:col-span-7 space-y-4">
            {messages.map((item) => (
              <div
                key={item.id}
                className="bg-[#F3ECE2]/80 p-6 rounded-2xl border border-[#CDB38B]/40 shadow-xs hover:border-[#CDB38B] transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#CDB38B] flex items-center justify-center text-lg shadow-xs">
                        {item.stamp || '🥂'}
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-medium text-[#5B1E31] leading-tight">
                          {item.author}
                        </h4>
                        <span className="text-[11px] text-[#5D6B4F] tracking-wide">
                          {item.relationship} · {item.date}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleLike(item.id)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-colors ${
                        likedIds[item.id]
                          ? 'bg-[#5B1E31] text-[#FAF7F2]'
                          : 'bg-[#FAF7F2] text-[#6B6862] hover:text-[#5B1E31] border border-[#CDB38B]/40'
                      }`}
                    >
                      <Heart className={`w-3 h-3 ${likedIds[item.id] ? 'fill-current text-[#CDB38B]' : ''}`} />
                      <span>{item.likes}</span>
                    </button>
                  </div>

                  <p className="font-serif italic text-base text-[#2B2A27]/90 leading-relaxed font-light pl-13">
                    "{item.message}"
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
