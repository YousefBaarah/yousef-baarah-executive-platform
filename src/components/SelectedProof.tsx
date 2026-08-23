import React, { useState } from 'react';
import { PROOF_METRICS } from '../data/profileData';
import { TrendingUp, Building2, Eye, ShieldCheck } from 'lucide-react';

export const SelectedProof: React.FC = () => {
  const [activeMetricId, setActiveMetricId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Proof Points' },
    { id: 'Institutional Influence', label: 'Institutional' },
    { id: 'Broadcast & Audience Scale', label: 'Broadcast' },
    { id: 'Digital Growth & Scale', label: 'Digital Reach' },
    { id: 'Commercial Value', label: 'Commercial ROI' },
    { id: 'Luxury & Hospitality Portfolio', label: 'Luxury & Hospitality' },
  ];

  const filteredMetrics =
    filterCategory === 'all'
      ? PROOF_METRICS
      : PROOF_METRICS.filter((m) => m.impactCategory === filterCategory);

  return (
    <section
      id="proof"
      className="py-24 bg-[#0D2B4E] text-white relative overflow-hidden"
      aria-labelledby="proof-title"
    >
      {/* Background Subtle Watermark */}
      <div
        className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full border border-white/5 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/4 top-0 w-64 h-64 rounded-full border border-[#B8964A]/10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 items-end">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-widest text-[#B8964A] font-bold flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#B8964A]" />
              <span>02 / Selected Proof</span>
            </div>
            <h2
              id="proof-title"
              className="text-4xl sm:text-5xl font-serif font-medium leading-[1.02] text-white"
            >
              Evidence before adjectives.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl font-light">
              Selected outcomes from institutional communications, national broadcast networks, luxury lifestyle platforms and sovereign partnership ecosystems across MENA.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3 py-1.5 rounded text-xs uppercase tracking-wider font-semibold transition-all ${
                filterCategory === cat.id
                  ? 'bg-[#B8964A] text-[#060F1A] shadow-sm'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMetrics.map((metric) => {
            const isExpanded = activeMetricId === metric.id;

            return (
              <article
                key={metric.id}
                id={`metric-${metric.id}`}
                onClick={() => setActiveMetricId(isExpanded ? null : metric.id)}
                className={`relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] border p-8 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between ${
                  isExpanded
                    ? 'border-[#B8964A] shadow-2xl bg-white/[0.12] -translate-y-1'
                    : 'border-white/15 hover:border-[#B8964A]/60 hover:bg-white/[0.09] hover:-translate-y-0.5'
                }`}
              >
                {/* Decorative circular watermarked corner */}
                <div
                  className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full border border-[#B8964A]/20 pointer-events-none"
                  aria-hidden="true"
                />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase font-semibold text-[#E6D2A8] px-2.5 py-1 rounded bg-[#B8964A]/15 border border-[#B8964A]/30">
                      <Building2 className="w-3 h-3 text-[#B8964A]" />
                      {metric.organization}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-white/50">
                      {metric.impactCategory}
                    </span>
                  </div>

                  {/* Stat Number */}
                  <div className="font-serif text-5xl sm:text-6xl font-medium tracking-tight text-white mb-2 flex items-baseline gap-1">
                    {metric.prefix && (
                      <span className="text-3xl sm:text-4xl text-[#E6D2A8] font-light">
                        {metric.prefix}
                      </span>
                    )}
                    <span>{metric.value}</span>
                    {metric.suffix && (
                      <span className="text-3xl sm:text-4xl text-[#E6D2A8]">
                        {metric.suffix}
                      </span>
                    )}
                  </div>

                  {/* Stat Headline */}
                  <h3 className="text-sm font-semibold text-white/95 uppercase tracking-wide mb-3">
                    {metric.label}
                  </h3>

                  {/* Detail Narrative */}
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                    {metric.detail}
                  </p>
                </div>

                {/* Footer status pill */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                  <span className="inline-flex items-center gap-1 text-[#E6D2A8]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B8964A]" />
                    <span>Verified Organizational Proof</span>
                  </span>
                  <span className="text-[11px] text-[#B8964A] font-semibold uppercase tracking-wider flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{isExpanded ? 'Collapse' : 'Details'}</span>
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Proof Assurance Banner */}
        <div className="mt-12 p-6 rounded-lg bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#B8964A] shrink-0" />
            <span>
              All metrics grounded in official institutional releases, verified broadcast ratings (Roya Ramadan 2024), platform analytics, and audited partnership agreements.
            </span>
          </div>
          <a
            href="#work"
            className="shrink-0 text-[#E6D2A8] hover:text-white uppercase tracking-widest font-semibold text-[11px] flex items-center gap-1"
          >
            <span>Explore Case Studies</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
