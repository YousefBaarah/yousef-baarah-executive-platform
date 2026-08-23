import React, { useState } from 'react';
import { PRINCIPLES } from '../data/profileData';
import { Quote, ChevronDown, CheckCircle2 } from 'lucide-react';

export const ExecutivePerspective: React.FC = () => {
  const [expandedPrinciple, setExpandedPrinciple] = useState<string | null>('p1');

  return (
    <section
      id="perspective"
      className="py-24 bg-[#F6F3ED] text-[#0D2B4E] border-b border-[#0D2B4E]/10"
      aria-labelledby="perspective-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 items-end">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-widest text-[#B8964A] font-bold flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#B8964A]" />
              <span>05 / Executive Perspective</span>
            </div>
            <h2
              id="perspective-title"
              className="text-4xl sm:text-5xl font-serif font-medium leading-[1.02] text-[#0D2B4E]"
            >
              How I think.
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] mt-3 font-light leading-relaxed">
              Operating principles honed across 15+ years at the intersection of media, corporate strategy and reputation.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="p-6 rounded-xl bg-white border border-[#0D2B4E]/10 shadow-sm flex items-start gap-4">
              <Quote className="w-8 h-8 text-[#B8964A] shrink-0 mt-1 opacity-80" />
              <div className="text-sm sm:text-base text-[#0D2B4E] leading-relaxed font-serif italic">
                &ldquo;True communications leadership is not about generating noise; it is about building enduring institutional credibility, aligning stakeholders, and driving measurable value.&rdquo;
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRINCIPLES.map((principle, index) => {
            const isExpanded = expandedPrinciple === principle.id;

            return (
              <article
                key={principle.id}
                id={`principle-${principle.id}`}
                onClick={() => setExpandedPrinciple(isExpanded ? null : principle.id)}
                className={`group relative bg-white border p-7 sm:p-8 rounded-xl transition-all duration-300 cursor-pointer ${
                  isExpanded
                    ? 'border-[#B8964A] shadow-xl ring-2 ring-[#B8964A]/20'
                    : 'border-[#0D2B4E]/10 hover:border-[#B8964A]/60 hover:shadow-md'
                }`}
              >
                {/* Left Gold Marker */}
                <div
                  className={`absolute left-0 top-6 bottom-6 w-1 rounded-r transition-all duration-300 ${
                    isExpanded ? 'bg-[#B8964A]' : 'bg-[#0D2B4E]/20 group-hover:bg-[#B8964A]'
                  }`}
                />

                <div className="pl-3">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs uppercase tracking-widest text-[#B8964A] font-bold">
                      Principle 0{index + 1}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#B8964A] transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0D2B4E] leading-tight mb-4 group-hover:text-[#0D2B4E]">
                    {principle.quote}
                  </h3>

                  <p className="text-sm text-[#4B5563] leading-relaxed font-light">
                    {principle.explanation}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#0D2B4E]/5 flex items-center gap-1.5 text-[11px] text-[#B8964A] font-semibold uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Executive Standard</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
