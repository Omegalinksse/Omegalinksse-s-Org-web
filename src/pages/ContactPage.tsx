import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ContactSection } from '../components/ContactSection';
import {
  MessageSquare,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  prefillDivision?: string;
  prefillService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  prefillDivision,
  prefillService,
}) => {
  return (
    <div className="relative">
      {/* 1. Page Header */}
      <PageHeader
        badge="Corporate Communications & Consultation"
        badgeIcon={MessageSquare}
        title="Connect With Omegalinks Digital Technology"
        subtitle="Initiate a conversation about your software project, creative media requirements, student academy enrollment, or business digital transformation."
        currentPageTitle="Contact & Consultation"
        onNavigateHome={() => onNavigate('home')}
        actions={
          <a
            href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=Hello%20Omegalinks%20Digital%20Technology,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Instant WhatsApp Chat</span>
          </a>
        }
      />

      {/* 2. Full Contact Section Component with Form & Cards */}
      <ContactSection
        prefillDivision={prefillDivision}
        prefillService={prefillService}
      />
    </div>
  );
};
