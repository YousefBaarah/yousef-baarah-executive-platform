import React, { useState } from 'react';
import { MapPin, Globe2, Compass, CheckCircle2, ShieldCheck } from 'lucide-react';
import { RegionalStakeholderEcosystem } from './RegionalStakeholderEcosystem';

export const RegionalPerspective: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<'jeddah' | 'amman' | 'gcc'>('amman');

  const hubs = [
    {
      id: 'jeddah',
      name: 'Jeddah / Saudi Arabia',
      label: 'Roots & GCC Intuition',
      role: 'Foundational Knowledge & Cultural Instinct',
      points: [
        'Raised in Jeddah with deep-rooted understanding of Gulf business protocol and social etiquette.',
        'Intimate familiarity with Saudi Vision 2030 cultural modernization and media transformation.',
        'High-context relationship management style adapted for senior GCC stakeholders.',
      ],
    },
    {
      id: 'amman',
      name: 'Amman / Jordan',
      label: 'Operational & Sovereign Base',
      role: 'National Media, Sovereign Publishing & Chamber PR',
      points: [
        'Communications Manager for Roya Media Group (50.3% national Ramadan viewership share).',
        'Head of PR, Communications & Promotion (Executive Consultancy) for Amman Chamber of Industry.',
        'Architected The Journal with WEF, EIB, Jordan Investment Commission and Ministry of Planning.',
      ],
    },
    {
      id: 'gcc',
      name: 'Wider MENA & GCC Markets',
      label: 'Regional Reach & Luxury',
      role: 'Cross-Border Partnerships & Luxury Accounts',
      points: [
        'Built Soul Arabia lifestyle platform reaching 48.3M across Saudi Arabia, UAE, Kuwait and Levant.',
        '10+ years managing communications partnership with Philip Morris Jordan & ASDA’A Burson-Marsteller.',
        'Managed advertising, editorial and event activations across all 5-star hotel groups in Jordan.',
      ],
    },
  ];

  const currentHubData = hubs.find((h) => h.id === selectedHub) || hubs[1];

  return (
    <section
      id="regional"
      className="py-24 bg-[#060F1A] text-white relative overflow-hidden"
      aria-labelledby="regional-title"
    >
      {/* Background Subtle Route Lines */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#B8964A_1px,transparent_1px)] [background-size:28px_28px] opacity-5 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Quote & Graphic Corridor */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#B8964A] font-bold flex items-center gap-2 mb-3">
                <span className="w-6 h-[1px] bg-[#B8964A]" />
                <span>04 / Regional Perspective</span>
              </div>
              <h2
                id="regional-title"
                className="text-4xl sm:text-5xl font-serif font-medium leading-[1.05] text-white"
              >
                Built across markets. Fluent in the region.
              </h2>
            </div>

            {/* Stylized Regional Corridor Graphic Card */}
            <div className="relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 rounded-xl p-6 sm:p-8 overflow-hidden shadow-2xl">
              {/* Concentric rings */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#B8964A]/25 rounded-full pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 border border-white/10 rounded-full pointer-events-none"
                aria-hidden="true"
              />

              {/* Connecting Flight Route Line */}
              <div className="relative py-8 flex flex-col justify-between gap-6 z-10">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white">
                  <span className="flex items-center gap-1.5 text-[#E6D2A8]">
                    <MapPin className="w-4 h-4 text-[#B8964A]" />
                    Jeddah
                  </span>
                  <span className="h-[1px] flex-1 mx-3 bg-gradient-to-r from-[#B8964A] to-white/20 border-t border-dashed border-[#B8964A]/60" />
                  <span className="flex items-center gap-1.5 text-[#E6D2A8]">
                    <Compass className="w-4 h-4 text-[#B8964A]" />
                    Amman
                  </span>
                  <span className="h-[1px] flex-1 mx-3 bg-gradient-to-r from-white/20 to-[#B8964A] border-t border-dashed border-[#B8964A]/60" />
                  <span className="flex items-center gap-1.5 text-[#E6D2A8]">
                    <Globe2 className="w-4 h-4 text-[#B8964A]" />
                    GCC
                  </span>
                </div>

                <div className="text-center pt-2">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                    Jeddah · Amman · Riyadh · Dubai
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-white/70 italic text-center">
                &ldquo;Understanding the unwritten rules of regional governance, media hierarchies and commercial negotiations.&rdquo;
              </div>
            </div>

            {/* Quick badges */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-sm font-serif font-medium text-[#E6D2A8]">Jeddah</div>
                <div className="text-[10px] text-white/60 uppercase">Raised &amp; Formed</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-sm font-serif font-medium text-[#E6D2A8]">Amman</div>
                <div className="text-[10px] text-white/60 uppercase">Executive Leadership</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-sm font-serif font-medium text-[#E6D2A8]">GCC</div>
                <div className="text-[10px] text-white/60 uppercase">Cross-Border Reach</div>
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth Narrative & Interactive Hub Explorer */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base text-white/80 leading-relaxed font-light">
              <p>
                Raised in <strong className="text-white font-medium">Jeddah</strong> and professionally developed across <strong className="text-white font-medium">Jordan and the wider MENA/GCC</strong> communications environment, I bring a practical understanding of the cultural, institutional and relationship dynamics that shape business across the region.
              </p>
              <p>
                My career spans national broadcast networks, governmental chambers of industry, sovereign investment publishing with global institutions (WEF, EIB), premium lifestyle media platforms, and multinational corporate partnerships (such as Philip Morris International).
              </p>
            </div>

            {/* 3 Core Pillars of Regional Competency */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-white/[0.04] border border-white/10">
                <div className="text-xs uppercase tracking-widest font-bold text-[#E6D2A8] mb-1">
                  GCC Business Culture
                </div>
                <p className="text-xs text-white/70">
                  Instinctive understanding of executive protocol, family office dynamics, and high-trust relationship networks.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/[0.04] border border-white/10">
                <div className="text-xs uppercase tracking-widest font-bold text-[#E6D2A8] mb-1">
                  Arabic / English Fluency
                </div>
                <p className="text-xs text-white/70">
                  Native Arabic mastery with fluent executive English for diplomatic, governmental, and multinational corporate rooms.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/[0.04] border border-white/10">
                <div className="text-xs uppercase tracking-widest font-bold text-[#E6D2A8] mb-1">
                  Cross-Sector Fluency
                </div>
                <p className="text-xs text-white/70">
                  Proven agility bridging sovereign ministries, luxury hospitality, national broadcasters, and Fortune 500 accounts.
                </p>
              </div>
            </div>

            {/* Interactive Hub Detail Selector */}
            <div className="pt-4 border-t border-white/10">
              <div className="text-xs uppercase tracking-widest font-bold text-[#E6D2A8] mb-3">
                Explore Market Footprint:
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {hubs.map((hub) => (
                  <button
                    key={hub.id}
                    onClick={() => setSelectedHub(hub.id as any)}
                    className={`px-4 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-all ${
                      selectedHub === hub.id
                        ? 'bg-[#B8964A] text-[#060F1A] shadow-md'
                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                    }`}
                  >
                    {hub.name}
                  </button>
                ))}
              </div>

              {/* Selected Hub Details Card */}
              <div className="p-5 rounded-lg bg-white/[0.06] border border-[#B8964A]/30 space-y-3 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-serif font-medium text-white">
                    {currentHubData.name}
                  </span>
                  <span className="text-[11px] text-[#E6D2A8] font-medium uppercase tracking-wider">
                    {currentHubData.label}
                  </span>
                </div>

                <div className="space-y-2">
                  {currentHubData.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-white/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B8964A] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Stakeholder Ecosystem & Alliances Map */}
        <RegionalStakeholderEcosystem />
      </div>
    </section>
  );
};
