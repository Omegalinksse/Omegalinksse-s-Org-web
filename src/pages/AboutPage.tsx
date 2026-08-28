import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { AboutSection } from '../components/AboutSection';
import { ProcessSection } from '../components/ProcessSection';
import {
  Network,
  Cpu,
  Palette,
  GraduationCap,
  TrendingUp,
  Target,
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  BookOpen,
  MapPin,
} from 'lucide-react';
import { COMPANY_INFO, COMPANY_ASSETS } from '../data/companyData';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenContact: (division?: string, service?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenContact,
}) => {
  const corporateValues = [
    {
      title: 'Engineering Integrity',
      desc: 'We do not take shortcuts. Every line of code, database constraint, and system architecture is built for durability, security, and sustained real-world performance.',
      icon: Cpu,
    },
    {
      title: 'Human-Centered Utility',
      desc: 'Technology is only as valuable as the human problems it resolves. We prioritize intuitive UX, accessibility, and high adoption rates across all deployments.',
      icon: Users,
    },
    {
      title: 'Practical Empowerment',
      desc: 'Our Academy and training programs are grounded in project-first, laboratory-tested exercises, transforming novice learners into confident digital practitioners.',
      icon: GraduationCap,
    },
    {
      title: 'Relentless Innovation',
      desc: 'Through our R&D initiatives, we consistently explore emerging AI algorithms, modern protocols, and novel software paradigms to keep our clients ahead.',
      icon: Sparkles,
    },
  ];

  return (
    <div className="relative">
      {/* 1. Dedicated Page Header */}
      <PageHeader
        badge="Corporate Profile & Heritage"
        badgeIcon={Network}
        title="Building Connected Digital Systems for Africa & The World"
        subtitle="Omegalinks Digital Technology is a multifaceted technology and creative engineering firm. We merge high-performance software development, authoritative brand design, and certified technology education into one coherent digital powerhouse."
        currentPageTitle="About Us"
        onNavigateHome={() => onNavigate('home')}
        actions={
          <>
            <button
              onClick={() => onNavigate('services')}
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            >
              Explore Our Services
            </button>
            <button
              onClick={() => onNavigate('founder')}
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-semibold text-xs transition-all"
            >
              Meet The Founder
            </button>
          </>
        }
      />

      {/* 2. Core About Section Component */}
      <AboutSection
        onExploreServices={() => onNavigate('services')}
        onViewFounder={() => onNavigate('founder')}
      />

      {/* 3. Corporate Values Deep Dive */}
      <section className="py-20 bg-[#020617] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Our Operating Philosophy</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Values That Define Every System We Build
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3">
              Whether architecting enterprise software or training student developers, our work is governed by four unwavering standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporateValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:bg-white/[0.04]"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Strategic Founder Spotlight */}
      <section className="py-20 bg-gradient-to-b from-[#020617] via-slate-900/40 to-[#020617] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 relative overflow-hidden backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="text-cyan-400 font-tech text-xs font-semibold tracking-wider uppercase mb-2">
                  Founder & Principal Lead
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-3">
                  Anehi Godwin Ohinoyi
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  &ldquo;At Omegalinks, we bridge the gap between technical capability and everyday usability. Technology shouldn't be an abstract luxury—it must solve real operational hurdles, create sustainable livelihoods, and empower our communities to lead digital innovation.&rdquo;
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onNavigate('founder')}
                    className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.4)] flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <span>Read Full Founder Profile</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onOpenContact('digital-technology', 'Direct Founder Consultation')}
                    className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-semibold transition-all"
                  >
                    <span>Book Founder Consultation</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="p-6 rounded-2xl bg-[#030a1b] border border-cyan-500/30 text-center max-w-xs w-full">
                  <div className="w-20 h-20 rounded-full bg-blue-600/20 border border-cyan-400/40 mx-auto flex items-center justify-center mb-4">
                    <span className="font-display font-black text-2xl text-cyan-300">AG</span>
                  </div>
                  <div className="font-display font-bold text-white text-base">Anehi Godwin Ohinoyi</div>
                  <div className="text-cyan-400 text-xs mt-1">Lead Software Engineer & Director</div>
                  <div className="text-slate-400 text-[11px] mt-2 flex items-center justify-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>Okene, Kogi State, Nigeria</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Workflow */}
      <ProcessSection onStartWorkflow={() => onOpenContact()} />

      {/* 6. Footer Call to Action */}
      <section className="py-16 bg-[#020617] border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-display font-bold text-2xl text-white mb-3">
            Want to Collaborate with Omegalinks?
          </h3>
          <p className="text-slate-300 text-sm mb-6">
            We welcome conversations with businesses, founders, academic institutions, and prospective students.
          </p>
          <button
            onClick={() => onOpenContact()}
            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-105"
          >
            Contact Our Executive Team
          </button>
        </div>
      </section>
    </div>
  );
};
