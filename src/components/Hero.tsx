import React from 'react';
import { FileText, Mail, ArrowUpRight, ShieldCheck, Globe, Award, Sparkles } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';
import { useLanguage } from '../context/LanguageContext';
import executivePortrait from '../assets/images/yousef-baarah-profile.jpg';
import galaEventPortrait from '../assets/images/yousef-baarah-event.jpg';

interface HeroProps {
  onOpenDocuments: () => void;
  onOpenOnePage: () => void;
  onOpenFullResume: () => void;
  onOpenBriefingGenerator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDocuments: _onOpenDocuments,
  onOpenOnePage,
  onOpenFullResume,
  onOpenBriefingGenerator,
}) => {
  const { isArabic, t } = useLanguage();

  return (
    <section
      id="top"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-[#060F1A] via-[#0D2B4E] to-[#143E6B] text-white overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background Architectural Geometry & Subtle Champagne Rings */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 md:w-[32rem] md:h-[32rem] rounded-full border border-[#B8964A]/20 pointer-events-none hero-glow-ring"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-48 -right-24 w-[36rem] h-[36rem] rounded-full border border-[#B8964A]/20 pointer-events-none -rotate-12"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full border border-white/5 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Main Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#B8964A]/10 border border-[#B8964A]/30 text-[#E6D2A8] text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8964A] animate-pulse" />
              <span>{t('Executive Profile · Regional Perspective', 'الملف التنفيذي · الرؤية الإقليمية الشاملة')}</span>
            </div>

            {/* Display Heading */}
            <h1
              id="hero-title"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[0.9] text-white"
            >
              {isArabic ? (
                <>
                  يوسف
                  <br />
                  <span className="text-white/95">غسان بعارة</span>
                </>
              ) : (
                <>
                  Yousef
                  <br />
                  <span className="text-white/95">G. Baarah</span>
                </>
              )}
            </h1>

            {/* Market-Facing Identity */}
            <div className="text-xl sm:text-2xl font-medium tracking-wide text-[#E6D2A8] font-sans border-l-2 rtl:border-r-2 rtl:border-l-0 border-[#B8964A] pl-3 rtl:pr-3 rtl:pl-0">
              {isArabic
                ? 'قيادي تنفيذي في الاتصال الاستراتيجي، الهوية المؤسسية، العلاقات العامة وإدارة السمعة'
                : PROFILE_INFO.title}
            </div>

            {/* Strategic Value Proposition Hook */}
            <p className="text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed font-light">
              {isArabic
                ? 'خبرة تنفيذية واستشارية تمتد لأكثر من 15 عاماً عبر الأردن، السعودية ودول الخليج العربي في ربط الأولويات التجارية والسيادية بالخطاب الإعلامي المؤثر، الحوكمة المؤسسية، والشراكات الاستراتيجية.'
                : PROFILE_INFO.summary}
            </p>

            {/* Context Subtext */}
            <p className="text-xs sm:text-sm text-white/60 max-w-xl leading-relaxed">
              {isArabic
                ? 'سجل حافل يشمل إدارة الشراكات السيادية مع المنتدى الاقتصادي العالمي (WEF)، تحقيق 50.3% من نسب المشاهدة التلفزيونية الوطنية لمجموعة رؤيا، وإدارة حسابات كبرى الشركات العالمية مثل فيليب موريس إنترناشونال لأكثر من عقد.'
                : PROFILE_INFO.context}
            </p>

            {/* Metadata Badges Ribbon */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium uppercase tracking-wider text-white/70">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                <Award className="w-3.5 h-3.5 text-[#B8964A]" />
                {isArabic ? '15+ عاماً من القيادة' : PROFILE_INFO.experienceYears}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                <Globe className="w-3.5 h-3.5 text-[#B8964A]" />
                {isArabic ? 'الأردن · السعودية · الخليج العربي' : PROFILE_INFO.regions}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B8964A]" />
                {t('Arabic (Native) · English (Fluent)', 'العربية (الأم) · الإنجليزية (طلاقة تنفيذية)')}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#contact"
                id="hero-cta-contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#B8964A] text-[#060F1A] hover:bg-[#C9A66B] font-bold text-xs uppercase tracking-widest rounded transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>{t('Initiate Strategic Contact', 'بدء التواصل الاستراتيجي')}</span>
                <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-90" />
              </a>

              {onOpenBriefingGenerator && (
                <button
                  type="button"
                  id="hero-cta-briefing"
                  onClick={onOpenBriefingGenerator}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#B8964A]/20 hover:bg-[#B8964A]/30 border border-[#B8964A]/50 text-[#E6D2A8] font-bold text-xs uppercase tracking-widest rounded transition-all duration-200 shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-[#B8964A]" />
                  <span>{t('Board Briefing Tool', 'مُولّد تقارير مجالس الإدارة')}</span>
                </button>
              )}

              <button
                type="button"
                id="hero-cta-onepage"
                onClick={onOpenOnePage}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-xs uppercase tracking-widest rounded transition-all duration-200 backdrop-blur-sm"
              >
                <FileText className="w-4 h-4 text-[#B8964A]" />
                <span>{t('One-Page Snapshot', 'ملخص الصفحة الواحدة')}</span>
              </button>

              <button
                type="button"
                id="hero-cta-resume"
                onClick={onOpenFullResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/15 border border-white/15 text-white/90 font-semibold text-xs uppercase tracking-widest rounded transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-[#B8964A]" />
                <span>{t('Full Resume (PDF)', 'السيرة الكاملة (PDF)')}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Executive Stage & Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/20 rounded-xl p-6 sm:p-8 backdrop-blur-md shadow-2xl overflow-hidden">
              {/* Concentric Gold Rings in Card */}
              <div
                className="absolute -top-12 -right-12 w-64 h-64 border border-[#B8964A]/30 rounded-full pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -top-6 -right-6 w-48 h-48 border border-white/10 rounded-full pointer-events-none"
                aria-hidden="true"
              />

              {/* Portrait & Monogram Badge */}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-6">
                  {/* Glowing orbital frame */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#B8964A] shadow-[0_0_30px_rgba(184,150,74,0.4)] animate-pulse" />
                  <div className="absolute inset-2 rounded-full border border-white/25" />
                  
                  {/* Executive Portrait Container */}
                  <div className="absolute inset-3 rounded-full overflow-hidden bg-[#0D2B4E] border-2 border-[#B8964A]/60 shadow-inner group">
                    <img
                      src={executivePortrait}
                      alt="Yousef G. Baarah - Executive Strategic Communications Leadership"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Decorative orbital live badge */}
                  <div className="absolute bottom-2 right-4 px-2 py-0.5 rounded-full bg-[#060F1A]/90 border border-[#B8964A] text-[10px] font-mono font-bold text-[#E6D2A8] shadow-md flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{t('Executive', 'تنفيذي')}</span>
                  </div>
                </div>

                {/* Profile Title & Credentials */}
                <h2 className="text-xl sm:text-2xl font-serif font-medium text-white mb-1">
                  {isArabic ? 'يوسف غسان بعارة' : 'Yousef G. Baarah'}
                </h2>
                <div className="text-xs uppercase tracking-widest text-[#B8964A] font-semibold mb-4">
                  {isArabic ? 'الأردن · الشرق الأوسط · الخليج العربي' : 'Jordan · MENA · GCC'}
                </div>

                {/* Micro Positioning Quote */}
                <div className="p-4 rounded-lg bg-black/20 border border-white/10 text-xs text-white/75 leading-relaxed italic text-left rtl:text-right mb-6">
                  {isArabic
                    ? '«خبرة متمرسة في المشهد الإعلامي، مدفوعة بذكاء الأعمال، ومصقولة عبر البيئات المؤسسية والسيادية والتجارية الفاخرة.»'
                    : '“Media-native. Business-driven. Built across institutional, corporate, media and premium-brand environments.”'}
                </div>

                {/* Key Pillars Checklist */}
                <div className="w-full text-left rtl:text-right space-y-2 border-t border-white/10 pt-4 text-xs text-white/80">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8964A] shrink-0" />
                    <span>{t('Translates commercial priorities into brand authority', 'ترجمة الأولويات التجارية إلى مكانة وهوية مؤسسية راسخة')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8964A]" />
                    <span>{t('10+ Years principal partner to Philip Morris Jordan', 'شريك رئيسي لأكثر من 10 سنوات لشركة فيليب موريس الأردن')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8964A]" />
                    <span>{t('Sovereign & WEF/EIB strategic publishing architect', 'مهندس نشر استثماري سيادي بالشراكة مع المنتدى الاقتصادي العالمي')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
