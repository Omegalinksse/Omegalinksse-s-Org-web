import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  Sparkles,
  MapPin,
  Clock,
  ExternalLink,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';
import { COMPANY_INFO, DIVISIONS } from '../data/companyData';
import { DivisionType } from '../types';

interface ContactSectionProps {
  prefillDivision?: string;
  prefillService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefillDivision,
  prefillService,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    division: 'digital-technology',
    service: '',
    budget: 'Flexible / To Be Discussed',
    timeline: 'Standard (2-6 weeks)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefillDivision) {
      setFormData((prev) => ({
        ...prev,
        division: prefillDivision,
        service: prefillService || prev.service,
      }));
    } else if (prefillService) {
      setFormData((prev) => ({
        ...prev,
        service: prefillService,
      }));
    }
  }, [prefillDivision, prefillService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Omegalinks Digital Technology!\n\n` +
      `*Name:* ${formData.fullName || 'Client'}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Division:* ${formData.division}\n` +
      `*Service / Project:* ${formData.service || 'General Inquiry'}\n` +
      `*Timeline:* ${formData.timeline}\n` +
      `*Message:* ${formData.message || 'I would like to discuss a project or training program.'}`
    );
    return `https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${text}`;
  };

  return (
    <section id="contact" className="relative py-20 bg-slate-50 dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
            START YOUR DIGITAL JOURNEY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-600 dark:from-blue-400 dark:via-sky-300 dark:to-cyan-400">
              WITH OMEGALINKS
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Whether you need custom software, corporate branding, professional computer training, or strategic technology consulting, our team is ready to deliver.
          </p>
        </div>

        {/* Contact Info Grid + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-xl space-y-6 backdrop-blur-sm">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Direct Communication
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Reach our team directly for expedited responses regarding active project development, corporate training cohorts, or institutional partnerships.
              </p>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-tech text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Phone & WhatsApp
                  </div>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-300 transition-colors"
                  >
                    {COMPANY_INFO.contact.phoneFormatted}
                  </a>
                  <div className="text-[11px] text-blue-600 dark:text-blue-400 mt-0.5 font-medium">
                    Available for direct calls & WhatsApp inquiries
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-tech text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Official Email
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.contact.primaryEmail}`}
                    className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-300 transition-colors break-all"
                  >
                    {COMPANY_INFO.contact.primaryEmail}
                  </a>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    <a
                      href={`mailto:${COMPANY_INFO.contact.alternateEmail}`}
                      className="hover:text-blue-600 dark:hover:text-cyan-300 transition-colors break-all"
                    >
                      Alt: {COMPANY_INFO.contact.alternateEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location & Coverage */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-tech text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Operational Base
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {COMPANY_INFO.contact.location}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {COMPANY_INFO.contact.remoteGlobal}
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Quick Button */}
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
                id="contact-whatsapp-instant"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly On WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Project Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-2xl text-left backdrop-blur-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border-2 border-blue-300 dark:border-blue-500/50 mx-auto flex items-center justify-center animate-in zoom-in-75 duration-300">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-slate-900 dark:text-white">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-blue-600 dark:text-blue-300">{formData.fullName}</strong>. Your inquiry regarding <strong className="text-slate-900 dark:text-white">{formData.service || formData.division}</strong> has been registered. An Omegalinks representative or Anehi Godwin Ohinoyi will review your specifications and contact you shortly.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 text-xs font-bold uppercase tracking-wider hover:bg-slate-200 dark:hover:bg-white/10 shadow-sm"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                    >
                      <span>Also Send Via WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3 mb-2">
                    <div>
                      <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                        Project & Training Inquiry
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Fill out the details below for a structured consultation and quote.
                      </p>
                    </div>
                    <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400/80" />
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-tech text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. John Doe / Organization Name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-tech text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. contact@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone & Division Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-tech text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +234 801 234 5678"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-tech text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                        Interested Division *
                      </label>
                      <select
                        name="division"
                        value={formData.division}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none"
                      >
                        <option value="digital-technology" className="bg-white dark:bg-[#020617] text-slate-900 dark:text-white">01. Digital Technology (Software & Web)</option>
                        <option value="creative-media" className="bg-white dark:bg-[#020617] text-slate-900 dark:text-white">02. Creative Digital Media (Design & Video)</option>
                        <option value="skills-training" className="bg-white dark:bg-[#020617] text-slate-900 dark:text-white">03. Digital Skills & Training (Academy)</option>
                        <option value="growth-solutions" className="bg-white dark:bg-[#020617] text-slate-900 dark:text-white">04. Digital Growth & Solutions (Strategy)</option>
                      </select>
                    </div>
                  </div>

                  {/* Specific Service / Goal */}
                  <div>
                    <label className="block text-[11px] font-tech text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Specific Service or Course Interest
                    </label>
                    <input
                      type="text"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      placeholder="e.g. Web Application, CorelDRAW Design, Python Programming, Office Suite..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  {/* Timeline & Budget range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-tech text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                        Target Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none"
                      >
                        <option value="Urgent (1-2 weeks)" className="bg-white dark:bg-[#020617] text-slate-900 dark:text-white">Urgent (1 - 2 weeks)</option>
                        <option value="Standard (2-6 weeks)" className="bg-white dark:bg-[#020617] text-slate-900 dark:text-white">Standard (2 - 6 weeks)</option>
                        <option value="Long Term (2+ months)" className="bg-white dark:bg-[#020617] text-slate-900 dark:text-white">Long Term (2+ months)</option>
                        <option value="Immediate Enrollment" className="bg-white dark:bg-[#020617] text-slate-900 dark:text-white">Immediate Training Cohort</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-tech text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                        Budget Expectation
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none"
                      >
                        <option value="Flexible / To Be Discussed" className="bg-white dark:bg-[#020617] text-slate-900 dark:text-white">Flexible / To Be Discussed</option>
                        <option value="Starter / Student Training" className="bg-white dark:bg-[#020617] text-slate-900 dark:text-white">Starter / Student Training</option>
                        <option value="Business / SME Solution" className="bg-white dark:bg-[#020617] text-slate-900 dark:text-white">Business / SME Solution</option>
                        <option value="Enterprise / Institutional" className="bg-white dark:bg-[#020617] text-slate-900 dark:text-white">Enterprise / Institutional</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Project Brief */}
                  <div>
                    <label className="block text-[11px] font-tech text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Project Details or Objectives *
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your objectives, requirements, target audience, or current operational challenge..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                      id="contact-form-submit-btn"
                    >
                      {loading ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>DISPATCH INQUIRY TO OMEGALINKS</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
