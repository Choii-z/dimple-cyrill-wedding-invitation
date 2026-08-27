import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, Sparkles, ChevronUp, ChevronDown } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  const [minimized, setMinimized] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Web Audio Synthesizer fallback creating gentle romantic ambient chords (Canon in D / Wedding progression)
  useEffect(() => {
    if (isPlaying) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!audioContextRef.current) {
          audioContextRef.current = new AudioCtx();
        }
        const ctx = audioContextRef.current;
        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        // Chord progression: D -> A -> Bm -> F#m -> G -> D -> G -> A (Canon in D)
        const notesProgression = [
          [293.66, 369.99, 440.0], // D major (D4, F#4, A4)
          [220.00, 277.18, 329.63], // A major (A3, C#4, E4)
          [246.94, 293.66, 369.99], // B minor (B3, D4, F#4)
          [185.00, 220.00, 277.18], // F# minor (F#3, A3, C#4)
          [196.00, 246.94, 293.66], // G major (G3, B3, D4)
          [146.83, 220.00, 293.66], // D major low (D3, A3, D4)
          [196.00, 246.94, 293.66], // G major (G3, B3, D4)
          [220.00, 277.18, 329.63]  // A major (A3, C#4, E4)
        ];

        let chordIndex = 0;

        const playWarmChord = () => {
          if (!audioContextRef.current || audioContextRef.current.state !== 'running') return;
          const currentCtx = audioContextRef.current;
          const currentNotes = notesProgression[chordIndex % notesProgression.length] || [293.66, 369.99, 440.0];
          chordIndex++;

          currentNotes.forEach((freq, i) => {
            const osc = currentCtx.createOscillator();
            const gain = currentCtx.createGain();

            osc.type = i === 0 ? 'sine' : 'triangle';
            osc.frequency.setValueAtTime(freq, currentCtx.currentTime);

            // Soft gentle envelope
            const startTime = currentCtx.currentTime + i * 0.15;
            gain.gain.setValueAtTime(0.001, startTime);
            gain.gain.exponentialRampToValueAtTime(0.04 * volume, startTime + 0.6);
            gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 3.2);

            osc.connect(gain);
            gain.connect(currentCtx.destination);

            osc.start(startTime);
            osc.stop(startTime + 3.4);
          });
        };

        playWarmChord();
        intervalRef.current = window.setInterval(playWarmChord, 3200);
      } catch {
        // AudioContext not allowed or unsupported
      }
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (audioContextRef.current && audioContextRef.current.state === 'running') {
        audioContextRef.current.suspend();
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, volume]);

  return (
    <aside
      aria-label="Wedding Music Player"
      className="fixed bottom-5 right-5 z-40 animate-in fade-in slide-in-from-bottom-5 duration-500"
    >
      <div className="bg-[#FAF7F2]/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border-2 border-[#CDB38B]/60 shadow-2xl text-[#2B2A27] flex items-center gap-3">
        {/* Play/Pause Main Button */}
        <button
          type="button"
          onClick={onToggle}
          aria-label={isPlaying ? "Pause wedding instrumental music" : "Play romantic wedding music"}
          className="w-10 h-10 rounded-full bg-[#5B1E31] text-[#FAF7F2] flex items-center justify-center hover:bg-[#431422] transition-transform hover:scale-105 shadow-sm shrink-0 cursor-pointer"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
        </button>

        {/* Track info & Soundwave */}
        {!minimized && (
          <div className="flex flex-col pr-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#5B1E31]">
                Wedding Ambience
              </span>
              {isPlaying && (
                <span className="flex items-center gap-0.5 h-3">
                  <span className="w-0.5 h-full bg-[#5D6B4F] animate-[bounce_1s_infinite_100ms]" />
                  <span className="w-0.5 h-2 bg-[#5D6B4F] animate-[bounce_1s_infinite_200ms]" />
                  <span className="w-0.5 h-3.5 bg-[#5D6B4F] animate-[bounce_1s_infinite_300ms]" />
                </span>
              )}
            </div>

            <span className="font-serif text-xs sm:text-sm font-medium text-[#2B2A27] truncate max-w-[160px] sm:max-w-[200px]">
              Canon in D Acoustic Romance
            </span>

            {/* Volume control */}
            <div className="flex items-center gap-2 mt-1">
              <button
                type="button"
                onClick={() => setVolume(volume === 0 ? 0.5 : 0)}
                aria-label="Toggle mute"
                className="text-[#6B6862] hover:text-[#5B1E31]"
              >
                {volume === 0 ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                aria-label="Background music volume"
                className="w-16 h-1 accent-[#5B1E31] cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* Minimize / expand button */}
        <button
          type="button"
          onClick={() => setMinimized(!minimized)}
          aria-label={minimized ? "Expand music controls" : "Minimize music controls"}
          className="text-[#6B6862] hover:text-[#5B1E31] p-1 cursor-pointer"
        >
          {minimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>
    </aside>
  );
}
