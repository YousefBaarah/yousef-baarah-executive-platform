import React, { useState } from 'react';
import {
  FileText,
  Download,
  Printer,
  Copy,
  Check,
  Award,
  GraduationCap,
  Briefcase,
  Layers,
  Sparkles,
  HardDrive,
} from 'lucide-react';
import {
  PROFILE_INFO,
  PROOF_METRICS,
  CAREER_HISTORY,
  EDUCATION,
  EXECUTIVE_EDUCATION,
  CERTIFICATIONS,
} from '../data/profileData';
import { useLanguage } from '../context/LanguageContext';
import { ExecutiveDriveExplorer } from './ExecutiveDriveExplorer';

export const DocumentsViewer: React.FC = () => {
  const { isArabic, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'onepage' | 'full' | 'drive'>('onepage');
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    let content = `YOUSEF G. BAARAH\n${PROFILE_INFO.title}\n${PROFILE_INFO.tagline}\nAmman, Jordan | ${PROFILE_INFO.email} | ${PROFILE_INFO.phone} | ${PROFILE_INFO.linkedin}\n\n`;
    content += `EXECUTIVE PROFILE:\n${PROFILE_INFO.summary}\n\nSELECTED IMPACT:\n`;
    PROOF_METRICS.forEach((m) => {
      content += `• ${m.prefix || ''}${m.value}${m.suffix || ''}: ${m.label} (${m.organization}) - ${m.detail}\n`;
    });
    content += `\nPROFESSIONAL EXPERIENCE:\n`;
    CAREER_HISTORY.forEach((role) => {
      content += `\n${role.company} | ${role.role}\n${role.period} | ${role.location}\n`;
      role.highlights.forEach((h) => {
        content += `• ${h}\n`;
      });
    });
    content += `\nEDUCATION & EXECUTIVE DEVELOPMENT:\n`;
    EDUCATION.forEach((e) => {
      content += `• ${e.degree} — ${e.institution} (${e.year})\n`;
    });
    EXECUTIVE_EDUCATION.forEach((e) => {
      content += `• ${e.degree} — ${e.institution} (${e.year})\n`;
    });
    content += `\nCERTIFICATIONS:\n`;
    CERTIFICATIONS.forEach((c) => {
      content += `• ${c.name} — ${c.issuer} (${c.year})\n`;
    });

    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id="documents"
      className="py-24 bg-[#F6F3ED] text-[#0D2B4E] border-b border-[#0D2B4E]/10"
      aria-labelledby="documents-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 items-end">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-widest text-[#B8964A] font-bold flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#B8964A]" />
              <span>06 / Documents</span>
            </div>
            <h2
              id="documents-title"
              className="text-4xl sm:text-5xl font-serif font-medium leading-[1.02] text-[#0D2B4E]"
            >
              Go deeper when useful.
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] mt-3 font-light leading-relaxed">
              A concise executive snapshot first, followed by the complete professional record and credential dossier.
            </p>
          </div>

          {/* Quick Action Controls */}
          <div className="lg:col-span-7 flex flex-wrap items-center justify-start lg:justify-end gap-3">
            <a
              href="/ai-review-dossier.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-[#B8964A]/15 to-[#B8964A]/5 border border-[#B8964A]/40 text-[#0D2B4E] rounded text-xs uppercase tracking-wider font-bold hover:bg-[#B8964A]/25 transition-all shadow-sm"
              title="Open standalone HTML package for Claude, Grok, ChatGPT, DeepSeek"
            >
              <Sparkles className="w-4 h-4 text-[#B8964A]" />
              <span>AI Review Dossier (HTML)</span>
            </a>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-[#0D2B4E]/15 text-[#0D2B4E] rounded text-xs uppercase tracking-wider font-semibold hover:bg-[#0D2B4E]/5 transition-colors shadow-sm"
              title="Copy formatted profile text"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#B8964A]" />
                  <span>Copy Profile Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-[#0D2B4E]/15 text-[#0D2B4E] rounded text-xs uppercase tracking-wider font-semibold hover:bg-[#0D2B4E]/5 transition-colors shadow-sm"
              title="Print document"
            >
              <Printer className="w-4 h-4 text-[#B8964A]" />
              <span>Print Dossier</span>
            </button>

            <a
              href={`mailto:${PROFILE_INFO.email}?subject=Executive%20Dossier%20Request%20-%20Yousef%20G.%20Baarah`}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0D2B4E] text-white rounded text-xs uppercase tracking-wider font-semibold hover:bg-[#0A2540] transition-colors shadow-sm"
            >
              <Download className="w-4 h-4 text-[#B8964A]" />
              <span>Request Verified PDF</span>
            </a>
          </div>
        </div>

        {/* Document Toggle Navigation Tabs */}
        <div className="flex flex-wrap border-b border-[#0D2B4E]/15 mb-8 gap-2">
          <button
            onClick={() => setActiveTab('onepage')}
            className={`pb-4 px-5 text-xs sm:text-sm uppercase tracking-wider font-bold transition-all relative flex items-center gap-2 ${
              activeTab === 'onepage'
                ? 'text-[#0D2B4E]'
                : 'text-[#4B5563] hover:text-[#0D2B4E]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#B8964A]" />
            <span>{t('One-Page Executive Profile', 'الملخص التنفيذي (صفحة واحدة)')}</span>
            {activeTab === 'onepage' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8964A]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('full')}
            className={`pb-4 px-5 text-xs sm:text-sm uppercase tracking-wider font-bold transition-all relative flex items-center gap-2 ${
              activeTab === 'full'
                ? 'text-[#0D2B4E]'
                : 'text-[#4B5563] hover:text-[#0D2B4E]'
            }`}
          >
            <Layers className="w-4 h-4 text-[#B8964A]" />
            <span>{t('Full Executive Resume', 'السيرة الذاتية المفصلة')}</span>
            {activeTab === 'full' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8964A]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('drive')}
            className={`pb-4 px-5 text-xs sm:text-sm uppercase tracking-wider font-bold transition-all relative flex items-center gap-2 ${
              activeTab === 'drive'
                ? 'text-[#0D2B4E]'
                : 'text-[#4B5563] hover:text-[#0D2B4E]'
            }`}
          >
            <HardDrive className="w-4 h-4 text-[#B8964A]" />
            <span>{t('Google Drive Resource Vault', 'مستودع Google Drive للموارد')}</span>
            <span className="px-2 py-0.5 text-[10px] bg-[#B8964A]/20 text-[#B8964A] rounded font-mono font-normal">
              {t('Live Cloud', 'سحابي مباشر')}
            </span>
            {activeTab === 'drive' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8964A]" />
            )}
          </button>
        </div>

        {activeTab === 'drive' ? (
          <ExecutiveDriveExplorer />
        ) : (
          /* Document Sheet Surface */
          <div className="bg-white border border-[#0D2B4E]/15 rounded-xl p-8 sm:p-12 lg:p-16 shadow-xl max-w-4xl mx-auto">
          {/* Document Header */}
          <div className="border-b-2 border-[#B8964A] pb-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#0D2B4E] tracking-tight leading-none mb-2">
                  {PROFILE_INFO.name}
                </h3>
                <div className="text-sm sm:text-base font-semibold text-[#B8964A] uppercase tracking-wider mb-2">
                  {PROFILE_INFO.title}
                </div>
                <div className="text-xs text-[#4B5563] font-medium">
                  {PROFILE_INFO.tagline}
                </div>
              </div>

              <div className="text-xs text-[#4B5563] space-y-1 md:text-right border-t md:border-t-0 pt-3 md:pt-0 border-[#0D2B4E]/10 w-full md:w-auto">
                <div>Amman, Jordan (MENA / GCC Mobile)</div>
                <div>
                  <a href={`mailto:${PROFILE_INFO.email}`} className="text-[#0D2B4E] font-medium hover:underline">
                    {PROFILE_INFO.email}
                  </a>
                </div>
                <div>{PROFILE_INFO.phone}</div>
                <div>
                  <a href={PROFILE_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#B8964A] hover:underline">
                    linkedin.com/in/yousefgbaarah
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Executive Profile */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#0D2B4E] mb-3 pb-1 border-b border-[#0D2B4E]/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B8964A]" />
              <span>Executive Profile</span>
            </h4>
            <p className="text-sm text-[#0D2B4E]/90 leading-relaxed font-light">
              Marketing, communications and public relations executive with 15+ years translating business priorities into brand visibility, reputation, stakeholder confidence and measurable outcomes across MENA. Media-native and business-driven, trusted by executive leadership to align integrated communications, stakeholder engagement, brand stewardship and high-impact campaigns with organisational priorities. Experience spans media groups, institutional environments, premium lifestyle platforms, strategic partnerships and Jordan’s luxury hospitality ecosystem.
            </p>
          </div>

          {/* Section: Selected Impact */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#0D2B4E] mb-4 pb-1 border-b border-[#0D2B4E]/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B8964A]" />
              <span>Selected Impact Highlights</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROOF_METRICS.slice(0, 4).map((metric) => (
                <div key={metric.id} className="p-4 rounded-lg bg-[#F6F3ED] border border-[#0D2B4E]/10">
                  <div className="font-serif text-2xl font-medium text-[#0D2B4E] mb-1">
                    {metric.prefix || ''}{metric.value}{metric.suffix || ''}
                  </div>
                  <div className="text-xs font-semibold text-[#B8964A] uppercase tracking-wide mb-1">
                    {metric.label}
                  </div>
                  <p className="text-xs text-[#4B5563] leading-normal font-light">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Core Expertise */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#0D2B4E] mb-3 pb-1 border-b border-[#0D2B4E]/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B8964A]" />
              <span>Core Strategic Expertise</span>
            </h4>
            <div className="flex flex-wrap gap-2 text-xs text-[#0D2B4E]">
              {[
                'Brand Strategy & Positioning',
                'Integrated Marketing Communications (IMC)',
                'Public Relations & Media Relations',
                'Reputation & Crisis Communications',
                'Executive Communications',
                'Strategic Partnerships',
                'Brand Standards & Stewardship',
                'Event Marketing & Activations',
                'Creative Direction & Content Strategy',
                'Agency Management',
                'GCC & MENA Media Relations',
                'Marketing Analytics & ROI Reporting',
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#F6F3ED] border border-[#0D2B4E]/15 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Section: Professional Experience */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#0D2B4E] mb-4 pb-1 border-b border-[#0D2B4E]/10 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-[#B8964A]" />
              <span>
                {activeTab === 'onepage' ? 'Career Snapshot' : 'Detailed Professional Experience'}
              </span>
            </h4>

            <div className="space-y-6">
              {CAREER_HISTORY.map((role, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="font-bold text-sm text-[#0D2B4E]">
                      {role.company} — <span className="font-medium text-[#B8964A]">{role.role}</span>
                    </div>
                    <div className="text-xs text-[#4B5563] font-medium shrink-0">
                      {role.period} | {role.location}
                    </div>
                  </div>

                  <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-[#4B5563] marker:text-[#B8964A] font-light">
                    {activeTab === 'onepage'
                      ? role.highlights.slice(0, 2).map((h, hIdx) => <li key={hIdx}>{h}</li>)
                      : role.highlights.map((h, hIdx) => <li key={hIdx}>{h}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Education & Executive Development */}
          <div className="mb-8 pt-4 border-t border-[#0D2B4E]/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#0D2B4E] mb-3 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#B8964A]" />
                  <span>Academic Education</span>
                </h4>
                <div className="space-y-3 text-xs text-[#4B5563]">
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx}>
                      <div className="font-semibold text-[#0D2B4E]">{edu.degree}</div>
                      <div>{edu.institution} {edu.year && `(${edu.year})`}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#0D2B4E] mb-3 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#B8964A]" />
                  <span>Executive Education</span>
                </h4>
                <div className="space-y-3 text-xs text-[#4B5563]">
                  {EXECUTIVE_EDUCATION.map((edu, idx) => (
                    <div key={idx}>
                      <div className="font-semibold text-[#0D2B4E]">{edu.degree}</div>
                      <div>{edu.institution} {edu.year && `(${edu.year})`}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section: Certifications & Languages */}
          <div className="pt-4 border-t border-[#0D2B4E]/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#0D2B4E] mb-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#B8964A]" />
                  <span>Certifications</span>
                </h4>
                <div className="space-y-2 text-xs text-[#4B5563]">
                  {CERTIFICATIONS.map((c, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#B8964A]">•</span>
                      <span>
                        <strong className="text-[#0D2B4E] font-medium">{c.name}</strong> — {c.issuer} ({c.year})
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#0D2B4E] mb-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#B8964A]" />
                  <span>Languages &amp; Market Alignment</span>
                </h4>
                <div className="space-y-2 text-xs text-[#4B5563]">
                  <div>
                    <strong className="text-[#0D2B4E] font-medium">Languages:</strong> {PROFILE_INFO.languages}
                  </div>
                  <div>
                    <strong className="text-[#0D2B4E] font-medium">Positioning:</strong> Strategic Communications, Brand &amp; Reputation Executive — with primary alignment to Director, Marketing &amp; Communications and Head / Director, Corporate Communications &amp; PR roles.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

        {/* Document Footer Callout */}
        <div className="mt-8 text-center text-xs text-[#4B5563]">
          <span>Executive Dossier for Yousef G. Baarah • Verified &amp; Updated 2026</span>
        </div>
      </div>
    </section>
  );
};
