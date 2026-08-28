import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { TrainingPage } from './pages/TrainingPage';
import { InnovationPage } from './pages/InnovationPage';
import { FounderPage } from './pages/FounderPage';
import { ContactPage } from './pages/ContactPage';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProjectCaseStudy, ServiceItem } from './types';
import { PhoneCall, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';

const VALID_PAGES = [
  'home',
  'about',
  'services',
  'portfolio',
  'training',
  'innovation',
  'founder',
  'contact',
] as const;

type PageId = (typeof VALID_PAGES)[number];

export default function App() {
  // Helper to parse page from URL hash
  const getInitialPage = (): PageId => {
    if (typeof window === 'undefined') return 'home';
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase().trim();
    if (hash === 'process') return 'about';
    if (hash === 'insights') return 'innovation';
    if (VALID_PAGES.includes(hash as PageId)) {
      return hash as PageId;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectCaseStudy | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [contactPrefill, setContactPrefill] = useState<{ division?: string; service?: string }>({});

  // Sync state with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const page = getInitialPage();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Programmatic navigation handler
  const navigate = (page: string) => {
    let target = page.replace(/^#\/?/, '').toLowerCase().trim() as PageId;
    if (target === ('process' as any)) target = 'about';
    if (target === ('insights' as any)) target = 'innovation';

    if (VALID_PAGES.includes(target)) {
      setCurrentPage(target);
      if (target === 'home') {
        window.history.pushState(null, '', window.location.pathname);
      } else {
        window.location.hash = `#/${target}`;
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleOpenContact = (division?: string, service?: string) => {
    setContactPrefill({ division, service });
    navigate('contact');
  };

  const handleEnrollCourse = (courseTitle: string) => {
    handleOpenContact('skills-training', `Enrollment: ${courseTitle}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-200 font-sans selection:bg-blue-500 selection:text-white relative overflow-x-hidden flex flex-col justify-between transition-colors duration-200">
      {/* Immersive UI Background Ambiance */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.12] dark:opacity-20"
          style={{
            backgroundImage: 'radial-gradient(#3b82f6 0.5px, transparent 0.5px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-400/10 dark:bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Top Fixed Header with Multi-Page Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigate}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Primary Page Router View */}
      <main className="relative z-10 flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigate}
            onOpenContact={handleOpenContact}
            onOpenCaseStudy={(project) => setSelectedCaseStudy(project)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigate}
            onOpenContact={handleOpenContact}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigate}
            onOpenContact={handleOpenContact}
            onSelectService={(service) => setSelectedService(service)}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onNavigate={navigate}
            onOpenCaseStudy={(project) => setSelectedCaseStudy(project)}
            onOpenContact={handleOpenContact}
          />
        )}

        {currentPage === 'training' && (
          <TrainingPage
            onNavigate={navigate}
            onEnrollCourse={handleEnrollCourse}
          />
        )}

        {currentPage === 'innovation' && (
          <InnovationPage
            onNavigate={navigate}
            onOpenContact={handleOpenContact}
          />
        )}

        {currentPage === 'founder' && (
          <FounderPage
            onNavigate={navigate}
            onOpenContact={handleOpenContact}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigate}
            prefillDivision={contactPrefill.division}
            prefillService={contactPrefill.service}
          />
        )}
      </main>

      {/* Global Corporate Footer */}
      <Footer onNavigate={navigate} />

      {/* Case Study Detailed Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onRequestSimilar={(projectName) =>
          handleOpenContact('digital-technology', `Project similar to ${projectName}`)
        }
      />

      {/* Service Details Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequest={(serviceName) =>
          handleOpenContact(undefined, serviceName)
        }
      />

      {/* Floating Quick Action Widget for Mobile & Desktop */}
      <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=Hello%20Omegalinks%20Digital%20Technology,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 sm:px-4 sm:py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2 hover:scale-105 transition-all"
          title="Chat directly on WhatsApp"
          id="floating-whatsapp-btn"
        >
          <PhoneCall className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>

        <button
          onClick={() => handleOpenContact()}
          className="p-3 sm:px-5 sm:py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] flex items-center gap-2 hover:scale-105 transition-all"
          id="floating-start-project-btn"
        >
          <Sparkles className="w-4 h-4 text-cyan-200" />
          <span className="hidden sm:inline">Start a Project</span>
        </button>
      </aside>
    </div>
  );
}
