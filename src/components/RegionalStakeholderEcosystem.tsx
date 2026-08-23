import React, { useState, useMemo } from 'react';
import { ECOSYSTEM_PARTNERS } from '../data/enhancementData';
import { useLanguage } from '../context/LanguageContext';
import {
  Building2,
  Tv,
  Sparkles,
  Landmark,
  MapPin,
  CheckCircle2,
  Network,
  Filter,
} from 'lucide-react';

export const RegionalStakeholderEcosystem: React.FC = () => {
  const { isArabic, t } = useLanguage();
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [selectedHub, setSelectedHub] = useState<string>('all');
  const [activePartnerId, setActivePartnerId] = useState<string>(ECOSYSTEM_PARTNERS[0].id);

  const sectors = [
    { id: 'all', label: t('All Sectors', 'كافة القطاعات'), icon: Network },
    { id: 'Sovereign & Multilateral', label: t('Sovereign & Multilateral', 'الجهات السيادية والدولية'), icon: Landmark },
    { id: 'Broadcasting & National Media', label: t('Broadcasting & Media', 'البث والإعلام الوطني'), icon: Tv },
    { id: 'Multinational & Regulatory', label: t('Multinational & Regulatory', 'الشركات العالمية والجهات التنظيمية'), icon: Building2 },
    { id: 'Luxury & Hospitality', label: t('Luxury & Hospitality', 'الضيافة الفاخرة والعلامات الكبرى'), icon: Sparkles },
  ];

  const hubs = [
    { id: 'all', label: t('All Regional Hubs', 'كافة المراكز الإقليمية') },
    { id: 'Amman', label: t('Amman (Operational Core)', 'عمان (المركز التشغيلي)') },
    { id: 'Jeddah', label: t('Jeddah (Roots & Instinct)', 'جدة (النشأة والخبرة)') },
    { id: 'Riyadh', label: t('Riyadh (GCC Scale)', 'الرياض (التوسع الخليجي)') },
    { id: 'Dubai', label: t('Dubai (Agency Networks)', 'دبي (شبكات الوكالات)') },
    { id: 'Lausanne', label: t('Lausanne (Fortune 500 HQ)', 'لوزان (المقر العالمي)') },
  ];

  const filteredPartners = useMemo(() => {
    return ECOSYSTEM_PARTNERS.filter((partner) => {
      const sectorMatch = selectedSector === 'all' || partner.sector === selectedSector;
      const hubMatch = selectedHub === 'all' || partner.hub === selectedHub;
      return sectorMatch && hubMatch;
    });
  }, [selectedSector, selectedHub]);

  const activePartner = useMemo(() => {
    return (
      ECOSYSTEM_PARTNERS.find((p) => p.id === activePartnerId) ||
      filteredPartners[0] ||
      ECOSYSTEM_PARTNERS[0]
    );
  }, [activePartnerId, filteredPartners]);

  return (
    <div className="w-full space-y-8 mt-12 pt-12 border-t border-white/10">
      {/* Sub-header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#B8964A] font-bold flex items-center gap-2 mb-2">
            <Network className="w-3.5 h-3.5" />
            <span>{t('Stakeholder Ecosystem & Cross-Border Alliances', 'منظومة العلاقات والتحالفات الإقليمية')}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white leading-tight">
            {t('Interactive Institutional Relationship Map', 'شبكة التحالفات والمؤسسات الشريكة')}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-white/70 max-w-md font-light">
          {t(
            'Explore proven institutional access across sovereign ministries, national broadcasting corporations, Fortune 500 enterprise, and five-star luxury ecosystems.',
            'استكشف شبكة العلاقات الموثوقة التي تمتد عبر الوزارات السيادية، شبكات البث التلفزيوني، الشركات العالمية، وفنادق الخمس نجوم.'
          )}
        </p>
      </div>

      {/* Control Bar: Filters */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
        {/* Sector Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {sectors.map((s) => {
            const Icon = s.icon;
            const isSelected = selectedSector === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedSector(s.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  isSelected
                    ? 'bg-[#B8964A] text-[#060F1A] shadow-sm font-bold'
                    : 'bg-white/5 text-white/80 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{s.label}</span>
              </button>
            );
          })}
        </div>

        {/* Hub Selector Dropdown / Filter */}
        <div className="flex items-center gap-2 self-end lg:self-auto w-full lg:w-auto">
          <Filter className="w-3.5 h-3.5 text-[#B8964A] shrink-0" />
          <select
            value={selectedHub}
            onChange={(e) => setSelectedHub(e.target.value)}
            className="bg-[#0D2B4E] text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/20 focus:outline-none focus:ring-1 focus:ring-[#B8964A] w-full lg:w-auto"
            aria-label="Filter by regional hub"
          >
            {hubs.map((h) => (
              <option key={h.id} value={h.id} className="bg-[#0A2540] text-white">
                {h.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid of Partners + Active Spotlight Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Partners Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {filteredPartners.map((partner) => {
            const isActive = activePartnerId === partner.id;
            return (
              <div
                key={partner.id}
                onClick={() => setActivePartnerId(partner.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                  isActive
                    ? 'bg-white/15 border-[#B8964A] ring-1 ring-[#B8964A]/50 shadow-lg'
                    : 'bg-white/[0.04] border-white/10 hover:bg-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#E6D2A8] block">
                      {partner.sector}
                    </span>
                    <h4 className="text-sm font-serif font-medium text-white leading-snug mt-1">
                      {isArabic ? partner.nameAr : partner.name}
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#E6D2A8] bg-black/40 px-2 py-0.5 rounded border border-white/10 shrink-0">
                    <MapPin className="w-3 h-3 text-[#B8964A]" />
                    {partner.hub}
                  </span>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-white/60">{partner.tenureOrImpact}</span>
                  <span className="text-[#B8964A] font-semibold uppercase tracking-wider">
                    {isActive ? t('Selected', 'محدد') : t('Inspect', 'تفاصيل')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Partner Spotlight Dossier */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.09] to-white/[0.03] border border-[#B8964A]/40 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[11px] uppercase tracking-widest font-bold text-[#E6D2A8] bg-[#B8964A]/20 px-2.5 py-0.5 rounded">
                {activePartner.sector}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-[#E6D2A8] font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#B8964A]" />
                {activePartner.hub} Hub
              </span>
            </div>

            <div>
              <h4 className="text-xl sm:text-2xl font-serif font-medium text-white">
                {isArabic ? activePartner.nameAr : activePartner.name}
              </h4>
              <div className="text-xs uppercase tracking-wider text-[#B8964A] font-semibold mt-1">
                {activePartner.role}
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-black/30 border border-white/10 space-y-1">
              <div className="text-[10px] uppercase tracking-widest text-white/50">
                {t('Verified Scope & Reach', 'النطاق والأثر الموثق')}
              </div>
              <div className="text-sm font-medium text-[#E6D2A8]">
                {activePartner.verifiedScope}
              </div>
              <div className="text-xs text-white/70 font-mono">
                {activePartner.tenureOrImpact}
              </div>
            </div>

            <div className="text-xs sm:text-sm text-white/85 leading-relaxed font-light">
              &ldquo;{activePartner.highlight}&rdquo;
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#B8964A]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span className="text-white/80">{t('Direct Senior Stakeholder Relationship', 'علاقة تواصل مباشرة مع الإدارة العليا')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
