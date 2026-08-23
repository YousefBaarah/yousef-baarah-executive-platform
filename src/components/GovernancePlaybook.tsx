import React, { useState } from 'react';
import { GOVERNANCE_PLAYBOOK_PHASES } from '../data/enhancementData';
import { useLanguage } from '../context/LanguageContext';
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Layers,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const GovernancePlaybook: React.FC = () => {
  const { isArabic, t } = useLanguage();
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);

  const activePhase = GOVERNANCE_PLAYBOOK_PHASES[activePhaseIndex] || GOVERNANCE_PLAYBOOK_PHASES[0];

  return (
    <section
      id="playbook"
      className="py-20 bg-[#F6F3ED] text-[#0D2B4E] border-b border-[#0D2B4E]/10"
      aria-labelledby="playbook-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-14 items-end">
          <div className="lg:col-span-6">
            <div className="text-xs uppercase tracking-widest text-[#B8964A] font-bold flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#B8964A]" />
              <span>05 / {t('Operating Framework', 'منهجية العمل والتحول')}</span>
            </div>
            <h2
              id="playbook-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#0D2B4E] leading-tight"
            >
              {t('The 4-Stage Strategic Governance Playbook.', 'منهجية المراحل الأربع للحوكمة الاستراتيجية وإدارة الأزمات.')}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-light">
              {t(
                'How complex corporate transformations, prime-time broadcasting surges, and sovereign initiatives are architected from initial risk audit to board-level reporting.',
                'كيفية قيادة التحولات المؤسسية الكبرى، وتصدر المشهد الإعلامي، والمبادرات السيادية من مرحلة تقييم المخاطر الأولية حتى تقديم التقارير لمجلس الإدارة.'
              )}
            </p>
          </div>
        </div>

        {/* Phase Navigator Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {GOVERNANCE_PLAYBOOK_PHASES.map((phase, idx) => {
            const isActive = activePhaseIndex === idx;
            return (
              <button
                key={phase.number}
                id={`playbook-phase-tab-${idx}`}
                onClick={() => setActivePhaseIndex(idx)}
                className={`p-4 rounded-xl border text-left rtl:text-right transition-all duration-200 flex flex-col justify-between gap-2 ${
                  isActive
                    ? 'bg-[#0D2B4E] text-[#E6D2A8] border-[#0D2B4E] shadow-lg ring-2 ring-[#B8964A]/30'
                    : 'bg-white text-[#0D2B4E] border-[#0D2B4E]/10 hover:bg-[#EAE4D7]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B8964A]">
                    {t('Phase', 'المرحلة')} {phase.number}
                  </span>
                  {isActive && <Sparkles className="w-3.5 h-3.5 text-[#B8964A]" />}
                </div>

                <div className="font-serif text-sm sm:text-base font-medium leading-snug">
                  {isArabic ? phase.titleAr : phase.title}
                </div>

                <div className={`text-[11px] font-medium ${isActive ? 'text-white/70' : 'text-[#4B5563]'}`}>
                  {isArabic ? phase.focusAr : phase.focus}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Blueprint Stage */}
        <div className="bg-white border border-[#0D2B4E]/15 rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#0D2B4E]/10 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B8964A] mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>
                  {t('Stage Execution Blueprint', 'المخطط التنفيذي للمرحلة')} — {t('Phase', 'المرحلة')} {activePhase.number}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#0D2B4E]">
                {isArabic ? activePhase.titleAr : activePhase.title}
              </h3>
            </div>

            <div className="px-4 py-2 rounded-lg bg-[#F6F3ED] border border-[#0D2B4E]/10 text-xs font-semibold text-[#0D2B4E]">
              <span className="text-[#B8964A] uppercase block text-[10px] tracking-wider">{t('Core Strategic Mandate', 'الهدف الاستراتيجي الجوهري')}</span>
              <span>{isArabic ? activePhase.focusAr : activePhase.focus}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F6F3ED]/80 border border-[#0D2B4E]/10 text-sm text-[#4B5563] font-light leading-relaxed mb-8">
            <strong className="text-[#0D2B4E] font-medium">{t('Objective:', 'الغاية الاستراتيجية:')} </strong>
            {activePhase.objective}
          </div>

          {/* Grid: Tactics & Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tactics */}
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-widest font-bold text-[#0D2B4E] flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#B8964A]" />
                <span>{t('Strategic Tactics & Operational Rhythms', 'التكتيكات الاستراتيجية وآليات التنفيذ')}</span>
              </div>
              <div className="space-y-2.5">
                {activePhase.tactics.map((tac, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F6F3ED] border border-[#0D2B4E]/5 text-xs sm:text-sm text-[#4B5563]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#B8964A] shrink-0 mt-0.5" />
                    <span>{tac}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-widest font-bold text-[#0D2B4E] flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#B8964A]" />
                <span>{t('Executive Deliverables & Board Assets', 'المخرجات التنفيذية ووثائق مجلس الإدارة')}</span>
              </div>
              <div className="space-y-2.5">
                {activePhase.deliverables.map((del, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0D2B4E]/5 border border-[#0D2B4E]/10 text-xs sm:text-sm text-[#0D2B4E] font-medium"
                  >
                    <ArrowRight className="w-4 h-4 text-[#B8964A] shrink-0 mt-0.5 rtl:rotate-180" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
