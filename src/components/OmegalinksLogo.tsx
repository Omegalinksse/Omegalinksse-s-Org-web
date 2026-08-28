import React from 'react';
import officialLogoFull from '../assets/images/omegalinks_pro_logo_tight.png';
import officialLogoEmblem from '../assets/images/omegalinks_emblem_tight.png';

interface OmegalinksLogoProps {
  variant?: 'full' | 'symbol' | 'compact';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

export const OmegalinksLogo: React.FC<OmegalinksLogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  showTagline = false,
}) => {
  // Dimension classes for emblem symbol
  const symbolDimensions = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-11 h-11 sm:w-12 sm:h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  // Dimension classes for full logo presentation
  const fullDimensions = {
    sm: 'w-44 sm:w-52',
    md: 'w-56 sm:w-64',
    lg: 'w-72 sm:w-84 md:w-[360px]',
    xl: 'w-84 sm:w-96 md:w-[440px]',
  };

  // Symbol only variant
  if (variant === 'symbol') {
    return (
      <div className={`inline-flex items-center justify-center group ${className}`}>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
          <img
            src={officialLogoEmblem}
            alt="Omegalinks Digital Technology Emblem"
            referrerPolicy="no-referrer"
            className={`${symbolDimensions[size] || symbolDimensions.md} relative z-10 object-contain drop-shadow-[0_0_12px_rgba(56,189,248,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.8)] group-hover:scale-105 transition-all duration-300`}
          />
        </div>
      </div>
    );
  }

  // Compact variant (Navbar & Footer)
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2.5 sm:gap-3 group ${className}`}>
        <div className="relative shrink-0 flex items-center justify-center">
          {/* Subtle luminous ambient glow behind the emblem */}
          <div className="absolute inset-0 bg-blue-500/25 rounded-full blur-sm opacity-80 group-hover:opacity-100 transition-opacity" />
          <img
            src={officialLogoEmblem}
            alt="Omegalinks Emblem"
            referrerPolicy="no-referrer"
            className={`${symbolDimensions[size] || symbolDimensions.sm} relative z-10 object-contain drop-shadow-[0_0_10px_rgba(56,189,248,0.6)] group-hover:scale-105 transition-transform duration-300`}
          />
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-extrabold tracking-wider text-white text-base sm:text-lg md:text-xl leading-none group-hover:text-cyan-300 transition-colors">
              OMEGALINKS
            </span>
          </div>
          <span className="font-tech tracking-[0.22em] text-[8.5px] sm:text-[9.5px] text-cyan-400 font-semibold uppercase mt-0.5">
            Digital Technology
          </span>
        </div>
      </div>
    );
  }

  // Full presentation variant (Hero & Brand Displays)
  return (
    <div className={`flex flex-col items-center text-center group select-none ${className}`}>
      <div className="relative flex items-center justify-center">
        {/* Soft radial backlight glow matching brand cyan/blue */}
        <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/20 via-cyan-500/25 to-blue-500/20 rounded-full blur-2xl opacity-70 group-hover:opacity-100 group-hover:blur-3xl transition-all duration-500 pointer-events-none" />
        
        <img
          src={officialLogoFull}
          alt="Omegalinks Digital Technology Official Organization Logo"
          referrerPolicy="no-referrer"
          className={`${fullDimensions[size] || fullDimensions.lg} max-w-full h-auto object-contain relative z-10 drop-shadow-[0_4px_30px_rgba(56,189,248,0.35)] group-hover:drop-shadow-[0_4px_45px_rgba(56,189,248,0.6)] group-hover:scale-[1.01] transition-all duration-500`}
        />
      </div>

      {showTagline && (
        <p className="font-tech text-xs sm:text-sm text-cyan-300 font-semibold tracking-[0.25em] uppercase mt-4">
          ONE LINK. ENDLESS POSSIBILITIES.
        </p>
      )}
    </div>
  );
};
