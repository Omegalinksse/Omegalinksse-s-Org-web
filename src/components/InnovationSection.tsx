import React from 'react';
import {
  Sparkles,
  Bot,
  Cpu,
  BrainCircuit,
  Workflow,
  Zap,
  ArrowRight,
  ShieldAlert,
  Layers,
  Terminal,
} from 'lucide-react';
import { INNOVATION_INITIATIVES, COMPANY_ASSETS } from '../data/companyData';

interface InnovationSectionProps {
  onCollaborate: () => void;
}

export const InnovationSection: React.FC<InnovationSectionProps> = ({
  onCollaborate,
}) => {
  const getIcon = (title: string) => {
    if (title.includes('AI') || title.includes('Language')) return BrainCircuit;
    if (title.includes('Automation')) return Workflow;
    if (title.includes('Data')) return Cpu;
    if (title.includes('Transformation')) return Zap;
    return Sparkles;
  };

  return (
    <section id="innovation" className="relative py-20 bg-[#020617] border-t border-white/5 overflow-hidden">
      {/* Background Tech Image Blend */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src={COMPANY_ASSETS.neuralLab}
          alt="Neural AI Lab"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/85 to-[#020617]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-3">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Future Digital Solutions</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            OMEGALINKS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400">
              INNOVATION LAB
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            We are actively researching and prototyping emerging digital technologies to ensure our clients and trainees remain at the leading edge of modern computing.
          </p>
        </div>

        {/* 4 Innovation Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {INNOVATION_INITIATIVES.map((init, idx) => {
            const Icon = getIcon(init.title);
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 shadow-xl text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-tech text-blue-300 uppercase font-bold tracking-wider">
                      {init.stage}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {init.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {init.description}
                  </p>
                </div>

                <div>
                  {/* Focus Areas */}
                  <div className="pt-3 border-t border-white/10">
                    <div className="text-[10px] font-tech text-slate-400 uppercase tracking-wider mb-2">
                      Research & Exploration Focus:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {init.focus.map((f, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10 text-[11px]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Box */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Interested in R&D or Pilot Prototyping?
              </h4>
              <p className="text-xs text-slate-400">
                Omegalinks collaborates with forward-looking founders and businesses on emerging tech pilots.
              </p>
            </div>
          </div>

          <button
            onClick={onCollaborate}
            className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] whitespace-nowrap flex items-center gap-2"
          >
            <span>Partner in Innovation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
