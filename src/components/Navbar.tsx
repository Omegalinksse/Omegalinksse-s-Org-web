import React, { useState, useEffect } from 'react';
import { OmegalinksLogo } from './OmegalinksLogo';
import { ThemeToggle } from './ThemeToggle';
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  PhoneCall,
  ChevronDown,
  Layers,
  Code2,
  Palette,
  GraduationCap,
  TrendingUp,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenContact: (prefillDivision?: string, prefillService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenContact,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [divisionsDropdownOpen, setDivisionsDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Services', page: 'services', hasDropdown: true },
    { name: 'Portfolio', page: 'portfolio' },
    { name: 'Training', page: 'training' },
    { name: 'Innovation', page: 'innovation' },
    { name: 'About Founder', page: 'founder' },
    { name: 'Contact', page: 'contact' },
  ];

  const divisionsList = [
    {
      id: 'digital-technology',
      title: 'Digital Technology',
      desc: 'Software, Web & Cloud Engineering',
      icon: Code2,
      color: 'text-cyan-400',
    },
    {
      id: 'creative-media',
      title: 'Creative Digital Media',
      desc: 'Branding, CorelDRAW & Video Editing',
      icon: Palette,
      color: 'text-blue-400',
    },
    {
      id: 'skills-training',
      title: 'Digital Skills & Training',
      desc: 'Computer Education & Practical Academy',
      icon: GraduationCap,
      color: 'text-emerald-400',
    },
    {
      id: 'growth-solutions',
      title: 'Digital Growth & Solutions',
      desc: 'Business Digitization & Strategy',
      icon: TrendingUp,
      color: 'text-purple-400',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page: string) => {
    setMobileMenuOpen(false);
    setDivisionsDropdownOpen(false);
    onNavigate(page);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#020617]/90 backdrop-blur-md border-b border-slate-200 dark:border-white/10 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-white/95 via-white/80 to-transparent dark:from-[#020617]/95 dark:via-[#020617]/70 dark:to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleLinkClick('home')}
          className="group focus:outline-none flex items-center text-left"
          title="Omegalinks Digital Technology Home"
        >
          <OmegalinksLogo variant="compact" size="sm" />
        </button>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;

            if (link.hasDropdown) {
              return (
                <div
                  key={link.page}
                  className="relative"
                  onMouseEnter={() => setDivisionsDropdownOpen(true)}
                  onMouseLeave={() => setDivisionsDropdownOpen(false)}
                >
                  <button
                    onClick={() => handleLinkClick(link.page)}
                    className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                      isActive
                        ? 'text-blue-700 dark:text-cyan-300 bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-500/30 shadow-sm dark:shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${
                        divisionsDropdownOpen ? 'rotate-180 text-blue-600 dark:text-cyan-400' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {divisionsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-72 p-2 rounded-2xl bg-white/98 dark:bg-[#020617]/95 border border-slate-200 dark:border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.12)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.9)] backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="px-3 py-1.5 mb-1 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                        <span className="font-tech text-[10px] uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-semibold">
                          4 Core Divisions
                        </span>
                        <Layers className="w-3 h-3 text-blue-600/60 dark:text-cyan-400/60" />
                      </div>
                      {divisionsList.map((div) => {
                        const Icon = div.icon;
                        return (
                          <button
                            key={div.id}
                            onClick={() => {
                              handleLinkClick('services');
                              setDivisionsDropdownOpen(false);
                            }}
                            className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group flex items-start gap-2.5"
                          >
                            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-white/10 group-hover:border-blue-500/40 shrink-0">
                              <Icon className={`w-4 h-4 ${div.color}`} />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300">
                                {div.title}
                              </div>
                              <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                                {div.desc}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={link.page}
                onClick={() => handleLinkClick(link.page)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all relative ${
                  isActive
                    ? 'text-blue-700 dark:text-cyan-300 bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-500/30 shadow-sm dark:shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 dark:bg-cyan-400 rounded-full shadow-[0_0_8px_#2563eb] dark:shadow-[0_0_8px_#22d3ee]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          <a
            href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=Hello%20Omegalinks%20Digital%20Technology,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-cyan-300 bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-blue-400 dark:hover:border-cyan-500/30 transition-all"
            title="Chat directly on WhatsApp"
            id="navbar-whatsapp-btn"
          >
            <PhoneCall className="w-4 h-4 text-emerald-600 dark:text-cyan-400" />
          </a>

          <button
            onClick={() => onOpenContact()}
            className="relative group overflow-hidden rounded-full p-px font-semibold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
            id="navbar-start-project-btn"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-full" />
            <span className="relative px-4 py-2 rounded-full bg-blue-600 dark:bg-[#020617] transition-all duration-200 group-hover:bg-blue-500 dark:group-hover:bg-opacity-0 flex items-center gap-1.5 text-white">
              <Sparkles className="w-3.5 h-3.5 text-cyan-200 dark:text-cyan-300" />
              <span>Start Project</span>
            </span>
          </button>
        </div>

        {/* Mobile Actions: Theme Toggle + Inquire + Hamburger Button */}
        <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
          <ThemeToggle className="scale-90" />

          <button
            onClick={() => onOpenContact()}
            className="px-3 py-1.5 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider"
          >
            Inquire
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 focus:outline-none"
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-blue-600 dark:text-cyan-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-[#020617]/98 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 px-4 pt-3 pb-6 space-y-3 shadow-[0_20px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.95)] animate-in slide-in-from-top-4 duration-300">
          <div className="grid grid-cols-2 gap-1.5 pt-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`text-left px-3 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-50 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white border border-transparent'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 shadow-[0_0_6px_#2563eb] dark:shadow-[0_0_6px_#22d3ee]" />}
                </button>
              );
            })}
          </div>

          {/* Theme Selector in Mobile Drawer */}
          <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between px-1">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Theme Visibility</span>
            <ThemeToggle variant="pill" />
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-100" />
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=Hello%20Omegalinks,%20I%20would%20like%20to%20inquire%20about%20a%20project%20or%20training.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 text-emerald-700 dark:text-cyan-300 text-xs font-semibold flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Direct WhatsApp: {COMPANY_INFO.contact.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
