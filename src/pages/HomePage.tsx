import React from 'react';
import { Hero } from '../components/Hero';
import { ValueProposition } from '../components/ValueProposition';
import { ProcessSection } from '../components/ProcessSection';
import { InsightsSection } from '../components/InsightsSection';
import {
  Code2,
  Palette,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
} from 'lucide-react';
import { COMPANY_INFO, COMPANY_ASSETS } from '../data/companyData';
import { ProjectCaseStudy } from '../types';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenContact: (division?: string, service?: string) => void;
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenContact,
  onOpenCaseStudy,
}) => {
  const divisions = [
    {
      id: 'digital-technology',
      title: 'Digital Technology',
      subtitle: 'Software, Web & Cloud Engineering',
      desc: 'Full-stack web applications, REST APIs, enterprise automation systems, and scalable cloud solutions built with modern technology.',
      icon: Code2,
      accent: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
    },
    {
      id: 'creative-media',
      title: 'Creative Digital Media',
      subtitle: 'Branding, Graphics & Multimedia',
      desc: 'Industry-standard vector graphic designs in CorelDRAW, brand identity books, video post-production, and digital publication media.',
      icon: Palette,
      accent: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    },
    {
      id: 'skills-training',
      title: 'Digital Skills & Training',
      subtitle: 'Computer Education & Practical Academy',
      desc: 'Certified hands-on training in computer fundamentals, software engineering, graphics production, and workplace digital productivity.',
      icon: GraduationCap,
      accent: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    },
    {
      id: 'growth-solutions',
      title: 'Digital Growth & Solutions',
      subtitle: 'Business Digitization & Strategy',
      desc: 'Transforming local enterprises and institutions into digital-first operations through IT consulting, tech setups, and automated workflows.',
      icon: TrendingUp,
      accent: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
    },
  ];

  return (
    <div className="relative">
      {/* 1. Hero Section */}
      <Hero
        onStartProject={() => onOpenContact()}
        onExploreWork={() => onNavigate('portfolio')}
        onExploreTraining={() => onNavigate('training')}
      />

      {/* 2. Value Proposition Ribbon */}
      <ValueProposition onNavigateSection={(sec) => onNavigate(sec)} />

      {/* 3. Four Core Divisions Overview Section */}
      <section className="py-20 bg-white dark:bg-[#020617] relative border-t border-slate-200 dark:border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>Our Quad-Pillar Ecosystem</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
                Four Specialized Divisions. <br className="hidden sm:inline" />
                One Integrated Technology Partner.
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3">
                From bespoke code and digital media to professional student training and enterprise digital setups, discover what we do.
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 dark:bg-blue-600/15 hover:bg-blue-100 dark:hover:bg-blue-600/25 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider transition-all hover:scale-[1.02] self-start md:self-auto shadow-sm"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map((div) => {
              const Icon = div.icon;
              return (
                <div
                  key={div.id}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group hover:bg-white dark:hover:bg-white/[0.04] shadow-sm dark:shadow-none"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 ${div.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {div.subtitle}
                    </span>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mt-1 mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                      {div.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                      {div.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>View Division Offerings</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Flagship Spotlight: TraceHop Teaser */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-blue-50/50 to-slate-50 dark:from-[#020617] dark:via-blue-950/20 dark:to-[#020617] relative border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-white/[0.02] border border-blue-200 dark:border-blue-500/20 relative overflow-hidden backdrop-blur-xl shadow-xl dark:shadow-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-[10px] font-bold tracking-widest uppercase mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Flagship Innovation Spotlight</span>
                </div>

                <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight mb-4">
                  TraceHop: Enterprise Smart Campus Logistics & Asset Recovery
                </h2>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Engineered and incubated directly by Omegalinks Digital Technology, TraceHop solves decentralized asset recovery, secure verification, and real-time claim management for higher education institutions.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <div className="text-cyan-600 dark:text-cyan-400 font-extrabold text-xl">100%</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Digital Chain of Custody</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <div className="text-blue-600 dark:text-blue-400 font-extrabold text-xl">&lt; 2 hrs</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Average Claim Match</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <div className="text-emerald-600 dark:text-emerald-400 font-extrabold text-xl">Zero</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Manual Paper Logging</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onNavigate('portfolio')}
                    className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenContact('digital-technology', 'Enterprise Asset Recovery System Inquiry')}
                    className="px-6 py-3 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white font-semibold text-xs transition-all shadow-sm"
                  >
                    <span>Request Demo for Your Institution</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-md p-6 rounded-2xl bg-slate-900 dark:bg-[#030b1e] border border-slate-800 dark:border-cyan-500/30 shadow-2xl relative">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400">tracehop.omegalinks.tech</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-slate-300">
                      <span className="text-cyan-400">$</span> init tracehop_core --protocol=verified
                      <div className="text-emerald-400 mt-1">✓ Relational schema verified</div>
                      <div className="text-blue-400">✓ Multi-role authorization active</div>
                      <div className="text-slate-400">✓ SMS & WhatsApp notification ready</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-cyan-300 text-[11px] flex items-center justify-between">
                      <span>Status: Production Ready</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Workflow Preview */}
      <ProcessSection onStartWorkflow={() => onOpenContact()} />

      {/* 6. Insights Preview */}
      <InsightsSection />

      {/* 7. Bottom Call to Action */}
      <section className="py-20 bg-white dark:bg-[#020617] relative border-t border-slate-200 dark:border-white/5 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 dark:from-blue-950/40 dark:via-cyan-950/30 dark:to-blue-950/40 border border-blue-200 dark:border-blue-500/30 shadow-xl dark:shadow-[0_0_50px_rgba(59,130,246,0.15)]">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight mb-4">
              Ready to Accelerate Your Digital Transformation?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
              Whether you need bespoke software development, authoritative branding, staff digital upskilling, or technical advisory, we are here to partner with you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenContact()}
                className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(37,99,235,0.4)] flex items-center gap-2 transition-all hover:scale-105"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Schedule Free Consultation</span>
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-8 py-3.5 rounded-full bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-300 dark:border-white/15 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white font-semibold text-xs transition-all shadow-sm"
              >
                <span>Learn More About Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
