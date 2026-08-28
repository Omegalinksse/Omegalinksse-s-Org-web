import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { PortfolioSection } from '../components/PortfolioSection';
import {
  Sparkles,
  ArrowRight,
  Code2,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
} from 'lucide-react';
import { ProjectCaseStudy } from '../types';

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
  onOpenContact: (division?: string, service?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigate,
  onOpenCaseStudy,
  onOpenContact,
}) => {
  return (
    <div className="relative">
      {/* 1. Dedicated Page Header */}
      <PageHeader
        badge="Proven Technical Delivery"
        badgeIcon={Sparkles}
        title="Engineered Software, Live Systems & Creative Portfolios"
        subtitle="Review our verified production deployments, proprietary platforms, enterprise portals, and creative brand identities crafted across higher education, commercial logistics, and corporate clients."
        currentPageTitle="Portfolio & Case Studies"
        onNavigateHome={() => onNavigate('home')}
        actions={
          <>
            <button
              onClick={() => onOpenContact('digital-technology', 'Custom Software Development Project')}
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            >
              Request a Project Like These
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-semibold text-xs transition-all"
            >
              View Service Specifications
            </button>
          </>
        }
      />

      {/* 2. Interactive Portfolio Section with TraceHop Flagship & Filters */}
      <PortfolioSection
        onOpenCaseStudy={onOpenCaseStudy}
        onContactProject={() => onOpenContact()}
      />

      {/* 3. Bottom Callout */}
      <section className="py-16 bg-[#020617] border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
            Looking for a Specialized Engineering Team?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-6">
            We build scalable, maintainable, and elegant software systems tailored to your business challenges.
          </p>
          <button
            onClick={() => onOpenContact()}
            className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-105"
          >
            Start Your Project Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
