import React, { useState } from 'react';
import {
  Code,
  Sparkles,
  ExternalLink,
  Github,
  ArrowRight,
  Shield,
  Layers,
  Database,
  Terminal,
  Cpu,
  Search,
  CheckCircle,
} from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/companyData';
import { PortfolioCategory, ProjectCaseStudy } from '../types';

interface PortfolioSectionProps {
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
  onContactProject: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onOpenCaseStudy,
  onContactProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('ALL');

  const categories: PortfolioCategory[] = [
    'ALL',
    'SOFTWARE',
    'WEB',
    'DATA & ANALYTICS',
    'BRANDING',
    'GRAPHIC DESIGN',
    'DIGITAL SOLUTIONS',
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => {
    if (selectedCategory === 'ALL') return true;
    return p.category === selectedCategory;
  });

  const flagshipProject = PORTFOLIO_PROJECTS.find((p) => p.flagship);

  return (
    <section id="portfolio" className="relative py-20 bg-[#020617] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>Proven Engineering & Case Studies</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            ENGINEERED SOLUTIONS & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400">
              TECHNICAL CASE STUDIES
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Rather than generic mockups, our portfolio showcases verified software engineering systems, relational database architectures, and authentic creative branding projects.
          </p>
        </div>

        {/* Flagship Case Study Spotlight: TraceHop (Section 11) */}
        {flagshipProject && (
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.15)] relative overflow-hidden backdrop-blur-sm">
            {/* Ambient Corner Glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-tech font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> Flagship Case Study
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                  {flagshipProject.name}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {flagshipProject.problem}
                </p>

                {/* Key Technical Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5 text-blue-400 text-xs font-bold mb-1">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Backend</span>
                    </div>
                    <p className="text-[11px] text-slate-300">Python / Flask Architecture</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5 text-sky-400 text-xs font-bold mb-1">
                      <Database className="w-3.5 h-3.5" />
                      <span>Database</span>
                    </div>
                    <p className="text-[11px] text-slate-300">SQLite & SQLAlchemy ORM</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold mb-1">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Security</span>
                    </div>
                    <p className="text-[11px] text-slate-300">Claim Validation & RBAC</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {flagshipProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300 text-xs font-tech"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenCaseStudy(flagshipProject)}
                    className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.4)] flex items-center gap-2"
                  >
                    <span>View Full Case Study & System Architecture</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={flagshipProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code Repositories</span>
                  </a>
                </div>
              </div>

              {/* Visual Preview Graphic */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                  <img
                    src={flagshipProject.image}
                    alt={flagshipProject.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#020617]/90 backdrop-blur-md border border-white/10 text-left">
                    <div className="text-xs font-bold text-slate-200 flex items-center justify-between">
                      <span>Live Recovery Lifecycle</span>
                      <span className="font-tech text-[10px] text-emerald-400 uppercase">Verified Workflow</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Structured claim validation preventing false ownership claims across university campuses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter Tabs */}
        <div className="flex items-center flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-tech font-bold tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between backdrop-blur-sm"
            >
              <div>
                {/* Project Image Banner */}
                {project.image && (
                  <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-[#020617]/90 border border-white/10 text-blue-300 text-[10px] font-tech font-bold tracking-wider uppercase">
                        {project.category}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-5 text-left">
                  <h4 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {project.name}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {project.problem}
                  </p>

                  {/* Key Features preview */}
                  <div className="mb-4 space-y-1">
                    {project.keyFeatures.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10 text-[10px] font-tech"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-slate-500 text-[10px] font-tech">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onOpenCaseStudy(project)}
                  className="text-xs font-bold text-blue-400 hover:text-cyan-300 flex items-center gap-1 group/link"
                >
                  <span>Detailed Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 mb-3">
            Have a specialized engineering or digital transformation requirement?
          </p>
          <button
            onClick={onContactProject}
            className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 text-blue-400 text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2"
          >
            <span>Discuss Your Project Architecture With Omegalinks</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
