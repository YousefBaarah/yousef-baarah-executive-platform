import React from 'react';
import { X, CheckCircle2, Building2, TrendingUp, Users } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  if (!caseStudy) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#F6F3ED] text-[#0D2B4E] rounded-xl shadow-2xl border border-[#0D2B4E]/15 max-h-[90vh] overflow-y-auto p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#0D2B4E]/5 hover:bg-[#0D2B4E]/10 text-[#0D2B4E] transition-colors"
          aria-label="Close case study details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Timeframe */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#B8964A] bg-[#B8964A]/10 px-2.5 py-1 rounded">
            {caseStudy.category}
          </span>
          <span className="text-xs text-[#4B5563]">•</span>
          <span className="text-xs uppercase tracking-wider text-[#4B5563]">
            {caseStudy.organization}
          </span>
          <span className="text-xs text-[#4B5563]">•</span>
          <span className="text-xs text-[#4B5563] font-medium">{caseStudy.timeframe}</span>
        </div>

        {/* Title */}
        <h3 id="modal-case-title" className="text-2xl sm:text-3xl font-serif font-medium leading-tight mb-4 text-[#0D2B4E]">
          {caseStudy.title}
        </h3>

        {/* Lead Result Banner */}
        <div className="p-4 rounded-lg bg-[#0D2B4E] text-white flex items-start gap-3 mb-6 shadow-sm">
          <TrendingUp className="w-5 h-5 text-[#B8964A] shrink-0 mt-0.5" />
          <div className="text-sm font-medium leading-snug">
            <span className="text-[#E6D2A8] font-bold uppercase tracking-wider text-xs block mb-0.5">
              Strategic Outcome
            </span>
            {caseStudy.leadResult}
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {caseStudy.metrics.map((m, idx) => (
            <div key={idx} className="bg-white border border-[#0D2B4E]/10 p-3 rounded text-center">
              <div className="font-serif text-xl sm:text-2xl font-medium text-[#0D2B4E]">
                {m.value}
              </div>
              <div className="text-[10px] uppercase tracking-wider text-[#4B5563] mt-0.5">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* The Challenge */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-widest font-bold text-[#0D2B4E] mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#B8964A]" />
            <span>The Strategic Challenge</span>
          </h4>
          <p className="text-sm text-[#4B5563] leading-relaxed bg-white border border-[#0D2B4E]/10 p-4 rounded-lg">
            {caseStudy.challenge}
          </p>
        </div>

        {/* Strategic Approach */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-widest font-bold text-[#0D2B4E] mb-3 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#B8964A]" />
            <span>Execution &amp; Strategic Roadmap</span>
          </h4>
          <div className="space-y-2.5">
            {caseStudy.strategicApproach.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-[#4B5563] bg-white border border-[#0D2B4E]/5 p-3 rounded">
                <CheckCircle2 className="w-4 h-4 text-[#B8964A] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Stakeholders */}
        <div className="pt-4 border-t border-[#0D2B4E]/10">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#0D2B4E] mb-2">
            <Users className="w-3.5 h-3.5 text-[#B8964A]" />
            <span>Institutional Stakeholders &amp; Partners</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {caseStudy.stakeholders.map((s, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-white border border-[#0D2B4E]/15 text-[#0D2B4E] font-medium"
              >
                <Building2 className="w-3 h-3 text-[#B8964A]" />
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="mt-8 pt-4 border-t border-[#0D2B4E]/10 flex justify-between items-center">
          <span className="text-xs text-[#4B5563] italic">
            Yousef G. Baarah Executive Case Archive
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0D2B4E] text-white text-xs uppercase tracking-wider font-semibold rounded hover:bg-[#0A2540] transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
