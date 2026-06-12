import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  textColor?: string;
}

export function Logo({ className = "h-11", iconOnly = false, textColor = "text-white" }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 select-none ${className}`}>
      {/* SVG Icon containing the winged luxury car */}
      <svg
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full aspect-square flex-shrink-0"
      >
        <defs>
          {/* Rich metallic premium gold-to-orange gradient matching the uploaded logo */}
          <linearGradient id="epicGold" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DF7B00" />
            <stop offset="30%" stopColor="#FF9F3B" />
            <stop offset="70%" stopColor="#FFE082" />
            <stop offset="100%" stopColor="#FF6B00" />
          </linearGradient>
          
          {/* Subtle reflection opacity mask */}
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0B1329" />
          </linearGradient>

          <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#FF6B00" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Dynamic Swept Wing Paths (The golden wings from the uploaded file) */}
        <g filter="url(#glow)">
          {/* Wing Upper Feather */}
          <path
            d="M 12 40 C 25 48, 55 52, 74 61 C 60 55, 30 45, 12 40 Z"
            fill="url(#epicGold)"
          />
          {/* Wing Backsweep Winglet 1 - Top major sweep */}
          <path
            d="M 10 44 C 35 56, 68 54, 82 66 C 60 58, 30 48, 10 44 Z"
            fill="url(#epicGold)"
          />
          {/* Wing Backsweep Winglet 2 */}
          <path
            d="M 15 52 C 38 64, 71 63, 85 73 C 65 65, 35 55, 15 52 Z"
            fill="url(#epicGold)"
          />
          {/* Wing Backsweep Winglet 3 - Lower tier */}
          <path
            d="M 22 61 C 42 71, 71 70, 83 79 C 65 72, 40 63, 22 61 Z"
            fill="url(#epicGold)"
          />
          {/* Wing Backsweep Winglet 4 - Lowermost speed stroke */}
          <path
            d="M 32 70 C 48 77, 71 77, 80 84 C 66 79, 46 72, 32 70 Z"
            fill="url(#epicGold)"
          />
        </g>

        {/* Sleek luxury sedan silhouette structure */}
        <g>
          {/* Car main upper greenhouse dome/roofline */}
          <path
            d="M 75 62 C 88 50, 115 50, 130 60 C 135 63, 154 66, 158 75 L 140 75 Z"
            fill="url(#bodyGrad)"
            stroke="url(#epicGold)"
            strokeWidth="1.5"
          />
          {/* Windows division pillar */}
          <path
            d="M 102 54 L 105 73"
            stroke="url(#epicGold)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Window glint highlights */}
          <path
            d="M 88 59 C 94 56, 100 55, 101 59 Z"
            fill="#FFF"
            opacity="0.25"
          />
          {/* Sedan sleek body line, hood and trunk */}
          <path
            d="M 70 73 C 82 72, 85 71, 95 71 L 146 71 C 154 71, 158 75, 156 80 L 152 83 L 73 83 C 71 80, 68 76, 70 73 Z"
            fill="url(#bodyGrad)"
            stroke="url(#epicGold)"
            strokeWidth="2"
          />
          {/* Rear premium light tail line */}
          <path
            d="M 68 74 L 72 78"
            stroke="#FF3B30"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Front headlight luxury beam curve */}
          <path
            d="M 152 74 C 155 75, 158 77, 156 80"
            stroke="#FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Front grille lines (like Mercedes style in the uploaded image) */}
          <path
            d="M 148 76 L 151 79 M 145 77 L 147 80"
            stroke="url(#epicGold)"
            strokeWidth="1"
          />

          {/* Under-carriage dark shadow */}
          <path
            d="M 50 85 L 155 85"
            stroke="#020617"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Shiny alloy chrome wheels */}
          {/* Wheel 1 (Rear) */}
          <circle cx="84" cy="83" r="10" fill="#020617" stroke="url(#epicGold)" strokeWidth="1.8" />
          <circle cx="84" cy="83" r="5" fill="url(#epicGold)" />
          <path d="M 84 73 L 84 93 M 74 83 L 94 83" stroke="#FFF" strokeWidth="0.8" opacity="0.4" />
          
          {/* Wheel 2 (Front) */}
          <circle cx="132" cy="83" r="10" fill="#020617" stroke="url(#epicGold)" strokeWidth="1.8" />
          <circle cx="132" cy="83" r="5" fill="url(#epicGold)" />
          <path d="M 132 73 L 132 93 M 122 83 L 142 83" stroke="#FFF" strokeWidth="0.8" opacity="0.4" />

          {/* Golden motion/speed streaks under the wings & under car to ground the asset */}
          <path d="M 35 79 L 68 79" stroke="url(#epicGold)" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          <path d="M 45 83 L 64 83" stroke="url(#epicGold)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        </g>
      </svg>

      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-baseline space-x-1">
            <span className="font-sans text-xl font-black uppercase tracking-tight text-white mb-0.5">
              EPIC RIDE
            </span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FF6B00] font-mono">
              AND TRANSPORT
            </span>
          </div>
          <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-gray-400 font-mono mt-0.5">
            CHAUFFEURED SERVICES
          </span>
        </div>
      )}
    </div>
  );
}

export function LogoIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <div className={`relative ${className} flex items-center justify-center bg-[#050B18] border border-[#FF6B00]/20 rounded-md p-1 shadow-inner overflow-hidden group`}>
      {/* Background glow pulse */}
      <div className="absolute inset-0 bg-[#FF6B00]/5 group-hover:bg-[#FF6B00]/10 transition-colors duration-300" />
      <Logo iconOnly className="h-full w-full" />
    </div>
  );
}
