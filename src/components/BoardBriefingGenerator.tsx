import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STRATEGIC_MANDATES } from '../data/enhancementData';
import { PROFILE_INFO } from '../data/profileData';
import {
  FileText,
  Printer,
  Download,
  CheckCircle2,
  Sparkles,
  Building2,
  Globe,
  Mail,
  Phone,
  ShieldCheck,
  Award,
  ChevronRight,
  X,
  Share2,
} from 'lucide-react';

interface BoardBriefingGeneratorProps {
  isOpen: boolean;
  onClose: () => void;
  initialMandateId?: string;
}

export const BoardBriefingGenerator: React.FC<BoardBriefingGeneratorProps> = ({
  isOpen,
  onClose,
  initialMandateId,
}) => {
  const { isArabic, t } = useLanguage();
  const [selectedMandateId, setSelectedMandateId] = useState<string>(
    initialMandateId || STRATEGIC_MANDATES[0].id
  );
  const [customStakeholder, setCustomStakeholder] = useState<string>('');
  const [customNotes, setCustomNotes] = useState<string>('');
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const currentMandate =
    STRATEGIC_MANDATES.find((m) => m.id === selectedMandateId) ||
    STRATEGIC_MANDATES[0];

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const summary = `EXECUTIVE BOARD BRIEFING DOSSIER
Candidate / Advisor: Yousef G. Baarah
Mandate Focus: ${currentMandate.title}
Target Sector: ${currentMandate.targetSector}
Verified Precedent: ${currentMandate.verifiedPrecedent.organization} (${currentMandate.verifiedPrecedent.metric})
Summary: ${currentMandate.verifiedPrecedent.summary}
Prepared For: ${customStakeholder || 'Executive Board of Directors'}
Contact: ${PROFILE_INFO.email} | ${PROFILE_INFO.phone}
Portfolio URL: ${window.location.origin}`;

    navigator.clipboard.writeText(summary).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="briefing-generator-title"
    >
      <div className="bg-[#FBF9F5] border border-[#0D2B4E]/20 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="bg-[#0D2B4E] text-white p-4 sm:p-6 flex items-center justify-between border-b border-[#B8964A]/30 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#B8964A] text-[#060F1A]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#E6D2A8] font-bold">
                {t('Board of Directors & C-Suite Tool', 'أداة مجالس الإدارة والقيادات التنفيذية')}
              </span>
              <h3 id="briefing-generator-title" className="text-lg sm:text-xl font-serif font-medium">
                {t('Executive Board Briefing Generator', 'مُولّد التقارير التنفيذية لمجالس الإدارة')}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t('Print / Save PDF', 'طباعة / حفظ PDF')}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Two columns on desktop */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Controls Bar: Select Mandate */}
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#0D2B4E]/15 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0D2B4E]">
                {t('Select Strategic Alignment Mandate', 'اختر المحور الاستراتيجي المستهدف')}:
              </label>
              <span className="text-xs text-[#B8964A] font-semibold">
                {t('Live Tailored Dossier', 'تقرير مخصص في الوقت الفعلي')}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {STRATEGIC_MANDATES.map((mandate) => (
                <button
                  key={mandate.id}
                  onClick={() => setSelectedMandateId(mandate.id)}
                  className={`p-3 rounded-lg text-left rtl:text-right text-xs transition-all border flex flex-col justify-between gap-1.5 ${
                    selectedMandateId === mandate.id
                      ? 'bg-[#0D2B4E] text-white border-[#B8964A] shadow-xs'
                      : 'bg-[#F6F3ED] text-[#0D2B4E] border-[#0D2B4E]/10 hover:bg-[#EFEAE0]'
                  }`}
                >
                  <span className="font-bold line-clamp-1">
                    {isArabic ? mandate.titleAr : mandate.title}
                  </span>
                  <span
                    className={`text-[10px] line-clamp-1 ${
                      selectedMandateId === mandate.id
                        ? 'text-[#E6D2A8]'
                        : 'text-[#4B5563]'
                    }`}
                  >
                    {mandate.verifiedPrecedent.organization} · {mandate.verifiedPrecedent.metric}
                  </span>
                </button>
              ))}
            </div>

            {/* Optional Custom Target Header Input */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#0D2B4E]/10">
              <div>
                <label className="block text-[11px] font-semibold text-[#4B5563] mb-1">
                  {t('Prepared for Institution / Board (Optional)', 'مُعد لصالح المؤسسة / المجلس (اختياري)')}:
                </label>
                <input
                  type="text"
                  value={customStakeholder}
                  onChange={(e) => setCustomStakeholder(e.target.value)}
                  placeholder={t('e.g., Sovereign Wealth Fund / RMG Board', 'مثال: صندوق الاستثمار السيادي / مجلس الإدارة')}
                  className="w-full px-3 py-1.5 bg-[#F6F3ED] border border-[#0D2B4E]/15 rounded text-xs text-[#0D2B4E] focus:outline-none focus:ring-1 focus:ring-[#B8964A]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#4B5563] mb-1">
                  {t('Board Meeting Agenda / Focus (Optional)', 'جدول أعمال الجلسة / محور التركيز (اختياري)')}:
                </label>
                <input
                  type="text"
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder={t('e.g., Q3 Strategic Transformation & Public Affairs', 'مثال: التحول الاستراتيجي والشؤون العامة للربع الثالث')}
                  className="w-full px-3 py-1.5 bg-[#F6F3ED] border border-[#0D2B4E]/15 rounded text-xs text-[#0D2B4E] focus:outline-none focus:ring-1 focus:ring-[#B8964A]"
                />
              </div>
            </div>
          </div>

          {/* Printable 1-Page Dossier Preview Sheet */}
          <div
            id="printable-dossier"
            className="bg-white p-6 sm:p-10 rounded-xl border border-[#0D2B4E]/20 shadow-lg space-y-6 print:m-0 print:p-8 print:border-none print:shadow-none"
          >
            {/* Dossier Top Banner */}
            <div className="border-b-2 border-[#B8964A] pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
              <div>
                <div className="text-[10px] uppercase font-mono tracking-widest text-[#B8964A] font-bold">
                  {t('Executive Dossier & Strategic Alignment Brief', 'الملف التنفيذي ومذكرة التوافق الاستراتيجي')}
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D2B4E]">
                  {isArabic ? 'يوسف غسان بعارة' : 'Yousef G. Baarah'}
                </h2>
                <div className="text-xs font-semibold text-[#4B5563] mt-0.5">
                  {isArabic
                    ? 'قيادي تنفيذي في الاتصال الاستراتيجي، الهوية المؤسسية وإدارة السمعة'
                    : PROFILE_INFO.title}
                </div>
              </div>

              <div className="text-right rtl:text-left text-xs text-[#4B5563] font-mono space-y-0.5">
                <div>
                  <span className="font-bold text-[#0D2B4E]">
                    {t('Target Organization', 'الجهة المستهدفة')}:
                  </span>{' '}
                  {customStakeholder || t('Executive Board / Selection Committee', 'مجلس الإدارة / لجنة الاختيار')}
                </div>
                <div>
                  <span className="font-bold text-[#0D2B4E]">
                    {t('Date', 'التاريخ')}:
                  </span>{' '}
                  {new Date().toLocaleDateString(isArabic ? 'ar-JO' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                {customNotes && (
                  <div className="text-[#B8964A] font-semibold">
                    {customNotes}
                  </div>
                )}
              </div>
            </div>

            {/* Targeted Mandate Spotlight */}
            <div className="p-4 rounded-xl bg-[#0D2B4E] text-white space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#E6D2A8] font-mono font-bold uppercase tracking-wider">
                  {t('Selected Mandate Focus', 'محور المواءمة المختار')}
                </span>
                <span className="px-2 py-0.5 rounded bg-[#B8964A]/30 text-[#E6D2A8] font-mono text-[10px]">
                  {currentMandate.relevanceScore}
                </span>
              </div>
              <h3 className="text-lg font-serif font-medium text-white">
                {isArabic ? currentMandate.titleAr : currentMandate.title}
              </h3>
              <p className="text-xs text-white/80 font-light leading-relaxed">
                {isArabic ? currentMandate.subtitleAr : currentMandate.subtitle}
              </p>
            </div>

            {/* Verified Precedent & Measurable ROI */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-4 p-4 rounded-xl bg-[#F6F3ED] border border-[#0D2B4E]/10 flex flex-col justify-center text-center">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#4B5563]">
                  {t('Verified Track Record', 'السجل المؤسسي الموثق')}
                </span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-[#B8964A] my-1">
                  {currentMandate.verifiedPrecedent.metric}
                </span>
                <span className="text-xs font-semibold text-[#0D2B4E]">
                  {currentMandate.verifiedPrecedent.organization}
                </span>
              </div>

              <div className="md:col-span-8 p-4 rounded-xl bg-white border border-[#0D2B4E]/15 flex flex-col justify-center">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#B8964A] font-bold mb-1">
                  {t('Executive Precedent Summary', 'خلاصة الإنجاز التنفيذي')}
                </span>
                <p className="text-xs text-[#0D2B4E] leading-relaxed font-light">
                  {isArabic
                    ? currentMandate.verifiedPrecedent.summaryAr
                    : currentMandate.verifiedPrecedent.summary}
                </p>
              </div>
            </div>

            {/* Roadmap Deliverables */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D2B4E] border-b border-[#0D2B4E]/10 pb-1">
                {t('Structured 3-Phase Execution Trajectory', 'خارطة التنفيذ ثلاثية المراحل')}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {currentMandate.executionRoadmap.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#F6F3ED] border border-[#0D2B4E]/10 text-xs space-y-1"
                  >
                    <div className="flex items-center gap-1 text-[10px] font-mono text-[#B8964A] font-bold">
                      <span>{item.phase}</span>
                    </div>
                    <div className="font-semibold text-[#0D2B4E]">
                      {isArabic && item.titleAr ? item.titleAr : item.title}
                    </div>
                    <p className="text-[11px] text-[#4B5563] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Governance & Contact Strip */}
            <div className="pt-4 border-t border-[#0D2B4E]/15 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#4B5563]">
              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-1 text-[#0D2B4E] font-medium">
                  <Mail className="w-3.5 h-3.5 text-[#B8964A]" />
                  {PROFILE_INFO.email}
                </span>
                <span className="inline-flex items-center gap-1 text-[#0D2B4E] font-medium">
                  <Phone className="w-3.5 h-3.5 text-[#B8964A]" />
                  {PROFILE_INFO.phone}
                </span>
                <span className="inline-flex items-center gap-1 text-[#0D2B4E] font-medium">
                  <Globe className="w-3.5 h-3.5 text-[#B8964A]" />
                  {PROFILE_INFO.location}
                </span>
              </div>

              <div className="text-[10px] font-mono text-[#4B5563]">
                {t('Confidential · C-Suite Governance', 'سري ومخصص لاجتماعات القيادة التنفيذية')}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#F6F3ED] p-4 sm:p-5 border-t border-[#0D2B4E]/15 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={handleCopyText}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#0D2B4E]/15 text-[#0D2B4E] rounded text-xs font-semibold hover:bg-gray-50 transition-colors shadow-xs"
          >
            <Share2 className="w-3.5 h-3.5 text-[#B8964A]" />
            <span>
              {isCopied
                ? t('Dossier Copied!', 'تم نسخ الملخص!')
                : t('Copy Executive Summary', 'نسخ الملخص التنفيذي')}
            </span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#4B5563] hover:text-[#0D2B4E] transition-colors"
            >
              {t('Close', 'إغلاق')}
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#0D2B4E] text-white rounded text-xs font-semibold hover:bg-[#0A2540] transition-colors shadow-md"
            >
              <Printer className="w-4 h-4 text-[#B8964A]" />
              <span>{t('Print / Export Dossier', 'طباعة / تصدير التقرير')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
