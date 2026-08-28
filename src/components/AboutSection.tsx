import React from 'react';
import {
  Code2,
  Palette,
  GraduationCap,
  TrendingUp,
  CheckCircle,
  Network,
  Cpu,
  Target,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { COMPANY_INFO, COMPANY_ASSETS } from '../data/companyData';

interface AboutSectionProps {
  onExploreServices: () => void;
  onViewFounder: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onExploreServices,
  onViewFounder,
}) => {
  const pillars = [
    {
      title: 'Software Engineering Rigor',
      desc: 'Building with structured architectures, relational data models, and dependable full-stack code.',
      icon: Cpu,
    },
    {
      title: 'Creative Digital Precision',
      desc: 'Crafting authoritative brand identities and vector media with CorelDRAW and multimedia tools.',
      icon: Palette,
    },
    {
      title: 'Practical Technology Education',
      desc: 'Empowering students and professionals through hands-on computer operations and programming labs.',
      icon: GraduationCap,
    },
    {
      title: 'Real-World Problem Solving',
      desc: 'Focusing on tangible operational solutions like inventory tracking, campus recovery, and automation.',
      icon: Target,
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-[#020617] overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-3">
            <Network className="w-3.5 h-3.5" />
            <span>About The Organization</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            CONNECTING TECHNOLOGY, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400">
              CREATIVITY & PRACTICAL SKILLS
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Omegalinks Digital Technology is a forward-thinking digital solutions organization built to solve real-world problems through software development, digital creativity, and comprehensive computer education.
          </p>
        </div>

        {/* 2-Column Story & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: Authentic Story & Value */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
              <h3 className="font-display font-bold text-xl text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                Who We Are & What Drives Us
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                We reject the idea that a technology enterprise must be pigeonholed as only a software agency, only a graphic design studio, or only a computer training center.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Founded and led by software engineer and 3MTT Fellow <strong className="text-slate-200">Anehi Godwin Ohinoyi</strong>, Omegalinks unites technical software engineering, creative multimedia branding, hands-on computer training, and practical business automation under one cohesive organization.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether deploying custom web platforms like the <strong className="text-cyan-300">TraceHop Campus Recovery System</strong>, structuring point-of-sale inventory databases, or mentoring students through hands-on computer science modules, our mission is to make technology accessible, dependable, and transformative.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 backdrop-blur-sm transition-all flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white mb-1">{pillar.title}</h4>
                      <p className="text-[11px] text-slate-400 leading-snug">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreServices}
                className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] flex items-center gap-2"
              >
                <span>Explore 4 Divisions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewFounder}
                className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-blue-500/50 font-bold text-xs uppercase tracking-wider transition-all backdrop-blur-sm"
              >
                Founder Credentials & Story
              </button>
            </div>
          </div>

          {/* Right Column: Visual Composite & Division Architecture */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] group">
              <img
                src={COMPANY_ASSETS.connectedEcosystem}
                alt="Omegalinks Digital Ecosystem"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#020617]/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-tech text-xs font-bold text-cyan-300 uppercase tracking-wider">
                    Core Organizational Matrix
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="grid grid-cols-2 gap-2 text-left">
                  <div className="text-[11px] text-slate-300 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>01. Digital Technology</span>
                  </div>
                  <div className="text-[11px] text-slate-300 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>02. Creative Media</span>
                  </div>
                  <div className="text-[11px] text-slate-300 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>03. Skills Academy</span>
                  </div>
                  <div className="text-[11px] text-slate-300 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>04. Growth & Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
