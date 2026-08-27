import React, { useState } from 'react';
import { WEDDING_CONFIG } from '../data/weddingData';
import { SectionHeader, GoldenDivider } from './Botanicals';
import { Gift, Copy, Check, QrCode, Heart, Sparkles } from 'lucide-react';

export function RegistrySection() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [selectedQrAccount, setSelectedQrAccount] = useState<string | null>(null);

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(id);
    setTimeout(() => setCopiedAccount(null), 2500);
  };

  return (
    <section id="registry" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F3ECE2] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader
          badge="With Love &amp; Appreciation"
          title="Wedding Registry &amp; Gifts"
          subtitle="The greatest gift you can give us is your loving presence, prayers, and shared joy on our wedding day."
        />

        {/* Gift Note Box */}
        <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-2xl border border-[#CDB38B]/50 shadow-md mb-12 relative text-center">
          <div className="w-14 h-14 rounded-full bg-[#5B1E31]/10 text-[#5B1E31] flex items-center justify-center mx-auto mb-4">
            <Gift className="w-7 h-7" />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#5B1E31] mb-3">
            A Note on Monetary Gifts
          </h3>

          <p className="text-sm sm:text-base font-light text-[#2B2A27]/85 max-w-xl mx-auto leading-relaxed mb-8">
            {WEDDING_CONFIG.registry.note}
          </p>

          <GoldenDivider className="my-6" />

          {/* Account Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {WEDDING_CONFIG.registry.accounts.map((acc, idx) => (
              <div
                key={idx}
                className="bg-[#F3ECE2] p-5 rounded-xl border border-[#CDB38B]/40 shadow-xs flex flex-col justify-between hover:border-[#5B1E31]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif text-base font-medium text-[#5B1E31]">
                      {acc.provider}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#5D6B4F]/15 text-[#3E4A32] font-semibold">
                      {acc.badge}
                    </span>
                  </div>

                  <div className="space-y-1 mb-4">
                    <span className="text-[10px] text-[#6B6862] uppercase tracking-wider block">
                      Account Name
                    </span>
                    <p className="text-xs font-medium text-[#2B2A27]">{acc.accountName}</p>
                    <span className="text-[10px] text-[#6B6862] uppercase tracking-wider block pt-1">
                      Account Number
                    </span>
                    <p className="text-sm font-mono font-semibold text-[#5B1E31] tracking-wider">
                      {acc.accountNumber}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-[#CDB38B]/30">
                  <button
                    type="button"
                    onClick={() => copyText(acc.accountNumber.replace(/\s+/g, ''), acc.provider)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-[#FAF7F2] border border-[#CDB38B] text-[#5B1E31] text-xs font-medium hover:bg-white transition-colors"
                  >
                    {copiedAccount === acc.provider ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#5D6B4F]" />
                        <span className="text-[#5D6B4F]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Number</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedQrAccount(acc.provider)}
                    title="View QR Code"
                    className="p-1.5 rounded-lg bg-[#FAF7F2] border border-[#CDB38B] text-[#5B1E31] hover:bg-white transition-colors"
                  >
                    <QrCode className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wishing Well Envelope Notice */}
        <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#CDB38B]/50 shadow-xs max-w-lg mx-auto flex items-center gap-4 text-left">
          <div className="p-3 rounded-full bg-[#5D6B4F]/15 text-[#5D6B4F] shrink-0">
            <Heart className="w-5 h-5 fill-current" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-medium text-[#5B1E31] mb-1">
              Wishing Well on Wedding Day
            </h4>
            <p className="text-xs text-[#6B6862] font-light leading-relaxed">
              For guests who prefer traditional gift envelopes, a designated Wishing Well box will be lovingly positioned at the reception ballroom registration desk.
            </p>
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      {selectedQrAccount && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedQrAccount(null)}
        >
          <div
            className="bg-[#FAF7F2] p-8 rounded-2xl border-2 border-[#CDB38B] max-w-xs w-full text-center shadow-2xl animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="font-serif text-xl font-medium text-[#5B1E31] mb-1">
              {selectedQrAccount} Transfer
            </h4>
            <p className="text-xs text-[#6B6862] mb-4">
              Scan using your mobile banking or GCash app
            </p>

            {/* QR Mockup Canvas */}
            <div className="w-48 h-48 mx-auto bg-white p-3 rounded-xl border border-[#CDB38B] shadow-inner flex flex-col items-center justify-center relative">
              <div className="w-full h-full border border-dashed border-gray-300 rounded flex flex-col items-center justify-center text-center p-2 bg-[#FAF7F2]/50">
                <QrCode className="w-20 h-20 text-[#5B1E31] mb-2" />
                <span className="text-[10px] font-mono text-[#6B6862] uppercase tracking-wider">
                  {selectedQrAccount} PAY QR
                </span>
                <span className="text-[9px] text-[#5D6B4F] font-semibold">
                  Angelika &amp; Cyrill
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedQrAccount(null)}
              className="mt-6 px-6 py-2 rounded-full bg-[#5B1E31] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#431422] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
