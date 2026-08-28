import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { FounderSection } from '../components/FounderSection';
import {
  UserCheck,
  Code2,
  Terminal,
  Cpu,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Mail,
  Phone,
  Linkedin,
  Github,
  Award,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FounderPageProps {
  onNavigate: (page: string) => void;
  onOpenContact: (division?: string, service?: string) => void;
}

export const FounderPage: React.FC<FounderPageProps> = ({
  onNavigate,
  onOpenContact,
}) => {
  return (
    <div className="relative">
      {/* 1. Page Header */}
      <PageHeader
        badge="Leadership & Technical Vision"
        badgeIcon={UserCheck}
        title="Meet Anehi Godwin Ohinoyi: Founder & Principal Architect"
        subtitle="Software engineer, creative technologist, and digital educator. Discover the technical background, engineering rigor, and visionary leadership steering Omegalinks Digital Technology."
        currentPageTitle="About Founder"
        onNavigateHome={() => onNavigate('home')}
        actions={
          <>
            <button
              onClick={() => onOpenContact('digital-technology', 'Direct Founder Consultation with Anehi Godwin Ohinoyi')}
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            >
              Book Direct Founder Consultation
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=Hello%20Godwin,%20I%20would%20like%20to%20consult%20directly%20with%20you%20regarding%20a%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-semibold text-xs transition-all"
            >
              WhatsApp Message
            </a>
          </>
        }
      />

      {/* 2. Core Founder Profile Component */}
      <FounderSection
        onContactFounder={() =>
          onOpenContact('digital-technology', 'Executive Consultation with Anehi Godwin Ohinoyi')
        }
      />

      {/* 3. Engineering Philosophy & Tenets */}
      <section className="py-20 bg-slate-100/60 dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-sky-600 dark:text-cyan-400 font-tech text-xs uppercase tracking-wider font-semibold mb-2">
              Engineering Manifesto
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              Principles of High-Impact Digital Construction
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
              Key tenets that Anehi Godwin Ohinoyi instills across all Omegalinks client projects and student classrooms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-cyan-400 flex items-center justify-center mb-4">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-slate-900 dark:text-white text-base mb-2">
                Determinism Over Hype
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                Choose robust, proven data schemas, strict typing, and observable API boundaries over unverified transient frameworks. A system must run predictably 24/7.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
              <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-cyan-500/10 border border-sky-200 dark:border-cyan-500/20 text-sky-600 dark:text-cyan-400 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-slate-900 dark:text-white text-base mb-2">
                Full-Stack Empathy
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                A great engineer does not operate in a silo. They master the database schema, the backend logic, the client rendering latency, and the end-user's emotional response.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-slate-900 dark:text-white text-base mb-2">
                Knowledge Demystification
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                The mark of true engineering competence is the ability to explain complex distributed systems simply. We educate our clients and mentor the next generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Founder Consultation CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-sky-50 to-blue-50 dark:from-blue-950/40 dark:via-cyan-950/30 dark:to-blue-950/40 border-t border-slate-200 dark:border-white/10 text-center transition-colors">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-3">
            Schedule a Direct Strategic Discussion
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-6">
            Consult directly with Anehi Godwin Ohinoyi on enterprise software design, organizational digitization, or high-stakes technology procurement.
          </p>
          <button
            onClick={() => onOpenContact('digital-technology', 'Direct Executive Advisory with Anehi Godwin Ohinoyi')}
            className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-105"
          >
            Request Founder Session
          </button>
        </div>
      </section>
    </div>
  );
};
