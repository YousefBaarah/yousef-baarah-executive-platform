import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/profileData';
import { CaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { CareerTimeline } from './CareerTimeline';
import {
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  Layers,
  History,
  Briefcase,
  Sparkles,
} from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'blueprints'>('timeline');
  const [activeModalCase, setActiveModalCase] = useState<CaseStudy | null>(null);

  const handleSelectCaseStudyFromTimeline = (caseId: string) => {
    const found = CASE_STUDIES.find((c) => c.id === caseId);
    if (found) {
      setActiveModalCase(found);
    }
  };

  return (
    <section
      id="work"
      className="py-24 bg-[#F6F3ED] text-[#0D2B4E] border-b border-[#0D2B4E]/10"
      aria-labelledby="work-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-10 items-end">
          <div className="lg:col-span-6">
            <div className="text-xs uppercase tracking-widest text-[#B8964A] font-bold flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#B8964A]" />
              <span>03 / Selected Work &amp; Career Leadership</span>
            </div>
            <h2
              id="work-title"
              className="text-4xl sm:text-5xl font-serif font-medium leading-[1.02] text-[#0D2B4E]"
            >
              Milestones &amp; strategic leadership in practice.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-light">
              Explore an interactive chronological journey of institutional leadership roles, national broadcasting campaigns, and high-value partnerships across MENA and the GCC.
            </p>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-[#0D2B4E]/10">
          <div className="inline-flex p-1.5 rounded-xl bg-white border border-[#0D2B4E]/10 shadow-inner">
            <button
              id="view-timeline-btn"
              onClick={() => setActiveTab('timeline')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === 'timeline'
                  ? 'bg-[#0D2B4E] text-[#E6D2A8] shadow-md'
                  : 'text-[#4B5563] hover:text-[#0D2B4E] hover:bg-[#F6F3ED]'
              }`}
            >
              <History className="w-4 h-4 text-[#B8964A]" />
              <span>Interactive Career Timeline</span>
              <span className="px-1.5 py-0.5 text-[10px] rounded bg-[#B8964A]/20 text-[#E6D2A8] font-mono">
                2011–2025
              </span>
            </button>

            <button
              id="view-blueprints-btn"
              onClick={() => setActiveTab('blueprints')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === 'blueprints'
                  ? 'bg-[#0D2B4E] text-[#E6D2A8] shadow-md'
                  : 'text-[#4B5563] hover:text-[#0D2B4E] hover:bg-[#F6F3ED]'
              }`}
            >
              <Briefcase className="w-4 h-4 text-[#B8964A]" />
              <span>Strategic Case Blueprints</span>
              <span className="px-1.5 py-0.5 text-[10px] rounded bg-[#0D2B4E]/10 text-[#0D2B4E] font-mono">
                4 Flagship
              </span>
            </button>
          </div>

          {/* Quick Context Stat */}
          <div className="hidden sm:flex items-center gap-3 text-xs text-[#4B5563] font-medium">
            <span className="inline-flex items-center gap-1 text-[#0D2B4E] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#B8964A]" />
              15+ Years Track Record
            </span>
            <span>•</span>
            <span>Multilateral, Media &amp; Sovereign Alliances</span>
          </div>
        </div>

        {/* View Content */}
        {activeTab === 'timeline' ? (
          <div className="transition-opacity duration-300">
            <CareerTimeline onSelectCaseStudy={handleSelectCaseStudyFromTimeline} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-300">
            {CASE_STUDIES.map((study, index) => (
              <article
                key={study.id}
                id={`case-study-${study.id}`}
                className="group relative bg-white border border-[#0D2B4E]/10 rounded-xl p-8 transition-all duration-300 hover:border-[#B8964A]/60 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Top Accent Strip */}
                <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-xl bg-gradient-to-r from-[#B8964A] to-transparent" />

                <div>
                  {/* Meta header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8964A] bg-[#B8964A]/10 px-2.5 py-1 rounded">
                      {study.category}
                    </span>
                    <span className="text-xs text-[#4B5563] font-mono">0{index + 1}</span>
                  </div>

                  {/* Case Title */}
                  <h3 className="font-serif text-3xl font-medium text-[#0D2B4E] leading-tight mb-2 group-hover:text-[#0D2B4E]">
                    {study.title}
                  </h3>

                  <div className="text-xs uppercase tracking-wider text-[#4B5563] font-medium mb-4">
                    {study.organization} • {study.timeframe}
                  </div>

                  {/* Brief description */}
                  <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {/* Highlight Strategic Points */}
                  <div className="space-y-2 mb-6 border-t border-[#0D2B4E]/5 pt-4">
                    {study.strategicApproach.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#4B5563]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8964A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Result Pill & Detail Trigger */}
                <div className="pt-4 border-t border-[#0D2B4E]/10 mt-auto">
                  <div className="p-3.5 rounded-lg bg-[#F6F3ED] border border-[#0D2B4E]/10 text-xs font-semibold text-[#0D2B4E] flex items-start gap-2 mb-4">
                    <TrendingUp className="w-4 h-4 text-[#B8964A] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#B8964A] block">
                        Measurable Result
                      </span>
                      <span>{study.leadResult}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalCase(study)}
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-bold text-[#0D2B4E] hover:text-[#B8964A] transition-colors"
                    >
                      <Layers className="w-3.5 h-3.5 text-[#B8964A]" />
                      <span>View Strategic Blueprint</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <span className="text-[10px] text-[#4B5563] uppercase tracking-wider">
                      {study.stakeholders.length} Institutional Partners
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={activeModalCase}
        onClose={() => setActiveModalCase(null)}
      />
    </section>
  );
};
