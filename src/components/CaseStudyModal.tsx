import React from 'react';
import { ProjectCaseStudy } from '../types';
import {
  X,
  CheckCircle2,
  Github,
  ExternalLink,
  Code,
  Layers,
  Cpu,
  Database,
  Shield,
  Sparkles,
  ArrowRight,
  Terminal,
} from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onRequestSimilar: (projectName: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-[#020617]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#020617] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] p-6 sm:p-8 text-left backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest">
            {project.category}
          </span>
          {project.flagship && (
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-blue-400" /> Flagship Case Study
            </span>
          )}
        </div>

        <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight mb-2">
          {project.name}
        </h2>
        <p className="text-xs font-tech text-blue-400 mb-6">
          Architected by Omegalinks Digital Technology
        </p>

        {/* Visual Banner */}
        {project.image && (
          <div className="relative rounded-2xl overflow-hidden mb-6 border border-white/10 max-h-72">
            <img
              src={project.image}
              alt={project.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
          </div>
        )}

        {/* 2-Column Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2 text-rose-400 text-[10px] font-bold uppercase tracking-widest mb-2">
              <div className="w-2 h-2 rounded-full bg-rose-500" />
              The Challenge & Operational Problem
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-2">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              The Engineered Solution
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mb-6">
          <h3 className="font-display font-bold text-base text-white mb-3 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-blue-400" />
            Core Engineered Features & Workflows
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2 text-xs text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture & Tooling */}
        <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
          <h4 className="font-tech text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
            Technology Stack & Tools Utilized
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-white/5 text-blue-300 border border-white/10 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Verified Outcomes */}
        <div className="mb-8 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
          <div className="flex items-center gap-2 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">
            <CheckCircle2 className="w-4 h-4" />
            Verified Outcome & Impact
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {project.outcome}
          </p>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Browse GitHub Source</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-blue-300 text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live System</span>
              </a>
            )}
          </div>

          <button
            onClick={() => {
              onClose();
              onRequestSimilar(project.name);
            }}
            className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2"
          >
            <span>Discuss a Project Like This</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
