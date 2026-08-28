import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { ServicesSection } from '../components/ServicesSection';
import { ServiceDetailModal } from '../components/ServiceDetailModal';
import {
  Code2,
  Palette,
  GraduationCap,
  TrendingUp,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  HelpCircle,
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  onOpenContact: (division?: string, service?: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenContact,
  onSelectService,
}) => {
  return (
    <div className="relative">
      {/* 1. Page Header */}
      <PageHeader
        badge="Enterprise Capability Portfolio"
        badgeIcon={Layers}
        title="Comprehensive Digital Engineering & Creative Solutions"
        subtitle="Explore our four dedicated divisions spanning enterprise software engineering, authoritative visual identity, certified digital technology education, and business automation consulting."
        currentPageTitle="Services & Solutions"
        onNavigateHome={() => onNavigate('home')}
        actions={
          <>
            <button
              onClick={() => onOpenContact()}
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            >
              Request Custom Quote
            </button>
            <button
              onClick={() => onNavigate('portfolio')}
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-semibold text-xs transition-all"
            >
              View In-Production Portfolio
            </button>
          </>
        }
      />

      {/* 2. Full Interactive Services Component with Tabs & Details */}
      <div className="relative">
        <ServicesSection
          onSelectService={onSelectService}
          onRequestService={(divisionId, serviceName) =>
            onOpenContact(divisionId, serviceName)
          }
        />
      </div>

      {/* 3. Division FAQ & Assurance Section */}
      <section className="py-20 bg-[#020617] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-cyan-400 font-tech text-xs uppercase tracking-wider font-semibold mb-2">
              Service Delivery Guarantee
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Transparent Execution, Reliable Timelines
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Every project commissioned with Omegalinks includes strict milestone tracking, documentation, and dedicated post-deployment support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">
                100% Intellectual Property Rights
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Upon project completion and signoff, full source code repositories, design vector master files (.CDR, .AI, .FIG), and system documentation are handed over to your organization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">
                Predictable Milestone Delivery
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                We establish precise sprint cycles with staged review checkpoints. You test intermediate staging builds before production deployment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center mb-4">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">
                Active Post-Launch Support
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                All delivered software solutions and brand campaigns include dedicated warranty periods, training sessions for your staff, and optional maintenance SLAs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Custom Consultation Callout */}
      <section className="py-16 bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-blue-950/40 border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
            Have a Specific Project Requirement in Mind?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-6">
            We architect bespoke engineering and creative packages suited to your exact organizational constraints and budget.
          </p>
          <button
            onClick={() => onOpenContact()}
            className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-105"
          >
            Start Your Custom Project Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
