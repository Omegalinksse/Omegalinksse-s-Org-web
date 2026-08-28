import React from 'react';
import { OmegalinksLogo } from './OmegalinksLogo';
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Heart,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_INFO, DIVISIONS, FOUNDER_INFO } from '../data/companyData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Organization', id: 'about' },
    { name: 'Solutions & Services', id: 'services' },
    { name: 'Case Studies Portfolio', id: 'portfolio' },
    { name: 'Omegalinks Academy', id: 'training' },
    { name: 'Innovation Lab', id: 'innovation' },
    { name: 'About Founder', id: 'founder' },
    { name: '5-Phase Workflow', id: 'process' },
    { name: 'Tech Insights', id: 'insights' },
    { name: 'Contact & Quotes', id: 'contact' },
  ];

  return (
    <footer className="relative bg-[#020617] border-t border-white/10 text-slate-400 pt-16 pb-12 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 text-left">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <OmegalinksLogo variant="compact" size="md" />
            
            <p className="text-xs text-blue-400 font-tech tracking-wider uppercase font-semibold pt-1">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Omegalinks Digital Technology is a technology and digital solutions organization dedicated to software engineering, creative digital media, computer training, and practical problem-solving.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={FOUNDER_INFO.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={FOUNDER_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${COMPANY_INFO.contact.primaryEmail}`}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-tech text-xs uppercase tracking-wider text-slate-200 font-bold">
              Navigation & Explorations
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-left text-slate-400 hover:text-blue-400 transition-colors py-0.5"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: 4 Solutions Divisions */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-tech text-xs uppercase tracking-wider text-slate-200 font-bold">
              Our 4 Divisions
            </h4>
            <div className="space-y-1.5 text-xs">
              {DIVISIONS.map((div) => (
                <button
                  key={div.id}
                  onClick={() => onNavigate('services')}
                  className="text-left text-slate-400 hover:text-blue-400 transition-colors block py-0.5"
                >
                  <span className="font-tech text-[10px] text-blue-400 mr-1.5">{div.number}</span>
                  {div.title}
                </button>
              ))}
            </div>
          </div>

          {/* Col 4: Verified Contact Coordinates */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-tech text-xs uppercase tracking-wider text-slate-200 font-bold">
              Communication & Operations
            </h4>
            
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <a
                  href={`tel:${COMPANY_INFO.contact.phone}`}
                  className="hover:text-cyan-300 transition-colors"
                >
                  {COMPANY_INFO.contact.phoneFormatted} (Call / WhatsApp)
                </a>
              </div>

              <div className="flex items-start gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a
                    href={`mailto:${COMPANY_INFO.contact.primaryEmail}`}
                    className="break-all hover:text-cyan-300 transition-colors"
                  >
                    {COMPANY_INFO.contact.primaryEmail}
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.contact.alternateEmail}`}
                    className="text-[11px] text-slate-400 hover:text-cyan-300 transition-colors break-all mt-0.5"
                  >
                    Alt: {COMPANY_INFO.contact.alternateEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contact.location} • Available Globally</span>
              </div>

              <div className="mt-3 p-3 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-slate-400 backdrop-blur-sm">
                <div className="flex items-center gap-1 text-blue-400 font-bold mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Organization
                </div>
                Combining full-stack engineering with genuine practical education.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-slate-400 text-center">
            <span>Designed & Engineered by</span>
            <button
              onClick={() => onNavigate('founder')}
              className="text-blue-400 hover:underline font-semibold"
            >
              {FOUNDER_INFO.name}
            </button>
            <span className="text-slate-600">({FOUNDER_INFO.role})</span>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-blue-400 border border-white/10 transition-colors flex items-center gap-1.5"
            aria-label="Scroll to top of page"
            id="footer-back-to-top"
          >
            <span className="text-[11px] font-tech font-bold uppercase">Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
