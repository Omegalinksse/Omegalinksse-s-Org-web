import React from 'react';
import { OmegalinksLogo } from './OmegalinksLogo';
import { CircuitCanvas } from './CircuitCanvas';
import {
  ArrowRight,
  Code,
  Sparkles,
  Layers,
  CheckCircle2,
  Terminal,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_INFO, COMPANY_ASSETS } from '../data/companyData';

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
  onExploreTraining: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartProject,
  onExploreWork,
  onExploreTraining,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#020617]"
    >
      {/* Background Graphic Blend */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src={COMPANY_ASSETS.heroBg}
          alt="Circuit Mesh Network"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center mix-blend-screen filter saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-[#020617]/90" />
      </div>

      {/* Interactive Circuit Canvas */}
      <CircuitCanvas density="standard" interactive={true} />

      {/* Controlled Radial Cyber Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          <span>Connected Digital Innovation</span>
          <span className="text-white/20">•</span>
          <span className="text-slate-400 normal-case font-normal text-[11px]">Software • Creative • Academy</span>
        </div>

        {/* Official Brand Logo Presentation */}
        <div className="mb-6 transform hover:scale-[1.02] transition-transform duration-300">
          <OmegalinksLogo variant="full" size="lg" />
        </div>

        {/* Primary Headline */}
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.15] max-w-4xl mx-auto mb-4">
          Building Digital Solutions.<br />
          Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Experiences.</span>
          <br className="hidden sm:inline" />
          {' '}Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">Digital Skills.</span>
        </h1>

        {/* Supporting Statement */}
        <p className="mt-3 text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          {COMPANY_INFO.supportingStatement}
        </p>

        {/* Strategic Call to Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] active:scale-95 flex items-center justify-center gap-2 group"
            id="hero-start-project-btn"
          >
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreWork}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 hover:border-blue-500/50 text-xs font-bold uppercase tracking-wider transition-all backdrop-blur-sm flex items-center justify-center gap-2 group"
            id="hero-explore-work-btn"
          >
            <Code className="w-4 h-4 text-blue-400 group-hover:rotate-12 transition-transform" />
            <span>EXPLORE OUR WORK</span>
          </button>
        </div>

        {/* Quick Trust Highlights & Pillars */}
        <div className="mt-12 pt-8 border-t border-white/5 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="group bg-white/5 border border-white/10 p-3.5 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Full-Stack Tech</div>
              <div className="text-[11px] text-slate-400">Python, Flask, SQL, Web</div>
            </div>
          </div>

          <div className="group bg-white/5 border border-white/10 p-3.5 rounded-2xl backdrop-blur-sm hover:border-cyan-500/50 transition-all flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Creative Media</div>
              <div className="text-[11px] text-slate-400">Branding, CorelDRAW, Video</div>
            </div>
          </div>

          <div 
            onClick={onExploreTraining}
            className="group bg-white/5 border border-white/10 p-3.5 rounded-2xl backdrop-blur-sm hover:border-purple-500/50 cursor-pointer transition-all flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Skills Academy</div>
              <div className="text-[11px] text-slate-400">Hands-on practical labs</div>
            </div>
          </div>

          <div className="group bg-white/5 border border-white/10 p-3.5 rounded-2xl backdrop-blur-sm hover:border-blue-400/50 transition-all flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-400/20 rounded-xl flex items-center justify-center text-blue-300 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Reliable Partner</div>
              <div className="text-[11px] text-slate-400">Local & International</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
