import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MEDIA_REEL_ITEMS } from '../data/enhancementData';
import { MediaReelItem } from '../types';
import {
  Film,
  Play,
  Tv,
  TrendingUp,
  Award,
  Globe,
  Layers,
  Sparkles,
  ExternalLink,
  X,
  Clock,
  CheckCircle2,
} from 'lucide-react';

export const MediaReelShowcase: React.FC = () => {
  const { isArabic, t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<MediaReelItem | null>(null);

  return (
    <section
      id="media-reel"
      className="py-20 bg-[#F6F3ED] border-b border-[#0D2B4E]/10"
      aria-labelledby="media-reel-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8964A] font-mono">
                {t('Broadcast & Sovereign Asset Gallery', 'معرض الإنتاج الإعلامي والأصول السيادية')}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8964A]" />
            </div>
            <h2
              id="media-reel-title"
              className="text-3xl sm:text-4xl font-serif font-medium text-[#0D2B4E]"
            >
              {t(
                'Media Reel & Sovereign Production Archive',
                'أرشيف الإنتاج الإعلامي والبث التلفزيوني والمنشورات السيادية'
              )}
            </h2>
            <p className="text-sm text-[#4B5563] leading-relaxed font-light">
              {t(
                'High-impact prime-time broadcasts, sovereign summit investment guides, and decade-long multinational campaigns orchestrated across the Middle East and GCC.',
                'حملات البث الوطني في أوقات الذروة، أدلة القمم الاستثمارية السيادية، ومشاريع الاتصال المؤسسي لكبرى الشركات العالمية عبر الشرق الأوسط والخليج.'
              )}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D2B4E] text-white text-xs font-mono font-semibold shadow-xs">
              <Film className="w-4 h-4 text-[#B8964A]" />
              <span>4 {t('Key Milestone Showcases', 'محطات إنتاج رئيسية')}</span>
            </span>
          </div>
        </div>

        {/* Media Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {MEDIA_REEL_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-white rounded-2xl border border-[#0D2B4E]/15 overflow-hidden shadow-md hover:shadow-xl hover:border-[#B8964A]/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#0D2B4E]">
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060F1A] via-black/30 to-transparent" />

                {/* Badges on Top of Image */}
                <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#060F1A]/80 text-[#E6D2A8] text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-xs border border-white/10">
                    {isArabic ? item.categoryAr : item.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3">
                  <span className="px-2 py-0.5 rounded bg-[#B8964A] text-[#060F1A] text-[10px] font-mono font-bold">
                    {item.year}
                  </span>
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#B8964A] text-[#060F1A] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                    <Play className="w-6 h-6 fill-current ml-0.5 rtl:ml-0 rtl:mr-0.5" />
                  </div>
                </div>

                {/* Bottom Overlay Title on Thumbnail */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs text-[#E6D2A8] font-mono font-semibold">
                    {item.client}
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#0D2B4E] group-hover:text-[#B8964A] transition-colors line-clamp-2">
                    {isArabic ? item.titleAr : item.title}
                  </h3>
                  <p className="text-xs text-[#4B5563] mt-2 line-clamp-3 leading-relaxed font-light">
                    {isArabic ? item.descriptionAr : item.description}
                  </p>
                </div>

                {/* Key Metrics Ribbon */}
                <div className="space-y-3 pt-3 border-t border-[#0D2B4E]/10">
                  <div className="flex flex-wrap gap-1.5">
                    {(isArabic && item.metricsAr ? item.metricsAr : item.metrics).map(
                      (metric, mIdx) => (
                        <span
                          key={mIdx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#F6F3ED] text-[#0D2B4E] text-[11px] font-semibold border border-[#0D2B4E]/10"
                        >
                          <TrendingUp className="w-3 h-3 text-[#B8964A]" />
                          <span>{metric}</span>
                        </span>
                      )
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#B8964A] font-bold pt-1">
                    <span className="inline-flex items-center gap-1 group-hover:underline">
                      <span>{t('View Detailed Case Dossier', 'استعراض تفاصيل المشروع')}</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                    <span className="text-[10px] font-mono text-[#4B5563] font-normal">
                      {item.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#B8964A]/40 flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Media Preview */}
            <div className="relative aspect-video w-full bg-[#060F1A]">
              <img
                src={selectedItem.thumbnailUrl}
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs uppercase font-mono tracking-widest text-[#E6D2A8] font-bold">
                  {selectedItem.client} · {selectedItem.year}
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                  {isArabic ? selectedItem.titleAr : selectedItem.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[60vh]">
              {/* Category & Scope */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-3 py-1 rounded bg-[#0D2B4E] text-[#E6D2A8] font-semibold">
                  {isArabic ? selectedItem.categoryAr : selectedItem.category}
                </span>
                <span className="px-3 py-1 rounded bg-[#F6F3ED] text-[#4B5563] font-mono border border-[#0D2B4E]/10">
                  {selectedItem.scope}
                </span>
              </div>

              {/* Detailed Narrative */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D2B4E]">
                  {t('Strategic Overview & Impact', 'نظرة استراتيجية والأثر المحقق')}
                </h4>
                <p className="text-sm text-[#0D2B4E]/85 leading-relaxed font-light">
                  {isArabic ? selectedItem.descriptionAr : selectedItem.description}
                </p>
              </div>

              {/* Quantitative Metrics Breakdown */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D2B4E]">
                  {t('Verified Outcomes & Board Metrics', 'النتائج الموثقة ومؤشرات الأداء')}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(isArabic && selectedItem.metricsAr
                    ? selectedItem.metricsAr
                    : selectedItem.metrics
                  ).map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#F6F3ED] border border-[#0D2B4E]/10 flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#B8964A] shrink-0" />
                      <span className="text-xs font-semibold text-[#0D2B4E]">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-[#F6F3ED] p-4 sm:p-5 border-t border-[#0D2B4E]/10 flex items-center justify-between">
              <span className="text-xs text-[#4B5563] font-mono">
                {t('Verified Career Asset', 'إنجاز مهني موثق')}
              </span>
              <button
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2 bg-[#0D2B4E] text-white rounded-lg text-xs font-semibold hover:bg-[#0A2540] transition-colors"
              >
                {t('Close Overview', 'إغلاق')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
