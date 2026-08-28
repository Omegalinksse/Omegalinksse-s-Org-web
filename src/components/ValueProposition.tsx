import React from 'react';
import {
  Code2,
  Palette,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Cpu,
  Layers,
  Network,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ValuePropositionProps {
  onNavigateSection: (sectionId: string) => void;
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({
  onNavigateSection,
}) => {
  const valueProps = [
    {
      id: 'build',
      action: 'BUILD',
      tagline: 'Digital Products & Software Solutions',
      description:
        'Engineering dependable web systems, database architectures, and custom software tailored to operational workflows.',
      icon: Code2,
      color: 'text-cyan-400',
      bgGlow: 'from-cyan-500/15 to-transparent',
      borderColor: 'border-cyan-500/30 hover:border-cyan-400/70',
      targetSection: 'services',
    },
    {
      id: 'create',
      action: 'CREATE',
      tagline: 'Creative Digital Experiences & Identities',
      description:
        'Translating vision into memorable corporate branding, high-precision CorelDRAW vector artwork, and promotional media.',
      icon: Palette,
      color: 'text-blue-400',
      bgGlow: 'from-blue-500/15 to-transparent',
      borderColor: 'border-blue-500/30 hover:border-blue-400/70',
      targetSection: 'services',
    },
    {
      id: 'learn',
      action: 'LEARN',
      tagline: 'Practical Computer & Technology Skills',
      description:
        'Hands-on vocational and professional training covering Microsoft Office, Programming, Web Development, and Graphic Design.',
      icon: GraduationCap,
      color: 'text-emerald-400',
      bgGlow: 'from-emerald-500/15 to-transparent',
      borderColor: 'border-emerald-500/30 hover:border-emerald-400/70',
      targetSection: 'training',
    },
    {
      id: 'innovate',
      action: 'INNOVATE',
      tagline: 'Emerging Tech & Future Possibilities',
      description:
        'Exploring artificial intelligence workflows, data analytics modeling, and innovative prototypes in our Innovation Lab.',
      icon: Sparkles,
      color: 'text-purple-400',
      bgGlow: 'from-purple-500/15 to-transparent',
      borderColor: 'border-purple-500/30 hover:border-purple-400/70',
      targetSection: 'innovation',
    },
  ];

  return (
    <section className="relative py-12 bg-[#020617] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Journey Ribbon: IDEA -> DESIGN -> BUILD -> CONNECT -> IMPACT */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-left">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                <Network className="w-5 h-5" />
              </div>
              <div>
                <span className="font-tech text-xs tracking-wider text-blue-400 font-bold uppercase">
                  The Omegalinks Digital Journey
                </span>
                <p className="text-xs text-slate-400">
                  Connecting ideas with impact through disciplined technology
                </p>
              </div>
            </div>

            {/* Journey steps */}
            <div className="flex items-center flex-wrap justify-center gap-2">
              {COMPANY_INFO.journeySteps.map((step, idx) => (
                <React.Fragment key={step.step}>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors">
                    <span className="font-tech text-[10px] text-blue-400 font-bold">
                      {step.step}
                    </span>
                    <span className="text-xs font-bold text-white">
                      {step.name}
                    </span>
                  </div>
                  {idx < COMPANY_INFO.journeySteps.length - 1 && (
                    <div className="w-3 h-[1px] bg-white/10 hidden sm:inline" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Value Proposition Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onNavigateSection(item.targetSection)}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Header Icon & Action */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform border border-blue-500/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-tech tracking-widest text-xs font-bold text-slate-500 group-hover:text-blue-400">
                      0{valueProps.indexOf(item) + 1}
                    </span>
                  </div>

                  <div className="mb-2">
                    <h3 className="font-display font-black text-2xl tracking-wider text-white flex items-center gap-2">
                      {item.action}
                    </h3>
                    <p className="font-semibold text-xs text-slate-300 mt-1">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mt-2.5 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-cyan-300">
                  <span>Explore {item.action}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
