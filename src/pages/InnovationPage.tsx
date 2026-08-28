import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { InnovationSection } from '../components/InnovationSection';
import { InsightsSection } from '../components/InsightsSection';
import {
  Sparkles,
  Cpu,
  FlaskConical,
  GitBranch,
  Lightbulb,
  ArrowRight,
  Share2,
  ShieldCheck,
} from 'lucide-react';

interface InnovationPageProps {
  onNavigate: (page: string) => void;
  onOpenContact: (division?: string, service?: string) => void;
}

export const InnovationPage: React.FC<InnovationPageProps> = ({
  onNavigate,
  onOpenContact,
}) => {
  return (
    <div className="relative">
      {/* 1. Page Header */}
      <PageHeader
        badge="R&D & Emerging Technology"
        badgeIcon={FlaskConical}
        title="Omegalinks Innovation Lab: Engineering The Next Frontier"
        subtitle="Where our engineers explore experimental software architectures, intelligent algorithms, decentralized workflows, and high-leverage digital solutions that push the boundaries of real-world computing."
        currentPageTitle="Innovation Lab"
        onNavigateHome={() => onNavigate('home')}
        actions={
          <>
            <button
              onClick={() => onOpenContact('growth-solutions', 'Innovation Lab Collaboration & R&D Partnership')}
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            >
              Collaborate on R&D
            </button>
            <button
              onClick={() => onNavigate('portfolio')}
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-semibold text-xs transition-all"
            >
              See Commercialized Products
            </button>
          </>
        }
      />

      {/* 2. Innovation Section with Active Projects & Incubations */}
      <InnovationSection
        onCollaborate={() => onOpenContact('growth-solutions', 'Innovation Lab Incubation Inquiry')}
      />

      {/* 3. Tech Insights & Thought Leadership */}
      <div className="relative border-t border-white/5">
        <InsightsSection />
      </div>

      {/* 4. Bottom Incubation Callout */}
      <section className="py-16 bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-blue-950/40 border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
            Have a Research Project or Novel Tech Concept?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-6">
            We partner with university researchers, student inventors, and forward-thinking founders to turn promising prototypes into scalable production platforms.
          </p>
          <button
            onClick={() => onOpenContact('growth-solutions', 'Research & Incubation Partnership')}
            className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-105"
          >
            Submit an Incubation Proposal
          </button>
        </div>
      </section>
    </div>
  );
};
