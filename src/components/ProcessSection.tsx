import React from 'react';
import {
  Compass,
  Layout,
  Code2,
  ShieldCheck,
  Rocket,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { WORKFLOW_PHASES } from '../data/companyData';

interface ProcessSectionProps {
  onStartWorkflow: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onStartWorkflow,
}) => {
  const getPhaseIcon = (phase: number) => {
    switch (phase) {
      case 1:
        return Compass;
      case 2:
        return Layout;
      case 3:
        return Code2;
      case 4:
        return ShieldCheck;
      case 5:
        return Rocket;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="process" className="relative py-20 bg-white dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Engineering Discipline</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
            OUR STRUCTURED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-600 dark:from-blue-400 dark:via-sky-300 dark:to-cyan-400">
              DELIVERY WORKFLOW
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Every engagement follows a rigorous 5-phase execution lifecycle that guarantees transparency, reliability, clean architecture, and practical enablement.
          </p>
        </div>

        {/* 5-Phase Horizontal / Responsive Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
          {WORKFLOW_PHASES.map((phase) => {
            const Icon = getPhaseIcon(phase.phase);
            return (
              <div
                key={phase.phase}
                className="group relative p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 shadow-sm dark:shadow-lg text-left flex flex-col justify-between"
              >
                <div>
                  {/* Phase Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-tech text-xs font-black text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-300">
                      0{phase.phase}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors mb-2">
                    {phase.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {phase.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-3 border-t border-slate-200 dark:border-white/10">
                  <span className="font-tech text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5 font-semibold">
                    Key Outcomes:
                  </span>
                  <div className="space-y-1">
                    {phase.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Bottom Bar */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm shadow-sm dark:shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Ready to begin Phase 1 Discovery for your organization?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              We define clear scopes, technical requirements, and milestones before writing any code.
            </p>
          </div>

          <button
            onClick={onStartWorkflow}
            className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.4)] flex items-center gap-2 whitespace-nowrap"
          >
            <span>Initiate Discovery Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
