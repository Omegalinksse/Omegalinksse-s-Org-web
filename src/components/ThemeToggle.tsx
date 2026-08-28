import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  variant?: 'icon' | 'pill' | 'button-labeled';
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = 'icon',
  className = '',
}) => {
  const { theme, isDark, toggleTheme, setTheme } = useTheme();

  if (variant === 'pill') {
    return (
      <div
        className={`inline-flex items-center p-1 rounded-full bg-slate-200/80 dark:bg-slate-800/90 border border-slate-300/80 dark:border-white/10 ${className}`}
        role="group"
        aria-label="Theme selection"
      >
        <button
          type="button"
          onClick={() => setTheme('light')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            !isDark
              ? 'bg-white text-blue-700 shadow-sm'
              : 'text-slate-500 hover:text-slate-200'
          }`}
          aria-pressed={!isDark}
        >
          <Sun className="w-3.5 h-3.5 text-amber-500" />
          <span>Light</span>
        </button>
        <button
          type="button"
          onClick={() => setTheme('dark')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            isDark
              ? 'bg-slate-900 text-cyan-300 shadow-sm border border-cyan-500/30'
              : 'text-slate-600 hover:text-slate-900'
          }`}
          aria-pressed={isDark}
        >
          <Moon className="w-3.5 h-3.5 text-cyan-400" />
          <span>Dark</span>
        </button>
      </div>
    );
  }

  if (variant === 'button-labeled') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
          isDark
            ? 'bg-white/5 hover:bg-white/10 text-slate-200 border-white/10 hover:border-cyan-500/30'
            : 'bg-slate-100 hover:bg-slate-200/80 text-slate-800 border-slate-300'
        } ${className}`}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? (
          <>
            <Sun className="w-4 h-4 text-amber-400" />
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <Moon className="w-4 h-4 text-blue-600" />
            <span>Dark Mode</span>
          </>
        )}
      </button>
    );
  }

  // Default 'icon' circular button
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative p-2 rounded-full transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
        isDark
          ? 'bg-white/5 hover:bg-white/10 text-amber-300 border-white/10 hover:border-amber-400/40 hover:shadow-[0_0_12px_rgba(251,191,36,0.3)]'
          : 'bg-slate-100 hover:bg-slate-200 text-blue-700 border-slate-300 hover:border-blue-500/40 hover:shadow-[0_0_12px_rgba(37,99,235,0.2)]'
      } ${className}`}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      id="theme-toggle-btn"
    >
      <div className="relative w-4 h-4 sm:w-4.5 sm:h-4.5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 animate-in spin-in-90 duration-300" />
        ) : (
          <Moon className="w-4 h-4 text-blue-600 animate-in -spin-in-90 duration-300" />
        )}
      </div>
    </button>
  );
};
