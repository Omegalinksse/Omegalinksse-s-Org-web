import React from 'react';
import {
  Code2,
  GraduationCap,
  Award,
  Github,
  Linkedin,
  Mail,
  CheckCircle2,
  Sparkles,
  Terminal,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { FOUNDER_INFO } from '../data/companyData';

interface FounderSectionProps {
  onContactFounder: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({
  onContactFounder,
}) => {
  return (
    <section id="founder" className="relative py-20 bg-[#020617] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Leadership & Technical Vision</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            ABOUT THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400">
              FOUNDER & LEAD DEVELOPER
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Driven by hands-on engineering, system architecture, and an unwavering commitment to digital education.
          </p>
        </div>

        {/* Profile Card Container */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Founder Visual Badge / Avatar */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative group mb-5">
                {/* Tech Aura Ring */}
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl p-1 bg-gradient-to-tr from-blue-500 via-cyan-400 to-sky-400 shadow-[0_0_35px_rgba(59,130,246,0.3)]">
                  <div className="w-full h-full rounded-[22px] bg-[#020617] flex flex-col items-center justify-center p-4 relative overflow-hidden">
                    {/* Abstract Tech Silhouette Graphic */}
                    <div className="w-24 h-24 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-3">
                      <Code2 className="w-12 h-12 text-blue-400" />
                    </div>
                    <span className="font-display font-bold text-white text-base">
                      {FOUNDER_INFO.name}
                    </span>
                    <span className="font-tech text-xs text-blue-400 mt-0.5 uppercase tracking-wider">
                      {FOUNDER_INFO.role}
                    </span>
                  </div>
                </div>

                {/* Floating 3MTT Verified Badge */}
                <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-[#020617] border border-blue-500/50 text-blue-300 text-[11px] font-tech font-bold flex items-center gap-1.5 shadow-lg">
                  <Award className="w-3.5 h-3.5 text-blue-400" />
                  <span>3MTT Fellow</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href={FOUNDER_INFO.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={FOUNDER_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <button
                  onClick={onContactFounder}
                  className="p-2.5 rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
                  aria-label="Email Founder"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Verified Credentials & Narrative */}
            <div className="lg:col-span-8 text-left space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-tech text-xs font-bold text-blue-400 uppercase tracking-wider">
                    Software Engineer & Digital Educator
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                  {FOUNDER_INFO.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {FOUNDER_INFO.academic}
                </p>
              </div>

              {/* Bio paragraphs */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {FOUNDER_INFO.bio}
              </p>

              {/* Mission Quote */}
              <div className="p-4 rounded-2xl bg-blue-500/10 border-l-4 border-blue-500 text-blue-200 text-xs sm:text-sm italic backdrop-blur-sm">
                "{FOUNDER_INFO.missionStatement}"
              </div>

              {/* Core Skill Chips */}
              <div className="pt-2">
                <div className="font-tech text-[10px] text-slate-400 uppercase tracking-wider mb-2">
                  Demonstrated Competencies & Technologies:
                </div>
                <div className="flex flex-wrap gap-2">
                  {FOUNDER_INFO.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10 text-xs font-tech"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Outreach CTA */}
              <div className="pt-3 flex items-center gap-4">
                <button
                  onClick={onContactFounder}
                  className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.4)] flex items-center gap-2"
                >
                  <span>Connect With Founder</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
