import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ENDORSEMENTS } from '../data/enhancementData';
import { Endorsement } from '../types';
import {
  Quote,
  Building2,
  Award,
  ShieldCheck,
  Star,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

export const EndorsementsSection: React.FC = () => {
  const { isArabic, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const categories = [
    { id: 'all', label: t('All Testimonials', 'كافة الشهادات المؤسسية') },
    { id: 'Corporate', label: t('Multinational & Corporate', 'الشركات متعددة الجنسيات') },
    { id: 'Broadcasting', label: t('Broadcasting & Media', 'البث والإعلام التجاري') },
    { id: 'Agency & Global PR', label: t('Global PR Networks', 'شبكات العلاقات العامة العالمية') },
    { id: 'Sovereign & Industrial', label: t('Industrial & Regulatory', 'القطاع الصناعي والتنظيمي') },
  ];

  const filteredEndorsements =
    selectedCategory === 'all'
      ? ENDORSEMENTS
      : ENDORSEMENTS.filter((e) => e.category === selectedCategory);

  const current = filteredEndorsements[activeIdx % filteredEndorsements.length] || ENDORSEMENTS[0];

  return (
    <section
      id="endorsements"
      className="py-20 bg-white border-b border-[#0D2B4E]/10 relative overflow-hidden"
      aria-labelledby="endorsements-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8964A]/10 text-[#B8964A] text-xs font-mono font-bold uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5" />
            <span>{t('Executive Peer & Stakeholder Validation', 'شهادات القيادات التنفيذية والشركاء')}</span>
          </div>
          <h2
            id="endorsements-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#0D2B4E]"
          >
            {t(
              'Endorsements from Institutional & C-Suite Leaders',
              'شهادات وتوصيات القيادات التنفيذية والمؤسسية'
            )}
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] font-light leading-relaxed">
            {t(
              'Perspectives from Fortune 500 regional directors, national broadcast leaders, and sovereign trade authorities on executive delivery, commercial trust, and crisis mastery.',
              'آراء القيادات الإقليمية لكبرى الشركات العالمية، شبكات البث الوطنية، والهيئات الصناعية حول الكفاءة التنفيذية، الثقة التجارية، وإدارة الأزمات.'
            )}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setActiveIdx(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-[#0D2B4E] text-[#E6D2A8] shadow-md scale-105'
                  : 'bg-[#F6F3ED] text-[#4B5563] hover:bg-[#EFEAE0] hover:text-[#0D2B4E]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Testimonial Card */}
        <div className="relative bg-[#FBF9F5] border border-[#0D2B4E]/15 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl overflow-hidden mb-12">
          {/* Subtle Background Quote Watermark */}
          <Quote className="absolute -top-6 -right-6 w-48 h-48 text-[#B8964A]/5 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Stakeholder Profile & Badge */}
            <div className="lg:col-span-4 space-y-4 border-b lg:border-b-0 lg:border-r rtl:lg:border-r-0 rtl:lg:border-l border-[#0D2B4E]/10 pb-6 lg:pb-0 lg:pr-8 rtl:lg:pr-0 rtl:lg:pl-8">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#0D2B4E] text-[#E6D2A8] flex items-center justify-center text-lg font-serif font-bold border border-[#B8964A]/30 shadow-md">
                  {current.avatarInitials}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0D2B4E]">
                    {isArabic && current.nameAr ? current.nameAr : current.name}
                  </h4>
                  <div className="text-xs text-[#B8964A] font-semibold">
                    {isArabic && current.titleAr ? current.titleAr : current.title}
                  </div>
                </div>
              </div>

              <div className="text-xs text-[#4B5563] space-y-1 font-light">
                <div className="font-semibold text-[#0D2B4E]">
                  {isArabic && current.organizationAr ? current.organizationAr : current.organization}
                </div>
                <div className="text-[11px] text-[#4B5563] italic">
                  {isArabic && current.relationshipAr ? current.relationshipAr : current.relationship}
                </div>
              </div>

              {current.metricHighlight && (
                <div className="p-3 rounded-xl bg-white border border-[#0D2B4E]/10 text-xs text-[#0D2B4E] flex items-center gap-2 font-medium shadow-xs">
                  <TrendingUp className="w-4 h-4 text-[#B8964A] shrink-0" />
                  <span>{current.metricHighlight}</span>
                </div>
              )}
            </div>

            {/* Right Col: Quote Statement */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-1 text-[#B8964A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl lg:text-2xl font-serif text-[#0D2B4E] leading-relaxed italic">
                "{isArabic ? current.quoteAr : current.quote}"
              </blockquote>

              <div className="flex items-center justify-between pt-4 border-t border-[#0D2B4E]/10 text-xs text-[#4B5563]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#B8964A]">
                  {t('Verified Executive Collaboration', 'تعاون تنفيذي موثق')}
                </span>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setActiveIdx(
                        (prev) => (prev - 1 + filteredEndorsements.length) % filteredEndorsements.length
                      )
                    }
                    className="p-2 rounded-full bg-white border border-[#0D2B4E]/10 hover:bg-[#0D2B4E] hover:text-white transition-colors"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
                  </button>
                  <span className="font-mono text-xs text-[#0D2B4E] font-bold px-1">
                    {((activeIdx % filteredEndorsements.length) + 1)} / {filteredEndorsements.length}
                  </span>
                  <button
                    onClick={() =>
                      setActiveIdx((prev) => (prev + 1) % filteredEndorsements.length)
                    }
                    className="p-2 rounded-full bg-white border border-[#0D2B4E]/10 hover:bg-[#0D2B4E] hover:text-white transition-colors"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Endorsements 4-Card Grid Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ENDORSEMENTS.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedCategory('all');
                setActiveIdx(idx);
              }}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                current.id === item.id
                  ? 'bg-[#0D2B4E] text-white border-[#B8964A] shadow-md scale-102'
                  : 'bg-[#F6F3ED] text-[#0D2B4E] border-[#0D2B4E]/10 hover:bg-white hover:border-[#B8964A]/30'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-mono uppercase font-bold tracking-wider ${
                      current.id === item.id ? 'text-[#E6D2A8]' : 'text-[#B8964A]'
                    }`}
                  >
                    {item.avatarInitials}
                  </span>
                  <Quote
                    className={`w-3.5 h-3.5 ${
                      current.id === item.id ? 'text-[#E6D2A8]' : 'text-[#4B5563]'
                    }`}
                  />
                </div>
                <div className="font-bold text-xs line-clamp-1">
                  {isArabic && item.nameAr ? item.nameAr : item.name}
                </div>
                <div
                  className={`text-[11px] line-clamp-1 ${
                    current.id === item.id ? 'text-white/80' : 'text-[#4B5563]'
                  }`}
                >
                  {isArabic && item.titleAr ? item.titleAr : item.title}
                </div>
              </div>

              <p
                className={`text-xs line-clamp-3 italic font-serif leading-relaxed ${
                  current.id === item.id ? 'text-white/90' : 'text-[#4B5563]'
                }`}
              >
                "{isArabic ? item.quoteAr : item.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
