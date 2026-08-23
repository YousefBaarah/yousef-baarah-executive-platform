import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3';
import {
  Compass,
  TrendingUp,
  Globe2,
  Sparkles,
  Layers,
  ChevronRight,
  ShieldCheck,
  Building2,
  Tv,
  ArrowRight,
  Maximize2,
  RotateCcw,
} from 'lucide-react';

export interface RadialNode {
  id: string;
  name: string;
  nameAr?: string;
  category: 'core' | 'pillar' | 'capability' | 'market' | 'intersection';
  pillarId?: string;
  marketId?: string;
  value?: number;
  description: string;
  descriptionAr?: string;
  growthMetric?: string;
  marketImpact?: string;
  regionalCorridor?: string;
  color?: string;
  children?: RadialNode[];
}

export interface RadialLink {
  sourceId: string;
  targetId: string;
  strength: number; // 1 to 5
  type: 'core' | 'market-growth' | 'commercial' | 'sovereign';
  label?: string;
}

// Strategic Dataset for the Radial Convergence Map
const STRATEGIC_RADIAL_DATA: {
  nodes: RadialNode[];
  markets: Array<{
    id: string;
    name: string;
    nameAr: string;
    region: string;
    growthFactor: string;
    focus: string;
    color: string;
    icon: any;
  }>;
  links: RadialLink[];
} = {
  markets: [
    {
      id: 'm-gcc',
      name: 'Saudi Arabia & GCC Vision 2030',
      nameAr: 'المملكة العربية السعودية ورؤية 2030',
      region: 'Gulf Cooperation Council',
      growthFactor: '+38% Strategic Comms & Giga-Projects',
      focus: 'Sovereign Brand Architecture, RHQ Relocations, Private-Public Media Partnerships',
      color: '#006C35',
      icon: LandmarkIcon,
    },
    {
      id: 'm-uae',
      name: 'UAE & Dubai Global Luxury Media Hub',
      nameAr: 'الإمارات ودبي — المركز العالمي للإعلام الفاخر',
      region: 'United Arab Emirates & Gulf',
      growthFactor: 'Haute Couture Alliances & $10k-$27k Ad Packages',
      focus: 'Luxury Editorial Ecosystems, Cross-Border Commercial Syndication, Digital Convergence',
      color: '#B8964A',
      icon: Sparkles,
    },
    {
      id: 'm-levant',
      name: 'Jordan & Levant Media-Policy Nexus',
      nameAr: 'الأردن والمشرق العربي — محور الإعلام والسياسات',
      region: 'Levant & Public Affairs',
      growthFactor: 'National Anchor Broadcasting & #1 OTT Chart Rank',
      focus: 'Live Studio Economic Commentary, Linear-to-Digital Broadcast Engineering, Tourism Heritage',
      color: '#0D2B4E',
      icon: Tv,
    },
    {
      id: 'm-egypt',
      name: 'Egypt & Regional Mass-Audience Market',
      nameAr: 'مصر والأسواق الإقليمية واسعة الانتشار',
      region: 'North Africa & MENA',
      growthFactor: '435k+ Cross-Platform Footprint & 285k Web UV',
      focus: 'Pop-Culture Celebrity Co-Productions, FMCG & Telecom Commercial Alliances, Regional Syndication',
      color: '#C0392B',
      icon: Globe2,
    },
    {
      id: 'm-intl',
      name: 'International Corridors (UK, WEF, EIB)',
      nameAr: 'المحافل الدولية (بريطانيا، المنتدى الاقتصادي العالمي)',
      region: 'Global & Bilateral Relations',
      growthFactor: '150+ Sovereign Leaders & Global Investor Outreach',
      focus: 'World Economic Forum Special Issues, European Investment Bank Guides, Sovereign Tribute Volumes',
      color: '#4A6572',
      icon: Compass,
    },
  ],
  nodes: [
    // Core Node
    {
      id: 'core-ygb',
      name: 'Yousef G. Baarah',
      nameAr: 'يوسف غازي بعارة',
      category: 'core',
      description:
        'Sovereign Strategic Communications, Broadcast Media Leadership, and High-Yield Commercial Revenue Architecture.',
      growthMetric: '15+ Years Regional Leadership',
      color: '#B8964A',
    },
    // 4 Primary Pillars (Inner Ring)
    {
      id: 'p-exec',
      name: 'Executive & Board Strategic Alignment',
      nameAr: 'الاتصال التنفيذي ومواءمة مجالس الإدارة',
      category: 'pillar',
      pillarId: 'exec',
      description:
        'Translating corporate mandates, financial milestones, and institutional policies into authoritative leadership narratives.',
      growthMetric: 'Enterprise Governance',
      color: '#0D2B4E',
    },
    {
      id: 'p-commercial',
      name: 'Commercial Revenue & Monetization Engine',
      nameAr: 'هندسة الإيرادات التجارية والنمو المالي',
      category: 'pillar',
      pillarId: 'commercial',
      description:
        'Structuring luxury advertising rate cards, high-net-worth brand partnerships, and cross-border commercial syndication.',
      growthMetric: '$27.5k Peak Cover Rate',
      color: '#B8964A',
    },
    {
      id: 'p-broadcast',
      name: 'Linear Broadcasting & Digital OTT Convergence',
      nameAr: 'البث التلفزيوني والتحول الرقمي OTT',
      category: 'pillar',
      pillarId: 'broadcast',
      description:
        'Live prime-time studio anchoring, macro-economic dialogue, and multi-channel linear-to-OTT content scaling.',
      growthMetric: '#1 App Store Charting',
      color: '#1B4965',
    },
    {
      id: 'p-sovereign',
      name: 'Sovereign Publishing & Diplomatic Guides',
      nameAr: 'النشر السيادي والتقارير الدبلوماسية',
      category: 'pillar',
      pillarId: 'sovereign',
      description:
        'Authoring high-level publications for the World Economic Forum, foreign ministries, European Investment Bank, and royal institutions.',
      growthMetric: '150+ Leader Tributes',
      color: '#627264',
    },

    // Specialized Capabilities (Mid Ring)
    // Sub-nodes under p-exec
    {
      id: 'cap-csuite',
      name: 'C-Suite & Ministerial Narrative Architecture',
      nameAr: 'صياغة الخطاب للقيادات والوزراء',
      category: 'capability',
      pillarId: 'p-exec',
      description:
        'Positioning executive leadership on national economic forums and bilateral trade summits.',
      growthMetric: '+45% Executive Authority Index',
      color: '#0D2B4E',
    },
    {
      id: 'cap-crisis',
      name: 'Institutional Reputation & Crisis Architecture',
      nameAr: 'إدارة السمعة المؤسسية واستراتيجيات الأزمات',
      category: 'capability',
      pillarId: 'p-exec',
      description:
        'Protecting enterprise valuation and institutional trust through proactive stakeholder containment.',
      growthMetric: 'Zero Unmitigated Breaches',
      color: '#0D2B4E',
    },
    {
      id: 'cap-policy',
      name: 'Macro-Economic Policy Translation',
      nameAr: 'تبسيط وتوجيه السياسات الاقتصادية',
      category: 'capability',
      pillarId: 'p-exec',
      description:
        'Translating fiscal reforms, inflation measures, and energy market policies for public understanding.',
      growthMetric: 'Broadcast Policy Clarification',
      color: '#0D2B4E',
    },

    // Sub-nodes under p-commercial
    {
      id: 'cap-luxury-alliances',
      name: 'Haute Couture & Luxury Alliances',
      nameAr: 'تحالفات الأزياء والعلامات الفاخرة',
      category: 'capability',
      pillarId: 'p-commercial',
      description:
        'Integrating Roberto Cavalli, Kempinski Ishtar, Infiniti, and luxury jewelry houses in high-fashion productions.',
      growthMetric: 'Multi-Brand Sovereign Alliances',
      color: '#B8964A',
    },
    {
      id: 'cap-ratecard',
      name: 'High-Yield Media Kits & Rate Architecture',
      nameAr: 'هيكلة أسعار الإعلانات وحقائب الرعايات',
      category: 'capability',
      pillarId: 'p-commercial',
      description:
        'Monetizing editorial inventory across premium print, digital cover stories, and sponsored event galas.',
      growthMetric: 'Audited 285k Digital UV / Mo',
      color: '#B8964A',
    },
    {
      id: 'cap-gala',
      name: 'Gala & Event Marketing Commercialization',
      nameAr: 'تسويق الفعاليات والمؤتمرات الكبرى',
      category: 'capability',
      pillarId: 'p-commercial',
      description:
        'Pikasso D’Or advertising awards and regional sovereign business gala sponsorship acquisition.',
      growthMetric: '100% Sponsorship Sold-Out',
      color: '#B8964A',
    },

    // Sub-nodes under p-broadcast
    {
      id: 'cap-anchor',
      name: 'Live Televised Anchor & Economic Dialogue',
      nameAr: 'التقديم التلفزيوني والحوار الاقتصادي',
      category: 'capability',
      pillarId: 'p-broadcast',
      description:
        'Amman TV live studio hosting interviewing top economists and policy directors on national television.',
      growthMetric: 'Prime-Time Broadcast Feature',
      color: '#1B4965',
    },
    {
      id: 'cap-ott',
      name: 'Linear-to-OTT Platform Engineering',
      nameAr: 'تطوير منصات البث الرقمي وتطبيقات المشاهدة',
      category: 'capability',
      pillarId: 'p-broadcast',
      description:
        'Scaling Roya TV app to #1 ranking across regional iOS and Google Play app stores during Ramadan peaks.',
      growthMetric: 'Multi-Million Active Streams',
      color: '#1B4965',
    },
    {
      id: 'cap-multichannel',
      name: 'Omni-Channel Content Syndication',
      nameAr: 'التوزيع الرقمي متعدد المنصات',
      category: 'capability',
      pillarId: 'p-broadcast',
      description:
        'Harmonizing linear TV programming with short-form digital reels and high-engagement social formats.',
      growthMetric: '435k+ Aggregated Social Follower Base',
      color: '#1B4965',
    },

    // Sub-nodes under p-sovereign
    {
      id: 'cap-wef',
      name: 'World Economic Forum Official Guides',
      nameAr: 'أدلة المنتدى الاقتصادي العالمي الرسمية',
      category: 'capability',
      pillarId: 'p-sovereign',
      description:
        'Publishing the official Dead Sea World Economic Forum investor compendiums and policy overviews.',
      growthMetric: 'Direct Head-of-State Circulation',
      color: '#627264',
    },
    {
      id: 'cap-bilateral',
      name: 'Bilateral Trade & Diplomatic Compendiums',
      nameAr: 'التقارير التجارية والدبلوماسية الثنائية',
      category: 'capability',
      pillarId: 'p-sovereign',
      description:
        'Jordan-German, Jordan-France, and Euro-Mediterranean trade corridor business chronicles.',
      growthMetric: 'Distributed to All Embassies & VIP Lounges',
      color: '#627264',
    },
    {
      id: 'cap-heritage',
      name: 'Heritage Economics & Cultural Identity',
      nameAr: 'اقتصاديات التراث والهوية الوطنية',
      category: 'capability',
      pillarId: 'p-sovereign',
      description:
        'Editorial partnerships with UNESCO Goodwill Ambassador HRH Princess Dana Firas on sustainable tourism.',
      growthMetric: 'National Heritage Preservation',
      color: '#627264',
    },
  ],
  links: [
    // Core to Pillars
    { sourceId: 'core-ygb', targetId: 'p-exec', strength: 5, type: 'core' },
    { sourceId: 'core-ygb', targetId: 'p-commercial', strength: 5, type: 'core' },
    { sourceId: 'core-ygb', targetId: 'p-broadcast', strength: 5, type: 'core' },
    { sourceId: 'core-ygb', targetId: 'p-sovereign', strength: 5, type: 'core' },

    // Pillars to Capabilities
    { sourceId: 'p-exec', targetId: 'cap-csuite', strength: 4, type: 'core' },
    { sourceId: 'p-exec', targetId: 'cap-crisis', strength: 4, type: 'core' },
    { sourceId: 'p-exec', targetId: 'cap-policy', strength: 4, type: 'core' },

    { sourceId: 'p-commercial', targetId: 'cap-luxury-alliances', strength: 4, type: 'commercial' },
    { sourceId: 'p-commercial', targetId: 'cap-ratecard', strength: 4, type: 'commercial' },
    { sourceId: 'p-commercial', targetId: 'cap-gala', strength: 4, type: 'commercial' },

    { sourceId: 'p-broadcast', targetId: 'cap-anchor', strength: 4, type: 'core' },
    { sourceId: 'p-broadcast', targetId: 'cap-ott', strength: 4, type: 'core' },
    { sourceId: 'p-broadcast', targetId: 'cap-multichannel', strength: 4, type: 'core' },

    { sourceId: 'p-sovereign', targetId: 'cap-wef', strength: 4, type: 'sovereign' },
    { sourceId: 'p-sovereign', targetId: 'cap-bilateral', strength: 4, type: 'sovereign' },
    { sourceId: 'p-sovereign', targetId: 'cap-heritage', strength: 4, type: 'sovereign' },

    // Capabilities to Regional Market Intersections
    { sourceId: 'cap-csuite', targetId: 'm-gcc', strength: 5, type: 'market-growth', label: 'Vision 2030 Leadership' },
    { sourceId: 'cap-csuite', targetId: 'm-intl', strength: 4, type: 'market-growth', label: 'Global Investor Narrative' },
    { sourceId: 'cap-crisis', targetId: 'm-gcc', strength: 4, type: 'market-growth', label: 'Giga-Project Governance' },
    { sourceId: 'cap-policy', targetId: 'm-levant', strength: 5, type: 'market-growth', label: 'National Fiscal Discourse' },

    { sourceId: 'cap-luxury-alliances', targetId: 'm-uae', strength: 5, type: 'commercial', label: 'Haute Couture Hub' },
    { sourceId: 'cap-luxury-alliances', targetId: 'm-levant', strength: 4, type: 'commercial', label: 'Dead Sea Productions' },
    { sourceId: 'cap-ratecard', targetId: 'm-uae', strength: 4, type: 'commercial', label: 'Regional Ad Monetization' },
    { sourceId: 'cap-ratecard', targetId: 'm-egypt', strength: 4, type: 'commercial', label: 'Broad Consumer Reach' },
    { sourceId: 'cap-gala', targetId: 'm-levant', strength: 4, type: 'commercial', label: 'Pikasso D’Or Advertising' },
    { sourceId: 'cap-gala', targetId: 'm-uae', strength: 3, type: 'commercial', label: 'Luxury Brand Galas' },

    { sourceId: 'cap-anchor', targetId: 'm-levant', strength: 5, type: 'market-growth', label: 'Amman TV Studio Anchoring' },
    { sourceId: 'cap-ott', targetId: 'm-levant', strength: 5, type: 'market-growth', label: '#1 Jordanian App Rank' },
    { sourceId: 'cap-ott', targetId: 'm-gcc', strength: 4, type: 'market-growth', label: 'Gulf OTT Expansion' },
    { sourceId: 'cap-multichannel', targetId: 'm-egypt', strength: 4, type: 'market-growth', label: 'Mass Pop-Culture Impact' },

    { sourceId: 'cap-wef', targetId: 'm-intl', strength: 5, type: 'sovereign', label: 'Davos & Dead Sea WEF' },
    { sourceId: 'cap-wef', targetId: 'm-levant', strength: 4, type: 'sovereign', label: 'Jordan Investment Summit' },
    { sourceId: 'cap-bilateral', targetId: 'm-intl', strength: 5, type: 'sovereign', label: 'European & Diplomatic Guides' },
    { sourceId: 'cap-heritage', targetId: 'm-levant', strength: 5, type: 'sovereign', label: 'UNESCO Heritage Tourism' },
    { sourceId: 'cap-heritage', targetId: 'm-gcc', strength: 4, type: 'sovereign', label: 'AlUla & Regional Heritage' },
  ],
};

function LandmarkIcon(props: any) {
  return <Building2 {...props} />;
}

export const StrategicRadialMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('core-ygb');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);

  // Active highlighted entity info
  const activeEntity = useMemo(() => {
    const targetId = hoveredNodeId || selectedNodeId;
    const node = STRATEGIC_RADIAL_DATA.nodes.find((n) => n.id === targetId);
    if (node) {
      // Find connected markets
      const connectedMarkets = STRATEGIC_RADIAL_DATA.links
        .filter((l) => l.sourceId === node.id || l.targetId === node.id)
        .map((l) => (l.sourceId === node.id ? l.targetId : l.sourceId))
        .map((id) => STRATEGIC_RADIAL_DATA.markets.find((m) => m.id === id))
        .filter(Boolean);

      return {
        type: 'node' as const,
        data: node,
        connectedMarkets,
      };
    }

    const market = STRATEGIC_RADIAL_DATA.markets.find((m) => m.id === targetId);
    if (market) {
      const connectedCaps = STRATEGIC_RADIAL_DATA.links
        .filter((l) => l.targetId === market.id || l.sourceId === market.id)
        .map((l) => (l.targetId === market.id ? l.sourceId : l.targetId))
        .map((id) => STRATEGIC_RADIAL_DATA.nodes.find((n) => n.id === id))
        .filter(Boolean);

      return {
        type: 'market' as const,
        data: market,
        connectedNodes: connectedCaps,
      };
    }

    return null;
  }, [hoveredNodeId, selectedNodeId]);

  // D3 Radial Rendering & Smooth Transitions
  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth || 800;
    const height = Math.min(Math.max(width * 0.85, 600), 750);
    const centerX = width / 2;
    const centerY = height / 2;
    const maxRadius = Math.min(width, height) / 2 - 30;

    const svg = d3.select(svgRef.current);
    svg.attr('width', width).attr('height', height).attr('viewBox', `0 0 ${width} ${height}`);

    // Clear previous elements
    svg.selectAll('*').remove();

    // Defs for glowing gradients & filters
    const defs = svg.append('defs');

    // Gold Glow filter
    const filter = defs.append('filter').attr('id', 'gold-glow').attr('x', '-50%').attr('y', '-50%').attr('width', '200%').attr('height', '200%');
    filter.append('feGaussianBlur').attr('stdDeviation', '4').attr('result', 'coloredBlur');
    const feMerge = filter.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    // Blue Glow filter
    const blueFilter = defs.append('filter').attr('id', 'blue-glow').attr('x', '-50%').attr('y', '-50%').attr('width', '200%').attr('height', '200%');
    blueFilter.append('feGaussianBlur').attr('stdDeviation', '3').attr('result', 'coloredBlur');
    const blueMerge = blueFilter.append('feMerge');
    blueMerge.append('feMergeNode').attr('in', 'coloredBlur');
    blueMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    // Gradients
    const goldGrad = defs.append('radialGradient').attr('id', 'gold-core-grad');
    goldGrad.append('stop').attr('offset', '0%').attr('stop-color', '#E6D2A8');
    goldGrad.append('stop').attr('offset', '100%').attr('stop-color', '#B8964A');

    const mainGroup = svg.append('g').attr('transform', `translate(${centerX}, ${centerY})`);

    // Radius rings definition
    const rPillars = maxRadius * 0.38;
    const rCapabilities = maxRadius * 0.68;
    const rMarkets = maxRadius * 0.94;

    // Draw background concentric orbits
    const orbits = [
      { r: rPillars, label: '01 / Strategic Pillars', dash: '3,3' },
      { r: rCapabilities, label: '02 / Specialized Competencies', dash: '4,4' },
      { r: rMarkets, label: '03 / Regional Growth Corridors', dash: 'none' },
    ];

    const orbitGroup = mainGroup.append('g').attr('class', 'orbits');

    orbits.forEach((orbit) => {
      orbitGroup
        .append('circle')
        .attr('r', 0)
        .attr('fill', 'none')
        .attr('stroke', '#0D2B4E')
        .attr('stroke-opacity', 0.12)
        .attr('stroke-width', 1.2)
        .attr('stroke-dasharray', orbit.dash)
        .transition()
        .duration(800)
        .ease(d3.easeCubicOut)
        .attr('r', orbit.r);
    });

    // Calculate Angular Coordinates
    // 4 Pillars positioned at 4 cardinal / diagonal points
    const pillarNodes = STRATEGIC_RADIAL_DATA.nodes.filter((n) => n.category === 'pillar');
    const capabilityNodes = STRATEGIC_RADIAL_DATA.nodes.filter((n) => n.category === 'capability');
    const marketNodes = STRATEGIC_RADIAL_DATA.markets;

    interface NodePosition {
      id: string;
      x: number;
      y: number;
      angle: number;
      radius: number;
      category: string;
      data: any;
    }

    const positions: Map<string, NodePosition> = new Map();

    // Core
    positions.set('core-ygb', {
      id: 'core-ygb',
      x: 0,
      y: 0,
      angle: 0,
      radius: 0,
      category: 'core',
      data: STRATEGIC_RADIAL_DATA.nodes[0],
    });

    // Pillars: 4 equal angles with slight offset
    pillarNodes.forEach((p, i) => {
      const angle = (i * 2 * Math.PI) / pillarNodes.length - Math.PI / 4;
      const x = rPillars * Math.cos(angle);
      const y = rPillars * Math.sin(angle);
      positions.set(p.id, {
        id: p.id,
        x,
        y,
        angle,
        radius: rPillars,
        category: 'pillar',
        data: p,
      });
    });

    // Capabilities: grouped around their parent pillar
    pillarNodes.forEach((p) => {
      const parentPos = positions.get(p.id)!;
      const childCaps = capabilityNodes.filter((c) => c.pillarId === p.id);
      const span = Math.PI / 3.2; // angular span around parent
      const startAngle = parentPos.angle - span / 2;

      childCaps.forEach((c, idx) => {
        const step = childCaps.length > 1 ? span / (childCaps.length - 1) : 0;
        const angle = startAngle + step * idx;
        const x = rCapabilities * Math.cos(angle);
        const y = rCapabilities * Math.sin(angle);
        positions.set(c.id, {
          id: c.id,
          x,
          y,
          angle,
          radius: rCapabilities,
          category: 'capability',
          data: c,
        });
      });
    });

    // Markets: 5 outer positions
    marketNodes.forEach((m, i) => {
      const angle = (i * 2 * Math.PI) / marketNodes.length - Math.PI / 2;
      const x = rMarkets * Math.cos(angle);
      const y = rMarkets * Math.sin(angle);
      positions.set(m.id, {
        id: m.id,
        x,
        y,
        angle,
        radius: rMarkets,
        category: 'market',
        data: m,
      });
    });

    // Filter Logic
    const activeTarget = hoveredNodeId || selectedNodeId;

    // Filtered links
    const relevantLinks = STRATEGIC_RADIAL_DATA.links.filter((l) => {
      if (selectedFilter === 'all') return true;
      if (selectedFilter === 'gcc') return l.sourceId === 'm-gcc' || l.targetId === 'm-gcc' || l.sourceId === 'p-exec' || l.targetId === 'p-exec';
      if (selectedFilter === 'levant') return l.sourceId === 'm-levant' || l.targetId === 'm-levant' || l.sourceId === 'p-broadcast' || l.targetId === 'p-broadcast';
      if (selectedFilter === 'luxury') return l.sourceId === 'm-uae' || l.targetId === 'm-uae' || l.sourceId === 'p-commercial' || l.targetId === 'p-commercial';
      if (selectedFilter === 'sovereign') return l.sourceId === 'm-intl' || l.targetId === 'm-intl' || l.sourceId === 'p-sovereign' || l.targetId === 'p-sovereign';
      return true;
    });

    // Draw connecting Curved Ribbons
    const linkGroup = mainGroup.append('g').attr('class', 'links');

    relevantLinks.forEach((link, idx) => {
      const s = positions.get(link.sourceId);
      const t = positions.get(link.targetId);
      if (!s || !t) return;

      const isDirectlyConnected =
        activeTarget === s.id || activeTarget === t.id || activeTarget === 'core-ygb';

      // Quadratic bezier curve bending towards center
      const midX = (s.x + t.x) * 0.55;
      const midY = (s.y + t.y) * 0.55;
      const pathD = `M ${s.x} ${s.y} Q ${midX} ${midY} ${t.x} ${t.y}`;

      const linkColor =
        link.type === 'commercial' ? '#B8964A' : link.type === 'sovereign' ? '#627264' : '#0D2B4E';

      const path = linkGroup
        .append('path')
        .attr('d', pathD)
        .attr('fill', 'none')
        .attr('stroke', linkColor)
        .attr('stroke-width', isDirectlyConnected ? 2.5 : 1)
        .attr('stroke-opacity', 0)
        .attr('stroke-dasharray', isDirectlyConnected && activeTarget !== 'core-ygb' ? 'none' : '2,2');

      if (isDirectlyConnected && activeTarget !== 'core-ygb') {
        path.attr('filter', 'url(#gold-glow)');
      }

      // Smooth initial transition
      path
        .transition()
        .duration(700 + idx * 20)
        .ease(d3.easeCubicOut)
        .attr('stroke-opacity', isDirectlyConnected ? 0.75 : 0.15);
    });

    // Draw Nodes Group
    const nodeGroup = mainGroup.append('g').attr('class', 'nodes');

    // 1. Draw Market Nodes (Outer ring)
    marketNodes.forEach((market) => {
      const pos = positions.get(market.id);
      if (!pos) return;

      const isHoveredOrActive = activeTarget === market.id;
      const g = nodeGroup
        .append('g')
        .attr('class', 'market-node cursor-pointer')
        .attr('transform', `translate(${pos.x}, ${pos.y})`)
        .on('mouseenter', () => setHoveredNodeId(market.id))
        .on('mouseleave', () => setHoveredNodeId(null))
        .on('click', () => setSelectedNodeId(market.id));

      // Outer ripple if active
      if (isHoveredOrActive) {
        g.append('circle')
          .attr('r', 28)
          .attr('fill', 'none')
          .attr('stroke', market.color)
          .attr('stroke-width', 2)
          .attr('opacity', 0.8)
          .attr('filter', 'url(#gold-glow)')
          .transition()
          .duration(1200)
          .ease(d3.easeSinInOut)
          .attr('r', 34)
          .attr('opacity', 0.2);
      }

      // Background Capsule / Badge
      g.append('rect')
        .attr('x', -70)
        .attr('y', -18)
        .attr('width', 140)
        .attr('height', 36)
        .attr('rx', 18)
        .attr('fill', isHoveredOrActive ? market.color : '#FFFFFF')
        .attr('stroke', market.color)
        .attr('stroke-width', isHoveredOrActive ? 2.5 : 1.5)
        .attr('filter', isHoveredOrActive ? 'url(#gold-glow)' : 'drop-shadow(0 4px 6px rgba(13,43,78,0.08))')
        .transition()
        .duration(400);

      // Icon circle
      g.append('circle')
        .attr('cx', -50)
        .attr('cy', 0)
        .attr('r', 10)
        .attr('fill', isHoveredOrActive ? '#FFFFFF' : market.color);

      // Text label
      g.append('text')
        .attr('x', -34)
        .attr('y', 4)
        .attr('fill', isHoveredOrActive ? '#FFFFFF' : '#0D2B4E')
        .attr('font-size', '10px')
        .attr('font-weight', '700')
        .attr('font-family', 'sans-serif')
        .text(market.name.split('&')[0].trim());
    });

    // 2. Draw Capability Nodes (Mid ring)
    capabilityNodes.forEach((cap) => {
      const pos = positions.get(cap.id);
      if (!pos) return;

      const isHoveredOrActive = activeTarget === cap.id;
      const isParentActive = activeTarget === cap.pillarId;

      const g = nodeGroup
        .append('g')
        .attr('class', 'capability-node cursor-pointer')
        .attr('transform', `translate(${pos.x}, ${pos.y})`)
        .on('mouseenter', () => setHoveredNodeId(cap.id))
        .on('mouseleave', () => setHoveredNodeId(null))
        .on('click', () => setSelectedNodeId(cap.id));

      const circleRadius = isHoveredOrActive ? 12 : 7.5;

      g.append('circle')
        .attr('r', 0)
        .attr('fill', isHoveredOrActive ? '#B8964A' : isParentActive ? '#0D2B4E' : '#FFFFFF')
        .attr('stroke', isHoveredOrActive ? '#B8964A' : '#0D2B4E')
        .attr('stroke-width', isHoveredOrActive ? 3 : 1.5)
        .attr('filter', isHoveredOrActive ? 'url(#gold-glow)' : 'none')
        .transition()
        .duration(600)
        .attr('r', circleRadius);

      // Small Text Label for Capability on hover or if desktop
      if (width > 640 || isHoveredOrActive) {
        const textAnchor = pos.x > 0 ? 'start' : 'end';
        const textOffsetX = pos.x > 0 ? 14 : -14;

        g.append('text')
          .attr('x', textOffsetX)
          .attr('y', 3)
          .attr('text-anchor', textAnchor)
          .attr('fill', isHoveredOrActive ? '#0D2B4E' : '#4B5563')
          .attr('font-size', isHoveredOrActive ? '11px' : '9.5px')
          .attr('font-weight', isHoveredOrActive ? '700' : '500')
          .attr('opacity', isHoveredOrActive ? 1 : 0.75)
          .text(cap.name.length > 24 ? cap.name.slice(0, 22) + '…' : cap.name);
      }
    });

    // 3. Draw Pillar Nodes (Inner ring)
    pillarNodes.forEach((pillar) => {
      const pos = positions.get(pillar.id);
      if (!pos) return;

      const isHoveredOrActive = activeTarget === pillar.id;

      const g = nodeGroup
        .append('g')
        .attr('class', 'pillar-node cursor-pointer')
        .attr('transform', `translate(${pos.x}, ${pos.y})`)
        .on('mouseenter', () => setHoveredNodeId(pillar.id))
        .on('mouseleave', () => setHoveredNodeId(null))
        .on('click', () => setSelectedNodeId(pillar.id));

      if (isHoveredOrActive) {
        g.append('circle')
          .attr('r', 32)
          .attr('fill', 'none')
          .attr('stroke', '#B8964A')
          .attr('stroke-width', 2)
          .attr('filter', 'url(#gold-glow)')
          .transition()
          .duration(800)
          .attr('r', 38)
          .attr('opacity', 0.3);
      }

      g.append('circle')
        .attr('r', 0)
        .attr('fill', isHoveredOrActive ? '#0D2B4E' : '#F6F3ED')
        .attr('stroke', '#B8964A')
        .attr('stroke-width', 2.5)
        .transition()
        .duration(600)
        .attr('r', 24);

      // Pillar Number / Symbol
      g.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', 4)
        .attr('fill', isHoveredOrActive ? '#E6D2A8' : '#0D2B4E')
        .attr('font-size', '12px')
        .attr('font-weight', '700')
        .attr('font-family', 'serif')
        .text(
          pillar.id === 'p-exec'
            ? '01'
            : pillar.id === 'p-commercial'
            ? '02'
            : pillar.id === 'p-broadcast'
            ? '03'
            : '04'
        );
    });

    // 4. Draw Center Hub (Yousef G. Baarah Core)
    const coreGroup = nodeGroup
      .append('g')
      .attr('class', 'core-node cursor-pointer')
      .on('click', () => setSelectedNodeId('core-ygb'))
      .on('mouseenter', () => setHoveredNodeId('core-ygb'))
      .on('mouseleave', () => setHoveredNodeId(null));

    // Orbital pulsing outer ring
    coreGroup
      .append('circle')
      .attr('r', 44)
      .attr('fill', 'none')
      .attr('stroke', '#B8964A')
      .attr('stroke-width', 1.5)
      .attr('stroke-dasharray', '4,4')
      .attr('opacity', 0.6);

    // Inner Core
    coreGroup
      .append('circle')
      .attr('r', 34)
      .attr('fill', '#0D2B4E')
      .attr('stroke', 'url(#gold-core-grad)')
      .attr('stroke-width', 3)
      .attr('filter', 'url(#gold-glow)');

    coreGroup
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', -2)
      .attr('fill', '#E6D2A8')
      .attr('font-size', '11px')
      .attr('font-weight', '800')
      .attr('font-family', 'serif')
      .text('YGB');

    coreGroup
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', 12)
      .attr('fill', '#FFFFFF')
      .attr('font-size', '8px')
      .attr('letter-spacing', '1px')
      .attr('font-weight', '600')
      .attr('text-transform', 'uppercase')
      .text('STRATEGY');
  }, [selectedFilter, selectedNodeId, hoveredNodeId, zoomScale]);

  return (
    <div className="w-full space-y-8 mt-16 pt-16 border-t border-[#0D2B4E]/10">
      {/* Component Title & Subtitle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#B8964A] font-bold flex items-center gap-2 mb-2">
            <Compass className="w-4 h-4 text-[#B8964A]" />
            <span>Interactive Radial Map · D3 Convergence Engine</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D2B4E]">
            Expertise Matrix & Regional Market Intersections
          </h3>
          <p className="text-xs sm:text-sm text-[#4B5563] max-w-2xl font-light mt-1">
            Explore how core strategic pillars, broadcast capabilities, and high-yield commercial models intersect directly with sovereign growth corridors across Jordan, the GCC, and international arenas.
          </p>
        </div>

        {/* Lens Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-white border border-[#0D2B4E]/10 shadow-sm">
          {[
            { id: 'all', label: 'All Intersections' },
            { id: 'gcc', label: 'GCC & Vision 2030' },
            { id: 'luxury', label: 'UAE & Luxury Alliances' },
            { id: 'levant', label: 'Jordan & Broadcast' },
            { id: 'sovereign', label: 'Sovereign & WEF' },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all ${
                selectedFilter === filter.id
                  ? 'bg-[#0D2B4E] text-[#E6D2A8] shadow-sm'
                  : 'text-[#4B5563] hover:bg-[#F6F3ED] hover:text-[#0D2B4E]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-[#0D2B4E]/15 shadow-xl relative overflow-hidden">
        {/* Left Side: Interactive D3 Radial Map Stage (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[520px]">
          {/* Controls Overlay */}
          <div className="absolute top-2 right-2 flex items-center gap-1.5 z-10">
            <button
              onClick={() => {
                setSelectedNodeId('core-ygb');
                setSelectedFilter('all');
              }}
              title="Reset View"
              className="p-2 rounded-lg bg-[#F6F3ED] border border-[#0D2B4E]/10 text-[#0D2B4E] hover:bg-[#EAE4D7] transition-colors text-xs flex items-center gap-1 font-semibold"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#B8964A]" />
              <span className="hidden sm:inline">Reset Focal Hub</span>
            </button>
          </div>

          {/* D3 Canvas Container */}
          <div ref={containerRef} className="w-full flex items-center justify-center">
            <svg ref={svgRef} className="w-full h-auto max-h-[680px] drop-shadow-sm select-none" />
          </div>

          {/* Interactive Legend Footnote */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-mono text-[#4B5563] pt-2 border-t border-[#0D2B4E]/5 w-full mt-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0D2B4E] border border-[#B8964A]" />
              <span>Center: Strategic Core</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#F6F3ED] border border-[#B8964A]" />
              <span>Ring 1: Pillars</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#B8964A]" />
              <span>Ring 2: Competencies</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-2 rounded-full bg-[#006C35]" />
              <span>Ring 3: Growth Markets</span>
            </div>
          </div>
        </div>

        {/* Right Side: Active Entity Strategic Inspector (5 cols) */}
        <div className="lg:col-span-5 space-y-6 bg-[#0D2B4E] text-white p-6 sm:p-7 rounded-2xl border border-[#B8964A]/30 shadow-2xl relative">
          {/* Header Badge */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8964A]/20 border border-[#B8964A]/40 text-[#E6D2A8] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#B8964A]" />
              <span>
                {activeEntity?.type === 'market'
                  ? 'Regional Growth Corridor'
                  : activeEntity?.data.category === 'core'
                  ? 'Executive Core Hub'
                  : activeEntity?.data.category === 'pillar'
                  ? 'Core Strategic Pillar'
                  : 'Specialized Competency'}
              </span>
            </div>

            <span className="text-[10px] font-mono text-white/50 uppercase">
              {activeEntity?.data.id}
            </span>
          </div>

          {/* Title & Description */}
          <div className="space-y-2">
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
              {activeEntity?.data.name}
            </h4>
            {activeEntity?.data.nameAr && (
              <div className="text-xs text-[#E6D2A8] font-serif" dir="rtl">
                {activeEntity.data.nameAr}
              </div>
            )}
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light pt-1">
              {activeEntity?.data.description || activeEntity?.data.focus}
            </p>
          </div>

          {/* Key Strategic Metric Callout */}
          <div className="p-4 rounded-xl bg-white/[0.07] border border-white/15 space-y-1">
            <div className="text-[10px] font-mono uppercase text-[#E6D2A8] tracking-widest font-bold flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-[#B8964A]" />
              <span>Proven Impact & Market Multiplier</span>
            </div>
            <div className="text-lg sm:text-xl font-serif font-bold text-[#E6D2A8]">
              {activeEntity?.data.growthMetric || activeEntity?.data.growthFactor}
            </div>
          </div>

          {/* Connected Regional Markets / Intersecting Pillars */}
          {activeEntity?.type === 'node' && activeEntity.connectedMarkets && activeEntity.connectedMarkets.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="text-[11px] font-mono uppercase tracking-wider text-white/60">
                Connected Growth Markets & Corridors:
              </div>
              <div className="flex flex-wrap gap-2">
                {activeEntity.connectedMarkets.map((m: any) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedNodeId(m.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 hover:bg-[#B8964A] hover:text-[#060F1A] text-xs transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />
                    <span className="font-semibold">{m.name.split('&')[0]}</span>
                    <ChevronRight className="w-3 h-3 opacity-60" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeEntity?.type === 'market' && activeEntity.connectedNodes && activeEntity.connectedNodes.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="text-[11px] font-mono uppercase tracking-wider text-white/60">
                Integrated Capabilities in this Corridor:
              </div>
              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                {activeEntity.connectedNodes.map((n: any) => (
                  <div
                    key={n.id}
                    onClick={() => setSelectedNodeId(n.id)}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/15 cursor-pointer text-xs flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#B8964A]" />
                      <span className="text-white/90 font-medium">{n.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#E6D2A8]">{n.growthMetric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action CTA */}
          <div className="pt-2">
            <a
              href="#work"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#B8964A] text-[#060F1A] font-bold text-xs uppercase tracking-widest hover:bg-[#C9A66B] transition-all shadow-md"
            >
              <span>Explore Verified Blueprints</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
