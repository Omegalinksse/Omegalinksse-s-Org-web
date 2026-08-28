import React, { useState } from 'react';
import {
  Code2,
  Palette,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Search,
  ExternalLink,
  ChevronRight,
  Layers,
} from 'lucide-react';
import { DIVISIONS } from '../data/companyData';
import { DivisionType, ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestService: (divisionId: string, serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRequestService,
}) => {
  const [activeDivision, setActiveDivision] = useState<DivisionType>('digital-technology');
  const [searchQuery, setSearchQuery] = useState('');

  const currentDivision = DIVISIONS.find((d) => d.id === activeDivision) || DIVISIONS[0];

  // Filtering services across the active division (or all if searching)
  const displayedServices = currentDivision.services.filter((s) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.tools.some((t) => t.toLowerCase().includes(q))
    );
  });

  const getDivisionIcon = (id: DivisionType) => {
    switch (id) {
      case 'digital-technology':
        return Code2;
      case 'creative-media':
        return Palette;
      case 'skills-training':
        return GraduationCap;
      case 'growth-solutions':
        return TrendingUp;
    }
  };

  return (
    <section id="services" className="relative py-20 bg-slate-50 dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
            FOUR INTERCONNECTED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-600 dark:from-blue-400 dark:via-sky-300 dark:to-cyan-400">
              SOLUTIONS DIVISIONS
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Rather than fragmented offerings, our services are organized into four dedicated operational pillars designed to build, create, educate, and accelerate.
          </p>
        </div>

        {/* Division Tab Switcher */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-10">
          {DIVISIONS.map((div) => {
            const Icon = getDivisionIcon(div.id);
            const isActive = activeDivision === div.id;

            return (
              <button
                key={div.id}
                onClick={() => {
                  setActiveDivision(div.id);
                  setSearchQuery('');
                }}
                className={`p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border backdrop-blur-sm shadow-sm ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-500/10 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.15)] dark:shadow-[0_0_20px_rgba(59,130,246,0.3)] ring-1 ring-blue-500/40'
                    : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/40 hover:bg-slate-100/70 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30' : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-tech text-xs font-bold text-slate-400 dark:text-slate-500">
                    {div.number}
                  </span>
                </div>
                <div>
                  <h3
                    className={`font-display font-bold text-xs sm:text-sm tracking-wide ${
                      isActive ? 'text-blue-700 dark:text-white' : 'text-slate-800 dark:text-slate-300'
                    }`}
                  >
                    {div.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {div.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Division Banner & Search Bar */}
        <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm shadow-sm dark:shadow-xl mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-tech text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                Category {currentDivision.number}
              </span>
              <span className="text-slate-300 dark:text-white/20">•</span>
              <span className="text-xs text-slate-600 dark:text-slate-300">{currentDivision.services.length} Specialized Services</span>
            </div>
            <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
              {currentDivision.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
              {currentDivision.description}
            </p>
          </div>

          {/* Quick Filter Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services or tools..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none text-xs text-slate-900 dark:text-slate-200 placeholder:text-slate-500 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="group relative p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 shadow-sm dark:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Badge if popular */}
                <div className="flex items-center justify-between mb-3">
                  {service.popular ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 text-[10px] font-tech font-bold uppercase tracking-wider">
                      <Sparkles className="w-2.5 h-2.5" /> High Demand
                    </span>
                  ) : (
                    <span className="text-[11px] font-tech text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Specialized
                    </span>
                  )}
                  <span className="font-tech text-[10px] text-slate-400 dark:text-slate-500">
                    DIV {currentDivision.number}
                  </span>
                </div>

                <h4 className="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors mb-2">
                  {service.name}
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Key Deliverables Pill */}
                <div className="mb-4 space-y-1.5 text-left">
                  {service.deliverables.slice(0, 3).map((d, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{d}</span>
                    </div>
                  ))}
                </div>

                {/* Tools tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.tools.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 text-[10px] font-tech"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-cyan-300 flex items-center gap-1 group/btn"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onRequestService(currentDivision.id, service.name)}
                  className="px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                >
                  Request Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {displayedServices.length === 0 && (
          <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center shadow-sm">
            <p className="text-sm text-slate-600 dark:text-slate-400">No services matching "{searchQuery}" in this category.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs text-blue-600 dark:text-blue-400 underline font-semibold"
            >
              Clear filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
