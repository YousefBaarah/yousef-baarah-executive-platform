import {
  StrategicPillar,
  ProofMetric,
  CaseStudy,
  Principle,
  CareerRole,
  TimelineMilestone,
  EducationItem,
  CertificationItem,
} from '../types';

export const PROFILE_INFO = {
  name: 'Yousef G. Baarah',
  title: 'Strategic Communications, Brand & Reputation Executive',
  shortTitle: 'Strategic Communications & Brand Executive',
  tagline: 'Strategic Communications • Brand Leadership • Public Relations • Reputation Management',
  summary:
    'I turn business priorities into visibility, credibility, influence, and measurable outcomes — bridging strategy, public narrative, media, brand and stakeholder value.',
  context:
    'A regional executive perspective for organisations navigating complex stakeholders, reputation, growth and transformation.',
  email: 'yousefgbaarah@gmail.com',
  phone: '+962 7 7933-3384',
  location: 'Amman, Jordan (MENA / GCC Perspective)',
  linkedin: 'https://www.linkedin.com/in/yousefgbaarah/',
  behance: 'https://behance.net/YGB',
  experienceYears: '15+ Years',
  regions: 'Jordan · MENA · GCC',
  languages: 'Arabic (Native) · English (Fluent) · French (Elementary)',
};

export const STRATEGIC_PILLARS: StrategicPillar[] = [
  {
    id: 'corporate-narrative',
    number: '01',
    title: 'Corporate Narrative',
    description:
      'Aligning organisational priorities, leadership voice and external communication into one coherent, high-conviction story.',
    keyPoints: [
      'Translating board & C-suite mandates into compelling institutional narratives',
      'Executive speechwriting, thought leadership & high-stakes message alignment',
      'Cross-platform narrative governance across digital, broadcast & print channels',
    ],
  },
  {
    id: 'institutional-positioning',
    number: '02',
    title: 'Institutional Positioning',
    description:
      'Strengthening credibility, reputation, executive visibility and stakeholder confidence in complex regional environments.',
    keyPoints: [
      'Reputation safeguarding, issue triage & crisis communications planning',
      'High-level media relations & sovereign/ministry institutional partnership alignment',
      'Cultivating multi-year trust with key regional industry & governmental leaders',
    ],
  },
  {
    id: 'regional-stakeholder-strategy',
    number: '03',
    title: 'Regional Stakeholder Strategy',
    description:
      'Connecting communications with media, government, commercial partners, customers and broader MENA/GCC business ecosystems.',
    keyPoints: [
      'Bilingual mastery bridging GCC corporate standards and local cultural nuances',
      'Mobilising public-private investment partnerships & multi-stakeholder initiatives',
      'Connecting regional media ecosystems across Jordan, Saudi Arabia (Jeddah/Riyadh) & the UAE',
    ],
  },
  {
    id: 'brand-digital-transformation',
    number: '04',
    title: 'Brand & Digital Transformation',
    description:
      'Bringing brand, content, digital channels, media assets and commercial execution closer to strategic business priorities.',
    keyPoints: [
      'Driving organic reach, audience acquisition and digital audience engagement at scale',
      'Commercialisation through sponsorships, high-tier hospitality partnerships and branded content',
      'Modern marketing analytics, ROI attribution and campaign optimization',
    ],
  },
];

export const PROOF_METRICS: ProofMetric[] = [
  {
    id: 'journal-investment',
    value: '1.2M',
    prefix: 'US$',
    label: 'Partnership / Programme Value Mobilised',
    detail:
      "Conceived, built and executed The Journal: Jordan's Annual Investment Guide in strategic alignment with WEF, EIB, Jordan Investment Commission (JIC) and Ministry of Planning.",
    organization: 'The Journal / Al-Faridah',
    impactCategory: 'Institutional Influence',
  },
  {
    id: 'roya-viewership',
    value: '50.3%',
    label: 'National TV Viewership Share',
    detail:
      'Supported Roya Media Group’s dominant 50.3% national audience share during Ramadan 2024; reduced ad expenditure by 65% while increasing reach by 35% through channel optimization.',
    organization: 'Roya Media Group',
    impactCategory: 'Broadcast & Audience Scale',
  },
  {
    id: 'soul-arabia-reach',
    value: '48.3M',
    label: 'Audience Reach Generated',
    detail:
      'Built Soul Arabia lifestyle platform from launch to 48.3M reach, 62.1M impressions and 400K+ followers from zero organic baseline.',
    organization: 'Soul Arabia',
    impactCategory: 'Digital Growth & Scale',
  },
  {
    id: 'soul-arabia-commercial',
    value: '300K+',
    prefix: 'US$',
    label: 'Commercial Outcomes Generated',
    detail:
      'Generated over US$300,000 in direct commercial outcomes over 32 months through luxury brand sponsorships, strategic partnerships, and integrated campaigns.',
    organization: 'Soul Arabia',
    impactCategory: 'Commercial Value',
  },
  {
    id: 'venture-traffic',
    value: '400%',
    label: 'Website Traffic Growth',
    detail:
      "Expanded Venture Magazine's digital audience by 400% while managing press relations, events and advertising across all five-star hotels in Jordan.",
    organization: 'Venture Magazine',
    impactCategory: 'Luxury & Hospitality Portfolio',
  },
  {
    id: 'aci-media-increase',
    value: '45%',
    label: 'Institutional Media Coverage Increase',
    detail:
      'Redesigned institutional PR and press-engagement strategy for Amman Chamber of Industry, supporting national industrial initiatives.',
    organization: 'Amman Chamber of Industry',
    impactCategory: 'Institutional Communications',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'the-journal',
    category: 'Institutional Influence',
    title: 'The Journal: Jordan’s Annual Investment Guide',
    organization: 'Al-Faridah / Arabia Group',
    timeframe: 'Strategic Initiative',
    leadResult: 'US$1.2M partnership & programme value mobilised with sovereign institutions.',
    description:
      'Designed, developed, and published an authoritative investment-focused platform and partnership ecosystem connecting high-level editorial authority with sovereign institutions and global development partners.',
    challenge:
      'Jordan’s national investment landscape required a unified, premium, authoritative publication and stakeholder platform to showcase sovereign investment opportunities to international delegates and institutional investors.',
    strategicApproach: [
      'Conceived an annual flagship publication bridging public policy with private capital insights.',
      'Secured high-level institutional partnerships with the World Economic Forum (WEF), European Investment Bank (EIB), Jordan Investment Commission (JIC), and Ministry of Planning.',
      'Curated macroeconomic analysis, executive interviews with ministers and CEOs, and strategic sectoral roadmaps.',
      'Managed distribution across international diplomatic missions, bilateral summits, and investment delegations.',
    ],
    metrics: [
      { label: 'Programme Value', value: 'US$1.2M' },
      { label: 'Institutional Partners', value: 'WEF, EIB, JIC' },
      { label: 'Distribution', value: 'International & GCC' },
    ],
    stakeholders: [
      'World Economic Forum (WEF)',
      'European Investment Bank (EIB)',
      'Jordan Investment Commission',
      'Ministry of Planning and International Cooperation',
    ],
  },
  {
    id: 'roya-media-group',
    category: 'National-Scale Communications',
    title: 'Roya Media Group: Ramadan Campaign & Growth',
    organization: 'Roya Media Group',
    timeframe: 'Feb 2024 – Jul 2024',
    leadResult: '50.3% national viewership share; 65% ad-spend reduction with 35% reach increase.',
    description:
      'Directed executive messaging, media relations, media planning and cross-functional campaign coordination during the most critical high-volume broadcasting window of the year.',
    challenge:
      'During Ramadan, television and digital entertainment viewership in Jordan and the Levant experiences peak competition. The mandate required maintaining market leadership while drastically optimizing marketing spend.',
    strategicApproach: [
      'Conducted an exhaustive communications audit to eliminate underperforming marketing channels and double down on high-ROI touchpoints.',
      'Orchestrated press conferences, media screenings, and executive talent visibility campaigns for flagship Ramadan programming.',
      'Aligned digital streaming (Roya App) and linear television promotion into a synchronized omnichannel engine.',
      'Earned early promotion within 2 months against Roya’s standard 6-month evaluation timeline.',
    ],
    metrics: [
      { label: 'National TV Share', value: '50.3%' },
      { label: 'Ad-Spend Reduction', value: '-65%' },
      { label: 'Audience Reach', value: '+35%' },
      { label: 'Executive Track', value: 'Promoted in 2 Mos' },
    ],
    stakeholders: [
      'Roya TV Leadership',
      'National & Regional Media Outlets',
      'Major Commercial Advertisers',
      'Regional Digital Streaming Audiences',
    ],
  },
  {
    id: 'soul-arabia',
    category: 'Premium Brand & Commercial Growth',
    title: 'Soul Arabia: Launch & Commercial Scalability',
    organization: 'Soul Arabia',
    timeframe: 'Feb 2022 – Dec 2025',
    leadResult: '48.3M reach, 62.1M impressions, 400K+ community, US$300K+ revenue.',
    description:
      'Built a luxury and premium lifestyle digital media platform from ground zero into a prominent regional voice, integrating editorial prestige with direct commercial monetization.',
    challenge:
      'Launching a new digital lifestyle publication in a saturated regional market with zero initial audience, requiring pristine brand positioning that appeals to both discerning consumers and luxury global brands.',
    strategicApproach: [
      'Architected luxury brand guidelines, editorial codes, video formats, and visual standards that established immediate prestige.',
      'Developed tailored commercial partnership frameworks spanning luxury automotive, fashion, haute horlogerie, and premium hospitality.',
      'Led cross-functional editorial, creative, and video production teams to generate high-engagement viral and high-affinity content.',
      'Delivered structured executive ROI performance reporting connecting social engagement with tangible client commercial ROI.',
    ],
    metrics: [
      { label: 'Total Reach', value: '48.3M' },
      { label: 'Impressions', value: '62.1M' },
      { label: 'Instagram Following', value: '400K+' },
      { label: 'Commercial Revenue', value: 'US$300K+' },
    ],
    stakeholders: [
      'Global & Regional Luxury Brands',
      'High-Net-Worth & Youth Audiences across GCC',
      'Creative Agencies & Production Houses',
    ],
  },
  {
    id: 'venture-magazine',
    category: 'Digital & Commercial Transformation',
    title: 'Venture Magazine & Luxury Hospitality Ecosystem',
    organization: 'Al-Faridah / Arabia Group',
    timeframe: '2011 – 2022 (Tenure)',
    leadResult: '400% website traffic growth across luxury hospitality & corporate accounts.',
    description:
      'Progressed through senior editorial, marketing, and business development leadership across Jordan’s premier business publication, managing strategic advertising and press relationships across all 5-star hotels in Jordan.',
    challenge:
      'Adapting legacy print prestige into a high-growth digital presence while sustaining essential long-term corporate advertising partnerships during shifting media landscapes.',
    strategicApproach: [
      'Served as principal communications partner for Philip Morris Jordan for over 10 years, coordinating executive features with ASDA’A Burson-Marsteller and participating in global HQ sessions in Lausanne.',
      'Built and managed marketing partnerships across all five-star hotel properties in Jordan (Four Seasons, Ritz-Carlton, St. Regis, Marriott, Hyatt, etc.).',
      'Transformed Venture’s editorial calendar into high-value corporate special reports, CEO roundtables, and industry awards.',
      'Led marketing and business development for Amman TV, generating US$30K/month in incremental revenue through operational packaging.',
    ],
    metrics: [
      { label: 'Web Traffic Growth', value: '400%' },
      { label: 'Media Assets Produced', value: '3,000+' },
      { label: 'Hospitality Portfolio', value: 'All 5-Star Hotels' },
      { label: 'Key Partnership', value: '10+ Yrs with PMI' },
    ],
    stakeholders: [
      'Philip Morris International (PMI)',
      'ASDA’A Burson-Marsteller',
      "Jordan's 5-Star Luxury Hotels Ecosystem",
      '80+ Regional Corporate Brand Accounts',
    ],
  },
];

export const PRINCIPLES: Principle[] = [
  {
    id: 'p1',
    quote: '“I don’t do visibility without value.”',
    explanation:
      'Impressions and press mentions are meaningless vanity metrics unless they protect reputation, drive stakeholder trust, align internal culture, or generate measurable commercial and strategic outcomes.',
  },
  {
    id: 'p2',
    quote: '“I bridge strategy and execution.”',
    explanation:
      'Vision without rigorous execution is mere abstraction. The real competitive advantage lies in translating board-level directives into flawlessly executed campaigns, disciplined brand stewardship, and cross-functional momentum.',
  },
  {
    id: 'p3',
    quote: '“Media-native. Business-driven.”',
    explanation:
      'Having worked inside national broadcasting groups, digital media publications, and corporate communications desks, I understand the editorial mindset as deeply as the P&L and ROI requirements of executive leadership.',
  },
  {
    id: 'p4',
    quote: '“Communications is a business function — not simply a support function.”',
    explanation:
      'Strategic communications shapes market valuation, crisis resilience, customer loyalty, and governmental alignment. It belongs at the table during decision-making, not just when drafting the press release afterwards.',
  },
];

export const CAREER_HISTORY: CareerRole[] = [
  {
    company: 'Soul Arabia',
    role: 'Head of Marketing & Strategic Partnerships (previously Country Marketing Director)',
    period: 'Feb 2022 – Dec 2025',
    location: 'Amman, Jordan',
    highlights: [
      'Built the premium lifestyle media platform’s public presence from zero, reaching 48.3M reach with 62.1M impressions and growing Instagram following beyond 400,000.',
      'Generated US$300K+ in commercial outcomes over 32 months through strategic sponsorships, brand partnerships and integrated marketing campaigns.',
      'Directed brand positioning, creative campaigns and content strategy while safeguarding brand consistency across public-facing touchpoints.',
      'Served as the organisation’s primary communications lead, overseeing executive messaging, stakeholder communications and brand standards.',
      'Produced executive performance reporting linking communications activity to audience growth, engagement and commercial outcomes.',
    ],
  },
  {
    company: 'Roya Media Group',
    role: 'Communications & Marketing Manager',
    period: 'Feb 2024 – Jul 2024',
    location: 'Amman, Jordan',
    highlights: [
      'Reduced advertising expenditure by 65% while increasing audience reach by 35% through a communications audit, media planning and channel optimisation programme.',
      'Contributed to integrated communications and media-event strategy supporting Roya’s 50.3% national audience share during Ramadan 2024.',
      'Promoted within 2 months against Roya’s standard 6-month evaluation track.',
      'Managed executive messaging, media relations and cross-functional campaign coordination during major national broadcasting periods.',
    ],
  },
  {
    company: 'Amman Chamber of Industry',
    role: 'Head of PR, Communications & Promotion (Executive Consultancy)',
    period: 'Nov 2024 – Feb 2025',
    location: 'Amman, Jordan',
    highlights: [
      'Increased institutional media visibility by 45% through a redesigned PR and press-engagement strategy.',
      'Developed executive messaging and stakeholder communications supporting national industrial initiatives.',
      'Fostered key media alliances across regional economic news bureaus and government ministries.',
    ],
  },
  {
    company: 'Arab Telemedia Group',
    role: 'Senior Communications Consultant (Contract)',
    period: 'Jul 2023 – Dec 2023',
    location: 'Amman, Jordan',
    highlights: [
      'Advised leadership on communications strategy, brand positioning and crisis communications planning for media productions.',
      'Coordinated agency resources and external media outreach across regional markets.',
    ],
  },
  {
    company: 'Al-Faridah / Arabia Group (Venture Magazine & Amman TV)',
    role: 'Progressive Communications, Business Development & Editorial Leadership',
    period: '2011 – 2022',
    location: 'Amman, Jordan',
    highlights: [
      'Progressed through increasingly senior roles across Venture Magazine and Amman TV, culminating in Marketing & Business Development Manager.',
      'Managed advertising partnerships, press relations, event exposure and editorial coverage across Venture Magazine’s luxury hospitality and corporate portfolio, including all five-star hotels in Jordan.',
      'Served as principal communications partner for Philip Morris Jordan for over a decade; coordinated executive feature development and agency collaboration with ASDA’A Burson-Marsteller; invited to PMI’s global headquarters in Lausanne in 2020.',
      'Conceived and developed The Journal: Jordan’s Annual Investment Guide, mobilising US$1.2M in programme value through partnerships with WEF, EIB, Jordan Investment Commission and Ministry of Planning.',
      'Managed public relations and brand communications across a multi-platform media portfolio, producing 3,000+ media assets over the tenure.',
      'Led marketing and business development for Amman TV, generating US$30K/month in incremental revenue through operational and promotional improvements.',
      'Grew Venture Magazine’s website traffic by 400% through integrated content and promotional strategy.',
      'Directed teams of up to 7 specialists across advertising, content and business development functions.',
      'Managed agency-side PR and marketing relationships across 80+ concurrent brand accounts and established media contacts across MENA and the GCC.',
      'Produced executive performance reporting linking Venture Magazine and Amman TV communications and marketing activity to commercial outcomes.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Postgraduate Diploma, Communications Planning',
    institution: 'Miami Ad School / University of Miami',
    year: '2012',
  },
  {
    degree: 'BSc, Management Information Systems (MIS)',
    institution: 'Al-Ahliyya Amman University',
    year: '2009',
  },
];

export const EXECUTIVE_EDUCATION: EducationItem[] = [
  {
    degree: 'Negotiation & Conflict Management',
    institution: 'Harvard Kennedy School',
    year: '2011',
  },
  {
    degree: 'Effective Business Communication',
    institution: 'University of Cambridge',
    year: '2010',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'Google Digital Analytics Certification',
    issuer: 'Google Digital Academy / Skillshop',
    year: '2025',
  },
  {
    name: 'Advanced SEO Toolkit',
    issuer: 'Semrush',
    year: '2025',
  },
  {
    name: 'Business Communications in the Digital Era',
    issuer: 'HP LIFE',
    year: '2025',
  },
  {
    name: 'Corporate Social Responsibility (CSR): A Practical Approach',
    issuer: 'Humanitarian Leadership Academy',
    year: '2025',
  },
  {
    name: 'Claude 101',
    issuer: 'Anthropic Academy',
    year: '2026',
  },
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    id: 'amman-chamber-2024',
    year: '2024 – 2025',
    period: 'Nov 2024 – Feb 2025',
    role: 'Head of PR, Communications & Promotion (Executive Consultancy)',
    organization: 'Amman Chamber of Industry',
    category: 'Institutional',
    badge: 'Institutional Governance & Industrial Policy',
    headline: 'Redesigning Institutional PR & Industrial Sector Media Dominance',
    summary:
      'Spearheaded executive communications overhaul for Jordan’s primary industrial regulatory institution, representing thousands of industrial manufacturers and high-level economic policy bodies.',
    keyAchievements: [
      'Elevated institutional media visibility by 45% across national broadcast news, business dailies, and economic bureaus.',
      'Authored executive messaging and strategic policy communiqués for ministerial summits and export delegations.',
      'Re-engineered crisis communications preparedness and media engagement protocols for industrial leadership.',
    ],
    metrics: [
      { label: 'Media Visibility', value: '+45%' },
      { label: 'Sector Reach', value: 'National' },
      { label: 'Mandate', value: 'Executive Consultancy' },
    ],
    stakeholders: [
      'Ministry of Industry, Trade & Supply',
      'National Industrial Sector Leaders',
      'Economic News Bureaus (MENA)',
    ],
    tags: ['Institutional PR', 'Industrial Policy', 'Media Strategy', 'Stakeholder Diplomacy'],
    featured: true,
  },
  {
    id: 'roya-media-2024',
    year: '2024',
    period: 'Feb 2024 – Jul 2024',
    role: 'Communications & Marketing Manager',
    organization: 'Roya Media Group',
    category: 'Broadcasting',
    badge: 'National Prime-Time Leadership',
    headline: '50.3% Prime-Time Viewership & Rapid 2-Month Executive Promotion',
    summary:
      'Directed executive communications, high-stakes marketing campaigns, and omni-channel media synchronization for Jordan’s leading commercial broadcasting network during peak Ramadan consumption.',
    keyAchievements: [
      'Contributed to capturing 50.3% national TV audience share during Ramadan 2024 against intense regional competition.',
      'Audited marketing channels to slash advertising spend by 65% while simultaneously expanding viewer reach by 35%.',
      'Awarded early promotion within 2 months (accelerating standard 6-month evaluation timeline) for outstanding strategic impact.',
    ],
    metrics: [
      { label: 'TV Audience Share', value: '50.3%' },
      { label: 'Ad-Spend Optimization', value: '-65%' },
      { label: 'Audience Reach', value: '+35%' },
      { label: 'Promotion Pace', value: '2 Months' },
    ],
    stakeholders: [
      'Roya TV C-Suite & Producers',
      'National & Regional Broadcasters',
      'Tier-1 Commercial Sponsors',
    ],
    tags: ['National Broadcasting', 'Ramadan Prime-Time', 'Omni-Channel Strategy', 'Spend Efficiency'],
    featured: true,
  },
  {
    id: 'soul-arabia-2022-2025',
    year: '2022 – 2025',
    period: 'Feb 2022 – Dec 2025',
    role: 'Head of Marketing & Strategic Partnerships',
    organization: 'Soul Arabia',
    category: 'Luxury & Brands',
    badge: 'Regional Platform Architecture & Growth',
    headline: 'Building a 48.3M Reach Luxury Media Powerhouse from Ground Zero',
    summary:
      'Conceived, launched, and scaled an elite lifestyle and luxury digital media platform across Saudi Arabia, the UAE, Kuwait, and the Levant, creating an accountable commercial monetization model.',
    keyAchievements: [
      'Scaled verified platform reach to 48.3M with 62.1M impressions and 400K+ engaged Instagram community.',
      'Delivered US$300K+ in direct commercial revenue through bespoke sponsorships with global luxury houses.',
      'Enforced uncompromising brand governance, editorial aesthetics, and high-production video storytelling.',
    ],
    metrics: [
      { label: 'Total Verified Reach', value: '48.3M' },
      { label: 'Total Impressions', value: '62.1M' },
      { label: 'Community Scale', value: '400K+' },
      { label: 'Commercial Revenue', value: 'US$300K+' },
    ],
    stakeholders: [
      'Global Luxury Houses (Automotive, Watches, Fashion)',
      'GCC High-Net-Worth Demographics',
      'Regional Creative & Production Agencies',
    ],
    tags: ['Luxury Brand Strategy', 'Regional Scale (GCC)', 'Commercial ROI', 'Video Storytelling'],
    featured: true,
  },
  {
    id: 'arab-telemedia-2023',
    year: '2023',
    period: 'Jul 2023 – Dec 2023',
    role: 'Senior Communications Consultant (Contract)',
    organization: 'Arab Telemedia Group',
    category: 'Broadcasting',
    badge: 'Pan-Arab Media Strategy & Crisis Advisory',
    headline: 'Strategic Communications & Crisis Governance for Media Productions',
    summary:
      'Consulted executive leadership on strategic positioning, regional PR rollouts, and crisis management frameworks for large-scale television and streaming productions.',
    keyAchievements: [
      'Formulated crisis communications playbook and reputation safeguard procedures for flagship media IP.',
      'Orchestrated multi-market PR agency deliverables across the Levant and GCC distribution corridors.',
    ],
    metrics: [
      { label: 'Market Scope', value: 'Pan-Arab' },
      { label: 'Advisory Level', value: 'C-Suite Direct' },
      { label: 'Deliverable', value: 'Crisis Protocol' },
    ],
    stakeholders: [
      'Executive Producers & Board',
      'Pan-Arab Media Distributors',
      'External PR & Communications Agencies',
    ],
    tags: ['Crisis Communications', 'Media Production', 'Reputation Defense', 'Regional PR'],
  },
  {
    id: 'the-journal-sovereign-2018-2022',
    year: '2018 – 2022',
    period: '2018 – 2022 (Annual Editions)',
    role: 'Publishing Director & Strategic Communications Architect',
    organization: 'The Journal / Venture Media',
    category: 'Sovereign',
    badge: 'Sovereign Investment & Multilateral Alliances',
    headline: 'US$1.2M Sovereign Investment Guide with WEF, EIB & Ministry of Planning',
    summary:
      'Originated and directed Jordan’s official sovereign investment guide, uniting international development institutions, sovereign wealth delegates, and global business forums.',
    keyAchievements: [
      'Mobilised US$1.2M in sovereign publishing programme value and institutional support.',
      'Partnered directly with the World Economic Forum (WEF), European Investment Bank (EIB), and Jordan Investment Commission.',
      'Distributed high-level investment intelligence to heads of state and global institutional investors at Davos and Dead Sea summits.',
    ],
    metrics: [
      { label: 'Programme Value', value: 'US$1.2M' },
      { label: 'Global Multilaterals', value: 'WEF / EIB' },
      { label: 'Distribution', value: 'Davos & Dead Sea' },
    ],
    stakeholders: [
      'World Economic Forum (WEF)',
      'European Investment Bank (EIB)',
      'Jordan Investment Commission (JIC)',
      'Ministry of Planning & International Cooperation',
    ],
    tags: ['Sovereign Alliances', 'Economic Intelligence', 'Multilateral Diplomacy', 'Institutional Publishing'],
    featured: true,
  },
  {
    id: 'pmi-partnership-2011-2022',
    year: '2011 – 2022',
    period: '2011 – 2022 (Decade Partnership)',
    role: 'Principal Communications Partner & Executive Feature Lead',
    organization: 'Philip Morris Jordan / ASDA’A Burson-Marsteller',
    category: 'Luxury & Brands',
    badge: '10+ Year Global Corporate Partnership',
    headline: 'Decade-Long C-Suite Communications Partnership & Lausanne HQ Invitation',
    summary:
      'Acted as dedicated communications partner for Philip Morris Jordan across an unbroken 10+ year span, stewarding corporate reputation, smoke-free science narratives, and C-suite roundtables.',
    keyAchievements: [
      'Orchestrated multi-year thought leadership campaigns in synergy with ASDA’A Burson-Marsteller.',
      'Personally invited to PMI’s Global Operations Headquarters in Lausanne, Switzerland (2020) for strategic alignment.',
      'Maintained 100% regulatory and brand adherence across sensitive transformation communications.',
    ],
    metrics: [
      { label: 'Tenure Length', value: '10+ Years' },
      { label: 'Corporate Scope', value: 'Fortune 500' },
      { label: 'Global Alignment', value: 'Lausanne HQ' },
    ],
    stakeholders: [
      'Philip Morris International (PMI) Leadership',
      'ASDA’A Burson-Marsteller',
      'Regional Regulatory & Media Authorities',
    ],
    tags: ['Corporate Reputation', 'Long-Term Account Leadership', 'Thought Leadership', 'Fortune 500'],
    featured: true,
  },
  {
    id: 'venture-hospitality-2011-2022',
    year: '2011 – 2022',
    period: '2011 – 2022 (Progressive Leadership)',
    role: 'Marketing & Business Development Manager',
    organization: 'Al-Faridah / Arabia Group (Venture & Amman TV)',
    category: 'Luxury & Brands',
    badge: 'Media Leadership & 5-Star Hospitality Ecosystem',
    headline: '400% Digital Surge & Exclusive 5-Star Hotel Marketing Monopoly',
    summary:
      'Steered marketing, advertising partnerships, and business development across Venture Magazine and Amman TV, orchestrating relationships across Jordan’s entire luxury hospitality sector.',
    keyAchievements: [
      'Secured and maintained advertising and press partnerships across all five-star hotel properties in Jordan (Four Seasons, Ritz-Carlton, St. Regis, Marriott, Hyatt, etc.).',
      'Expanded digital website traffic by 400% through integrated editorial and search optimization.',
      'Generated US$30K/month in incremental broadcast packaging revenue for Amman TV.',
      'Produced 3,000+ high-impact media assets over tenure and managed teams of up to 7 specialists.',
    ],
    metrics: [
      { label: 'Digital Traffic Growth', value: '+400%' },
      { label: 'Hospitality Footprint', value: 'All 5-Star Hotels' },
      { label: 'Assets Produced', value: '3,000+' },
      { label: 'Broadcast Packaging', value: '+US$30K/Mo' },
    ],
    stakeholders: [
      'Jordan 5-Star Luxury Hotels Association',
      '80+ Corporate Brand Accounts',
      'Editorial & Creative Teams (7 Direct Reports)',
    ],
    tags: ['Luxury Hospitality', 'Business Development', 'Team Leadership', 'Digital Transformation'],
  },
  {
    id: 'foundational-executive-education',
    year: '2009 – 2012',
    period: '2009 – 2012',
    role: 'Academic & Executive Specialization',
    organization: 'Harvard Kennedy School · Miami Ad School · Cambridge',
    category: 'Institutional',
    badge: 'Strategic Foundation & Negotiation',
    headline: 'Global Communications Planning & Executive Negotiation Foundations',
    summary:
      'Established dual expertise in Management Information Systems (MIS) and international communications strategy, augmented by executive negotiation credentials at Harvard and Cambridge.',
    keyAchievements: [
      'Postgraduate Diploma in Communications Planning from Miami Ad School / University of Miami.',
      'Executive Negotiation & Conflict Management credential from Harvard Kennedy School.',
      'Effective Business Communication credential from University of Cambridge.',
      'BSc in Management Information Systems (MIS) from Al-Ahliyya Amman University.',
    ],
    metrics: [
      { label: 'Executive Negotiation', value: 'Harvard' },
      { label: 'Comms Planning', value: 'Miami Ad School' },
      { label: 'Systems & Data', value: 'BSc MIS' },
    ],
    stakeholders: [
      'Harvard Kennedy School',
      'Miami Ad School',
      'University of Cambridge',
    ],
    tags: ['Harvard Kennedy School', 'Communications Planning', 'MIS & Data', 'Strategic Negotiation'],
  },
];
