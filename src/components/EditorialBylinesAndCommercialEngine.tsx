import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import yousefHeroPortrait from '../assets/images/yousef_baarah_profile_1787473817180.jpg';
import venturePrintArchiveImg from '../assets/images/venture_print_archive_1787473940962.jpg';
import galaEventImg from '../assets/images/yousef_baarah_event_1787473878121.jpg';
import soulArabiaCaroleImg from '../assets/images/soul_arabia_carole_deadsea_1787477002615.jpg';
import {
  BookOpen,
  DollarSign,
  Award,
  Crown,
  Globe2,
  TrendingUp,
  FileCheck,
  Building2,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Layers,
  Search,
  ExternalLink,
  CheckCircle2,
  Bookmark,
  Calendar,
  UserCheck,
  Tv,
} from 'lucide-react';

interface BylineArticle {
  id: string;
  title: string;
  titleAr: string;
  publication: string;
  edition: string;
  date: string;
  role: string;
  category: 'Royal & Sovereign' | 'Legacy & Industry' | 'Obituary & Memorial' | 'Tourism & Heritage';
  categoryAr: string;
  summary: string;
  summaryAr: string;
  keyHighlights: string[];
  keyHighlightsAr: string[];
  pageReference: string;
  significance: string;
  significanceAr: string;
}

const BYLINE_ARTICLES: BylineArticle[] = [
  {
    id: 'princess-dana-firas',
    title: 'HRH Princess Dana Firas on A Culture of Preservation',
    titleAr: 'صاحبة السمو الملكي الأميرة دانة فراس: ثقافة صون التراث والاستدامة',
    publication: 'Venture Magazine',
    edition: '151st Edition (Double Edition)',
    date: 'Dec 2019 / Jan 2020',
    role: 'Authored & Interviewed by Yousef G. Baarah',
    category: 'Royal & Sovereign',
    categoryAr: 'لقاءات ملكية وسيادية',
    summary:
      'High-profile exclusive interview with UNESCO Goodwill Ambassador HRH Princess Dana Firas on sustainable tourism strategy, heritage economics, and preserving national identity while generating sustainable cultural revenues.',
    summaryAr:
      'مقابلة حصرية معمقة مع سفيرة اليونسكو للنوايا الحسنة سمو الأميرة دانة فراس حول استراتيجية السياحة المستدامة، اقتصاديات التراث، وصون الهوية الوطنية مع توليد عوائد ثقافية واقتصادية.',
    keyHighlights: [
      'Linking cultural preservation to national GDP & community livelihoods',
      'Petra National Trust (PNT) global advocacy frameworks',
      'Exclusive high-level photography & diplomatic positioning',
    ],
    keyHighlightsAr: [
      'ربط صون التراث بالناتج المحلي الإجمالي وتمكين المجتمعات المحلية',
      'أطر العمل والمناصرة العالمية للجمعية الوطنية للمحافظة على البترا',
      'تصوير فوتوغرافي حصري وتوجيه دبلوماسي استراتيجي',
    ],
    pageReference: 'Pages 32-37 · Venture 151st Edition',
    significance: 'Verified Sovereign & Royal Cultural Bylines',
    significanceAr: 'توثيق رسمي لمقالات ولقاءات ملكية وسيادية',
  },
  {
    id: 'jordan-entrepreneurial-legacy',
    title: 'Jordan’s Entrepreneurial Legacy — 150th Edition Tribute Package',
    titleAr: 'إرث الريادة الأردنية — ملف التكريم الخاص بالعدد 150',
    publication: 'Venture Magazine',
    edition: '150th Edition Milestone Package',
    date: 'Dec 2018 / Jan 2019',
    role: 'By Yousef G. Baarah and Adam Robertson',
    category: 'Legacy & Industry',
    categoryAr: 'التاريخ المؤسسي والريادة',
    summary:
      'Monumental archival package curating 150 remarkable leaders, founders, and public figures who shaped Jordan’s corporate, banking, industrial, and educational landscape from 2006 to 2018.',
    summaryAr:
      'ملف توثيقي تاريخي ضخم يوثق مسيرة 150 شخصية قيادية ومؤسساً شكلوا المشهد المصرفي والصناعي والاقتصادي في الأردن من عام 2006 إلى 2018.',
    keyHighlights: [
      'Documented Sabih Masri, Walid Tahabsem, Samir Al-Rifai, Fadi Ghandour',
      'Comprehensive economic chronicle across 12 years of business journalism',
      'Distributed to top-tier government ministries and C-suites across the Levant',
    ],
    keyHighlightsAr: [
      'توثيق مسيرات صبيح المصري، وليد تحبسم، سمير الرفاعي، فادي غندور',
      'سجل اقتصادي شامل يغطي 12 عاماً من صحافة الأعمال الرصينة',
      'توزيع استراتيجي على كبرى الوزارات ومجالس الإدارة في المشرق العربي',
    ],
    pageReference: 'Pages 48-89 · Venture 150th Edition',
    significance: 'Master Architectural Legacy Archive',
    significanceAr: 'أرشيف توثيقي شامل للريادة الوطنية',
  },
  {
    id: 'saad-silawi-obituary',
    title: 'Remembering a Devoted-Media Veteran: Saad Silawi Obituary',
    titleAr: 'تخليد ذكرى رائد الإعلام العربي: مرثية سعد السيلاوي',
    publication: 'Venture Magazine',
    edition: '150th Edition Tribute',
    date: 'Dec 2018 / Jan 2019',
    role: 'Authored by Yousef G. Baarah',
    category: 'Obituary & Memorial',
    categoryAr: 'توثيق وتأبين إعلامي',
    summary:
      'An eloquent, deeply moving biographical tribute honoring the late Saad Silawi, renowned Al-Arabiya regional bureau chief who pioneered modern Arabic television news reporting through decades of Middle Eastern geopolitical coverage.',
    summaryAr:
      'مرثية بيوغرافية رفيعة المستوى تكرم الراحل سعد السيلاوي، مدير مكتب قناة العربية الإقليمي وأحد رواد الصحافة التلفزيونية الإخبارية في الشرق الأوسط.',
    keyHighlights: [
      'Reflections on 3+ decades of pan-Arab broadcast history',
      'Interviews with international press corps & royal press circles',
      'Permanent tribute in Jordan’s premier English business intelligence publication',
    ],
    keyHighlightsAr: [
      'قراءة في أكثر من ثلاثة عقود من تاريخ البث الإخباري العربي',
      'شهادات من الصحافة الدولية والدوائر الإعلامية الرسمية',
      'توثيق دائم في المطبوعة الإنجليزية الأولى لذكاء الأعمال في الأردن',
    ],
    pageReference: 'Page 36 · Venture 150th Edition',
    significance: 'High-Level Media Statesmanship',
    significanceAr: 'مكانة مرموقة في أوساط الصحافة والإعلام الإقليمي',
  },
  {
    id: 'heritage-sanctuary',
    title: 'A Heritage Sanctuary: Inscribed World Heritage Sites in Jordan',
    titleAr: 'ملاذ التراث الإنساني: مواقع التراث العالمي وقوائم اليونسكو في الأردن',
    publication: 'Venture Magazine',
    edition: '151st Edition Special Feature',
    date: 'Dec 2019 / Jan 2020',
    role: 'By Yousef G. Baarah',
    category: 'Tourism & Heritage',
    categoryAr: 'السياحة والتراث الوطني',
    summary:
      'Macro-economic and cultural investigation mapping Jordan’s 5 UNESCO World Heritage sites and 15 tentative list candidates, analyzing their role in national branding and foreign direct investment.',
    summaryAr:
      'دراسة ماكرو-اقتصادية وثقافية تستعرض مواقع اليونسكو الخمسة المسجلة و15 موقعاً على اللائحة التمهيدية، وتحلل دورها في صناعة الهوية الوطنية وجذب الاستثمار الأجنبي.',
    keyHighlights: [
      'Economic modeling of heritage tourism revenue streams',
      'Comparative tourism metrics with global heritage hubs',
      'Architectural photo essays spanning Petra, Wadi Rum, and As-Salt',
    ],
    keyHighlightsAr: [
      'نمذجة اقتصادية لعوائد السياحة التراثية في الميزان التجاري',
      'مؤشرات سياحية مقارنة مع أبرز الوجهات التراثية العالمية',
      'توثيق بصري معماري يشمل البترا، وادي رم، ومدينة السلط',
    ],
    pageReference: 'Pages 76-88 · Venture 151st Edition',
    significance: 'National Asset Intelligence Analysis',
    significanceAr: 'تحليل استراتيجي لإدارة الأصول الوطنية',
  },
  {
    id: '50-brands-of-heritage',
    title: '50 Brands of Heritage: Celebrating Local & Global Trademarks',
    titleAr: '50 علامة تجارية عريقة: الاحتفاء بالعلامات الوطنية والعالمية',
    publication: 'Venture Magazine',
    edition: '151st Edition Archival Special',
    date: 'Dec 2019 / Jan 2020',
    role: 'By Ghalia Mousa and Yousef G. Baarah',
    category: 'Legacy & Industry',
    categoryAr: 'العلامات التجارية والتاريخ الصناعي',
    summary:
      'Curated chronological compendium tracking 50 authentic regional and multinational heritage brands (dating from 1665 to 1980s), evaluating brand equity and institutional trust.',
    summaryAr:
      'ملف زمني شامل يتتبع 50 علامة تجارية إقليمية وعالمية عريقة (منذ عام 1665 وحتى ثمانينيات القرن الماضي)، ويحلل القيمة المؤسسية ورأس المال الرمزي للعلامات.',
    keyHighlights: [
      'Profiles on Saint-Gobain (1665), Citibank (1812), Arab Bank (1930), Hikma (1978)',
      'Brand heritage as an operating asset for corporate longevity',
      'Cross-border valuation of intangible brand equity',
    ],
    keyHighlightsAr: [
      'ملفات تعريفية: سان غوبان (1665)، سيتي بنك (1812)، البنك العربي (1930)، الحكمة (1978)',
      'التراث المؤسسي كأصل تشغيلي يعزز ديمومة واستقرار الشركات',
      'تقييم مالي واستراتيجي للأصول المعنوية للعلامات التجارية',
    ],
    pageReference: 'Pages 43-75 · Venture 151st Edition',
    significance: 'Brand Equity & Valuation Framework',
    significanceAr: 'إطار منهجي لتقييم أصول وهوية العلامات التجارية',
  },
  {
    id: 'majestic-legacy-photos',
    title: 'In Photos: The Majestic Legacy — A Tribute to HM King Hussein',
    titleAr: 'في صور: الإرث العظيم — تكريم ذكرى جلالة الملك الحسين بن طلال',
    publication: 'Venture Magazine',
    edition: '150th Edition Special Photo-Essay',
    date: 'Dec 2018 / Jan 2019',
    role: 'Curated & Authored by Yousef G. Baarah',
    category: 'Royal & Sovereign',
    categoryAr: 'سرد بصري وتاريخي سيادي',
    summary:
      'A photographic and documentary journey spanning 1953 to 1999 in collaboration with the King Hussein Foundation, celebrating historical diplomacy, statecraft, and economic modernization.',
    summaryAr:
      'رحلة وثائقية وبصرية تمتد من 1953 إلى 1999 بالتعاون مع مؤسسة الملك الحسين، تستعرض الدبلوماسية التاريخية، بناء الدولة، وتحديث الاقتصاد الوطني.',
    keyHighlights: [
      'Rare archival photography with world leaders (Clinton, Blair, Mandela, Chirac)',
      'Editorial narrative on state-building, sovereignty, and regional peace',
      'Official media partnership with royal and institutional archives',
    ],
    keyHighlightsAr: [
      'صور أرشيفية نادرة مع قادة العالم (كلينتون، بلير، مانديلا، شيراك)',
      'سرد تحريري رفيع حول بناء مؤسسات الدولة والسيادة والاستقرار',
      'شراكة إعلامية رسمية مع الأرشيفات الملكية والمؤسسية',
    ],
    pageReference: 'Pages 90-115 · Venture 150th Edition',
    significance: 'Sovereign Diplomatic Archival Leadership',
    significanceAr: 'إدارة وتوجيه الأرشيف الدبلوماسي والسيادي',
  },
];

export const EditorialBylinesAndCommercialEngine: React.FC = () => {
  const { isArabic, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'bylines' | 'arbitrage' | 'horology' | 'diplomatic' | 'soularabia'>('bylines');
  const [selectedArticle, setSelectedArticle] = useState<BylineArticle | null>(null);

  return (
    <section
      id="editorial-vault"
      className="py-20 bg-[#FBF9F5] border-b border-[#0D2B4E]/10 relative overflow-hidden"
      aria-labelledby="editorial-vault-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8964A] font-mono">
                {t('Physical Archive & Commercial Intelligence', 'الأرشيف الموثق والذكاء التجاري')}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8964A]" />
            </div>
            <h2
              id="editorial-vault-heading"
              className="text-3xl sm:text-4xl font-serif font-medium text-[#0D2B4E]"
            >
              {t(
                'Editorial Bylines & Commercial Architecture Engine',
                'المقالات المنشورة، إبرام الصفقات وحوكمة العلامات الفاخرة'
              )}
            </h2>
            <p className="text-sm text-[#4B5563] leading-relaxed font-light">
              {t(
                'Direct physical evidence of published sovereign interviews, landmark business archives, high-margin rate arbitrage negotiations, and decade-long luxury account stewardship.',
                'أدلة مادية موثقة من واقع المطبوعات الأصلية تشمل المقالات واللقاءات الملكية المنشورة، آليات التحكيم المالي لصفقات الإعلانات العالمية، وإدارة كبرى علامات الساعات السويسرية.'
              )}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-[#0D2B4E] text-[#E6D2A8] text-xs font-mono font-bold shadow-xs">
              {t('Brand Foundation v1.1 Verified', 'معتمد وفق وثيقة المرجع v1.1')}
            </span>
          </div>
        </div>

        {/* Master Feature Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-[#0D2B4E]/15 pb-4">
          <button
            onClick={() => setActiveTab('bylines')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'bylines'
                ? 'bg-[#0D2B4E] text-[#E6D2A8] shadow-md'
                : 'bg-white text-[#4B5563] border border-[#0D2B4E]/10 hover:bg-[#F6F3ED]'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#B8964A]" />
            <span>{t('Published Bylines & Royal Interviews', 'المقالات واللقاءات الملكية المنشورة')}</span>
          </button>

          <button
            onClick={() => setActiveTab('arbitrage')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'arbitrage'
                ? 'bg-[#0D2B4E] text-[#E6D2A8] shadow-md'
                : 'bg-white text-[#4B5563] border border-[#0D2B4E]/10 hover:bg-[#F6F3ED]'
            }`}
          >
            <DollarSign className="w-4 h-4 text-[#B8964A]" />
            <span>{t('Bloomberg Deal & Rate Arbitrage', 'هندسة صفقات بلومبرغ والتحكيم السعري')}</span>
          </button>

          <button
            onClick={() => setActiveTab('horology')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'horology'
                ? 'bg-[#0D2B4E] text-[#E6D2A8] shadow-md'
                : 'bg-white text-[#4B5563] border border-[#0D2B4E]/10 hover:bg-[#F6F3ED]'
            }`}
          >
            <Crown className="w-4 h-4 text-[#B8964A]" />
            <span>{t('Rolex, Tudor & Luxury Horology', 'رولكس، تيودور والعلامات السويسرية')}</span>
          </button>

          <button
            onClick={() => setActiveTab('diplomatic')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'diplomatic'
                ? 'bg-[#0D2B4E] text-[#E6D2A8] shadow-md'
                : 'bg-white text-[#4B5563] border border-[#0D2B4E]/10 hover:bg-[#F6F3ED]'
            }`}
          >
            <Globe2 className="w-4 h-4 text-[#B8964A]" />
            <span>{t('Diplomatic & Bilateral Guides', 'التقارير الدبلوماسية وأدلة الأعمال')}</span>
          </button>

          <button
            onClick={() => setActiveTab('soularabia')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'soularabia'
                ? 'bg-[#0D2B4E] text-[#E6D2A8] shadow-md'
                : 'bg-white text-[#4B5563] border border-[#0D2B4E]/10 hover:bg-[#F6F3ED]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#B8964A]" />
            <span>{t('Soul Arabia & Carole Samaha Campaign', 'سول أرابيا وحملة كارول سماحة')}</span>
          </button>
        </div>

        {/* Tab 1: Published Bylines Archive */}
        {activeTab === 'bylines' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Author Credential Card */}
            <div className="bg-gradient-to-r from-[#060F1A] via-[#0D2B4E] to-[#143E6B] rounded-2xl p-6 text-white border border-[#B8964A]/30 shadow-lg flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-[98px] h-[98px] rounded-full overflow-hidden border-2 border-[#B8964A] shadow-md shrink-0 bg-black">
                <img
                  src={yousefHeroPortrait}
                  alt="Yousef G. Baarah - Author & Editor"
                  referrerPolicy="no-referrer"
                  className="w-[98px] h-[98px] pt-0 pb-0 pl-0 ml-0 bg-black object-cover object-top"
                />
              </div>
              <div className="space-y-1.5 text-center md:text-left rtl:md:text-right flex-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B8964A]">
                    {t('Senior Business Journalist & Editorial Lead', 'كاتب وصحفي أعمال رئيسي ومسؤول تحرير')}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-emerald-300 border border-emerald-400/30">
                    {t('Official Venture Magazine Byline', 'كاتب رسمي لدى مجلة فنتشر')}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                  {isArabic ? 'يوسف غسان بعارة — الأرشيف الصحفي والمقابلات الرسمية' : 'Yousef G. Baarah — Archival Features & Sovereign Interviews'}
                </h3>
                <p className="text-xs text-white/80 leading-relaxed font-light">
                  {t(
                    'Exclusive sovereign dialogues, royal interviews, and historical 150-leader chronicles authored and curated for Venture Magazine, World Economic Forum guides, and sovereign distribution corridors.',
                    'حوارات سيادية ومقابلات ملكية حصرية، وملفات توثيق تاريخية تضم 150 قائداً اقتصادياً حررها ووثقها يوسف غسان بعارة لمجلة فنتشر وتقارير المنتدى الاقتصادي العالمي.'
                  )}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {BYLINE_ARTICLES.map((article) => (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group bg-white p-6 rounded-2xl border border-[#0D2B4E]/15 hover:border-[#B8964A] shadow-xs hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded bg-[#0D2B4E]/5 text-[#0D2B4E] text-[10px] font-mono font-bold uppercase tracking-wider">
                        {isArabic ? article.categoryAr : article.category}
                      </span>
                      <span className="text-[10px] font-mono text-[#B8964A] font-semibold">
                        {article.edition.split(' ')[0]}
                      </span>
                    </div>

                    <h3 className="text-base font-serif font-bold text-[#0D2B4E] group-hover:text-[#B8964A] transition-colors leading-snug">
                      {isArabic ? article.titleAr : article.title}
                    </h3>

                    <div className="text-[11px] font-mono text-[#B8964A] font-medium">
                      {article.role}
                    </div>

                    <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-3 font-light">
                      {isArabic ? article.summaryAr : article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#0D2B4E]/10 mt-4 flex items-center justify-between text-[11px]">
                    <span className="text-[#4B5563] font-mono">{article.pageReference}</span>
                    <span className="text-[#0D2B4E] font-bold group-hover:text-[#B8964A] inline-flex items-center gap-1">
                      <span>{t('View Citation', 'عرض التوثيق')}</span>
                      <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Rate Arbitrage & Commercial Deal Structuring */}
        {activeTab === 'arbitrage' && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#0D2B4E]/15 shadow-xl space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#0D2B4E]/10 pb-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#B8964A]">
                  {t('Commercial Deal Structuring Blueprint', 'مخطط هندسة وإبرام الصفقات التجارية')}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D2B4E]">
                  {t('Bloomberg Businessweek "Focus on Jordan" Rate Arbitrage', 'صفقة بلومبرغ بيزنس ويك "التركيز على الأردن" وهندسة الهوامش')}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-[#F6F3ED] border border-[#0D2B4E]/10 text-xs font-mono font-bold text-[#0D2B4E]">
                  {t('High-Margin Multi-Channel Funnel', 'قمع تسعيري متعدد القنوات عالي الربحية')}
                </span>
              </div>
            </div>

            {/* 3-Step Funnel Visualizer */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#F6F3ED] border border-[#0D2B4E]/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#4B5563]">
                    {t('Step 1: Standard Barrier', 'المرحلة 1: العائق السعري الأولي')}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 text-[10px] font-mono font-bold">
                    {t('Prohibitive Rate', 'سعر مرتفع')}
                  </span>
                </div>
                <div className="text-3xl font-serif font-bold text-[#0D2B4E]">US$ 7,500</div>
                <div className="text-xs font-bold text-[#0D2B4E]">
                  {t('Standard Bloomberg Rate Card / Page', 'سعر الصفحة الرسمي في بلومبرغ بيزنس ويك')}
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed font-light">
                  {t(
                    'Market feedback indicated local Jordanian blue-chips perceived $7,500 as an entry barrier.',
                    'أكدت دراسة السوق أن السعر الرسمي لبلومبرغ شكّل عائقاً أمام مشاركة الشركات الأردنية.'
                  )}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0D2B4E] text-white space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#E6D2A8]">
                    {t('Step 2: The Package Proposal', 'المرحلة 2: الحزمة التسويقية المبتكرة')}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#B8964A] text-[#060F1A] text-[10px] font-mono font-bold">
                    {t('Incentive Bundle', 'حزمة القيمة المضافة')}
                  </span>
                </div>
                <div className="text-3xl font-serif font-bold text-[#E6D2A8]">US$ 4,500</div>
                <div className="text-xs font-bold text-white">
                  {t('Client Multi-Platform Incentive Bundle', 'حزمة العميل الشاملة لعدة منصات')}
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-light">
                  {t(
                    'Bundled 1 Full-Page in Bloomberg + 1 Full-Page in Venture Magazine + Venture Online Daily Banner.',
                    'دمج صفحة إعلانية كاملة في بلومبرغ + صفحة في فنتشر + إعلان بانر رقمي يومي.'
                  )}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F6F3ED] border border-[#B8964A]/50 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#B8964A]">
                    {t('Step 3: The Arbitrage Margin', 'المرحلة 3: هامش التحكيم والأرباح')}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                    {t('Secured Profit', 'أرباح مؤكدة')}
                  </span>
                </div>
                <div className="text-3xl font-serif font-bold text-[#B8964A]">US$ 2,720</div>
                <div className="text-xs font-bold text-[#0D2B4E]">
                  {t('Negotiated Base Bloomberg Nett Cost', 'التكلفة الصافية المتفاوض عليها مع بلومبرغ')}
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed font-light">
                  {t(
                    'Lobbied Bloomberg for volume discounts to $2,720-$3,000, creating substantial gross profit margin.',
                    'التفاوض مع بلومبرغ لخفض التكلفة الصافية إلى 2,720$ مما حقق هامش ربح استثنائي للمؤسسة.'
                  )}
                </p>
              </div>
            </div>

            {/* Signed Blue-Chip Corporate Clients */}
            <div className="space-y-3 pt-4 border-t border-[#0D2B4E]/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D2B4E]">
                {t('Verified Signed Corporate Leads on Bloomberg Report', 'الشركات القيادية الموقعة رسمياً في تقرير بلومبرغ')}:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center">
                {['Arab Bank', 'Orange Jordan', 'Umniah Telecom', 'Arab Potash', 'Aqaba Dev Corp (ADC)', 'Airport Int. Group'].map(
                  (client, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#F6F3ED] border border-[#0D2B4E]/10 text-xs font-bold text-[#0D2B4E]"
                    >
                      {client}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Horology & Luxury Account Engine */}
        {activeTab === 'horology' && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#0D2B4E]/15 shadow-xl space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#0D2B4E]/10 pb-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#B8964A]">
                  {t('Luxury Portfolio & Swiss Horology Leadership', 'إدارة الساعات السويسرية والعلامات الفاخرة')}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D2B4E]">
                  {t('The Karnig Co. Rolex & Tudor Retention Engine', 'محرك حسابات كرنك: رولكس، تيودور والأصول السويسرية')}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-[#0D2B4E] text-[#E6D2A8] text-xs font-mono font-bold">
                  {t('100% Client Retention Rate', 'معدل استبقاء وتجديد 100%')}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Rolex Metric Box */}
              <div className="md:col-span-4 p-6 rounded-2xl bg-[#F6F3ED] border border-[#0D2B4E]/10 text-center space-y-2">
                <span className="text-[10px] font-mono uppercase font-bold text-[#4B5563]">
                  {t('Rolex Annual Contract (2017)', 'عقد رولكس السنوي')}
                </span>
                <div className="text-3xl font-serif font-bold text-[#B8964A]">31,300 JOD</div>
                <p className="text-xs text-[#4B5563]">
                  {t('Recurring annual print dominance alongside major editorial cover stories.', 'هيمنة إعلانية سنوية متكررة بجانب قصص الغلاف الرئيسية.')}
                </p>
              </div>

              {/* Tudor Metric Box */}
              <div className="md:col-span-4 p-6 rounded-2xl bg-[#F6F3ED] border border-[#0D2B4E]/10 text-center space-y-2">
                <span className="text-[10px] font-mono uppercase font-bold text-[#4B5563]">
                  {t('Tudor Annual Contract (2017)', 'عقد تيودور السنوي')}
                </span>
                <div className="text-3xl font-serif font-bold text-[#0D2B4E]">11,400 JOD</div>
                <p className="text-xs text-[#4B5563]">
                  {t('Heritage watch native storytelling & full-page luxury campaign placements.', 'سرد تسويقي مخصص ووضع إعلانات الحزام الفاخر بالحجم الكامل.')}
                </p>
              </div>

              {/* Verified Physical Evidence Badge */}
              <div className="md:col-span-4 p-6 rounded-2xl bg-[#0D2B4E] text-white space-y-2">
                <div className="flex items-center gap-1 text-[#E6D2A8] text-xs font-bold uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{t('Strict Swiss Compliance', 'التزام صارم بالمعايير السويسرية')}</span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-light">
                  {t(
                    'Flawlessly translated rigid, heritage-driven Western luxury guidelines into high-impact Middle Eastern business intelligence context.',
                    'الترجمة الدقيقة لمعايير العلامات السويسرية العالمية ضمن سياق ذكاء الأعمال وصناع القرار في الشرق الأوسط.'
                  )}
                </p>
              </div>
            </div>

            {/* Swiss Luxury Roster Grid */}
            <div className="space-y-3 pt-4 border-t border-[#0D2B4E]/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D2B4E]">
                {t('Managed Elite Horology & Luxury Brand Roster', 'قائمة العلامات الفاخرة والساعات السويسرية المدارة')}:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center">
                {['Rolex', 'Tudor', 'Patek Philippe', 'Bvlgari (Octo)', 'Cartier (Ballon Bleu)', 'Hublot', 'Breitling', 'Zenith', 'Bovet 1822', 'Arnold & Son', 'Longines', 'SevenFriday'].map(
                  (brand, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#F6F3ED] border border-[#0D2B4E]/10 text-xs font-bold text-[#0D2B4E]"
                    >
                      {brand}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Diplomatic & Bilateral Economic Reports */}
        {activeTab === 'diplomatic' && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#0D2B4E]/15 shadow-xl space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#0D2B4E]/10 pb-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#B8964A]">
                  {t('Sovereign & Diplomatic Trade Reports', 'التقارير الدبلوماسية وأدلة التنمية الوطنية')}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D2B4E]">
                  {t('France in Jordan & USAID LENS Starting Up Manuals', 'تقرير "فرنسا في الأردن" ودليل "ستارت أب" بالتعاون مع الوكالة الأمريكية')}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-[#0D2B4E] text-[#E6D2A8] text-xs font-mono font-bold">
                  {t('Sovereign Multilateral Alliances', 'تحالفات سيادية وتنموية')}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* France in Jordan Box */}
              <div className="p-6 rounded-2xl bg-[#F6F3ED] border border-[#0D2B4E]/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0D2B4E]">
                    {t('France in Jordan (2017)', 'تقرير فرنسا في الأردن (2017)')}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-mono font-bold">
                    {t('Diplomatic Mission', 'بعثة دبلوماسية')}
                  </span>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed font-light">
                  {t(
                    'Coordinated high-level coverage profiling major French economic players in Jordan (aviation, energy, telecom, banking). Facilitated exclusive interview with French Ambassador H.E. Caroline Dumas and integrated luxury positioning with Cartier Ballon Bleu.',
                    'تنسيق تغطية شاملة لكبرى الشركات الفرنسية العاملة في الأردن، إجراء لقاء حصري مع السفيرة الفرنسية كارولين دوما ودمج الترويج الفاخر مع كارتييه.'
                  )}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['Air France / KLM', 'Total Energy', 'Societe Generale (SGBJ)', 'CMA CGM', 'Orange Jordan'].map((p, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-white text-[10px] font-semibold text-[#0D2B4E] border border-[#0D2B4E]/10">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Starting Up 2016 Guide Box */}
              <div className="p-6 rounded-2xl bg-[#F6F3ED] border border-[#0D2B4E]/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0D2B4E]">
                    {t('Starting Up 2016 Guide (USAID LENS)', 'دليل ستارت أب 2016 (الوكالة الأمريكية للتنمية)')}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                    {t('National Manual', 'دليل وطني رسمي')}
                  </span>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed font-light">
                  {t(
                    'Architected Jordan’s primary small business registration manual in partnership with USAID LENS, Ministry of Industry, Trade & Supply, and Companies Control Department. Published in English & Arabic as a tangible tool for economic development.',
                    'تصميم وتوجيه الدليل الرسمي لتسجيل وترخيص المشاريع الريادية في الأردن بالشراكة مع مشروع مساندة الأعمال المحلية التابع للوكالة الأمريكية للتنمية ووزارة الصناعة والتجارة.'
                  )}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {['USAID LENS', 'Ministry of Industry & Trade', 'Bank al Etihad (SME 100K JOD)', 'Zain ZINC', 'MEPS'].map((p, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-white text-[10px] font-semibold text-[#0D2B4E] border border-[#0D2B4E]/10">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Soul Arabia & Carole Samaha Luxury Campaign */}
        {activeTab === 'soularabia' && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#0D2B4E]/15 shadow-xl space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#0D2B4E]/10 pb-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#B8964A]">
                  {t('Luxury Lifestyle & Celebrity Production Architecture', 'هيكلة الإنتاج الفاخر وحملات المشاهير')}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D2B4E]">
                  {t('Soul Arabia Media Kit 2023 & Carole Samaha Dead Sea Production', 'سول أرابيا: دليل الإعلانات 2023 وإنتاج البحر الميت مع كارول سماحة')}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-[#0D2B4E] text-[#E6D2A8] text-xs font-mono font-bold">
                  {t('Country Marketing Director Jordan', 'مدير التسويق الإقليمي — الأردن')}
                </span>
              </div>
            </div>

            {/* Carole Samaha Campaign Showcase Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0D2B4E] text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-[#B8964A]/30">
              <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-[#B8964A]/40 aspect-video shadow-lg">
                <img
                  src={soulArabiaCaroleImg}
                  alt="Carole Samaha x Soul Arabia Dead Sea Campaign"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-mono font-bold text-[#E6D2A8] uppercase tracking-wider">
                    #SoulArabiaXCAROLE · #TakeOnLifestyle · #VisitJordan
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#B8964A]/20 border border-[#B8964A]/40 text-[#E6D2A8] text-xs font-mono font-bold uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t('Celebrity Cover & Commercial Governance', 'إنتاج غلاف المشاهير والإدارة التجارية')}</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  {isArabic ? 'كارول سماحة في البحر الميت — التوجيه التجاري والشراكات الفاخرة' : 'Carole Samaha at the Dead Sea — Commercial Direction & High-End Alliances'}
                </h4>
                <p className="text-xs text-white/80 leading-relaxed font-light">
                  {t(
                    'Orchestrated multi-tier commercial partnerships for Soul Arabia’s landmark Dead Sea production featuring Arab superstar Carole Samaha. Directed high-profile sponsor integrations across automotive, hospitality, and haute couture.',
                    'قيادة الشراكات التجارية الكبرى لإنتاج سول أرابيا في البحر الميت مع النجمة العربية كارول سماحة، وتنسيق الرعايات مع قطاعات السيارات الفاخرة، الضيافة، والأزياء الراقية.'
                  )}
                </p>

                {/* Production Credits Breakdown */}
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 space-y-1.5 text-xs">
                  <div className="font-mono font-bold text-[#E6D2A8] text-[11px] uppercase tracking-wider">
                    {t('Official Production Credits', 'فريق الإنتاج والرعايات الرسمية')}:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-white/90 font-light">
                    <div><strong>Directed by:</strong> Sultan Abu Tair</div>
                    <div><strong>Commercial Director:</strong> Yousef Baarah</div>
                    <div><strong>Styling:</strong> Chiara Boni / Roberto Cavalli</div>
                    <div><strong>Location:</strong> Kempinski Hotel Ishtar Dead Sea</div>
                    <div><strong>Tourism Partner:</strong> Visit Jordan (MOTA)</div>
                    <div><strong>Automotive Partner:</strong> Infiniti Jordan</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Media Kit 2023 Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-[#F6F3ED] border border-[#0D2B4E]/10 text-center space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-[#4B5563]">
                  {t('Monthly Readers', 'القراء شهرياً')}
                </span>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0D2B4E]">105,000</div>
                <div className="text-[10px] text-[#4B5563]">{t('Print & Digital Readers', 'قراء المطبوعة والرقمي')}</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F6F3ED] border border-[#0D2B4E]/10 text-center space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-[#4B5563]">
                  {t('Unique Visitors', 'الزوار الفريدون شهرياً')}
                </span>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#B8964A]">285,000</div>
                <div className="text-[10px] text-[#4B5563]">{t('Google Analytics Audited', 'إحصائيات موثقة')}</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F6F3ED] border border-[#0D2B4E]/10 text-center space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-[#4B5563]">
                  {t('Social Reach', 'المتابعون عبر المنصات')}
                </span>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0D2B4E]">435,000</div>
                <div className="text-[10px] text-[#4B5563]">{t('Instagram & Meta Ecosystem', 'إنستغرام وميتا')}</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F6F3ED] border border-[#0D2B4E]/10 text-center space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-[#4B5563]">
                  {t('Print Distribution', 'نسخ الطباعة الفاخرة')}
                </span>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#B8964A]">25,000</div>
                <div className="text-[10px] text-[#4B5563]">{t('VIP Lounges, KSA, UAE, Jordan', 'صالات VIP والخليج')}</div>
              </div>
            </div>

            {/* Official Media Kit 2023 Rate Card */}
            <div className="space-y-3 pt-4 border-t border-[#0D2B4E]/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D2B4E]">
                {t('Soul Arabia Official Commercial Rate Card (2023 Media Kit)', 'قائمة الأسعار الرسمية — دليل الإعلانات 2023')}:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                <div className="p-3.5 rounded-xl bg-[#F6F3ED] border border-[#0D2B4E]/10 text-center space-y-1">
                  <div className="text-[10px] font-mono uppercase text-[#4B5563]">{t('Front Cover / Story', 'غلاف المطبوعة')}</div>
                  <div className="text-lg font-serif font-bold text-[#B8964A]">$27,500</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F6F3ED] border border-[#0D2B4E]/10 text-center space-y-1">
                  <div className="text-[10px] font-mono uppercase text-[#4B5563]">{t('Outside Back Cover', 'الغلاف الخلفي')}</div>
                  <div className="text-lg font-serif font-bold text-[#0D2B4E]">$17,750</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F6F3ED] border border-[#0D2B4E]/10 text-center space-y-1">
                  <div className="text-[10px] font-mono uppercase text-[#4B5563]">{t('Fashion Photoshoot', 'جلسة تصوير أزياء')}</div>
                  <div className="text-lg font-serif font-bold text-[#B8964A]">$10,500</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F6F3ED] border border-[#0D2B4E]/10 text-center space-y-1">
                  <div className="text-[10px] font-mono uppercase text-[#4B5563]">{t('Digital Cover', 'الغلاف الرقمي')}</div>
                  <div className="text-lg font-serif font-bold text-[#0D2B4E]">$9,500</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F6F3ED] border border-[#0D2B4E]/10 text-center space-y-1">
                  <div className="text-[10px] font-mono uppercase text-[#4B5563]">{t('Inside Front Spread', 'فردة الغلاف الأمامي')}</div>
                  <div className="text-lg font-serif font-bold text-[#B8964A]">$7,250</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F6F3ED] border border-[#0D2B4E]/10 text-center space-y-1">
                  <div className="text-[10px] font-mono uppercase text-[#4B5563]">{t('Double Page Spread', 'صفحة مزدوجة')}</div>
                  <div className="text-lg font-serif font-bold text-[#0D2B4E]">$4,950</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal for Article Citation Details */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#B8964A]/40 p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between border-b border-[#0D2B4E]/10 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B8964A]">
                  {selectedArticle.publication} · {selectedArticle.edition}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0D2B4E] mt-1">
                  {isArabic ? selectedArticle.titleAr : selectedArticle.title}
                </h3>
                <div className="text-xs font-semibold text-[#4B5563] mt-1 font-mono">
                  {selectedArticle.role}
                </div>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-2 rounded-full hover:bg-gray-100 text-[#4B5563]"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D2B4E] mb-1.5">
                  {t('Editorial Summary & Context', 'الملخص التحريري والسياق المهني')}
                </h4>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-light">
                  {isArabic ? selectedArticle.summaryAr : selectedArticle.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D2B4E] mb-2">
                  {t('Documented Editorial Pillars', 'المحاور التحريرية الموثقة')}
                </h4>
                <div className="space-y-2">
                  {(isArabic ? selectedArticle.keyHighlightsAr : selectedArticle.keyHighlights).map(
                    (h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#0D2B4E]">
                        <CheckCircle2 className="w-4 h-4 text-[#B8964A] shrink-0" />
                        <span>{h}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F6F3ED] border border-[#0D2B4E]/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs">
                <span className="font-mono text-[#0D2B4E] font-bold">
                  {selectedArticle.pageReference}
                </span>
                <span className="px-2.5 py-1 rounded bg-[#0D2B4E] text-[#E6D2A8] font-mono text-[10px] font-bold">
                  {isArabic ? selectedArticle.significanceAr : selectedArticle.significance}
                </span>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 bg-[#0D2B4E] text-white rounded-xl text-xs font-bold hover:bg-[#0A2540] transition-colors"
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
