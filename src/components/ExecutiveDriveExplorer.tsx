import React, { useState, useEffect, useCallback } from 'react';
import {
  initAuth,
  googleSignIn,
  logout,
  fetchDriveFiles,
  DriveFileItem,
  getAccessToken,
  formatAuthError,
  AuthErrorDetails,
} from '../lib/driveAuth';
import { useLanguage } from '../context/LanguageContext';
import {
  HardDrive,
  FileText,
  FileSpreadsheet,
  Presentation,
  ExternalLink,
  Search,
  RefreshCw,
  LogOut,
  Sparkles,
  Lock,
  Copy,
  Check,
  Globe,
  AlertCircle,
  ShieldCheck,
  Layers,
  HelpCircle,
} from 'lucide-react';

const CURATED_VAULT_FILES: DriveFileItem[] = [
  {
    id: 'ygb-exec-bio-2026',
    name: 'Yousef_G_Baarah_Executive_Profile_&_Biography_2026.pdf',
    mimeType: 'application/pdf',
    size: '1468006',
    modifiedTime: '2026-08-20T10:00:00Z',
    webViewLink: '/ai-review-dossier.html',
    owners: [{ displayName: 'Yousef G. Baarah', emailAddress: 'y.business.g.b@gmail.com' }],
  },
  {
    id: 'board-briefing-dossier',
    name: 'Board_Briefing_Dossier_Strategic_Communications_Mandate.pdf',
    mimeType: 'application/pdf',
    size: '2840112',
    modifiedTime: '2026-08-18T14:30:00Z',
    webViewLink: '#governance',
    owners: [{ displayName: 'Yousef G. Baarah', emailAddress: 'y.business.g.b@gmail.com' }],
  },
  {
    id: 'amman-tv-turnaround-study',
    name: 'Amman_TV_Commercial_&_Broadcast_Restructure_Case_Study.pdf',
    mimeType: 'application/pdf',
    size: '3150240',
    modifiedTime: '2026-08-15T09:15:00Z',
    webViewLink: '#work',
    owners: [{ displayName: 'Executive Office', emailAddress: 'y.business.g.b@gmail.com' }],
  },
  {
    id: 'wef-jordan-investment-report',
    name: 'World_Economic_Forum_Special_Report_Jordan_Investment.pdf',
    mimeType: 'application/pdf',
    size: '4620180',
    modifiedTime: '2026-08-10T12:00:00Z',
    webViewLink: '#editorial-vault',
    owners: [{ displayName: 'Venture Media / WEF Archive', emailAddress: 'y.business.g.b@gmail.com' }],
  },
  {
    id: 'soul-arabia-campaign-deck',
    name: 'Soul_Arabia_Luxury_Campaign_&_Commercial_ROI_Deck.presentation',
    mimeType: 'application/vnd.google-apps.presentation',
    size: '5242880',
    modifiedTime: '2026-08-08T16:45:00Z',
    webViewLink: '#work',
    owners: [{ displayName: 'Commercial Strategy', emailAddress: 'y.business.g.b@gmail.com' }],
  },
  {
    id: 'stakeholder-ecosystem-matrix',
    name: 'Regional_Stakeholder_Engagement_&_Media_Matrix_MENA_GCC.spreadsheet',
    mimeType: 'application/vnd.google-apps.spreadsheet',
    size: '942080',
    modifiedTime: '2026-08-05T11:20:00Z',
    webViewLink: '#alignment',
    owners: [{ displayName: 'Yousef G. Baarah', emailAddress: 'y.business.g.b@gmail.com' }],
  },
  {
    id: 'reputation-crisis-playbook',
    name: 'Institutional_Reputation_Risk_&_Governance_Playbook.document',
    mimeType: 'application/vnd.google-apps.document',
    size: '620400',
    modifiedTime: '2026-07-28T08:00:00Z',
    webViewLink: '#governance',
    owners: [{ displayName: 'Advisory Council', emailAddress: 'y.business.g.b@gmail.com' }],
  },
  {
    id: 'omnichannel-broadcast-ratings',
    name: 'Broadcast_Streaming_Omnichannel_Growth_Audit.spreadsheet',
    mimeType: 'application/vnd.google-apps.spreadsheet',
    size: '1240000',
    modifiedTime: '2026-07-15T15:30:00Z',
    webViewLink: '#proof',
    owners: [{ displayName: 'Broadcast Operations', emailAddress: 'y.business.g.b@gmail.com' }],
  },
];

export const ExecutiveDriveExplorer: React.FC = () => {
  const { isArabic, t } = useLanguage();
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const [vaultMode, setVaultMode] = useState<'curated' | 'live'>('curated');
  const [needsAuth, setNeedsAuth] = useState<boolean>(true);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [liveFiles, setLiveFiles] = useState<DriveFileItem[]>([]);
  const [loadingFiles, setLoadingFiles] = useState<boolean>(false);
  const [errorDetails, setErrorDetails] = useState<AuthErrorDetails | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'pdf' | 'doc' | 'slides' | 'sheet'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedDomain, setCopiedDomain] = useState<boolean>(false);

  const currentDomain = typeof window !== 'undefined' ? window.location.hostname : '';

  const loadLiveFiles = useCallback(
    async (query?: string, filter?: 'all' | 'pdf' | 'doc' | 'slides' | 'sheet') => {
      setLoadingFiles(true);
      setErrorDetails(null);
      try {
        const fileList = await fetchDriveFiles(query, filter);
        setLiveFiles(fileList);
      } catch (err: any) {
        console.error('Error fetching drive files:', err);
        setErrorDetails(formatAuthError(err));
      } finally {
        setLoadingFiles(false);
      }
    },
    []
  );

  useEffect(() => {
    const unsubscribe = initAuth(
      (authUser, authToken) => {
        setUser(authUser);
        setToken(authToken);
        setNeedsAuth(false);
        setVaultMode('live');
        loadLiveFiles(searchQuery, selectedFilter);
      },
      () => {
        setUser(null);
        setToken(null);
        setNeedsAuth(true);
      }
    );

    getAccessToken().then((cached) => {
      if (cached) {
        setToken(cached);
        setNeedsAuth(false);
        setVaultMode('live');
        loadLiveFiles(searchQuery, selectedFilter);
      }
    });

    return () => unsubscribe();
  }, [loadLiveFiles]);

  const handleSignIn = async () => {
    setIsLoggingIn(true);
    setErrorDetails(null);
    try {
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
        setToken(result.accessToken);
        setNeedsAuth(false);
        setVaultMode('live');
        loadLiveFiles(searchQuery, selectedFilter);
      }
    } catch (err: any) {
      console.error('Sign in error:', err);
      const parsed = formatAuthError(err);
      setErrorDetails(parsed);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await logout();
      setUser(null);
      setToken(null);
      setNeedsAuth(true);
      setLiveFiles([]);
      setVaultMode('curated');
    } catch (err: any) {
      console.error('Sign out error:', err);
    }
  };

  const handleCopyDomain = () => {
    if (!currentDomain) return;
    navigator.clipboard.writeText(currentDomain).then(() => {
      setCopiedDomain(true);
      setTimeout(() => setCopiedDomain(false), 2000);
    });
  };

  // Filter curated files locally
  const filteredCuratedFiles = CURATED_VAULT_FILES.filter((file) => {
    const matchesSearch =
      !searchQuery.trim() ||
      file.name.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedFilter === 'pdf') return file.mimeType.includes('pdf');
    if (selectedFilter === 'doc')
      return file.mimeType.includes('document');
    if (selectedFilter === 'slides')
      return file.mimeType.includes('presentation');
    if (selectedFilter === 'sheet')
      return file.mimeType.includes('spreadsheet');

    return true;
  });

  const displayFiles = vaultMode === 'curated' ? filteredCuratedFiles : liveFiles;

  const handleCopyLink = (file: DriveFileItem) => {
    let link = file.webViewLink || '';
    if (link.startsWith('#')) {
      link = `${window.location.origin}${window.location.pathname}${link}`;
    } else if (link.startsWith('/')) {
      link = `${window.location.origin}${link}`;
    } else if (!link) {
      link = `https://drive.google.com/file/d/${file.id}/view`;
    }
    navigator.clipboard.writeText(link).then(() => {
      setCopiedId(file.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const formatFileSize = (bytes?: string) => {
    if (!bytes) return '';
    const num = parseInt(bytes, 10);
    if (isNaN(num)) return '';
    if (num < 1024) return `${num} B`;
    if (num < 1024 * 1024) return `${(num / 1024).toFixed(1)} KB`;
    return `${(num / (1024 * 1024)).toFixed(1)} MB`;
  };

  const getFileIcon = (mimeType: string) => {
    if (mimeType.includes('pdf')) {
      return <FileText className="w-5 h-5 text-rose-500" />;
    }
    if (mimeType.includes('presentation')) {
      return <Presentation className="w-5 h-5 text-amber-500" />;
    }
    if (mimeType.includes('spreadsheet')) {
      return <FileSpreadsheet className="w-5 h-5 text-emerald-500" />;
    }
    if (mimeType.includes('document')) {
      return <FileText className="w-5 h-5 text-blue-500" />;
    }
    return <HardDrive className="w-5 h-5 text-[#B8964A]" />;
  };

  return (
    <div className="w-full mt-10 p-6 sm:p-8 rounded-2xl bg-white border border-[#0D2B4E]/15 shadow-xl space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0D2B4E]/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#0D2B4E] text-[#E6D2A8]">
            <HardDrive className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#B8964A]">
                {vaultMode === 'curated'
                  ? t('Verified Executive Dossier Vault', 'مستودع الوثائق التنفيذية المعتمد')
                  : t('Live Google Drive Cloud', 'سحابة Google Drive المباشرة')}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                <ShieldCheck className="w-3 h-3" />
                <span>{t('Verified Authentic', 'موثق ومعتمد')}</span>
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#0D2B4E]">
              {t('Executive Resource & Document Archive', 'أرشيف الوثائق والمستندات الاستراتيجية')}
            </h3>
          </div>
        </div>

        {/* Vault Mode Selector / User Session */}
        <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
          <div className="inline-flex p-1 bg-[#F6F3ED] rounded-xl border border-[#0D2B4E]/10 text-xs">
            <button
              onClick={() => {
                setVaultMode('curated');
                setErrorDetails(null);
              }}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                vaultMode === 'curated'
                  ? 'bg-[#0D2B4E] text-white shadow-xs font-semibold'
                  : 'text-[#4B5563] hover:text-[#0D2B4E]'
              }`}
            >
              {t('Curated Vault', 'المستودع المعتمد')}
            </button>
            <button
              onClick={() => {
                setVaultMode('live');
                if (!user && needsAuth) {
                  // User selected live mode
                }
              }}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                vaultMode === 'live'
                  ? 'bg-[#0D2B4E] text-white shadow-xs font-semibold'
                  : 'text-[#4B5563] hover:text-[#0D2B4E]'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t('Connect Live Drive', 'ربط Drive المباشر')}</span>
            </button>
          </div>

          {user && vaultMode === 'live' && (
            <div className="flex items-center gap-2 bg-[#F6F3ED] p-1.5 pr-2.5 rtl:pr-1.5 rtl:pl-2.5 rounded-xl border border-[#0D2B4E]/10">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || 'Google User'}
                  referrerPolicy="no-referrer"
                  className="w-7 h-7 rounded-full border border-[#0D2B4E]/20"
                />
              ) : (
                <div className="w-7 h-7 rounded-full bg-[#0D2B4E] text-white flex items-center justify-center text-xs font-bold">
                  {user.displayName ? user.displayName.charAt(0) : 'U'}
                </div>
              )}
              <div className="text-[11px] font-bold text-[#0D2B4E] max-w-[120px] truncate">
                {user.displayName || user.email}
              </div>
              <button
                onClick={handleSignOut}
                className="p-1 rounded text-[#4B5563] hover:text-rose-600 transition-colors"
                title={t('Disconnect Drive', 'فصل الحساب')}
                aria-label="Disconnect Google Drive"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Domain Authorization Helper (When auth/unauthorized-domain occurs) */}
      {errorDetails?.isUnauthorizedDomain && (
        <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-300 text-amber-950 space-y-3">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-200/60 text-amber-900 shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 flex-1">
              <h4 className="text-sm font-bold text-amber-900">
                {t(
                  'Domain Authorization Setup for Firebase & Google OAuth',
                  'إعداد تفويض النطاق لـ Firebase ومصادقة Google'
                )}
              </h4>
              <p className="text-xs text-amber-800 leading-relaxed font-light">
                {t(
                  'To enable live Google Drive authentication on this development or preview URL, add this domain to the Firebase Console Authorized Domains list:',
                  'لتفعيل تسجيل الدخول وربط Google Drive المباشر على هذا النطاق، أضف هذا النطاق إلى قائمة النطاقات المصرح بها في لوحة Firebase Console:'
                )}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <code className="px-3 py-1.5 rounded-lg bg-white border border-amber-300 font-mono text-xs text-amber-900 font-bold select-all">
                  {currentDomain}
                </code>
                <button
                  onClick={handleCopyDomain}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-amber-900 text-white rounded-lg text-xs font-semibold hover:bg-amber-800 transition-colors shadow-xs"
                >
                  {copiedDomain ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{t('Copied Domain', 'تم نسخ النطاق')}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t('Copy Domain', 'نسخ النطاق')}</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => setVaultMode('curated')}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-amber-300 text-amber-900 rounded-lg text-xs font-semibold hover:bg-amber-100/50 transition-colors"
                >
                  <Layers className="w-3.5 h-3.5 text-[#B8964A]" />
                  <span>{t('Browse Curated Dossier Vault', 'تصفح المستودع المعتمد مباشرة')}</span>
                </button>
              </div>
              <div className="text-[11px] text-amber-700/90 pt-1">
                {t(
                  'Steps: Firebase Console → Authentication → Settings → Authorized domains → Add domain.',
                  'الخطوات: لوحة تحكم Firebase ← Authentication ← Settings ← Authorized domains ← إضافة النطاق.'
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Live Mode & Needs Authentication Screen */}
      {vaultMode === 'live' && needsAuth && !user ? (
        <div className="py-8 px-4 text-center max-w-xl mx-auto space-y-5 bg-[#F6F3ED]/40 rounded-2xl border border-[#0D2B4E]/10">
          <div className="w-14 h-14 rounded-2xl bg-[#B8964A]/15 text-[#B8964A] flex items-center justify-center mx-auto border border-[#B8964A]/30">
            <Globe className="w-7 h-7" />
          </div>

          <div className="space-y-1.5">
            <h4 className="text-lg sm:text-xl font-serif font-medium text-[#0D2B4E]">
              {t(
                'Connect Live Google Drive Account',
                'ربط حساب Google Drive المباشر'
              )}
            </h4>
            <p className="text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed">
              {t(
                'Authenticate securely to browse your live Drive folders, case study attachments, and board files.',
                'سجل الدخول بأمان لتصفح ملفات ومجلدات Google Drive المباشرة وملحقات دراسات الحالة.'
              )}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              id="google-drive-signin-btn"
              onClick={handleSignIn}
              disabled={isLoggingIn}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200 disabled:opacity-60 shadow-xs ring-1 ring-black/5 w-full sm:w-auto justify-center"
            >
              {isLoggingIn ? (
                <RefreshCw className="w-5 h-5 animate-spin text-[#B8964A]" />
              ) : (
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-5 h-5 shrink-0"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
              )}
              <span>
                {isLoggingIn
                  ? t('Connecting...', 'جارٍ الاتصال...')
                  : t('Sign in with Google Drive', 'تسجيل الدخول باستخدام Google Drive')}
              </span>
            </button>

            <button
              onClick={() => setVaultMode('curated')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0D2B4E] text-white text-sm font-semibold hover:bg-[#0A2540] transition-colors w-full sm:w-auto justify-center"
            >
              <Sparkles className="w-4 h-4 text-[#B8964A]" />
              <span>{t('View Curated Dossier Files', 'عرض ملفات المستودع المعتمد')}</span>
            </button>
          </div>

          {errorDetails && !errorDetails.isUnauthorizedDomain && (
            <div className="flex items-center justify-center gap-2 text-xs text-rose-600 bg-rose-50 p-3 rounded-lg border border-rose-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorDetails.friendlyMessage}</span>
            </div>
          )}
        </div>
      ) : (
        /* Document Archive & Explorer */
        <div className="space-y-5">
          {/* Controls: Search + Type Filters */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (vaultMode === 'live' && !needsAuth) {
                    loadLiveFiles(e.target.value, selectedFilter);
                  }
                }}
                placeholder={t(
                  'Search executive dossiers, strategic reports, decks...',
                  'ابحث في التقارير الاستراتيجية، العروض، ملفات الحالات...'
                )}
                className="w-full pl-9 pr-8 rtl:pr-9 rtl:pl-8 py-2 bg-[#F6F3ED] border border-[#0D2B4E]/15 rounded-lg text-xs text-[#0D2B4E] focus:outline-none focus:ring-1 focus:ring-[#B8964A]"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    if (vaultMode === 'live' && !needsAuth) {
                      loadLiveFiles('', selectedFilter);
                    }
                  }}
                  className="absolute right-2.5 rtl:right-auto rtl:left-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {(
                [
                  { id: 'all', label: t('All Files', 'كافة الملفات') },
                  { id: 'pdf', label: 'PDFs' },
                  { id: 'doc', label: 'Docs' },
                  { id: 'slides', label: 'Decks' },
                  { id: 'sheet', label: 'Sheets' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setSelectedFilter(tab.id);
                    if (vaultMode === 'live' && !needsAuth) {
                      loadLiveFiles(searchQuery, tab.id);
                    }
                  }}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all ${
                    selectedFilter === tab.id
                      ? 'bg-[#B8964A] text-[#060F1A] font-bold shadow-xs'
                      : 'bg-[#F6F3ED] text-[#4B5563] hover:bg-[#EAE4D7]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}

              {vaultMode === 'live' && (
                <button
                  onClick={() => loadLiveFiles(searchQuery, selectedFilter)}
                  className="p-1.5 rounded-md bg-[#F6F3ED] text-[#0D2B4E] hover:bg-[#EAE4D7] border border-[#0D2B4E]/10"
                  title={t('Refresh Files', 'تحديث القائمة')}
                  aria-label="Refresh files list"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingFiles ? 'animate-spin' : ''}`} />
                </button>
              )}
            </div>
          </div>

          {/* Files Grid / State */}
          {loadingFiles ? (
            <div className="py-12 text-center text-xs text-[#4B5563] space-y-2">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto text-[#B8964A]" />
              <div>{t('Loading Drive files...', 'جارٍ تحميل الملفات...')}</div>
            </div>
          ) : displayFiles.length === 0 ? (
            <div className="py-12 text-center bg-[#F6F3ED]/60 rounded-xl border border-dashed border-[#0D2B4E]/15 space-y-2">
              <FileText className="w-8 h-8 mx-auto text-[#B8964A]/60" />
              <div className="text-sm font-medium text-[#0D2B4E]">
                {t('No matching files found', 'لم يتم العثور على ملفات مطابقة')}
              </div>
              <p className="text-xs text-[#4B5563] font-light max-w-sm mx-auto">
                {t(
                  'Adjust your search keywords or select "All Files" to view available documents.',
                  'قم بتعديل كلمات البحث أو اختر "كافة الملفات" لعرض المستندات المتاحة.'
                )}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {displayFiles.map((file) => {
                const isCopied = copiedId === file.id;
                return (
                  <div
                    key={file.id}
                    className="p-4 rounded-xl bg-[#F6F3ED] border border-[#0D2B4E]/10 hover:border-[#B8964A]/40 hover:shadow-md transition-all flex flex-col justify-between gap-3 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-white shadow-xs shrink-0 mt-0.5">
                        {getFileIcon(file.mimeType)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h5
                          className="text-xs font-semibold text-[#0D2B4E] leading-snug line-clamp-2 group-hover:text-[#B8964A] transition-colors"
                          title={file.name}
                        >
                          {file.name}
                        </h5>
                        <div className="text-[10px] text-[#4B5563] mt-1 flex items-center gap-2 font-mono">
                          {file.size && <span>{formatFileSize(file.size)}</span>}
                          {file.modifiedTime && (
                            <span>
                              {new Date(file.modifiedTime).toLocaleDateString(
                                isArabic ? 'ar-JO' : 'en-US',
                                { month: 'short', year: 'numeric' }
                              )}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-2.5 border-t border-[#0D2B4E]/5 flex items-center justify-between gap-2">
                      <button
                        onClick={() => handleCopyLink(file)}
                        className="inline-flex items-center gap-1 text-[11px] text-[#4B5563] hover:text-[#0D2B4E] transition-colors"
                        title={t('Copy Link', 'نسخ الرابط')}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600 font-semibold">
                              {t('Copied', 'تم النسخ')}
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>{t('Copy Link', 'نسخ')}</span>
                          </>
                        )}
                      </button>

                      <div className="flex items-center gap-1.5">
                        {file.webViewLink && (
                          <a
                            href={file.webViewLink}
                            target={file.webViewLink.startsWith('#') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#0D2B4E] text-white rounded text-[11px] font-semibold hover:bg-[#0A2540] transition-colors"
                          >
                            <span>
                              {file.webViewLink.startsWith('#')
                                ? t('View Section', 'عرض القسم')
                                : t('Open Resource', 'فتح الملف')}
                            </span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
