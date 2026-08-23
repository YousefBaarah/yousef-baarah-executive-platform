import React, { useState } from 'react';
import { STRATEGIC_PILLARS } from '../data/profileData';
import { ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import { StrategicRadialMap } from './StrategicRadialMap';

export const StrategicRelevance: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string | null>(null);

  return (
    <section
      id="alignment"
      className="py-24 bg-[#F6F3ED] text-[#0D2B4E] border-b border-[#0D2B4E]/10"
      aria-labelledby="alignment-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 items-end">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-widest text-[#B8964A] font-bold flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#B8964A]" />
              <span>01 / Strategic Relevance</span>
            </div>
            <h2
              id="alignment-title"
              className="text-4xl sm:text-5xl font-serif font-medium leading-[1.02] text-[#0D2B4E]"
            >
              Where communications becomes a strategic asset.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl font-light">
              The strongest contribution I make is helping organisations translate business priorities into a coherent narrative, stronger stakeholder alignment, elevated brand stewardship and measurable organisational value.
            </p>
          </div>
        </div>

        {/* 4 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STRATEGIC_PILLARS.map((pillar) => {
            const isSelected = selectedPillarId === pillar.id;

            return (
              <article
                key={pillar.id}
                id={`pillar-${pillar.id}`}
                onClick={() => setSelectedPillarId(isSelected ? null : pillar.id)}
                className={`group relative bg-white border p-7 rounded-lg transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#B8964A] shadow-xl ring-2 ring-[#B8964A]/20 -translate-y-1'
                    : 'border-[#0D2B4E]/10 hover:border-[#B8964A]/60 hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                {/* Top Gold Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-lg transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#B8964A]'
                      : 'bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#B8964A] group-hover:to-transparent'
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-medium text-[#B8964A]">
                      {pillar.number}
                    </span>
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-[#4B5563] px-2 py-0.5 rounded bg-[#F6F3ED]">
                      Capability
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-[#0D2B4E] leading-tight mb-3 group-hover:text-[#0D2B4E]">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Key Bullet Highlights */}
                <div className="border-t border-[#0D2B4E]/5 pt-4 mt-auto">
                  <div className="space-y-2 text-xs text-[#4B5563]">
                    {pillar.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8964A] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 flex items-center justify-between text-[11px] font-semibold text-[#0D2B4E] uppercase tracking-wider">
                    <span className="text-[#B8964A] group-hover:underline">
                      {isSelected ? 'Active Focus' : 'Strategic Focus'}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 text-[#B8964A] transition-transform duration-200 ${isSelected ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Interactive D3 Radial Convergence Map */}
        <StrategicRadialMap />

        {/* Value Bridge Summary Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#0D2B4E] to-[#173C5E] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#B8964A]/20 text-[#E6D2A8] shrink-0 mt-1">
              <Sparkles className="w-6 h-6 text-[#B8964A]" />
            </div>
            <div>
              <h4 className="text-lg font-serif font-medium text-white mb-1">
                The Integrated Communications Mandate
              </h4>
              <p className="text-sm text-white/80 max-w-2xl">
                Connecting board priorities, corporate affairs, media relations and commercial outcomes into one singular, accountable execution framework across the Levant and Gulf.
              </p>
            </div>
          </div>
          <a
            href="#proof"
            className="shrink-0 px-5 py-2.5 bg-[#B8964A] text-[#060F1A] font-bold text-xs uppercase tracking-widest rounded hover:bg-[#C9A66B] transition-colors"
          >
            Review Evidence & Proof
          </a>
        </div>
      </div>
    </section>
  );
};
