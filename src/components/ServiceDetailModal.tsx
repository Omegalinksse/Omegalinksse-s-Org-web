import React from 'react';
import { ServiceItem } from '../types';
import {
  X,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequest: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequest,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#020617]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#020617] border border-white/10 p-6 sm:p-8 text-left shadow-2xl backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
          aria-label="Close service details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest">
            Specialized Offering
          </span>
          {service.popular && (
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-blue-400" /> High Demand
            </span>
          )}
        </div>

        <h2 className="font-display font-black text-2xl sm:text-3xl text-white mb-3">
          {service.name}
        </h2>

        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Deliverables Checklist */}
        <div className="mb-6 p-5 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="font-tech text-xs font-bold text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Standard Deliverables & Scope
          </h3>
          <div className="space-y-2">
            {service.deliverables.map((deliv, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Frameworks */}
        <div className="mb-8">
          <h4 className="font-tech text-[11px] text-slate-400 uppercase tracking-wider mb-2">
            Core Technologies, Frameworks & Tooling:
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.tools.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action CTA */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-bold uppercase tracking-wider"
          >
            Back to Services
          </button>

          <button
            onClick={() => {
              onClose();
              onRequest(service.name);
            }}
            className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2"
          >
            <span>Request This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
