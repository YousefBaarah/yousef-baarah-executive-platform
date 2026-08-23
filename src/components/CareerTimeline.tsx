import React, { useState, useMemo } from 'react';
import { TIMELINE_MILESTONES } from '../data/profileData';
import { TimelineMilestone } from '../types';
import {
  Building2,
  Tv,
  Sparkles,
  Landmark,
  Calendar,
  CheckCircle2,
  Users,
  TrendingUp,
  Tag,
  ArrowUpDown,
  Layers,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

interface CareerTimelineProps {
  onSelectCaseStudy?: (caseId: string) => void;
}

export const CareerTimeline: React.FC<CareerTimelineProps> = ({ onSelectCaseStudy }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>(
    TIMELINE_MILESTONES[0]?.id || ''
  );
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');

  const categories = [
    { id: 'all', label: 'All Milestones', icon: Layers },
    { id: 'Institutional', label: 'Institutional & Policy', icon: Building2 },
    { id: 'Broadcasting', label: 'National Broadcasting', icon: Tv },
    { id: 'Luxury & Brands', label: 'Luxury & Commercial', icon: Sparkles },
    { id: 'Sovereign', label: 'Sovereign Alliances', icon: Landmark },
  ];

  const filteredMilestones = useMemo(() => {
    let list =
      selectedCategory === 'all'
        ? [...TIMELINE_MILESTONES]
        : TIMELINE_MILESTONES.filter((m) => m.category === selectedCategory);

    if (sortOrder === 'asc') {
      list = [...list].reverse();
    }
    return list;
  }, [selectedCategory, sortOrder]);

  const activeMilestone = useMemo(() => {
    return (
      TIMELINE_MILESTONES.find((m) => m.id === selectedMilestoneId) ||
      filteredMilestones[0] ||
      TIMELINE_MILESTONES[0]
    );
  }, [selectedMilestoneId, filteredMilestones]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Institutional':
        return <Building2 className="w-4 h-4 text-[#B8964A]" />;
      case 'Broadcasting':
        return <Tv className="w-4 h-4 text-[#B8964A]" />;
      case 'Luxury & Brands':
        return <Sparkles className="w-4 h-4 text-[#B8964A]" />;
      case 'Sovereign':
        return <Landmark className="w-4 h-4 text-[#B8964A]" />;
      default:
        return <Layers className="w-4 h-4 text-[#B8964A]" />;
    }
  };

  return (
    <div className="w-full space-y-10">
      {/* Control Bar: Filters & Sort Toggle */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 rounded-xl bg-white border border-[#0D2B4E]/10 shadow-sm">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  const firstMatch =
                    cat.id === 'all'
                      ? TIMELINE_MILESTONES[0]?.id
                      : TIMELINE_MILESTONES.find((m) => m.category === cat.id)?.id;
                  if (firstMatch) setSelectedMilestoneId(firstMatch);
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#0D2B4E] text-[#E6D2A8] shadow-sm ring-1 ring-[#0D2B4E]'
                    : 'bg-[#F6F3ED] text-[#4B5563] hover:text-[#0D2B4E] hover:bg-[#EAE4D7]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Sort & Quick Count */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          <span className="text-xs text-[#4B5563] font-medium hidden sm:inline">
            Showing <strong className="text-[#0D2B4E]">{filteredMilestones.length}</strong> of{' '}
            {TIMELINE_MILESTONES.length} milestones
          </span>

          <button
            onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#0D2B4E]/15 text-xs font-semibold uppercase tracking-wider text-[#0D2B4E] bg-[#F6F3ED] hover:bg-[#EAE4D7] transition-colors"
            title="Toggle chronological direction"
          >
            <ArrowUpDown className="w-3.5 h-3.5 text-[#B8964A]" />
            <span>{sortOrder === 'desc' ? 'Recent First (2025 → 2009)' : 'Chronological (2009 → 2025)'}</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage: Left Timeline Spine & Right Active Spotlight */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Chronological Milestones List with Spine */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-[#B8964A]/30 space-y-6">
            {filteredMilestones.map((m, index) => {
              const isActive = selectedMilestoneId === m.id;

              return (
                <div
                  key={m.id}
                  id={`timeline-node-${m.id}`}
                  onClick={() => setSelectedMilestoneId(m.id)}
                  className={`group relative p-5 sm:p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#B8964A] shadow-xl ring-2 ring-[#B8964A]/25 -translate-y-0.5'
                      : 'bg-white/80 border-[#0D2B4E]/10 hover:bg-white hover:border-[#B8964A]/50 hover:shadow-md'
                  }`}
                >
                  {/* Timeline Pin Node on the spine */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                      isActive
                        ? 'bg-[#0D2B4E] border-[#B8964A] scale-125 shadow-[0_0_12px_rgba(184,150,74,0.6)]'
                        : 'bg-[#F6F3ED] border-[#0D2B4E]/40 group-hover:border-[#B8964A]'
                    }`}
                  >
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#B8964A]" />}
                  </div>

                  {/* Header Row: Year & Category Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#0D2B4E] font-mono bg-[#F6F3ED] px-2.5 py-0.5 rounded border border-[#0D2B4E]/10">
                        <Calendar className="w-3 h-3 text-[#B8964A]" />
                        {m.year}
                      </span>
                      <span className="text-xs text-[#4B5563] hidden sm:inline">•</span>
                      <span className="text-xs text-[#4B5563] font-medium hidden sm:inline">{m.period}</span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-semibold text-[#B8964A] bg-[#B8964A]/10 px-2 py-0.5 rounded">
                      {getCategoryIcon(m.category)}
                      <span>{m.category}</span>
                    </span>
                  </div>

                  {/* Role Title & Organization */}
                  <h4 className="text-base sm:text-lg font-serif font-medium text-[#0D2B4E] leading-snug group-hover:text-[#0D2B4E] mb-1">
                    {m.role}
                  </h4>
                  <div className="text-xs font-semibold text-[#B8964A] uppercase tracking-wide mb-2">
                    {m.organization}
                  </div>

                  {/* Short Summary */}
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed line-clamp-2 font-light mb-3">
                    {m.headline}
                  </p>

                  {/* Quick Metric Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#0D2B4E]/5">
                    {m.metrics.slice(0, 2).map((metric, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#F6F3ED] text-[11px] text-[#0D2B4E] font-medium border border-[#0D2B4E]/10"
                      >
                        <span className="font-semibold text-[#B8964A]">{metric.value}</span>
                        <span className="text-[#4B5563]">{metric.label}</span>
                      </span>
                    ))}

                    <span className="ml-auto inline-flex items-center gap-1 text-[11px] font-bold text-[#0D2B4E] group-hover:text-[#B8964A] uppercase tracking-wider">
                      <span>{isActive ? 'Active Focus' : 'Inspect'}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'rotate-90 text-[#B8964A]' : 'group-hover:translate-x-0.5'}`} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Active Milestone Deep-Dive Spotlight Card */}
        <div className="lg:col-span-6 lg:sticky lg:top-28">
          <article
            id="timeline-active-dossier"
            className="bg-gradient-to-br from-[#0D2B4E] via-[#0A2540] to-[#060F1A] text-white p-7 sm:p-9 rounded-2xl shadow-2xl border border-[#B8964A]/30 relative overflow-hidden space-y-6"
          >
            {/* Background Decorative Rings */}
            <div
              className="absolute -right-16 -top-16 w-64 h-64 border border-[#B8964A]/20 rounded-full pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -right-8 -bottom-8 w-48 h-48 border border-white/5 rounded-full pointer-events-none"
              aria-hidden="true"
            />

            {/* Top Badge & Era Header */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8964A]/20 border border-[#B8964A]/40 text-[#E6D2A8] text-xs font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8964A] animate-pulse" />
                <span>{activeMilestone.badge}</span>
              </div>

              <div className="text-right">
                <div className="text-sm font-mono font-bold text-[#E6D2A8]">{activeMilestone.year}</div>
                <div className="text-[11px] text-white/60 font-light">{activeMilestone.period}</div>
              </div>
            </div>

            {/* Role & Organization Display */}
            <div className="relative z-10 space-y-1">
              <div className="text-xs uppercase tracking-widest text-[#B8964A] font-semibold">
                {activeMilestone.organization}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium leading-tight text-white">
                {activeMilestone.role}
              </h3>
              <div className="text-sm font-medium text-white/90 italic pt-1">
                &ldquo;{activeMilestone.headline}&rdquo;
              </div>
            </div>

            {/* Strategic Overview Summary */}
            <div className="relative z-10 p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white/80 leading-relaxed font-light">
              {activeMilestone.summary}
            </div>

            {/* Key Verified Metrics Grid */}
            <div className="relative z-10">
              <div className="text-xs uppercase tracking-widest font-bold text-[#E6D2A8] mb-3 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[#B8964A]" />
                <span>Quantifiable Outcomes &amp; Leadership Proof</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {activeMilestone.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-white/[0.08] border border-white/15 text-center flex flex-col justify-center"
                  >
                    <div className="font-serif text-xl sm:text-2xl font-medium text-[#E6D2A8]">
                      {metric.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-white/70 mt-0.5">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Strategic Achievements */}
            <div className="relative z-10 space-y-2.5">
              <div className="text-xs uppercase tracking-widest font-bold text-[#E6D2A8] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B8964A]" />
                <span>Strategic Roadmap &amp; Execution</span>
              </div>
              <div className="space-y-2">
                {activeMilestone.keyAchievements.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-white/85 bg-white/[0.04] p-2.5 rounded-lg border border-white/5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#B8964A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Stakeholders */}
            <div className="relative z-10 pt-4 border-t border-white/10 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/70">
                <Users className="w-3.5 h-3.5 text-[#B8964A]" />
                <span>Institutional Partners &amp; Regulatory Environment</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeMilestone.stakeholders.map((s, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2.5 py-1 rounded bg-white/10 border border-white/10 text-white/90 font-light"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Competency Tags Ribbon */}
            <div className="relative z-10 flex flex-wrap items-center gap-1.5 pt-2">
              <Tag className="w-3 h-3 text-[#B8964A] mr-1" />
              {activeMilestone.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] uppercase tracking-wider text-[#E6D2A8] bg-[#B8964A]/10 px-2 py-0.5 rounded border border-[#B8964A]/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Optional Link to Deep Dive Case Study if applicable */}
            {onSelectCaseStudy && activeMilestone.id.includes('roya') && (
              <div className="pt-2">
                <button
                  onClick={() => onSelectCaseStudy('roya-media-group')}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#B8964A] text-[#060F1A] font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-[#C9A66B] transition-colors shadow-md"
                >
                  <span>Open Roya Media Ramadan Blueprint</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {onSelectCaseStudy && activeMilestone.id.includes('the-journal') && (
              <div className="pt-2">
                <button
                  onClick={() => onSelectCaseStudy('the-journal-sovereign')}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#B8964A] text-[#060F1A] font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-[#C9A66B] transition-colors shadow-md"
                >
                  <span>Open The Journal (WEF/EIB) Blueprint</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {onSelectCaseStudy && activeMilestone.id.includes('soul-arabia') && (
              <div className="pt-2">
                <button
                  onClick={() => onSelectCaseStudy('soul-arabia')}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#B8964A] text-[#060F1A] font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-[#C9A66B] transition-colors shadow-md"
                >
                  <span>Open Soul Arabia Blueprint</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
};
