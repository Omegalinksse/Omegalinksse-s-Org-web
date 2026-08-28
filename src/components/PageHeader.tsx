import React from 'react';
import { ChevronRight, Home, LucideIcon } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  badgeIcon: LucideIcon;
  title: string;
  subtitle: string;
  currentPageTitle: string;
  onNavigateHome: () => void;
  actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  badgeIcon: BadgeIcon,
  title,
  subtitle,
  currentPageTitle,
  onNavigateHome,
  actions,
}) => {
  return (
    <div className="relative pt-28 pb-14 sm:pt-32 sm:pb-16 bg-slate-100/70 dark:bg-[#020617] border-b border-slate-200 dark:border-white/10 overflow-hidden transition-colors">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-blue-500/10 via-cyan-500/5 dark:from-blue-600/15 dark:via-cyan-500/10 to-transparent blur-[120px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#3b82f6 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors focus:outline-none"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600" />
          <span className="text-blue-600 dark:text-cyan-400 font-medium">{currentPageTitle}</span>
        </nav>

        {/* Badge & Title */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-4">
            <BadgeIcon className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-4">
            {title}
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>

          {actions && <div className="mt-6 flex flex-wrap items-center gap-3">{actions}</div>}
        </div>
      </div>
    </div>
  );
};
