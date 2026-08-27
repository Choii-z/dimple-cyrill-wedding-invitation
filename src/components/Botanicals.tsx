import React from 'react';

export function OliveSprig({ className = "w-24 h-48 text-[#5D6B4F]", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 260"
      fill="none"
      aria-hidden="true"
      className={`${flip ? '-scale-x-100' : ''} ${className}`}
    >
      <path
        d="M60 258C60 200 58 140 62 92c3-34 12-58 26-88"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.8"
      />
      {[
        [62, 210, -1],
        [63, 176, 1],
        [65, 146, -1],
        [68, 118, 1],
        [72, 92, -1],
        [77, 68, 1],
        [83, 44, -1],
        [89, 22, 1],
      ].map(([x, y, dir], i) => (
        <ellipse
          key={i}
          cx={Number(x) + Number(dir) * 17}
          cy={Number(y)}
          rx="16"
          ry="6.5"
          transform={`rotate(${Number(dir) * 26} ${Number(x) + Number(dir) * 17} ${Number(y)})`}
          stroke="currentColor"
          strokeWidth="1.1"
          fill="none"
          opacity="0.65"
        />
      ))}
      {[
        [63, 193, 1],
        [66, 160, -1],
        [70, 131, 1],
        [75, 104, -1],
        [80, 79, 1],
      ].map(([x, y, dir], i) => (
        <ellipse
          key={`b-${i}`}
          cx={Number(x) + Number(dir) * 13}
          cy={Number(y)}
          rx="12"
          ry="5"
          transform={`rotate(${Number(dir) * 22} ${Number(x) + Number(dir) * 13} ${Number(y)})`}
          stroke="currentColor"
          strokeWidth="0.9"
          fill="none"
          opacity="0.5"
        />
      ))}
    </svg>
  );
}

export function FlowerFlourish({ className = "w-12 h-12 text-[#5B1E31]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={className}>
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="30"
          rx="8"
          ry="18"
          transform={`rotate(${i * (360 / 8)} 50 50)`}
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
      ))}
      <circle cx="50" cy="50" r="5" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
      <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

export function WaxSeal({ className = "w-16 h-16", initials = "C & D" }: { className?: string; initials?: string }) {
  return (
    <div className={`relative flex items-center justify-center rounded-full bg-gradient-to-br from-[#85374E] via-[#5B1E31] to-[#3B111E] text-[#FAF7F2] shadow-xl ring-4 ring-[#CDB38B]/60 ${className}`}>
      <div className="absolute inset-1 rounded-full border border-dashed border-[#CDB38B]/60 pointer-events-none" />
      {/* Tiny decorative floral leaves inside the seal */}
      <svg className="absolute inset-0 w-full h-full p-1 opacity-40 pointer-events-none" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="42" stroke="#CDB38B" strokeWidth="0.8" strokeDasharray="3 3" />
        <path d="M50 12 C52 16 52 20 50 24 C48 20 48 16 50 12 Z" fill="#CDB38B" />
        <path d="M50 88 C52 84 52 80 50 76 C48 80 48 84 50 88 Z" fill="#CDB38B" />
        <path d="M12 50 C16 52 20 52 24 50 C20 48 16 48 12 50 Z" fill="#CDB38B" />
        <path d="M88 50 C84 52 80 52 76 50 C80 48 84 48 88 50 Z" fill="#CDB38B" />
      </svg>
      <span className="font-serif text-xl tracking-wider font-light italic relative z-10">{initials}</span>
    </div>
  );
}

export function FloralCorner({ className = "w-28 h-28 text-[#CDB38B]", position = "top-left" }: { className?: string; position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const rotation =
    position === 'top-right'
      ? 'scale-x-[-1]'
      : position === 'bottom-left'
      ? 'scale-y-[-1]'
      : position === 'bottom-right'
      ? 'scale-x-[-1] scale-y-[-1]'
      : '';

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={`${rotation} ${className}`}
    >
      {/* Main floral vine stem */}
      <path
        d="M6 6 C 45 10, 80 35, 114 114"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M6 6 C 10 45, 35 80, 114 114"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Main Rose / Blossom in corner */}
      <g transform="translate(18, 18)" opacity="0.9">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="10" cy="10" r="5" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.15" />
        <path d="M10 2 C14 6, 14 14, 10 18 C6 14, 6 6, 10 2 Z" stroke="currentColor" strokeWidth="0.7" fill="none" />
        <path d="M2 10 C6 14, 14 14, 18 10 C14 6, 6 6, 2 10 Z" stroke="currentColor" strokeWidth="0.7" fill="none" />
        {/* Soft petals radiating */}
        <ellipse cx="10" cy="3" rx="4" ry="2" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.1" />
        <ellipse cx="17" cy="10" rx="2" ry="4" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.1" />
        <ellipse cx="10" cy="17" rx="4" ry="2" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.1" />
        <ellipse cx="3" cy="10" rx="2" ry="4" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.1" />
      </g>

      {/* Smaller secondary blossom */}
      <g transform="translate(58, 48)" opacity="0.85">
        <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="0.9" fill="none" />
        <circle cx="6" cy="6" r="2" fill="currentColor" opacity="0.6" />
        <ellipse cx="6" cy="1" rx="2.5" ry="1.5" stroke="currentColor" strokeWidth="0.5" />
        <ellipse cx="11" cy="6" rx="1.5" ry="2.5" stroke="currentColor" strokeWidth="0.5" />
        <ellipse cx="6" cy="11" rx="2.5" ry="1.5" stroke="currentColor" strokeWidth="0.5" />
        <ellipse cx="1" cy="6" rx="1.5" ry="2.5" stroke="currentColor" strokeWidth="0.5" />
      </g>

      {/* Botanical leaves along the vine */}
      {[
        [25, 42, 25],
        [42, 25, -25],
        [50, 75, 45],
        [75, 50, -45],
        [85, 92, 35],
        [92, 85, -35],
        [34, 12, -10],
        [12, 34, 10],
      ].map(([cx, cy, rot], i) => (
        <path
          key={i}
          d="M0 -6 C3 -2, 3 2, 0 6 C-3 2, -3 -2, 0 -6 Z"
          transform={`translate(${cx}, ${cy}) rotate(${rot})`}
          stroke="currentColor"
          strokeWidth="0.75"
          fill="currentColor"
          fillOpacity="0.2"
        />
      ))}
    </svg>
  );
}

export function FloralWreath({ className = "w-28 h-28 text-[#CDB38B]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" aria-hidden="true" className={className}>
      {/* Left branch */}
      <path
        d="M80 148 C35 145, 18 110, 20 80 C22 45, 45 20, 76 14"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Right branch */}
      <path
        d="M80 148 C125 145, 142 110, 140 80 C138 45, 115 20, 84 14"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Leaves on left side */}
      {[
        [26, 115, -40],
        [18, 92, -15],
        [20, 68, 15],
        [32, 44, 40],
        [54, 25, 65],
        [74, 15, 85],
      ].map(([x, y, rot], i) => (
        <g key={`l-${i}`} transform={`translate(${x}, ${y}) rotate(${rot})`}>
          <ellipse cx="0" cy="0" rx="7" ry="3" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.2" />
        </g>
      ))}

      {/* Leaves on right side */}
      {[
        [134, 115, 40],
        [142, 92, 15],
        [140, 68, -15],
        [128, 44, -40],
        [106, 25, -65],
        [86, 15, -85],
      ].map(([x, y, rot], i) => (
        <g key={`r-${i}`} transform={`translate(${x}, ${y}) rotate(${rot})`}>
          <ellipse cx="0" cy="0" rx="7" ry="3" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.2" />
        </g>
      ))}

      {/* Center bottom ribbon flourish & rosebuds */}
      <g transform="translate(80, 148)" opacity="0.9">
        <circle cx="0" cy="0" r="3.5" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.3" />
        <ellipse cx="-5" cy="-2" rx="3" ry="1.8" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.25" />
        <ellipse cx="5" cy="-2" rx="3" ry="1.8" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.25" />
      </g>
    </svg>
  );
}

export function GoldenDivider({ className = "my-6" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#CDB38B]" />
      <span className="text-[#CDB38B] text-xs">◆</span>
      <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#CDB38B]" />
    </div>
  );
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`mb-12 sm:mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {badge && (
        <div className="eyebrow mb-3 inline-flex items-center gap-2 text-[#5D6B4F]">
          <span className="h-px w-6 bg-[#CDB38B]" />
          <span>{badge}</span>
          <span className="h-px w-6 bg-[#CDB38B]" />
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide ${
          dark ? 'text-[#FAF7F2]' : 'text-[#5B1E31]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-sm sm:text-base font-light leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${dark ? 'text-[#FAF7F2]/80' : 'text-[#6B6862]'}`}
        >
          {subtitle}
        </p>
      )}
      <GoldenDivider className="mt-5" />
    </div>
  );
}
