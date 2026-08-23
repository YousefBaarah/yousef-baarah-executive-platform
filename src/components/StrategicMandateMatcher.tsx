import React, { useState } from 'react';
import { STRATEGIC_MANDATES } from '../data/enhancementData';
import { useLanguage } from '../context/LanguageContext';
import {
  Landmark,
  Tv,
  ShieldAlert,
  Sparkles,
  Building2,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Users,
  Compass,
  FileCheck2,
  Mail,
} from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

interface StrategicMandateMatcherProps {
  onOpenCaseStudy?: (caseId: string) => void;
  onOpenBriefingGenerator?: (mandateId: string) => void;
}

export const StrategicMandateMatcher: React.FC<StrategicMandateMatcherProps> = ({
  onOpenCaseStudy,
  onOpenBriefingGenerator,
}) => {
  const { isArabic, t } = useLanguage();
  const [selectedMandateId, setSelectedMandateId] = useState<string>(STRATEGIC_MANDATES[0].id);

  const activeMandate =
    STRATEGIC_MANDATES.find((m) => m.id === selectedMandateId) || STRATEGIC_MANDATES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark':
        return <Landmark className="w-5 h-5" />;
      case 'Tv':
        return <Tv className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Building2':
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="alignment-matcher"
      className="py-20 bg-white border-y border-[#0D2B4E]/10"
      aria-labelledby="matcher-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8964A]/10 border border-[#B8964A]/25 text-[#B8964A] text-xs uppercase tracking-widest font-bold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>
              {t('Institutional Alignment Engine', 'محرك المواءمة الاستراتيجية المؤسسية')}
            </span>
          </div>
          <h2
            id="matcher-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#0D2B4E] leading-tight mb-4"
          >
            {t(
              'Select your immediate organizational priority.',
              'حدد الأولوية الاستراتيجية الحالية لمؤسستكم.'
            )}
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] font-light">
            {t(
              'Align your board-level or commercial objectives with verified regional precedents, execution blueprints, and stakeholder diplomacy.',
              'طابق أهداف مجلس الإدارة أو التطلعات التجارية مع سوابق تنفيذية مثبتة، وخرائط طريق عملية، وشبكات علاقات موثوقة.'
            )}
          </p>
        </div>

        {/* Priority Selector Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
          {STRATEGIC_MANDATES.map((mandate) => {
            const isSelected = selectedMandateId === mandate.id;
            return (
              <button
                key={mandate.id}
                id={`mandate-tab-${mandate.id}`}
                onClick={() => setSelectedMandateId(mandate.id)}
                className={`p-4 rounded-xl text-left rtl:text-right border transition-all duration-200 flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'bg-[#0D2B4E] text-[#E6D2A8] border-[#0D2B4E] shadow-lg ring-2 ring-[#B8964A]/40 -translate-y-1'
                    : 'bg-[#F6F3ED] text-[#0D2B4E] border-[#0D2B4E]/10 hover:bg-[#EAE4D7] hover:border-[#B8964A]/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`p-2 rounded-lg ${
                      isSelected ? 'bg-[#B8964A]/20 text-[#B8964A]' : 'bg-white text-[#0D2B4E]'
                    }`}
                  >
                    {getIcon(mandate.iconName)}
                  </div>
                  <span
                    className={`text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded ${
                      isSelected ? 'bg-white/10 text-white/80' : 'bg-[#0D2B4E]/5 text-[#4B5563]'
                    }`}
                  >
                    {mandate.relevanceScore.split('/')[0].trim()}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-base font-medium leading-snug">
                    {isArabic ? mandate.titleAr : mandate.title}
                  </h3>
                  <p
                    className={`text-[11px] mt-1 line-clamp-2 ${
                      isSelected ? 'text-white/70' : 'text-[#4B5563]'
                    }`}
                  >
                    {isArabic ? mandate.subtitleAr : mandate.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Customized Alignment Dossier Card */}
        <div
          id="active-mandate-dossier"
          className="bg-gradient-to-br from-[#0D2B4E] via-[#0A2540] to-[#060F1A] text-white rounded-2xl p-6 sm:p-10 border border-[#B8964A]/30 shadow-2xl relative overflow-hidden space-y-8"
        >
          {/* Subtle Background Pattern */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(184,150,74,0.15),transparent_60%)] pointer-events-none"
            aria-hidden="true"
          />

          {/* Dossier Header */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E6D2A8] mb-2">
                <span className="px-2.5 py-0.5 rounded bg-[#B8964A]/20 border border-[#B8964A]/30">
                  {activeMandate.targetSector}
                </span>
                <span>•</span>
                <span>{activeMandate.relevanceScore}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium leading-tight text-white">
                {isArabic ? activeMandate.titleAr : activeMandate.title}
              </h3>
              <p className="text-sm sm:text-base text-white/80 mt-2 font-light max-w-3xl">
                {activeMandate.tagline}
              </p>
            </div>

            {/* Direct Connect Action */}
            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${PROFILE_INFO.email}?subject=${encodeURIComponent(
                  `Mandate Alignment: ${activeMandate.title}`
                )}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#B8964A] text-[#060F1A] font-bold text-xs uppercase tracking-widest hover:bg-[#C9A66B] transition-all shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>{t('Brief on This Mandate', 'طلب إحاطة تنفيذية')}</span>
              </a>
            </div>
          </div>

          {/* Core Content Grid: Verified Precedent + 3-Phase Execution Roadmap */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Verified Historical Precedent */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-5 rounded-xl bg-white/[0.07] border border-white/15 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E6D2A8]">
                  <TrendingUp className="w-4 h-4 text-[#B8964A]" />
                  <span>{t('Verified Track Record', 'سوابق الإنجاز الموثقة')}</span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs uppercase text-white/60 tracking-wider">
                    {activeMandate.verifiedPrecedent.organization}
                  </div>
                  <div className="font-serif text-2xl font-medium text-[#E6D2A8]">
                    {activeMandate.verifiedPrecedent.metric}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  {isArabic
                    ? activeMandate.verifiedPrecedent.summaryAr
                    : activeMandate.verifiedPrecedent.summary}
                </p>

                <div className="pt-2 border-t border-white/10 space-y-2">
                  {onOpenBriefingGenerator && (
                    <button
                      onClick={() => onOpenBriefingGenerator(activeMandate.id)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#B8964A] text-[#060F1A] hover:bg-[#C9A66B] rounded text-xs font-bold uppercase tracking-wider transition-colors w-full shadow-xs"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{t('Generate Board Briefing Dossier', 'توليد ملف موجز لمجلس الإدارة')}</span>
                    </button>
                  )}

                  {onOpenCaseStudy && (
                    <button
                      onClick={() => onOpenCaseStudy(activeMandate.recommendedCaseId)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E6D2A8] hover:text-white transition-colors w-full"
                    >
                      <span>{t('Open Full Case Blueprint', 'عرض المخطط الاستراتيجي الكامل')}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </button>
                  )}
                </div>
              </div>

              {/* Stakeholder Involvement */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/70">
                  <Users className="w-3.5 h-3.5 text-[#B8964A]" />
                  <span>{t('Institutional Corridors', 'الجهات المعنية والتنظيمية')}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeMandate.keyStakeholders.map((sh, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2.5 py-1 rounded bg-white/10 border border-white/10 text-white/90 font-light"
                    >
                      {sh}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: 3-Phase Execution Roadmap */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E6D2A8] mb-2">
                <FileCheck2 className="w-4 h-4 text-[#B8964A]" />
                <span>{t('Strategic Execution Roadmap', 'خارطة طريق التنفيذ الاستراتيجي')}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activeMandate.executionRoadmap.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white/[0.05] border border-white/10 hover:border-[#B8964A]/40 transition-colors flex flex-col justify-between gap-3"
                  >
                    <div>
                      <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-[#B8964A]/20 text-[#E6D2A8] mb-2">
                        {step.phase}
                      </span>
                      <h4 className="text-sm sm:text-base font-serif font-medium text-white leading-snug">
                        {isArabic && (step as any).titleAr ? (step as any).titleAr : step.title}
                      </h4>
                    </div>

                    <p className="text-xs text-white/75 leading-relaxed font-light">
                      {step.description}
                    </p>

                    <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-[#B8964A]">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{t('Actionable Milestone', 'معلم تنفيذي محدد')}</span>
                    </div>
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
